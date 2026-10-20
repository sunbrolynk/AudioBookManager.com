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

## Brudd hos metadatakilden

Et boksøk som ikke får svar fra Libex, gir 502 med "Libex search failed". Et søk etter forfattere eller serier gir 503 med "Libex could not be reached; try again shortly". Noen oppslagsruter gir fortsatt et tomt resultat under et avbrudd.

Kan du Sonarr: API-et er ikke kompatibelt med v3. Prowlarr kan synkronisere indekserere inn i ABM gjennom Prowlarr-tilkoblingen.
