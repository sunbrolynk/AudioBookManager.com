---
title: Kirjaston tuonti
description: Tuo olemassa oleva kokoelma ABM:ään Import Workbenchin avulla.
---

Kirjaston tuonti (Library Import) skannaa äänikirjakansion, täsmää jokaisen kansion metatietoihin ja lisää kirjat kirjastoosi. **Library > Library Import** avaa sivun "Import audiobooks you already have", jossa valitset skannattavan kansion. Kun skannaus alkaa, ABM siirtyy täsmäyssivulle, jonka otsikko on **Match Audiobooks**. Siellä tarkistat osumat ja lisäät kirjat.

## Kulku

1. Skannaa kansio. Jokaisesta kansiosta, jossa on ääntä, tulee rivi.
2. Tarkista osumat. Korjaa ne, jotka sitä kaipaavat.
3. Rastita haluamasi rivit ja lisää ne sitten kirjastoon tai poista ne.

Jokainen valinta on vapaaehtoinen ohitus Media Management -asetusten oletukselle.

## Milloin osuma hyväksytään

Skannaus hyväksyy osuman vain, kun tiedostot vahvistavat sen:

- tiedostojen omissa tageissa oleva ASIN löytää kirjan, tai
- kirjan kesto on enintään kolmen minuutin päässä tiedostojen kestosta, ja sen paikka sarjassa tai sen nimi täsmää niihin.

Tiedostojen kanssa ristiriidassa oleva kirjailija tai sarjan paikka sulkee kirjan pois. Jos tiedostot sopivat yhtä hyvin kahteen eri kirjaan tai äänitteeseen, kumpaakaan ei hyväksytä.

Tiedostojen kesto lasketaan vain, kun kirjan jokainen tiedosto voitiin lukea. Jos yhtä ei voi mitata, rivillä ei ole kestoa: silloin vain sen ASIN voi vahvistaa osuman, ja muuten kirja odottaa kohdassa **Needs a look**.

Kun kirja on kahdessa muodossa, kumpikin muoto on oma rivinsä ja mitataan erikseen. Kirja, joka on jaettu osiin eri muodoissa, on yksi rivi, kun sillä on oma kansionsa, ja sen osat lasketaan yhteen.

Keston perusteella hyväksytään vain englanninkielinen painos tai sellainen, jonka tiedoissa ei ole kieltä. Muunkielinen painos hyväksytään vain, kun tiedostojen oma ASIN löytää sen. Kirjaa, johon vastaus tuli [paikallisesta tallennuksesta](/fi/settings/metadata/) eikä suorasta hausta, ei koskaan hyväksytä ilman sinua.

Kun yksi rivin hauista epäonnistuu, hyväksytään vain ASIN-osuma. Pelkällä kirjailijahaulla löytynyt kirja tarjotaan vain, kun sen kesto sopii tiedostoihin. Siksi kirja, jolla ei ole tietoja, näkyy tilassa **Unmatched** eikä ehdota kirjailijan toista kirjaa.

Muut osumat tarjotaan edelleen ehdotuksina, mutta rivi lasketaan kohtaan **Needs a look**, se on aluksi valitsematta, ja **Select All** ohittaa sen, kunnes vahvistat osuman tai valitset toisen. Hyväksytty osuma kirjaan, joka on jo kirjastossasi, lasketaan kohtaan **In library**. **Needs a look** -rivi, jonka ehdotus on kirjaston kirja, kysyy kirjastokysymyksensä vasta, kun vahvistat osuman. Siihen asti se estää Addin, jos valitset sen, rivinä joka tarvitsee vielä päätöksen.

Kirja, joka on useana irtotiedostona samassa kansiossa muiden kirjojen kanssa, esimerkiksi kirjailijan kansiossa tai kansiossa, jota skannaat, on yksi rivi, jossa on kaikki osat. Tiedostot, jotka eroavat kirjan tai osan numerolla, pysyvät erillisinä riveinä. Osat ryhmitellään muodon mukaan: niiden vieressä oleva koko kirjan tiedosto on oma rivinsä, eikä tiedostonimen bittinopeus, kuten `128kbps`, ole osan numero.

Saman kirjan kaksi muotoa, kuten `Book.mp3` ja `Book.m4b`, ovat erilliset rivit, olivatpa tiedostot irrallaan kansiossa, jota skannaat, tai kirjan omassa kansiossa. Jokainen rivi tuo, poistaa ja mittaa vain oman tiedostonsa. Samanniminen kansikuva, cue tai muu ei-äänitiedosto kulkee kirjan tiedoston mukana, kun kirja on siellä yhdessä muodossa, ja jää paikalleen, kun se on siellä kahdessa. Näin käy myös, kun toinen kopio siirretään kirjastoon ja toinen poistetaan samassa tuonnissa.

Tagi muodossa `Title: Series, Book 2` luetaan nimeksi, sarjaksi ja paikaksi sarjassa.

Välinä kirjoitettu sarjan sijainti, kuten `1-3`, täsmää mihin tahansa sen sisällä olevaan sijaintiin. Kaksi muuten kirjoitettua numeroa, kuten `1, 3`, lasketaan ei-sijainniksi.

Yli 500 merkin pituinen nimike-, albumi-, sarja-, sarjan osa-, esittäjä-, albumin esittäjä-, säveltäjä- tai lukija-tagi ohitetaan.

