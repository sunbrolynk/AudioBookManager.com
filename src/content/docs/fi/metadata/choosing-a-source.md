---
title: Metatietolähteen valinta
description: Sisäänrakennettu, palveluna tarjottu tai oma Libex-palvelin.
---

:::caution[Tulossa seuraavaan julkaisuun]
Lähteen valinta ei ole vielä missään julkaistussa versiossa. Julkaistut versiot käyttävät julkista Libex-instanssia osoitteessa libexdb.com, eikä niissä ole tälle asetusta.
:::

Seuraavassa julkaisussa kohdassa **Settings > Metadata > Source** on **Metadata Source** -asetus, jossa on kolme vaihtoehtoa.

| Vaihtoehto | Mitä se tarkoittaa |
|---|---|
| Built-in (oletus) | Libex pyörii ABM:n sisällä. Se tarvitsee ensin valitun ulospäin lähtevän yhteyden. |
| Hosted (libexdb.com) | ABM kysyy julkiselta Libex-instanssilta. |
| Self-hosted | ABM kysyy Libex-palvelimelta, johon osoitat sen. Syötä sen **Server URL**, esimerkiksi `http://192.168.1.20:8000`. |

**Test** tarkistaa valitun lähteen tallentamatta. **Status** kertoo, onko se valmis. Valinta, jota et ole tallentanut, näyttää tekstiä "Not in use yet - save to switch", kunnes tallennat.

## Sisäänrakennettu lähde ja ulospäin lähtevä yhteys

Built-in keskustelee Audiblen kanssa omalta koneeltasi, joten se käyttää asetuksia kohdassa **Settings > General > Proxy & VPN**. Se sivu päättää reitin: välityspalvelin, sisäänrakennettu WireGuard-tunneli, oma VPN-konttisi tai suora yhteys, jonka hyväksyt tietoisesti. Jos mitään ei ole valittu, automaattiset haut estetään ja siitä kerrotaan. Myös valittu reitti, joka on alhaalla, estää haut. Se ei koskaan palaa käyttämään omaa osoitettasi. Suora yhteys näyttää varoituksen siitä, että Audible näkee IP-osoitteesi ja kirjat, joita ABM hakee.

## Palveluna tarjottu ja itse ylläpidetty

Näissä kahdessa ABM kysyy Libex-palvelimelta, ja palvelin keskustelee Audiblen kanssa. Itse ylläpidetyn palvelimen URL tarkistetaan ennen tallennusta, ja tyhjä tai vaarallinen URL hylätään. Alhaalla oleva palvelin raportoidaan nimeltä mainiten niin, että metatietolähde ei ole käytettävissä.

## Kumman valitsisin

- Haluat sen vain toimivan etkä välitä siitä, että Audible näkee osoitteesi: Built-in suoralla yhteydellä tai Hosted.
- Et halua paljastaa IP-osoitettasi Audiblelle: Built-in VPN:n tai välityspalvelimen kautta, tai Hosted.
- Pyörität jo Libex-palvelinta: Self-hosted.
