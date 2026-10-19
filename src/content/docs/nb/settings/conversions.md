---
title: Konverteringsinnstillinger
description: Standarder, kodekvalg, kapitler, metadata, papirkurv og ffmpeg.
---

**Settings > Conversions** setter standardene for [Konverteringer](/nb/using/conversions/). Hver jobb kan overstyre dem.

## Generelt

| Innstilling | Standard | Virkning |
|---|---|---|
| Enable Conversions | på | Av slår av konvertering på Conversions-siden. **Auto-Reformat on Import** er en egen innstilling |
| Conversion Folder | tom | Arbeidsområde. Tom bruker systemets midlertidige mappe |
| Concurrent Conversions | 2 | 1 til 4. Hold dette ganger **Threads Per Job** (under **Advanced FFmpeg** nederst på denne siden) på eller under antall kjerner. Siden advarer når det er høyere |
| Process Priority | Normal | Low holder resten av systemet responsivt. High blir ferdig fortere |

## Standarder for lydkvalitet

| Innstilling | Standard |
|---|---|
| Default Output Format | M4B (også MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, eller Copy for ingen omkoding) |
| Default Sample Rate | Auto, som følger kilden. Eller 22050, 44100 eller 48000 Hz |
| Default Channels | Auto, som følger kilden. Eller Mono eller Stereo |

## Kodekvalg

| Format | Koder | Valg |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC som standard) og AAC VBR, kvalitet 1 til 5. Bitraten gjelder når VBR er av. HE-AAC og HE-AACv2 står i lista, men kodes foreløpig som AAC-LC |
| MP3 | LAME | VBR-kvalitet 0 til 9 (4 som standard) og Joint Stereo (på). Bitraten gjelder når VBR er av |
| Opus | libopus | Variabel bitrate (på) og Application: Audio (standard), VoIP eller Low Delay |
| FLAC | FLAC | Komprimeringsnivå 0 til 12 (5 som standard). Bitraten blir ignorert |

En bitrate på **Copy** hopper over omkoding og alle kodekvalg.

## Kapittelhåndtering

| Innstilling | Standard | Virkning |
|---|---|---|
| Default Chapter Behavior | Auto | Behold dem hvis de finnes, lag dem hvis ikke. Andre valg: bare behold, alltid lag, ingen |
| Chapter Naming Format | `Chapter {n}` | Gir navn til kapitlene ABM må finne på selv. `{n}` er nummeret og `{title}` navnet på kildefila. Kapitteltitler fra filene eller fra Libex beholdes |
| Silence Detection | av | Eksperimentelt. Brukes bare når du deler opp en bok som ikke har kapitler: ABM deler den ved stillhet. Er den av, feiler en slik oppdeling |
| Minimum Chapter Length | 60 s | Det korteste kapittelet stillhetsdeteksjonen lager |
| Chapter Image Handling | Keep in file | Eller fjern, eller trekk ut til en mappe |

## Metadatahåndtering

| Innstilling | Standard |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | på (bare JPEG, for Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Filhåndtering

| Innstilling | Standard | Virkning |
|---|---|---|
| Enable Recycle Bin | på | Originalene havner i papirkurven i stedet for å bli slettet |
| Recycle Bin Path | tom | Tom bruker `/config/recycle/conversions` |
| Retention Period | 7 dager | Setter utløpsdatoen som vises på elementene i papirkurven. Ingenting sletter dem på den datoen ennå |
| Auto-Empty on Low Disk Space | av | Slår på terskelen under |
| Auto-Empty Threshold | 10 | Etter en konvertering slettes de eldste elementene hvis papirkurven har mer enn så mange GB. Siden viser det som prosent, men det leses som GB |
| Delete Original | av | Standard for hver jobb, kan overstyres |
| Update Library Paths | på | Bokoppføringene følger de konverterte filene |
| Auto-Reformat on Import | av | Konverterer nyimporterte bøker som kommer i et annet format, med standardene over |
| Backup Original Metadata | av | Lagrer en oversikt over originalfilene (navn, formater, størrelser) i `.metadata_backup/` ved siden av dem før konverteringen. Lydtaggene blir ikke lagret |

## Avansert FFmpeg

FFmpeg Path (tom finner den på PATH), Threads Per Job (0 velger automatisk antall CPU-er minus 2), Custom FFmpeg Arguments (legges til på slutten av hver kommando; feil argumenter får konverteringer til å feile), Logging Level (error som standard) og Keep FFmpeg Logs (av).
