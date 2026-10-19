---
title: Liste di importazione
description: Porta dentro libri cercati da MyAnonamouse o da un feed RSS.
---

**Settings > Import Lists** aggiunge libri in automatico da fonti esterne.

## Fonti

- **MAM**: una wishlist di MyAnonamouse, tramite un **MAM Session ID**.
- **RSS**: un **RSS Link** che fornisci tu, con un **Website URL** facoltativo. Il sito deve essere http o https.

## Per ogni lista

| Campo | Effetto |
|---|---|
| Name | Etichetta |
| Monitor | Se i libri che aggiunge sono Monitored o Unmonitored |
| Root Folder | Dove finiscono |
| Quality Profile | Un profilo, oppure Inherit (use default) |
| Tags | Applicati a tutto quello che la lista aggiunge |

**Sync Now** fa girare subito le liste.

## Opzioni

| Impostazione | Predefinito | Effetto |
|---|---|---|
| RSS Sync Interval | 12 (ore) | Ogni quanto si sincronizzano le liste. 0 disattiva la sincronizzazione |
| Clean Library Level | Disabled | Cosa succede a un libro quando esce dalla lista |

Le scelte di Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. L'ultima elimina i file. Sceglila solo se è davvero quello che vuoi.

## Esclusioni

**Import List Exclusions** blocca un libro per **ASIN**, **Title** e **Year**, così una lista non lo aggiunge mai più. Usa **Lookup ASIN** per compilarli.

## Da tenere presente

- Un link RSS o un session ID salvato non viene più mostrato. Se cambi l'indirizzo devi reinserire il segreto.
- Le liste fanno scattare le notifiche On Import List Synced e On Import List New Items. Vedi [Connect](/it/settings/connect/).
