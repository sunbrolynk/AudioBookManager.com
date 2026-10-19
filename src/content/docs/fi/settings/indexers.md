---
title: Indeksoijat
description: Newznab, Torznab, MyAnonamouse ja Prowlarr.
---

**Settings > Indexers** listaa paikat, joista ABM hakee julkaisuja.

## Tyypit

Newznab (usenet), Torznab (torrent), MyAnonamouse ja Prowlarr-yhteys, joka synkronoi indeksoijat Prowlarrista.

## Kentät

| Kenttä | Koskee | Vaikutus |
|---|---|---|
| Name | kaikkia | Nimi |
| Enable RSS | kaikkia | Ota mukaan RSS-synkronointiin |
| Enable Automatic Search | kaikkia | Käytä hauissa, jotka ABM käynnistää |
| Enable Interactive Search | kaikkia | Käytä, kun haet käsin |
| URL, API Path, API Key | Newznab, Torznab | Mihin ja miten yhdistetään. Tunnukset kuuluvat kenttään, ei koskaan URL-osoitteeseen |
| Categories | Newznab, Torznab | Mistä kategorioista haetaan |
| Cookie (mam_id) | MyAnonamouse | Istuntoeväste |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only tai Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Laajenna hakua |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Julkaisujen rajat ja jakotavoitteet |
| Indexer Priority | kaikkia | 1 (korkein) – 50 (matalin), oletus 25. Kun sama julkaisu tulee kahdesta indeksoijasta, pienempi luku voittaa |
| Download Client | kaikkia | Lähetä tämän indeksoijan nappaukset yhdelle asiakkaalle. (Any) käyttää mitä tahansa |
| Tags | kaikkia | Käytä tätä indeksoijaa vain kohteille, joilla on vastaava tagi |

Tallennettua API-avainta tai evästettä ei koskaan näytetä uudelleen. Jätä kenttä muokatessa tyhjäksi, niin se säilyy. URL-osoitteen muuttaminen vaatii salaisuuden syöttämistä uudelleen, jotta avainta ei voi vahingossa lähettää uuteen osoitteeseen.

## Valinnat

Nämä koskevat jokaista indeksoijaa, joten noudata kunkin indeksoijan omia sääntöjä.

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Minimum Age | 0 (minuuttia) | Ohita tätä nuoremmat usenet-julkaisut |
| Retention | 0 (päivää) | Ohita tätä vanhemmat julkaisut. 0 tarkoittaa, ettei rajaa ole |
| Maximum Size | 0 (Mt) | 0 tarkoittaa, ettei rajaa ole |
| RSS Sync Interval | 15 (minuuttia) | Kuinka usein RSS:ää kysellään |

MAM-lista voi myös syöttää [tuontilistoja](/fi/settings/import-lists/).

Jos tunnet Sonarrin: kyse on samasta jaosta RSS:n, automaattisen ja interaktiivisen haun välillä indeksoijakohtaisesti. Kategorioille ei ole erillistä "test all" -toimintoa.
