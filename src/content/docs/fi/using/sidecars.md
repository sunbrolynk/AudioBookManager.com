---
title: Sivutiedostot
description: Tiedostot, jotka ABM kirjoittaa kirjan viereen, metadata.json, kansikuva, OPF, kuvaus ja lukijat.
---

Sivutiedosto (sidecar) on pieni tiedosto äänen vieressä. Audiobookshelf ja muut soittimet lukevat niitä. ABM kirjoittaa nämä:

| Tiedosto | Sisältö | Kytkin |
|---|---|---|
| `metadata.json` | Audiobookshelfin oma metatietotiedosto sekä `abm`-lohko, joka merkitsee sen ABM:n tiedostoksi. Audiobookshelf lukee sen ennen mitään muuta | Ei kytkintä, kirjoitetaan aina |
| `cover.jpg` | Kirjan kansikuva. Ei kirjoiteta, jos kansiossa on jo `cover.*` | cover.jpg |
| `.opf` | Metatiedot OPF-muodossa. Nimetään kirjan ensimmäisen äänitiedoston mukaan (esimerkiksi `Dune.opf`), tai `title.opf`, kun kirjalla ei ole ääntä | title.opf |
| `desc.txt` | Kuvaus ilman HTML:ää. Ohitetaan, jos kuvausta ei ole | desc.txt |
| `reader.txt` | Lukijat. Ohitetaan, jos lukijoita ei ole | reader.txt |

Kansiorakenteen kanssa nämä ovat ne tiedostot, joista Audiobookshelf lukee kirjan tiedot, joten se näkee saman kirjan kuin ABM.

## Milloin ne kirjoitetaan

`metadata.json` kirjoitetaan joka kerta, kun kirja lisätään, tuodaan tai päivitetään.

Muilla neljällä on kullakin oma kytkimensä kohdassa **Settings > Metadata > Files to Create**, ja kaikki ovat oletuksena päällä. Ne kirjoitetaan vain, kun myös vastaava käynnistin on päällä: **Create on Book Add** (pois), **Create on Import** (päällä, kattaa lataukset, kirjaston tuonnin ja Audible-lataukset) ja **Create on Refresh** (pois). **Overwrite Existing** on pois päältä, joten jo olemassa oleva tiedosto pysyy. Mitään ei kirjoiteta ennen kuin kirjan kansio on olemassa.

Muokkausikkunan **Write to Directories** kirjoittaa myös nämä neljä, yhdelle kirjalle tai sarja- ja tekijävalinnalle. Katso [Metatietoasetukset](/fi/settings/metadata/).

## Kansikuva on erikoistapaus

Itse valitsemasi kansikuva on lukittu. Katso [Kansikuvan lukitus](/fi/metadata/cover-lock/).

## Tuonnissa

Tuonti tuo mukanaan myös kirjan olemassa olevat muut kuin äänitiedostot asetusten **Media Management > Importing** mukaisesti. Kun lähteessä on `.opf`, kuvaus tai lukijatiedosto, ABM ottaa kustakin enintään yhden ja nimeää ne `desc.txt` ja `reader.txt`. Jo olemassa oleva kohde jätetään rauhaan, eikä uutta kansikuvaa koskaan kirjoiteta olemassa olevan `cover.*`-tiedoston päälle.

## Kovalinkit

Kovalinkitetty tuonti jättää alkuperäisen koskematta. Kun ABM kirjoittaa jonkin näistä tiedostoista, se kirjoittaa uuden tiedoston sen sijaan, että muokkaisi paikallaan, joten lähde, josta toit, säilyttää sisältönsä.

## Sudenkuopat

- ABM käsittelee `metadata.json`-tiedoston, kun siinä on ABM:n oma lohko. Toisen työkalun `metadata.json` noudattaa Book info files -kytkintä.
- Usean kirjan yhteisessä kansiossa kirjalle kuuluvat vain ne tiedostot, jotka on nimetty tämän kirjan äänen mukaan.
- Kirjan poistaminen poistaa sen sivutiedostot, kun ne on nimetty kyseisen kirjan tiedostojen mukaan.
