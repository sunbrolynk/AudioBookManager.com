#!/usr/bin/env bash
# Scans every commit on every ref for secrets, or only the staged changes with --staged.
set -euo pipefail

repo_root="$(git -C "$(dirname "${BASH_SOURCE[0]}")" rev-parse --show-toplevel)"
# A worktree's .git points into the main clone, so mount that too, both at their real paths.
git_dir="$(git -C "$repo_root" rev-parse --path-format=absolute --git-common-dir)"
scope=(--log-opts="--all")
if [[ "${1:-}" == "--staged" ]]; then
    scope=(--pre-commit --staged)
fi

# gitleaks logs git errors and still exits 0 with nothing scanned, so any ERR line fails the scan.
log="$(mktemp)"
trap 'rm -f "$log"' EXIT
set +e
docker run --rm --network none --read-only --cap-drop ALL \
  --security-opt no-new-privileges \
  --mount "type=bind,source=$repo_root,target=$repo_root,readonly" \
  --mount "type=bind,source=$git_dir,target=$git_dir,readonly" \
  -e GIT_CONFIG_COUNT=1 \
  -e GIT_CONFIG_KEY_0=safe.directory \
  -e GIT_CONFIG_VALUE_0='*' \
  zricethezav/gitleaks:v8.30.0@sha256:691af3c7c5a48b16f187ce3446d5f194838f91238f27270ed36eef6359a574d9 \
  git "$repo_root" "${scope[@]}" --redact=100 --no-banner --no-color 2>&1 | tee "$log"
status="${PIPESTATUS[0]}"
set -e
if [[ "$status" != 0 ]] || grep -q "ERR" "$log"; then
    echo "Secret scan found a leak or could not read the repository." >&2
    exit 1
fi
