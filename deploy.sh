#!/usr/bin/env bash
# Builds Gooseman Sky Heights from a CLEAN checkout of a pushed git tag and deploys it to app15.nextaura.us.
# Usage: ./deploy.sh [tag]   (default: good+23)
# Never builds from a local working tree, so the live site always matches a tag on origin.
# The game builds to stable names (assets/game.js, assets/index.css). Older hashed bundles
# are kept and overwritten with the newest code, so any stale cached page still loads.
# Rollback: npx wrangler rollback <version-id>   (version IDs: npx wrangler deployments list)
set -euo pipefail
export PATH="$HOME/.local/node/node-v22.14.0-darwin-arm64/bin:$PATH"
here="$(cd "$(dirname "$0")" && pwd)"
tag="${1:-good+23}"
repo="https://github.com/mlopeznxtaura/gooseman-skyheights-iphone.git"
work="$(mktemp -d "${TMPDIR:-/tmp}/app15-build.XXXXXX")"
trap 'rm -rf "$work"' EXIT

git clone --quiet --depth 1 --branch "$tag" "$repo" "$work/src"
commit="$(git -C "$work/src" rev-parse --short HEAD)"
game="$work/src/game"
(cd "$game" && npm ci --no-audit --no-fund && npm run build)

mkdir -p "$here/site/assets" "$here/site/models"
cp "$game"/dist/models/*.glb "$here/site/models/"
cp "$game"/dist/index.html "$game"/dist/favicon.svg "$here/site/"
cp "$game"/dist/assets/* "$here/site/assets/"
for old in "$here"/site/assets/index-*.js; do [ -e "$old" ] && cp "$game/dist/assets/game.js" "$old"; done
for old in "$here"/site/assets/index-*.css; do [ -e "$old" ] && cp "$game/dist/assets/index.css" "$old"; done
echo "$tag $commit" > "$here/site/build.txt"
cd "$here" && env -u CF_API_TOKEN -u CLOUDFLARE_API_TOKEN npx wrangler deploy --env="" --tag "$tag" --message "gooseman-skyheights-iphone $tag ($commit)"
