---
title: Discover-inställningar
description: Uppdateringsschema och skrapningsgränser för Discover-katalogerna.
---

**Settings > Discover** styr hur [Discover](/sv/using/discover/)-katalogerna fylls.

## Uppdatering och katalogstatus

Varje katalog (New Releases, Coming Soon, Audible Best, Recommended) har en egen knapp för **Refresh** och **Clear**, och sidan visar hur full var och en är.

## Schema

| Inställning | Effekt |
|---|---|
| Auto Refresh | Uppdatera katalogerna enligt ett schema |
| Frequency | Dagligen, veckovis eller månadsvis, med dag och tid |
| Refresh on Startup | Fyll tomma kataloger när ABM startar |
| Use CRON Expression | Ersätter de enkla alternativen |

## Skrapning

| Inställning | Intervall | Effekt |
|---|---|---|
| Pages to Scrape | 1 till 50 | Audible-sidor som läses per katalog |
| Max ASINs per Refresh | 100 till 5000 | Böcker som hämtas från Libex per uppdatering |
| Batch Size | 10 till 900 | ASIN:er per Libex-anrop. Större går snabbare men kan misslyckas på vissa system |

Standardvärdena finns i appen och upprepas inte här. Öppna sidan för att se dem.

## Fallgropar

Uppdateringar hoppas över när Libex inte går att nå, och det loggas en gång.
