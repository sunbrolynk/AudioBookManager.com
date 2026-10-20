---
title: Audible-asetukset
description: Tilit, synkronoinnin ajastus, lataukset ja diagnostiikka.
---

**Settings > Audible** on paikka, jossa tilit yhdistetään ja synkronointia ja latauksia säädetään. Ominaisuuden toiminta on kuvattu [Audible](/fi/audible/)-sivulla.

## Tilit

Tilin yhdistämiseen tarvitaan **Marketplace**, **Display Name** ja **Redirect URL**, jonka Amazon lähettää takaisin kirjautumisesi jälkeen. Jokaisella tilillä on oma kirjastonsa. Jos tilin pitää kirjautua uudelleen, kirjaudu samalla tilillä sen sijaan, että poistaisit sen. Poistaminen pudottaa tilin kirjaston ja poistaa sen laitteen Audiblesta.

## Ajastus

| Asetus | Vaikutus |
|---|---|
| Auto Sync | Synkronoi kirjasto ajastetusti |
| Sync on Account Add | Synkronoi heti, kun tili on yhdistetty |
| Frequency | Päivittäin, viikoittain tai kuukausittain. Viikoittain lisää valinnan Day of Week. Kuukausittain lisää valinnan Day of Month (1-28). |
| Time | Tunti ja minuutti |
| Use CRON Expression | Oma cron-lauseke korvaa yllä olevat valinnat |

## Latausasetukset (Download Settings)

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Mirror Audible library to ABM | päällä | Jokainen synkronointi lisää Audible-kirjat, joita ei vielä ole ABM:ssä, ja lataa ne, joilla ei ole tiedostoja, enintään 25 kerrallaan. Kun otat sen käyttöön, näet, kuinka monta kirjaa seuraava synkronointi lisää ja lataa. Katso [Peilaa Audible-kirjasto ABM:ään](/fi/audible/#audible-kirjaston-peilaus-abmään-mirror-audible-library-to-abm) |
| Concurrent Downloads | 2 | 1–5. Suurempi on nopeampi, mutta voi törmätä Audiblen pyyntörajoihin. |
| Preferred Quality | High | High tai Normal |
| Delete Encrypted Files | päällä | Poista salattu AAXC-tiedosto, kun se on purettu M4B:ksi |
| Temp Download Path | tyhjä | Tyhjä käyttää järjestelmän väliaikaiskansiota |

Epäonnistuneita latauksia yritetään itsestään uudelleen muutaman kerran, ja väli kasvaa joka kerta. Jos katkos kestää pidempään, tehtävä palautetaan jonoon enintään kuudeksi tunniksi. Lisenssin epääminen, kirja, jota et omista, tai salauksen purun epäonnistuminen epäonnistuu kerran.

## Yhteysdiagnostiikka (Connection Diagnostics)

Valitse tili ja aja diagnostiikka. Se testaa FFmpegin, tunnukset, API-yhteyden ja latauskyvyn sekä näyttää lähtevän IP-osoitteesi sellaisena kuin Audible sen näkee.
