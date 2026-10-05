#!/usr/bin/env bash
# Builds the game and deploys it to app15.nextaura.us.
# Old hashed bundles in site/assets are kept on purpose: Cloudflare's edge can serve a
# slightly stale index.html for a minute after a deploy, and it must still find its script.
set -euo pipefail
export PATH="$HOME/.local/node/node-v22.14.0-darwin-arm64/bin:$PATH"
here="$(cd "$(dirname "$0")" && pwd)"
game="$here/../gooseman-skyfall/game"

(cd "$game" && npm run build)
mkdir -p "$here/site/assets"
cp "$game"/dist/index.html "$game"/dist/favicon.svg "$here/site/"
cp "$game"/dist/assets/* "$here/site/assets/"
new_js="$(basename "$(ls "$game"/dist/assets/index-*.js)")"
# Point every older bundle name at the newest code so stale pages still get the latest game.
for old in "$here"/site/assets/index-*.js; do
  [ "$(basename "$old")" = "$new_js" ] || cp "$game/dist/assets/$new_js" "$old"
done
cd "$here" && env -u CF_API_TOKEN -u CLOUDFLARE_API_TOKEN npx wrangler deploy --env=""
