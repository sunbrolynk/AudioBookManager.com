---
title: Indexers
description: Newznab, Torznab, MyAnonamouse en Prowlarr.
---

**Settings > Indexers** toont waar ABM op zoekt naar releases.

## Soorten

Newznab (usenet), Torznab (torrent), MyAnonamouse, en een Prowlarr-koppeling die indexers vanuit Prowlarr synchroniseert.

## Velden

| Veld | Geldt voor | Wat het doet |
|---|---|---|
| Name | alle | Naam |
| Enable RSS | alle | Meenemen in de RSS-sync |
| Enable Automatic Search | alle | Gebruiken voor zoekopdrachten die ABM zelf start |
| Enable Interactive Search | alle | Gebruiken als je met de hand zoekt |
| URL, API Path, API Key | Newznab, Torznab | Waar en hoe er verbonden wordt. Inloggegevens horen in het veld, nooit in de URL |
| Categories | Newznab, Torznab | In welke categorieën gezocht wordt |
| Cookie (mam_id) | MyAnonamouse | Sessiecookie |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only of Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Maakt de zoekopdracht breder |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Limieten voor releases en doelen voor seeden |
| Indexer Priority | alle | 1 (hoogste) tot 50 (laagste), standaard 25. Komt dezelfde release van twee indexers, dan wint het laagste getal |
| Download Client | alle | Stuurt grabs van deze indexer naar één client. (Any) gebruikt er een willekeurige |
| Tags | alle | Gebruikt deze indexer alleen voor items met een overeenkomende tag |

Een opgeslagen API-sleutel of cookie wordt nooit meer getoond. Laat het veld leeg bij bewerken om hem te houden. Verander je de URL, dan moet je het geheim opnieuw invullen, zodat een sleutel niet per ongeluk naar een nieuw adres gaat.

## Opties

Deze gelden voor elke indexer, dus houd je aan de regels van elke indexer.

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Minimum Age | 0 (minuten) | Negeert usenet-releases die jonger zijn dan dit |
| Retention | 0 (dagen) | Negeert releases die ouder zijn dan dit. 0 is geen limiet |
| Maximum Size | 0 (MB) | 0 is geen limiet |
| RSS Sync Interval | 15 (minuten) | Hoe vaak RSS wordt opgehaald |

De MAM-lijst kan ook [Importlijsten](/nl/settings/import-lists/) voeden.

Ken je Sonarr? Het is dezelfde verdeling tussen RSS, automatisch en interactief zoeken per indexer. Er is geen aparte "test all" voor categorieën.
