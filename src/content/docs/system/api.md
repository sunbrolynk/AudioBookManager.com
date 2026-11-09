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
- A request that has to queue a background task, such as a conversion create, retry, restart or single-job resume (`POST /api/conversions/job/{id}/resume`), answers HTTP 503 when the queue refuses it, so you can try again. `POST /api/tasks` answers 200 with status `skipped` when the task was deliberately not queued.

- An action that needs a background task and cannot queue it returns HTTP 503 with the detail "Could not queue the task.". When a route adds something and then queues a follow-up (add book, add an author's or series' books, Add Missing Books), the new item is still returned, with a message saying the follow-up could not be queued.
- `POST /api/books/{id}/move`, `POST /api/books/batch/migrate` and the author and series bulk edits (`changes.move_files`) take `move_files`, which defaults to `true`: the files move with the path. Send `"move_files": false` to change only the stored path and leave the disk alone. A move into another book's folder, or into the recycle bin, is refused.
- The bulk profile and root folder routes for authors and series answer 404 with "No author with id: …" or "No series with id: …" when an id is unknown.
- `POST /api/library-import/session/{session_id}/root-preview` takes `{"paths": [...]}` (1 to 20000 paths from the session's scan) and returns `{"roots": {"<path>": {"id": 1, "path": "/books"}}}`, the root each row would land in. An unknown session is 404, an empty list or a path that isn't in the scan is 422, and no configured root folder is 409.
- `POST /api/library-import/confirm` takes an optional `root_folder_id`. Leave it out for Automatic (the series' root, else the author's, else the default). Each row can carry its own `root_folder_id`. A root id that no longer exists is 409 with "That root folder is no longer configured". A session scanned inside a root takes no override and answers 422. An explicit `hardlink` that a landing root can't take is 400. An import that only adds to books already in the library skips the hardlink check.
- A PATCH with an explicit `null` clears an optional field on a book, author, series, indexer, download client, notification, import list or remote path mapping. A required field, or a flag or setting that has a default, ignores `null` the same as leaving it out.

## Metadata outages

A book search that gets no answer from Libex returns 502 with "Libex search failed". An author or series search returns 503 with "Libex could not be reached; try again shortly". Some lookup routes still return an empty result in an outage.

If you know Sonarr: the API is not v3-compatible. Prowlarr can sync indexers into ABM through its Prowlarr connection.
