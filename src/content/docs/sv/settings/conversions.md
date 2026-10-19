---
title: Konverteringsinställningar
description: Standardval, codec-alternativ, kapitel, metadata, papperskorg och ffmpeg.
---

**Settings > Conversions** ställer in standardvalen för [Konverteringar](/sv/using/conversions/). Varje jobb kan åsidosätta dem.

## Allmänt

| Inställning | Standard | Effekt |
|---|---|---|
| Enable Conversions | på | Stänger av konvertering på sidan Conversions. **Auto-Reformat on Import** styrs separat |
| Conversion Folder | tom | Arbetsyta. Tom använder systemets temp-mapp |
| Concurrent Conversions | 2 | 1 till 4. Håll det här gånger **Threads Per Job** (under **Advanced FFmpeg** längst ner på sidan) på eller under antalet kärnor. Sidan varnar när det blir högre |
| Process Priority | Normal | Low håller resten av systemet responsivt. High blir klar snabbare |

## Standardval för ljudkvalitet

| Inställning | Standard |
|---|---|
| Default Output Format | M4B (även MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, eller Copy för ingen omkodning) |
| Default Sample Rate | Auto, som matchar källan. Eller 22050, 44100 eller 48000 Hz |
| Default Channels | Auto, som matchar källan. Eller Mono eller Stereo |

## Codec-alternativ

| Format | Kodare | Alternativ |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC som standard) och AAC VBR, kvalitet 1 till 5. Bitrate gäller när VBR är av. HE-AAC och HE-AACv2 finns i listan men kodas just nu som AAC-LC |
| MP3 | LAME | VBR-kvalitet 0 till 9 (4 som standard) och Joint Stereo (på). Bitrate gäller när VBR är av |
| Opus | libopus | Variabel bitrate (på) och Application: Audio (standard), VoIP eller Low Delay |
| FLAC | FLAC | Komprimeringsnivå 0 till 12 (5 som standard). Bitrate ignoreras |

En bitrate på **Copy** hoppar över omkodning och alla codec-alternativ.

## Hantering av kapitel

| Inställning | Standard | Effekt |
|---|---|---|
| Default Chapter Behavior | Auto | Behåll om de finns, generera annars. Övriga: bara behåll, generera alltid, inga |
| Chapter Naming Format | `Chapter {n}` | Namnger kapitlen som ABM måste hitta på själv. `{n}` är numret och `{title}` källfilens namn. Kapitelnamn från filerna eller från Libex behålls |
| Silence Detection | av | Experimentell. Används bara när du delar upp en bok som saknar kapitel: ABM delar den vid tystnader. Av misslyckas en sådan uppdelning |
| Minimum Chapter Length | 60 s | Det kortaste kapitel som tystnadsdetekteringen gör |
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
| Retention Period | 7 dagar | Sätter utgångsdatumet som visas på poster i papperskorgen. Än så länge raderar inget dem på det datumet |
| Auto-Empty on Low Disk Space | av | Slår på tröskeln nedanför |
| Auto-Empty Threshold | 10 | Efter en konvertering raderas de äldsta posterna om papperskorgen innehåller mer än så här många GB. Sidan visar det som procent, men det läses som GB |
| Delete Original | av | Standard för varje jobb, kan åsidosättas |
| Update Library Paths | på | Bokposterna följer de konverterade filerna |
| Auto-Reformat on Import | av | Konverterar nyimporterade böcker som kommer i ett annat format, med standardvalen ovan |
| Backup Original Metadata | av | Sparar en förteckning över originalfilerna (namn, format, storlek) i `.metadata_backup/` bredvid dem innan konverteringen. Ljudtaggarna sparas inte |

## Avancerat för FFmpeg

FFmpeg Path (tom hittar den via PATH), Threads Per Job (0 väljer automatiskt antal CPU:er minus 2), Custom FFmpeg Arguments (läggs till i varje kommando; felaktiga gör att konverteringar misslyckas), Logging Level (error som standard) och Keep FFmpeg Logs (av).
