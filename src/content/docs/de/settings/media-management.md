---
title: Medienverwaltung
description: Root-Ordner, Import, zusätzliche Dateien, Papierkorb, Scans, Upgrades und Berechtigungen.
---

**Settings > Media Management** legt fest, wo Bücher liegen und wie Dateien hineinkommen. Als erweitert markierte Einstellungen erscheinen mit **Show Advanced**.

## Root-Ordner (Root Folders)

Ein Root-Ordner ist ein Verzeichnis, in dem ABM Bücher verwaltet. Du legst einen über **Add Root Folder** an, das einen Ordner-Browser öffnet, in den du den Pfad auch eintippen kannst. ABM kann außerdem nicht zugeordnete Ordner unter einem Root auflisten und importieren. Freier Speicherplatz und Hardlink-Unterstützung eines Roots werden beim Hinzufügen geprüft. Einen Root zu entfernen löscht keine Dateien.

Der Standard-Root-Ordner ist der, in dem neue Bücher landen, und der, der entscheidet, ob beim Bibliotheksimport Hardlinks angeboten werden.

## Ordner (Folders)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Create Empty Book Folders | aus | Legt fehlende Buchordner beim Hinzufügen, beim Wechsel des Root-Ordners und während eines Platten-Scans an. Wird ignoriert, solange **Delete empty folders** an ist, damit kein Ordner nur angelegt wird, um gleich wieder entfernt zu werden. |
| Delete empty folders | aus | Löscht leere Buchordner während eines Platten-Scans und wenn Buchdateien gelöscht werden |

## Import (Importing)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Skip Free Space Check | aus | Für den Fall, dass ABM den freien Speicherplatz eines Roots nicht erkennen kann |
| Minimum Free Space | 100 (MB) | Ein Import, nach dem weniger übrig bliebe, wird abgelehnt |
| Use Hardlinks instead of Copy | an | Für abgeschlossene Downloads: Hardlink statt Kopie, damit das Seeden nicht den doppelten Platz braucht. Erfordert dasselbe Volume. |
| Library Import | Copy | Der Standard für den [Bibliotheksimport](/de/library-import/): kopieren, Hardlink oder verschieben. Hardlink ist ausgegraut, bis der Standard-Root geprüft wurde und es unterstützt. |
| Import Extra Files | an | Hauptschalter dafür, Nicht-Audio-Dateien mitzunehmen. Gilt für Library Import, Manual Import und abgeschlossene Downloads |
| Extra File Extensions (erweitert) | leer | Zusätzliche Endungen, die importiert werden sollen, etwa `srt, lrc`. Gesperrte Dateitypen werden abgelehnt. |
| Preferred Cover (erweitert) | Matched | Das Cover der zugeordneten Ausgabe oder das beste Bild des Ordners, wenn beides vorhanden ist |

Für zusätzliche Dateien gibt es fünf Schalter:

| Schalter | Standard | Umfasst |
|---|---|---|
| Cover art | an | Cover plus Scans von Rückseite und Booklet |
| Book info files | an | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | aus | PDFs, die mit einem Buch kommen |
| Chapters, transcripts and playlists | an | .cue, Kapitellisten, Untertitel, Songtexte, Playlists. Dateinamen darin werden auf das umbenannte Audio umgeschrieben. |
| Audible originals and ebooks | aus | .aax/.aaxc, Gutscheine, epub und Ähnliches |

Unvollständige Downloads und ausführbare Dateien werden nie importiert. ABMs eigene `metadata.json` verarbeitet immer ABM selbst.

Hardlink ist nicht dasselbe wie **Use Hardlinks instead of Copy**. Das ist für Downloads. Der Standard für Library Import ist nur das, was der Dialog Add to Library vorauswählt.

## Dateiverwaltung (File Management)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Unmonitor Deleted Books | aus | Ein von der Platte gelöschtes Buch wird nicht mehr überwacht |
| Change File Date | None | Ändert die Dateidaten bei Import und Rescan |
| Enable Recycling Bin | an | Gelöschte Buchdateien wandern in einen Papierkorb, statt gelöscht zu werden |
| Recycling Bin | leer | Wo der Papierkorb liegt. Leer heißt, ABMs Standard wird genutzt (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (Tage) | 0 schaltet das automatische Aufräumen ab |
| Library Scan Interval | 0 (aus) | Stunden zwischen automatischen Scans |
| Watch for Changes | aus | Scannt, wenn Dateien hinzugefügt, entfernt oder geändert werden |
| Cover Cache Workers | 4 | Wie viele Cover beim Zwischenspeichern von Artwork gleichzeitig heruntergeladen werden, von 1 bis 16. Setz den Wert runter, wenn ein Durchlauf Fehler meldet |

## Qualitäts-Upgrades (Quality Upgrades)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Automatic Upgrade Search | an | Sucht regelmäßig nach besseren Releases heruntergeladener Bücher, die noch unter ihrem Cutoff liegen. Eine Kopie ersetzt deine nur, wenn sie ein echtes Upgrade ist. |
| Upgrade Search Interval | 24 (Stunden) | Wie oft sie läuft |

## Berechtigungen (Permissions, erweitert)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Set Permissions | aus | chmod bei Import und Umbenennung ausführen |
| chmod Folder | 755 | Oktaler Modus für Ordner und Dateien, bei Dateien ohne Ausführungsbits |
| chown Group | leer | Gruppenname oder GID. Nimm auf entfernten Dateisystemen eine GID |

## Stolperfallen

- Ist der Papierkorb aktiviert, sein Ordner aber nicht verfügbar, schlagen Löschvorgänge, die ihn brauchen, fehl, statt endgültig zu löschen.
- Hardlinks funktionieren nur innerhalb eines Dateisystems. Dateien, die sich nicht verlinken lassen, werden kopiert, nie verschoben, und im Importergebnis mitgezählt.

Wenn du Sonarr kennst: Das ist Sonarrs Media Management ohne Benennungsformate. Ordnernamen wählt ABM. Massenhaftes Umbenennen findest du bei Library, Series und Authors als **Rename Files**.
