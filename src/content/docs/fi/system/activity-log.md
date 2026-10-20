---
title: Toimintaloki ja tapahtumat
description: Kirjanpito siitä, mitä on tapahtunut, ja miten se eroaa lokeista.
---

ABM pitää kolmenlaista kirjaa.

| Missä | Mikä se on |
|---|---|
| **System > Events** ja **System > Activity Log** | Toimintaloki: tietokannassa oleva lista tapahtuneista asioista. Events on vakavuuden mukaan suodatettu näkymä. Activity Log (otsikkona Activity History) suodattaa luokan mukaan, hakee viestistä ja näyttää tilan ennen ja jälkeen |
| **System > Log Files** | Tekstimuotoiset lokitiedostot kaikkine yksityiskohtineen. Katso [Lokit](/fi/system/logs/) |
| **Activity > History** | Pelkkä lataushistoria. Katso [Toiminta](/fi/using/activity/) |

## Mitä kirjataan

Valmistuneet taustatehtävät (yksi yhteenvetorivi kustakin), käsin tehdyt muutokset asiakkaisiin, indeksoijiin, profiileihin, tageihin, ilmoituksiin, juurikansioihin ja niin edelleen, nappaukset (kuka ne käynnisti), muunnokset, Audible-latausten epäonnistumiset, varmuuskopiot, kirjautumiset ja epäonnistuneet kirjautumiset sekä epäonnistunut käynnistysvaihe.

Luokat: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security ja System.

## Yksityisyys

Merkinnöissä ei koskaan ole URL-osoitteita, isäntänimiä, käyttäjänimiä, salasanoja, avaimia, tokeneita tai asiakkaan tai palvelun raakaa virhetekstiä. Kohteet mainitaan nimellä, jonka annoit niille. Asetusten tallennukset listaavat, mitkä asetukset muuttuivat, eivät niiden arvoja. Kirjautumisista tallennetaan vain IP-osoite. Saman osoitteen epäonnistuneet kirjautumiset 15 minuutin sisällä kootaan yhdeksi riviksi yritysten määrän kera.

## Tarkoituksella hiljainen

Ajastettu ajo, joka ei tehnyt mitään, ei kirjoita mitään. Saman virheen toistuminen ei kirjoita mitään, mutta toipuminen kirjoittaa. Käsin käynnistetty ajo kirjataan aina.

## Säilytys

**Activity Log Retention** General-kohdassa poistaa merkinnät oletuksena 90 päivän jälkeen. 0 säilyttää ne. Lokitiedostoilla on oma säilytysaikansa (30 päivää).

## Lokin näyttäminen (View log)

:::caution[Tulossa myöhempään julkaisuun]
Merkinnöistä lähtevät View log -linkit eivät ole vielä missään julkaistussa versiossa.
:::

Merkinnät linkittävät lokiin, josta ne ovat peräisin, ja avaavat sen kyseiseltä riviltä. Jos loki on poistunut, merkinnässä lukee "Log no longer kept".
