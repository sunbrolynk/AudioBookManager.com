---
title: API
description: Authentication, docs pages and limits.
---

ABM has a REST API under `/api`. The interactive reference is at `/api/docs` (Swagger) and `/api/redoc`, and the schema at `/api/openapi.json`. Set `DOCS_ENABLED=false` to remove all three. The docs pages load assets from a CDN, so they render fully only with internet access.

## Authenticating

- **API key**: send `X-Api-Key: <key>` or `?apikey=<key>`. Find or regenerate it under **Settings > General > Security**. See [Security](/en-ca/settings/security/).
- **Bearer token** from signing in.
- A credential you present wins over a bypass, so a keyed request from the LAN counts as an API request.

## Conventions

- Errors come back as `{"detail": ...}`.
- Secrets are never returned. A response says whether one is set.
- A state-changing browser request needs a matching origin. Scripts using a key are exempt.
- Request bodies are capped at 10 MiB (`MAX_REQUEST_BODY_BYTES`). Backup restore and cover upload have larger limits. Over the cap is HTTP 413.
- Validation errors never echo back what you sent.

## Metadata outages

A book search that gets no answer from Libex returns 502 with "Libex search failed". An author or series search returns 503 with "Libex could not be reached; try again shortly". Some lookup routes still return an empty result in an outage.

If you know Sonarr: the API is not v3-compatible. Prowlarr can sync indexers into ABM through its Prowlarr connection.
