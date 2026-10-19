---
title: Eine Bibliothek umziehen
description: Eine bestehende Sammlung sicher in ABM übernehmen.
---

## Bevor du loslegst

1. Sichere die Sammlung. Der Bibliotheksimport kopiert standardmäßig, aber rechne mit Fehlern.
2. Richte einen Root-Ordner und ein Qualitätsprofil ein und stell sicher, dass die Metadatenquelle erreichbar ist.
3. Entscheide dich für kopieren, verschieben oder Hardlink. Kopieren ist am sichersten. Ein Hardlink spart Platz, wenn die Bibliothek auf demselben Dateisystem liegt wie die Quelle. Siehe [Medienverwaltung](/de/settings/media-management/).

## Die Schritte

1. **Library > Library Import**, scan den Ordner.
2. Lies die Liste. Zuordnungen zeigen einen Prozentwert. Korrigier Zeilen mit **Needs attention** und **Unmatched** über **Find a match** oder führ Zeilen zusammen, die ein über mehrere Ordner verteiltes Buch sind.
3. Prüf Cover und zusätzliche Dateien pro Ordner nur, wenn du von den Standards abweichen willst.
4. Wähl die Zeilen aus und füg sie hinzu. Wenn du die Standards übernimmst, bleibt es bei zwei Klicks.
5. Behalt die Aufgabe im Blick. Die Zusammenfassung sagt, wie viele Dateien kopiert statt per Hardlink übernommen wurden und was fehlgeschlagen ist.

## Wenn ABM den Quellordner verwalten soll

Leg ihn stattdessen als Root-Ordner an und lass ABM ihn scannen. So bleiben die Dateien, wo sie sind, und die Bücher bekommen ihren Status aus dem, was auf der Platte liegt.

## Stolperfallen

- Ein Buch, das schon in der Bibliothek ist, wird auch so angezeigt. Lehn das Duplikat mit der Antwort keep library ab, statt es doppelt zu importieren.
- Wenn du einen Ordner ohne Audio ablehnst, wird nur entfernt, was zu dieser Zeile gehört, und es landet im Papierkorb, falls der aktiviert ist.
- Eine ASIN aus einer Beschreibung ist ein Hinweis und keine Zuordnung, außer der Titel passt auch.
- Nach dem Import aktualisierst du, um die aktuellen Metadaten zu holen, und schaltest das Schreiben von Sidecars ein, wenn Audiobookshelf ABMs Entscheidungen sehen soll. Siehe [Sidecar-Dateien](/de/using/sidecars/).
