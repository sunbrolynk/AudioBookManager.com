---
title: Aktivität
description: Warteschlange, Verlauf und Blocklist.
---

## Warteschlange (Queue)

Woran deine Download-Clients gerade arbeiten. Zu den Zeilenaktionen gehören **Grab now**, **Import Now**, **Manual Import** und **Retry Now**, dazu **Configure remote path mapping**, wenn ein fertiger Download in einem Pfad liegt, den ABM nicht sieht.

Was beim Entfernen einer Zeile aus der Warteschlange passiert, richtet sich nach **Queue Page Remove Action** in den Einstellungen des Download-Clients: nur aus ABM ausblenden, aus dem Client entfernen und die Dateien behalten, oder aus dem Client entfernen und die Dateien löschen. Siehe [Download-Clients](/de/settings/download-clients/).

## Verlauf (History)

Grabs, Importe, Fehlschläge und Upgrades. Bei einem fehlgeschlagenen Grab steht dabei, welche Clients probiert wurden.

## Blocklist

Releases, die ABM nicht noch einmal lädt, meist weil sie fehlgeschlagen sind. **Remove from Blocklist** lässt eins wieder zu. **Redownload Failed** in der Download-Verarbeitung setzt ein fehlgeschlagenes Release hierauf und sucht erneut.

## Nicht dasselbe wie Events

Auf diesen Seiten geht es um Downloads. Die systemweite Aufzeichnung dessen, was in ABM passiert ist, ist das [Aktivitätsprotokoll](/de/system/activity-log/).
