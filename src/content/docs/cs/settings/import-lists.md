---
title: Seznamy pro import
description: Natahuj hledané knihy z MyAnonamouse nebo z RSS feedu.
---

**Settings > Import Lists** přidává knihy automaticky z vnějších zdrojů.

## Zdroje

- **MAM**: wishlist na MyAnonamouse, přes **MAM Session ID**.
- **RSS**: **RSS Link**, který zadáš, s nepovinnou **Website URL**. Web musí být http nebo https.

## U každého seznamu

| Pole | Co dělá |
|---|---|
| Name | Popisek |
| Monitor | Jestli jsou knihy, které přidá, Monitored, nebo Unmonitored |
| Root Folder | Kam půjdou |
| Quality Profile | Profil, nebo Inherit (použít výchozí) |
| Tags | Přidají se ke všemu, co seznam přidá |

**Sync Now** spustí seznamy hned.

## Volby

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| RSS Sync Interval | 12 (hodin) | Jak často se seznamy synchronizují. 0 synchronizaci vypne |
| Clean Library Level | Disabled | Co se stane s knihou, když ze seznamu zmizí |

Možnosti Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. Ta poslední maže soubory. Vyber ji, jen když to tak opravdu myslíš.

## Výjimky

**Import List Exclusions** zablokuje knihu podle **ASIN**, **Title** a **Year**, takže ji seznam už nikdy znovu nepřidá. K vyplnění použij **Lookup ASIN**.

## Na co si dát pozor

- Uložený odkaz RSS nebo session ID se už nikdy nezobrazí. Při změně adresy musíš tajný údaj zadat znovu.
- Seznamy spouštějí oznámení On Import List Synced a On Import List New Items. Viz [Connect](/cs/settings/connect/).
