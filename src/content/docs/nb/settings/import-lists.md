---
title: Importlister
description: Hent inn ønskede bøker fra MyAnonamouse eller en RSS-feed.
---

**Settings > Import Lists** legger til bøker automatisk fra eksterne kilder.

## Kilder

- **MAM**: en ønskeliste på MyAnonamouse, med en **MAM Session ID**.
- **RSS**: en **RSS Link** du oppgir, med en valgfri **Website URL**. Nettstedet må være http eller https.

## Per liste

| Felt | Virkning |
|---|---|
| Name | Navn |
| Monitor | Om bøkene den legger til, er Monitored eller Unmonitored |
| Root Folder | Hvor de havner |
| Quality Profile | En profil, eller Inherit (bruk standard) |
| Tags | Settes på alt lista legger til |

**Sync Now** kjører listene med en gang.

## Valg

| Innstilling | Standard | Virkning |
|---|---|---|
| RSS Sync Interval | 12 (timer) | Hvor ofte listene synkroniseres. 0 slår av synkronisering |
| Clean Library Level | Disabled | Hva som skjer med en bok når den forsvinner fra lista |

Valgene for Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. Den siste sletter filer. Velg den bare hvis du mener det.

## Unntak

**Import List Exclusions** blokkerer en bok etter **ASIN**, **Title** og **Year**, så en liste aldri legger den til igjen. Bruk **Lookup ASIN** for å fylle dem ut.

## Fallgruver

- En lagret RSS-lenke eller økt-ID vises aldri igjen. Endrer du adressen, må du skrive inn hemmeligheten på nytt.
- Lister utløser varslene On Import List Synced og On Import List New Items. Se [Connect](/nb/settings/connect/).
