---
title: Deine Metadaten, deine Entscheidung
description: Was eine Aktualisierung ändert, was du steuerst und welche Dateien und Tags ABM für deinen Player schreibt.
---

ABM führt in seiner eigenen Datenbank Buch über die Metadaten deiner Bibliothek und schreibt sie dorthin zurück, wo dein Player sie nutzen kann. Diese Seite zeigt, was du steuerst und was eine Aktualisierung anfasst.

## Was eine Aktualisierung ändert

Eine Aktualisierung (**Refresh & Scan** bei einem Buch, eine Autor-Aktualisierung, eine Serien-Aktualisierung) fragt die Metadatenquelle erneut und übernimmt, was zurückkommt. Felder, die sie überschreibt, wenn die Quelle einen Wert hat: Titel, Untertitel, Jahr und Erscheinungsdatum, Bewertung, Laufzeit, Sprache, Verlag, Beschreibung, Autoren, Sprecher, Genres und das Cover.

Ein Feld, das die Quelle leer zurückgibt, bleibt, wie es ist.

## Was du steuerst

- **Ein Cover, das du ausgewählt hast.** Es ist gesperrt. Siehe [Die Cover-Sperre](/de/metadata/cover-lock/).
- **Tags, Auto-Tags, Überwachung, Wahl des Qualitätsprofils und die Dateien selbst.** Eine Aktualisierung fasst sie nicht an.
- **Ein Buch, dessen Dateien nicht lesbar sind.** Es bleibt komplett unangetastet, und die Seite Tasks zeigt, warum.

Buchdetails wie Titel, Autoren und Beschreibung kommen von der Quelle. ABM bietet keine Bearbeitung von Hand dafür an, und das ist auch nicht geplant. Was du steuerst, ist, wie sie gespeichert und wohin sie geschrieben werden.

## Der Bearbeiten-Dialog

Der Bearbeiten-Dialog ändert Überwachung, Qualitätsprofil, Pfad und Tags und lässt dich im selben Schritt Sidecar-Dateien und Audio-Tags schreiben, für ein Buch oder eine ganze Auswahl an Serien und Autoren. Siehe [Bibliothek](/de/using/library/#der-bearbeiten-dialog).

## Sidecars, die dein Player liest

ABM schreibt `cover.jpg`, eine `.opf`, `desc.txt` und `reader.txt` neben das Audio und im nächsten Release eine `.cue`-Kapiteldatei. Audiobookshelf liest OPF, Cover und Textdateien, also zeigt der Player das, was du in ABM ausgewählt hast. Siehe [Sidecar-Dateien](/de/using/sidecars/).

## Tags in den Audiodateien

ABM kann Titel, Interpret, Album-Interpret, Album, Genre, Jahr, Kommentar, Sprecher und eingebettetes Cover direkt in die Audiodateien schreiben, damit die Daten mit der Datei mitwandern. Standardmäßig ist das aus. Die Felder wählst du unter **Settings > Metadata**. Siehe [Metadaten-Einstellungen](/de/settings/metadata/).

## Kapitel

ABM vergleicht die in deinen Dateien eingebetteten Kapitel mit denen der veröffentlichten Ausgabe und kann die veröffentlichten Kapitel ohne Neukodierung in die Dateien schreiben. Es verweigert das, wenn die Länge deines Audios zeigt, dass es eine andere Ausgabe ist. Siehe [Kapitel](/de/using/chapters/). Kommt mit dem nächsten Release.

## Serie und Position

Ein Buch trägt seine Serie und seine Position darin. ABM verfolgt Serien als Kataloge, damit es zeigen kann, welche Bücher du hast, und die fehlenden hinzufügen kann. Siehe [Serien verfolgen](/de/using/series-tracking/).

## Tags und Auto-Tags

Tags gehören dir. Auto-Tags setzen sie nach Regeln (Genre, Sprecher, Bewertung, Laufzeit und mehr) und können sie wieder entfernen, wenn ein Buch nicht mehr passt. Tags steuern dann Profile, Benachrichtigungen, Indexer, Importlisten und den Kalender-Feed. Siehe [Tags](/de/settings/tags/).

## Ein wachsender lokaler Bestand

Alles, was ABM über ein Buch erfährt, bleibt in ABMs eigener SQLite-Datenbank in `/config`, auch bei Büchern, die du später entfernst. Sicherst du diesen Ordner, ist der Bestand gesichert. Sobald ein Buch drin ist, hängen die Metadaten nicht mehr davon ab, ob die Quelle erreichbar ist.

:::caution[Kommt mit dem nächsten Release]
Geplant ist eine eigene **Local Metadata Library**: eine optionale Kopie von allem, was ABM je abgefragt hat, die auch erhalten bleibt, wenn ein Buch deine Bibliothek verlässt, mit eigenen geplanten Backups und einem SQLite-Download. Der Abschnitt dafür auf der Seite Metadata ist in den noch nicht gemergten Änderungen schon vorhanden und als Vorschau markiert, aber noch nicht angebunden.
:::

## Zeitpläne für Aktualisierungen

- Discover hat einen eigenen Zeitplan. Siehe [Discover-Einstellungen](/de/settings/discover/).
- Die Audible-Bibliothek hat einen eigenen Sync-Zeitplan. Siehe [Audible-Einstellungen](/de/settings/audible/).
- Ein Bibliotheksscan kann alle N Stunden und bei Dateiänderungen laufen. Siehe [Medienverwaltung](/de/settings/media-management/).
- Ob beim Aktualisieren Sidecars und Tags geschrieben werden, steuern **Create on Refresh** und **Write Tags on Refresh**.
