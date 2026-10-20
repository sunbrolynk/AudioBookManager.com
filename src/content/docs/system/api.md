---
title: API
description: Authentication, docs pages and limits.
---

ABM has a REST API under `/api`. The interactive reference is at `/api/docs` (Swagger) and `/api/redoc`, and the schema at `/api/openapi.json`. Set `DOCS_ENABLED=false` to remove all three. The docs pages load assets from a CDN, so they render fully only with internet access.

## Authenticating

- **API key**: send `X-Api-Key: <key>` or `?apikey=<key>`. Find or regenerate it under **Settings > General > Security**. See [Security](/settings/security/).
- **Bearer token** from signing in.
- A credential you present wins over a bypass, so a keyed request from the LAN counts as an API request.

## Conventions

- Errors come back as `{"detail": ...}`.
- Secrets are never returned. A response says whether one is set.
- A state-changing browser request needs a matching origin. Scripts using a key are exempt.
- Request bodies are capped at 10 MiB (`MAX_REQUEST_BODY_BYTES`). Backup restore and cover upload have larger limits. Over the cap is HTTP 413.
- Validation errors never echo back what you sent.
- A 500 from the security and backup settings routes says what failed in general terms and does not include the exception text. The detail goes to the log files.

## Metadata outages

A route that depends on the metadata source answers 503 (`metadata_unavailable`), 503 with `Retry-After: 30` (`metadata_declined`) or 502 (`metadata_rejected`) in the body's `code`. Some lookup routes still return an empty result in an outage.

If you know Sonarr: the API is not v3-compatible. Prowlarr can sync indexers into ABM through its Prowlarr connection.
