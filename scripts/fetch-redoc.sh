#!/usr/bin/env bash
# Fetches the ReDoc bundle the API reference page runs, from the npm registry, pinned by version
# and checksum, with the one off-site request it makes (Redocly's logo) swapped for a blank pixel.
# Usage: bash scripts/fetch-redoc.sh
#
# Bumping the version: change it, run this and watch it fail on both checksums, take the new
# integrity from `npm view redoc@<version> dist.integrity`, re-read the bundle for hosts it loads
# by itself (src=, url(), fetch, new Image), then update BUNDLE_SHA256 and PATCHED_SHA256 here and
# PATCHED_SHA256 in scripts/check-api-reference.mjs.
set -euo pipefail

VERSION="2.5.3"
TARBALL_INTEGRITY="sha512-bBbat+Sx6xKWdyoCGTtA0BWeTEW9Vs4VnEja7q7ZLOk4IM7cHQLrf+kDxWF6dKeKxT8kOBnoy/OsNXCeLttpyQ=="
BUNDLE_SHA256="1320f442151c57c447d3b70c7ffc6c4f86d08464020fe34c8cc5d3164e9944f0"
PATCHED_SHA256="488ad6f335c47d69afe969ab3c9a906d5d2b91695d6b3e0be63ab76f63c94021"
LOGO_URL="https://cdn.redoc.ly/redoc/logo-mini.svg"
BLANK_PIXEL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

repo_root="$(git -C "$(dirname "${BASH_SOURCE[0]}")" rev-parse --show-toplevel)"
dest="$repo_root/public/api-reference/redoc.standalone.js"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

curl -sfL "https://registry.npmjs.org/redoc/-/redoc-${VERSION}.tgz" -o "$work/redoc.tgz"
got="sha512-$(openssl dgst -sha512 -binary "$work/redoc.tgz" | base64 -w0)"
[[ "$got" == "$TARBALL_INTEGRITY" ]] || { echo "redoc ${VERSION} tarball integrity mismatch: $got" >&2; exit 1; }

tar -xzf "$work/redoc.tgz" -C "$work" package/bundles/redoc.standalone.js
bundle="$work/package/bundles/redoc.standalone.js"
got="$(sha256sum "$bundle" | cut -d' ' -f1)"
[[ "$got" == "$BUNDLE_SHA256" ]] || { echo "redoc ${VERSION} bundle checksum mismatch: $got" >&2; exit 1; }

# The sidebar footer loads Redocly's logo from their CDN, which would hand them every visitor's
# address. The link and its "API docs by Redocly" text stay.
count="$(grep -F -o -- "$LOGO_URL" "$bundle" | wc -l | tr -d '[:space:]')"
[[ "$count" == 1 ]] || { echo "expected 1 logo reference in the bundle, found $count" >&2; exit 1; }
sed "s|${LOGO_URL}|${BLANK_PIXEL}|g" "$bundle" > "$work/patched.js"
if grep -q -F "cdn.redoc.ly" "$work/patched.js"; then
    echo "cdn.redoc.ly is still referenced after the logo patch" >&2
    exit 1
fi

got="$(sha256sum "$work/patched.js" | cut -d' ' -f1)"
[[ "$got" == "$PATCHED_SHA256" ]] || { echo "patched bundle checksum mismatch: $got" >&2; exit 1; }
mkdir -p "$(dirname "$dest")"
cp "$work/patched.js" "$dest"
echo "redoc ${VERSION} written to public/api-reference/redoc.standalone.js"
