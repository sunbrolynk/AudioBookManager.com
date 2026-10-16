#!/usr/bin/env bash
set -euo pipefail

repo_root="$(git -C "$(dirname "${BASH_SOURCE[0]}")" rev-parse --show-toplevel)"
cd "$repo_root"

if git config --get core.hooksPath >/dev/null; then
    echo "Custom core.hooksPath detected. Review that configuration before installing." >&2
    exit 1
fi

hook="$(git rev-parse --path-format=absolute --git-path hooks/pre-push)"

if [[ -e "$hook" || -L "$hook" ]]; then
    if [[ -L "$hook" ]] || ! cmp -s scripts/pre-push "$hook"; then
        echo "An existing, different pre-push hook needs manual review: $hook" >&2
        exit 1
    fi
fi

install -m 0755 scripts/pre-push "$hook"
echo "Installed the website pre-push checks."
