---
title: Median hallinta
description: Juurikansiot, tuonti, lisätiedostot, roskakori, skannaukset, parannukset ja oikeudet.
---

**Settings > Media Management** määrää, missä kirjat asuvat ja miten tiedostot siirtyvät sisään. Lisäasetuksiksi merkityt asetukset tulevat näkyviin valinnalla **Show Advanced**.

## Juurikansiot (Root Folders)

Juurikansio on hakemisto, jossa ABM hallitsee kirjoja. Lisää sellainen painikkeella **Add Root Folder**, joka avaa kansioselaimen, johon voi myös kirjoittaa polun. ABM voi myös listata juurikansion alla olevat kansiot, joita ei ole vielä yhdistetty mihinkään, ja tuoda ne. Juurikansion vapaa tila ja kovalinkkituki tarkistetaan, kun se lisätään. Juurikansion poistaminen kysyy, mitä tehdään: **Remove from ABM only** (oletus) unohtaa sen alla olevat kirjat ja jättää tiedostot, ja **Delete the books and their files** poistaa pysyvästi kaiken polun alla olevan ilman roskakoria. Jos juurikansiossa on kirjoja, vahvistus pitää kirjoittaa.

Oletusjuurikansio on se, johon uudet kirjat menevät, ja se ratkaisee, tarjotaanko kirjaston tuonnissa kovalinkitystä.

## Kansiot (Folders)

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Create Empty Book Folders | pois | Luo puuttuvat kirjakansiot lisäyksen, juurikansion vaihdon ja levyskannauksen yhteydessä. Ohitetaan, kun **Delete empty folders** on päällä, jotta kansiota ei tehdä vain poistettavaksi. |
| Delete empty folders | pois | Poistaa tyhjät kirjakansiot levyskannauksen aikana ja kun kirjatiedostoja poistetaan |

## Tuonti (Importing)

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Skip Free Space Check | pois | Tilanteisiin, joissa ABM ei pysty selvittämään juurikansion vapaata tilaa |
| Minimum Free Space | 100 (Mt) | Tuonti, joka jättäisi tätä vähemmän tilaa, hylätään |
| Use Hardlinks instead of Copy | päällä | Valmiille latauksille: kovalinkitä kopioinnin sijaan, jotta jakaminen ei tuplaa tilantarvetta. Vaatii saman taltion. |
| Library Import | Copy | [Kirjaston tuonnin](/fi/library-import/) oletus: kopioi, kovalinkitä tai siirrä. Kovalinkitys on harmaana, kunnes oletusjuurikansio on tarkistettu ja se tukee sitä. |
| Import Extra Files | päällä | Pääkytkin muiden kuin äänitiedostojen tuomiselle mukana. Koskee kirjaston tuontia, Manual Importia ja valmiita latauksia |
| Extra File Extensions (lisäasetus) | tyhjä | Muut tiedostotyypit, jotka tuodaan mukana omilla nimillään, esimerkiksi `srt, lrc`. Pisteen kanssa tai ilman, pilkuilla tai välilyönneillä eroteltuina. Estettyjä tyyppejä, kuten suoritettavia tiedostoja ja keskeneräisiä latauksia, ei voi tallentaa. Pois käytöstä, kun **Import Extra Files** on pois päältä |
| Preferred Cover (lisäasetus) | Matched | Täsmätyn painoksen kansikuva tai kansion paras kuva, kun molemmat ovat olemassa |

**Import Extra Files** tuo kirjan muut tiedostot mukaan äänen kanssa. Viisi kytkintä valitsee, mitkä lajit tulevat mukaan, ja tiedosto, joka vastaa asetusta **Extra File Extensions**, tulee mukaan, vaikka sen laji olisi kytketty pois:

| Kytkin | Oletus | Kattaa |
|---|---|---|
| Cover art | päällä | Kansikuva sekä takakannen ja liitevihkosen skannaukset |
| Book info files | päällä | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | pois | Kirjan mukana tulevat PDF:t |
| Chapters, transcripts and playlists | päällä | .cue, kappalelistat, tekstitykset, sanoitukset, soittolistat. Niiden sisällä olevat tiedostonimet kirjoitetaan uudelleen vastaamaan uudelleennimettyä ääntä. |
| Audible originals and ebooks | pois | .aax/.aaxc, kupongit, epub ja vastaavat |

Keskeneräisiä latauksia ja suoritettavia tiedostoja ei koskaan tuoda. ABM:n omaa `metadata.json`-tiedostoa käsittelee aina ABM.

Kovalinkitys ei ole sama asia kuin **Use Hardlinks instead of Copy**. Se on latauksia varten. Kirjaston tuonnin oletus on vain se, mitä Add to Library -ikkuna valitsee valmiiksi.

