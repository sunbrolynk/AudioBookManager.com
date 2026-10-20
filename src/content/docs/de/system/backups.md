---
title: Backups
description: ABM sichern, exportieren und wiederherstellen.
---

Unter **System > Backups** erstellst und wiederherstellst du Backups. **Backup Now** legt eins an. Zeitpläne, Aufbewahrung und Exportziele findest du unter [Allgemein](/de/settings/general/).

## Was in einem Backup steckt

Ein verschlüsseltes Archiv mit einer konsistenten Kopie der Datenbank (`database.db`), den Einstellungen (`settings.json`) und einem Manifest. Nimm `/config` außerdem in deine eigenen Backups auf, wegen der Cover und der App-Secret-Datei.

## Wiederherstellen

Wähl eins aus der Liste oder lade eine Backup-Datei hoch (bis 500 MiB). Vorher wird eine Kopie der laufenden Datenbank gespeichert. Eine Wiederherstellung lässt sich nicht rückgängig machen.

Standardmäßig stellt eine Wiederherstellung die **Security-Einstellungen** (Authentifizierungsmodus, Zugangsdaten, vertrauenswürdige Netzwerke) nicht wieder her. Deine aktuellen bleiben erhalten, und das Ergebnis sagt es. Die Seite hat dafür keinen Schalter. Nur ein API-Aufruf an `restore-upload` mit `restore_security_settings=true` bringt sie zurück, damit ein hochgeladenes Archiv die Anmeldung nie allein durch das Wiederherstellen abschalten kann.

Wurde das Backup mit einer älteren Version erstellt, starte den Container nach der Wiederherstellung neu, damit die Migration läuft.

Ein Backup wird abgelehnt, ohne dass sich etwas ändert, wenn es unerwartete Einträge enthält, keine gültige SQLite-Datenbank ist oder ein altes Backup von vor dem Umstieg auf SQLite ist.

## Exportziele

SFTP, SCP, FTPS, FTP, S3 oder ein rclone-Remote. Ein Ziel mit der Markierung **Auto** bekommt jedes Backup automatisch. Namen von rclone-Remotes dürfen Buchstaben, Ziffern, `_`, `.` und `-` enthalten.

## Stolperfallen

- Das Docker-Image und deine Compose-Datei sind nicht im Backup. Heb die Compose-Datei auf.
- Wenn du `APP_SECRET` setzt, sicher es separat. Ohne es lassen sich gespeicherte Zugangsdaten nach einer Wiederherstellung auf einem anderen Host nicht entschlüsseln.
