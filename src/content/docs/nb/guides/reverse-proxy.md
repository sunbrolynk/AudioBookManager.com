---
title: Omvendt proxy
description: Sett ABM bak nginx, Traefik eller Caddy uten å ødelegge innloggingen.
---

:::caution[Ikke anbefalt]
Å legge ABM ut på internett, gjennom en omvendt proxy eller en videresendt port, er ikke anbefalt, samme råd som Servarr-appene gir. Vil du nå den utenfra, bruk heller en VPN som WireGuard eller Tailscale. ABM er laget for å være trygg bak en proxy, men det finnes ingen garanti for sikkerheten når den er offentlig, og risikoen er din. Gjør du det likevel, sett **Authentication Required** til **Enabled** og hold ABM oppdatert. Denne veiledningen er for dem som gjør det likevel.
:::

Tre innstillinger betyr noe. Får du dem riktig, virker innlogging, websocketen og lagring.

## 1. Fortell ABM hvem proxyen er

Sett `TRUSTED_PROXIES` til adressen til proxyen, så snevert du kan:

```
TRUSTED_PROXIES=172.20.0.5
```

En proxy på samme vert trenger `127.0.0.1`. Da stoler ABM på klientadressen proxyen din videresender i `X-Forwarded-For` eller `X-Real-IP`. Uten dette må alle forespørsler som har videresendingsheadere, logge inn. Det er med vilje.

## Slik leses klientens adresse

`X-Forwarded-For` leses fra høyre mot venstre. Hver proxy legger til adressen den så, så den venstreste oppføringen er det klienten selv sendte, og den stoles aldri på. ABM hopper over oppføringer som står i `TRUSTED_PROXIES`, og tar den første som ikke gjør det, som klient. Derfor må `TRUSTED_PROXIES` være snever: alt innenfor området kan legge til en oppføring i kjeden. `X-Forwarded-Host` tror man også bare på fra en adresse i `TRUSTED_PROXIES`.

## 2. Send headerne videre

Videresend den opprinnelige `Host`, eller send `X-Forwarded-Host`. nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik og Caddy sender videresendingsheadere som standard. ABM bruker en websocket for live-oppdateringer, så proxyen må slippe gjennom upgrade-forespørsler.

## 3. Bestem hvem som må logge inn

- **Authentication Required: Enabled** gjør at alle må logge inn. Tryggest hvis proxyen er offentlig.
- **Disabled for Local Addresses** dropper innlogging for klienter ABM ser som lokale. Gjennom en klarert proxy betyr det klienten proxyen oppgir.
- En proxy som ikke sender videresendingsheadere, får alt til å se lokalt ut. Velg Enabled.

## Eksempelkonfigurasjoner

Hver av dem slipper gjennom alle stier, også `/initialize.json`, og håndterer websocket. Bytt inn ditt eget domene og containernavn, og sett `TRUSTED_PROXIES` til proxyens adresse.

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

## Undermappe og domene

For å servere under `/abm` setter du **URL Base** i General til `/abm` og starter på nytt. Legg den offentlige adressen din i **Application URL**.

Hvis lagring feiler med `cross_origin_rejected`, stemmer ikke opprinnelsen til nettleseren. Fiks Host-headeren først. Ellers legger du domenet ditt til i **CORS Allowed Domains** under Security og starter på nytt.

## Størrelse på forespørsler

Hvis store opplastinger feiler med 413, sjekk proxyens egen grense i tillegg til `MAX_REQUEST_BODY_BYTES`.

## Hva loggen sier

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": legg den til.
- "... is in TRUSTED_PROXIES but didn't name a client address": få proxyen til å sende `X-Forwarded-For` eller `X-Real-IP`.

## Feilsøking

En blank side, eller en melding "Could not load" som sier at reverse proxyen må sende `/initialize.json` videre (rapporteres fra 0.19.1), betyr at proxyen ikke sender `/initialize.json` videre til ABM. Send den videre sammen med de andre stiene ovenfor. Direkteoppdateringer som aldri kobler til, betyr vanligvis at websocket-oppgraderingen eller headeren `Sec-WebSocket-Protocol` ikke kommer gjennom.

Se også [Sikkerhet og innlogging](/nb/settings/security/).
