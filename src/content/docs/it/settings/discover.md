---
title: Impostazioni di Discover
description: Pianificazione degli aggiornamenti e limiti di scraping per i cataloghi di Discover.
---

**Settings > Discover** controlla come vengono riempiti i cataloghi di [Discover](/it/using/discover/).

## Aggiornamento e stato dei cataloghi

Ogni catalogo (New Releases, Coming Soon, Audible Best, Recommended) ha i suoi pulsanti **Refresh** e **Clear**, e la pagina mostra quanto è pieno ciascuno.

## Pianificazione

| Impostazione | Effetto |
|---|---|
| Auto Refresh | Aggiorna i cataloghi secondo una pianificazione |
| Frequency | Giornaliera, settimanale o mensile, con giorno e ora |
| Refresh on Startup | Riempie i cataloghi vuoti quando ABM si avvia |
| Use CRON Expression | Sostituisce le opzioni semplici |

## Scraping

| Impostazione | Intervallo | Effetto |
|---|---|---|
| Pages to Scrape | da 1 a 50 | Pagine Audible lette per catalogo |
| Max ASINs per Refresh | da 100 a 5000 | Libri presi da Libex a ogni aggiornamento |
| Batch Size | da 10 a 900 | ASIN per richiesta a Libex. Più grande è più veloce e su alcuni sistemi può fallire |

I valori predefiniti stanno nell'app e non li ripeto qui. Apri la pagina per vederli.

## Da tenere presente

Gli aggiornamenti vengono saltati quando la fonte dei metadati non è pronta, e finiscono nel log una volta sola.
