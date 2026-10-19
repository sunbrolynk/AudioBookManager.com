---
title: Metatietosi, sinun hallinnassasi
description: Mitä päivitys muuttaa, mitä sinä hallitset ja mitkä tiedostot ja tagit ABM kirjoittaa soittimellesi.
---

ABM pitää kirjastosi metatiedoista kirjaa omassa tietokannassaan ja kirjoittaa ne takaisin sinne, missä soittimesi voi niitä käyttää. Tällä sivulla käydään läpi, mitä sinä hallitset ja mihin päivitys koskee.

## Mitä päivitys muuttaa

Päivitys (kirjan **Refresh & Scan**, tekijän päivitys, sarjan päivitys) kysyy metatietolähteeltä uudelleen ja ottaa käyttöön sen, mitä sieltä tulee. Kentät, jotka se korvaa, kun lähteellä on arvo: nimi, alaotsikko, vuosi ja julkaisupäivä, arvosana, kesto, kieli, kustantaja, kuvaus, tekijät, lukijat, lajityypit ja kansikuva.

Kenttä, jonka lähde palauttaa tyhjänä, jätetään ennalleen.

## Mitä sinä hallitset

- **Itse valitsemasi kansikuva.** Se on lukittu. Katso [Kansikuvan lukitus](/fi/metadata/cover-lock/).
- **Tagit, automaattiset tagit, seuranta, laatuprofiilivalinnat ja itse tiedostot.** Päivitys ei koske niihin.
- **Kirja, jonka tiedostoja ei voi lukea.** Se jätetään kokonaan rauhaan, ja Tasks-sivu näyttää syyn.

Kirjan tiedot, kuten nimi, tekijät ja kuvaus, tulevat lähteestä. ABM ei tarjoa niiden käsin muokkausta, eikä sellaista ole suunnitteilla. Sinä hallitset sitä, miten ne säilytetään ja minne ne kirjoitetaan.

## Muokkausikkuna

Muokkausikkuna muuttaa seurantaa, laatuprofiilia, polkua ja tageja, ja sillä voit kirjoittaa sivutiedostot ja äänitiedostojen tagit samalla kertaa, yhdelle kirjalle tai kokonaiselle sarja- ja tekijävalinnalle. Katso [Kirjasto](/fi/using/library/#muokkausikkuna).

## Sivutiedostot, joita soittimesi lukee

ABM kirjoittaa äänen viereen tiedostot `cover.jpg`, `.opf`, `desc.txt` ja `reader.txt`, ja seuraavassa julkaisussa myös `.cue`-kappaletaulukon. Audiobookshelf lukee OPF:n, kansikuvan ja tekstitiedostot, joten se, minkä valitsit ABM:ssä, on se, minkä soitin näyttää. Katso [Sivutiedostot](/fi/using/sidecars/).

## Ääneen kirjoitettavat tagit

ABM voi kirjoittaa nimen, esittäjän, albumin esittäjän, albumin, lajityypin, vuoden, kommentin, lukijan ja upotetun kansikuvan suoraan äänitiedostoihin, jolloin tiedot kulkevat tiedoston mukana. Se on oletuksena pois päältä. Valitse kentät kohdassa **Settings > Metadata**. Katso [Metatietoasetukset](/fi/settings/metadata/).

## Kappaleet

ABM vertaa tiedostoihisi upotettuja kappaleita julkaistun painoksen kappaleisiin ja voi kirjoittaa julkaistut kappaleet tiedostoihin koodaamatta niitä uudelleen. Se kieltäytyy, jos äänen pituus osoittaa, että kyse on eri painoksesta. Katso [Kappaleet](/fi/using/chapters/). Tulossa seuraavassa julkaisussa.

## Sarja ja sijainti

Kirjalla on sarjansa ja sijaintinsa siinä. ABM seuraa sarjoja katalogeina, jotta se voi näyttää, mitkä kirjat omistat, ja lisätä puuttuvat. Katso [Sarjojen seuranta](/fi/using/series-tracking/).

## Tagit ja automaattiset tagit

Tagit ovat sinun. Automaattiset tagit lisäävät niitä sääntöjen perusteella (lajityyppi, lukija, arvosana, kesto ja muuta), ja ne voivat poistaa tagit, kun kirja ei enää täsmää. Tagit ohjaavat sitten profiileja, ilmoituksia, indeksoijia, tuontilistoja ja kalenterisyötettä. Katso [Tagit](/fi/settings/tags/).

## Kasvava paikallinen tietovarasto

Kaikki, mitä ABM saa kirjasta selville, jää ABM:n omaan SQLite-tietokantaan kansioon `/config`, myös myöhemmin poistamasi kirjat. Varmuuskopioi se kansio, niin tiedot on varmuuskopioitu. Kun kirja on kerran sisällä, metatiedot eivät riipu siitä, saadaanko lähteeseen yhteys.

:::caution[Tulossa seuraavaan julkaisuun]
Suunnitteilla on erillinen **Local Metadata Library**: vapaaehtoinen kopio kaikesta, mitä ABM on koskaan hakenut, säilytettynä silloinkin, kun kirja lähtee kirjastostasi, omine ajastettuine varmuuskopioineen ja SQLite-latauksineen. Metadata-sivun osio sitä varten on mukana vielä yhdistämättömässä työssä ja merkitty esikatseluksi, eikä sitä ole vielä kytketty.
:::

## Päivitysten ajastukset

- Discoverilla on oma ajastuksensa. Katso [Discover-asetukset](/fi/settings/discover/).
- Audible-kirjastolla on oma synkronointiajastuksensa. Katso [Audible-asetukset](/fi/settings/audible/).
- Kirjaston skannaus voi ajaa N tunnin välein ja tiedostomuutosten yhteydessä. Katso [Median hallinta](/fi/settings/media-management/).
- Sivutiedostojen ja tagien kirjoittamista päivityksen yhteydessä ohjaavat **Create on Refresh** ja **Write Tags on Refresh**.
