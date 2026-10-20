---
title: Kappaleet
description: Vertaa kirjan upotettuja kappaleita Libexiin ja korjaa ne.
---

:::caution[Tulossa myöhempään julkaisuun]
Mikään tämän sivun asioista muunnosten oletuksia lukuun ottamatta ei ole vielä missään julkaistussa versiossa.
:::

Kirjan tietosivu näyttää Libexin tuntemat kappaleet tiedostoihisi oikeasti upotettujen kappaleiden vieressä. Libex on vertailukohta. Näkymä vastaa kysymykseen, sisältävätkö tiedostosi sen, mitä Libexin mukaan niissä pitäisi olla.

## Vertailun lukeminen

Jokainen Libexin kappale saa merkin, eli kuvakkeen ja sanan:

- **Matches**: upotettu kappale alkaa 2 sekunnin sisällä, ja nimi on sama, kun kirjainkokoa, aksentteja ja alun ja lopun välimerkkejä ei huomioida. "Chapter 1" ja "Chapter One" ovat eri nimiä.
- **Differs**: nimi eroaa, tai nimi löytyy läheltä mutta alkaa yli 2 sekunnin päässä.
- **Missing**: mikään upotettu kappale ei muodosta sen kanssa paria.
- **Extra**: upotettu kappale, jonka kanssa mikään Libexin kappale ei muodosta paria.

Usean tiedoston kirjat asetetaan peräkkäin yhdelle aikajanalle tiedostonimien järjestyksessä. Kappale, joka jatkuu tiedostosta toiseen merkinnällä "(cont.)", luetaan yhdeksi kappaleeksi. Jos Libexiin ei saada yhteyttä, näet upotetun listan ja rivin, joka kertoo syyn. Sivu ei koskaan kaadu virheeseen.

## Väärä painos

Libexin ajoitukset sopivat vain siihen painokseen, jota ne kuvaavat. Jos äänesi pituus eroaa Libexin pituudesta yli 15 sekuntia tai 0,5 prosenttia (kumpi on suurempi), näkyviin tulee varoitus ja sekä **Update** että **Create .cue** estetään. Ohitusta ei ole.

## Upotettujen kappaleiden päivitys (Update embedded chapters)

Korvaa kappaleet jokaisessa äänitiedostossa Libexin kappaleilla. Se ajetaan kappaletyönä [muunnosjonossa](/fi/using/conversions/) koodaamatta uudelleen. Sitä tarjotaan vain, kun vertailu sanoo "differs" tai "no embedded chapters".

- Jokainen tiedosto kirjoitetaan uudelleen väliaikaistiedostoon, tarkistetaan ja vaihdetaan sitten paikalleen. Tarkistus vaatii, että tiedosto on luettavissa, se ei ole alkuperäistä yli 0,5 sekuntia tai 1 prosenttia lyhyempi, se on samalla koodekilla ja siinä on täsmälleen pyydetty määrä kappaleita. Jos tarkistus epäonnistuu, alkuperäinen jää.
- Jos työ pysähtyy kesken, jo uudelleenkirjoitetut tiedostot jäävät sellaisiksi. Virhe sanoo "N of M files already updated". Aja Update uudelleen, kun olet korjannut syyn.
- Hylätään heti alkuun: kirjalle on käynnissä toinen muunnos, ASINia tai Libexin kappaleita ei ole, painos on väärä, tiedostoa ei voi lukea tai päivitettävää ei ole.

## .cue-tiedoston luonti (Create .cue)

Kirjoittaa Libexin kappaleista cue-taulukon kirjan kansioon ensimmäisen äänitiedoston mukaan nimettynä. Se korvaa saman nimisen olemassa olevan tiedoston. Katso [Sivutiedostot](/fi/using/sidecars/).

## Sudenkuopat

- VBR-MP3-tiedostoilla, joissa ei ole pituusotsaketta, on arvioitu pituus. Oikea painos voi näyttää muutaman sekunnin verran pieleen menevältä.
- Uudelleenkirjoitettu tiedosto näyttää Audiobookshelfille muuttuneelta, ja se skannataan uudelleen.
- Kappaleiden nimet, joissa on `=`, `;`, `#` tai kenoviiva, saattavat kirjoittua väärin, kunnes korjaus tulee.

## Muunnosten oletuskäytös kappaleille

Erillään yllä olevasta: **Settings > Conversions > Chapter Handling** ratkaisee, mitä muunnos tekee kappaleille. Katso [Muunnosasetukset](/fi/settings/conversions/).
