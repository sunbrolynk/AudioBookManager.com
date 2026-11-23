#!/usr/bin/env bash
# Adds every published ABM release the Updates page is missing, for dev and for main.
# Each base gets one PR, for its newest missing release, with only public/releases.json and src/content/releases/<ver>.md, set to merge itself.
# Env: ABM_REPO (owner/name), ABM_TOKEN (read-only; may be empty once ABM is public), GH_TOKEN (this repo).
# Release text only ever lands in files, never in a command line.
set -euo pipefail

abm() { GH_TOKEN="${ABM_TOKEN:-$GH_TOKEN}" gh api "$@"; }
# A failed lookup must stop the run: an empty list reads as "every base is current" and closes the open release PRs.
tags=$(abm "repos/$ABM_REPO/releases?per_page=20" \
  --jq '.[] | select(.draft == false and .prerelease == false and (.tag_name | test("^v[0-9]+\\.[0-9]+\\.[0-9]+$"))) | .tag_name' | sort -V)
[ -n "$tags" ] || { echo "::error::no published ABM releases found in $ABM_REPO"; exit 1; }
# Only PRs this workflow opened in this repo; a fork PR can use the same branch name.
botlogin='(.author.login | test("^(app/)?github-actions$"))'
bot="select(.isCrossRepository == false and $botlogin)"
closing='Closing this one:'
# Six-hourly runs plus a merge take well under a day, so a release missing for longer is stuck.
stale_hours=24
overdue=()

git config user.name 'github-actions[bot]'
git config user.email '41898282+github-actions[bot]@users.noreply.github.com'

# build <base> <branch> <tag...>: one commit on top of the base with the given releases added.
build() {
  local base=$1 branch=$2 tag date; shift 2
  git switch --quiet --detach "origin/$base"
  git switch --quiet -C "$branch"
  for tag in "$@"; do
    abm "repos/$ABM_REPO/contents/CHANGELOG.md?ref=$tag" -H 'Accept: application/vnd.github.raw' > "$RUNNER_TEMP/CHANGELOG.md"
    # Its own statement, so a failed lookup stops the run instead of publishing an undated release.
    date=$(abm "repos/$ABM_REPO/releases/tags/$tag" --jq '.published_at')
    node scripts/build-releases.mjs "$RUNNER_TEMP/CHANGELOG.md" "$tag" --keep --date "$date"
  done
  git add public/releases.json src/content/releases
  git commit --quiet -m "add ${*#v} to the updates page"
  git push --quiet --force origin "$branch"
}

# close_others <base> <prefix> <branch to keep> <reason>: closes this script's other release PRs into the base.
close_others() {
  local base=$1 prefix=$2 keep=$3 reason=$4 olds old oldhead
  olds=$(gh pr list --limit 200 --base "$base" --state open --json number,headRefName,isCrossRepository,author \
    --jq ".[] | $bot | select(.headRefName | test(\"^${prefix}v[0-9.]+\$\")) | \"\(.number) \(.headRefName)\"")
  while read -r old oldhead; do
    [ -n "$old" ] && [ "$oldhead" != "$keep" ] || continue
    gh pr close "$old" --delete-branch --comment "$closing $reason."
  done <<<"$olds"
}

# sync_base <base branch> <PR branch prefix>
sync_base() {
  local base=$1 prefix=$2 tag last branch published pr head closed state new=()
  # Each release is looked up on its own, so a backport older than the newest entry still counts as missing.
  for tag in $tags; do
    git cat-file -e "origin/$base:src/content/releases/${tag#v}.md" 2>/dev/null || new+=("$tag")
  done
  if [ ${#new[@]} -eq 0 ]; then
    close_others "$base" "$prefix" '' "$base already has these releases"
    echo "$base has every published release"; return 0
  fi
  last=${new[-1]}
  branch="$prefix$last"
  # Every missing release is aged, so a fresh backport can't hide an older one that is stuck.
  for tag in "${new[@]}"; do
    published=$(abm "repos/$ABM_REPO/releases/tags/$tag" --jq '.published_at')
    if (( $(date +%s) - $(date -d "$published" +%s) > stale_hours * 3600 )); then
      overdue+=("$base $tag $published")
    fi
  done

  head="origin/$branch"
  pr=$(gh pr list --limit 200 --head "$branch" --state open --json number,isCrossRepository,author --jq "[.[] | $bot][0].number // empty")
  if [ -z "$pr" ]; then
    # A release PR closed by hand stays closed; one this script closed itself does not count.
    closed=$(gh pr list --limit 200 --head "$branch" --state all --json number,isCrossRepository,author,comments \
      --jq ".[] | $bot | select(any(.comments[]; $botlogin and (.body | startswith(\"$closing\"))) | not) | .number")
    if [ -n "$closed" ]; then
      echo "$branch already had a pull request"; return 0
    fi
    build "$base" "$branch" "${new[@]}"
    head=HEAD
    pr=$(gh pr create --base "$base" --head "$branch" \
      --title "add ${new[*]#v} to the updates page" \
      --body "Release notes taken from the ABM changelog at the release tag. Built by scripts/sync-releases.sh." )
  elif ! git merge-base --is-ancestor "origin/$base" "origin/$branch"; then
    # The base moved since the PR opened, and the base must be up to date for the PR to merge.
    build "$base" "$branch" "${new[@]}"
    head=HEAD
    gh pr edit "$pr" --title "add ${new[*]#v} to the updates page"
  fi
  # Only now that the newest PR is in place, so a failure above never leaves a release without one.
  close_others "$base" "$prefix" "$branch" "the pull request for ${last#v} includes these releases"

  if [ "$base" = main ]; then
    # Checks from a dispatched run don't count for a PR, so site-checks reports the result as a commit status.
    # A PR opened with the workflow token starts no checks of its own, so run them unless the head already has a result.
    # A failed status read only costs an extra check run, so it is not fatal.
    state=$(gh api "repos/{owner}/{repo}/commits/$(git rev-parse "$head")/status" --jq '[.statuses[] | select(.context == "Site validation")][0].state // ""') || state=''
    [ "$state" = success ] || gh workflow run site-checks.yml --ref "$branch"
    gh pr merge "$pr" --squash --auto || echo "::warning::could not turn on auto-merge for $pr; gh's error is above"
  else
    # dev has no required checks, so there is nothing for auto-merge to wait on.
    gh pr merge "$pr" --squash --auto || gh pr merge "$pr" --squash
  fi
}

git fetch --quiet origin dev main '+refs/heads/releases/*:refs/remotes/origin/releases/*'
sync_base dev releases/
sync_base main releases/main/

# Fails the run, which GitHub emails about, instead of leaving the Updates page behind with a green run.
# The branches are read again first, so a release this run merged doesn't count.
[ ${#overdue[@]} -eq 0 ] || git fetch --quiet origin dev main
failed=0
for o in "${overdue[@]}"; do
  read -r base tag published <<<"$o"
  git cat-file -e "origin/$base:src/content/releases/${tag#v}.md" 2>/dev/null && continue
  echo "::error::$base is missing ${tag#v}, which came out at $published, over $stale_hours hours ago"
  failed=1
done
exit "$failed"
