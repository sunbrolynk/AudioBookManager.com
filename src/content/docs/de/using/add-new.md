---
title: Neu hinzufügen
description: Ein Buch suchen und als gesucht hinzufügen.
---

**Library > Add New** sucht bei Libex nach Büchern und fügt die hinzu, die du auswählst. Die Suche findet Titel, Autor, Serie oder eine ASIN.

## Was das Hinzufügen bewirkt

Ein hinzugefügtes Buch wird im gewählten Root-Ordner und Qualitätsprofil zu **Wanted**, und ABM beginnt je nach Überwachungseinstellung danach zu suchen. Ob ein Buch schon in der Bibliothek ist, wird nur über die ASIN erkannt. Eine andere Ausgabe desselben Titels hat eine andere ASIN.

## Suche nach Autoren und Serien

:::caution[Kommt mit dem nächsten Release]
Die Suchmodi Author und Series sind noch in keiner veröffentlichten Version drin.
:::

Die Suche bekommt zwei Modi, die Autoren und Serien selbst finden. Die älteren Buch-Modi heißen dann "Books by author" und "Books in series". Wenn du einen Autor oder eine Serie hinzufügst, wird der Katalog aufgebaut, und die Bücher werden je nach **Monitor** als gesucht hinzugefügt:

| Monitor | Fügt hinzu |
|---|---|
| All | Jedes Buch, auch noch nicht erschienene |
| Future | Nur Bücher, die ab jetzt erscheinen |
| Missing (Standard) | Bücher, die du nicht hast |
| None | Nur den Katalog |

Außerdem wählst du den Root-Ordner, das Qualitätsprofil und ob später erscheinende Bücher auch hinzugefügt werden. Bei einer Serie ist das standardmäßig an, bei einem Autor aus. Ein Autor oder eine Serie, die schon in deiner Bibliothek ist, zeigt "In Library" mit der Aktion **Add missing books**.

Das Hinzufügen läuft als Hintergrundaufgabe mit einer Fortschrittsmeldung.

## Wenn die Suche nichts findet

Eine Suche, die keine Antwort von der Metadatenquelle bekommt, schlägt mit einem Fehler fehl, statt eine leere Liste zu zeigen. Siehe [Fehlerbehebung](/de/troubleshooting/#die-metadatenquelle-ist-nicht-erreichbar).
