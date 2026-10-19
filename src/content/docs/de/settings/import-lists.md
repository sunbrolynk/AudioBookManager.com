---
title: Importlisten
description: Gesuchte Bücher aus MyAnonamouse oder einem RSS-Feed übernehmen.
---

**Settings > Import Lists** fügt Bücher automatisch aus externen Quellen hinzu.

## Quellen

- **MAM**: eine Wunschliste bei MyAnonamouse, über eine **MAM Session ID**.
- **RSS**: ein **RSS Link**, den du angibst, mit optionaler **Website URL**. Die Website muss http oder https sein.

## Pro Liste

| Feld | Wirkung |
|---|---|
| Name | Bezeichnung |
| Monitor | Ob Bücher, die sie hinzufügt, Monitored oder Unmonitored sind |
| Root Folder | Wo sie landen |
| Quality Profile | Ein Profil oder Inherit (Standard nutzen) |
| Tags | Werden auf alles gesetzt, was die Liste hinzufügt |

**Sync Now** lässt die Listen sofort laufen.

## Optionen

| Einstellung | Standard | Wirkung |
|---|---|---|
| RSS Sync Interval | 12 (Stunden) | Wie oft Listen synchronisiert werden. 0 schaltet den Sync ab |
| Clean Library Level | Disabled | Was mit einem Buch passiert, wenn es von der Liste verschwindet |

Optionen für Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. Die letzte löscht Dateien. Nimm sie nur, wenn du das wirklich willst.

## Ausschlüsse

**Import List Exclusions** sperrt ein Buch über **ASIN**, **Title** und **Year**, damit eine Liste es nie wieder hinzufügt. Mit **Lookup ASIN** füllst du die Felder aus.

## Stolperfallen

- Ein gespeicherter RSS-Link oder eine Session-ID wird nie wieder angezeigt. Wenn du die Adresse änderst, musst du das Secret neu eingeben.
- Listen lösen die Benachrichtigungen On Import List Synced und On Import List New Items aus. Siehe [Connect](/de/settings/connect/).
