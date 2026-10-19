---
title: Bibliotheksimport
description: Eine bestehende Sammlung mit der Import Workbench in ABM übernehmen.
---

Der Bibliotheksimport (Library Import) scannt einen Ordner mit Hörbüchern, ordnet jedem Unterordner Metadaten zu und fügt die Bücher deiner Bibliothek hinzu. Die Seite heißt **Match Audiobooks**.

## Der Ablauf

1. Scan einen Ordner. Jeder Ordner mit Audio wird zu einer Zeile.
2. Prüf die Zuordnungen. Korrigier die, bei denen es nötig ist.
3. Wähl die Zeilen aus und füg sie der Bibliothek hinzu.

Jede Option ist eine optionale Abweichung von einem Standard aus Media Management. Ein einfacher Scan mit anschließendem Hinzufügen braucht nie mehr als zwei Klicks.

## Die Liste lesen

- Die Übersicht zeigt, wie viele Ordner gefunden und wie viele zugeordnet wurden. Filtern kannst du nach All, Matched, Needs attention, Unmatched, In library oder Failed lookup. Der Filter bleibt in der Seitenadresse erhalten.
- Jede Zeile zeigt Cover, Titel, Autor und Serie und wie sicher die Zuordnung ist, als Prozentwert wie "95% match". In den Ordnerdetails gibt es **Find a match** oder **Change match**, um von Hand zu suchen.
- Wenn die Dateien keine ASIN oder Laufzeit haben, mit der sich die Ausgabe bestätigen lässt, steht das in den Ordnerdetails.
- **Rescan** findet Ordner, die seit dem Scan dazugekommen sind, und behält deine Entscheidungen.

Eine ASIN aus einem Kommentar oder einer Beschreibung ist nur ein Hinweis. Sie zählt nur als Treffer, wenn auch der Titel zum Ordnernamen passt. Nur das eigene ASIN-Tag zählt für sich allein.

## Zusammenführen, aufteilen und hinzufügen

- Führ Zeilen zusammen, die ein Buch sind, das über mehrere Ordner verteilt ist. Aufteilen kannst du sie wieder in den Ordnerdetails.
- Add ist gesperrt, und der Grund steht über dem Button, zum Beispiel "Select at least one folder" oder "2 selected rows still need a decision".
- Alles, was Dateien entfernen oder ersetzen würde, fragt vorher nach.
- Wenn du die Seite verlässt, werden deine offenen Änderungen gespeichert.

## Kopieren, verschieben oder Hardlink

**Settings > Media Management > Importing** legt den Standard für den Bibliotheksimport fest: kopieren (der Standard), verschieben oder Hardlink. Du kannst bei jedem Import etwas anderes wählen.

Ein per Hardlink übernommenes Buch braucht keinen zusätzlichen Speicherplatz, und das Original bleibt, wo es ist. Für Hardlinks muss der Standard-Root-Ordner sie unterstützen und vorher geprüft worden sein. Sonst ist die Option ausgegraut und der Grund steht daneben. Eine Datei, die sich nicht verlinken lässt, etwa eine auf einem anderen Laufwerk, wird kopiert und niemals verschoben. Der fertige Import sagt dir, wie viele kopiert wurden.

## Zusätzliche Dateien

**Import Extra Files** (standardmäßig an) nimmt das Cover eines Buchs, Notizen und andere Nicht-Audio-Dateien mit. Das gilt für Library Import, Manual Import und abgeschlossene Downloads gleichermaßen. Mit **Show Advanced** wählt **Preferred Cover** das zugeordnete Audible-Cover (der Standard) oder das eigene Cover des Ordners.

## Lange Werte

Ein Sprecher, Titel oder Pfad, der mit Auslassungspunkten abgeschnitten ist, öffnet sich vollständig, wenn du darauf tippst oder Enter bzw. Leertaste drückst. Tipp noch mal, um ihn zu schließen.

## Andere Antworten als Import

Eine Zeile kann auch mit **keep library** beantwortet werden (eine Kopie eines Buchs ablehnen, das schon in der Bibliothek ist) oder mit **remove empty** (einen Ordner ohne Audio ablehnen, in dem noch Artwork und Sidecars liegen). Das räumt nur auf, was zu der Zeile gehört. Alles, was Audio enthält, wird verweigert. Dateien landen im Papierkorb, wenn einer eingerichtet ist, und das Task-Log listet jeden entfernten Pfad auf.

## Cover und zusätzliche Dateien pro Ordner

Der Inspector zeigt das eigene Cover des Ordners neben dem der zugeordneten Ausgabe, jeweils mit Pixelgröße. Ein Klick wählt das andere. Darunter listet **Extra files** jede andere Datei unter dem Namen des Media-Management-Schalters, nach dem sie sich richtet. Ein Punkt markiert eine Auswahl, die von den Einstellungen abweicht, und **Apply this cover and these file choices to the N other selected** überträgt die Auswahl eines Ordners auf die übrigen. Eine Zeile, die Dateien zu einem Buch hinzufügt, das schon in der Bibliothek ist, hat keine Auswahl.

Siehe auch [Eine Bibliothek umziehen](/de/guides/moving-a-library-in/) und [Medienverwaltung](/de/settings/media-management/).
