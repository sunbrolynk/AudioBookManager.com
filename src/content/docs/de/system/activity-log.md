---
title: Aktivitätsprotokoll und Events
description: Die Aufzeichnung dessen, was passiert ist, und wie sie sich von den Logs unterscheidet.
---

ABM führt drei Arten von Aufzeichnungen.

| Wo | Was es ist |
|---|---|
| **System > Events** und **System > Activity Log** | Das Aktivitätsprotokoll: eine Liste in der Datenbank mit Dingen, die passiert sind. Events ist die nach Schweregrad gefilterte Ansicht. Activity Log (mit dem Titel Activity History) filtert nach Kategorie, durchsucht die Meldung und zeigt den Zustand vorher und nachher |
| **System > Log Files** | Text-Logdateien mit allen Details. Siehe [Logs](/de/system/logs/) |
| **Activity > History** | Nur der Download-Verlauf. Siehe [Aktivität](/de/using/activity/) |

## Was aufgezeichnet wird

Abgeschlossene Hintergrundaufgaben (je eine Zusammenfassungszeile), manuelle Änderungen an Clients, Indexern, Profilen, Tags, Benachrichtigungen, Root-Ordnern und so weiter, Grabs (und wer sie gestartet hat), Konvertierungen, fehlgeschlagene Audible-Downloads, Backups, Anmeldungen und fehlgeschlagene Anmeldungen sowie ein fehlgeschlagener Schritt beim Start.

Kategorien: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security und System.

## Datenschutz

Einträge enthalten nie URLs, Hosts, Benutzernamen, Passwörter, Keys, Tokens oder rohen Fehlertext von einem Client oder Dienst. Objekte werden mit dem Namen benannt, den du ihnen gegeben hast. Beim Speichern von Einstellungen wird aufgeführt, welche Einstellungen sich geändert haben, aber nicht ihre Werte. Bei Anmeldungen wird nur die IP-Adresse gespeichert. Fehlgeschlagene Anmeldungen von einer Adresse innerhalb von 15 Minuten werden zu einer Zeile mit der Anzahl der Versuche zusammengefasst.

## Absichtlich ruhig

Ein geplanter Lauf, der nichts zu tun hatte, schreibt nichts. Eine Wiederholung desselben Fehlers schreibt nichts, eine Erholung davon aber schon. Ein manueller Lauf wird immer aufgezeichnet.

## Aufbewahrung

**Activity Log Retention** unter General löscht Einträge standardmäßig nach 90 Tagen. Mit 0 bleiben sie erhalten. Logdateien haben ihre eigene Aufbewahrung (30 Tage), ein Link von einem Eintrag auf ein Log kann das Log also überdauern.

## Log ansehen

:::caution[Kommt mit dem nächsten Release]
Links von Einträgen zum Log sind noch in keiner veröffentlichten Version drin.
:::

Einträge verlinken auf das Log, aus dem sie stammen, und öffnen es an der passenden Zeile. Ist das Log weg, steht beim Eintrag "Log no longer kept".
