export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;
    const headers = {
      "x-nextaura-origin": "cloudflare-direct",
      "x-content-type-options": "nosniff",
      "referrer-policy": "strict-origin-when-cross-origin",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          ...headers,
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET,HEAD,OPTIONS",
          "access-control-allow-headers": "content-type",
        },
      });
    }

    if (
      url.pathname === "/api/health" ||
      url.pathname === "/health" ||
      url.pathname === "/api/status"
    ) {
      return new Response(
        JSON.stringify({
          ok: true,
          status: "online",
          host,
          public_url: `https://${host}`,
          origin: "cloudflare-direct",
          service: "gooseman-skyfall",
          time: new Date().toISOString(),
        }),
        {
          headers: {
            ...headers,
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store",
          },
        },
      );
    }

    if (url.pathname.startsWith("/api/")) {
      return new Response(
        JSON.stringify({
          ok: false,
          origin: "cloudflare-direct",
          error: "This app is static on Cloudflare. There is no backend on this hostname.",
        }),
        {
          status: 503,
          headers: {
            ...headers,
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store",
          },
        },
      );
    }

    let assetRequest = request;
    if (
      request.method === "GET" &&
      !url.pathname.includes(".") &&
      url.pathname !== "/"
    ) {
      assetRequest = new Request(new URL("/index.html", url.origin), request);
    }

    const res = await env.ASSETS.fetch(assetRequest);
    const out = new Headers(res.headers);
    out.set("x-nextaura-origin", "cloudflare-direct");
    out.set("x-content-type-options", "nosniff");
    out.set("referrer-policy", "strict-origin-when-cross-origin");

    const ct = (res.headers.get("content-type") || "").toLowerCase();
    if (
      ct.includes("text/html") ||
      ct.includes("javascript") ||
      ct.includes("text/css")
    ) {
      out.set("cache-control", "no-store, no-cache, must-revalidate");
    }

    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers: out,
    });
  },
};
