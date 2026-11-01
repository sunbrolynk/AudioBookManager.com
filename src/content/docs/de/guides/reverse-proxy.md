---
title: Reverse Proxy
description: ABM hinter nginx, Traefik oder Caddy betreiben, ohne die Anmeldung kaputtzumachen.
---

:::caution[Nicht empfohlen]
ABM ins Internet zu stellen, über einen Reverse Proxy oder einen weitergeleiteten Port, wird nicht empfohlen. Das raten auch die Servarr-Apps. Wenn du von außen drankommen willst, nimm stattdessen ein VPN wie WireGuard oder Tailscale. ABM ist darauf ausgelegt, hinter einem Proxy sicher zu sein, aber sobald es öffentlich erreichbar ist, gibt es keine Garantie für Sicherheit, und das Risiko trägst du. Wenn du es trotzdem machst, stell **Authentication Required** auf **Enabled** und halte ABM aktuell. Diese Anleitung ist für alle, die es trotzdem tun.
:::

Drei Einstellungen zählen. Wenn die stimmen, funktionieren Anmeldung, Websocket und Speichern.

## 1. ABM sagen, wer der Proxy ist

Setz `TRUSTED_PROXIES` auf die Adresse des Proxys, so eng wie möglich:

```
TRUSTED_PROXIES=172.20.0.5
```

Ein Proxy auf demselben Host braucht `127.0.0.1`. ABM vertraut dann der Client-Adresse, die dein Proxy in `X-Forwarded-For` oder `X-Real-IP` weiterreicht. Ohne das muss sich jede Anfrage mit Forwarding-Headern anmelden. Das ist so gewollt.

## Wie die Client-Adresse gelesen wird

`X-Forwarded-For` wird von rechts nach links gelesen. Jeder Proxy hängt die Adresse an, die er gesehen hat, deshalb ist der linkste Eintrag das, was der Client selbst gesendet hat, und wird nie vertraut. ABM überspringt Einträge aus `TRUSTED_PROXIES` und nimmt den ersten, der nicht dazugehört, als Client. Darum muss `TRUSTED_PROXIES` eng gefasst sein: Alles innerhalb des Bereichs kann einen Eintrag in die Kette setzen. `X-Forwarded-Host` wird ebenfalls nur von einer Adresse aus `TRUSTED_PROXIES` geglaubt.

## 2. Die Header weitergeben

Reich den ursprünglichen `Host` weiter oder schick `X-Forwarded-Host`. nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik und Caddy schicken Forwarding-Header standardmäßig. ABM nutzt einen Websocket für Live-Updates, der Proxy muss also Upgrade-Anfragen durchlassen.

## 3. Festlegen, wer sich anmeldet

- **Authentication Required: Enabled** lässt jeden sich anmelden. Am sichersten, wenn der Proxy öffentlich ist.
- **Disabled for Local Addresses** lässt Clients, die ABM als lokal sieht, ohne Anmeldung rein. Über einen vertrauenswürdigen Proxy ist das der Client, den der Proxy nennt.
- Ein Proxy, der keine Forwarding-Header schickt, lässt alles lokal aussehen. Nimm Enabled.

## Beispielkonfigurationen

Jede davon leitet alle Pfade weiter, auch `/initialize.json`, und kümmert sich um den Websocket. Setz deine eigene Domain und deinen Containernamen ein und stell `TRUSTED_PROXIES` auf die Adresse des Proxys.

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

## Unterordner und Domain

Um ABM unter `/abm` auszuliefern, setz **URL Base** unter General auf `/abm` und starte neu. Trag deine öffentliche Adresse bei **Application URL** ein.

Wenn das Speichern mit `cross_origin_rejected` fehlschlägt, passt der Origin des Browsers nicht. Korrigier zuerst den Host-Header. Sonst trag deine Domain unter Security bei **CORS Allowed Domains** ein und starte neu.

## Body-Größe

Wenn große Uploads mit 413 fehlschlagen, prüf neben `MAX_REQUEST_BODY_BYTES` auch das eigene Limit des Proxys.

## Was im Log steht

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": Füg ihn hinzu.
- "... is in TRUSTED_PROXIES but didn't name a client address": Sorg dafür, dass der Proxy `X-Forwarded-For` oder `X-Real-IP` schickt.

## Fehlersuche

Eine leere Seite oder eine Meldung „Could not load“, die sagt, der Reverse Proxy müsse `/initialize.json` durchreichen (ab 0.19.1 wird das gemeldet), heißt: Der Proxy reicht `/initialize.json` nicht an ABM weiter. Reich es zusammen mit den anderen Pfaden oben durch. Live-Updates, die sich nie verbinden, bedeuten meist, dass das Websocket-Upgrade oder der Header `Sec-WebSocket-Protocol` nicht durchkommt.

Siehe auch [Sicherheit und Anmeldung](/de/settings/security/).
