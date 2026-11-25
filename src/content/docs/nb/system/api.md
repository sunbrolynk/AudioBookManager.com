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
- `GET /api/metadata/search` returnerer én side med opptil 50 resultater. `page` (0 til 9) velger siden, og svaret har `page` og `has_more`, som sier om en senere side kan ha flere. Et ASIN-søk har bare side 0. `search_type=phrase` returnerer Libex sine beste treff for søket, også bare på side 0 og med `has_more` false. En side kan være kort og likevel ha `has_more` true, fordi Libex utelater bøker den ikke kan lese, så fortsett å hente sider til `has_more` er false. `limit` (1 til 50) kutter ned en side.
- `POST /api/manual-import/execute` og `/execute-to-book` sjekker hver filrad mot et fast skjema. En ukjent nøkkel, en relativ `source_path` eller en tom `files`-liste avvises med HTTP 422. Hver kilde må være en lydfil som ikke ligger i en systemmappe, direkte i en mappe på øverste nivå som `/tmp` eller `/mnt`, eller i en av ABMs egne mapper (konfigurasjon, database, sikkerhetskopier, logger, omslag, papirkurv, midlertidig mappe og mappene med SSL-sertifikatet og -nøkkelen), med symlenker fulgt. En avvist fil får HTTP 400 med stien sin (`Can't import <path>: the file <reason>.`), og ingenting legges i køen.
- `POST /api/manual-import/execute` og `/execute-to-book` gir hver fil navn etter [Book Naming](/nb/settings/media-management/#book-naming) når importen kjører, og ignorerer et `destination_filename` i en fillinje.
- `POST /api/manual-import/check-conflicts` tar en `book_id` og de `source_paths` du vil importere, og svarer i `destination_filenames` med navnet hver fil får, etter kildesti. `clashed` lister kildefilene som får et navn fra formatet fordi deres eget navn ville kollidere. `audio_conflicts` og `own_conflicts` lister navnene som allerede ligger i bokens mappe, uten hensyn til store og små bokstaver.

## Brudd hos metadatakilden

En forespørsel som trenger metadatakilden og ikke får svar, feiler med en `detail` som nevner kilden og årsaken, aldri med et tomt resultat. Et søk du venter på gir opp etter omtrent 10 sekunder når Libex begrenser farten.

Kan du Sonarr: API-et er ikke kompatibelt med v3. Prowlarr kan synkronisere indekserere inn i ABM gjennom Prowlarr-tilkoblingen.
