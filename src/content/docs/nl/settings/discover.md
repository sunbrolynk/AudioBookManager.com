---
title: Discover-instellingen
description: Schema voor vernieuwen en scrapelimieten voor de Discover-catalogi.
---

**Settings > Discover** bepaalt hoe de [Discover](/nl/using/discover/)-catalogi gevuld worden.

## Vernieuwen en status van de catalogi

Elke catalogus (New Releases, Coming Soon, Audible Best, Recommended) heeft een eigen knop **Refresh** en **Clear**, en de pagina laat zien hoe vol elke catalogus is.

## Schema

| Instelling | Wat het doet |
|---|---|
| Auto Refresh | Vernieuwt de catalogi volgens een schema |
| Frequency | Dagelijks, wekelijks of maandelijks, met dag en tijd |
| Refresh on Startup | Vult lege catalogi als ABM start |
| Use CRON Expression | Vervangt de simpele opties |

## Scrapen

| Instelling | Bereik | Wat het doet |
|---|---|---|
| Pages to Scrape | 1 tot 50 | Aantal Audible-pagina's dat per catalogus gelezen wordt |
| Max ASINs per Refresh | 100 tot 5000 | Aantal boeken dat per vernieuwing bij Libex wordt opgehaald |
| Batch Size | 10 tot 900 | ASIN's per Libex-request. Groter is sneller en kan op sommige systemen mislukken |

De standaardwaarden staan in de app en worden hier niet herhaald. Open de pagina om ze te zien.

## Valkuilen

Vernieuwingen worden overgeslagen als de metadatabron niet klaar is, en dat wordt één keer gelogd.
