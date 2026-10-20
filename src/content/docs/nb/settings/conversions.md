---
title: Konverteringsinnstillinger
description: Standarder, kodekvalg, kapitler, metadata, papirkurv og ffmpeg.
---

**Settings > Conversions** setter standardene for [Konverteringer](/nb/using/conversions/). Hver jobb kan overstyre dem.

## Generelt

| Innstilling | Standard | Virkning |
|---|---|---|
| Enable Conversions | på | Er det av, avvises oppretting, masseplassering i kø eller nytt forsøk på en konvertering med HTTP 409, en jobb som allerede står i kø feiler med en melding om det, og **Auto-Reformat on Import** setter ingenting i kø |
| Conversion Folder | tom | Arbeidsområde. Tom bruker systemets midlertidige mappe |
| Concurrent Conversions | 2 | 1 til 4. Hold denne ganger **Threads Per Job** ved eller under antall kjerner. Siden advarer når det er høyere |
| Threads Per Job | Auto | FFmpeg-tråder per jobb, i avansert visning. Auto lar to kjerner være igjen til ABM og deler resten mellom jobbene som kjører samtidig, så 8 kjerner og 2 samtidige jobber gir 3 tråder hver. Eller velg et fast antall |
| Process Priority | Normal | Low holder resten av systemet responsivt. High blir ferdig fortere |

## Standarder for lydkvalitet

| Innstilling | Standard |
|---|---|
| Default Output Format | M4B (også MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, eller Copy for ingen omkoding) |
| Default Sample Rate | Auto, som ikke sender med noen frekvens og lar FFmpeg bestemme. Eller 22050, 44100 eller 48000 Hz, som resampler. Opus tar bare bestemte frekvenser, så 22050 blir 24000 og 44100 blir 48000 (loggen sier fra) |
| Default Channels | Auto, som beholder kildens oppsett. Mono mikser ned til én kanal for mindre filer. Stereo tvinger to |

De to listene for frekvens og kanaler tar bare imot det siden tilbyr. En ugyldig lagret verdi lastes som Auto.

## Kodekvalg

| Format | Koder | Valg |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC som standard) og AAC VBR, kvalitet 1 til 5. Bitraten gjelder når VBR er av. AAC-LC er den eneste profilen, fordi encoderen ikke kan lage HE-AAC. En lagret HE-profil lastes som AAC-LC |
| MP3 | LAME | VBR-kvalitet 0 til 9 (4 som standard) og Joint Stereo (på). Bitraten gjelder når VBR er av |
| Opus | libopus | Variabel bitrate (på) og Application: Audio (standard), VoIP eller Low Delay |
| FLAC | FLAC | Komprimeringsnivå 0 til 12 (5 som standard). Bitraten blir ignorert |

En bitrate på **Copy** hopper over omkoding og alle kodekvalg.

## Kapittelhåndtering

| Innstilling | Standard | Virkning |
|---|---|---|
| Default Chapter Behavior | Auto | Behold dem hvis de finnes, lag dem hvis ikke. Andre valg: bare behold, alltid lag, ingen |
| Chapter Naming Format | `Chapter {n}` | Gir navn til kapitlene ABM må finne på selv. `{n}` er nummeret og `{title}` navnet på kildefila. Kapitteltitler fra filene eller fra Libex beholdes |
| Silence Detection | av | For en fil uten kapitler lager ABM kapitler ved de lengste pausene i lyden. Brukes av Split Chapters og av Ensure Chapters på en enkeltfil når Libex ikke har kapitler. Er det av, feiler oppdeling av en slik fil |
| Target Chapter Length | 600 s | Vises når Silence Detection er på, 60 s eller mer. Hvert kapittel slutter ved den lengste pausen innenfor halvparten av denne lengden til hver side, eller ved denne lengden hvis det ikke er noen pause. En kort hale slås sammen med siste kapittel, og kapitlene dekker hele filen |
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
| Retention Period | 7 dager | Elementer som er eldre enn dette, slettes av oppryddingsoppgaven for papirkurven. 0 beholder dem for alltid |
| Auto-Empty When Bin Is Large | av | Slår på terskelen under |
| Auto-Empty Threshold | 10 GB | Etter en konvertering slettes de eldste elementene hvis papirkurven rommer mer enn dette |
| Delete Original | av | Standard for hver jobb, kan overstyres |
| Update Library Paths | på | Bokoppføringene følger de konverterte filene |
| Auto-Reformat on Import | av | Konverterer nyimporterte bøker som kommer i et annet format, med standardene over |
| Backup Original Metadata | av | Skriver før konverteringen en JSON-fil til en mappe `.metadata_backup` inne i bokens mappe. Den lister hver originalfils navn, format og størrelse, pluss taggene og kapitlene som ligger i den |

## Avansert FFmpeg

FFmpeg Path (tom finner den på PATH), Custom FFmpeg Arguments (legges til på slutten av hver kommando; feil argumenter får konverteringer til å feile), Logging Level (error som standard) og Keep FFmpeg Logs (av).
