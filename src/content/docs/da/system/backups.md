---
title: Backups
description: Tag backup af, eksportér og gendan ABM.
---

**System > Backups** laver og gendanner backups. **Backup Now** laver en. Tidsplaner, opbevaring og eksportmål ligger under [General](/da/settings/general/).

## Hvad er der i en backup

Et krypteret arkiv med en konsistent kopi af databasen (`database.db`), indstillingerne (`settings.json`) og et manifest. Tag også `/config` med i dine egne backups for covers og filen med app-hemmeligheden.

## Gendannelse

Vælg en fra listen, eller upload en backupfil (op til 500 MiB). Der bliver gemt en kopi af den kørende database først. En gendannelse kan ikke fortrydes.

Som standard genskaber en gendannelse ikke **sikkerhedsindstillingerne** (godkendelsestilstand, loginoplysninger, betroede netværk). Dine nuværende bliver, og resultatet siger det. Siden har ingen kontakt til det. Kun et API-kald til `restore-upload` med `restore_security_settings=true` bringer dem tilbage, så et uploadet arkiv aldrig kan slå login fra bare ved at blive gendannet.

Er backuppen lavet på en ældre version, så genstart containeren efter gendannelsen, så migreringen kører.

En backup bliver afvist, uden at noget ændres, hvis den indeholder uventede elementer, ikke er en gyldig SQLite-database eller er en gammel backup fra før skiftet til SQLite.

## Eksportmål

SFTP, SCP, FTPS, FTP, S3 eller et rclone-remote. Et mål markeret **Auto** modtager hver backup automatisk. Navne på rclone-remotes må bruge bogstaver, tal, `_`, `.` og `-`.

## Faldgruber

- Docker-imaget og din compose-fil er ikke med i backuppen. Gem compose-filen.
- Har du sat `APP_SECRET`, så tag backup af den for sig. Uden den kan gemte loginoplysninger ikke dekrypteres efter en gendannelse på en anden vært.
