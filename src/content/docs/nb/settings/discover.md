---
title: Discover-innstillinger
description: Oppdateringsplan og grenser for skraping av Discover-katalogene.
---

**Settings > Discover** styrer hvordan [Discover](/nb/using/discover/)-katalogene fylles.

## Oppdatering og katalogstatus

Hver katalog (New Releases, Coming Soon, Audible Best, Recommended) har sin egen **Refresh**- og **Clear**-knapp, og siden viser hvor full hver av dem er.

## Tidsplan

| Innstilling | Virkning |
|---|---|
| Auto Refresh | Oppdater katalogene etter en tidsplan |
| Frequency | Daglig, ukentlig eller månedlig, med dag og klokkeslett |
| Refresh on Startup | Fyll tomme kataloger når ABM starter |
| Use CRON Expression | Erstatter de enkle valgene |

## Skraping

| Innstilling | Område | Virkning |
|---|---|---|
| Pages to Scrape | 1 til 50 | Audible-sider som leses per katalog |
| Max ASINs per Refresh | 100 til 5000 | Bøker som hentes fra Libex per oppdatering |
| Batch Size | 10 til 900 | ASIN-er per forespørsel til Libex. Større går fortere og kan feile på noen systemer |

Standardverdiene ligger i appen og gjentas ikke her. Åpne siden for å se dem.

## Fallgruver

Oppdateringer hoppes over når Libex ikke kan nås, og det logges én gang.
