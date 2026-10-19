---
title: Muunnosasetukset
description: Oletukset, koodekkivalinnat, kappaleet, metatiedot, roskakori ja ffmpeg.
---

**Settings > Conversions** määrittää [muunnosten](/fi/using/conversions/) oletukset. Mikä tahansa työ voi ohittaa ne.

## Yleiset

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Enable Conversions | päällä | Pääkytkin |
| Conversion Folder | tyhjä | Työtila. Tyhjä käyttää järjestelmän väliaikaiskansiota |
| Concurrent Conversions | 2 | Käyttöliittymässä 1–4. Pidä rinnakkaisuus kertaa säikeet ytimiesi määrän alla |
| Process Priority | Normal | Low pitää muun järjestelmän reagoivana. High valmistuu nopeammin |

## Äänenlaadun oletukset

| Asetus | Oletus |
|---|---|
| Default Output Format | M4B (myös MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 tai Copy, jolloin ei koodata uudelleen) |
| Default Sample Rate | Auto, joka vastaa lähdettä |
| Default Channels | Auto, joka vastaa lähdettä |

## Koodekkivalinnat

AAC Profile (oletus AAC-LC, lisäksi HE-AAC ja HE-AACv2) ja AAC VBR; MP3:n VBR-laatu ja joint stereo; FLACin pakkaustaso (oletus 5); Opuksen vaihteleva bittinopeus (päällä) ja sovellustyyppi (oletus Audio; lisäksi VoIP ja Low Delay).

## Kappaleiden käsittely

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Default Chapter Behavior | Auto | Säilytä, jos niitä on, muuten luo. Muut: vain säilytys, luo aina, ei mitään |
| Chapter Naming Format | `Chapter {n}` | Pohja luotujen kappaleiden nimille |
| Silence Detection | pois | Kokeellinen. Yrittää löytää kappaleet hiljaisuuksien perusteella |
| Minimum Chapter Length | 60 s | Tunnistetuille kappaleille |
| Chapter Image Handling | Keep in file | Tai poista, tai pura kansioon |

## Metatietojen käsittely

| Asetus | Oletus |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | päällä (vain JPEG, Audiobookshelfia varten) |
| Cover Art Max Size | 1000x1000 |

## Tiedostojen hallinta

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Enable Recycle Bin | päällä | Alkuperäiset menevät roskakoriin poistamisen sijaan |
| Recycle Bin Path | tyhjä | Tyhjä käyttää polkua `/config/recycle/conversions` |
| Retention Period | 7 päivää | 0 poistaa automaattisen siivouksen käytöstä |
| Auto-Empty on Low Disk Space | pois | Tyhjentää roskakorin, kun ollaan raja-arvon alla |
| Auto-Empty Threshold | 10 (%) | Vapaan tilan taso |
| Delete Original | pois | Oletus jokaiselle työlle, ohitettavissa |
| Update Library Paths | päällä | Kirjojen tietueet seuraavat muunnettuja tiedostoja |
| Auto-Reformat on Import | pois | Muuntaa uudet tuodut kirjat, jotka tulevat eri muodossa, yllä olevilla oletuksilla |
| Backup Original Metadata | pois | Tallentaa alkuperäiset tagit ensin `.json`-sivutiedostoon |

## FFmpegin lisäasetukset

FFmpeg Path (tyhjä etsii sen PATHista), Threads Per Job (0 valitsee automaattisesti, eli suorittimien määrä miinus 2), Custom FFmpeg Arguments (lisätään jokaiseen komentoon; huonot argumentit saavat muunnokset epäonnistumaan), Logging Level (oletuksena error) ja Keep FFmpeg Logs (pois).
