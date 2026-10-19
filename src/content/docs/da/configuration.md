---
title: Miljøvariabler
description: Miljøvariabler, lokale netværk og det grundlæggende om reverse proxies.
---

De fleste indstillinger ligger i webinterfacet under **Settings**. Dem her sættes i miljøet.

## Miljøvariabler

| Variabel | Standard | Hvad den gør |
|---|---|---|
| `PORT` | `5173` | Port til webinterfacet. |
| `TIMEZONE` | `UTC` | Din lokale tidszone, for eksempel `America/New_York`. |
| `LOCAL_NETWORKS` | tom | Ekstra CIDR-netværk, der springer login over. Kommasepareret. |
| `TRUSTED_PROXIES` | tom | CIDR-netværk for reverse proxies, der må sætte `X-Forwarded-For` og `X-Real-IP`. |
| `APP_SECRET` | auto | Krypteringsroden for gemte loginoplysninger. Bliver genereret til `/config/app_secret` ved første opstart, hvis den ikke er sat. Sæt den, hvis nøglen ikke skal ligge på config-disken. |
| `DOCS_ENABLED` | `true` | Viser API-dokumentationen på `/api/docs`, `/api/redoc` og `/api/openapi.json`. `false` fjerner den. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Sender en Content-Security-Policy-header, der begrænser UI'et til ABM's egne scripts, styles og API plus coverbilleder over HTTPS. `false` dropper den. Indlejring i frames er blokeret uanset hvad. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Den største request body, et endpoint tager imod (10 MiB). Større giver HTTP 413. Gendannelse af backup og upload af covers har deres egne grænser. |

## Lokale netværk

Loopback, de private intervaller (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), link-local og IPv6 unique-local-adresser tæller allerede som lokale. Når **Authentication Required** står på tilstanden for lokale adresser, slipper en request fra en af dem for login. Vil du tilføje flere, så skriv dem op:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Reverse proxy

Står ABM bag nginx, Traefik eller lignende, så sæt `TRUSTED_PROXIES` til proxyens adresse:

```
TRUSTED_PROXIES=172.20.0.5
```

- Hold den så snæver som muligt. Brug proxyens egen adresse, ikke et bredt Docker-subnet.
- En proxy på samme vært skal have `TRUSTED_PROXIES=127.0.0.1`.
- Kun den klient, som proxyen angiver i `X-Forwarded-For` eller `X-Real-IP`, tæller som klienten.
- Send den oprindelige `Host`-header videre (nginx: `proxy_set_header Host $host;`), eller send `X-Forwarded-Host`. En browser-request, der ændrer noget, bliver afvist, medmindre dens origin matcher den adresse, ABM bliver tilgået på, eller et domæne i CORS' tilladte domæner.
- En proxy, der ikke sender forwarding-headers, ligner en lokal klient. Sæt Authentication Required til Enabled, hvis du kører sådan en.

Bliver du bedt om at logge ind, når du ikke burde, så se [Fejlfinding](/da/troubleshooting/).

## Mere

- Login-tilstande, API-nøgler og content security policy: [Sikkerhed og login](/da/settings/security/).
- En komplet gennemgang af proxy-opsætning: [Reverse proxy](/da/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (standard 500 MiB) sætter loftet for uploads ved gendannelse af backup.
- Alt det andet ligger under **Settings** i appen. Se [Overblik over indstillinger](/da/settings/media-management/).
