---
title: Konverteringsindstillinger
description: Standarder, codec-valg, kapitler, metadata, papirkurv og ffmpeg.
---

**Settings > Conversions** sætter standarderne for [Konverteringer](/da/using/conversions/). Ethvert job kan tilsidesætte dem.

## Generelt

| Indstilling | Standard | Virkning |
|---|---|---|
| Enable Conversions | til | Slår konvertering fra på siden Conversions. **Auto-Reformat on Import** er separat |
| Conversion Folder | tom | Arbejdsplads. Tom bruger systemets midlertidige mappe |
| Concurrent Conversions | 2 | 1 til 4. Hold det her gange **Threads Per Job** (under **Advanced FFmpeg** nederst på siden) på eller under dit antal kerner. Siden advarer, når det er højere |
| Process Priority | Normal | Low holder resten af systemet kvikt. High bliver færdig hurtigere |

## Standarder for lydkvalitet

| Indstilling | Standard |
|---|---|
| Default Output Format | M4B (også MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, eller Copy for ingen omkodning) |
| Default Sample Rate | Auto, som matcher kilden. Eller 22050, 44100 eller 48000 Hz |
| Default Channels | Auto, som matcher kilden. Eller Mono eller Stereo |

## Codec-valg

| Format | Encoder | Muligheder |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC som standard) og AAC VBR, kvalitet 1 til 5. Bitrate gælder, når VBR er slået fra. HE-AAC og HE-AACv2 står på listen, men bliver i øjeblikket kodet som AAC-LC |
| MP3 | LAME | VBR-kvalitet 0 til 9 (4 som standard) og Joint Stereo (til). Bitrate gælder, når VBR er slået fra |
| Opus | libopus | Variabel bitrate (til) og Application: Audio (standard), VoIP eller Low Delay |
| FLAC | FLAC | Komprimeringsniveau 0 til 12 (5 som standard). Bitrate bliver ignoreret |

En bitrate på **Copy** springer omkodning og alle codec-valg over.

## Håndtering af kapitler

| Indstilling | Standard | Virkning |
|---|---|---|
| Default Chapter Behavior | Auto | Bevar dem, hvis de findes, generér dem, hvis ikke. Andre: bevar kun, generér altid, ingen |
| Chapter Naming Format | `Chapter {n}` | Navngiver de kapitler, ABM selv må finde på. `{n}` er nummeret og `{title}` kildefilens navn. Kapiteltitler fra filerne eller fra Libex bliver beholdt |
| Silence Detection | fra | Eksperimentel. Bruges kun, når en bog uden kapitler skal deles op: ABM deler den ved stilheder. Slået fra fejler sådan en opdeling |
| Minimum Chapter Length | 60 s | Det korteste kapitel, stilhedsregistreringen laver |
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
| Retention Period | 7 dage | Sætter den udløbsdato, der står på elementerne i papirkurven. Endnu er der ikke noget, der sletter dem på den dato |
| Auto-Empty on Low Disk Space | fra | Slår tærsklen nedenfor til |
| Auto-Empty Threshold | 10 | Efter en konvertering bliver de ældste elementer slettet, hvis papirkurven fylder mere end så mange GB. Siden viser det som en procent, men det bliver læst som GB |
| Delete Original | fra | Standard for hvert job, kan tilsidesættes |
| Update Library Paths | til | Bogposterne følger de konverterede filer |
| Auto-Reformat on Import | fra | Konverterer nyimporterede bøger, der kommer i et andet format, med standarderne ovenfor |
| Backup Original Metadata | fra | Gemmer en oversigt over de originale filer (navne, formater, størrelser) i `.metadata_backup/` ved siden af dem, før der bliver konverteret. Den gemmer ikke lydtags |

## Avanceret FFmpeg

FFmpeg Path (tom finder den på PATH), Threads Per Job (0 vælger automatisk antal CPU'er minus 2), Custom FFmpeg Arguments (bliver hæftet på hver kommando; forkerte argumenter får konverteringer til at fejle), Logging Level (error som standard) og Keep FFmpeg Logs (fra).
