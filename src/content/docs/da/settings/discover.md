---
title: Discover-indstillinger
description: Tidsplan for opdatering og grænser for scraping af Discover-katalogerne.
---

**Settings > Discover** styrer, hvordan [Discover](/da/using/discover/)-katalogerne bliver fyldt.

## Opdatering og katalogstatus

Hvert katalog (New Releases, Coming Soon, Audible Best, Recommended) har sin egen knap til **Refresh** og **Clear**, og siden viser, hvor fyldt hvert er.

## Tidsplan

| Indstilling | Virkning |
|---|---|
| Auto Refresh | Opdatér kataloger efter en tidsplan |
| Frequency | Dagligt, ugentligt eller månedligt, med dag og klokkeslæt |
| Refresh on Startup | Fyld tomme kataloger, når ABM starter |
| Use CRON Expression | Erstatter de simple muligheder |

## Scraping

| Indstilling | Interval | Virkning |
|---|---|---|
| Pages to Scrape | 1 til 50 | Audible-sider, der bliver læst pr. katalog |
| Max ASINs per Refresh | 100 til 5000 | Bøger, der bliver hentet fra Libex pr. opdatering |
| Batch Size | 10 til 900 | ASIN'er pr. Libex-request. Større er hurtigere og kan fejle på nogle systemer |

Standarderne bor i appen og bliver ikke gentaget her. Åbn siden for at se dem.

## Faldgruber

Opdateringer bliver sprunget over, når metadatakilden ikke er klar, og det bliver logget én gang.
