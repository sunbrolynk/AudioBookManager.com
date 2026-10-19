---
title: Konverteringsindstillinger
description: Standarder, codec-valg, kapitler, metadata, papirkurv og ffmpeg.
---

**Settings > Conversions** sætter standarderne for [Konverteringer](/da/using/conversions/). Ethvert job kan tilsidesætte dem.

## Generelt

| Indstilling | Standard | Virkning |
|---|---|---|
| Enable Conversions | til | Hovedkontakt |
| Conversion Folder | tom | Arbejdsplads. Tom bruger systemets midlertidige mappe |
| Concurrent Conversions | 2 | 1 til 4 i UI'et. Hold samtidighed gange tråde under dit antal kerner |
| Process Priority | Normal | Low holder resten af systemet kvikt. High bliver færdig hurtigere |

## Standarder for lydkvalitet

| Indstilling | Standard |
|---|---|
| Default Output Format | M4B (også MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, eller Copy for ingen omkodning) |
| Default Sample Rate | Auto, som matcher kilden |
| Default Channels | Auto, som matcher kilden |

## Codec-valg

AAC Profile (AAC-LC som standard, HE-AAC, HE-AACv2) og AAC VBR; MP3 VBR-kvalitet og joint stereo; FLAC-komprimeringsniveau (5 som standard); Opus variabel bitrate (til) og applikationstype (Audio som standard; VoIP og Low Delay findes også).

## Håndtering af kapitler

| Indstilling | Standard | Virkning |
|---|---|---|
| Default Chapter Behavior | Auto | Bevar dem, hvis de findes, generér dem, hvis ikke. Andre: bevar kun, generér altid, ingen |
| Chapter Naming Format | `Chapter {n}` | Skabelon til genererede navne |
| Silence Detection | fra | Eksperimentel. Prøver at finde kapitler ud fra stilhed |
| Minimum Chapter Length | 60 s | Til fundne kapitler |
| Chapter Image Handling | Keep in file | Eller fjern, eller udpak til en mappe |

## Håndtering af metadata

| Indstilling | Standard |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | til (kun JPEG, til Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Filhåndtering

| Indstilling | Standard | Virkning |
|---|---|---|
| Enable Recycle Bin | til | Originaler ryger i papirkurven i stedet for at blive slettet |
| Recycle Bin Path | tom | Tom bruger `/config/recycle/conversions` |
| Retention Period | 7 dage | 0 slår automatisk oprydning fra |
| Auto-Empty on Low Disk Space | fra | Tømmer papirkurven under tærsklen |
| Auto-Empty Threshold | 10 (%) | Niveau for ledig plads |
| Delete Original | fra | Standard for hvert job, kan tilsidesættes |
| Update Library Paths | til | Bogposterne følger de konverterede filer |
| Auto-Reformat on Import | fra | Konverterer nyimporterede bøger, der kommer i et andet format, med standarderne ovenfor |
| Backup Original Metadata | fra | Gemmer de originale tags i en `.json`-sidecar først |

## Avanceret FFmpeg

FFmpeg Path (tom finder den på PATH), Threads Per Job (0 vælger automatisk antal CPU'er minus 2), Custom FFmpeg Arguments (bliver hæftet på hver kommando; forkerte argumenter får konverteringer til at fejle), Logging Level (error som standard) og Keep FFmpeg Logs (fra).