Library Import -sivun **Recent Import Sessions** näyttää jokaisesta skannauksesta, monellako rivillä on osuma, kirjastossa jo olevat kirjat mukaan lukien, ja moniko odottaa, mukaan lukien rivit, joille sinun pitää vielä valita osuma.

## Listan lukeminen

- Yhteenveto näyttää, montako kansiota löytyi ja montako on valmiina. Yläpalkissa on **Sort** (Folder name, Status, Title, Author, Series, Files) ja **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Jokainen suodatin näyttää määränsä, ja määrät täsmäävät yhteenvedon kanssa. Täsmäys, jonka olet vahvistanut, on nimeltään Ready. Tämä laite muistaa järjestyksen ja suodattimen. Ne eivät säily sivun osoitteessa, joten linkki, jossa on `?sort=` tai `?filter=`, ei vie niitä mukanaan.
- Jokaisella rivillä näkyy kansikuva, nimi, tekijä ja sarja sekä osuman varmuus prosentteina, esimerkiksi "95% match". Jokainen rivi säilyttää kaikki osumat, jotka sen nimi-, tekijä- ja sarjahaut löytävät. Kansion tiedoissa on **Find a match** tai **Change match**, joilla voit hakea käsin. Haku näyttää ensin Libexin parhaat osumat kirjoittamallesi tekstille ja sitten kirjat, jotka nimi-, tekijä- ja sarjahaut löytävät, jokaisen kirjan kerran, 50 kerrallaan. Lisää latautuu, kun vierität, tai **Load more** -painikkeella, kunnes tuloksia ei ole enempää.
- Kun tiedostoissa ei ole ASINia tai kestoa, jolla painos voitaisiin varmistaa, kansion tiedoissa kerrotaan siitä.
- **Rescan** poimii skannauksen jälkeen lisätyt kansiot ja säilyttää valintasi.

Kommentista tai kuvauksesta löytynyt ASIN on pelkkä vihje. Se lasketaan osumaksi vain, jos myös nimi vastaa kansion nimeä. Ainoastaan erillinen ASIN-tagi riittää yksinään.

## Yhdistäminen, jakaminen ja lisääminen

- Yhdistä rivit, jotka ovat yksi kirja jaettuna useaan kansioon. Voit jakaa ne taas kansion tiedoista. Yhdistetyn rivin osuma on vain ehdotus: se lasketaan kohtaan **Needs a look** eikä ole valittuna, ennen kuin vahvistat sen tai valitset toisen. Sen kesto on osien summa vain, kun jokaisella osalla on kesto, ja se säilyttää ASINin vain, kun kaikki osat antavat saman. Yhdistäminen on vain yhden kirjan osille: jätä saman kirjan kaksi muotoa erillisiksi riveiksi, koska yhdistäminen laskee molemmat kestot yhteen. Haku, joka valmistuu vasta kun olet yhdistänyt tai jakanut sen rivin, on myös vain ehdotus.
- Rivin tietojen **Confirm match** valitsee **Needs a look** -rivin, ja **Undo confirmation** poistaa valinnan taas.
- Lisäys estetään, ja syy näytetään painikkeen yläpuolella, esimerkiksi "Select at least one folder" tai "2 selected rows still need a decision". Lisäys torjutaan myös koskematta mihinkään, kun kaksi riviä vaatii samaa kansiota tai tiedostoa.
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

Riviin voi vastata myös **keep library** (hylkää kopio kirjasta, joka kirjastossa jo on) tai **remove empty** (hylkää kansio, jossa ei ole ääntä mutta on yhä kuvia ja sivutiedostoja). Nämä poistavat vain sen, minkä rivi omistaa. **remove empty** torjuu kaiken, missä on ääntä. Tiedostot menevät roskakoriin, jos sellainen on asetettu, ja tehtäväloki listaa jokaisen poistetun polun. **keep library** -päätös koskee vain sitä kirjaston kirjaa, josta se tehtiin: jos valitset osuman, joka kysyy jotain muuta tai toista kirjaston kirjaa, rivi kysyy uudelleen. Tuonti tarkistaa asian uudelleen ajon aikana, eikä mitään poisteta, jos kirjaston kopiolla ei siihen mennessä ole tiedostoja ("Your library has no copy of this book to keep") tai jos kansiossa on kirjastosi kirjan tiedostoja ("This folder holds files of a book in your library"). Rivit, jotka poistavat tiedostoja tuomisen sijaan, ajetaan vasta, kun saman lisäyksen jokainen tuonti on valmis, ja kukin torjutaan, jos jokin sen tiedostoista kuuluu silloin kirjastosi kirjaan. Näin ne eivät koskaan poista tiedostoja, joista samassa erässä juuri lisättiin kirja.

## Kansikuva ja lisätiedostot kansiokohtaisesti

Tarkastelija näyttää kansion oman kansikuvan täsmätyn painoksen kansikuvan vieressä, kummankin pikselikoon kera. Yksi klikkaus valitsee toisen. Sen alla **Extra files** listaa kaikki muut tiedostot sen Media Management -kytkimen nimen alla, jota ne noudattavat. Piste merkitsee valintaa, joka poikkeaa asetuksista, ja **Apply this cover and these file choices to the N other selected** kopioi yhden kansion valinnat muille. Rivillä, joka lisää tiedostoja kirjastossa jo olevaan kirjaan, ei ole valitsinta.

Katso myös [Kirjaston siirtäminen ABM:ään](/fi/guides/moving-a-library-in/) ja [Median hallinta](/fi/settings/media-management/).
