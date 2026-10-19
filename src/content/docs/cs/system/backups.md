---
title: Zálohy
description: Zálohování, export a obnova ABM.
---

**System > Backups** vytváří a obnovuje zálohy. **Backup Now** jednu vytvoří. Plány, uchovávání a cíle exportu jsou v [Obecném nastavení](/cs/settings/general/).

## Co je v záloze

Šifrovaný archiv s konzistentní kopií databáze (`database.db`), nastavením (`settings.json`) a manifestem. Do svých vlastních záloh přidej i `/config`, kvůli obálkám a souboru s tajným klíčem aplikace.

## Obnova

Vyber zálohu ze seznamu, nebo nahraj soubor se zálohou (až 500 MiB). Nejdřív se uloží kopie živé databáze. Obnova se nedá vrátit.

Ve výchozím stavu obnova nevrací **nastavení zabezpečení** (režim ověřování, přihlašovací údaje, důvěryhodné sítě) ani **odchozí připojení**. Tvoje současná zůstanou a výsledek to řekne. Pokud je chceš obnovit, zaškrtni u nahrávání příslušnou volbu. Díky tomu nahraný archiv nikdy nevypne přihlašování jen tím, že se obnoví.

Pokud záloha vznikla na starší verzi, po obnově restartuj kontejner, aby proběhla migrace.

Záloha se odmítne a nic se nezmění, pokud obsahuje nečekané položky, není platnou databází SQLite nebo je to stará záloha z doby před přechodem na SQLite.

## Cíle exportu

SFTP, SCP, FTPS, FTP, S3 nebo vzdálené úložiště rclone. Cíl označený **Auto** dostane každou zálohu automaticky. Názvy vzdálených úložišť rclone mohou obsahovat písmena, číslice, `_`, `.` a `-`.

## Na co si dát pozor

- Image Dockeru ani tvůj soubor compose v záloze nejsou. Soubor compose si schovej.
- Pokud nastavuješ `APP_SECRET`, zazálohuj ho zvlášť. Bez něj nejde po obnově na jiném stroji uložené přihlašovací údaje dešifrovat.
