---
title: API
description: Authentication, docs pages and limits.
---

ABM has a REST API under `/api`. The interactive reference is at `/api/docs` (Swagger) and `/api/redoc`, and the schema at `/api/openapi.json`. Set `DOCS_ENABLED=false` to remove all three. The docs pages are served from copies bundled in the image, so they work offline and load nothing from a third party. A source checkout needs `sh scripts/fetch_docs_assets.sh` once, or they come up blank.

## Authenticating

Every call under `/api` needs the API key, the way Sonarr and Radarr work. That holds when you are signed in, on your own network, and in the None and local-address modes. Those only open the web interface, and the web app fetches the key itself and sends it on every call.

- **API key**: send `X-Api-Key: <key>` or `?apikey=<key>`. Find or regenerate it under **Settings > General > Security**. See [Security](/settings/security/).
- The live-update websocket needs the key too.
- Login tokens do not work on the API. An `Authorization: Bearer` token from signing in is refused, and login, setup and saving the security settings no longer return `access_token`. The sign-in cookie only opens the web interface.
- `GET /api/system/status` with your key is the quickest way to test it. A missing or wrong key is a 401.
- Covers, backup downloads and log downloads are not under `/api` any more: `/media-cover/...`, `/backup/{file}` and `/logfile`. They open with your sign-in or with the key.
- Under Basic, the web interface takes the Basic credentials, and `POST /api/auth/login` answers 409. The API still takes the key.

## Conventions

- Errors come back as `{"detail": ...}`.
- Secrets are never returned. A response says whether one is set.
- A state-changing browser request needs a matching origin. Scripts using a key are exempt.
- Request bodies are capped at 10 MiB (`MAX_REQUEST_BODY_BYTES`). Backup restore and cover upload have larger limits. Over the cap is HTTP 413.
- Validation errors never echo back what you sent.
- A failed request says what could not be done in fixed wording and never includes the underlying error text, so no file paths, host names or credentials come back. The detail goes to the log files. If you match on an error message, match on the status code instead.
- A bulk status or monitor request with an empty `book_ids` list is refused with HTTP 422.

## Metadata outages

A book search that gets no answer from Libex returns 502 with "Libex search failed". An author or series search returns 503 with "Libex could not be reached; try again shortly". Some lookup routes still return an empty result in an outage.

If you know Sonarr: the API is not v3-compatible. Prowlarr can sync indexers into ABM through its Prowlarr connection.
