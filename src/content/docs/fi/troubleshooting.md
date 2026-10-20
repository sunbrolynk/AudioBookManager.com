---
title: Vianmääritys
description: Korjaukset ongelmiin, joihin todennäköisimmin törmäät.
---

## Keskeytyneen tuonnin jättämät tiedostot (.abmstage)

Tuonti valmistelee ensin jokaisen tiedoston lopullisen nimensä viereen ja vaihtaa ne paikoilleen vasta, kun kaikki ovat perillä. Jos jokin epäonnistuu, ABM palauttaa siirtämänsä. Jos se ei pysty palauttamaan jotain osaa, se osa jää kirjan kansioon piilotiedostona, jonka nimi päättyy `.abmstage`. Se voi olla ainoa kopio, joten ABM säilyttää sen ja virheilmoitus nimeää sen.

Niin kauan kuin kirjan kansiossa on yksikin `.abmstage`-tiedosto, tuonnit siihen kansioon pysähtyvät ilmoitukseen:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Palauttaminen:

1. Etsi virheilmoituksessa mainittu `.abmstage`-tiedosto.
2. Siirrä se takaisin lataukseen tai kirjan kansioon sen oikealla nimellä. Tai poista se, jos et tarvitse sitä.
3. Yritä tuontia uudelleen.

## Kaikilta kysytään kirjautumista käänteisen välityspalvelimen takana

Ilman asetusta `TRUSTED_PROXIES` välitysotsakkeita sisältävää pyyntöä ei koskaan käsitellä paikallisena, joten sen on kirjauduttava. Tämä on tarkoituksellista.

1. Aseta `TRUSTED_PROXIES` välityspalvelimesi osoitteeksi, esimerkiksi `172.20.0.5`. Samalla koneella pyörivä välityspalvelin tarvitsee arvon `127.0.0.1`.
2. Laita välityspalvelin lähettämään `X-Forwarded-For` tai `X-Real-IP`. nginx proxy manager, Traefik ja Caddy tekevät sen oletuksena.
3. Käynnistä ABM uudelleen.

Sovelluksen loki kertoo, kummasta on kyse:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": lisää välityspalvelin asetukseen `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": määritä välityspalvelin lähettämään `X-Forwarded-For` tai `X-Real-IP`.

Päinvastainen tapaus: välityspalvelin, joka ei lähetä välitysotsakkeita, näyttää paikalliselta asiakkaalta, joten kaikki sen kautta tuleva ohittaa kirjautumisen. Aseta Authentication Required arvoon Enabled.

## Selaimesta tehdyt muutokset hylätään

Varmista, että välityspalvelin välittää alkuperäisen `Host`-otsakkeen tai lähettää `X-Forwarded-Host`. Katso [Ympäristömuuttujat](/fi/configuration/#käänteinen-välityspalvelin).

## Kansikuvat katoavat tai sivu toimii oudosti välityspalvelimen takana

Content-Security-Policy-otsake sallii vain HTTPS-kansikuvat. Tarkista selaimen konsolista rikkomukset. Tarjoile kansikuvat HTTPS:n kautta tai aseta `SECURITY_HEADERS_CSP_ENABLED=false`.

## Suuri pyyntö palauttaa virheen 413

Nosta arvoa `MAX_REQUEST_BODY_BYTES`. Myös käänteinen välityspalvelin voi pakottaa pienemmän rajan ja vastata itse 413.

## Metatietolähde ei ole käytettävissä

Lisääminen, haku, päivitys ja Discover tarvitsevat Libexin. Jos ABM ei saa vastausta, kirjahaku epäonnistuu viestillä "Libex search failed" ja kirjailija- tai sarjahaku viestillä "Libex could not be reached; try again shortly" tyhjän listan näyttämisen sijaan. Syyt: Libex on alhaalla, tai ABM:n yhteys ei yllä siihen.

1. Katso [ABM:n tilasivu](https://status.audiobookmanager.com) ja [Libexin tilasivu](https://status.libexdb.com), onko se alhaalla kaikilla.
2. Tarkista, että kontti pääsee internetiin ja että **Settings > General > Proxy** -kohdan välityspalvelin on oikein, jos käytät sellaista.
3. Yritä uudelleen minuutin kuluttua.
4. Sillä välin voit yhä lisätä ja tuoda kirjoja käsin.

Taustatehtävä, joka osuu katkoon, epäonnistuu syyn kanssa. Sitä yritetään itsestään uudelleen enintään kuusi kertaa tai kuuden tunnin ajan sen mukaan, kumpi tulee ensin.

## Päivitys muutti kirjan tietoja

Nimi, kuvaus, tekijät, lukijat ja vastaavat kentät tulevat metatietolähteestä, ja päivitys ottaa käyttöön sen, mitä lähde nyt sanoo. ABM:ssä ei voi muokata niitä käsin. Sinä hallitset kansikuvaa (lukittavissa), mitä tiedostoja kirjoitetaan, tageja ja sitä, kirjoittavatko päivitykset sivutiedostoja ja tageja. Katso [Metatietosi, sinun hallinnassasi](/fi/metadata/control/).

## Kirja näyttää tilaa Missing Files

Kirja on ladattu, mutta sen tiedostot eivät ole siellä, mistä ABM etsii. Tarkista liitos (mount) ja oikeudet ja aja sitten **Refresh & Scan**. Skannaus jättää kirjan koskematta, jos sen kansiota ei voi lukea, ja tehtävä näkyy tilassa Partial syyn kera.

## Tuonnit pysähtyvät ilmoitukseen "Files left by an interrupted import"

Katso yllä oleva `.abmstage`-osio.

## Lataukset valmistuvat, mutta niitä ei koskaan tuoda

Lisää etäpolun vastaavuus tai järjestä niin, että ABM ja asiakas näkevät kansion samassa polussa. Lukukelvoton alikansio estää koko latauksen, kunnes sen oikeudet on korjattu. Katso [Latausasiakkaat](/fi/settings/download-clients/).

## Docker ei saa yhteyttä metatietolähteeseen tai indeksoijiin

Tarkista ensin DNS ja välityspalvelimen asetus. Dockerissa ABM tavoittaa Libexin ja indeksoijasi vain, jos kontti pääsee internetiin.

## Yhä jumissa

Kysy [ABM:n Discordissa](https://discord.gg/qeJRrM6AZ), [avaa issue](https://github.com/sunbrolynk/AudioBook-Manager/issues) tai lähetä sähköpostia osoitteeseen [support@audiobookmanager.com](mailto:support@audiobookmanager.com).
