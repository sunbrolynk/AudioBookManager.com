---
title: Metadaten
description: Welche Sidecar-Dateien und Audio-Tags ABM schreibt, und wann.
---

**Settings > Metadata** legt fest, was ABM in den Ordner eines Buchs und in seine Dateien schreibt. Wie diese Dateien genutzt werden, steht unter [Sidecar-Dateien](/de/using/sidecars/).

## Erstellen von Metadatendateien (Metadata file creation)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Create on Book Add | aus | Dateien schreiben, wenn ein Buch als gesucht hinzugefügt wird |
| Create on Import | an | Dateien schreiben, wenn ein Hörbuch importiert wird |
| Create on Refresh | aus | Dateien anlegen oder aktualisieren, wenn Metadaten aktualisiert werden |
| Overwrite Existing | aus | Dateien ersetzen, die schon im Ordner liegen |

Zu erstellende Dateien: `cover.jpg` (an), `title.opf` (an, kompatibel mit Audiobookshelf), `desc.txt` (an) und `reader.txt` (an).

## Tags in Audiodateien schreiben (Audio file tag writing)

Schreibt die Tags mit ffmpeg direkt ins Audio.

| Einstellung | Standard |
|---|---|
| Write Audio Tags | aus |
| Write Tags on Import | an, sobald das Schreiben von Tags an ist |
| Write Tags on Refresh | aus |

Tag-Felder, standardmäßig alle an: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) und Cover Art.

## Kommt in einem späteren Release

Eine Auswahl der Metadatenquelle und eine lokale Kopie der Metadaten-Bibliothek sind für ein späteres Release geplant. Siehe [Deine Metadaten, deine Kontrolle](/de/metadata/control/).

## Stolperfallen

- Das Schreiben von Tags ändert die Audiodateien. Audiobookshelf sieht sie dann als geändert an.
- Lassen sich Metadaten oder ein Cover beim Schreiben der Tags nicht holen, gibt der Aufruf Warnungen zurück, statt fehlzuschlagen.
