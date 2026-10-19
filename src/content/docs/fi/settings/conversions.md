---
title: Muunnosasetukset
description: Oletukset, koodekkivalinnat, kappaleet, metatiedot, roskakori ja ffmpeg.
---

**Settings > Conversions** määrittää [muunnosten](/fi/using/conversions/) oletukset. Mikä tahansa työ voi ohittaa ne.

## Yleiset

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Enable Conversions | päällä | Kytkee muuntamisen pois Conversions-sivulla. **Auto-Reformat on Import** on erillinen |
| Conversion Folder | tyhjä | Työtila. Tyhjä käyttää järjestelmän väliaikaiskansiota |
| Concurrent Conversions | 2 | 1–4. Pidä tämä kertaa **Threads Per Job** (kohdassa **Advanced FFmpeg** tämän sivun alalaidassa) korkeintaan ytimiesi määrän verran. Sivu varoittaa, jos se on enemmän |
| Process Priority | Normal | Low pitää muun järjestelmän reagoivana. High valmistuu nopeammin |

## Äänenlaadun oletukset

| Asetus | Oletus |
|---|---|
| Default Output Format | M4B (myös MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 tai Copy, jolloin ei koodata uudelleen) |
| Default Sample Rate | Auto, joka vastaa lähdettä. Tai 22050, 44100 tai 48000 Hz |
| Default Channels | Auto, joka vastaa lähdettä. Tai Mono tai Stereo |

## Koodekkivalinnat

| Muoto | Kooderi | Valinnat |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (oletuksena AAC-LC) ja AAC VBR, laatu 1–5. Bittinopeus pätee, kun VBR on pois. HE-AAC ja HE-AACv2 ovat listalla, mutta koodautuvat toistaiseksi AAC-LC:nä |
| MP3 | LAME | VBR-laatu 0–9 (oletuksena 4) ja Joint Stereo (päällä). Bittinopeus pätee, kun VBR on pois |
| Opus | libopus | Vaihteleva bittinopeus (päällä) ja Application: Audio (oletus), VoIP tai Low Delay |
| FLAC | FLAC | Pakkaustaso 0–12 (oletuksena 5). Bittinopeutta ei huomioida |

Bittinopeus **Copy** ohittaa uudelleenkoodauksen ja kaikki koodekkivalinnat.

## Kappaleiden käsittely

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Default Chapter Behavior | Auto | Säilytä, jos niitä on, muuten luo. Muut: vain säilytys, luo aina, ei mitään |
| Chapter Naming Format | `Chapter {n}` | Nimeää kappaleet, jotka ABM joutuu keksimään itse. `{n}` on numero ja `{title}` lähdetiedoston nimi. Tiedostoista tai Libexistä tulevat kappaleiden nimet säilyvät |
| Silence Detection | pois | Kokeellinen. Käytetään vain, kun pilkotaan kirjaa, jossa ei ole kappaleita: ABM pilkkoo sen hiljaisuuksien kohdalta. Pois päältä sellainen pilkkominen epäonnistuu |
| Minimum Chapter Length | 60 s | Lyhin kappale, jonka hiljaisuuden tunnistus tekee |
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
| Retention Period | 7 päivää | Määrää roskakorin kohteissa näkyvän vanhenemispäivän. Mikään ei vielä poista niitä sinä päivänä |
| Auto-Empty on Low Disk Space | pois | Ottaa käyttöön alla olevan raja-arvon |
| Auto-Empty Threshold | 10 | Jos roskakorissa on muunnoksen jälkeen enemmän kuin näin monta gigatavua, vanhimmat kohteet poistetaan. Sivu näyttää arvon prosentteina, mutta se luetaan gigatavuina |
| Delete Original | pois | Oletus jokaiselle työlle, ohitettavissa |
| Update Library Paths | päällä | Kirjojen tietueet seuraavat muunnettuja tiedostoja |
| Auto-Reformat on Import | pois | Muuntaa uudet tuodut kirjat, jotka tulevat eri muodossa, yllä olevilla oletuksilla |
| Backup Original Metadata | pois | Tallentaa ennen muuntamista alkuperäisistä tiedostoista tiedot (nimet, muodot, koot) niiden viereen kansioon `.metadata_backup/`. Äänitiedostojen tageja se ei tallenna |

## FFmpegin lisäasetukset

FFmpeg Path (tyhjä etsii sen PATHista), Threads Per Job (0 valitsee automaattisesti, eli suorittimien määrä miinus 2), Custom FFmpeg Arguments (lisätään jokaiseen komentoon; huonot argumentit saavat muunnokset epäonnistumaan), Logging Level (oletuksena error) ja Keep FFmpeg Logs (pois).
