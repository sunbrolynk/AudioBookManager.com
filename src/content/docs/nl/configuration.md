---
title: Omgevingsvariabelen
description: Omgevingsvariabelen, lokale netwerken en de basis van een reverse proxy.
---

De meeste instellingen zitten in de webinterface onder **Settings**. Deze stel je in via de omgeving.

## Omgevingsvariabelen

| Variabele | Standaard | Wat het doet |
|---|---|---|
| `PORT` | `5173` | Poort van de webinterface. |
| `TIMEZONE` | `UTC` | Je lokale tijdzone, bijvoorbeeld `America/New_York`. |
| `LOCAL_NETWORKS` | leeg | Extra CIDR-netwerken die niet hoeven in te loggen. Kommagescheiden. |
| `TRUSTED_PROXIES` | leeg | CIDR-netwerken van reverse proxy's die `X-Forwarded-For` en `X-Real-IP` mogen zetten. |
| `APP_SECRET` | auto | Basis voor de versleuteling van opgeslagen inloggegevens. Is hij niet gezet, dan wordt hij bij de eerste start aangemaakt in `/config/app_secret`. Zet hem zelf om de sleutel van de configschijf te houden. |
| `DOCS_ENABLED` | `true` | Serveert de API-docs op `/api/docs`, `/api/redoc` en `/api/openapi.json`. Met `false` zijn ze weg. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Stuurt een Content-Security-Policy-header mee die de UI beperkt tot ABM's eigen scripts, styles en API, plus covers via HTTPS. Met `false` valt hij weg. Framing blijft hoe dan ook geblokkeerd. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | De grootste request body die een endpoint accepteert (10 MiB). Groter krijgt HTTP 413. Back-up terugzetten en cover uploaden hebben hun eigen limieten. |

## Lokale netwerken

Loopback, de private ranges (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), link-local en IPv6 unique-local-adressen tellen al als lokaal. Staat **Authentication Required** op de modus voor lokale adressen, dan hoeft een request vanaf zo'n adres niet in te loggen. Wil je er meer toevoegen, zet ze dan in de lijst:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Reverse proxy

Draait ABM achter nginx, Traefik of iets vergelijkbaars, zet dan `TRUSTED_PROXIES` op het adres van de proxy:

```
TRUSTED_PROXIES=172.20.0.5
```

- Houd het zo smal als je kunt. Gebruik het eigen adres van de proxy, niet een breed Docker-subnet.
- Een proxy op dezelfde host heeft `TRUSTED_PROXIES=127.0.0.1` nodig.
- Alleen de client die de proxy noemt in `X-Forwarded-For` of `X-Real-IP` geldt als de client.
- Geef de originele `Host`-header door (nginx: `proxy_set_header Host $host;`) of stuur `X-Forwarded-Host` mee. Een browserrequest dat iets wijzigt wordt geweigerd, tenzij de origin overeenkomt met het adres waarop ABM bereikt wordt, of met een domein in de toegestane CORS-domeinen.
- Een proxy die geen forwarding-headers meestuurt, ziet eruit als een lokale client. Draai je zo'n proxy, zet Authentication Required dan op Enabled.

Wordt er om inloggen gevraagd terwijl dat niet zou moeten, kijk dan bij [Problemen oplossen](/nl/troubleshooting/).

## Meer

- Inlogmodi, API-sleutels en de content security policy: [Beveiliging en inloggen](/nl/settings/security/).
- Een volledige uitleg voor de proxy: [Reverse proxy](/nl/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (standaard 500 MiB) begrenst uploads om een back-up terug te zetten.
- Al het andere staat onder **Settings** in de app. Zie [Overzicht van de instellingen](/nl/settings/media-management/).
