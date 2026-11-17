---
title: Reverse proxy
description: Putting ABM behind nginx, Traefik or Caddy without breaking sign-in.
---

:::caution[Not recommended]
Putting ABM on the internet, through a reverse proxy or a forwarded port, is not recommended, the same advice the Servarr apps give. To reach it from outside, use a VPN such as WireGuard or Tailscale instead. ABM is built to be safe behind a proxy, but there is no guarantee of security once it's public, and the risk is yours. If you do it anyway, set **Authentication Required** to **Enabled** and keep ABM up to date. This guide is for people who do it anyway.
:::

Three settings matter, plus the paths to pass. Get them right and sign-in, the websocket and saves all work.

## 1. Tell ABM who the proxy is

Set `TRUSTED_PROXIES` to the proxy's address, as narrowly as you can:

```
TRUSTED_PROXIES=172.20.0.5
```

A proxy on the same host needs `127.0.0.1`. ABM then trusts the client address your proxy forwards in `X-Forwarded-For` or `X-Real-IP`. Without this, any request carrying forwarding headers has to sign in. That is deliberate.

## How the client address is read

`X-Forwarded-For` is read from right to left. Each proxy appends the address it saw, so the leftmost entry is whatever the client sent and is never trusted. ABM skips entries that are in `TRUSTED_PROXIES` and takes the first one that isn't as the client. That is why `TRUSTED_PROXIES` must be narrow: anything inside the range can add an entry to the chain. `X-Forwarded-Host` is only believed from an address in `TRUSTED_PROXIES` too.

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

Pass the `Sec-WebSocket-Protocol` header through too.

If your proxy rewrites `Host`, as nginx does by default with `proxy_pass`, live updates won't connect and the web interface can't fetch its key. Either keep `proxy_set_header Host $host;` from the example above, or add ABM's public address to **CORS Allowed Domains** in **Settings > General > Security** and restart ABM. This was already needed before 0.18.

## 3. Decide who signs in

- **Authentication Required: Enabled** makes everyone sign in. Safest if the proxy is public.
- **Disabled for Local Addresses** skips sign-in for clients ABM sees as local. Through a trusted proxy that means the client the proxy names.
- A proxy that sends no forwarding headers looks local at first. ABM notices, shows a Reverse Proxy warning on System > Status and makes that address sign in, but make the proxy send `X-Forwarded-For`, or choose Enabled.

## Example configs

Each of these passes every path, including `/initialize.json`, and handles the websocket. Swap in your own domain and container name, and set `TRUSTED_PROXIES` to the proxy's address.

### nginx

```
server {
    listen 443 ssl;
    server_name abm.example.com;

    location / {
        proxy_pass http://172.20.0.2:5173;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
    }
}
```

### Nginx Proxy Manager

```
Scheme:               http
Forward Hostname/IP:  audiobook-manager
Forward Port:         5173
Websockets Support:   on
```

### Traefik

```
labels:
  - traefik.enable=true
  - traefik.http.routers.abm.rule=Host(`abm.example.com`)
  - traefik.http.routers.abm.entrypoints=websecure
  - traefik.http.routers.abm.tls.certresolver=letsencrypt
  - traefik.http.services.abm.loadbalancer.server.port=5173
```

Traefik passes websockets without any extra setting.

### Caddy

```
abm.example.com {
    reverse_proxy audiobook-manager:5173
}
```

Caddy passes websockets and the original `Host` on its own.

## Sub-folder and domain

To serve under `/abm`, set **URL Base** in General to `/abm` and restart. Put your public address in **Application URL**.

If saves fail with `cross_origin_rejected`, the browser's origin does not match. Fix the Host header first. Otherwise add your domain to **CORS Allowed Domains** in Security and restart.

## Body size

If large uploads fail with 413, check the proxy's own limit as well as `MAX_REQUEST_BODY_BYTES`.

## What the log says

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": add it.
- "... is in TRUSTED_PROXIES but didn't name a client address": make the proxy send `X-Forwarded-For` or `X-Real-IP`.

## Troubleshooting

A blank page, or a "Could not load" message that says the reverse proxy must pass `/initialize.json` (0.19.1 and later report it), means the proxy isn't passing `/initialize.json` to ABM. Pass it, along with the other paths above. Live updates that never connect usually mean the websocket upgrade or the `Sec-WebSocket-Protocol` header isn't getting through.

See also [Security and sign-in](/en-ca/settings/security/).
