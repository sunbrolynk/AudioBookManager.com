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
- `POST /api/manual-import/execute` en `/execute-to-book` controleren elke bestandsregel tegen een vast schema. Een onbekende sleutel, een relatief `source_path` of een lege `files`-lijst wordt geweigerd met HTTP 422. Elke bron moet een audiobestand zijn dat niet in een systeemmap staat, niet direct in een map op het hoogste niveau zoals `/tmp` of `/mnt`, en niet in een van de eigen mappen van ABM (configuratie, database, back-ups, logs, covers, prullenbak, tijdelijke map en de mappen met het SSL-certificaat en de sleutel), waarbij symlinks worden gevolgd. Een geweigerd bestand krijgt HTTP 400 met het pad erin (`Can't import <path>: the file <reason>.`) en er wordt niets in de wachtrij gezet.
- `POST /api/manual-import/execute` en `/execute-to-book` geven elk bestand een naam volgens [Book Naming](/nl/settings/media-management/#book-naming) op het moment dat de import draait, en negeren een `destination_filename` in een bestandsregel.
- `POST /api/manual-import/check-conflicts` neemt een `book_id` en de `source_paths` die je wilt importeren, en antwoordt in `destination_filenames` met de naam die elk bestand krijgt, per bronpad. `clashed` noemt de bronbestanden die een naam uit het formaat krijgen omdat hun eigen naam zou botsen. `audio_conflicts` en `other_conflicts` noemen de namen die al in de map van het boek staan, zonder op hoofdletters te letten.

## Metadatastoringen

Een verzoek dat de metadatabron nodig heeft en geen antwoord krijgt, mislukt met een `detail` dat de bron en de reden noemt, nooit met een leeg resultaat. Een zoekopdracht waarop je wacht, geeft na ongeveer 10 seconden op als Libex de snelheid beperkt.

Ken je Sonarr? De API is niet v3-compatibel. Prowlarr kan indexers naar ABM synchroniseren via de Prowlarr-koppeling.
