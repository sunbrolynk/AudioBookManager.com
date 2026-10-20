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

Jos tunnet Sonarrin: tämä on Sonarrin Media Management ilman nimeämismuotoja. ABM valitsee kansioiden nimet. Massauudelleennimeäminen löytyy Library-, Series- ja Authors-sivuilta nimellä **Rename Files**.
