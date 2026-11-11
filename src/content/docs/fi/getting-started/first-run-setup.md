---
title: Ensimmäinen käyttöönotto
description: Uuden asennuksen käyttöönottoavustaja vaihe vaiheelta.
---

:::caution[Tulossa myöhempään julkaisuun]
Käyttöönottoavustaja ei ole vielä missään julkaistussa versiossa. Julkaistut versiot pyytävät ensimmäisellä käynnillä vain tunnukset.
:::

Uudessa asennuksessa ensimmäinen käynti avaa käyttöönottoavustajan kirjautumissivun sijaan. Se opastaa sinut läpi kaiken, mitä ABM tarvitsee, yksi vaihe kerrallaan. Se näkyy vain niin kauan kuin tiliä ei ole. Kaikkia valintoja voi muuttaa jälkeenpäin kohdassa **Settings**.

Ylhäällä kulkee kahdeksan lenkin ketju. Jokainen lenkki on yksi vaihe, ja ketju näyttää, missä olet:

- **Done**: vaihe on valmis.
- **Current step**: ruudulla oleva vaihe.
- **Not started**: vaihe, jonne et ole vielä päässyt.
- **Later**: vaihe, jonka ohitit saamatta sitä valmiiksi. Se jää odottamaan, ja voit viimeistellä sen kohdassa **Settings** milloin haluat.

**Back** palaa edelliseen vaiheeseen. **Continue** tallentaa vaiheen ja siirtyy eteenpäin. Kolmessa vaiheessa, Audible, Download client ja Indexer, on myös **Skip for now**.

## 1. Tili (Account)

Luo tunnuksesi ja kirjaa sinut sisään. Valitset käyttäjänimen ja vähintään 8 merkin salasanan, ja kirjoitat salasanan kahdesti.

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms käyttää kirjautumissivua. Basic (Browser Popup) käyttää selaimesi omaa kirjautumiskehotetta |
| Authentication required | Everywhere | Everywhere vaatii kirjautumisen kaikista osoitteista. Skip on local network päästää kotisi tai toimistosi verkon laitteet sisään ilman kirjautumista |

Nämä ovat samat asetukset kuin sivulla [Tietoturva ja kirjautuminen](/fi/settings/security/). Tili luodaan, kun painat **Continue**. Kun tili on olemassa, vaihe vain vahvistaa sen.

## 2. Verkko (Network)

Network on pääkytkin. Mikään ABMin lähettämä ei poistu koneeltasi, ennen kuin valitset tässä reitin, joten vaiheet Metadata ja Audible riippuvat siitä. Tätä vaihetta ei voi ohittaa, ja **Continue** pysyy pois päältä, kunnes reitti on täydellinen.

| Valinta | Mitä annat ABMille |
|---|---|
| Proxy | Välityspalvelimen tyyppi, isäntänimi ja portti, sekä halutessasi käyttäjänimi ja salasana. SOCKS4 ei ole tuettu |
| WireGuard | VPN-palveluntarjoajasi `.conf`, liitettynä tai pudotettuna. Jos tunneli on jo tallennettu, käytetään sitä |
| Own VPN container | Ei täytettävää. Rastitat ruudun, jonka mukaan kaikki ABMin liikenne kulkee jo VPN- tai proxy-kontin kautta. ABM ei voi tarkistaa tätä |
| Direct | Ei täytettävää. Rastitat ruudun, jonka mukaan jokainen palvelu, johon ABM ottaa yhteyttä, näkee oman IP-osoitteesi |

**Continue** tallentaa reitin ja näyttää sitten **Public IP** -tarkistuksen, jotta näet reitin toimivan ennen kuin mitään menee verkkoon. **Change route** antaa valita uudelleen. Nämä ovat samat asetukset kuin sivulla [Network](/fi/settings/network/).

## 3. Metadata

Valitse, mistä ABM hakee kirjat. Tämä tulee ennen kansioitasi, koska ensimmäinen kansioiden skannaus täsmäyttää kirjasi siihen.

