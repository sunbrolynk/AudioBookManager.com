---
title: Troubleshooting
description: Fixes for the problems you are most likely to hit.
---

## Files left by an interrupted import (.abmstage)

An import first stages every file next to its final name, then swaps them in once all of them have arrived. If something fails, ABM puts back what it moved. If it cannot put a part back, that part stays in the book's folder as a hidden file ending in `.abmstage`. It can be the only copy, so ABM keeps it and the error names it.

While any `.abmstage` file is in a book's folder, imports into that folder stop with:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

To recover:

1. Find the `.abmstage` file named in the error.
2. Move it back into the download, or into the book's folder under its real name. Or delete it if you do not need it.
3. Retry the import.

## Everyone is asked to sign in behind a reverse proxy

Without `TRUSTED_PROXIES`, a request that carries forwarding headers is never treated as local, so it has to sign in. This is on purpose.

1. Set `TRUSTED_PROXIES` to your proxy's address, for example `172.20.0.5`. A proxy on the same host needs `127.0.0.1`.
2. Make the proxy send `X-Forwarded-For` or `X-Real-IP`. nginx proxy manager, Traefik and Caddy do by default.
3. Restart ABM.

The app log says which it is:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": add the proxy to `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": configure the proxy to send `X-Forwarded-For` or `X-Real-IP`.

The opposite case: a proxy that sends no forwarding headers looks like a local client, so everything through it skips sign-in. Set Authentication Required to Enabled.

## Changes are refused from the browser

Make sure the proxy passes the original `Host` header, or sends `X-Forwarded-Host`. See [Configuration](/configuration/#reverse-proxy).

## Covers disappear, or the page misbehaves behind a proxy

The Content-Security-Policy header only allows HTTPS cover images. Check the browser console for violations. Serve covers over HTTPS, or set `SECURITY_HEADERS_CSP_ENABLED=false`.

## A large request returns 413

Raise `MAX_REQUEST_BODY_BYTES`. A reverse proxy can also enforce a lower limit and answer 413 itself.

## The metadata source is unavailable

Adds, searches, refreshes and Discover need the metadata source. The message names it, for example "The metadata source is unavailable". Causes: the source is down or rate limiting, or your outbound connection is blocking it.

1. Check the [ABM status page](https://status.audiobookmanager.com) and the [Libex status page](https://status.libexdb.com) to see whether it is down for everyone.
2. Check **Settings > General > Proxy & VPN** and that the route is up.
3. Try again after a minute. A rate-limited source answers 503 with a 30 second retry hint.
4. You can still add and import books by hand meanwhile.

Background tasks that hit an outage fail with the reason, and send one notification per outage.

## A refresh changed a book's details

Title, description, authors, narrators and similar fields come from the metadata source, and a refresh applies what it now says. ABM has no way to edit them by hand. What you control is the cover (lockable), which files are written, tags, and whether refreshes write sidecars and tags. See [Your metadata, your control](/metadata/control/).

## A book shows Missing Files

The book was downloaded but its files are not where ABM looks. Check the mount and permissions, then run **Refresh & Scan**. A scan leaves a book untouched when its folder cannot be read, and the task shows as Partial with the reason.

## Imports stop with "Files left by an interrupted import"

See the `.abmstage` section above.

## Downloads finish but never import

Add a remote path mapping, or make ABM and the client see the folder at the same path. An unreadable subfolder blocks the whole download until its permissions are fixed. See [Download Clients](/settings/download-clients/).

## Docker cannot reach the metadata source or indexers

Check DNS and the outbound connection setting before anything else. In Docker, a direct connection only works if the container can reach the internet.

## Still stuck

Ask in the [ABM Discord](https://discord.gg/qeJRrM6AZ), [open an issue](https://github.com/sunbrolynk/AudioBook-Manager/issues), or email [support@audiobookmanager.com](mailto:support@audiobookmanager.com).
