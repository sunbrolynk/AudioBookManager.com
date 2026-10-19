---
title: Tuontilistat
description: Tuo haluttuja kirjoja MyAnonamousesta tai RSS-syötteestä.
---

**Settings > Import Lists** lisää kirjoja automaattisesti ulkoisista lähteistä.

## Lähteet

- **MAM**: MyAnonamousen toivelista, joka käyttää **MAM Session ID**:tä.
- **RSS**: antamasi **RSS Link** ja vapaaehtoinen **Website URL**. Sivuston on oltava http tai https.

## Listakohtaiset asetukset

| Kenttä | Vaikutus |
|---|---|
| Name | Nimi |
| Monitor | Ovatko listan lisäämät kirjat Monitored vai Unmonitored |
| Root Folder | Minne ne menevät |
| Quality Profile | Profiili tai Inherit (käytä oletusta) |
| Tags | Lisätään kaikkeen, mitä lista lisää |

**Sync Now** ajaa listat heti.

## Valinnat

| Asetus | Oletus | Vaikutus |
|---|---|---|
| RSS Sync Interval | 12 (tuntia) | Kuinka usein listat synkronoidaan. 0 poistaa synkronoinnin käytöstä |
| Clean Library Level | Disabled | Mitä kirjalle tapahtuu, kun se poistuu listalta |

Clean Library Level -vaihtoehdot: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. Viimeinen poistaa tiedostoja. Valitse se vain, jos todella tarkoitat sitä.

## Poikkeukset

**Import List Exclusions** estää kirjan kenttien **ASIN**, **Title** ja **Year** perusteella, jotta mikään lista ei lisää sitä uudelleen. Käytä **Lookup ASIN** -toimintoa niiden täyttämiseen.

## Sudenkuopat

- Tallennettua RSS-linkkiä tai istuntotunnusta ei koskaan näytetä uudelleen. Osoitteen muuttaminen vaatii salaisuuden syöttämistä uudelleen.
- Listat laukaisevat ilmoitukset On Import List Synced ja On Import List New Items. Katso [Connect](/fi/settings/connect/).
