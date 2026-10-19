---
title: Kirjaston tuonti
description: Tuo olemassa oleva kokoelma ABM:ään Import Workbenchin avulla.
---

Kirjaston tuonti (Library Import) skannaa äänikirjakansion, täsmää jokaisen kansion metatietoihin ja lisää kirjat kirjastoosi. **Library > Library Import** avaa sivun "Import audiobooks you already have", jossa valitset skannattavan kansion. Kun skannaus alkaa, ABM siirtyy täsmäyssivulle, jonka otsikko on **Match Audiobooks**. Siellä tarkistat osumat ja lisäät kirjat.

## Kulku

1. Skannaa kansio. Jokaisesta kansiosta, jossa on ääntä, tulee rivi.
2. Tarkista osumat. Korjaa ne, jotka sitä kaipaavat.
3. Valitse rivit ja lisää ne kirjastoon.

Jokainen valinta on vapaaehtoinen ohitus Media Management -asetusten oletukselle. Pelkkä skannaus ja lisäys ei koskaan vaadi kahta klikkausta enempää.

## Listan lukeminen

- Yhteenveto näyttää, montako kansiota löytyi ja montako täsmättiin. Suodata lista valinnoilla All, Matched, Needs attention, Unmatched, In library tai Failed lookup. Suodatin säilyy sivun osoitteessa.
- Jokaisella rivillä näkyy kansikuva, nimi, tekijä ja sarja sekä osuman varmuus prosentteina, esimerkiksi "95% match". Kansion tiedoissa on **Find a match** tai **Change match**, joilla voit hakea käsin.
- Kun tiedostoissa ei ole ASINia tai kestoa, jolla painos voitaisiin varmistaa, kansion tiedoissa kerrotaan siitä.
- **Rescan** poimii skannauksen jälkeen lisätyt kansiot ja säilyttää valintasi.

Kommentista tai kuvauksesta löytynyt ASIN on pelkkä vihje. Se lasketaan osumaksi vain, jos myös nimi vastaa kansion nimeä. Ainoastaan erillinen ASIN-tagi riittää yksinään.

## Yhdistäminen, jakaminen ja lisääminen

- Yhdistä rivit, jotka ovat yksi kirja jaettuna useaan kansioon. Voit jakaa ne taas kansion tiedoista.
- Lisäys estetään, ja syy näytetään painikkeen yläpuolella, esimerkiksi "Select at least one folder" tai "2 selected rows still need a decision".
- Kaikki, mikä poistaisi tai korvaisi tiedostoja, kysyy ensin.
- Kun poistut sivulta, keskeneräiset muokkauksesi tallennetaan.

## Kopioi, siirrä tai kovalinkitä

**Settings > Media Management > Importing** määrittää kirjaston tuonnin oletuksen: kopioi (oletus), siirrä tai kovalinkitä. Voit valita toisen jokaiselle tuonnille erikseen.

Kovalinkitetty kirja ei vie lisää levytilaa, ja alkuperäinen pysyy paikallaan. Kovalinkitys edellyttää, että oletusjuurikansio tukee sitä ja että se on ensin tarkistettu. Muuten valinta on harmaana ja syy näytetään. Tiedosto, jota ei voi linkittää (esimerkiksi toisella asemalla oleva), kopioidaan eikä sitä koskaan siirretä. Valmis tuonti kertoo, montako tiedostoa kopioitiin.

## Lisätiedostot

**Import Extra Files** (oletuksena päällä) tuo mukana kirjan kansikuvan, muistiinpanot ja muut kuin äänitiedostot. Se koskee yhtä lailla kirjaston tuontia, Manual Importia ja valmiita latauksia. Kun **Show Advanced** on päällä, **Preferred Cover** valitsee joko täsmätyn Audible-kansikuvan (oletus) tai kansion oman kansikuvan.

## Pitkät arvot

Lukija, nimi tai polku, joka on katkaistu kolmella pisteellä, avautuu kokonaan, kun napautat tai klikkaat sitä. Napauta tai klikkaa uudelleen, niin se sulkeutuu. Hiirellä koko arvo näkyy myös, kun viet osoittimen sen päälle. Näppäimistöllä siirrä kohdistus siihen ja paina Enteriä tai välilyöntiä.

## Muut vastaukset kuin tuonti

Riviin voi vastata myös **keep library** (hylkää kopio kirjasta, joka kirjastossa jo on) tai **remove empty** (hylkää kansio, jossa ei ole ääntä mutta on yhä kuvia ja sivutiedostoja). Nämä poistavat vain sen, minkä rivi omistaa. Kaikki, missä on ääntä, torjutaan. Tiedostot menevät roskakoriin, jos sellainen on asetettu, ja tehtäväloki listaa jokaisen poistetun polun.

## Kansikuva ja lisätiedostot kansiokohtaisesti

Tarkastelija näyttää kansion oman kansikuvan täsmätyn painoksen kansikuvan vieressä, kummankin pikselikoon kera. Yksi klikkaus valitsee toisen. Sen alla **Extra files** listaa kaikki muut tiedostot sen Media Management -kytkimen nimen alla, jota ne noudattavat. Piste merkitsee valintaa, joka poikkeaa asetuksista, ja **Apply this cover and these file choices to the N other selected** kopioi yhden kansion valinnat muille. Rivillä, joka lisää tiedostoja kirjastossa jo olevaan kirjaan, ei ole valitsinta.

Katso myös [Kirjaston siirtäminen ABM:ään](/fi/guides/moving-a-library-in/) ja [Median hallinta](/fi/settings/media-management/).
