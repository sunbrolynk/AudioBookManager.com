---
title: API
description: Authentication, docs pages and limits.
---

ABM has a REST API under `/api`. The interactive reference is at `/api/docs` (Swagger) and `/api/redoc`, and the schema at `/api/openapi.json`. Set `DOCS_ENABLED=false` to remove all three. The docs pages are served from copies bundled in the image, so they work offline and load nothing from a third party. A source checkout needs `sh scripts/fetch_docs_assets.sh` once, or they come up blank.

## Authenticating

Every call under `/api` needs the API key, the way Sonarr and Radarr work. That holds when you are signed in, on your own network, and in the None and local-address modes. Those only open the web interface, and the web app fetches the key itself and sends it on every call.

- **API key**: send `X-Api-Key: <key>` or `?apikey=<key>`. Find or regenerate it under **Settings > General > Security**. See [Security](/en-au/settings/security/).
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
- `POST /api/tasks` only queues `backup_export`. Any other task type gets HTTP 403, and settings that don't fit `backup_export` get HTTP 422. Manual imports go through the `/api/manual-import/` endpoints and library scans through `POST /api/library/scan`.
- Library Import keeps each row's Libex matches on the server. A session save (`PUT /api/library-import/session/{id}` or `PATCH /api/library-import/session/{id}/choices`) with a row that sends `libex_matches` is refused with HTTP 422 naming the field, so leave it out of rows you save back. `POST /api/library-import/retry-match` takes an optional `session_id` and stores the matches it finds in that session.
- `GET /api/metadata/search` returns one page of up to 50 results. `page` (0 to 9) picks the page, and the response carries `page` and `has_more`, which says whether a later page may hold more. An ASIN search has only page 0. `search_type=phrase` returns Libex's best matches for the query, also on page 0 only, with `has_more` false. A page can come back short and still have `has_more` true, because Libex leaves out books it can't read, so keep fetching until `has_more` is false. `limit` (1 to 50) trims a page.
- `POST /api/manual-import/execute` and `/execute-to-book` check every file row against a fixed shape. An unknown key, a relative `source_path` or an empty `files` list is refused with HTTP 422. Each source has to be an audio file that isn't in a system folder, directly in a top-level folder like `/tmp` or `/mnt`, or in one of ABM's own folders (config, database, backups, logs, covers, recycle bin, temp folder and the folders holding the SSL certificate and key), with symlinks followed. A refused file gets HTTP 400 naming its path (`Can't import <path>: the file <reason>.`) and nothing is queued.

## Metadata outages

A request that needs the metadata source and gets no answer fails with a `detail` that names the source and the reason, never an empty result. With [Local Storage](/en-au/metadata/control/#local-storage) on, a lookup the source cannot answer can be answered from the saved copy instead, and the result is marked as coming from Local Storage. A search you are waiting on gives up after about 10 seconds when Libex rate limits it.

If you know Sonarr: the API is not v3-compatible. Prowlarr can sync indexers into ABM through its Prowlarr connection.
