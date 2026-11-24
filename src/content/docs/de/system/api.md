---
title: API
description: Authentifizierung, Doku-Seiten und Grenzen.
---

ABM hat eine REST-API unter `/api`. Die interaktive Referenz liegt unter `/api/docs` (Swagger) und `/api/redoc`, das Schema unter `/api/openapi.json`. Setz `DOCS_ENABLED=false`, um alle drei zu entfernen. Die Doku-Seiten laden Assets von einem CDN, sie werden also nur mit Internetzugang vollständig dargestellt.

## Authentifizierung

- **API-Key**: Schick `X-Api-Key: <key>` oder `?apikey=<key>`. Du findest oder erneuerst ihn unter **Settings > General > Security**. Siehe [Sicherheit](/de/settings/security/).
- **Bearer-Token** aus der Anmeldung.
- Ein Zugangsnachweis, den du mitschickst, hat Vorrang vor einer Ausnahme, eine Anfrage mit Key aus dem LAN zählt also als API-Anfrage.

## Konventionen

- Fehler kommen als `{"detail": ...}` zurück.
- Secrets werden nie zurückgegeben. Eine Antwort sagt nur, ob eins gesetzt ist.
- Eine Browser-Anfrage, die den Zustand ändert, braucht einen passenden Origin. Skripte mit einem Key sind davon ausgenommen.
- Request-Bodys sind auf 10 MiB begrenzt (`MAX_REQUEST_BODY_BYTES`). Backup-Wiederherstellung und Cover-Upload haben höhere Grenzen. Darüber gibt es HTTP 413.
- Validierungsfehler geben nie zurück, was du geschickt hast.
- `POST /api/tasks` reiht nur `backup_export` ein. Jeder andere Aufgabentyp bekommt HTTP 403, und Einstellungen, die nicht zu `backup_export` passen, bekommen HTTP 422. Manuelle Importe laufen über die Endpunkte unter `/api/manual-import/`, Bibliotheksscans über `POST /api/library/scan`.
- Library Import speichert die Libex-Treffer jeder Zeile selbst auf dem Server. Ein Speichern der Sitzung (`PUT /api/library-import/session/{id}` oder `PATCH /api/library-import/session/{id}/choices`) mit einer Zeile, die `libex_matches` mitschickt, wird mit HTTP 422 abgelehnt, das das Feld nennt. Lass es also in Zeilen weg, die du zurückspeicherst. `POST /api/library-import/retry-match` nimmt eine optionale `session_id` und speichert die gefundenen Treffer in dieser Sitzung.
- `GET /api/metadata/search` liefert eine Seite mit bis zu 50 Ergebnissen. `page` (0 bis 9) wählt die Seite, und die Antwort enthält `page` und `has_more`, das sagt, ob eine spätere Seite noch mehr haben kann. Eine ASIN-Suche hat nur Seite 0. `search_type=phrase` liefert die besten Treffer von Libex für die Suchanfrage, ebenfalls nur auf Seite 0 und mit `has_more` auf false. Eine Seite kann kürzer sein und trotzdem `has_more` auf true haben, weil Libex Bücher weglässt, die es nicht lesen kann. Frag also weitere Seiten ab, bis `has_more` false ist. `limit` (1 bis 50) kürzt eine Seite.
- `POST /api/manual-import/execute` und `/execute-to-book` prüfen jede Dateizeile gegen ein festes Schema. Ein unbekannter Schlüssel, ein relativer `source_path` oder eine leere `files`-Liste wird mit HTTP 422 abgelehnt. Jede Quelle muss eine Audiodatei sein, die weder in einem Systemordner noch direkt in einem Ordner der obersten Ebene wie `/tmp` oder `/mnt` noch in einem von ABMs eigenen Ordnern liegt (Konfiguration, Datenbank, Backups, Logs, Cover, Papierkorb, temporärer Ordner und die Ordner mit dem SSL-Zertifikat und -Schlüssel). Symlinks werden dabei aufgelöst. Eine abgelehnte Datei bekommt HTTP 400 mit ihrem Pfad (`Can't import <path>: the file <reason>.`), und nichts wird eingereiht.
- `POST /api/manual-import/execute` und `/execute-to-book` benennen jede Datei erst beim Ausführen des Imports nach [Book Naming](/de/settings/media-management/#book-naming) und ignorieren ein `destination_filename` in einer Dateizeile.
- `POST /api/manual-import/check-conflicts` nimmt eine `book_id` und die `source_paths`, die du importieren willst, und antwortet in `destination_filenames` mit dem Namen, den jede Datei bekommt, nach Quellpfad. `clashed` listet die Quelldateien, die einen Namen aus dem Format bekommen, weil ihre eigenen Namen kollidieren würden. `audio_conflicts` und `own_conflicts` listen die Namen, die schon im Ordner des Buchs liegen, ohne Rücksicht auf Groß- und Kleinschreibung.

## Ausfälle der Metadatenquelle

Eine Anfrage, die die Metadatenquelle braucht und keine Antwort bekommt, schlägt mit einem `detail` fehl, das die Quelle und den Grund nennt, nie mit einem leeren Ergebnis. Eine Suche, auf die du wartest, gibt bei einem Libex-Rate-Limit nach etwa 10 Sekunden auf.

Wenn du Sonarr kennst: Die API ist nicht v3-kompatibel. Prowlarr kann über seine Prowlarr-Verbindung Indexer in ABM synchronisieren.
