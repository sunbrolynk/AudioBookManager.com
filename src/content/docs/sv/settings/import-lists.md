---
title: Importlistor
description: Hämta in önskade böcker från MyAnonamouse eller ett RSS-flöde.
---

**Settings > Import Lists** lägger till böcker automatiskt från externa källor.

## Källor

- **MAM**: en önskelista på MyAnonamouse, med ett **MAM Session ID**.
- **RSS**: en **RSS Link** som du anger, med en valfri **Website URL**. Webbplatsen måste vara http eller https.

## Per lista

| Fält | Effekt |
|---|---|
| Name | Namn |
| Monitor | Om böckerna den lägger till är Monitored eller Unmonitored |
| Root Folder | Var de hamnar |
| Quality Profile | En profil, eller Inherit (use default) |
| Tags | Sätts på allt som listan lägger till |

**Sync Now** kör listorna direkt.

## Alternativ

| Inställning | Standard | Effekt |
|---|---|---|
| RSS Sync Interval | 12 (timmar) | Hur ofta listorna synkas. 0 stänger av synken |
| Clean Library Level | Disabled | Vad som händer med en bok när den försvinner från listan |

Valen för Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. Det sista raderar filer. Välj det bara om du verkligen menar det.

## Undantag (Exclusions)

**Import List Exclusions** blockerar en bok via **ASIN**, **Title** och **Year**, så att en lista aldrig lägger till den igen. Använd **Lookup ASIN** för att fylla i dem.

## Fallgropar

- En sparad RSS-länk eller session-ID visas aldrig igen. Byter du adressen måste hemligheten anges igen.
- Listor triggar notiserna On Import List Synced och On Import List New Items. Se [Connect](/sv/settings/connect/).
