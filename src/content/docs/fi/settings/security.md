---
title: Tietoturva ja kirjautuminen
description: Tunnistautumistilat, API-avaimet, luotetut välityspalvelimet, lähiverkot ja sisällön suojauskäytäntö.
---

**Settings > General** -näkymän **Security**-osio määrää, kuka voi käyttää ABM:ää ja miten.

## Tunnistautuminen

| Asetus | Oletus | Vaihtoehdot |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Jätä salasana tyhjäksi, niin nykyinen säilyy |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | tyhjä | Lisää CIDR-alueita, joiden asiakkaiden ei tarvitse kirjautua |
| CORS Allowed Domains | tyhjä | Muut alkuperät, joiden sallitaan kutsua API:a selaimesta. Vaatii uudelleenkäynnistyksen |

**Authentication Required** -asetuksen kaksi tilaa, joita käytät:

- **Enabled**: kaikki kirjautuvat, myös lähiverkkosi.
- **Disabled for Local Addresses** (tallennetaan arvona `local_disabled`): paikallisesta osoitteesta tuleva pyyntö ohittaa kirjautumisen. Loopback, yksityiset osoitealueet, link-local ja IPv6:n unique-local lasketaan paikallisiksi. **Local Networks** lisää niitä, eikä koskaan korvaa niitä.

Tuoreessa asennuksessa pyynnöt hylätään, kunnes käyttöönotto on valmis.

## Käänteiset välityspalvelimet

Välityspalvelimen takana aseta `TRUSTED_PROXIES`, jotta ABM tietää, mihin välitysotsakkeisiin uskoa. Pyyntö, jossa on välitysotsakkeita osoitteesta, joka ei ole siinä listassa, ei ole koskaan paikallinen, ja sen on kirjauduttava. Tämä on tarkoituksellista. Katso [Käänteinen välityspalvelin](/fi/guides/reverse-proxy/).

Välityspalvelin, joka ei lähetä välitysotsakkeita, näyttää paikalliselta asiakkaalta. Jos käytät sellaista, aseta Authentication Required arvoon Enabled.

## Salasanan vahvistus

Jotkin muutokset kysyvät nykyistä salasanaasi uudelleen: Security-asetusten tallentaminen sekä API-avaimen näyttäminen tai uudelleen luominen. Väärä salasana lasketaan epäonnistuneeksi kirjautumiseksi tietoturvalokissa. Jos salasanaa ei ole vielä asetettu, mitään ei kysytä.

## API-avain

Avainta ei näytetä ennen kuin vahvistat salasanasi. **Regenerate API Key** luo uuden, näyttää sen kerran ja mitätöi vanhan avaimen välittömästi. Avainta ei voi kirjoittaa itse. Jos tallennettua avainta ei voi purkaa (sovellussalaisuus on vaihtunut), luo se uudelleen.

Lähetä se otsakkeena `X-Api-Key` tai parametrina `apikey`. Lähiverkon osoitteesta tuleva avain lasketaan avainpyynnöksi. Katso [API](/fi/system/api/).

## Selaimen kirjoitukset

Selaimen pyyntö, joka muuttaa jotain, hylätään virheellä `cross_origin_rejected`, ellei sen alkuperä vastaa osoitetta, josta ABM:ää käytetään, luotetun välityspalvelimen välittämää hostia tai CORSin sallittua verkkotunnusta. API-avainpyyntöihin tämä ei vaikuta.

## Sisällön suojauskäytäntö

ABM lähettää Content-Security-Policy-otsakkeen, ellei `SECURITY_HEADERS_CSP_ENABLED=false`. Se rajaa käyttöliittymän ABM:n omiin skripteihin ja API:in sekä kuvat ABM:ään tai HTTPS:ään. Pelkän HTTP:n kautta tarjoillut kansikuvat estetään, eikä ABM:ää voi näyttää iframessa kummassakaan tapauksessa. API-dokumentaation sivut saavat väljemmän käytännön, jotta ne voivat latautua CDN:stä.

## Epäonnistuneet kirjautumiset

Lukitusta ei ole. Epäonnistuneet yritykset kirjataan lokiin, kootaan Activity Logissa osoitekohtaisesti ja kirjoitetaan rivi riviltä tietoturvalokiin fail2banin kaltaisia työkaluja varten.

## Salaisuudet

Salasanat ja avaimet, jotka ABM tallentaa indeksoijia, asiakkaita ja yhteyksiä varten, salataan sovellussalaisuudella. Aseta `APP_SECRET`, jos haluat pitää avaimen poissa config-levyltä. Jos kumpaakaan ei ole, ABM luo tiedoston `/config/app_secret`. Välityspalvelimen ja vientikohteiden salasanat tallennetaan selkotekstinä.
