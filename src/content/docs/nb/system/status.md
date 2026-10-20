---
title: Status
description: Helsesjekker og et blikk på hva ABM driver med.
---

**System > Status** kjører helsesjekker og lister alt som er galt: nedlastingsklienter og indekserere som feiler, problemer med rotmapper og et Libex som ikke kan nås. Den viser også bruken av databasens tilkoblingspool. Når alt er i orden, står det "All systems healthy".

Helsesjekkene kjører også hver 6. time i bakgrunnen. Connect kan varsle ved **On Health Issue** og **On Health Restored**. Se [Connect](/nb/settings/connect/).

Kan du Sonarr: det er samme idé som System > Status pluss Health på én side.

## Fallgruver

- En nedlastingsklient som er slått av, regnes ikke som feilende.
- En Audible-konto som må logge inn på nytt, dukker opp her i tillegg til på Audible-innstillingssiden.
