---
title: Metatiedot
description: Mitkä sivutiedostot ja äänitiedostojen tagit ABM kirjoittaa, ja milloin.
---

**Settings > Metadata** ratkaisee, mitä ABM kirjoittaa kirjan kansioon ja sen tiedostoihin. Näiden tiedostojen käyttö on kuvattu sivulla [Sivutiedostot](/fi/using/sidecars/).

## Lähde (Source)

**Metadata Source** on Built-in (oletus), Hosted (libexdb.com) tai Self-hosted, joka vaatii **Server URL** -osoitteen. **Test** tekee oikean pyynnön valittuun lähteeseen tallentamatta, **Status** kertoo onko se valmis, ja **Connection** näyttää reitin, jota hakuja lähetetään, ja linkittää kohtaan **Settings > Network**. Vaihto tulee voimaan heti kaikkiin hakuihin. Katso [Metatietolähteen valinta](/fi/metadata/choosing-a-source/).

## Metatietotiedostojen luonti

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Create on Book Add | pois | Kirjoita tiedostot, kun kirja lisätään haluttujen listalle |
| Create on Import | päällä | Kirjoita tiedostot, kun äänikirja tuodaan |
| Create on Refresh | pois | Luo tai päivitä tiedostot, kun metatiedot päivitetään |
| Overwrite Existing | pois | Korvaa kansiossa jo olevat tiedostot |

Luotavat tiedostot: `cover.jpg` (päällä), `title.opf` (päällä, Audiobookshelf-yhteensopiva), `desc.txt` (päällä) ja `reader.txt` (päällä).

## Tagien kirjoittaminen äänitiedostoihin

Kirjoittaa audiotagit suoraan äänitiedostoihin.

| Asetus | Oletus |
|---|---|
| Write Audio Tags | pois |
| Write Audio Tags on Import | päällä, kun tagien kirjoitus on päällä |
| Write Audio Tags on Refresh | pois |

Tagikentät, kaikki oletuksena päällä: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) ja Cover Art.

## Paikallinen tallennus (Local Storage)

Built-in-lähteen kanssa näkyvät osiot **Local Storage** ja **Storage Backups**. Ne ovat esikatselu eivätkä ole vielä kytkettyinä. Katso [Metatietosi, sinun hallinnassasi](/fi/metadata/control/).

## Sudenkuopat

- Tagien kirjoittaminen muuttaa äänitiedostoja. Audiobookshelf näkee ne muokattuina.
- Jos metatietoja tai kansikuvaa ei saada haettua tagien kirjoituksen aikana, kutsu palauttaa varoituksia sen sijaan, että epäonnistuisi.
- Kun kantta ei voitu upottaa, koska yhteys hylkäsi sen, kirjan sivu ja muokkausikkuna näyttävät varoituksen pelkän onnistumisen sijaan.
