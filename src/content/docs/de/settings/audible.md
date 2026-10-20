---
title: Audible-Einstellungen
description: Konten, Sync-Zeitplan, Downloads und Diagnose.
---

Unter **Settings > Audible** verbindest du Konten und stellst Sync und Downloads ein. Wie die Funktion arbeitet, steht auf der Seite [Audible](/de/audible/).

## Konten

Um ein Konto zu verbinden, brauchst du einen **Marketplace**, einen **Display Name** und die **Redirect URL**, die Amazon nach der Anmeldung zurückschickt. Jedes Konto behält seine eigene Bibliothek. Muss sich ein Konto neu anmelden, meld dich beim selben Konto neu an, statt es zu löschen. Beim Löschen fällt seine Bibliothek weg und sein Gerät wird bei Audible entfernt.

## Zeitplan (Schedule)

| Einstellung | Wirkung |
|---|---|
| Auto Sync | Die Bibliothek nach Zeitplan synchronisieren |
| Sync on Account Add | Synchronisieren, sobald ein Konto verbunden ist |
| Frequency | Täglich, wöchentlich oder monatlich. Bei wöchentlich kommt Day of Week dazu, bei monatlich Day of Month (1-28). |
| Time | Stunde und Minute |
| Use CRON Expression | Ein eigener Cron-Ausdruck ersetzt die Optionen oben |

## Download-Einstellungen (Download Settings)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Mirror Audible library to ABM | an | Jeder Sync fügt die Audible-Bücher hinzu, die noch nicht in ABM sind, und lädt die ohne Dateien herunter, bis zu 25 pro Sync. Beim Einschalten siehst du, wie viele Bücher der nächste Sync hinzufügt und herunterlädt. Siehe [Audible-Bibliothek nach ABM spiegeln](/de/audible/#audible-bibliothek-nach-abm-spiegeln) |
| Concurrent Downloads | 2 | 1 bis 5. Mehr ist schneller und kann an Audibles Rate-Limits stoßen. |
| Preferred Quality | High | High oder Normal |
| Delete Encrypted Files | an | Die verschlüsselte AAXC-Datei entfernen, nachdem sie zu M4B entschlüsselt wurde |
| Temp Download Path | leer | Leer heißt, der temporäre Ordner des Systems wird genutzt |

Fehlgeschlagene Downloads werden von selbst ein paar Mal erneut versucht, mit wachsendem Abstand, und bei einem Ausfall, der länger dauert, wird die Aufgabe für bis zu sechs Stunden neu eingereiht. Eine verweigerte Lizenz, ein Buch, das dir nicht gehört, oder ein Fehler beim Entschlüsseln schlägt nur einmal fehl.

## Verbindungsdiagnose (Connection Diagnostics)

Wähl ein Konto aus und starte die Diagnose. Sie testet FFmpeg, die Zugangsdaten, die API-Verbindung und ob Downloads möglich sind, und zeigt deine ausgehende IP so, wie Audible sie sieht.
