---
title: Conversie-instellingen
description: Standaarden, codecopties, hoofdstukken, metadata, prullenbak en ffmpeg.
---

**Settings > Conversions** bepaalt de standaarden voor [Conversies](/nl/using/conversions/). Elke job kan daarvan afwijken.

## Algemeen

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Enable Conversions | aan | Hoofdschakelaar |
| Conversion Folder | leeg | Werkruimte. Leeg gebruikt de tijdelijke map van het systeem |
| Concurrent Conversions | 2 | 1 tot 4 in de UI. Houd het aantal gelijktijdige jobs keer threads onder je aantal cores |
| Process Priority | Normal | Low houdt de rest van het systeem vlot. High is eerder klaar |

## Standaarden voor audiokwaliteit

| Instelling | Standaard |
|---|---|
| Default Output Format | M4B (ook MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, of Copy om niet opnieuw te encoderen) |
| Default Sample Rate | Auto, gelijk aan de bron |
| Default Channels | Auto, gelijk aan de bron |

## Codecopties

AAC Profile (standaard AAC-LC, HE-AAC, HE-AACv2) en AAC VBR; MP3 VBR-kwaliteit en joint stereo; FLAC-compressieniveau (standaard 5); Opus variabele bitrate (aan) en applicatietype (standaard Audio; VoIP en Low Delay bestaan ook).

## Hoofdstukken

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Default Chapter Behavior | Auto | Behouden als ze er zijn, anders genereren. Andere opties: alleen behouden, altijd genereren, geen |
| Chapter Naming Format | `Chapter {n}` | Sjabloon voor gegenereerde namen |
| Silence Detection | uit | Experimenteel. Probeert hoofdstukken te vinden aan de hand van stiltes |
| Minimum Chapter Length | 60 s | Voor gedetecteerde hoofdstukken |
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
| Retention Period | 7 dagen | 0 zet automatisch opruimen uit |
| Auto-Empty on Low Disk Space | uit | Leegt de prullenbak onder de drempel |
| Auto-Empty Threshold | 10 (%) | Niveau van vrije ruimte |
| Delete Original | uit | Standaard voor elke job, per job aan te passen |
| Update Library Paths | aan | Boekrecords volgen de geconverteerde bestanden |
| Auto-Reformat on Import | uit | Converteert nieuw geïmporteerde boeken die in een ander formaat binnenkomen, met de standaarden hierboven |
| Backup Original Metadata | uit | Slaat de originele tags eerst op in een `.json`-sidecar |

## Geavanceerd: FFmpeg

FFmpeg Path (leeg zoekt hem in PATH), Threads Per Job (0 kiest automatisch: aantal CPU's min 2), Custom FFmpeg Arguments (worden aan elk commando toegevoegd; verkeerde argumenten laten conversies mislukken), Logging Level (standaard error) en Keep FFmpeg Logs (uit).
