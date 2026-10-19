---
title: Kirjasto
description: Kirjat, tekijät ja sarjat sekä se, miten ABM seuraa niiden tilaa.
---

**Library**-valikossa on kolme listaa: **Books**, **Series** ja **Authors**. **Add New** ja **Library Import** tuovat niihin sisältöä. **Audible Library** ja **Conversions** käsitellään omilla sivuillaan.

## Kirjat

Jokainen kirja on yleiskatsausrivi, juliste tai taulukon rivi (näkymän vaihto on työkalupalkissa). Kirjalla on tila:

- **Wanted**: seurattu, ei vielä tiedostoja. ABM hakee sitä.
- **Downloaded**: tiedostot ovat levyllä.
- **Missing Files**: kirja on ladattu, mutta sen tiedostot eivät enää ole siellä, missä ABM odottaa niiden olevan.
- **Unmonitored**: ABM jättää sen rauhaan.

Avaa kirja nähdäksesi sen tietosivun: tiedostot, metatiedot, historia, ABM:n mittaama laatu sekä toiminnot, kuten Refresh & Scan ja muokkausikkuna (katso alta). Katso [Sivutiedostot](/fi/using/sidecars/).

Jos tunnet Sonarrin: kirja on jakso, sarja on kausi ja ohjelma yhdessä, ja tekijä on tapa ryhmitellä molempia. Erona on se, että yksi kirja voi kuulua useaan sarjaan, ja ABM käyttää ensisijaista (pienin sijainti), kun sen täytyy valita.

## Sarjat

**Library > Series** listaa jokaisen sarjan omistettujen, haluttujen ja puuttuvien tiedostojen määrineen, näkymänä Overview tai Posters. Sarjan sivu näyttää koko katalogin, myös kirjat, joita et omista. Suodata se valinnalla All, In Library tai Not in Library. **Add Remaining** tai **Select to Add** tuo puuttuvat kirjat haluttuina, ja **Refresh Series** hakee katalogin uudelleen. **Monitor New Books** (All tai None) päättää, lisätäänkö myöhemmin ilmestyvät kirjat haluttuina. Katso [Sarjojen seuranta](/fi/using/series-tracking/).

## Tekijät

**Library > Authors** listaa tekijät, näkymänä Overview tai Posters. Tekijän sivu näyttää hänen kataloginsa sarjoittain ryhmiteltynä, jokaiselle sarjalle ladattujen ja kaikkien kirjojen määrän, sekä hänen laatuprofiilinsa, lajityyppinsä ja arvosanansa. **Refresh Catalog** hakee sen uudelleen ja **Search Author** hakee hänen haluttuja kirjojaan. **Monitor New Books** toimii samoin kuin sarjalla, ja tekijällä se on aluksi None.

Sarjan tai tekijän poistaminen hylätään niin kauan kuin sillä on kirjoja kirjastossa. Poista kirjat ensin.

## Laatuprofiilin periytyminen

Kirjan laatuprofiili tulee järjestyksessä seuraavista: sen oma ohitus, sen ensisijainen sarja, sen ensisijainen tekijä ja lopulta oletusprofiili. Katso [Profiilit](/fi/settings/profiles/).

## Muokkausikkuna

Kirjan muokkausikkuna muuttaa ABM:n omia asetuksia kirjalle, ei sen metatietoja:

- **Monitored**
- **Quality Profile** (No Change, kun muokkaat useita)
- **Path** yhdelle kirjalle (painikkeella, joka laskee sen uudelleen), tai **Root Folder** valinnalle
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt ja OPF (valintaruudussa lukee "metadata.opf"; tiedosto nimetään kirjan ensimmäisen äänitiedoston mukaan, esimerkiksi `Dune.opf`, tai `title.opf`, kun ääntä ei ole)
- **Write to Audio Files**: kirjoita metatietotagit

Sama ikkuna avautuu sarjoille ja tekijöille, ja se koskee niiden jokaista kirjaa. Kirjoitusvalinnat ajetaan, kun tallennat.

## Tagit

Kirjoilla, tekijöillä ja sarjoilla voi olla tageja. Tagit ohjaavat indeksoijia, ilmoituksia, tuontilistoja ja profiileja ja suodattavat kalenterisyötettä. Katso [Tagit](/fi/settings/tags/).

## Valinta

Valitse rivejä, niin voit toimia monella kerralla: seuraa, hae, tagita, nimeä uudelleen, poista. Puhelimella katso [Puhelimella käyttö](/fi/phone/).
