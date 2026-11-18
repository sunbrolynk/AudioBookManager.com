---
title: API
description: Autentisering, dokumentationssidor och gränser.
---

ABM har ett REST-API under `/api`. Den interaktiva referensen finns på `/api/docs` (Swagger) och `/api/redoc`, och schemat på `/api/openapi.json`. Sätt `DOCS_ENABLED=false` för att ta bort alla tre. Dokumentationssidorna laddar resurser från ett CDN, så de visas fullt ut bara med internetåtkomst.

## Autentisera

- **API-nyckel**: skicka `X-Api-Key: <key>` eller `?apikey=<key>`. Du hittar den eller genererar om den under **Settings > General > Security**. Se [Säkerhet](/sv/settings/security/).
- **Bearer-token** från inloggningen.
- En inloggningsuppgift du skickar med går före ett undantag, så ett anrop med nyckel från LAN:et räknas som ett API-anrop.

## Konventioner

- Fel kommer tillbaka som `{"detail": ...}`.
- Hemligheter returneras aldrig. Ett svar säger om en är satt.
- Ett anrop från webbläsaren som ändrar tillstånd kräver en matchande origin. Skript som använder en nyckel är undantagna.
- Request bodies är begränsade till 10 MiB (`MAX_REQUEST_BODY_BYTES`). Återställning av säkerhetskopior och uppladdning av omslag har högre gränser. Över gränsen ger HTTP 413.
- Valideringsfel upprepar aldrig det du skickade.
- `POST /api/tasks` köar bara `backup_export`. Alla andra uppgiftstyper får HTTP 403, och inställningar som inte passar `backup_export` får HTTP 422. Manuella importer går via endpoints under `/api/manual-import/` och biblioteksskanningar via `POST /api/library/scan`.
- Library Import sparar själv varje rads Libex-matchningar på servern. En sparning av sessionen (`PUT /api/library-import/session/{id}` eller `PATCH /api/library-import/session/{id}/choices`) med en rad som skickar `libex_matches` nekas med HTTP 422 som nämner fältet, så lämna det utanför rader du sparar tillbaka. `POST /api/library-import/retry-match` tar ett valfritt `session_id` och sparar matchningarna den hittar i den sessionen.
- `GET /api/metadata/search` returnerar varje resultat när du utelämnar `limit`. Med `limit` (1 till 50) returnerar den högst så många.

## Avbrott hos metadatakällan

En förfrågan som behöver metadatakällan och inte får något svar misslyckas med en `detail` som nämner källan och orsaken, aldrig med ett tomt resultat. En sökning du väntar på ger upp efter ungefär 10 sekunder när Libex begränsar takten.

Om du kan Sonarr: API:t är inte kompatibelt med v3. Prowlarr kan synka indexerare till ABM via sin Prowlarr-anslutning.
