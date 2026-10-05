# app15.nextaura.us — Gooseman: Skyfall

Static Cloudflare Worker deployment for [Gooseman: Skyfall](https://github.com/mlopeznxtaura/gooseman-skyfall).

## Deploy

```bash
npm install
env -u CF_API_TOKEN -u CLOUDFLARE_API_TOKEN npx wrangler deploy
```

Staging (workers.dev):

```bash
npx wrangler deploy --env staging
```

## Health

`GET https://app15.nextaura.us/api/health`
