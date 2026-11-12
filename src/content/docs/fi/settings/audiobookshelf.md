---
title: Audiobookshelf-yhteys
description: Yhdistä ABM Audiobookshelf-palvelimeesi.
---

:::caution[Tulossa myöhemmässä julkaisussa]
Tämän asetussivua ei ole vielä missään julkaistussa versiossa. Yhteyden voi jo tallentaa, testata ja poistaa API:n kautta, mutta mikään muu ABM:ssä ei vielä käytä sitä.
:::

Audiobookshelf (ABS) on palvelin, jolta kuuntelet. ABM yhdistää siihen palvelimen URL-osoitteella ja yhdelle ABS-käyttäjälle luodulla API-avaimella.

## Versio

ABM tarvitsee ABS 2.37.0:n tai uudemman ja on testattu versiolla 2.37.2. Vanhempi palvelin hylätään. Uudemmasta tulee varoitus, koska ABM:ää ei ole testattu sillä.

## Tili

API-avain kuuluu ABS-käyttäjälle. ABM tarkistaa tämän käyttäjän, kun tallennat tai testaat.

- **Hylätään, kunnes korjaat:** käyttäjän täytyy olla admin tai root, ja hänellä pitää olla Update-oikeus sekä pääsy kaikkiin kirjastoihin, kaikkiin tunnisteisiin ja eksplisiittiseen sisältöön.
- **Varoitus, mutta tallennus onnistuu:** Upload on pois päältä (ABM ei voi hallita kansikuvia) tai Delete on pois päältä (ABM:ssä poistamasi kirja jää ABS:ään, kunnes kytket sen päälle).

## Miten ABM tavoittaa ABS:n

ABM yhdistää ABS:ään aina suoraan. Se ei koskaan kulje [Network](/settings/network/)-sivulla valitsemasi VPN:n tai välityspalvelimen kautta. Palvelimen URL tarkistetaan ennen tallennusta, ja turvaton hylätään. Osoite, joka osoittaa takaisin koneelle, jolla ABM toimii, link-local-osoite ja pilven metadataosoite hylätään, samoin nimi, joka muuntuu jommaksikummaksi. Omat LAN-osoitteesi ovat kunnossa.

## API-avain

Avain tallennetaan salattuna, eikä sitä näytetä enää koskaan. Jätä kenttä tyhjäksi tallentaessasi tai testatessasi, niin tallennettu avain säilyy. Tallennettu avain lähetetään vain siihen osoitteeseen, jota varten se tallennettiin, joten jos muutat URL-osoitetta, TLS-asetusta tai CA-pakettia, syötä avain uudelleen.

## Vahvista TLS

Varmenteet vahvistetaan oletuksena. Jos palvelimesi käyttää oman varmentajasi varmennetta, anna sen CA-paketin polku sen sijaan, että kytkisit vahvistuksen pois.

## Test ja Disconnect

**Test** tarkistaa palvelimen tallentamatta: version, käyttäjän oikeudet ja sen kirjastot. Päällä olevan yhteyden tallennus tekee ensin samat tarkistukset ja hylätään, jos jokin virhetarkistus epäonnistuu. Pois päältä tallennettua yhteyttä ei tarkisteta. **Disconnect** poistaa tallennetun yhteyden ja sen avaimen.

## System Status

Kun yhteys on päällä, [System > Status](/system/status/)-sivulla on AudioBookShelf-rivi viimeisen tarkistuksen tuloksella. Se päivittyy tallennettaessa ja jaksoittaisessa kuntotarkistuksessa, joka ajetaan 6 tunnin välein, joten se ei ole reaaliaikainen kysely joka kerta, kun avaat sivun. Tallennettu avain, jota ABM ei enää pysty lukemaan (salausavain katosi tai vaihtui), näkyy virheenä, kunnes syötät sen uudelleen. Yhteys, jota ei ole vielä tarkistettu, näkyy varoituksena.

## Mitä ABM poistaa

ABM poistaa ABS:stä vain kohteen tietueen. Se ei koskaan poista tiedostoja pysyvästi.
