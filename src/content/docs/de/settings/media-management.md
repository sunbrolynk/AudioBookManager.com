---
title: Medienverwaltung
description: Root-Ordner, Import, zusätzliche Dateien, Papierkorb, Scans, Upgrades und Berechtigungen.
---

**Settings > Media Management** legt fest, wo Bücher liegen und wie Dateien hineinkommen. Als erweitert markierte Einstellungen erscheinen mit **Show Advanced**.

## Root-Ordner (Root Folders)

Ein Root-Ordner ist ein Verzeichnis, in dem ABM Bücher verwaltet. Du legst einen über **Add Root Folder** an, das einen Ordner-Browser öffnet, in den du den Pfad auch eintippen kannst. ABM kann außerdem nicht zugeordnete Ordner unter einem Root auflisten und importieren. Freier Speicherplatz und Hardlink-Unterstützung eines Roots werden beim Hinzufügen geprüft. Beim Entfernen eines Roots fragt ABM, was passieren soll: **Remove from ABM only** (der Standard) vergisst die Bücher darunter und lässt die Dateien liegen, und **Delete the books and their files** löscht alles unter dem Pfad endgültig, ohne den Papierkorb. Bei einem Root mit Büchern musst du zur Bestätigung etwas eintippen.

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
| Extra File Extensions (erweitert) | leer | Weitere Dateitypen, die mitkommen sollen und ihren Namen behalten, zum Beispiel `srt, lrc`. Mit oder ohne Punkt, getrennt durch Kommas oder Leerzeichen. Gesperrte Typen wie ausführbare Dateien und unfertige Downloads lassen sich nicht speichern. Deaktiviert, solange **Import Extra Files** aus ist |
| Preferred Cover (erweitert) | Matched | Das Cover der zugeordneten Ausgabe oder das beste Bild des Ordners, wenn beides vorhanden ist |

**Import Extra Files** nimmt die anderen Dateien eines Buchs zusammen mit seinem Audio mit. Fünf Schalter legen fest, welche Arten mitkommen, und eine Datei, die zu **Extra File Extensions** passt, kommt auch dann mit, wenn ihre Art ausgeschaltet ist:

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
| Library Scan Interval | 24 | Stunden zwischen automatischen Scans |
| Watch for Changes | an | Scannt, wenn Dateien hinzugefügt, entfernt oder geändert werden |
| Cover Cache Workers | 4 | Wie viele Cover beim Zwischenspeichern von Artwork gleichzeitig heruntergeladen werden, von 1 bis 16 |

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

## Book Naming

Book Naming legt fest, wie ich Dateien und Ordner benenne. Es wird mit dem einen Save der Seite zusammen mit dem Rest von Media Management gespeichert. Es gibt Rename Books, Replace Illegal Characters, Colon Replacement (mit eigener Option) und Formate für Standard Book, Author Folder, Series Folder, Standalone Folder und Book Folder. Jedes Format zeigt ein Live-Beispiel, und eine Token-Liste zeigt alle Token, die du verwenden kannst.

Library, Series und Authors haben außerdem eine Aktion **Organize** für die ausgewählten Bücher, ebenso die Seite eines einzelnen Buchs. Sie öffnet zuerst eine Vorschau aller Änderungen, und nichts wird verschoben, bevor du bestätigst. Organize verschiebt und benennt dann um: Es verschiebt den Ordner jedes Buchs dorthin, wo ihn die Benennungseinstellungen haben wollen, und benennt seine Dateien um. Es läuft als Task, dem du folgen kannst, den du abbrechen und der nach einem Neustart dort weitermacht, wo er stehen geblieben ist. Es läuft immer nur ein Organize gleichzeitig. Es gibt kein Rückgängig, schau dir die Vorschau also genau an. Massenhaftes Umbenennen bleibt bei Library, Series und Authors als **Rename Files**.

Wird ein Organize unterbrochen, macht der nächste Lauf dort weiter, wo er stehen geblieben ist. Ein Buch, das der unterbrochene Lauf auf der Platte schon verschoben oder umbenannt hatte, wird an seinem neuen Ort gefunden und seine Einträge werden aktualisiert, sodass nichts doppelt verschoben wird. Die Vorschau zeigt so ein Buch als bereits verschoben oder bereits umbenannt, und das Ergebnis zählt es als abgeglichen (reconciled). Ein Buch wird nur abgeglichen, wenn ich beweisen kann, dass der Ordner zu diesem Buch gehört: Seine Dateien müssen zu dem passen, was ich gespeichert habe, und kein anderes Buch darf den Ordner beanspruchen. Sonst wird das Buch mit Begründung übersprungen. Ein Rückgängig gibt es weiterhin nicht.

Die Vorschau listet nur die Bücher, die sich ändern würden. Mit **Show all selected books** siehst du auch den Rest. Sie lädt seitenweise, mit **Load more** gehst du durch eine große Auswahl weiter. Der Titel der Vorschau zählt, wie viele Bücher sich ändern und wie viele übersprungen werden.

Auf der Seite eines Buchs steht bei einem Buch, dessen Ordner nicht dort liegt, wo ihn die Benennungseinstellungen hinlegen würden, ein Hinweis mit dem Ordner, in den es käme, und ein Organize-Button.

Läge der neue Ordner eines Buchs innerhalb seines jetzigen Ordners, legt Organize dort den Unterordner an und verschiebt nur die eigenen Dateien des Buchs hinein: sein Audio sowie Cover, Kapitel und andere Sidecar-Dateien, die ich für es führe. Alles andere im Ordner bleibt, wo es war. Die Vorschau sagt „Moves into a subfolder“ und listet auf, was bleibt, und der Ergebnisdialog listet die Dateien auf, die an ihrem Platz geblieben sind. Schlägt ein Verschieben auf halber Strecke fehl, werden die schon verschobenen Dateien zurückgelegt. Den Ordner eines Buchs über seinen Bearbeiten-Dialog in einen Unterordner von sich selbst zu verschieben, funktioniert genauso.

Library Import folgt denselben Benennungseinstellungen, auch wenn er ein Buch aufnimmt, das schon in einem Root-Ordner liegt, oder Dateien in ein Buch verschiebt, das ich schon habe. Ist Rename Books aus, behält jede Datei den Namen, den sie mitbrachte. Eine Datei, deren Name mit einer anderen Datei im Stapel oder einer schon im Buchordner vorhandenen kollidieren würde (Groß- und Kleinschreibung egal), bekommt stattdessen den Namen aus dem Format, und der Import vermerkt, bei welchen Dateien er das getan hat. Ist Rename Books an, werden Dateien, die denselben Namen bekämen, nach Position durchnummeriert, damit Manual Import nie eine überspringt.

Das Standardlayout ist `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Ein Einzelbuch hat keinen Series-Ordner und keine Bandnummer: `Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Auch ein Serienbuch ohne Position beginnt mit dem Jahr. Ein unbekanntes Jahr wird weggelassen und nie als `(Unknown)` geschrieben.

Wenn du Sonarr kennst: Das ist Sonarrs Media Management samt Benennungsformaten.
