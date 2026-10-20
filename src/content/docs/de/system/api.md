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

## Ausfälle der Metadatenquelle

Eine Buchsuche, die von Libex keine Antwort bekommt, liefert 502 mit "Libex search failed". Eine Autoren- oder Serien-Suche liefert 503 mit "Libex could not be reached; try again shortly". Manche Lookup-Routen liefern bei einem Ausfall trotzdem ein leeres Ergebnis.

Wenn du Sonarr kennst: Die API ist nicht v3-kompatibel. Prowlarr kann über seine Prowlarr-Verbindung Indexer in ABM synchronisieren.
