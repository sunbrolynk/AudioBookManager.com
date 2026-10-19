---
title: Konverteringsinnstillinger
description: Standarder, kodekvalg, kapitler, metadata, papirkurv og ffmpeg.
---

**Settings > Conversions** setter standardene for [Konverteringer](/nb/using/conversions/). Hver jobb kan overstyre dem.

## Generelt

| Innstilling | Standard | Virkning |
|---|---|---|
| Enable Conversions | på | Hovedbryter |
| Conversion Folder | tom | Arbeidsområde. Tom bruker systemets midlertidige mappe |
| Concurrent Conversions | 2 | 1 til 4 i grensesnittet. Hold samtidige jobber ganger tråder under antall kjerner |
| Process Priority | Normal | Low holder resten av systemet responsivt. High blir ferdig fortere |

## Standarder for lydkvalitet

| Innstilling | Standard |
|---|---|
| Default Output Format | M4B (også MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, eller Copy for ingen omkoding) |
| Default Sample Rate | Auto, som følger kilden |
| Default Channels | Auto, som følger kilden |

## Kodekvalg

AAC Profile (AAC-LC som standard, HE-AAC, HE-AACv2) og AAC VBR; MP3 VBR-kvalitet og joint stereo; FLAC-komprimeringsnivå (5 som standard); Opus variabel bitrate (på) og applikasjonstype (Audio som standard; VoIP og Low Delay finnes også).

## Kapittelhåndtering

| Innstilling | Standard | Virkning |
|---|---|---|
| Default Chapter Behavior | Auto | Behold dem hvis de finnes, lag dem hvis ikke. Andre valg: bare behold, alltid lag, ingen |
| Chapter Naming Format | `Chapter {n}` | Mal for genererte navn |
| Silence Detection | av | Eksperimentelt. Prøver å finne kapitler ut fra stillhet |
| Minimum Chapter Length | 60 s | For kapitler som blir funnet |
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
| Retention Period | 7 dager | 0 slår av automatisk opprydding |
| Auto-Empty on Low Disk Space | av | Tømmer papirkurven under terskelen |
| Auto-Empty Threshold | 10 (%) | Nivå for ledig plass |
| Delete Original | av | Standard for hver jobb, kan overstyres |
| Update Library Paths | på | Bokoppføringene følger de konverterte filene |
| Auto-Reformat on Import | av | Konverterer nyimporterte bøker som kommer i et annet format, med standardene over |
| Backup Original Metadata | av | Lagrer de opprinnelige taggene til en `.json`-sidefil først |

## Avansert FFmpeg

FFmpeg Path (tom finner den på PATH), Threads Per Job (0 velger automatisk antall CPU-er minus 2), Custom FFmpeg Arguments (legges til på slutten av hver kommando; feil argumenter får konverteringer til å feile), Logging Level (error som standard) og Keep FFmpeg Logs (av).
