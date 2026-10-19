---
title: Lokit
description: Lokitiedostot, tasot, säilytys ja kierrätys.
---

**System > Log Files** listaa ABM:n tekstilokit. Avaa loki lukeaksesi sen, lataa se, poista se tai tyhjennä ne kaikki. Lokeja ilmestyy sitä mukaa kuin toimintoja ajetaan.

- Tehtävät ja muunnokset kirjoittavat oman lokinsa. Tasks-sivu linkittää jokaiseen.
- Päälokin nimi on `app.log`. Se kierrätetään käynnistyksessä, vähintään tunneittain ja 10 MiB:n kohdalla. Vanhoja tiedostoja säilytetään **Log File Retention** -ajan (oletuksena 30 päivää).
- Erillisessä tietoturvalokissa on yksi rivi jokaisesta kirjautumisyrityksestä fail2bania ja vastaavia työkaluja varten.
- Tasot asetetaan kohdassa **Settings > General > Logging**.

## Ongelman selvittäminen

Aloita epäonnistuneen tehtävän lokipainikkeesta. Se näyttää toiminnon sen aloitusriviltä lopetuslohkoon asti. Salaisuudet on poistettu tekstistä, mutta tarkista silti ennen kuin liität lokia julkisesti.

## Sudenkuopat

- SQL Logging ja Debug-tasot ovat runsassanaisia. Kytke ne pois, kun olet valmis.
- Lokin poistaminen jättää siihen linkittävät toimintomerkinnät. Niissä lukee "Log no longer kept".
