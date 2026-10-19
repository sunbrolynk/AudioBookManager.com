---
title: Status
description: Health-Checks und ein Blick darauf, was ABM gerade macht.
---

**System > Status** führt Health-Checks aus und listet alles auf, was nicht stimmt: Download-Clients und Indexer mit Fehlern, Probleme mit Root-Ordnern und Probleme mit der ausgehenden Verbindung. Außerdem zeigt die Seite die Auslastung des Datenbank-Connection-Pools. Ist alles in Ordnung, steht dort "All systems healthy".

Health-Checks laufen außerdem alle 6 Stunden im Hintergrund. Connect kann bei **On Health Issue** und **On Health Restored** benachrichtigen. Siehe [Connect](/de/settings/connect/).

Wenn du Sonarr kennst: Das ist dieselbe Idee wie System > Status plus Health auf einer Seite.

## Stolperfallen

- Ein deaktivierter Download-Client gilt nicht als fehlerhaft.
- Ein Audible-Konto, das sich neu anmelden muss, taucht hier und auf der Audible-Einstellungsseite auf.
