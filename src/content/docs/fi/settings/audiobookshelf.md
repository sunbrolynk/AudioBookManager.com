---
title: Audiobookshelf-yhteys
description: Yhdistä ABM Audiobookshelf-palvelimeesi.
---

Audiobookshelf (ABS) on palvelin, jolla kuuntelet. Yhdistä ABM kohdassa **Settings > Audiobookshelf**, tietokoneella ja puhelimella. Annat palvelimen osoitteen ja yhdelle ABS-käyttäjälle tehdyn API-avaimen.

## Yhteys

- **Enable:** Antaa ABM:n käyttää palvelinta. Kun tallennat tämä päällä, ABM tarkistaa palvelimen ensin eikä tallenna, jos virhetason tarkistus epäonnistuu. Sivu näyttää syyt. Pois päältä tallennettua yhteyttä ei tarkisteta.
- **Server address:** Osoite, jossa ABS-palvelimesi vastaa, esimerkiksi `http://192.168.1.20:13378`. Jos ABS pyörii samalla koneella kuin ABM, käytä koneen LAN-osoitetta tai kontin nimeä tai IP-osoitetta, jos molemmat pyörivät Dockerissa.
- **API key:** Admin-käyttäjän API-avain ABS:ssä.
- **Verify TLS certificate:** Oletuksena päällä. Jos palvelimesi käyttää oman myöntäjäsi varmennetta, anna sen CA-paketin polku kohdassa **CA bundle path** sen sijaan, että poistaisit tarkistuksen. Jätä polku tyhjäksi, niin käytetään järjestelmän varmenteita.
- **Test:** Ajaa tarkistukset sillä, mikä on näytöllä, tallentamatta mitään.
- **Disconnect:** Pyytää vahvistuksen ja poistaa sitten tallennetun osoitteen ja avaimen.

## Miten ABM tavoittaa ABS:n

ABM yhdistää ABS:ään aina suoraan. Se ei koskaan kulje kohdassa [Network](/settings/network/) valitsemasi VPN:n tai välityspalvelimen kautta. Osoite tarkistetaan ennen tallennusta, ja vaarallinen osoite hylätään. Osoite, joka osoittaa takaisin koneeseen, jolla ABM pyörii, link-local-osoite ja pilven metadataosoite hylätään, samoin nimi, joka muuntuu jollekin niistä. Omat LAN-osoitteesi kelpaavat, minkä vuoksi samalla koneella olevalle ABS:lle tarvitaan koneen LAN-osoite tai sen kontin nimi tai IP.

## API-avain

Avain tallennetaan salattuna eikä sitä näytetä enää koskaan. Jätä kenttä tyhjäksi tallentaessasi tai testatessasi, niin tallennettu avain säilyy. Tallennettu avain lähetetään vain osoitteeseen, jota varten se tallennettiin, joten jos vaihdat osoitteen, Verify TLS:n tai CA-paketin, anna avain uudelleen. Jos ABM ei enää pysty lukemaan tallennettua avainta (salausavain hävisi tai vaihtui), tämä sivu näyttää saman ilmoituksen kuin muut asetussivut ja kehottaa antamaan sen uudelleen, vaikka yhteys olisi pois päältä.

## Mitä tarkistetaan

**Versio.** ABM tarvitsee ABS:n version 2.37.0 tai uudemman ja on testattu versiolla 2.37.2. Vanhempi palvelin tai sellainen, joka ei ilmoita ABM:n ymmärtämää versiota, epäonnistuu virheeseen. Uudempi antaa varoituksen, koska ABM:ää ei ole testattu sillä.

**Tili.** API-avain kuuluu ABS-käyttäjälle, ja ABM tarkistaa sen käyttäjän.

- **Virhe, kunnes korjattu:** käyttäjän täytyy olla admin tai root ja hänellä pitää olla Update-oikeus sekä pääsy kaikkiin kirjastoihin, kaikkiin tunnisteisiin ja eksplisiittiseen sisältöön.
- **Varoitus, tallennetaan silti:** Upload on pois (ABM ei voi omistaa kansia) tai Delete on pois (ABM:ssä poistamasi kirja jää ABS:ään, kunnes kytket sen päälle).

## Tila

Status-osio näyttää viimeisimmän tarkistuksen tuloksen (Not connected, OK, Warning tai Error), palvelimen version, käyttäjän, jolle avain kuuluu, milloin ABM tarkisti viimeksi, ja itse tarkistukset. Epäonnistunut tarkistus näyttää syynsä, ja läpäistyt lasketaan.

[System > Status](/system/status/) -sivulla on myös Audiobookshelf-rivi, kun yhteys on päällä. Se päivittyy tallennettaessa ja jaksoittaisella kuntotarkistuksella, joka ajetaan 6 tunnin välein, joten se ei ole reaaliaikainen mittaus joka kerta, kun avaat sivun. Pois päältä oleva yhteys pysyy siellä hiljaa, vaikka sen tallennettua avainta ei voisi lukea. Kun yhteys on päällä, tallennettu avain, jota ABM ei enää voi lukea, näkyy virheenä, kunnes annat sen uudelleen, ja vielä tarkistamaton yhteys näkyy varoituksena.

## Mitä ABM poistaa

ABM poistaa ABS:stä vain kohteen tietueen. Se ei koskaan poista tiedostoja pysyvästi.
