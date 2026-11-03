---
title: Reverse proxy
description: ABM achter nginx, Traefik of Caddy zetten zonder dat inloggen stukgaat.
---

:::caution[Niet aangeraden]
ABM op het internet zetten, via een reverse proxy of een doorgestuurde poort, raad ik af, net als de Servarr-apps. Wil je er van buitenaf bij, gebruik dan liever een VPN zoals WireGuard of Tailscale. ABM is gebouwd om veilig achter een proxy te draaien, maar zodra het publiek bereikbaar is, is er geen garantie op veiligheid en ligt het risico bij jou. Doe je het toch, zet dan **Authentication Required** op **Enabled** en houd ABM up-to-date. Deze gids is voor wie het toch doet.
:::

Drie instellingen doen ertoe. Zet je die goed, dan werken inloggen, de websocket en opslaan allemaal.

## 1. Vertel ABM wie de proxy is

Zet `TRUSTED_PROXIES` op het adres van de proxy, zo smal als je kunt:

```
TRUSTED_PROXIES=172.20.0.5
```

Een proxy op dezelfde host heeft `127.0.0.1` nodig. ABM vertrouwt dan het clientadres dat je proxy doorstuurt in `X-Forwarded-For` of `X-Real-IP`. Zonder deze instelling moet elk request met forwarding-headers inloggen. Dat is bewust zo.

## Hoe het adres van de client wordt gelezen

`X-Forwarded-For` wordt van rechts naar links gelezen. Elke proxy voegt het adres toe dat hij zag, dus het meest linkse item is wat de client zelf stuurde en wordt nooit vertrouwd. ABM slaat items over die in `TRUSTED_PROXIES` staan en neemt het eerste dat er niet in staat als de client. Daarom moet `TRUSTED_PROXIES` smal zijn: alles binnen het bereik kan een item aan de keten toevoegen. `X-Forwarded-Host` wordt ook alleen geloofd als het van een adres in `TRUSTED_PROXIES` komt.

## 2. Geef de headers door

Stuur de originele `Host` door, of stuur `X-Forwarded-Host` mee. nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik en Caddy sturen standaard forwarding-headers mee. ABM gebruikt een websocket voor live updates, dus de proxy moet upgrade-requests doorlaten.

## 3. Bepaal wie moet inloggen

- **Authentication Required: Enabled** laat iedereen inloggen. Het veiligst als de proxy publiek is.
- **Disabled for Local Addresses** slaat inloggen over voor clients die ABM als lokaal ziet. Via een vertrouwde proxy is dat de client die de proxy noemt.
- Een proxy die geen forwarding-headers meestuurt, laat alles er lokaal uitzien. Kies dan Enabled.

## Voorbeeldconfiguraties

Elk voorbeeld laat alle paden door, ook `/initialize.json`, en regelt de websocket. Vul je eigen domein en containernaam in en zet `TRUSTED_PROXIES` op het adres van de proxy.

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

## Submap en domein

Wil je het onder `/abm` aanbieden, zet dan **URL Base** in General op `/abm` en herstart. Zet je publieke adres in **Application URL**.

Mislukt opslaan met `cross_origin_rejected`, dan klopt de origin van de browser niet. Los eerst de Host-header op. Helpt dat niet, zet je domein dan in **CORS Allowed Domains** onder Security en herstart.

## Maximale requestgrootte

Mislukken grote uploads met 413, kijk dan naar de eigen limiet van de proxy en naar `MAX_REQUEST_BODY_BYTES`.

## Wat het log zegt

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": voeg hem toe.
- "... is in TRUSTED_PROXIES but didn't name a client address": laat de proxy `X-Forwarded-For` of `X-Real-IP` meesturen.

## Problemen oplossen

Een lege pagina, of een melding "Could not load" die zegt dat de reverse proxy `/initialize.json` moet doorgeven (gemeld sinds 0.19.1), betekent dat de proxy `/initialize.json` niet aan ABM doorgeeft. Geef het door, samen met de andere paden hierboven. Live-updates die nooit verbinden betekenen meestal dat de websocket-upgrade of de header `Sec-WebSocket-Protocol` er niet doorkomt.

Zie ook [Beveiliging en inloggen](/nl/settings/security/).
