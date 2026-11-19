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
- `POST /api/manual-import/execute` og `/execute-to-book` tjekker hver filrække mod et fast skema. En ukendt nøgle, en relativ `source_path` eller en tom `files`-liste afvises med HTTP 422. Hver kilde skal være en lydfil, der ikke ligger i en systemmappe, direkte i en mappe på øverste niveau som `/tmp` eller `/mnt`, eller i en af ABM's egne mapper (konfiguration, database, sikkerhedskopier, logs, covers, papirkurv, midlertidig mappe og mapperne med SSL-certifikatet og -nøglen), med symlinks fulgt. En afvist fil får HTTP 400 med sin sti (`Can't import <path>: the file <reason>.`), og intet sættes i kø.
- `POST /api/manual-import/execute` og `/execute-to-book` navngiver hver fil efter [Book Naming](/da/settings/media-management/#book-naming), når importen kører, og ignorerer et `destination_filename` i en fillinje.
- `POST /api/manual-import/check-conflicts` tager et `book_id` og de `source_paths`, du vil importere, og svarer i `destination_filenames` med det navn, hver fil får, efter kildesti. `clashed` lister de kildefiler, der får et navn fra formatet, fordi deres eget navn ville støde sammen med et andet. `audio_conflicts` og `other_conflicts` lister de navne, der allerede ligger i bogens mappe, uden hensyn til store og små bogstaver.

## Nedbrud hos metadatakilden

En forespørgsel, der har brug for metadatakilden og ikke får svar, fejler med en `detail`, der nævner kilden og årsagen, aldrig med et tomt resultat. En søgning, du venter på, opgiver efter omkring 10 sekunder, når Libex begrænser hastigheden.

Kender du Sonarr: API'et er ikke v3-kompatibelt. Prowlarr kan synkronisere indeksere ind i ABM gennem sin Prowlarr-forbindelse.
