---
title: Muunnosasetukset
description: Oletukset, koodekkivalinnat, kappaleet, metatiedot, roskakori ja ffmpeg.
---

**Settings > Conversions** määrittää [muunnosten](/fi/using/conversions/) oletukset. Mikä tahansa työ voi ohittaa ne.

## Yleiset

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Enable Conversions | päällä | Kun pois päältä, muunnoksen luominen, jonoon lisääminen joukolla tai uudelleen yrittäminen hylätään HTTP 409:llä, jo jonossa oleva työ epäonnistuu asiasta kertovalla viestillä, ja **Auto-Reformat on Import** ei lisää mitään jonoon |
| Conversion Folder | tyhjä | Työtila. Tyhjä käyttää järjestelmän väliaikaiskansiota |
| Concurrent Conversions | 2 | 1–4. Pidä tämä kertaa **Threads Per Job** enintään ytimien määrässä. Sivu varoittaa, kun se ylittyy |
| Threads Per Job | Auto | FFmpeg-säikeet työtä kohden, laajennetussa näkymässä. Auto jättää kaksi ydintä ABM:lle ja jakaa loput samanaikaisesti ajettavien töiden kesken, joten 8 ytimellä ja 2 samanaikaisella työllä saadaan 3 säiettä kullekin. Tai valitse kiinteä määrä |
| Process Priority | Normal | Low pitää muun järjestelmän reagoivana. High valmistuu nopeammin |

## Äänenlaadun oletukset

| Asetus | Oletus |
|---|---|
| Default Output Format | M4B (myös MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 tai Copy, jolloin ei koodata uudelleen) |
| Default Sample Rate | Auto, joka ei välitä taajuutta ja jättää valinnan FFmpegille. Tai 22050, 44100 tai 48000 Hz, joka näytteistää uudelleen. Opus hyväksyy vain tietyt taajuudet, joten 22050 muuttuu 24000:ksi ja 44100 48000:ksi (loki kertoo siitä) |
| Default Channels | Auto, joka säilyttää lähteen kanavajaon. Mono sekoittaa yhteen kanavaan pienempiä tiedostoja varten. Stereo pakottaa kaksi |

Taajuuden ja kanavien kaksi listaa hyväksyvät vain sen, mitä sivu tarjoaa. Virheellinen tallennettu arvo ladataan Autona.

## Koodekkivalinnat

| Muoto | Kooderi | Valinnat |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (oletuksena AAC-LC) ja AAC VBR, laatu 1–5. Bittinopeus pätee, kun VBR on pois päältä. AAC-LC on ainoa profiili, koska enkooderi ei osaa tehdä HE-AAC:tä. Tallennettu HE-profiili ladataan AAC-LC:nä |
| MP3 | LAME | VBR-laatu 0–9 (oletuksena 4) ja Joint Stereo (päällä). Bittinopeus pätee, kun VBR on pois |
| Opus | libopus | Vaihteleva bittinopeus (päällä) ja Application: Audio (oletus), VoIP tai Low Delay |
| FLAC | FLAC | Pakkaustaso 0–12 (oletuksena 5). Bittinopeutta ei huomioida |

Bittinopeus **Copy** ohittaa uudelleenkoodauksen ja kaikki koodekkivalinnat.

## Kappaleiden käsittely

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Default Chapter Behavior | Auto | Säilytä, jos niitä on, muuten luo. Muut: vain säilytys, luo aina, ei mitään |
| Chapter Naming Format | `Chapter {n}` | Nimeää kappaleet, jotka ABM joutuu keksimään itse. `{n}` on numero ja `{title}` lähdetiedoston nimi. Tiedostoista tai Libexistä tulevat kappaleiden nimet säilyvät |
| Silence Detection | pois | Tiedostolle, jossa ei ole lukuja, ABM tekee luvut äänen pisimpien taukojen kohtiin. Käyttävät Split Chapters ja Ensure Chapters yksittäiselle tiedostolle, kun Libexilla ei ole lukuja. Pois päältä tällaisen tiedoston jakaminen epäonnistuu |
| Target Chapter Length | 600 s | Näkyy, kun Silence Detection on päällä, vähintään 60 s. Jokainen luku päättyy pisimpään taukoon, joka on enintään puolet tästä pituudesta kummallakin puolella, tai tähän pituuteen, jos taukoa ei ole. Lyhyt häntä liitetään viimeiseen lukuun, ja luvut kattavat koko tiedoston |
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
| Retention Period | 7 päivää | Tätä vanhemmat kohteet poistaa roskakorin siivoustehtävä. 0 säilyttää ne ikuisesti |
| Auto-Empty When Bin Is Large | pois | Ottaa käyttöön alla olevan kynnyksen |
| Auto-Empty Threshold | 10 GB | Muunnoksen jälkeen, jos roskakorissa on tätä enemmän, vanhimmat kohteet poistetaan |
| Delete Original | pois | Oletus jokaiselle työlle, ohitettavissa |
| Update Library Paths | päällä | Kirjojen tietueet seuraavat muunnettuja tiedostoja |
| Auto-Reformat on Import | pois | Muuntaa uudet tuodut kirjat, jotka tulevat eri muodossa, yllä olevilla oletuksilla |
| Backup Original Metadata | pois | Ennen muunnosta kirjoittaa JSON-tiedoston kirjan kansion sisällä olevaan `.metadata_backup`-kansioon. Se listaa jokaisen alkuperäisen tiedoston nimen, muodon ja koon sekä siihen upotetut tunnisteet ja luvut |

## FFmpegin lisäasetukset

FFmpeg Path (tyhjä etsii sen PATHista), Custom FFmpeg Arguments (lisätään jokaiseen komentoon; huonot argumentit saavat muunnokset epäonnistumaan), Logging Level (oletuksena error) ja Keep FFmpeg Logs (pois).
