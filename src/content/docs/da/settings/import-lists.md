---
title: Importlister
description: Hent ønskede bøger ind fra MyAnonamouse eller et RSS-feed.
---

**Settings > Import Lists** tilføjer bøger automatisk fra eksterne kilder.

## Kilder

- **MAM**: en ønskeliste på MyAnonamouse, med et **MAM Session ID**.
- **RSS**: et **RSS Link**, du selv angiver, med en valgfri **Website URL**. Websitet skal være http eller https.

## Pr. liste

| Felt | Virkning |
|---|---|
| Name | Navn |
| Monitor | Om bøger, den tilføjer, er Monitored eller Unmonitored |
| Root Folder | Hvor de havner |
| Quality Profile | En profil, eller Inherit (use default) |
| Tags | Sættes på alt, hvad listen tilføjer |

**Sync Now** kører listerne med det samme.

## Muligheder

| Indstilling | Standard | Virkning |
|---|---|---|
| RSS Sync Interval | 12 (timer) | Hvor tit listerne synkroniseres. 0 slår synkronisering fra |
| Clean Library Level | Disabled | Hvad der sker med en bog, når den forsvinder fra listen |

Valgene for Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. Den sidste sletter filer. Vælg den kun, hvis du mener det.

## Undtagelser

**Import List Exclusions** blokerer en bog ud fra **ASIN**, **Title** og **Year**, så en liste aldrig tilføjer den igen. Brug **Lookup ASIN** til at udfylde dem.

## Faldgruber

- Et gemt RSS-link eller session-id bliver aldrig vist igen. Ændrer du adressen, skal hemmeligheden skrives ind igen.
- Lister udløser notifikationerne On Import List Synced og On Import List New Items. Se [Connect](/da/settings/connect/).
