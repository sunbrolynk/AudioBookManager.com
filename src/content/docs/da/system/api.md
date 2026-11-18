---
title: API
description: Godkendelse, dokumentationssider og grænser.
---

ABM har et REST API under `/api`. Den interaktive reference ligger på `/api/docs` (Swagger) og `/api/redoc`, og skemaet på `/api/openapi.json`. Sæt `DOCS_ENABLED=false` for at fjerne alle tre. Dokumentationssiderne henter filer fra et CDN, så de vises kun helt, når der er internetadgang.

## Godkendelse

- **API-nøgle**: send `X-Api-Key: <key>` eller `?apikey=<key>`. Find eller generér den igen under **Settings > General > Security**. Se [Sikkerhed](/da/settings/security/).
- **Bearer-token** fra et login.
- Loginoplysninger, du sender med, vinder over en undtagelse, så en request med nøgle fra LAN'et tæller som en API-request.

## Konventioner

- Fejl kommer tilbage som `{"detail": ...}`.
- Hemmeligheder bliver aldrig returneret. Et svar siger, om der er sat en.
- En browser-request, der ændrer tilstand, kræver en matchende origin. Scripts, der bruger en nøgle, er undtaget.
- Request bodies er begrænset til 10 MiB (`MAX_REQUEST_BODY_BYTES`). Gendannelse af backup og upload af covers har højere grænser. Over grænsen giver HTTP 413.
- Valideringsfejl gentager aldrig det, du sendte.
- `POST /api/tasks` sætter kun `backup_export` i kø. Alle andre opgavetyper får HTTP 403, og indstillinger, der ikke passer til `backup_export`, får HTTP 422. Manuelle importer går gennem endpoints under `/api/manual-import/`, og biblioteksscanninger gennem `POST /api/library/scan`.
- Library Import gemmer selv hver rækkes Libex-match på serveren. En gemning af sessionen (`PUT /api/library-import/session/{id}` eller `PATCH /api/library-import/session/{id}/choices`) med en række, der sender `libex_matches`, afvises med HTTP 422, der nævner feltet, så lad det være ude af rækker, du gemmer tilbage. `POST /api/library-import/retry-match` tager et valgfrit `session_id` og gemmer de match, den finder, i den session.
- `GET /api/metadata/search` returnerer hvert resultat, når du udelader `limit`. Med `limit` (1 til 50) returnerer den højst så mange.

## Nedbrud hos metadatakilden

En forespørgsel, der har brug for metadatakilden og ikke får svar, fejler med en `detail`, der nævner kilden og årsagen, aldrig med et tomt resultat. En søgning, du venter på, opgiver efter omkring 10 sekunder, når Libex begrænser hastigheden.

Kender du Sonarr: API'et er ikke v3-kompatibelt. Prowlarr kan synkronisere indeksere ind i ABM gennem sin Prowlarr-forbindelse.
