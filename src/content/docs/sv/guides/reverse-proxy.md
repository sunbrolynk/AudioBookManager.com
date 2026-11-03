---
title: Omvänd proxy
description: Lägg ABM bakom nginx, Traefik eller Caddy utan att förstöra inloggningen.
---

:::caution[Rekommenderas inte]
Att lägga ut ABM på internet, via en omvänd proxy eller en vidarebefordrad port, rekommenderas inte, samma råd som Servarr-apparna ger. Vill du nå den utifrån, använd en VPN som WireGuard eller Tailscale i stället. ABM är byggd för att vara säker bakom en proxy, men det finns ingen garanti för säkerheten när den väl är publik, och risken är din. Gör du det ändå, sätt **Authentication Required** till **Enabled** och håll ABM uppdaterad. Den här guiden är för dig som gör det ändå.
:::

Tre inställningar spelar roll. Får du dem rätt fungerar inloggning, websocket och sparningar.

## 1. Berätta för ABM vem proxyn är

Sätt `TRUSTED_PROXIES` till proxyns adress, så snävt du kan:

```
TRUSTED_PROXIES=172.20.0.5
```

En proxy på samma värd behöver `127.0.0.1`. ABM litar då på klientadressen som din proxy skickar vidare i `X-Forwarded-For` eller `X-Real-IP`. Utan det här måste varje anrop som har forwarding-headers logga in. Det är med avsikt.

## Så läses klientens adress

`X-Forwarded-For` läses från höger till vänster. Varje proxy lägger till adressen den såg, så den vänstraste posten är det klienten själv skickade och litas aldrig på. ABM hoppar över poster som finns i `TRUSTED_PROXIES` och tar den första som inte gör det som klient. Därför måste `TRUSTED_PROXIES` vara snävt: allt inom intervallet kan lägga till en post i kedjan. `X-Forwarded-Host` tros också bara från en adress i `TRUSTED_PROXIES`.

## 2. Skicka vidare headers

Skicka vidare den ursprungliga `Host`, eller skicka `X-Forwarded-Host`. nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik och Caddy skickar forwarding-headers som standard. ABM använder en websocket för liveuppdateringar, så proxyn måste släppa igenom upgrade-anrop.

## 3. Bestäm vem som loggar in

- **Authentication Required: Enabled** gör att alla måste logga in. Säkrast om proxyn är publik.
- **Disabled for Local Addresses** låter klienter som ABM ser som lokala slippa logga in. Genom en betrodd proxy betyder det klienten som proxyn anger.
- En proxy som inte skickar några forwarding-headers får allt att se lokalt ut. Välj Enabled.

## Exempelkonfigurationer

Alla släpper igenom alla sökvägar, även `/initialize.json`, och hanterar websocket. Byt in din egen domän och ditt containernamn och sätt `TRUSTED_PROXIES` till proxyns adress.

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

## Undermapp och domän

För att servera under `/abm` sätter du **URL Base** i General till `/abm` och startar om. Lägg din publika adress i **Application URL**.

Om sparningar misslyckas med `cross_origin_rejected` matchar inte webbläsarens origin. Fixa Host-headern först. Annars lägger du till din domän i **CORS Allowed Domains** under Security och startar om.

## Storlek på request body

Om stora uppladdningar misslyckas med 413, kolla proxyns egen gräns lika väl som `MAX_REQUEST_BODY_BYTES`.

## Vad loggen säger

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": lägg till den.
- "... is in TRUSTED_PROXIES but didn't name a client address": se till att proxyn skickar `X-Forwarded-For` eller `X-Real-IP`.

## Felsökning

En tom sida, eller ett meddelande "Could not load" som säger att reverse proxyn måste släppa igenom `/initialize.json` (rapporteras från 0.19.1), betyder att proxyn inte skickar vidare `/initialize.json` till ABM. Släpp igenom den, tillsammans med de andra sökvägarna ovan. Liveuppdateringar som aldrig ansluter betyder oftast att websocket-uppgraderingen eller headern `Sec-WebSocket-Protocol` inte kommer fram.

Se även [Säkerhet och inloggning](/sv/settings/security/).
