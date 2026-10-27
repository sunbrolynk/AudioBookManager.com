---
title: Reverse proxy
description: Putting ABM behind nginx, Traefik or Caddy without breaking sign-in.
---

:::caution[Not recommended]
Putting ABM on the internet, through a reverse proxy or a forwarded port, is not recommended, the same advice the Servarr apps give. To reach it from outside, use a VPN such as WireGuard or Tailscale instead. ABM is built to be safe behind a proxy, but there is no guarantee of security once it's public, and the risk is yours. If you do it anyway, set **Authentication Required** to **Enabled** and keep ABM up to date.
:::

Three settings matter, plus the paths to pass. Get them right and sign-in, the websocket and saves all work.

## 1. Tell ABM who the proxy is

Set `TRUSTED_PROXIES` to the proxy's address, as narrowly as you can:

```
TRUSTED_PROXIES=172.20.0.5
```

A proxy on the same host needs `127.0.0.1`. ABM then trusts the client address your proxy forwards in `X-Forwarded-For` or `X-Real-IP`. Without this, any request carrying forwarding headers has to sign in. That is deliberate.

## 2. Pass the headers

Forward the original `Host`, or send `X-Forwarded-Host`. nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik and Caddy send forwarding headers by default. ABM uses a websocket for live updates, so the proxy must pass upgrade requests.

Pass these paths to ABM as well as `/api`: `/initialize.json`, `/media-cover/`, `/backup/` and `/logfile`. The web app gets its API key from `/initialize.json`, and covers, backups and log downloads are served from the other three.

## 3. Decide who signs in

- **Authentication Required: Enabled** makes everyone sign in. Safest if the proxy is public.
- **Disabled for Local Addresses** skips sign-in for clients ABM sees as local. Through a trusted proxy that means the client the proxy names.
- A proxy that sends no forwarding headers makes everything look local. Choose Enabled.

## Sub-folder and domain

To serve under `/abm`, set **URL Base** in General to `/abm` and restart. Put your public address in **Application URL**.

If saves fail with `cross_origin_rejected`, the browser's origin does not match. Fix the Host header first. Otherwise add your domain to **CORS Allowed Domains** in Security and restart.

## Body size

If large uploads fail with 413, check the proxy's own limit as well as `MAX_REQUEST_BODY_BYTES`.

## What the log says

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": add it.
- "... is in TRUSTED_PROXIES but didn't name a client address": make the proxy send `X-Forwarded-For` or `X-Real-IP`.

See also [Security and sign-in](/en-au/settings/security/).
