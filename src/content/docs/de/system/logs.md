---
title: Logs
description: Logdateien, Log-Level, Aufbewahrung und Rotation.
---

**System > Log Files** listet ABMs Text-Logs auf. Öffne eins, um es zu lesen, herunterzuladen oder zu löschen, oder leer alle auf einmal. Logs entstehen, während Vorgänge laufen.

- Aufgaben und Konvertierungen schreiben ein eigenes Log. Die Seite Tasks verlinkt jedes davon.
- Das Haupt-Log ist `app.log`. Es rotiert beim Start, mindestens stündlich und bei 10 MiB. Alte Dateien werden für **Log File Retention** aufbewahrt (standardmäßig 30 Tage).
- Ein eigenes Security-Log schreibt eine Zeile pro Anmeldeversuch, für fail2ban und ähnliche Tools.
- Die Log-Level stellst du unter **Settings > General > Logging** ein.

## Einem Problem auf die Spur kommen

Fang beim Log-Button der fehlgeschlagenen Aufgabe an. Er zeigt den Vorgang von seiner Startzeile bis zu seinem Abschlussblock. Secrets sind im Text geschwärzt, aber prüf trotzdem, bevor du ein Log öffentlich postest.

## Stolperfallen

- SQL Logging und das Level Debug sind sehr gesprächig. Schalte sie wieder ab, wenn du fertig bist.
- Wenn du ein Log löschst, bleiben Aktivitätseinträge zurück, die darauf verlinken. Bei denen steht dann "Log no longer kept".
