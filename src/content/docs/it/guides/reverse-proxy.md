---
title: Reverse proxy
description: Mettere ABM dietro nginx, Traefik o Caddy senza rompere l'accesso.
---

Contano tre impostazioni. Se le imposti bene, accesso, websocket e salvataggi funzionano tutti.

## 1. Di' ad ABM chi è il proxy

Imposta `TRUSTED_PROXIES` sull'indirizzo del proxy, più stretto che puoi:

```
TRUSTED_PROXIES=172.20.0.5
```

Un proxy sullo stesso host vuole `127.0.0.1`. A quel punto ABM si fida dell'indirizzo del client che il proxy inoltra in `X-Forwarded-For` o `X-Real-IP`. Senza questo, qualsiasi richiesta con header di inoltro deve fare l'accesso. È voluto.

## 2. Fai passare gli header

Inoltra l'`Host` originale, oppure invia `X-Forwarded-Host`. Con nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik e Caddy inviano gli header di inoltro di default. ABM usa un websocket per gli aggiornamenti in tempo reale, quindi il proxy deve far passare le richieste di upgrade.

## 3. Decidi chi deve accedere

- **Authentication Required: Enabled** fa accedere tutti. È la scelta più sicura se il proxy è pubblico.
- **Disabled for Local Addresses** salta l'accesso per i client che ABM considera locali. Dietro un proxy fidato, vuol dire il client indicato dal proxy.
- Un proxy che non invia header di inoltro fa sembrare tutto locale. Scegli Enabled.

## Sottocartella e dominio

Per servirlo sotto `/abm`, imposta **URL Base** in General su `/abm` e riavvia. Metti il tuo indirizzo pubblico in **Application URL**.

Se i salvataggi falliscono con `cross_origin_rejected`, l'origine del browser non corrisponde. Prima sistema l'header Host. Se non basta, aggiungi il tuo dominio a **CORS Allowed Domains** in Security e riavvia.

## Dimensione del corpo

Se i caricamenti grandi falliscono con 413, controlla il limite del proxy oltre a `MAX_REQUEST_BODY_BYTES`.

## Cosa dice il log

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": aggiungilo.
- "... is in TRUSTED_PROXIES but didn't name a client address": fai inviare al proxy `X-Forwarded-For` o `X-Real-IP`.

Vedi anche [Sicurezza e accesso](/it/settings/security/).
