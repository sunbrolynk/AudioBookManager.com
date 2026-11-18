---
title: API
description: Autentisering, dokumentasjonssider og grenser.
---

ABM har et REST-API under `/api`. Den interaktive referansen ligger på `/api/docs` (Swagger) og `/api/redoc`, og skjemaet på `/api/openapi.json`. Sett `DOCS_ENABLED=false` for å fjerne alle tre. Dokumentasjonssidene laster ressurser fra et CDN, så de vises bare helt riktig med internettilgang.

## Autentisering

- **API-nøkkel**: send `X-Api-Key: <key>` eller `?apikey=<key>`. Du finner den, eller lager en ny, under **Settings > General > Security**. Se [Sikkerhet](/nb/settings/security/).
- **Bearer-token** fra innlogging.
- Påloggingsinfo du sender med, vinner over et unntak, så en forespørsel med nøkkel fra LAN-et regnes som en API-forespørsel.

## Konvensjoner

- Feil kommer tilbake som `{"detail": ...}`.
- Hemmeligheter returneres aldri. Et svar sier om en er satt.
- En nettleserforespørsel som endrer tilstand, trenger en opprinnelse som stemmer. Skript som bruker en nøkkel, er unntatt.
- Forespørselskropper er begrenset til 10 MiB (`MAX_REQUEST_BODY_BYTES`). Gjenoppretting av sikkerhetskopi og opplasting av cover har høyere grenser. Over grensen gir HTTP 413.
- Valideringsfeil gjentar aldri det du sendte.
- `POST /api/tasks` setter bare `backup_export` i kø. Alle andre oppgavetyper får HTTP 403, og innstillinger som ikke passer til `backup_export`, får HTTP 422. Manuelle importer går gjennom endepunktene under `/api/manual-import/`, og biblioteksskanninger gjennom `POST /api/library/scan`.
- Library Import lagrer selv hver rads Libex-treff på serveren. En lagring av økten (`PUT /api/library-import/session/{id}` eller `PATCH /api/library-import/session/{id}/choices`) med en rad som sender `libex_matches`, avvises med HTTP 422 som nevner feltet, så la det være ute av rader du lagrer tilbake. `POST /api/library-import/retry-match` tar en valgfri `session_id` og lagrer treffene den finner i den økten.
- `GET /api/metadata/search` returnerer hvert resultat når du utelater `limit`. Med `limit` (1 til 50) returnerer den høyst så mange.

## Brudd hos metadatakilden

En forespørsel som trenger metadatakilden og ikke får svar, feiler med en `detail` som nevner kilden og årsaken, aldri med et tomt resultat. Et søk du venter på gir opp etter omtrent 10 sekunder når Libex begrenser farten.

Kan du Sonarr: API-et er ikke kompatibelt med v3. Prowlarr kan synkronisere indekserere inn i ABM gjennom Prowlarr-tilkoblingen.
