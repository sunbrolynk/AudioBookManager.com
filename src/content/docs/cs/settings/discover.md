---
title: Nastavení Discover
description: Plán obnovy a limity stahování katalogů Discover.
---

**Settings > Discover** řídí, jak se plní katalogy [Discover](/cs/using/discover/).

## Obnova a stav katalogů

Každý katalog (New Releases, Coming Soon, Audible Best, Recommended) má vlastní tlačítko **Refresh** a **Clear** a stránka ukazuje, jak je který plný.

## Plán

| Nastavení | Co dělá |
|---|---|
| Auto Refresh | Obnovuje katalogy podle plánu |
| Frequency | Denně, týdně nebo měsíčně, se dnem a časem |
| Refresh on Startup | Při startu ABM naplní každý prázdný katalog |
| Use CRON Expression | Nahradí jednoduché volby |

## Stahování stránek (Scraping)

| Nastavení | Rozsah | Co dělá |
|---|---|---|
| Pages to Scrape | 1 až 50 | Kolik stránek Audible se přečte pro každý katalog |
| Max ASINs per Refresh | 100 až 5000 | Kolik knih se při jedné obnově načte z Libexu |
| Batch Size | 10 až 900 | ASINů na jeden požadavek do Libexu. Víc je rychlejší a na některých systémech může selhat |

Výchozí hodnoty jsou v aplikaci a tady je neopakuju. Otevři stránku a uvidíš je.

## Na co si dát pozor

Když zdroj metadat není připravený, obnovy se přeskočí a zaloguje se to jednou.
