---
title: Status
description: Health-Checks und ein Blick darauf, was ABM gerade macht.
---

**System > Status** führt Gesundheitsprüfungen aus und listet alles, was nicht stimmt: ausfallende Download-Clients und Indexer, Probleme mit Root-Ordnern und ein nicht erreichbares Libex. Außerdem zeigt es die Auslastung des Datenbank-Verbindungspools. Ist alles in Ordnung, steht dort "All systems healthy".

Health-Checks laufen außerdem alle 6 Stunden im Hintergrund. Connect kann bei **On Health Issue** und **On Health Restored** benachrichtigen. Siehe [Connect](/de/settings/connect/).

Wenn du Sonarr kennst: Das ist dieselbe Idee wie System > Status plus Health auf einer Seite.

## Stolperfallen

- Ein deaktivierter Download-Client gilt nicht als fehlerhaft.
- Ein Audible-Konto, das sich neu anmelden muss, taucht hier und auf der Audible-Einstellungsseite auf.
