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

## Metadatastoringen

Een route die van de metadatabron afhangt, antwoordt met 503 (`metadata_unavailable`), 503 met `Retry-After: 30` (`metadata_declined`) of 502 (`metadata_rejected`) in de `code` van de body. Sommige lookup-routes geven bij een storing nog steeds een leeg resultaat terug.

Ken je Sonarr? De API is niet v3-compatibel. Prowlarr kan indexers naar ABM synchroniseren via de Prowlarr-koppeling.
