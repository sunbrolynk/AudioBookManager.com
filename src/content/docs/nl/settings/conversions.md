---
title: Conversie-instellingen
description: Standaarden, codecopties, hoofdstukken, metadata, prullenbak en ffmpeg.
---

**Settings > Conversions** bepaalt de standaarden voor [Conversies](/nl/using/conversions/). Elke job kan daarvan afwijken.

## Algemeen

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Enable Conversions | aan | Staat het uit, dan wordt het aanmaken, in bulk in de wachtrij zetten of opnieuw proberen van een conversie geweigerd met HTTP 409, mislukt een job die al in de wachtrij staat met een melding die dat zegt, en zet **Auto-Reformat on Import** niets in de wachtrij |
| Conversion Folder | leeg | Werkruimte. Leeg gebruikt de tijdelijke map van het systeem |
| Concurrent Conversions | 2 | 1 tot 4. Houd dit maal **Threads Per Job** op of onder je aantal kernen. De pagina waarschuwt als het hoger is |
| Threads Per Job | Auto | FFmpeg-threads per job, in de geavanceerde weergave. Auto laat twee kernen over voor ABM en verdeelt de rest over de jobs die tegelijk draaien, dus 8 kernen en 2 gelijktijdige jobs geeft 3 threads elk. Of kies een vast aantal |
| Process Priority | Normal | Low houdt de rest van het systeem vlot. High is eerder klaar |

## Standaarden voor audiokwaliteit

| Instelling | Standaard |
|---|---|
| Default Output Format | M4B (ook MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, of Copy om niet opnieuw te encoderen) |
| Default Sample Rate | Auto, dat geen samplefrequentie meegeeft en het aan FFmpeg overlaat. Of 22050, 44100 of 48000 Hz, wat resamplet. Opus neemt alleen bepaalde frequenties, dus 22050 wordt 24000 en 44100 wordt 48000 (het log meldt het) |
| Default Channels | Auto, dat de indeling van de bron houdt. Mono mixt naar één kanaal voor kleinere bestanden. Stereo dwingt er twee af |

De twee lijsten voor frequentie en kanalen accepteren alleen wat de pagina aanbiedt. Een ongeldige opgeslagen waarde wordt als Auto geladen.

## Codecopties

| Formaat | Encoder | Opties |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (standaard AAC-LC) en AAC VBR, kwaliteit 1 tot 5. De bitrate geldt als VBR uit staat. AAC-LC is het enige profiel, omdat de encoder geen HE-AAC kan. Een opgeslagen HE-profiel wordt als AAC-LC geladen |
| MP3 | LAME | VBR-kwaliteit 0 tot 9 (standaard 4) en Joint Stereo (aan). De bitrate geldt als VBR uit staat |
| Opus | libopus | Variabele bitrate (aan) en Application: Audio (standaard), VoIP of Low Delay |
| FLAC | FLAC | Compressieniveau 0 tot 12 (standaard 5). De bitrate wordt genegeerd |

Een bitrate van **Copy** slaat het opnieuw encoderen en alle codecopties over.

## Hoofdstukken

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Default Chapter Behavior | Auto | Behouden als ze er zijn, anders genereren. Andere opties: alleen behouden, altijd genereren, geen |
| Chapter Naming Format | `Chapter {n}` | Geeft namen aan de hoofdstukken die ABM zelf moet verzinnen. `{n}` is het nummer en `{title}` de naam van het bronbestand. Hoofdstuktitels uit de bestanden of van Libex blijven staan |
| Silence Detection | uit | Voor een bestand zonder hoofdstukken maakt ABM hoofdstukken bij de langste stiltes in de audio. Het wordt gebruikt door Split Chapters en door Ensure Chapters op één bestand als Libex geen hoofdstukken heeft. Staat het uit, dan mislukt het splitsen van zo'n bestand |
| Target Chapter Length | 600 s | Wordt getoond als Silence Detection aan staat, 60 s of meer. Elk hoofdstuk eindigt bij de langste stilte binnen de helft van deze lengte aan weerszijden, of bij deze lengte als er geen stilte is. Een korte staart gaat naar het laatste hoofdstuk, en de hoofdstukken beslaan het hele bestand |
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
| Retention Period | 7 dagen | Oudere items worden verwijderd door de opschoontaak van de prullenbak. 0 bewaart ze voor altijd |
| Auto-Empty When Bin Is Large | uit | Zet de drempel hieronder aan |
| Auto-Empty Threshold | 10 GB | Bevat de prullenbak na een conversie meer dan dit, dan worden de oudste items verwijderd |
| Delete Original | uit | Standaard voor elke job, per job aan te passen |
| Update Library Paths | aan | Boekrecords volgen de geconverteerde bestanden |
| Auto-Reformat on Import | uit | Converteert nieuw geïmporteerde boeken die in een ander formaat binnenkomen, met de standaarden hierboven |
| Backup Original Metadata | uit | Schrijft voor het converteren een JSON-bestand naar een map `.metadata_backup` in de map van het boek. Het somt naam, formaat en grootte van elk origineel bestand op, plus de tags en hoofdstukken die erin zitten |

## Geavanceerd: FFmpeg

FFmpeg Path (leeg zoekt hem in PATH), Custom FFmpeg Arguments (worden aan elk commando toegevoegd; verkeerde argumenten laten conversies mislukken), Logging Level (standaard error) en Keep FFmpeg Logs (uit).
