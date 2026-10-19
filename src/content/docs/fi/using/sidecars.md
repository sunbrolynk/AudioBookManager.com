---
title: Sivutiedostot
description: Kansikuva-, OPF-, kuvaus-, lukija- ja cue-tiedostot, jotka ABM kirjoittaa kirjan viereen.
---

Sivutiedosto (sidecar) on pieni tiedosto äänen vieressä. Audiobookshelf ja muut soittimet lukevat niitä. ABM voi kirjoittaa nämä:

| Tiedosto | Sisältö |
|---|---|
| `cover.jpg` | Kirjan kansikuva |
| `.opf` | Metatiedot OPF-muodossa, Audiobookshelfin luettavissa. Nimetään kirjan ensimmäisen äänitiedoston mukaan (esimerkiksi `Dune.opf`), tai `title.opf`, kun kirjalla ei ole ääntä |
| `desc.txt` | Kuvaus |
| `reader.txt` | Lukija |
| `.cue` | Kappaleet Libexistä (tulossa seuraavassa julkaisussa) |

## Milloin ne kirjoitetaan

Kohdassa **Settings > Metadata** valinnat **Create on Book Add**, **Create on Import** ja **Create on Refresh** määräävät ajankohdan. Oletuksena vain tuonti kirjoittaa ne. **Overwrite Existing** on pois päältä, joten jo olemassa oleva tiedosto pysyy. Voit kirjoittaa ne myös muokkausikkunasta yhdelle kirjalle tai sarja- ja tekijävalinnalle. Katso [Metatietoasetukset](/fi/settings/metadata/).

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
