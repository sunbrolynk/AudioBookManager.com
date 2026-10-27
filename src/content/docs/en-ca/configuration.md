---
title: Environment variables
description: Environment variables, local networks and reverse proxy basics.
---

Most settings live in the web UI under **Settings**. These are set in the environment.

## Environment variables

| Variable | Default | What it does |
|---|---|---|
| `PORT` | `5173` | Web interface port. |
| `TIMEZONE` or `TZ` | `UTC` | Your local timezone, for example `America/New_York`. `TZ` works as is, and if both are set, `TIMEZONE` wins. A blank value counts as not set, and an invalid zone falls back to `UTC` with a warning in the log. Every time in the app follows this zone. |
| `LOCAL_NETWORKS` | empty | Extra CIDR networks that skip sign-in. Comma-separated. |
| `TRUSTED_PROXIES` | empty | CIDR networks of reverse proxies trusted to set `X-Forwarded-For` and `X-Real-IP`. |
| `APP_SECRET` | auto | Encryption root for stored credentials. Generated to `/config/app_secret` on first run when unset. Set it to keep the key off the config disk. |
| `DOCS_ENABLED` | `true` | Serves the API docs at `/api/docs`, `/api/redoc` and `/api/openapi.json`. `false` removes them. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Sends a Content-Security-Policy header that limits the UI to ABM's own scripts, styles and API, plus HTTPS cover images. `false` drops it. Framing stays blocked either way. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Largest request body an endpoint accepts (10 MiB). Larger gets HTTP 413. Backup restore and cover upload have their own limits. |

## Local networks

Loopback, the private ranges (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), link-local and IPv6 unique-local addresses count as local already. With **Authentication Required** set to the local-address mode, a request from one of them skips sign-in. To add more, list them:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Reverse proxy

Behind nginx, Traefik or similar, set `TRUSTED_PROXIES` to the proxy's address:

```
TRUSTED_PROXIES=172.20.0.5
```

- Keep it as narrow as you can. Use the proxy's own address, not a broad Docker subnet.
- A proxy on the same host needs `TRUSTED_PROXIES=127.0.0.1`.
- Only the client the proxy names in `X-Forwarded-For` or `X-Real-IP` counts as the client.
- Pass the original `Host` header through (nginx: `proxy_set_header Host $host;`) or send `X-Forwarded-Host`. A browser request that changes something is refused unless its origin matches the address ABM is reached at, or a domain in the CORS allowed domains.
- A proxy that sends no forwarding headers looks like a local client. Set Authentication Required to Enabled if you run one.

If sign-in is being asked for when it should not be, see [Troubleshooting](/en-ca/troubleshooting/).

## More

- Sign-in modes, API keys and the content security policy: [Security and sign-in](/en-ca/settings/security/).
- A full proxy walkthrough: [Reverse proxy](/en-ca/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (default 500 MiB) caps backup restore uploads.
- Everything else is under **Settings** in the app. See [Settings overview](/en-ca/settings/media-management/).
