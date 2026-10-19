---
title: Bibliothek
description: Bücher, Autoren und Serien und wie ABM ihren Status verfolgt.
---

Das Menü **Library** hat drei Listen: **Books**, **Series** und **Authors**. Über **Add New** und **Library Import** kommt etwas hinein. **Audible Library** und **Conversions** haben eigene Seiten.

## Bücher

Jedes Buch ist eine Übersichtszeile, ein Poster oder eine Tabellenzeile (der Ansichtsschalter sitzt in der Werkzeugleiste). Ein Buch hat einen Status:

- **Wanted**: überwacht, noch keine Dateien. ABM sucht danach.
- **Downloaded**: Die Dateien liegen auf der Platte.
- **Missing Files**: Das Buch wurde heruntergeladen, aber seine Dateien liegen nicht mehr da, wo ABM sie erwartet.
- **Unmonitored**: ABM lässt es in Ruhe.

Öffne ein Buch für seine Detailseite: Dateien, Metadaten, Verlauf, die Qualität, die ABM gemessen hat, und Aktionen wie Refresh & Scan und der Bearbeiten-Dialog (siehe unten). Siehe [Sidecar-Dateien](/de/using/sidecars/).

Wenn du Sonarr kennst: Ein Buch ist eine Episode, eine Serie ist Staffel und Show in einem, und ein Autor ist eine Möglichkeit, beides zu gruppieren. Der Unterschied: Ein Buch kann zu mehreren Serien gehören, und ABM nimmt die primäre (die mit der niedrigsten Position), wenn es sich entscheiden muss.

## Serien

**Library > Series** listet jede Serie mit der Zahl der Bücher, die du hast, die gesucht sind und bei denen Dateien fehlen, als Overview oder Posters. Eine Serienseite zeigt den ganzen Katalog, auch die Bücher, die du nicht hast. Du kannst sie nach All, In Library oder Not in Library filtern. **Add Remaining** oder **Select to Add** holt die fehlenden Bücher als gesucht rein, und **Refresh Series** lädt den Katalog neu. **Monitor New Books** (All oder None) entscheidet, ob Bücher, die später erscheinen, als gesucht hinzugefügt werden. Siehe [Serien verfolgen](/de/using/series-tracking/).

## Autoren

**Library > Authors** listet die Autoren, als Overview oder Posters. Eine Autorenseite zeigt den Katalog nach Serien gruppiert, mit der Zahl der heruntergeladenen und aller Bücher pro Serie, dazu Qualitätsprofil, Genres und Bewertung. **Refresh Catalog** lädt ihn neu, und **Search Author** sucht nach den gesuchten Büchern des Autors. **Monitor New Books** funktioniert wie bei einer Serie, und ein Autor startet mit None.

Eine Serie oder einen Autor zu löschen wird verweigert, solange noch Bücher davon in der Bibliothek sind. Entfern zuerst die Bücher.

## Vererbung des Qualitätsprofils

Das Qualitätsprofil eines Buchs kommt, in dieser Reihenfolge, aus: seiner eigenen Überschreibung, seiner primären Serie, seinem primären Autor und dann dem Standardprofil. Siehe [Profile](/de/settings/profiles/).

## Der Bearbeiten-Dialog

Der Bearbeiten-Dialog eines Buchs ändert ABMs eigene Einstellungen dafür, nicht seine Metadaten:

- **Monitored**
- **Quality Profile** (No Change, wenn du mehrere bearbeitest)
- **Path** bei einem Buch (mit einem Button, um ihn neu zu berechnen), oder **Root Folder** bei einer Auswahl
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt und eine OPF (an der Checkbox steht "metadata.opf"; die Datei heißt wie die erste Audiodatei des Buchs, zum Beispiel `Dune.opf`, oder `title.opf`, wenn es kein Audio gibt)
- **Write to Audio Files**: Metadaten-Tags schreiben

Derselbe Dialog öffnet sich bei Serien und Autoren und gilt dann für jedes ihrer Bücher. Die Schreiboptionen laufen beim Speichern.

## Tags

Bücher, Autoren und Serien können Tags tragen. Tags steuern Indexer, Benachrichtigungen, Importlisten und Profile und filtern den Kalender-Feed. Siehe [Tags](/de/settings/tags/).

## Auswahl

Wähl Zeilen aus, um mehrere auf einmal zu bearbeiten: überwachen, suchen, taggen, umbenennen, löschen. Fürs Handy siehe [Nutzung am Handy](/de/phone/).
