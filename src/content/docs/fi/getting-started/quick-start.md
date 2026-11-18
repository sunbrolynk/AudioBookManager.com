---
title: Pika-aloitus
description: Tuoreesta asennuksesta ensimmäiseen seurattuun kirjaan.
---

Tämä on lyhin reitti käynnissä olevasta kontista siihen, että jotain kirjaa haetaan. Asenna ABM ensin: katso [ABM:n asennus](/fi/installation/).

## 1. Kirjaudu sisään

Ensimmäinen käynti avaa käyttöönottoavustajan, ja sen ensimmäinen vaihe luo tunnuksesi. Kunnes teet sen, ABM hylkää pyynnöt. Avustaja kattaa myös alla olevat vaiheet 2–4, ja sivu [Ensimmäinen käyttöönotto](/fi/getting-started/first-run-setup/) kuvaa jokaisen sen vaiheen. Miten kirjautuminen toimii jatkossa, selitetään sivulla [Tietoturva ja kirjautuminen](/fi/settings/security/).

## 2. Valitse, miten ABM pääsee internetiin

Avustajassa tämä on vaihe Network. Myöhemmin se löytyy kohdasta **Settings > [Network](/fi/settings/network/)**. Valitse, miten ABM pääsee internetiin: välityspalvelin, WireGuard-tunneli, oma VPN-konttisi tai Direct. Mitään ei lähde ulos, ennen kuin valitset yhden.

## 3. Lisää juurikansio

Juurikansio on paikka, jossa ABM säilyttää kirjoja. Lisää se kohdassa **Settings > Media Management** osiossa **Root Folders**. Sen pitäisi olla sama kansio, jota soittimesi (esimerkiksi Audiobookshelf) lukee.

## 4. Lisää indeksoija ja latausasiakas

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse tai Prowlarr. Katso [Indeksoijat](/fi/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet tai Blackhole. Katso [Latausasiakkaat](/fi/settings/download-clients/).

Jos asiakas pyörii toisessa kontissa, tarkista, että se ja ABM näkevät latauskansion samassa polussa, tai lisää etäpolun vastaavuus (remote path mapping).

## 5. Määritä laatuprofiili

**Settings > Profiles** sisältää laatuportaat, joiden perusteella ABM päättää, mitä se nappaa ja mikä lasketaan parannukseksi. Tuoreessa asennuksessa niitä ei ole yhtään, joten luo yksi. Ensimmäisestä tekemästäsi profiilista tulee oletus, ja voit hioa sitä myöhemmin. Katso [Profiilit](/fi/settings/profiles/).

## 6. Yhdistä Audible (valinnainen)

Jos sinulla on Audible-kirjoja, yhdistä tilisi kohdassa **Settings > Audible**. Valitse **Marketplace**, paina **Connect Audible Account** ja sitten **I Understand, Open Amazon Login**. Kirjaudu Amazoniin uudessa välilehdessä. Tyhjä tai "Page not found" -sivu, jolle päädyt sen jälkeen, on odotettu. Kopioi koko osoite osoiteriviltä kenttään **Redirect URL**, lisää halutessasi **Display Name** ja paina **Complete Login**. Salasanaasi ei koskaan tallenneta, ja ensimmäinen kirjaston synkronointi alkaa saman tien. Katso [Audible](/fi/audible/).

## 7. Tuo tai lisää kirjoja

- Onko sinulla jo kokoelma? Käytä [kirjaston tuontia](/fi/library-import/).
- Aloitatko alusta? Käytä kohtaa **Library > Add New** ja hae nimellä, tekijällä tai sarjalla. Katso [Uuden lisääminen](/fi/using/add-new/).

Lisäämäsi kirja on haluttujen listalla, kunnes sille tuodaan tiedosto. Halutut kirjat näkyvät kohdassa **Wanted > Missing**, ja niitä haetaan automaattisesti.

## 8. Seuraa, kun se tekee työtään

**Activity > Queue** näyttää, mitä ladataan. **Activity > History** näyttää, mitä on napattu ja tuotu. Kun jokin menee pieleen, katso [Vianmääritys](/fi/troubleshooting/) ja [Tehtävät](/fi/system/tasks/)-sivu.
