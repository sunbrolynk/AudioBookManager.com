---
title: Ilmoitukset
description: Otsikkorivin kello ja sen alla oleva paneeli.
---

Työpöytäversion otsikkorivin kello on paikka, jossa ABM kertoo, mitä on tapahtunut ja mikä tarvitsee sinua. Avaa ilmoituspaneeli klikkaamalla sitä. Puhelimessa ei ole vielä kelloa.

## Kello

- Kellon numero kertoo, montako ilmoitusta on lukematta. Yli 99:n näkyy 99+. Kun jokin lukematon on virhe, numero muuttuu punaiseksi.
- Kellon ympärillä oleva rengas on käynnissä olevaa työtä. Kun ABM tietää, kuinka pitkällä työ on, rengas täyttyy käynnissä olevien kohteiden keskiarvoon. Kun se ei tiedä, rengas vain pyörii.
- Uusi ilmoitus saa kellon välähtämään hetken tasonsa värillä. Jos järjestelmässäsi on vähennetty liike päällä, välähdys jätetään pois.
- Jos selain menettää suoran yhteyden ABM:ään yli 10 sekunniksi, kellosta tulee yliviivattu kello katkoviivarenkaalla. Se palaa, kun yhteys palaa.

Kellon saavutettava nimi lukee saman: lukemattomien määrän, montako kohdetta on käynnissä ja niiden prosentin sekä sen, onko se offline-tilassa.

## Paneeli

Ylhäältä alas:

- **Needs attention** näkyy vain, kun jokin on auki. Nämä ovat asioita, jotka pysyvät, kunnes ne on ratkaistu, kuten kirja, jonka lataus epäonnistui, tai uusi ABM-versio. Jokaisella on yksi painike: **Search again** laittaa kirjan haun jonoon ja **What's new** avaa Updates-sivun. Toiset avaavat sivun, jota ne koskevat, tai tehtävän, jos sen voi jatkaa. Rivin **x** hylkää sen.
- **Running** listaa juuri nyt käynnissä olevan työn: tehtävät, lataukset ja muunnokset, edistymisen ja jäljellä olevan ajan kanssa, kun ne tiedetään. Siirry riville klikkaamalla sitä.
- **Recent** näyttää uusimmat ilmoitukset ensin ja lukemattomien määrän. Klikkaus avaa sen, mitä ilmoitus koskee, ja merkitsee sen luetuksi. Rivillä on myös painikkeet sen merkitsemiseen luetuksi tai lukemattomaksi ja poistamiseen.
- **Load older** näyttää lisää historiaa. Kun vanhempaa ei ole, paneeli kertoo sen.

Kun kaikki kolme ovat tyhjiä, paneeli kertoo, että olet ajan tasalla.

Alatunnisteessa on **Mark all read** ja linkki [Activity Logiin](/fi/system/activity-log/). Paneelin otsikon vieressä olevassa valikossa on **Clear all**, joka kysyy ensin. Se poistaa kaikki ilmoitukset paitsi ne, jotka tarvitsevat vielä huomiota. Ne pysyvät, kunnes ratkaiset tai hylkäät ne.

## Mitä ei tallenneta

Ilmoitus voi tulla taustatehtävästä, latauksesta tai muunnoksesta tai jostakin, minkä teit selaimessa ja mikä epäonnistui. Paneelin omat painikkeet ovat poikkeus. Jos luetuksi merkitseminen, poistaminen, hylkääminen, tyhjennys tai vanhempien lataaminen epäonnistuu, paneeli näyttää virheen kyseisen painikkeen vieressä eikä lisää siitä ilmoitusta. Muuten rikkinäinen saapuneet-kansio täyttäisi saapuneet-kansion.

## Tulokset painikkeen kohdalla

Toiminnot sivuilla Library, Book Detail, Calendar, Authors ja Series sekä kansitoiminnot näyttävät tuloksensa lyhyenä rivinä käyttämäsi painikkeen kohdalla. Pelkkä onnistumisrivi poistuu itsestään parin sekunnin kuluttua. Virhe tai varoitus pysyy seuraavaan toimintoosi saakka kyseisellä painikkeella. Virheet tallennetaan myös kelloon, joten löydät ne vielä rivin poistuttua.

Kirja, tekijä tai sarja, joka tallennetaan mutta jonka catalog fill ei käynnisty, tallentaa varoituksen "Catalog fill not started". Add all, jossa jotkin kirjat epäonnistuvat, tallentaa "Some books were not added" syineen.

## Säilytys

Vanhat ilmoitukset poistaa päivittäinen lokien siivous, oletuksena **30 päivän** jälkeen. Aseta se asetuksella **Notifications Retention** [Yleiset](/fi/settings/general/)-sivulla tai `inbox_retention_days` [API](/fi/system/api/):ssa. 0 säilyttää ne ikuisesti. Ilmoituksia, jotka tarvitsevat vielä huomiota, ei poisteta ennen kuin ratkaiset ne. Siivous ajetaan kerran päivässä siivousaikana (oletuksena 03:00) eikä tee mitään, kun **Automatic Cleanup** on pois päältä. Paneelin alareunan huomautus näyttää nykyisen päivien määrän ja piilotetaan, kun säilytys on 0.

## Ero Activity Logiin

Ilmoitukset ovat se, mitä sinulle kerrotaan, ja voit tyhjentää ne. [Activity Log](/fi/system/activity-log/) on pysyvä tallenne tapahtuneesta, eikä kellon tyhjentäminen koske siihen.
