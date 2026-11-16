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
- `POST /api/manual-import/execute` og `/execute-to-book` sjekker hver filrad mot et fast skjema. En ukjent nøkkel, en relativ `source_path` eller en tom `files`-liste avvises med HTTP 422. Hver kilde må være en lydfil som ikke ligger i en systemmappe, direkte i en mappe på øverste nivå som `/tmp` eller `/mnt`, eller i en av ABMs egne mapper (konfigurasjon, database, sikkerhetskopier, logger, omslag, papirkurv), med symlenker fulgt. En avvist fil får HTTP 400 med stien sin (`Can't import <path>: the file <reason>.`), og ingenting legges i køen.

## Brudd hos metadatakilden

En forespørsel som trenger metadatakilden og ikke får svar, feiler med en `detail` som nevner kilden og årsaken, aldri med et tomt resultat. Et søk du venter på gir opp etter omtrent 10 sekunder når Libex begrenser farten.

Kan du Sonarr: API-et er ikke kompatibelt med v3. Prowlarr kan synkronisere indekserere inn i ABM gjennom Prowlarr-tilkoblingen.
