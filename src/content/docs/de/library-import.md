---
title: Bibliotheksimport
description: Eine bestehende Sammlung mit der Import Workbench in ABM übernehmen.
---

Der Bibliotheksimport (Library Import) scannt einen Ordner mit Hörbüchern, ordnet jedem Unterordner Metadaten zu und fügt die Bücher deiner Bibliothek hinzu. **Library > Library Import** öffnet "Import audiobooks you already have", wo du einen Ordner zum Scannen auswählst. Sobald der Scan startet, wechselt ABM zur Zuordnungsseite mit der Überschrift **Match Audiobooks**, wo du die Zuordnungen prüfst und die Bücher hinzufügst.

## Der Ablauf

1. Scan einen Ordner. Jeder Ordner mit Audio wird zu einer Zeile.
2. Prüf die Zuordnungen. Korrigier die, bei denen es nötig ist.
3. Hak die Zeilen an, die du willst, und füg sie dann der Bibliothek hinzu oder lösch sie.

Jede Option ist eine optionale Abweichung von einem Standard aus Media Management.

## Wann eine Zuordnung übernommen wird

Der Scan übernimmt eine Zuordnung nur, wenn die Dateien sie bestätigen:

- die ASIN in den eigenen Tags der Dateien findet das Buch, oder
- die Laufzeit des Buchs weicht höchstens drei Minuten von der der Dateien ab, und seine Position in der Serie oder sein Titel passt zu ihnen.

Ein Autor oder eine Serienposition, die den Dateien widerspricht, schließt ein Buch aus. Passen die Dateien gleich gut zu zwei verschiedenen Büchern oder Aufnahmen, wird keins davon übernommen.

Die Laufzeit der Dateien zählt nur, wenn sich jede Datei des Buchs lesen ließ. Lässt sich eine nicht messen, hat die Zeile keine Laufzeit: Dann kann nur ihre ASIN eine Zuordnung bestätigen, sonst wartet das Buch unter **Needs a look**.

Liegt ein Buch in zwei Formaten vor, ist jedes Format eine eigene Zeile und wird für sich gemessen. Ein Buch, das in Teilen in verschiedenen Formaten vorliegt, ist eine Zeile, wenn es einen eigenen Ordner hat, und seine Teile werden zusammengezählt. Ein abgeschlossener Download mit einem Buch in zwei Formaten wird als eine Kopie gemessen und hat keine Laufzeit für die Zuordnung, wenn die Längen der Kopien um mehr als drei Minuten voneinander abweichen.

Über die Laufzeit wird nur eine englische Ausgabe übernommen oder eine, deren Eintrag keine Sprache nennt. Eine Ausgabe in einer anderen Sprache wird nur übernommen, wenn die eigene ASIN der Dateien sie findet. Ein Buch, das aus dem [lokalen Speicher](/de/settings/metadata/) statt aus einer Live-Abfrage kommt, wird nie ohne dich übernommen.

Schlägt eine der Abfragen einer Zeile fehl, wird nur ein ASIN-Treffer übernommen. Ein Buch, das nur über die Suche nach dem Autor gefunden wurde, wird nur vorgeschlagen, wenn seine Laufzeit zu den Dateien passt. Ein Buch ohne Eintrag steht deshalb auf **Unmatched**, statt ein anderes Buch des Autors vorzuschlagen.

Jede andere Zuordnung wird trotzdem vorgeschlagen, aber die Zeile zählt unter **Needs a look**, ist anfangs nicht angehakt, und **Select All** lässt sie aus, bis du die Zuordnung bestätigst oder eine andere wählst. Eine übernommene Zuordnung zu einem Buch, das schon in deiner Bibliothek ist, zählt unter **In library**. Eine **Needs a look**-Zeile, deren Vorschlag ein Buch aus der Bibliothek ist, stellt ihre Bibliotheksfrage erst, wenn du die Zuordnung bestätigst. Bis dahin sperrt sie Add, wenn du sie anhakst, als Zeile, die noch eine Entscheidung braucht.

Ein Buch aus mehreren losen Dateien, die sich einen Ordner mit anderen Büchern teilen, etwa einen Autorenordner oder den Ordner, den du scannst, ist eine Zeile mit allen Teilen. Dateien, die sich durch eine Buch- oder Bandnummer unterscheiden, bleiben getrennte Zeilen. Teile werden pro Format gruppiert: Eine Datei mit dem ganzen Buch daneben ist eine eigene Zeile, und eine Bitrate im Dateinamen, etwa `128kbps`, ist keine Teilnummer.