| Valinta | Mitä se tarkoittaa |
|---|---|
| Built-in | Libex toimii ABMin sisällä. Ei tiliä eikä ylimääräistä palvelua. Käyttää Network-vaiheen reittiä |
| Hosted | ABM kysyy julkiselta Libex-instanssilta osoitteessa libexdb.com |
| Self-hosted | ABM kysyy omalta Libex-palvelimeltasi. Anna sen **Server URL**. **Test** tarkistaa sen tallentamatta |

Mukana on myös **Local Storage** -valintaruutu. Se pitää pysyvää, salattua, paikallista kirjaa jokaisesta kirjasta, jonka ABM hakee, etsii, lisää, tuo tai näkee Discoverissa, ja se toimii kaikkien kolmen lähteen kanssa. Kun se on kerran päällä, sen voi sammuttaa vain kohdassa **Settings > Metadata**.

**Continue** tallentaa lähteen ja kytkee Local Storagen päälle, jos rastitit sen. Jos valittu lähde ei pääse vielä ulos, esimerkiksi Built-in ilman valittua reittiä, vaihe kertoo syyn. Katso [Metatietolähteen valinta](/fi/metadata/choosing-a-source/).

## 4. Audible (valinnainen)

Kirjaa sinut Audible-tilillesi, jotta ABM voi lukea kirjastosi. Se kulkee Network-vaiheessa valitsemasi reitin kautta. Jos reittiä ei ole valittu tai Audible-liikenne on siinä estetty, vaihe kertoo sen ja **Back to Network** vie sinut takaisin. Itse kirjautuminen on sama kuin sivulla [Audible](/fi/audible/). Kun olet kirjautunut, vaihe näyttää tilin ja **Continue** on käytettävissä.

Voit valita **Skip for now** ja yhdistää Audiblen myöhemmin kohdassa **Settings > Audible**.

## 5. Juurikansio (Root folder)

Juurikansio on paikka, jossa ABM säilyttää kirjasi. Valitse kansio, jossa äänikirjasi ovat, tai johon uudet pitäisi tulla. Sen pitäisi olla sama kansio, jota soittimesi (esimerkiksi Audiobookshelf) lukee. Voit selata palvelimen kansioita ja luoda uuden selaimessa. Ensimmäinen lisäämäsi juurikansio tulee oletukseksi. Tätä vaihetta ei voi ohittaa. Lisää juuria voit lisätä myöhemmin kohdassa **Settings > Media Management**.

## 6. Lataustyökalu (valinnainen)

Valitse yksi tuetuista työkaluista, Usenet tai torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet tai Blackhole. Täytä sen tiedot, paina **Test** ja sitten **Save**. Työkalu lisätään suoraan vaiheessa. Voit lisätä toisenkin, ja **Refresh** lataa luettelon uudelleen. Vaihe lasketaan valmiiksi, kun yksi työkalu on tallennettu.

Voit valita **Skip for now** ja lisätä työkalun myöhemmin kohdassa **Settings > Download Clients**. Katso [Latausasiakkaat](/fi/settings/download-clients/).

## 7. Indexer (valinnainen)

Valitse indexerin tyyppi tai esiasetus, täytä se ja paina **Test** ja **Save**, samoin kuin lataustyökalulla. Vaihe lasketaan valmiiksi, kun yksi indexer on tallennettu. Voit valita **Skip for now** ja lisätä indexereitä myöhemmin kohdassa **Settings > Indexers**. Katso [Indeksoijat](/fi/settings/indexers/).

## 8. Valmis (Finish)

Yhteenveto listaa jokaisen vaiheen ja sen, mitä asetettiin: Network-reittisi (ja Public IP, jos se tarkistettiin), metadatalähteen, Audible-tilin, juurikansion sekä lisäämäsi työkalun ja indexerin. Jokainen vaihe, jonka jätit myöhemmäksi, näkyy odottavana. Jos mikään ei odota, yhteenveto sanoo, että jokainen lenkki palaa. **Go to Library** sulkee avustajan.

Kaikki ohittamasi löytyy kohdasta **Settings**, kun haluat sen. Seuraavat järkevät asiat ovat laatuprofiili ja kirjasi: katso [Pika-aloitus](/fi/getting-started/quick-start/).
