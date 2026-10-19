---
title: Sikkerhetskopier
description: Ta sikkerhetskopi av, eksporter og gjenopprett ABM.
---

**System > Backups** lager og gjenoppretter sikkerhetskopier. **Backup Now** lager en. Tidsplaner, oppbevaring og eksportmål ligger under [Generelt](/nb/settings/general/).

## Hva som er med i en sikkerhetskopi

Et kryptert arkiv med en konsistent kopi av databasen (`database.db`), innstillingene (`settings.json`) og et manifest. Ta også med `/config` i dine egne sikkerhetskopier, for coverne og fila med app-hemmeligheten.

## Gjenoppretting

Velg en fra lista, eller last opp en sikkerhetskopifil (opptil 500 MiB). En kopi av den aktive databasen lagres først. En gjenoppretting kan ikke angres.

Som standard tar ikke en gjenoppretting med seg **sikkerhetsinnstillingene** (autentiseringsmodus, påloggingsinfo, klarerte nettverk) eller den **utgående tilkoblingen**. De du har nå, beholdes, og resultatet sier fra om det. Huk av for valget ved opplastingen hvis du vil gjenopprette dem. Det betyr at et opplastet arkiv aldri kan slå av innlogging bare ved å bli gjenopprettet.

Hvis sikkerhetskopien ble laget på en eldre versjon, starter du containeren på nytt etter gjenopprettingen, så migreringen kjører.

En sikkerhetskopi blir avvist, uten at noe endres, hvis den inneholder uventede oppføringer, ikke er en gyldig SQLite-database, eller er en gammel sikkerhetskopi fra før overgangen til SQLite.

## Eksportmål

SFTP, SCP, FTPS, FTP, S3 eller en rclone-remote. Et mål merket **Auto** får hver sikkerhetskopi automatisk. Navn på rclone-remotes kan bruke bokstaver, sifre, `_`, `.` og `-`.

## Fallgruver

- Docker-imaget og compose-fila di er ikke med i sikkerhetskopien. Ta vare på compose-fila.
- Har du satt `APP_SECRET`, tar du sikkerhetskopi av den for seg. Uten den kan ikke lagret påloggingsinfo dekrypteres etter en gjenoppretting på en annen vert.