Zwei Formate eines Buchs, etwa `Book.mp3` und `Book.m4b`, sind getrennte Zeilen, egal ob die Dateien lose im Ordner liegen, den du scannst, oder in einem eigenen Buchordner. Jede Zeile importiert, entfernt und misst nur ihre eigene Datei. Ein Cover, eine Cue- oder andere Nicht-Audio-Datei mit demselben Namen geht mit der Datei des Buchs mit, wenn das Buch dort in einem Format liegt, und bleibt liegen, wenn es dort in zwei Formaten liegt. Das gilt auch, wenn eine Kopie in die Bibliothek verschoben und die andere im selben Import entfernt wird.

Ein Tag wie `Title: Series, Book 2` wird als Titel, Serie und Position gelesen.

Eine Serienposition, die als Bereich geschrieben ist, etwa `1-3`, passt zu jeder Position darin. Zwei Zahlen, die anders geschrieben sind, etwa `1, 3`, gelten als keine Position.

Ein Tag für Titel, Album, Serie, Serienteil, Interpret, Albuminterpret, Komponist oder Sprecher, der länger als 500 Zeichen ist, wird ignoriert.

**Recent Import Sessions** auf der Seite Library Import zeigt zu jedem Scan, wie viele Zeilen zugeordnet sind, Bücher aus der Bibliothek eingeschlossen, und wie viele offen sind, darunter Zeilen, bei denen du noch eine Zuordnung wählen musst.

## Die Liste lesen

- Die Übersicht zeigt, wie viele Ordner gefunden wurden und wie viele bereit sind. In der Kopfleiste gibt es **Sort** (Folder name, Status, Title, Author, Series, Files) und **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Jeder Filter zeigt seine Anzahl, und die Zahlen passen zur Übersicht. Eine Zuordnung, die du bestätigt hast, heißt Ready. Sortierung und Filter merkt sich dieses Gerät. Sie stehen nicht in der Seitenadresse, ein Link mit `?sort=` oder `?filter=` übernimmt sie also nicht.
- Jede Zeile zeigt Cover, Titel, Autor und Serie und wie sicher die Zuordnung ist, als Prozentwert wie "95% match". In den Ordnerdetails gibt es **Find a match** oder **Change match**, um von Hand zu suchen. Die Suche zeigt jedes Buch, das Libex findet.
- Wenn die Dateien keine ASIN oder Laufzeit haben, mit der sich die Ausgabe bestätigen lässt, steht das in den Ordnerdetails.
- **Rescan** findet Ordner, die seit dem Scan dazugekommen sind, und behält deine Entscheidungen.

Eine ASIN aus einem Kommentar oder einer Beschreibung ist nur ein Hinweis. Sie zählt nur als Treffer, wenn auch der Titel zum Ordnernamen passt. Nur das eigene ASIN-Tag zählt für sich allein.

## Zusammenführen, aufteilen und hinzufügen

- Führ Zeilen zusammen, die ein Buch sind, das über mehrere Ordner verteilt ist. Aufteilen kannst du sie wieder in den Ordnerdetails. Die Zuordnung der zusammengeführten Zeile ist nur ein Vorschlag: Sie zählt unter **Needs a look** und ist nicht angehakt, bis du sie bestätigst oder eine andere wählst. Ihre Laufzeit ist die Summe der Teile, wenn jeder Teil eine hat, und sie behält eine ASIN nur, wenn alle Teile dieselbe angeben. Ein Buch, das aus zwei Formaten mit denselben Dateinamen zusammengeführt wird, zählt einmal: Es bekommt die Laufzeit des längeren Formats, oder keine, wenn sie um mehr als drei Minuten voneinander abweichen oder eine der zusammengeführten Zeilen schon beide Formate enthält. Eine Abfrage, die erst fertig wird, nachdem du ihre Zeile zusammengeführt oder aufgeteilt hast, ist ebenfalls nur ein Vorschlag.
- **Confirm match** in den Details einer Zeile hakt eine **Needs a look**-Zeile an, und **Undo confirmation** nimmt das Häkchen wieder weg.
- Add ist gesperrt, und der Grund steht über dem Button, zum Beispiel "Select at least one folder" oder "2 selected rows still need a decision". Add wird auch verweigert, ohne dass etwas angefasst wird, wenn zwei Zeilen denselben Ordner oder dieselbe Datei beanspruchen.
- Alles, was Dateien entfernen oder ersetzen würde, fragt vorher nach.
- Wenn du die Seite verlässt, werden deine offenen Änderungen gespeichert.

