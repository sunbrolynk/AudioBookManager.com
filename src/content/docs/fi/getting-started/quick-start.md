---
title: Pika-aloitus
description: Tuoreesta asennuksesta ensimmäiseen seurattuun kirjaan.
---

Tämä on lyhin reitti käynnissä olevasta kontista siihen, että jotain kirjaa haetaan. Asenna ABM ensin: katso [ABM:n asennus](/fi/installation/).

## 1. Kirjaudu sisään

Ensimmäisellä käynnillä sinut opastetaan luomaan tunnukset. Siihen asti ABM hylkää pyynnöt. Kirjautumisen toiminta sen jälkeen käydään läpi sivulla [Tietoturva ja kirjautuminen](/fi/settings/security/).

## 2. Valitse, miten ABM pääsee internetiin

Kohdassa **Settings > General** on **Proxy & VPN** -osio. Jos aiot käyttää sisäänrakennettua metatietolähdettä, yhteys on valittava ensin. Katso [Metatietolähteen valinta](/fi/metadata/choosing-a-source/).

## 3. Lisää juurikansio

Juurikansio on paikka, jossa ABM säilyttää kirjoja. Lisää se kohdassa **Settings > Media Management** osiossa **Root Folders**. Sen pitäisi olla sama kansio, jota soittimesi (esimerkiksi Audiobookshelf) lukee.

## 4. Lisää indeksoija ja latausasiakas

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse tai Prowlarr. Katso [Indeksoijat](/fi/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet tai Blackhole. Katso [Latausasiakkaat](/fi/settings/download-clients/).

Jos asiakas pyörii toisessa kontissa, tarkista, että se ja ABM näkevät latauskansion samassa polussa, tai lisää etäpolun vastaavuus (remote path mapping).

## 5. Määritä laatuprofiili

**Settings > Profiles** sisältää laatuportaat, joiden perusteella ABM päättää, mitä se nappaa ja mikä lasketaan parannukseksi. Yksi profiili on oletus. Aloita sillä ja hio myöhemmin. Katso [Profiilit](/fi/settings/profiles/).

## 6. Tuo tai lisää kirjoja

- Onko sinulla jo kokoelma? Käytä [kirjaston tuontia](/fi/library-import/).
- Aloitatko alusta? Käytä kohtaa **Library > Add New** ja hae nimellä, tekijällä tai sarjalla. Katso [Uuden lisääminen](/fi/using/add-new/).

Lisäämäsi kirja on haluttujen listalla, kunnes sille tuodaan tiedosto. Halutut kirjat näkyvät kohdassa **Wanted > Missing**, ja niitä haetaan automaattisesti.

## 7. Seuraa, kun se tekee työtään

**Activity > Queue** näyttää, mitä ladataan. **Activity > History** näyttää, mitä on napattu ja tuotu. Kun jokin menee pieleen, katso [Vianmääritys](/fi/troubleshooting/) ja [Tehtävät](/fi/system/tasks/)-sivu.
