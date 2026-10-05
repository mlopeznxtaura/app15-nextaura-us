#!/usr/bin/env bash
# Builds the game and deploys it to app15.nextaura.us.
# The game builds to stable names (assets/game.js, assets/index.css). Older hashed bundles
# are kept and overwritten with the newest code, so any stale cached page still loads.
set -euo pipefail
export PATH="$HOME/.local/node/node-v22.14.0-darwin-arm64/bin:$PATH"
here="$(cd "$(dirname "$0")" && pwd)"
game="$here/../gooseman-skyfall/game"

(cd "$game" && npm run build)
mkdir -p "$here/site/assets"
cp "$game"/dist/index.html "$game"/dist/favicon.svg "$here/site/"
cp "$game"/dist/assets/* "$here/site/assets/"
for old in "$here"/site/assets/index-*.js; do [ -e "$old" ] && cp "$game/dist/assets/game.js" "$old"; done
for old in "$here"/site/assets/index-*.css; do [ -e "$old" ] && cp "$game/dist/assets/index.css" "$old"; done
cd "$here" && env -u CF_API_TOKEN -u CLOUDFLARE_API_TOKEN npx wrangler deploy --env=""
