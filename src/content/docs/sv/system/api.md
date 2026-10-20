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

## Avbrott hos metadatakällan

En boksökning som inte får något svar från Libex ger 502 med "Libex search failed". En sökning efter författare eller serier ger 503 med "Libex could not be reached; try again shortly". Vissa uppslagsvägar ger fortfarande ett tomt resultat vid ett avbrott.

Om du kan Sonarr: API:t är inte kompatibelt med v3. Prowlarr kan synka indexerare till ABM via sin Prowlarr-anslutning.
