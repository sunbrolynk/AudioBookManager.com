---
title: Säkerhetskopior
description: Säkerhetskopiera, exportera och återställ ABM.
---

**System > Backups** skapar och återställer säkerhetskopior. **Backup Now** gör en. Scheman, lagringstid och exportmål finns under [Allmänt](/sv/settings/general/).

## Vad som finns i en säkerhetskopia

Ett krypterat arkiv med en konsekvent kopia av databasen (`database.db`), inställningarna (`settings.json`) och ett manifest. Ta också med `/config` i dina egna säkerhetskopior för omslagen och filen med apphemligheten.

## Återställa

Välj en i listan, eller ladda upp en säkerhetskopia (upp till 500 MiB). En kopia av den aktiva databasen sparas först. En återställning går inte att ångra.

Som standard tar en återställning inte tillbaka **säkerhetsinställningar** (autentiseringsläge, inloggningsuppgifter, betrodda nätverk) eller den **utgående anslutningen**. Dina nuvarande behålls och resultatet säger det. Kryssa i rutan vid uppladdningen om du vill återställa dem också. Det betyder att ett uppladdat arkiv aldrig kan stänga av inloggningen bara genom att återställas.

Om säkerhetskopian gjordes på en äldre version, starta om containern efter återställningen så att migreringen körs.

En säkerhetskopia vägras, utan att något ändras, om den innehåller oväntade poster, inte är en giltig SQLite-databas, eller är en gammal säkerhetskopia från tiden före bytet till SQLite.

## Exportmål

SFTP, SCP, FTPS, FTP, S3 eller en rclone-remote. Ett mål som är märkt **Auto** får varje säkerhetskopia automatiskt. Namn på rclone-remotes får innehålla bokstäver, siffror, `_`, `.` och `-`.

## Fallgropar

- Docker-imagen och din compose-fil finns inte i säkerhetskopian. Spara compose-filen.
- Om du sätter `APP_SECRET`, säkerhetskopiera den separat. Utan den går sparade inloggningsuppgifter inte att dekryptera efter en återställning på en annan värd.
