---
title: Benachrichtigungen
description: Die Glocke in der Kopfzeile und das Panel darunter.
---

Die Glocke in der Kopfzeile am Desktop zeigt dir, was passiert ist und was dich braucht. Klick darauf, um das Benachrichtigungspanel zu öffnen. Auf dem Handy gibt es noch keine Glocke.

## Die Glocke

- Eine Zahl an der Glocke zeigt, wie viele Benachrichtigungen ungelesen sind. Über 99 steht dort 99+. Ist eine ungelesene ein Fehler, wird die Zahl rot.
- Ein Ring um die Glocke steht für laufende Arbeit. Weiß ABM, wie weit sie ist, füllt sich der Ring bis zum Durchschnitt der laufenden Einträge. Sonst dreht er sich nur.
- Eine neue Benachrichtigung lässt die Glocke kurz in der Farbe ihrer Stufe aufblitzen. Ist in deinem System reduzierte Bewegung eingeschaltet, entfällt das Aufblitzen.
- Verliert der Browser die Live-Verbindung zu ABM länger als 10 Sekunden, wird die Glocke zu einer durchgestrichenen Glocke mit gestricheltem Ring. Sie kehrt zurück, sobald die Verbindung wieder da ist.

Der zugängliche Name der Glocke liest dasselbe vor: die Zahl der ungelesenen, wie viele Einträge laufen samt Prozentwert und ob sie offline ist.

## Das Panel

Von oben nach unten:

- **Needs attention** erscheint nur, wenn etwas offen ist. Das sind Dinge, die bleiben, bis sie erledigt sind, etwa ein Buch, dessen Download fehlgeschlagen ist, oder eine neue ABM-Version. Jede hat einen Button: **Search again** stellt eine Suche für das Buch in die Warteschlange, **What's new** öffnet die Seite Updates. Andere öffnen die Seite, um die es geht, oder die Aufgabe, wenn sie fortgesetzt werden kann. Das **x** an einer Zeile blendet sie aus.
- **Running** listet die Arbeit, die gerade läuft: Aufgaben, Downloads und Konvertierungen, mit Fortschritt und verbleibender Zeit, wo bekannt. Klick auf eine Zeile, um dorthin zu springen.
- **Recent** zeigt die neuesten Benachrichtigungen zuerst, mit der Zahl der ungelesenen. Ein Klick öffnet, worum es geht, und markiert sie als gelesen. An einer Zeile gibt es außerdem Buttons, um sie als gelesen oder ungelesen zu markieren und zu löschen.
- **Load older** zeigt mehr vom Verlauf. Gibt es nichts Älteres, sagt das Panel das.

Sind alle drei leer, steht im Panel, dass du auf dem neuesten Stand bist.

Die Fußzeile hat **Mark all read** und einen Link zum [Aktivitätsprotokoll](/de/system/activity-log/). Das Menü neben dem Panel-Titel hat **Clear all**, das vorher nachfragt. Es entfernt alle Benachrichtigungen außer denen, die noch Aufmerksamkeit brauchen. Die bleiben, bis du sie erledigst oder ausblendest.

## Was nicht aufgezeichnet wird

Eine Benachrichtigung kann von einer Hintergrundaufgabe, einem Download oder einer Konvertierung kommen oder von etwas, das du im Browser getan hast und das fehlgeschlagen ist. Die Bedienelemente des Panels selbst sind die Ausnahme. Schlägt Als-gelesen-Markieren, Löschen, Ausblenden, Leeren oder Ältere-Laden fehl, zeigt das Panel den Fehler neben dem Bedienelement und legt keine Benachrichtigung dazu an. Sonst würde ein kaputter Posteingang den Posteingang füllen.

## Ergebnisse am Bedienelement

Aktionen auf Library, Book Detail, Calendar, Authors und Series sowie die Cover-Aktionen zeigen ihr Ergebnis als kurze Zeile an dem Bedienelement, das du benutzt hast. Eine einfache Erfolgszeile verschwindet nach ein paar Sekunden von selbst. Ein Fehler oder eine Warnung bleibt bis zu deiner nächsten Aktion an diesem Bedienelement. Fehler werden außerdem in den Benachrichtigungen aufgezeichnet, sodass du sie auch nach dem Verschwinden der Zeile findest.

Ein Buch, ein Autor oder eine Serie, die gespeichert wird, deren Catalog-Fill aber nicht startet, zeichnet die Warnung „Catalog fill not started“ auf. Ein Add all, bei dem einige Bücher fehlschlagen, zeichnet „Some books were not added“ mit den Gründen auf.

## Aufbewahrung

Alte Benachrichtigungen entfernt die tägliche Log-Bereinigung, standardmäßig nach **30 Tagen**. Einstellen kannst du das mit **Notifications Retention** auf der Seite [Allgemein](/de/settings/general/) oder mit `inbox_retention_days` in der [API](/de/system/api/). 0 behält sie für immer. Benachrichtigungen, die noch Aufmerksamkeit brauchen, werden erst entfernt, wenn du sie erledigst. Die Bereinigung läuft einmal am Tag zur Bereinigungszeit (standardmäßig 03:00) und tut nichts, wenn **Automatic Cleanup** aus ist. Der Hinweis unten im Panel zeigt die aktuelle Zahl der Tage und fehlt bei Aufbewahrung 0.

## Der Unterschied zum Aktivitätsprotokoll

Benachrichtigungen sagen dir, was los ist, und du kannst sie leeren. Das [Aktivitätsprotokoll](/de/system/activity-log/) ist die dauerhafte Aufzeichnung dessen, was passiert ist, und das Leeren der Benachrichtigungen berührt es nicht.
