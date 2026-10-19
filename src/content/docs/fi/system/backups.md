---
title: Varmuuskopiot
description: Varmuuskopioi, vie ja palauta ABM.
---

**System > Backups** luo ja palauttaa varmuuskopioita. **Backup Now** tekee sellaisen. Ajastukset, säilytys ja vientikohteet löytyvät [Yleiset](/fi/settings/general/)-sivulta.

## Mitä varmuuskopiossa on

Salattu arkisto, jossa on yhtenäinen kopio tietokannasta (`database.db`), asetukset (`settings.json`) ja manifesti. Ota myös `/config` mukaan omiin varmuuskopioihisi kansikuvien ja sovellussalaisuustiedoston vuoksi.

## Palauttaminen

Valitse yksi listalta tai lataa varmuuskopiotiedosto (enintään 500 MiB). Käytössä olevasta tietokannasta tallennetaan ensin kopio. Palautusta ei voi perua.

Oletuksena palautus ei tuo takaisin **tietoturva-asetuksia** (tunnistautumistila, tunnukset, luotetut verkot) eikä **ulospäin lähtevää yhteyttä**. Nykyiset säilytetään, ja tulos kertoo siitä. Rastita latauksen yhteydessä vapaaehtoinen valinta, jos haluat palauttaa nekin. Näin ladattu arkisto ei voi koskaan kytkeä kirjautumista pois pelkällä palautuksella.

Jos varmuuskopio on tehty vanhemmalla versiolla, käynnistä kontti uudelleen palautuksen jälkeen, jotta migraatio ajetaan.

Varmuuskopio hylätään muuttamatta mitään, jos siinä on odottamattomia merkintöjä, se ei ole kelvollinen SQLite-tietokanta tai se on vanha varmuuskopio ajalta ennen SQLiteen siirtymistä.

## Vientikohteet

SFTP, SCP, FTPS, FTP, S3 tai rclone-etäkohde. **Auto**-merkitty kohde saa jokaisen varmuuskopion automaattisesti. Rclone-etäkohteiden nimissä saa käyttää kirjaimia, numeroita sekä merkkejä `_`, `.` ja `-`.

## Sudenkuopat

- Docker-image ja compose-tiedostosi eivät ole varmuuskopiossa. Pidä compose-tiedosto tallessa.
- Jos asetat `APP_SECRET`-muuttujan, varmuuskopioi se erikseen. Ilman sitä tallennettuja tunnuksia ei voi purkaa, kun palautat toiselle koneelle.