## Tiedostojen hallinta (File Management)

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Unmonitor Deleted Books | pois | Levyltä poistettu kirja poistetaan seurannasta |
| Change File Date | None | Muuttaa tiedostojen päivämääriä tuonnin ja uudelleenskannauksen yhteydessä |
| Enable Recycling Bin | päällä | Poistetut kirjatiedostot siirtyvät roskakoriin sen sijaan, että ne poistettaisiin |
| Recycling Bin | tyhjä | Missä roskakori on. Tyhjä käyttää ABM:n oletusta (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (päivää) | 0 poistaa automaattisen siivouksen käytöstä |
| Library Scan Interval | 24 | Tunteja automaattisten skannausten välillä |
| Watch for Changes | päällä | Skannaa, kun tiedostoja lisätään, poistetaan tai muutetaan |
| Cover Cache Workers | 4 | Montako kansikuvaa ladataan kerralla kuvia välimuistiin tallennettaessa, 1–16 |

## Laadun parannukset (Quality Upgrades)

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Automatic Upgrade Search | päällä | Hakee säännöllisesti parempia julkaisuja ladatuille kirjoille, jotka ovat yhä katkaisutasonsa alapuolella. Kopio korvaa omasi vain, kun se on todellinen parannus. |
| Upgrade Search Interval | 24 (tuntia) | Kuinka usein se ajetaan |

## Oikeudet (Permissions, lisäasetus)

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Set Permissions | pois | Aja chmod tuonnin ja uudelleennimeämisen yhteydessä |
| chmod Folder | 755 | Oktaalitila kansioille ja tiedostoille, tiedostoille ilman suoritusbittejä |
| chown Group | tyhjä | Ryhmän nimi tai gid. Käytä etätiedostojärjestelmissä gid:tä |

## Sudenkuopat

- Jos roskakori on käytössä mutta sen kansio ei ole saatavilla, sitä tarvitsevat poistot epäonnistuvat sen sijaan, että poistaisivat pysyvästi.
- Kovalinkit toimivat vain yhden tiedostojärjestelmän sisällä. Tiedostot, joita ei voi linkittää, kopioidaan eikä niitä koskaan siirretä, ja ne lasketaan tuonnin tulokseen.

## Book Naming

Book Naming määrittää, miten nimeän tiedostot ja kansiot. Se tallentuu sivun yhdellä Save-painikkeella yhdessä muun Media Managementin kanssa. Siinä on Rename Books, Replace Illegal Characters, Colon Replacement (oma vaihtoehto mukana) sekä muodot kohdille Standard Book, Author Folder, Series Folder, Standalone Folder ja Book Folder. Jokainen muoto näyttää esimerkin livenä, ja tokenlista näyttää kaikki käytettävissä olevat tokenit.

Library-, Series- ja Authors-sivuilla on myös **Organize**-toiminto valituille kirjoille, samoin kirjan omalla sivulla. Se avaa ensin esikatselun jokaisesta muutoksesta, eikä mitään siirry ennen kuin vahvistat. Organize siirtää ja nimeää sitten uudelleen: se siirtää jokaisen kirjan kansion sinne, minne nimeämisasetukset sen sijoittavat, ja nimeää tiedostot uudelleen. Se ajetaan tehtävänä, jota voit seurata, perua ja uudelleenkäynnistyksen jälkeen jatkaa siitä, mihin se jäi. Vain yksi Organize on käynnissä kerrallaan. Kumoamista ei ole, joten tarkista esikatselu. Massauudelleennimeäminen on edelleen Library-, Series- ja Authors-sivuilla nimellä **Rename Files**.

Jos Organize keskeytyy, seuraava ajo jatkaa siitä, mihin se jäi. Kirja, jonka keskeytynyt ajo oli jo siirtänyt tai nimennyt uudelleen levyllä, löytyy uudesta paikastaan ja sen tiedot päivitetään, joten mitään ei siirretä kahdesti. Esikatselu näyttää tällaisen kirjan jo siirrettynä tai jo uudelleennimettynä, ja tulos laskee sen täsmäytetyksi (reconciled). Kirja täsmäytetään vain, kun voin todistaa kansion kuuluvan sille: sen tiedostojen on vastattava tallentamaani, eikä mikään toinen kirja saa vaatia kansiota. Muuten kirja ohitetaan syyn kera. Kumoamista ei edelleenkään ole.

Esikatselu listaa vain kirjat, jotka muuttuisivat. Valitse **Show all selected books**, niin näet myös loput. Se latautuu sivuittain, joten käytä **Load more** -toimintoa jatkaaksesi isossa valinnassa. Esikatselun otsikko laskee, montako kirjaa muuttuu ja montako ohitetaan.

Kirjan sivulla kerrotaan, jos sen kansio ei ole siellä, minne nimeämisasetukset sen sijoittaisivat. Sivu näyttää kansion, johon kirja siirtyisi, ja siinä on Organize-painike.

Jos kirjan uusi kansio olisi sen nykyisen kansion sisällä, Organize luo alikansion sinne ja siirtää siihen vain kirjan omat tiedostot: äänen sekä kannen, luvut ja muut sivutiedostot, joita pidän sitä varten. Kaikki muu kansiossa jää paikalleen. Esikatselu sanoo "Moves into a subfolder" ja listaa, mitä jää, ja tulosikkuna listaa paikalleen jätetyt tiedostot. Jos siirto epäonnistuu kesken, jo siirretyt tiedostot palautetaan. Kirjan kansion siirtäminen oman alikansionsa sisään muokkausikkunasta toimii samoin.

Library Import noudattaa samoja nimeämisasetuksia, myös kun se lisää kirjan, joka on jo juurikansiossa, tai siirtää tiedostoja kirjaan, joka minulla jo on. Kun Rename Books on pois päältä, jokainen tiedosto säilyttää nimen, jolla se tuli. Tiedosto, jonka nimi osuisi yhteen erän toisen tiedoston tai kirjan kansiossa jo olevan kanssa (kirjainkoolla ei ole väliä), saa sen sijaan nimen muodosta, ja tuonti merkitsee, mille tiedostoille niin tehtiin. Kun Rename Books on päällä, samannimiseksi tulevat tiedostot numeroidaan sijainnin mukaan, joten Manual Import ei koskaan ohita yhtäkään.

Oletusasettelu on `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Yksittäisellä kirjalla ei ole sarjakansiota eikä osanumeroa: `Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Myös sarjan kirja ilman paikkaa alkaa vuodella. Tuntematon vuosi jätetään pois, eikä sitä koskaan kirjoiteta muodossa `(Unknown)`.

Jos tunnet Sonarrin: tämä on Sonarrin Media Management nimeämismuotoineen.
