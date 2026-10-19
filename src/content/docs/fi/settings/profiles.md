---
title: Profiilit
description: Laatuprofiilit, viiveprofiilit ja julkaisuprofiilit.
---

**Settings > Profiles** on yksi sivu, jossa on kolme osiota. Ne vastaavat kolmeen eri kysymykseen julkaisusta.

## Laatuprofiilit

Laatuprofiili on muotojen portaat, huonoin alimpana ja paras ylimpänä. Askelma on muoto (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) joko yhden tiedoston tai usean tiedoston muodossa. Askelmia voi ryhmitellä niin, että ne ovat samanarvoisia, ja askelman voi kytkeä pois.

| Asetus | Merkitys |
|---|---|
| Upgrades Allowed | Jos pois päältä, ABM ei korvaa kirjaa, kun sillä kerran on sellainen |
| Upgrade Until | Katkaisutaso. Kun tämä laatu on saavutettu, ABM lopettaa parantamisen |
| Grab off-ladder formats | Nappaa muoto, joka ei ole listalla, sen sijaan että ohittaisi kirjan |
| Default profile | Profiili, jota käytetään, kun mikään tarkempi ei päde |

Yksi profiili on oletus. Kirja käyttää järjestyksessä omaa profiiliaan, ensisijaisen sarjansa profiilia, ensisijaisen tekijänsä profiilia ja lopulta oletusta. Käytössä olevaa profiilia ei voi poistaa.

Uusi kopio korvaa sen, mitä sinulla on, vain jos profiili sallii parannukset, uusi askelma on portailla ja käytössä, kirja on katkaisutasonsa alapuolella ja uusi askelma on selvästi korkeammalla.

Jos tunnet Sonarrin: tämä on laatuprofiili, jossa laadut ovat äänimuotoja ja tiedostojen rakennetta eivätkä resoluutiota. Mukautettuja muotoja ei ole. [Julkaisuprofiilit](#julkaisuprofiilit) kattavat samantapaisia asioita.

Bittinopeus- tai kokoportaita ei ole: laatu tarkoittaa vain muotoa ja tiedostojen rakennetta. Julkaisun muodon ABM ottaa indeksoijalta tai nimestä ja päättelee rakenteen nimestä (M4B ilman osa- tai raitanumeroita lasketaan yhdeksi tiedostoksi), ja tarkistaa sen uudelleen, kun tiedostot on tuotu. [Audible-asetusten](/fi/settings/audible/) **Preferred Quality** on eri asia: se on laatu, jossa Audible-lataukset tulevat.

## Viiveprofiilit

Viiveprofiili pidättää julkaisua ennen nappaamista, jotta paremmalle julkaisulle jää aikaa ilmestyä.

| Asetus | Merkitys |
|---|---|
| Enable Usenet / Enable Torrent | Salli nappaukset kyseisellä protokollalla |
| Usenet Delay / Torrent Delay | Minuutit, jotka odotetaan ennen kyseisen protokollan julkaisun nappaamista |
| Preferred Protocol | Kumpaa suositaan, kun molemmat löytävät osuman |
| Bypass if Highest Quality | Ohita viive, kun julkaisu täyttää jo profiilin katkaisutason |
| Tags | Profiili koskee vain kohteita, joilla on vastaava tagi |

Viiveprofiilit näytetään taulukkona, kuten Sonarrissa.

## Julkaisuprofiilit

Julkaisuprofiili lisää sääntöjä laadun päälle.

| Kenttä | Merkitys |
|---|---|
| Enable Profile | Päällä tai pois |
| Must Contain | Julkaisun on sisällettävä vähintään yksi termi (kirjainkoolla ei väliä) |
| Must Not Contain | Julkaisu, jossa on yksikin näistä termeistä, hylätään |
| Preferred | Termit, jotka nostavat tai laskevat julkaisun pisteitä. Kirjoita `/regex/`, jos haluat käyttää säännöllistä lauseketta |
| Narration language | Rajaa kieleen |
| Indexer | Koske yhtä indeksoijaa tai mitä tahansa |
| Tags | Koske vain kohteita, joilla on vastaava tagi |

Julkaisuprofiilit näytetään taulukkona.

## Sudenkuopat

- Profiilit eivät koskaan poista tiedostoja. Ne päättävät, mitä napataan ja mikä lasketaan parannukseksi.
- Viive- tai julkaisuprofiilin tagit rajaavat sen kirjoihin, joilla on jokin niistä tageista.
