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

## Kommt mit dem nächsten Release

Die Seite wird in Abschnitte gegliedert und bekommt einen Abschnitt **Source** mit der Auswahl **Metadata Source**, **Test** und **Status**. Siehe [Eine Metadatenquelle auswählen](/de/metadata/choosing-a-source/).

Außerdem kommt ein Abschnitt **Local Metadata Library** dazu (optional, als Vorschau angezeigt und noch nicht angebunden), mit einem Download der Bibliothek als SQLite und eigenen geplanten Backups. Die Backups spiegeln die Backup-Optionen unter General und laufen standardmäßig wöchentlich um 04:00, aufbewahrt für 28 Tage.

## Stolperfallen

- Das Schreiben von Tags ändert die Audiodateien. Audiobookshelf sieht sie dann als geändert an.
- Lassen sich Metadaten oder ein Cover beim Schreiben der Tags nicht holen, gibt der Aufruf Warnungen zurück, statt fehlzuschlagen.
