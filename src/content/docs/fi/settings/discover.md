---
title: Discover-asetukset
description: Discover-katalogien päivitysajastus ja keruurajat.
---

**Settings > Discover** määrää, miten [Discover](/fi/using/discover/)-katalogit täytetään.

## Päivitys ja katalogien tila

Jokaisella katalogilla (New Releases, Coming Soon, Audible Best, Recommended) on oma **Refresh**- ja **Clear**-painikkeensa, ja sivu näyttää, kuinka täynnä kukin on.

## Ajastus

| Asetus | Vaikutus |
|---|---|
| Auto Refresh | Päivitä katalogit ajastetusti |
| Frequency | Päivittäin, viikoittain tai kuukausittain, päivän ja kellonajan kera |
| Refresh on Startup | Täytä tyhjät katalogit, kun ABM käynnistyy |
| Use CRON Expression | Korvaa yksinkertaiset valinnat |

## Keruu

| Asetus | Vaihteluväli | Vaikutus |
|---|---|---|
| Pages to Scrape | 1–50 | Luettavat Audible-sivut katalogia kohden |
| Max ASINs per Refresh | 100–5000 | Libexiltä haettavat kirjat päivitystä kohden |
| Batch Size | 10–900 | ASINit Libex-pyyntöä kohden. Suurempi on nopeampi, mutta voi epäonnistua joissain järjestelmissä |

Oletukset ovat sovelluksessa, eikä niitä toisteta tässä. Avaa sivu nähdäksesi ne.

## Sudenkuopat

Päivitykset ohitetaan, kun metatietolähde ei ole valmis, ja siitä kirjataan lokiin kerran.
