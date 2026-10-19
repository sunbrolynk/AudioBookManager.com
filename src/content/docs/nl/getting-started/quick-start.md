---
title: Snel aan de slag
description: Van een verse installatie naar je eerste gevolgde boek.
---

Dit is de kortste weg van een draaiende container naar een boek waar naar gezocht wordt. Installeer ABM eerst: zie [ABM installeren](/nl/installation/).

## 1. Inloggen

Bij het eerste bezoek word je door het aanmaken van een login geleid. Tot je dat gedaan hebt, weigert ABM requests. Hoe inloggen daarna werkt, lees je bij [Beveiliging en inloggen](/nl/settings/security/).

## 2. Kies hoe ABM het internet op gaat

Onder **Settings > General** staat een sectie **Proxy & VPN**. Wil je de ingebouwde metadatabron gebruiken, dan moet je eerst een verbinding kiezen. Zie [Een metadatabron kiezen](/nl/metadata/choosing-a-source/).

## 3. Voeg een rootmap toe

Een rootmap is de plek waar ABM boeken bewaart. Voeg er een toe onder **Settings > Media Management** in de sectie **Root Folders**. Het moet dezelfde map zijn die je speler (Audiobookshelf bijvoorbeeld) leest.

## 4. Voeg een indexer en een downloadclient toe

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse of Prowlarr. Zie [Indexers](/nl/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet of Blackhole. Zie [Downloadclients](/nl/settings/download-clients/).

Draait de client in een andere container, controleer dan of hij en ABM de downloadmap op hetzelfde pad zien, of voeg een remote path mapping toe.

## 5. Stel een kwaliteitsprofiel in

**Settings > Profiles** bevat de kwaliteitsladder waarmee ABM bepaalt wat het binnenhaalt en wat als upgrade telt. Een verse installatie heeft er nog geen, dus maak er een aan. Het eerste profiel dat je maakt wordt de standaard, en je kunt het later bijschaven. Zie [Profielen](/nl/settings/profiles/).

## 6. Koppel Audible (optioneel)

Heb je Audible-boeken, koppel dan je account onder **Settings > Audible**. Kies je **Marketplace**, druk op **Connect Audible Account** en daarna op **I Understand, Open Amazon Login**. Log in bij Amazon in het nieuwe tabblad. De lege pagina of de "Page not found"-pagina waar je daarna op uitkomt, hoort zo. Kopieer het hele adres uit de adresbalk naar **Redirect URL**, vul eventueel een **Display Name** in en druk op **Complete Login**. Je wachtwoord wordt nooit opgeslagen, en de eerste sync van je bibliotheek begint meteen. Zie [Audible](/nl/audible/).

## 7. Breng boeken in of voeg ze toe

- Heb je al een collectie? Gebruik [Bibliotheek importeren](/nl/library-import/).
- Begin je vanaf nul? Gebruik **Library > Add New** en zoek op titel, auteur of serie. Zie [Nieuw toevoegen](/nl/using/add-new/).

Een boek dat je toevoegt is gewenst tot er een bestand voor geïmporteerd is. Gewenste boeken verschijnen onder **Wanted > Missing** en er wordt automatisch naar gezocht.

## 8. Kijk hoe het z'n werk doet

**Activity > Queue** laat zien wat er aan het downloaden is. **Activity > History** laat zien wat er binnengehaald en geïmporteerd is. Gaat er iets mis, kijk dan bij [Problemen oplossen](/nl/troubleshooting/) en op de pagina [Taken](/nl/system/tasks/).
