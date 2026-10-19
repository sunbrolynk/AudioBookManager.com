---
title: Reverse Proxy
description: ABM hinter nginx, Traefik oder Caddy betreiben, ohne die Anmeldung kaputtzumachen.
---

Drei Einstellungen zählen. Wenn die stimmen, funktionieren Anmeldung, Websocket und Speichern.

## 1. ABM sagen, wer der Proxy ist

Setz `TRUSTED_PROXIES` auf die Adresse des Proxys, so eng wie möglich:

```
TRUSTED_PROXIES=172.20.0.5
```

Ein Proxy auf demselben Host braucht `127.0.0.1`. ABM vertraut dann der Client-Adresse, die dein Proxy in `X-Forwarded-For` oder `X-Real-IP` weiterreicht. Ohne das muss sich jede Anfrage mit Forwarding-Headern anmelden. Das ist so gewollt.

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

## Unterordner und Domain

Um ABM unter `/abm` auszuliefern, setz **URL Base** unter General auf `/abm` und starte neu. Trag deine öffentliche Adresse bei **Application URL** ein.

Wenn das Speichern mit `cross_origin_rejected` fehlschlägt, passt der Origin des Browsers nicht. Korrigier zuerst den Host-Header. Sonst trag deine Domain unter Security bei **CORS Allowed Domains** ein und starte neu.

## Body-Größe

Wenn große Uploads mit 413 fehlschlagen, prüf neben `MAX_REQUEST_BODY_BYTES` auch das eigene Limit des Proxys.

## Was im Log steht

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": Füg ihn hinzu.
- "... is in TRUSTED_PROXIES but didn't name a client address": Sorg dafür, dass der Proxy `X-Forwarded-For` oder `X-Real-IP` schickt.

Siehe auch [Sicherheit und Anmeldung](/de/settings/security/).
