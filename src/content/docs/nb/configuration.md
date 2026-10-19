---
title: Miljøvariabler
description: Miljøvariabler, lokale nettverk og det grunnleggende om omvendt proxy.
---

De fleste innstillingene ligger i nettgrensesnittet under **Settings**. Disse settes i miljøet.

## Miljøvariabler

| Variabel | Standard | Hva den gjør |
|---|---|---|
| `PORT` | `5173` | Porten til nettgrensesnittet. |
| `TIMEZONE` | `UTC` | Den lokale tidssonen din, for eksempel `America/New_York`. |
| `LOCAL_NETWORKS` | tom | Ekstra CIDR-nettverk som slipper innlogging. Kommaseparert. |
| `TRUSTED_PROXIES` | tom | CIDR-nettverk for omvendte proxyer som får lov til å sette `X-Forwarded-For` og `X-Real-IP`. |
| `APP_SECRET` | auto | Krypteringsroten for lagret påloggingsinfo. Genereres til `/config/app_secret` ved første oppstart hvis den ikke er satt. Sett den selv hvis du vil holde nøkkelen unna config-disken. |
| `DOCS_ENABLED` | `true` | Serverer API-dokumentasjonen på `/api/docs`, `/api/redoc` og `/api/openapi.json`. `false` fjerner dem. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Sender en Content-Security-Policy-header som begrenser grensesnittet til ABMs egne skript, stiler og API, pluss coverbilder over HTTPS. `false` dropper den. Innramming er blokkert uansett. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Den største forespørselskroppen et endepunkt godtar (10 MiB). Større gir HTTP 413. Gjenoppretting av sikkerhetskopi og opplasting av cover har egne grenser. |

## Lokale nettverk

Loopback, de private områdene (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), link-local og IPv6 unique-local-adresser regnes allerede som lokale. Når **Authentication Required** står på modusen for lokale adresser, slipper en forespørsel fra en av dem innlogging. Vil du legge til flere, lister du dem opp:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Omvendt proxy

Bak nginx, Traefik eller lignende setter du `TRUSTED_PROXIES` til adressen til proxyen:

```
TRUSTED_PROXIES=172.20.0.5
```

- Hold den så snever du kan. Bruk proxyens egen adresse, ikke et bredt Docker-subnett.
- En proxy på samme vert trenger `TRUSTED_PROXIES=127.0.0.1`.
- Det er bare klienten proxyen oppgir i `X-Forwarded-For` eller `X-Real-IP` som regnes som klienten.
- Send den opprinnelige `Host`-headeren videre (nginx: `proxy_set_header Host $host;`) eller send `X-Forwarded-Host`. En nettleserforespørsel som endrer noe, blir avvist hvis ikke opprinnelsen stemmer med adressen du når ABM på, eller med et domene i listen over tillatte CORS-domener.
- En proxy som ikke sender videresendingsheadere, ser ut som en lokal klient. Kjører du en sånn, bør du sette Authentication Required til Enabled.

Hvis du blir bedt om å logge inn når du ikke burde, se [Feilsøking](/nb/troubleshooting/).

## Mer

- Innloggingsmoduser, API-nøkler og sikkerhetspolicyen for innhold: [Sikkerhet og innlogging](/nb/settings/security/).
- En fullstendig gjennomgang av proxy-oppsett: [Omvendt proxy](/nb/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (standard 500 MiB) begrenser opplastinger ved gjenoppretting av sikkerhetskopi.
- Alt annet ligger under **Settings** i appen. Se [Oversikt over innstillinger](/nb/settings/media-management/).
