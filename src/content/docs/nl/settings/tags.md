---
title: Tags
description: Tags en regels voor automatisch taggen.
---

**Settings > Tags** beheert tags en **Auto Tagging**.

## Tags

Een tag is één woord: kleine letters, geen spaties, geen komma's, maximaal 100 tekens. Typ je `Sci-Fi`, dan wordt het `sci-fi`. Tags zet je op boeken, auteurs en series, en ze worden gematcht door indexers, delay- en releaseprofielen, importlijsten, Connect-agents en de agendafeed.

Ken je Sonarr? Tags werken op dezelfde manier. Een profiel met een tag geldt alleen voor dingen die die tag hebben.

## Automatische tags

Een automatische tag is een regel die tags zet op boeken die eraan voldoen.

| Veld | Wat het doet |
|---|---|
| Name | Naam |
| Enable | Aan of uit |
| Remove Tags Automatically | Haalt de tags weg als een boek niet meer voldoet |
| Tags | Wat er gezet wordt |
| Conditions | Waar een boek aan moet voldoen. Elke voorwaarde kan omgekeerd of verplicht gemaakt worden |

Soorten voorwaarden: Genre, Monitored, Language, Root Folder, Status, Tag, Year (bereik), Series Type, Author (bevat), Narrator (bevat), Runtime in minuten (bereik) en Rating (bereik).

**Apply** draait de geselecteerde regels nu. Regels draaien ook als boeken veranderen.

## Valkuilen

- Een regel die verwijst naar een verwijderde tag of rootmap wordt helemaal overgeslagen, in beide richtingen, zodat een kapotte regel nooit verkeerd tagt of tags weghaalt.
- Remove Tags Automatically haalt alleen tags weg die deze regel zelf zou zetten.
