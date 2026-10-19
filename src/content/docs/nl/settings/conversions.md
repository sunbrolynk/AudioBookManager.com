---
title: Conversie-instellingen
description: Standaarden, codecopties, hoofdstukken, metadata, prullenbak en ffmpeg.
---

**Settings > Conversions** bepaalt de standaarden voor [Conversies](/nl/using/conversions/). Elke job kan daarvan afwijken.

## Algemeen

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Enable Conversions | aan | Zet converteren uit op de pagina Conversions. **Auto-Reformat on Import** staat hier los van |
| Conversion Folder | leeg | Werkruimte. Leeg gebruikt de tijdelijke map van het systeem |
| Concurrent Conversions | 2 | 1 tot 4. Houd dit getal keer **Threads Per Job** (onder **Advanced FFmpeg** onderaan deze pagina) op of onder je aantal cores. De pagina waarschuwt als het hoger is |
| Process Priority | Normal | Low houdt de rest van het systeem vlot. High is eerder klaar |

## Standaarden voor audiokwaliteit

| Instelling | Standaard |
|---|---|
| Default Output Format | M4B (ook MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, of Copy om niet opnieuw te encoderen) |
| Default Sample Rate | Auto, gelijk aan de bron. Of 22050, 44100 of 48000 Hz |
| Default Channels | Auto, gelijk aan de bron. Of Mono of Stereo |

## Codecopties

| Formaat | Encoder | Opties |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (standaard AAC-LC) en AAC VBR, kwaliteit 1 tot 5. De bitrate geldt als VBR uit staat. HE-AAC en HE-AACv2 staan in de lijst, maar encoderen op dit moment als AAC-LC |
| MP3 | LAME | VBR-kwaliteit 0 tot 9 (standaard 4) en Joint Stereo (aan). De bitrate geldt als VBR uit staat |
| Opus | libopus | Variabele bitrate (aan) en Application: Audio (standaard), VoIP of Low Delay |
| FLAC | FLAC | Compressieniveau 0 tot 12 (standaard 5). De bitrate wordt genegeerd |

Een bitrate van **Copy** slaat het opnieuw encoderen en alle codecopties over.

## Hoofdstukken

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Default Chapter Behavior | Auto | Behouden als ze er zijn, anders genereren. Andere opties: alleen behouden, altijd genereren, geen |
| Chapter Naming Format | `Chapter {n}` | Geeft namen aan de hoofdstukken die ABM zelf moet verzinnen. `{n}` is het nummer en `{title}` de naam van het bronbestand. Hoofdstuktitels uit de bestanden of van Libex blijven staan |
| Silence Detection | uit | Experimenteel. Wordt alleen gebruikt bij het splitsen van een boek zonder hoofdstukken: ABM splitst het dan bij stiltes. Staat het uit, dan mislukt zo'n splitsing |
| Minimum Chapter Length | 60 s | Het kortste hoofdstuk dat stiltedetectie maakt |
| Chapter Image Handling | Keep in file | Of verwijderen, of uitpakken naar een map |

## Metadata

| Instelling | Standaard |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | aan (alleen JPEG, voor Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Bestandsbeheer

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Enable Recycle Bin | aan | Originelen gaan naar de prullenbak in plaats van verwijderd te worden |
| Recycle Bin Path | leeg | Leeg gebruikt `/config/recycle/conversions` |
| Retention Period | 7 dagen | Bepaalt de vervaldatum die bij items in de prullenbak staat. Op die datum wordt er nog niks verwijderd |
| Auto-Empty on Low Disk Space | uit | Zet de drempel hieronder aan |
| Auto-Empty Threshold | 10 | Bevat de prullenbak na een conversie meer dan dit aantal GB, dan worden de oudste items verwijderd. De pagina toont het als percentage, maar het wordt gelezen als GB |
| Delete Original | uit | Standaard voor elke job, per job aan te passen |
| Update Library Paths | aan | Boekrecords volgen de geconverteerde bestanden |
| Auto-Reformat on Import | uit | Converteert nieuw geïmporteerde boeken die in een ander formaat binnenkomen, met de standaarden hierboven |
| Backup Original Metadata | uit | Slaat voor het converteren een overzicht van de originele bestanden (namen, formaten, groottes) op in `.metadata_backup/` ernaast. De audiotags worden niet bewaard |

## Geavanceerd: FFmpeg

FFmpeg Path (leeg zoekt hem in PATH), Threads Per Job (0 kiest automatisch: aantal CPU's min 2), Custom FFmpeg Arguments (worden aan elk commando toegevoegd; verkeerde argumenten laten conversies mislukken), Logging Level (standaard error) en Keep FFmpeg Logs (uit).
