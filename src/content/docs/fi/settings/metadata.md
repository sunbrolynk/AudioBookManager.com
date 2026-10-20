---
title: Metatiedot
description: Mitkä sivutiedostot ja äänitiedostojen tagit ABM kirjoittaa, ja milloin.
---

**Settings > Metadata** ratkaisee, mitä ABM kirjoittaa kirjan kansioon ja sen tiedostoihin. Näiden tiedostojen käyttö on kuvattu sivulla [Sivutiedostot](/fi/using/sidecars/).

## Metatietotiedostojen luonti

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Create on Book Add | pois | Kirjoita tiedostot, kun kirja lisätään haluttujen listalle |
| Create on Import | päällä | Kirjoita tiedostot, kun äänikirja tuodaan |
| Create on Refresh | pois | Luo tai päivitä tiedostot, kun metatiedot päivitetään |
| Overwrite Existing | pois | Korvaa kansiossa jo olevat tiedostot |

Luotavat tiedostot: `cover.jpg` (päällä), `title.opf` (päällä, Audiobookshelf-yhteensopiva), `desc.txt` (päällä) ja `reader.txt` (päällä).

## Tagien kirjoittaminen äänitiedostoihin

Käyttää ffmpegiä tagien kirjoittamiseen suoraan ääneen.

| Asetus | Oletus |
|---|---|
| Write Audio Tags | pois |
| Write Tags on Import | päällä, kun tagien kirjoitus on päällä |
| Write Tags on Refresh | pois |

Tagikentät, kaikki oletuksena päällä: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) ja Cover Art.

## Tulossa myöhempään julkaisuun

Metatietolähteen valinta ja metatietokirjaston paikallinen kopio on suunniteltu myöhempään julkaisuun. Katso [Sinun metatietosi, sinun hallintasi](/fi/metadata/control/).

## Sudenkuopat

- Tagien kirjoittaminen muuttaa äänitiedostoja. Audiobookshelf näkee ne muokattuina.
- Jos metatietoja tai kansikuvaa ei saada haettua tagien kirjoituksen aikana, kutsu palauttaa varoituksia sen sijaan, että epäonnistuisi.
