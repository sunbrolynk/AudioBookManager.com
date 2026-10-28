---
title: Security and sign-in
description: Authentication modes, API keys, trusted proxies, local networks and the content security policy.
---

The **Security** section of **Settings > General** controls who can use ABM and how.

## Authentication

| Setting | Default | Choices |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Leave the password blank to keep the current one |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | empty | Extra CIDR ranges whose clients skip sign-in |
| CORS Allowed Domains | empty | Other origins allowed to call the API from a browser. Needs a restart |

The two modes of **Authentication Required** you will use:

- **Enabled**: everyone signs in, your LAN included.
- **Disabled for Local Addresses** (stored as `local_disabled`): a request from a local address skips sign-in. Loopback, the private ranges, link-local and IPv6 unique-local count as local. **Local Networks** adds more and never replaces them.

These settings, and the local-address bypass, decide who gets the web interface. They never open the API. Every API call needs the API key, signed in or not.

On a fresh install, requests are refused until setup finishes. Setup preselects **Enabled**, so a new install requires sign-in from every address. An existing install keeps its setting.

## Reverse proxies

Behind a proxy, set `TRUSTED_PROXIES` so ABM knows which forwarding headers to believe. A request that carries forwarding headers from an address not in that list is never local and must sign in. This is on purpose. See [Reverse proxy](/en-ca/guides/reverse-proxy/).

A proxy that sends no forwarding headers looks like a local client. If you run one, set Authentication Required to Enabled.

## Password confirmation

Some changes ask for your current password again: saving Security settings and regenerating the API key. A wrong password counts as a failed sign-in in the security log. If no password is set yet, none is asked.

## API key

The key is shown on this page with no password prompt, because anyone who can open the web interface already gets it for the web app. **Regenerate API Key** still asks for your password. It makes a new key and invalidates the old one immediately, and open pages reconnect with the new key. The key cannot be typed in.

If the stored key cannot be decrypted (the app secret changed), ABM replaces it with a new one at startup. If you put the original `APP_SECRET` back, the original key returns on the next start, and the key you used in between stops working.

Send it as `X-Api-Key` or an `apikey` parameter. Every API call needs it, including from your own network. A key that is not plain ASCII gets a 401. Rejected keys are written to the security log with the caller's address, so fail2ban can act on them. See [API](/en-ca/system/api/).

## Browser writes

The sign-in and first-run setup requests are refused with a 403 when they carry another site's `Origin` or `Referer`. Scripts that send neither header still work.

A browser request that changes something is refused with `cross_origin_rejected` unless its origin matches the address ABM is reached at, a trusted proxy's forwarded host, or a CORS allowed domain. API-key requests are not affected.

## Content security policy

ABM sends a Content-Security-Policy header unless `SECURITY_HEADERS_CSP_ENABLED=false`. It limits the UI to ABM's own scripts and API, and images to ABM or HTTPS. Covers served over plain HTTP are blocked, and ABM cannot be shown in an iframe either way. The API docs pages get a looser policy so they can load from a CDN.

## Failed sign-ins

There is no lockout. Failed attempts are logged, folded per address in the Activity Log, and written line by line to the security log for tools like fail2ban.

## Secrets

Passwords and keys that ABM stores for indexers, clients and connections are encrypted with an app secret. Set `APP_SECRET` to keep the key off the config disk. If neither exists, ABM generates `/config/app_secret`. Proxy and export-target passwords are stored as plain text.
