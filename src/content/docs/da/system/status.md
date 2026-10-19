---
title: Status
description: Helbredstjek og et kig på, hvad ABM laver.
---

**System > Status** kører helbredstjek og viser alt, der er galt: downloadklienter og indeksere, der fejler, problemer med rodmapper og problemer med den udgående forbindelse. Den viser også, hvor meget af databasens forbindelsespulje der er i brug. Når intet er galt, siger den "All systems healthy".

Helbredstjek kører også hver 6. time i baggrunden. Connect kan give besked ved **On Health Issue** og **On Health Restored**. Se [Connect](/da/settings/connect/).

Kender du Sonarr: det er samme idé som System > Status plus Health på én side.

## Faldgruber

- En deaktiveret downloadklient bliver ikke regnet som usund.
- En Audible-konto, der skal logges ind igen, vises her og på siden med Audible-indstillinger.
