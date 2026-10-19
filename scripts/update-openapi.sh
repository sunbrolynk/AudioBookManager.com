#!/usr/bin/env bash
# Regenerates public/api-reference/openapi.json from an ABM checkout, using ABM's own
# scripts/generate-openapi-schema.py on a clean export of one ref.
# Usage: bash scripts/update-openapi.sh [ref]          (default ref: main)
#        bash scripts/update-openapi.sh [ref] --check  (fail if the committed spec is stale)
# ABM_REPO points at the checkout (default ~/audiobook-manager); its .venv supplies Python.
set -euo pipefail

ref="${1:-main}"
mode="${2:-}"
abm="${ABM_REPO:-$HOME/audiobook-manager}"
python="$abm/.venv/bin/python"
repo_root="$(git -C "$(dirname "${BASH_SOURCE[0]}")" rev-parse --show-toplevel)"
dest="$repo_root/public/api-reference/openapi.json"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

[[ -x "$python" ]] || { echo "no Python at $python; set ABM_REPO to an ABM checkout with a .venv" >&2; exit 1; }
mkdir -p "$work/src" "$work/config"
git -C "$abm" archive "$ref" | tar -x -C "$work/src"

# Importing the app touches its config folder, so it gets a throwaway one, never a real install's.
cfg="$work/config"
(cd "$work/src" && env -i HOME="$cfg" PATH=/usr/bin:/bin PYTHONPATH="$work/src" \
    CONFIG_PATH="$cfg" DATABASE_URL="sqlite:///$cfg/abm.db" LOGS_PATH="$cfg/logs" \
    COVERS_PATH="$cfg/covers" TEMP_PATH="$cfg/tmp" \
    MEDIA_RECYCLE_PATH="$cfg/recycle/media" CONVERSION_RECYCLE_PATH="$cfg/recycle/conversions" \
    "$python" scripts/generate-openapi-schema.py > "$work/openapi.json")

if [[ "$mode" == "--check" ]]; then
    if ! cmp -s "$work/openapi.json" "$dest"; then
        echo "public/api-reference/openapi.json is stale for ABM $ref; run scripts/update-openapi.sh $ref" >&2
        exit 1
    fi
    echo "openapi.json matches ABM $ref"
    exit 0
fi
cp "$work/openapi.json" "$dest"
echo "openapi.json written from ABM $ref ($(git -C "$abm" rev-parse --short "$ref"))"
