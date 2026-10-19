---
title: Importlijsten
description: Haal gewenste boeken binnen vanuit MyAnonamouse of een RSS-feed.
---

**Settings > Import Lists** voegt automatisch boeken toe uit externe bronnen.

## Bronnen

- **MAM**: een verlanglijst op MyAnonamouse, met een **MAM Session ID**.
- **RSS**: een **RSS Link** die jij opgeeft, met optioneel een **Website URL**. De website moet http of https zijn.

## Per lijst

| Veld | Wat het doet |
|---|---|
| Name | Naam |
| Monitor | Of boeken die de lijst toevoegt Monitored of Unmonitored zijn |
| Root Folder | Waar ze naartoe gaan |
| Quality Profile | Een profiel, of Inherit (standaard gebruiken) |
| Tags | Worden gezet op alles wat de lijst toevoegt |

**Sync Now** draait de lijsten meteen.

## Opties

| Instelling | Standaard | Wat het doet |
|---|---|---|
| RSS Sync Interval | 12 (uur) | Hoe vaak de lijsten synchroniseren. 0 zet synchroniseren uit |
| Clean Library Level | Disabled | Wat er met een boek gebeurt als het van de lijst verdwijnt |

Keuzes voor Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. De laatste verwijdert bestanden. Kies die alleen als je dat echt wilt.

## Uitzonderingen

**Import List Exclusions** blokkeert een boek op **ASIN**, **Title** en **Year**, zodat een lijst het nooit meer toevoegt. Gebruik **Lookup ASIN** om ze in te vullen.

## Valkuilen

- Een opgeslagen RSS-link of session ID wordt nooit meer getoond. Verander je het adres, dan moet je het geheim opnieuw invullen.
- Lijsten sturen de meldingen On Import List Synced en On Import List New Items. Zie [Connect](/nl/settings/connect/).
