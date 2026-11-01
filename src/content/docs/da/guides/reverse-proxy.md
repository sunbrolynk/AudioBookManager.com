---
title: Reverse proxy
description: Sæt ABM bag nginx, Traefik eller Caddy uden at ødelægge login.
---

:::caution[Anbefales ikke]
Det anbefales ikke at lægge ABM ud på internettet, hverken gennem en reverse proxy eller en port forward. Det er det samme råd, Servarr-apps'ene giver. Vil du nå den udefra, så brug en VPN som WireGuard eller Tailscale i stedet. ABM er bygget til at være sikker bag en proxy, men der er ingen garanti for sikkerheden, når den først er offentlig, og risikoen er din. Gør du det alligevel, så sæt **Authentication Required** til **Enabled**, og hold ABM opdateret. Denne guide er til dem, der gør det alligevel.
:::

Tre indstillinger betyder noget. Får du dem rigtigt, virker login, websocket og gemning.

## 1. Fortæl ABM, hvem proxyen er

Sæt `TRUSTED_PROXIES` til proxyens adresse, så snævert som muligt:

```
TRUSTED_PROXIES=172.20.0.5
```

En proxy på samme vært skal have `127.0.0.1`. ABM stoler så på den klientadresse, din proxy sender videre i `X-Forwarded-For` eller `X-Real-IP`. Uden det skal enhver request med forwarding-headers logge ind. Det er med vilje.

## Sådan læses klientens adresse

`X-Forwarded-For` læses fra højre mod venstre. Hver proxy tilføjer den adresse, den så, så den venstreste post er det, klienten selv sendte, og den stoles aldrig på. ABM springer poster over, der er i `TRUSTED_PROXIES`, og tager den første, der ikke er, som klient. Derfor skal `TRUSTED_PROXIES` være snæver: alt inden for området kan tilføje en post til kæden. `X-Forwarded-Host` tror man også kun på fra en adresse i `TRUSTED_PROXIES`.

## 2. Send headerne videre

Send den oprindelige `Host` videre, eller send `X-Forwarded-Host`. nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik og Caddy sender forwarding-headers som standard. ABM bruger en websocket til live-opdateringer, så proxyen skal sende upgrade-requests videre.

## 3. Bestem, hvem der skal logge ind

- **Authentication Required: Enabled** får alle til at logge ind. Det sikreste, hvis proxyen er offentlig.
- **Disabled for Local Addresses** springer login over for klienter, ABM ser som lokale. Gennem en betroet proxy betyder det den klient, proxyen angiver.
- En proxy, der ikke sender forwarding-headers, får alt til at se lokalt ud. Vælg Enabled.

## Eksempelkonfigurationer

Hver af dem lader alle stier igennem, også `/initialize.json`, og håndterer websocket. Skriv dit eget domæne og containernavn ind, og sæt `TRUSTED_PROXIES` til proxyens adresse.

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

## Undermappe og domæne

Vil du servere under `/abm`, så sæt **URL Base** i General til `/abm` og genstart. Skriv din offentlige adresse i **Application URL**.

Fejler gemning med `cross_origin_rejected`, passer browserens origin ikke. Ret Host-headeren først. Ellers tilføj dit domæne under **CORS Allowed Domains** i Security og genstart.

## Størrelse på body

Fejler store uploads med 413, så tjek proxyens egen grænse ud over `MAX_REQUEST_BODY_BYTES`.

## Hvad loggen siger

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": tilføj den.
- "... is in TRUSTED_PROXIES but didn't name a client address": få proxyen til at sende `X-Forwarded-For` eller `X-Real-IP`.

## Fejlfinding

En blank side, eller en besked "Could not load", der siger, at reverse proxyen skal sende `/initialize.json` videre (rapporteres fra 0.19.1), betyder, at proxyen ikke sender `/initialize.json` videre til ABM. Send den videre sammen med de andre stier ovenfor. Liveopdateringer, der aldrig forbinder, betyder som regel, at websocket-opgraderingen eller headeren `Sec-WebSocket-Protocol` ikke kommer igennem.

Se også [Sikkerhed og login](/da/settings/security/).
