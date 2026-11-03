#!/usr/bin/env bash
# Opens a PR into dev that adds every ABM release newer than the newest one on the Updates page.
# Env: ABM_REPO (owner/name), ABM_TOKEN (read-only; may be empty once ABM is public), GH_TOKEN (this repo).
# Release text only ever lands in files, never in a command line.
set -euo pipefail

abm() { GH_TOKEN="${ABM_TOKEN:-$GH_TOKEN}" gh api "$@"; }
valid='^v[0-9]+\.[0-9]+\.[0-9]+$'

newest=$(ls src/content/releases | sed 's/\.md$//' | sort -V | tail -1)
tags=$(abm "repos/$ABM_REPO/releases?per_page=20" --jq '.[] | select(.draft == false and .prerelease == false) | .tag_name' | grep -E "$valid" | sort -V || true)

new=()
for tag in $tags; do
  [ "$(printf '%s\n%s\n' "${tag#v}" "$newest" | sort -V | tail -1)" = "${tag#v}" ] && [ "${tag#v}" != "$newest" ] && new+=("$tag")
done
[ ${#new[@]} -gt 0 ] || { echo "Updates page is current at $newest"; exit 0; }

last=${new[-1]}
branch="releases/$last"
if [ -n "$(gh pr list --head "$branch" --state all --json number --jq '.[].number')" ]; then
  echo "$branch already has a pull request"; exit 0
fi

git switch -c "$branch"
for tag in "${new[@]}"; do
  abm "repos/$ABM_REPO/contents/CHANGELOG.md?ref=$tag" -H 'Accept: application/vnd.github.raw' > "$RUNNER_TEMP/CHANGELOG.md"
  published=$(abm "repos/$ABM_REPO/releases/tags/$tag" --jq '.published_at[:10]')
  node scripts/build-releases.mjs "$RUNNER_TEMP/CHANGELOG.md" "$tag" --keep --date "$published"
done

git config user.name 'github-actions[bot]'
git config user.email '41898282+github-actions[bot]@users.noreply.github.com'
git add public/releases.json src/content/releases
git commit -m "add ${new[*]#v} to the updates page"
git push origin "$branch"
gh pr create --base dev --head "$branch" \
  --title "add ${new[*]#v} to the updates page" \
  --body "Release notes taken from the ABM changelog at the release tag. Built by scripts/sync-releases.sh."
