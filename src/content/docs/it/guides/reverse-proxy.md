---
title: Reverse proxy
description: Mettere ABM dietro nginx, Traefik o Caddy senza rompere l'accesso.
---

:::caution[Sconsigliato]
Mettere ABM su internet, tramite un reverse proxy o una porta inoltrata, è sconsigliato, lo stesso consiglio che danno le app Servarr. Per raggiungerlo da fuori, usa invece una VPN come WireGuard o Tailscale. ABM è fatto per essere sicuro dietro un proxy, ma una volta pubblico non c'è nessuna garanzia di sicurezza, e il rischio è tuo. Se lo fai comunque, imposta **Authentication Required** su **Enabled** e tieni ABM aggiornato. Questa guida è per chi lo fa comunque.
:::

Contano tre impostazioni. Se le imposti bene, accesso, websocket e salvataggi funzionano tutti.

## 1. Di' ad ABM chi è il proxy

Imposta `TRUSTED_PROXIES` sull'indirizzo del proxy, più stretto che puoi:

```
TRUSTED_PROXIES=172.20.0.5
```

Un proxy sullo stesso host vuole `127.0.0.1`. A quel punto ABM si fida dell'indirizzo del client che il proxy inoltra in `X-Forwarded-For` o `X-Real-IP`. Senza questo, qualsiasi richiesta con header di inoltro deve fare l'accesso. È voluto.

## Come viene letto l'indirizzo del client

`X-Forwarded-For` viene letto da destra a sinistra. Ogni proxy aggiunge l'indirizzo che ha visto, quindi la voce più a sinistra è ciò che ha inviato il client stesso e non è mai attendibile. ABM salta le voci presenti in `TRUSTED_PROXIES` e considera client la prima che non c'è. Per questo `TRUSTED_PROXIES` deve essere stretto: qualsiasi cosa nell'intervallo può aggiungere una voce alla catena. Anche `X-Forwarded-Host` è creduto solo se arriva da un indirizzo in `TRUSTED_PROXIES`.

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

## Configurazioni di esempio

Ognuna lascia passare tutti i percorsi, `/initialize.json` compreso, e gestisce il websocket. Metti il tuo dominio e il nome del tuo container e imposta `TRUSTED_PROXIES` sull'indirizzo del proxy.

### nginx

```
server {
    listen 443 ssl;
    server_name abm.example.com;

    location / {
        proxy_pass http://172.20.0.2:5173;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
    }
}
```

### Nginx Proxy Manager

```
Scheme:               http
Forward Hostname/IP:  audiobook-manager
Forward Port:         5173
Websockets Support:   on
```

### Traefik

```
labels:
  - traefik.enable=true
  - traefik.http.routers.abm.rule=Host(`abm.example.com`)
  - traefik.http.routers.abm.entrypoints=websecure
  - traefik.http.routers.abm.tls.certresolver=letsencrypt
  - traefik.http.services.abm.loadbalancer.server.port=5173
```

Traefik passes websockets without any extra setting.

### Caddy

```
abm.example.com {
    reverse_proxy audiobook-manager:5173
}
```

Caddy passes websockets and the original `Host` on its own.

## Sottocartella e dominio

Per servirlo sotto `/abm`, imposta **URL Base** in General su `/abm` e riavvia. Metti il tuo indirizzo pubblico in **Application URL**.

Se i salvataggi falliscono con `cross_origin_rejected`, l'origine del browser non corrisponde. Prima sistema l'header Host. Se non basta, aggiungi il tuo dominio a **CORS Allowed Domains** in Security e riavvia.

## Dimensione del corpo

Se i caricamenti grandi falliscono con 413, controlla il limite del proxy oltre a `MAX_REQUEST_BODY_BYTES`.

## Cosa dice il log

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": aggiungilo.
- "... is in TRUSTED_PROXIES but didn't name a client address": fai inviare al proxy `X-Forwarded-For` o `X-Real-IP`.

## Risoluzione dei problemi

Una pagina bianca, o un messaggio «Could not load» che dice che il reverse proxy deve passare `/initialize.json` (segnalato dalla 0.19.1), significa che il proxy non sta passando `/initialize.json` ad ABM. Passalo, insieme agli altri percorsi qui sopra. Aggiornamenti in tempo reale che non si collegano mai di solito indicano che l'upgrade websocket o l'header `Sec-WebSocket-Protocol` non passa.

Vedi anche [Sicurezza e accesso](/it/settings/security/).
