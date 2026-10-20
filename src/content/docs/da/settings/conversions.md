---
title: Konverteringsindstillinger
description: Standarder, codec-valg, kapitler, metadata, papirkurv og ffmpeg.
---

**Settings > Conversions** sætter standarderne for [Konverteringer](/da/using/conversions/). Ethvert job kan tilsidesætte dem.

## Generelt

| Indstilling | Standard | Virkning |
|---|---|---|
| Enable Conversions | til | Er det slået fra, afvises oprettelse, masse-kø eller nyt forsøg på en konvertering med HTTP 409, et job, der allerede er i kø, fejler med en besked om det, og **Auto-Reformat on Import** sætter intet i kø |
| Conversion Folder | tom | Arbejdsplads. Tom bruger systemets midlertidige mappe |
| Concurrent Conversions | 2 | 1 til 4. Hold denne gange **Threads Per Job** ved eller under dit antal kerner. Siden advarer, når det er højere |
| Threads Per Job | Auto | FFmpeg-tråde pr. job, i avanceret visning. Auto lader to kerner være til ABM og deler resten mellem de job, der kører samtidig, så 8 kerner og 2 samtidige job giver 3 tråde hver. Eller vælg et fast antal |
| Process Priority | Normal | Low holder resten af systemet kvikt. High bliver færdig hurtigere |

## Standarder for lydkvalitet

| Indstilling | Standard |
|---|---|
| Default Output Format | M4B (også MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, eller Copy for ingen omkodning) |
| Default Sample Rate | Auto, som ikke sender nogen frekvens med og lader FFmpeg bestemme. Eller 22050, 44100 eller 48000 Hz, som resampler. Opus tager kun bestemte frekvenser, så 22050 bliver til 24000 og 44100 til 48000 (loggen siger det) |
| Default Channels | Auto, som beholder kildens layout. Mono blander ned til én kanal for mindre filer. Stereo gennemtvinger to |

De to lister for frekvens og kanaler accepterer kun det, siden tilbyder. En ugyldig gemt værdi indlæses som Auto.

## Codec-valg

| Format | Encoder | Muligheder |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC som standard) og AAC VBR, kvalitet 1 til 5. Bitraten gælder, når VBR er slået fra. AAC-LC er den eneste profil, fordi encoderen ikke kan lave HE-AAC. En gemt HE-profil indlæses som AAC-LC |
| MP3 | LAME | VBR-kvalitet 0 til 9 (4 som standard) og Joint Stereo (til). Bitrate gælder, når VBR er slået fra |
| Opus | libopus | Variabel bitrate (til) og Application: Audio (standard), VoIP eller Low Delay |
| FLAC | FLAC | Komprimeringsniveau 0 til 12 (5 som standard). Bitrate bliver ignoreret |

En bitrate på **Copy** springer omkodning og alle codec-valg over.

## Håndtering af kapitler

| Indstilling | Standard | Virkning |
|---|---|---|
| Default Chapter Behavior | Auto | Bevar dem, hvis de findes, generér dem, hvis ikke. Andre: bevar kun, generér altid, ingen |
| Chapter Naming Format | `Chapter {n}` | Navngiver de kapitler, ABM selv må finde på. `{n}` er nummeret og `{title}` kildefilens navn. Kapiteltitler fra filerne eller fra Libex bliver beholdt |
| Silence Detection | fra | For en fil uden kapitler laver ABM kapitler ved de længste pauser i lyden. Bruges af Split Chapters og af Ensure Chapters på en enkelt fil, når Libex ikke har kapitler. Er det slået fra, fejler opdeling af sådan en fil |
| Target Chapter Length | 600 s | Vises, når Silence Detection er slået til, 60 s eller mere. Hvert kapitel slutter ved den længste pause inden for halvdelen af denne længde til hver side, eller ved denne længde, hvis der ikke er nogen pause. En kort hale lægges til sidste kapitel, og kapitlerne dækker hele filen |
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
| Retention Period | 7 dage | Elementer, der er ældre end dette, slettes af papirkurvens oprydningsopgave. 0 beholder dem for altid |
| Auto-Empty When Bin Is Large | fra | Slår tærsklen nedenfor til |
| Auto-Empty Threshold | 10 GB | Efter en konvertering slettes de ældste elementer, hvis papirkurven rummer mere end dette |
| Delete Original | fra | Standard for hvert job, kan tilsidesættes |
| Update Library Paths | til | Bogposterne følger de konverterede filer |
| Auto-Reformat on Import | fra | Konverterer nyimporterede bøger, der kommer i et andet format, med standarderne ovenfor |
| Backup Original Metadata | fra | Skriver før konverteringen en JSON-fil til en mappe `.metadata_backup` inde i bogens mappe. Den lister hver originalfils navn, format og størrelse samt de tags og kapitler, der ligger i den |

## Avanceret FFmpeg

FFmpeg Path (tom finder den på PATH), Custom FFmpeg Arguments (bliver hæftet på hver kommando; forkerte argumenter får konverteringer til at fejle), Logging Level (error som standard) og Keep FFmpeg Logs (fra).
