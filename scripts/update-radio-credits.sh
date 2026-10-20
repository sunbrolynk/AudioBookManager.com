#!/usr/bin/env bash
# Refreshes src/data/radio-credits.json from the abm-radio catalog, using its own export script
# (which refuses a catalog that fails validation). Usage: bash scripts/update-radio-credits.sh [ref]
# ref defaults to origin/dev. ABM_RADIO_REPO points at a clone (default ~/abm-radio).
set -euo pipefail

ref="${1:-origin/dev}"
radio="${ABM_RADIO_REPO:-$HOME/abm-radio}"
repo_root="$(git -C "$(dirname "${BASH_SOURCE[0]}")" rev-parse --show-toplevel)"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

git -C "$radio" fetch -q origin
git -C "$radio" archive "$ref" | tar -x -C "$work"
(cd "$work" && python3 scripts/export_credits.py >/dev/null)
cp "$work/out/credits.json" "$repo_root/src/data/radio-credits.json"
echo "credits: $(python3 -c 'import json,sys;print(len(json.load(open(sys.argv[1]))))' "$repo_root/src/data/radio-credits.json") tracks from $ref"
