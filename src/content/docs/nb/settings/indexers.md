---
title: Indekserere
description: Newznab, Torznab, MyAnonamouse og Prowlarr.
---

**Settings > Indexers** viser hvor ABM søker etter utgivelser.

## Typer

Newznab (usenet), Torznab (torrent), MyAnonamouse, og en Prowlarr-tilkobling som synkroniserer indekserere fra Prowlarr.

## Felt

| Felt | Gjelder | Virkning |
|---|---|---|
| Name | alle | Navn |
| Enable RSS | alle | Ta med i RSS-synkronisering |
| Enable Automatic Search | alle | Brukes til søk ABM starter |
| Enable Interactive Search | alle | Brukes når du søker for hånd |
| URL, API Path, API Key | Newznab, Torznab | Hvor og hvordan det skal kobles til. Påloggingsinfo hører hjemme i feltet, aldri i URL-en |
| Categories | Newznab, Torznab | Hvilke kategorier det skal søkes i |
| Cookie (mam_id) | MyAnonamouse | Økt-cookie |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only eller Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Gjør søket bredere |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Grenser for utgivelser og mål for seeding |
| Indexer Priority | alle | 1 (høyest) til 50 (lavest), standard 25. Når samme utgivelse kommer fra to indekserere, vinner det laveste tallet |
| Download Client | alle | Send hentinger fra denne indeksereren til én klient. (Any) bruker hvilken som helst |
| Tags | alle | Bruk denne indeksereren bare for elementer med en tagg som passer |

En lagret API-nøkkel eller cookie vises aldri igjen. La feltet stå tomt når du redigerer, så beholdes den. Endrer du URL-en, må du skrive inn hemmeligheten på nytt, så en nøkkel ikke kan sendes til en ny adresse ved et uhell.

## Valg

Disse gjelder alle indekserere, så følg reglene til hver enkelt indekserer.

| Innstilling | Standard | Virkning |
|---|---|---|
| Minimum Age | 0 (minutter) | Ignorer usenet-utgivelser som er yngre enn dette |
| Retention | 0 (dager) | Ignorer utgivelser som er eldre enn dette. 0 er ingen grense |
| Maximum Size | 0 (MB) | 0 er ingen grense |
| RSS Sync Interval | 15 (minutter) | Hvor ofte RSS sjekkes |

MAM-lista kan også mate [Importlister](/nb/settings/import-lists/).

Kan du Sonarr: det er den samme oppdelingen mellom RSS, automatisk og interaktivt søk per indekserer. Det finnes ingen egen "test alle" for kategorier.
