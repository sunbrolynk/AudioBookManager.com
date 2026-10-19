---
title: Umgebungsvariablen
description: Umgebungsvariablen, lokale Netzwerke und die Grundlagen zum Reverse Proxy.
---

Die meisten Einstellungen findest du in der Weboberfläche unter **Settings**. Diese hier werden über die Umgebung gesetzt.

## Umgebungsvariablen

| Variable | Standard | Was sie macht |
|---|---|---|
| `PORT` | `5173` | Port der Weboberfläche. |
| `TIMEZONE` | `UTC` | Deine lokale Zeitzone, zum Beispiel `America/New_York`. |
| `LOCAL_NETWORKS` | leer | Zusätzliche CIDR-Netze, die ohne Anmeldung durchkommen. Durch Kommas getrennt. |
| `TRUSTED_PROXIES` | leer | CIDR-Netze von Reverse Proxys, denen ABM beim Setzen von `X-Forwarded-For` und `X-Real-IP` vertraut. |
| `APP_SECRET` | automatisch | Wurzel der Verschlüsselung für gespeicherte Zugangsdaten. Ist die Variable nicht gesetzt, wird beim ersten Start `/config/app_secret` generiert. Setz sie, wenn der Schlüssel nicht auf der Config-Platte liegen soll. |
| `DOCS_ENABLED` | `true` | Stellt die API-Doku unter `/api/docs`, `/api/redoc` und `/api/openapi.json` bereit. Mit `false` fällt sie weg. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Schickt einen Content-Security-Policy-Header, der die Oberfläche auf ABMs eigene Skripte, Styles und API beschränkt, plus Cover-Bilder über HTTPS. Mit `false` entfällt er. Das Einbetten in Frames bleibt so oder so gesperrt. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Größter Request-Body, den ein Endpoint annimmt (10 MiB). Alles darüber bekommt HTTP 413. Backup-Wiederherstellung und Cover-Upload haben eigene Grenzen. |

## Lokale Netzwerke

Loopback, die privaten Bereiche (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), Link-Local- und IPv6-Unique-Local-Adressen gelten schon als lokal. Steht **Authentication Required** auf dem Modus für lokale Adressen, kommt eine Anfrage von dort ohne Anmeldung durch. Weitere Netze trägst du so ein:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Reverse Proxy

Hinter nginx, Traefik oder Ähnlichem setzt du `TRUSTED_PROXIES` auf die Adresse des Proxys:

```
TRUSTED_PROXIES=172.20.0.5
```

- Halt den Bereich so eng wie möglich. Nimm die Adresse des Proxys selbst, kein breites Docker-Subnetz.
- Ein Proxy auf demselben Host braucht `TRUSTED_PROXIES=127.0.0.1`.
- Als Client zählt nur der Client, den der Proxy in `X-Forwarded-For` oder `X-Real-IP` nennt.
- Gib den ursprünglichen `Host`-Header weiter (nginx: `proxy_set_header Host $host;`) oder schick `X-Forwarded-Host`. Eine Browser-Anfrage, die etwas ändert, wird abgelehnt, außer ihr Origin passt zu der Adresse, unter der ABM erreicht wird, oder zu einer Domain in den erlaubten CORS-Domains.
- Ein Proxy, der keine Forwarding-Header schickt, sieht aus wie ein lokaler Client. Wenn du so einen betreibst, stell Authentication Required auf Enabled.

Wenn eine Anmeldung verlangt wird, obwohl sie es nicht sollte, schau unter [Fehlerbehebung](/de/troubleshooting/).

## Mehr dazu

- Anmeldemodi, API-Keys und die Content Security Policy: [Sicherheit und Anmeldung](/de/settings/security/).
- Eine komplette Anleitung für den Proxy: [Reverse Proxy](/de/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (Standard 500 MiB) begrenzt Uploads bei der Backup-Wiederherstellung.
- Alles andere findest du in der App unter **Settings**. Siehe [Überblick über die Einstellungen](/de/settings/media-management/).
