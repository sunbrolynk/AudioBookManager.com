---
title: API
description: Authenticatie, documentatiepagina's en limieten.
---

ABM heeft een REST API onder `/api`. De interactieve referentie staat op `/api/docs` (Swagger) en `/api/redoc`, en het schema op `/api/openapi.json`. Zet `DOCS_ENABLED=false` om ze alle drie weg te halen. De documentatiepagina's laden hun assets van een CDN, dus ze worden alleen volledig weergegeven met internettoegang.

## Authenticeren

- **API-sleutel**: stuur `X-Api-Key: <key>` of `?apikey=<key>` mee. Je vindt hem of genereert hem opnieuw onder **Settings > General > Security**. Zie [Beveiliging](/nl/settings/security/).
- **Bearer-token** dat je krijgt bij het inloggen.
- Inloggegevens die je meestuurt, gaan voor op een uitzondering, dus een request met sleutel vanaf het LAN telt als API-request.

## Afspraken

- Fouten komen terug als `{"detail": ...}`.
- Geheimen worden nooit teruggegeven. Een response zegt alleen of er een ingesteld is.
- Een browserrequest dat iets wijzigt, heeft een overeenkomende origin nodig. Scripts met een sleutel zijn uitgezonderd.
- Request bodies zijn begrensd op 10 MiB (`MAX_REQUEST_BODY_BYTES`). Back-up terugzetten en cover uploaden hebben hogere limieten. Daarboven krijg je HTTP 413.
- Validatiefouten herhalen nooit wat je gestuurd hebt.
- `POST /api/tasks` zet alleen `backup_export` in de wachtrij. Elk ander taaktype krijgt HTTP 403, en instellingen die niet bij `backup_export` passen krijgen HTTP 422. Handmatige imports gaan via de endpoints onder `/api/manual-import/` en bibliotheekscans via `POST /api/library/scan`.
- Library Import bewaart de Libex-matches van elke rij zelf op de server. Een sessie opslaan (`PUT /api/library-import/session/{id}` of `PATCH /api/library-import/session/{id}/choices`) met een rij die `libex_matches` meestuurt, wordt geweigerd met HTTP 422 die het veld noemt, dus laat het weg uit rijen die je terug opslaat. `POST /api/library-import/retry-match` neemt een optionele `session_id` en bewaart de gevonden matches in die sessie.
- `GET /api/metadata/search` geeft één pagina met maximaal 50 resultaten terug. `page` (0 tot 9) kiest de pagina, en het antwoord bevat `page` en `has_more`, dat zegt of een latere pagina er nog meer kan hebben. Een zoekopdracht op ASIN heeft alleen pagina 0. `search_type=phrase` geeft de beste treffers van Libex voor de zoekopdracht, ook alleen op pagina 0 en met `has_more` op false. Een pagina kan kort zijn en toch `has_more` op true hebben, omdat Libex boeken weglaat die het niet kan lezen, dus blijf pagina's ophalen tot `has_more` false is. `limit` (1 tot 50) kort een pagina in.
- `POST /api/manual-import/execute` en `/execute-to-book` controleren elke bestandsregel tegen een vast schema. Een onbekende sleutel, een relatief `source_path` of een lege `files`-lijst wordt geweigerd met HTTP 422. Elke bron moet een audiobestand zijn dat niet in een systeemmap staat, niet direct in een map op het hoogste niveau zoals `/tmp` of `/mnt`, en niet in een van de eigen mappen van ABM (configuratie, database, back-ups, logs, covers, prullenbak, tijdelijke map en de mappen met het SSL-certificaat en de sleutel), waarbij symlinks worden gevolgd. Een geweigerd bestand krijgt HTTP 400 met het pad erin (`Can't import <path>: the file <reason>.`) en er wordt niets in de wachtrij gezet.

## Metadatastoringen

Een verzoek dat de metadatabron nodig heeft en geen antwoord krijgt, mislukt met een `detail` dat de bron en de reden noemt, nooit met een leeg resultaat. Een zoekopdracht waarop je wacht, geeft na ongeveer 10 seconden op als Libex de snelheid beperkt.

Ken je Sonarr? De API is niet v3-compatibel. Prowlarr kan indexers naar ABM synchroniseren via de Prowlarr-koppeling.
