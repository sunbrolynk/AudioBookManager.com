---
title: Konverteringsinställningar
description: Standardval, codec-alternativ, kapitel, metadata, papperskorg och ffmpeg.
---

**Settings > Conversions** ställer in standardvalen för [Konverteringar](/sv/using/conversions/). Varje jobb kan åsidosätta dem.

## Allmänt

| Inställning | Standard | Effekt |
|---|---|---|
| Enable Conversions | på | Huvudbrytare |
| Conversion Folder | tom | Arbetsyta. Tom använder systemets temp-mapp |
| Concurrent Conversions | 2 | 1 till 4 i gränssnittet. Håll antal samtidiga gånger trådar under antalet kärnor |
| Process Priority | Normal | Low håller resten av systemet responsivt. High blir klar snabbare |

## Standardval för ljudkvalitet

| Inställning | Standard |
|---|---|
| Default Output Format | M4B (även MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, eller Copy för ingen omkodning) |
| Default Sample Rate | Auto, som matchar källan |
| Default Channels | Auto, som matchar källan |

## Codec-alternativ

AAC Profile (AAC-LC som standard, HE-AAC, HE-AACv2) och AAC VBR; MP3 VBR-kvalitet och joint stereo; FLAC-komprimeringsnivå (5 som standard); Opus variabel bitrate (på) och applikationstyp (Audio som standard; VoIP och Low Delay finns).

## Hantering av kapitel

| Inställning | Standard | Effekt |
|---|---|---|
| Default Chapter Behavior | Auto | Behåll om de finns, generera annars. Övriga: bara behåll, generera alltid, inga |
| Chapter Naming Format | `Chapter {n}` | Mall för genererade namn |
| Silence Detection | av | Experimentell. Försöker hitta kapitel utifrån tystnad |
| Minimum Chapter Length | 60 s | För upptäckta kapitel |
| Chapter Image Handling | Keep in file | Eller ta bort, eller extrahera till en mapp |

## Hantering av metadata

| Inställning | Standard |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | på (bara JPEG, för Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Filhantering

| Inställning | Standard | Effekt |
|---|---|---|
| Enable Recycle Bin | på | Originalen hamnar i papperskorgen i stället för att raderas |
| Recycle Bin Path | tom | Tom använder `/config/recycle/conversions` |
| Retention Period | 7 dagar | 0 stänger av automatisk rensning |
| Auto-Empty on Low Disk Space | av | Tömmer papperskorgen under tröskeln |
| Auto-Empty Threshold | 10 (%) | Nivå för ledigt utrymme |
| Delete Original | av | Standard för varje jobb, kan åsidosättas |
| Update Library Paths | på | Bokposterna följer de konverterade filerna |
| Auto-Reformat on Import | av | Konverterar nyimporterade böcker som kommer i ett annat format, med standardvalen ovan |
| Backup Original Metadata | av | Sparar de ursprungliga taggarna till en `.json`-sidecar först |

## Avancerat för FFmpeg

FFmpeg Path (tom hittar den via PATH), Threads Per Job (0 väljer automatiskt antal CPU:er minus 2), Custom FFmpeg Arguments (läggs till i varje kommando; felaktiga gör att konverteringar misslyckas), Logging Level (error som standard) och Keep FFmpeg Logs (av).