## Kopieren, verschieben oder Hardlink

**Settings > Media Management > Importing** legt den Standard für den Bibliotheksimport fest: kopieren (der Standard), verschieben oder Hardlink. Du kannst bei jedem Import etwas anderes wählen.

Ein per Hardlink übernommenes Buch braucht keinen zusätzlichen Speicherplatz, und das Original bleibt, wo es ist. Für Hardlinks muss der Standard-Root-Ordner sie unterstützen und vorher geprüft worden sein. Sonst ist die Option ausgegraut und der Grund steht daneben. Eine Datei, die sich nicht verlinken lässt, etwa eine auf einem anderen Laufwerk, wird kopiert und niemals verschoben. Der fertige Import sagt dir, wie viele kopiert wurden.

## Zusätzliche Dateien

**Import Extra Files** (standardmäßig an) nimmt das Cover eines Buchs, Notizen und andere Nicht-Audio-Dateien mit. Das gilt für Library Import, Manual Import und abgeschlossene Downloads gleichermaßen. Mit **Show Advanced** wählt **Preferred Cover** das zugeordnete Audible-Cover (der Standard) oder das eigene Cover des Ordners.

## Lange Werte

Ein Sprecher, Titel oder Pfad, der mit Auslassungspunkten abgeschnitten ist, öffnet sich vollständig, wenn du darauf tippst oder klickst. Tipp oder klick noch mal, um ihn zu schließen. Mit der Maus siehst du den ganzen Wert auch, wenn du drüberfährst. Mit der Tastatur fokussierst du ihn und drückst Enter oder Leertaste.

## Andere Antworten als Import

Eine Zeile kann auch mit **keep library** beantwortet werden (eine Kopie eines Buchs ablehnen, das schon in der Bibliothek ist) oder mit **remove empty** (einen Ordner ohne Audio ablehnen, in dem noch Artwork und Sidecars liegen). Das räumt nur auf, was zu der Zeile gehört. **remove empty** verweigert alles, was Audio enthält. Dateien landen im Papierkorb, wenn einer eingerichtet ist, und das Task-Log listet jeden entfernten Pfad auf. Eine **keep library**-Entscheidung gilt nur für das Bibliotheksbuch, um das es ging: Wählst du eine Zuordnung, die etwas anderes oder nach einem anderen Bibliotheksbuch fragt, fragt die Zeile neu. Beim Import wird noch einmal geprüft, und nichts wird entfernt, wenn die Kopie in der Bibliothek bis dahin keine Dateien hat ("Your library has no copy of this book to keep") oder der Ordner Dateien eines Buchs aus deiner Bibliothek enthält ("This folder holds files of a book in your library"). Zeilen, die Dateien entfernen, statt sie zu importieren, laufen erst, wenn jeder Import im selben Add fertig ist, und jede wird verweigert, wenn dann eine ihrer Dateien zu einem Buch aus deiner Bibliothek gehört. So entfernen sie nie Dateien, aus denen im selben Durchgang gerade ein Buch hinzugefügt wurde.

## Cover und zusätzliche Dateien pro Ordner

Der Inspector zeigt das eigene Cover des Ordners neben dem der zugeordneten Ausgabe, jeweils mit Pixelgröße. Ein Klick wählt das andere. Darunter listet **Extra files** jede andere Datei unter dem Namen des Media-Management-Schalters, nach dem sie sich richtet. Ein Punkt markiert eine Auswahl, die von den Einstellungen abweicht, und **Apply this cover and these file choices to the N other selected** überträgt die Auswahl eines Ordners auf die übrigen. Eine Zeile, die Dateien zu einem Buch hinzufügt, das schon in der Bibliothek ist, hat keine Auswahl.

Siehe auch [Eine Bibliothek umziehen](/de/guides/moving-a-library-in/) und [Medienverwaltung](/de/settings/media-management/).
