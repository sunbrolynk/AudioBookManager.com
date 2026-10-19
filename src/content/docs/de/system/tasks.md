---
title: Aufgaben
description: Hintergrundarbeit, Zeitpläne und Logs.
---

**System > Tasks** listet alles auf, was ABM im Hintergrund erledigt: Bibliotheksscans, Aktualisierungen, Importe, Suchen, Downloads, Syncs, Backups. Jede Zeile zeigt ihren Zustand (wartend, laufend, abgeschlossen, fehlgeschlagen), den Fortschritt, das Ergebnis und einen Log-Button.

- Eine Aufgabe, die mit Einträgen in ihrer Fehlerliste abgeschlossen wurde, wird als **Partial** angezeigt. Klapp sie auf, um jedes übersprungene Element und den Grund zu sehen.
- Eine Aufgabe, bei der noch ein erneuter Versuch ansteht, bleibt wartend, bis die Versuche aufgebraucht sind. Die Nummer des Versuchs wird angezeigt.
- **Clear completed tasks older than 24 hours** räumt die Liste auf. Alte Aufgaben werden außerdem automatisch aufgeräumt (standardmäßig nach 30 Tagen).
- Geplante Läufe, die nichts getan haben, erscheinen hier, aber nicht im [Aktivitätsprotokoll](/de/system/activity-log/).

## Stolperfallen

- Konvertierungen haben eine eigene Warteschlange. Siehe [Konvertierungen](/de/using/conversions/).
- Die Download-Durchläufe (erneuter Versuch für ausstehende Grabs und Prüfung auf abgeschlossene Downloads) werden nur eingereiht, solange mindestens ein Download-Client aktiviert ist, damit sich die Seite nicht mit leeren Läufen füllt.
