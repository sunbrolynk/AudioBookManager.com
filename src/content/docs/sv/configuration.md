---
title: Miljövariabler
description: Miljövariabler, lokala nätverk och grunderna för en omvänd proxy.
---

De flesta inställningarna finns i webbgränssnittet under **Settings**. De här sätts i miljön.

## Miljövariabler

| Variabel | Standard | Vad den gör |
|---|---|---|
| `PORT` | `5173` | Port för webbgränssnittet. |
| `TIMEZONE` | `UTC` | Din lokala tidszon, till exempel `America/New_York`. |
| `LOCAL_NETWORKS` | tom | Extra CIDR-nätverk som slipper logga in. Kommaseparerade. |
| `TRUSTED_PROXIES` | tom | CIDR-nätverk för omvända proxyer som är betrodda att sätta `X-Forwarded-For` och `X-Real-IP`. |
| `APP_SECRET` | auto | Krypteringsroten för sparade inloggningsuppgifter. Genereras till `/config/app_secret` vid första start om den inte är satt. Sätt den om du vill hålla nyckeln borta från config-disken. |
| `DOCS_ENABLED` | `true` | Serverar API-dokumentationen på `/api/docs`, `/api/redoc` och `/api/openapi.json`. `false` tar bort dem. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Skickar en Content-Security-Policy-header som begränsar gränssnittet till ABM:s egna skript, stilar och API, plus omslagsbilder över HTTPS. `false` stänger av den. Inbäddning i ramar blockeras oavsett. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Största request body som en endpoint tar emot (10 MiB). Större ger HTTP 413. Återställning av säkerhetskopior och uppladdning av omslag har egna gränser. |

## Lokala nätverk

Loopback, de privata intervallen (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), link-local och IPv6 unique-local-adresser räknas redan som lokala. När **Authentication Required** står på läget för lokala adresser slipper ett anrop från någon av dem att logga in. Vill du lägga till fler listar du dem:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Omvänd proxy

Bakom nginx, Traefik eller liknande sätter du `TRUSTED_PROXIES` till proxyns adress:

```
TRUSTED_PROXIES=172.20.0.5
```

- Håll den så snäv du kan. Använd proxyns egen adress, inte ett brett Docker-subnät.
- En proxy på samma värd behöver `TRUSTED_PROXIES=127.0.0.1`.
- Bara klienten som proxyn anger i `X-Forwarded-For` eller `X-Real-IP` räknas som klienten.
- Skicka vidare den ursprungliga `Host`-headern (nginx: `proxy_set_header Host $host;`) eller skicka `X-Forwarded-Host`. Ett anrop från webbläsaren som ändrar något nekas om inte dess origin matchar adressen ABM nås på, eller en domän i CORS allowed domains.
- En proxy som inte skickar några forwarding-headers ser ut som en lokal klient. Sätt Authentication Required till Enabled om du kör en sådan.

Om du blir ombedd att logga in när du inte borde, se [Felsökning](/sv/troubleshooting/).

## Mer

- Inloggningslägen, API-nycklar och content security policy: [Säkerhet och inloggning](/sv/settings/security/).
- En komplett genomgång av proxy: [Omvänd proxy](/sv/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (standard 500 MiB) begränsar uppladdningar vid återställning av säkerhetskopior.
- Allt annat finns under **Settings** i appen. Se [Översikt över inställningar](/sv/settings/media-management/).
