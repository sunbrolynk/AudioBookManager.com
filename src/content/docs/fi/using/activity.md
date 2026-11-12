---
title: Toiminta
description: Jono, historia ja estolista.
---

## Jono (Queue)

Mitä latausasiakkaasi ovat työstämässä. Rivitoimintoja ovat **Grab now**, **Import Now**, **Manual Import** ja **Retry Now**, sekä **Configure remote path mapping**, kun valmis lataus on polussa, jota ABM ei näe. Manual Import -ikkunassa epäonnistunut skannaus, valmistelu tai tuonti näyttää syyn rivinä ikkunassa.

Rivin poistaminen jonosta noudattaa latausasiakkaan asetusta **Queue Page Remove Action**: hylkää vain ABM:stä, poista asiakkaasta ja säilytä tiedostot, tai poista asiakkaasta ja poista tiedostot. Katso [Latausasiakkaat](/fi/settings/download-clients/).

## Historia (History)

Nappaukset, tuonnit, epäonnistumiset ja parannukset. Epäonnistunut nappaus kertoo, mitä asiakkaita kokeiltiin. Lataus, joka epäonnistuu clientissa, saa oman rivinsä clientin ilmoittamalla syyllä.

## Estolista (Blocklist)

Julkaisut, joita ABM ei nappaa uudelleen, yleensä siksi, että ne epäonnistuivat. **Remove from Blocklist** päästää yhden takaisin. Latausten käsittelyn **Redownload Failed** lisää epäonnistuneen julkaisun tänne ja hakee uudelleen.

## Ei sama asia kuin Events

Nämä sivut koskevat latauksia. Koko järjestelmän kirjanpito siitä, mitä ABM:ssä on tapahtunut, on [Activity Log](/fi/system/activity-log/).
