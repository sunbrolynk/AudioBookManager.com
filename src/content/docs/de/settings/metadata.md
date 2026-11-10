---
title: Metadaten
description: Welche Sidecar-Dateien und Audio-Tags ABM schreibt, und wann.
---

**Settings > Metadata** legt fest, was ABM in den Ordner eines Buchs und in seine Dateien schreibt. Wie diese Dateien genutzt werden, steht unter [Sidecar-Dateien](/de/using/sidecars/).

## Quelle (Source)

**Metadata Source** ist Built-in (Standard), Hosted (libexdb.com) oder Self-hosted, das eine **Server URL** braucht. **Test** schickt eine echte Anfrage an die ausgewählte Quelle, ohne zu speichern, **Status** sagt, ob sie bereit ist, und **Connection** zeigt den Weg, über den Abfragen rausgehen, mit Link zu **Settings > Network**. Ein Wechsel gilt sofort für alle Abfragen. Siehe [Eine Metadatenquelle auswählen](/de/metadata/choosing-a-source/).

## Erstellen von Metadatendateien (Metadata file creation)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Create on Book Add | aus | Dateien schreiben, wenn ein Buch als gesucht hinzugefügt wird |
| Create on Import | an | Dateien schreiben, wenn ein Hörbuch importiert wird |
| Create on Refresh | aus | Dateien anlegen oder aktualisieren, wenn Metadaten aktualisiert werden |
| Overwrite Existing | aus | Dateien ersetzen, die schon im Ordner liegen |

Zu erstellende Dateien: `cover.jpg` (an), `title.opf` (an, kompatibel mit Audiobookshelf), `desc.txt` (an) und `reader.txt` (an).

## Tags in Audiodateien schreiben (Audio file tag writing)

Schreibt die Audio-Tags direkt in die Audiodateien.

| Einstellung | Standard |
|---|---|
| Write Audio Tags | aus |
| Write Audio Tags on Import | an, sobald das Schreiben von Tags an ist |
| Write Audio Tags on Refresh | aus |

Tag-Felder, standardmäßig alle an: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) und Cover Art.

## Lokaler Speicher (Local Storage)

Mit der Built-in-Quelle erscheinen die Abschnitte **Local Storage** und **Storage Backups**. Sie sind eine Vorschau und noch nicht angebunden. Siehe [Deine Metadaten, deine Entscheidung](/de/metadata/control/).

## Stolperfallen

- Das Schreiben von Tags ändert die Audiodateien. Audiobookshelf sieht sie dann als geändert an.
- Lassen sich Metadaten oder ein Cover beim Schreiben der Tags nicht holen, gibt der Aufruf Warnungen zurück, statt fehlzuschlagen.
- Konnte ein Cover nicht eingebettet werden, weil die Verbindung es abgelehnt hat, zeigen die Buchseite und der Bearbeiten-Dialog eine Warnung statt eines schlichten Erfolgs.
