---
title: Variabili d'ambiente
description: Variabili d'ambiente, reti locali e basi del reverse proxy.
---

La maggior parte delle impostazioni sta nell'interfaccia web, in **Settings**. Queste invece si impostano nell'ambiente.

## Variabili d'ambiente

| Variabile | Predefinito | Cosa fa |
|---|---|---|
| `PORT` | `5173` | Porta dell'interfaccia web. |
| `TIMEZONE` | `UTC` | Il tuo fuso orario, per esempio `America/New_York`. |
| `LOCAL_NETWORKS` | vuoto | Reti CIDR aggiuntive che saltano l'accesso. Separate da virgole. |
| `TRUSTED_PROXIES` | vuoto | Reti CIDR dei reverse proxy di cui ti fidi per impostare `X-Forwarded-For` e `X-Real-IP`. |
| `APP_SECRET` | automatico | Chiave radice di cifratura per le credenziali salvate. Se non è impostata, viene generata in `/config/app_secret` al primo avvio. Impostala se vuoi tenere la chiave fuori dal disco di configurazione. |
| `DOCS_ENABLED` | `true` | Espone la documentazione API su `/api/docs`, `/api/redoc` e `/api/openapi.json`. Con `false` sparisce. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Invia un header Content-Security-Policy che limita l'interfaccia a script, stili e API di ABM, più le copertine via HTTPS. Con `false` non viene inviato. L'inserimento in frame resta bloccato in ogni caso. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Dimensione massima del corpo di una richiesta accettata da un endpoint (10 MiB). Oltre, risponde HTTP 413. Il ripristino dei backup e il caricamento delle copertine hanno limiti propri. |

## Reti locali

Loopback, gli intervalli privati (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), gli indirizzi link-local e gli indirizzi IPv6 unique-local contano già come locali. Con **Authentication Required** impostato sulla modalità per indirizzi locali, una richiesta da uno di questi salta l'accesso. Per aggiungerne altri, elencali:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Reverse proxy

Dietro nginx, Traefik o simili, imposta `TRUSTED_PROXIES` sull'indirizzo del proxy:

```
TRUSTED_PROXIES=172.20.0.5
```

- Tienilo più stretto che puoi. Usa l'indirizzo del proxy, non un'intera subnet Docker.
- Un proxy sullo stesso host vuole `TRUSTED_PROXIES=127.0.0.1`.
- Conta come client solo quello che il proxy indica in `X-Forwarded-For` o `X-Real-IP`.
- Fai passare l'header `Host` originale (nginx: `proxy_set_header Host $host;`) oppure invia `X-Forwarded-Host`. Una richiesta del browser che modifica qualcosa viene rifiutata se la sua origine non corrisponde all'indirizzo da cui raggiungi ABM o a un dominio tra i domini CORS consentiti.
- Un proxy che non invia header di inoltro sembra un client locale. Se ne usi uno così, imposta Authentication Required su Enabled.

Se ti viene chiesto l'accesso quando non dovrebbe, vedi [Risoluzione dei problemi](/it/troubleshooting/).

## Altro

- Modalità di accesso, chiavi API e content security policy: [Sicurezza e accesso](/it/settings/security/).
- Una guida completa al proxy: [Reverse proxy](/it/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (predefinito 500 MiB) limita la dimensione dei caricamenti per il ripristino dei backup.
- Tutto il resto è in **Settings** nell'app. Vedi [Panoramica delle impostazioni](/it/settings/media-management/).
