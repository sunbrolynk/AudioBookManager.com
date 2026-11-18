#!/usr/bin/env bash
# Adds every ABM release newer than the newest one on the Updates page, for dev and for main.
# Each base gets its own PR with only public/releases.json and src/content/releases/<ver>.md, and the PR is set to merge itself.
# Env: ABM_REPO (owner/name), ABM_TOKEN (read-only; may be empty once ABM is public), GH_TOKEN (this repo).
# Release text only ever lands in files, never in a command line.
set -euo pipefail

abm() { GH_TOKEN="${ABM_TOKEN:-$GH_TOKEN}" gh api "$@"; }
valid='^v[0-9]+\.[0-9]+\.[0-9]+$'
tags=$(abm "repos/$ABM_REPO/releases?per_page=20" --jq '.[] | select(.draft == false and .prerelease == false) | .tag_name' | grep -E "$valid" | sort -V || true)

git config user.name 'github-actions[bot]'
git config user.email '41898282+github-actions[bot]@users.noreply.github.com'

# sync_base <base branch> <PR branch prefix>
sync_base() {
  local base=$1 prefix=$2 newest tag last branch pr new=()
  newest=$(git ls-tree --name-only "origin/$base" src/content/releases/ | sed 's|.*/||; s/\.md$//' | sort -V | tail -1)
  for tag in $tags; do
    [ "$(printf '%s\n%s\n' "${tag#v}" "$newest" | sort -V | tail -1)" = "${tag#v}" ] && [ "${tag#v}" != "$newest" ] && new+=("$tag")
  done
  [ ${#new[@]} -gt 0 ] || { echo "$base is current at $newest"; return 0; }

  last=${new[-1]}
  branch="$prefix$last"
  pr=$(gh pr list --head "$branch" --state open --json number --jq '.[0].number // empty')
  if [ -z "$pr" ]; then
    if [ -n "$(gh pr list --head "$branch" --state all --json number --jq '.[].number')" ]; then
      echo "$branch already had a pull request"; return 0
    fi
    git switch --detach "origin/$base"
    git switch -c "$branch"
    for tag in "${new[@]}"; do
      abm "repos/$ABM_REPO/contents/CHANGELOG.md?ref=$tag" -H 'Accept: application/vnd.github.raw' > "$RUNNER_TEMP/CHANGELOG.md"
      node scripts/build-releases.mjs "$RUNNER_TEMP/CHANGELOG.md" "$tag" --keep --date "$(abm "repos/$ABM_REPO/releases/tags/$tag" --jq '.published_at[:10]')"
    done
    git add public/releases.json src/content/releases
    git commit -m "add ${new[*]#v} to the updates page"
    git push origin "$branch"
    pr=$(gh pr create --base "$base" --head "$branch" \
      --title "add ${new[*]#v} to the updates page" \
      --body "Release notes taken from the ABM changelog at the release tag. Built by scripts/sync-releases.sh." )
  fi

  if [ "$base" = main ]; then
    # A PR opened with the workflow token starts no workflows, so run the required check on the branch.
    gh workflow run site-checks.yml --ref "$branch"
    gh pr merge "$pr" --squash --auto || echo "::warning::auto-merge is off; turn on Allow auto-merge in the repository settings"
  else
    # dev has no required checks, so there is nothing for auto-merge to wait on.
    gh pr merge "$pr" --squash --auto || gh pr merge "$pr" --squash
  fi
}

git fetch --quiet origin dev main
sync_base dev releases/
sync_base main releases/main/
