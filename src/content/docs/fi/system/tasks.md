---
title: Tehtävät
description: Taustatyöt, ajastukset ja lokit.
---

**System > Tasks** listaa kaiken, mitä ABM tekee taustalla: kirjaston skannaukset, päivitykset, tuonnit, haut, lataukset, synkronoinnit ja varmuuskopiot. Jokaisella rivillä näkyy sen tila (waiting, running, completed, failed), edistyminen, tulos ja lokipainike.

- Tehtävä, joka valmistui niin, että sen virhelistalla on merkintöjä, näkyy tilassa **Partial**. Avaa se nähdäksesi jokaisen ohitetun kohteen ja syyn.
- Tehtävä, jolla on uusintayritys tulossa, pysyy odottavana, kunnes yritykset loppuvat. Yrityksen numero näytetään.
- **Clear completed tasks older than 24 hours** siistii listan. Vanhat tehtävät siivotaan myös automaattisesti (oletuksena 30 päivää).
- Ajastetut ajot, jotka eivät tehneet mitään, näkyvät täällä mutta eivät [toimintalokissa](/fi/system/activity-log/).

## Sudenkuopat

- Muunnokset ovat erillinen jono. Katso [Muunnokset](/fi/using/conversions/).
- Lataussiivoukset (odottavan nappauksen uusintayritys ja valmiiden latausten tarkistus) menevät jonoon vain, kun vähintään yksi latausasiakas on käytössä, jotta sivu ei täyty tyhjistä ajoista.
