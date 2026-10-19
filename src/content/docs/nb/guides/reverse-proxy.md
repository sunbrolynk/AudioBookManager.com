---
title: Omvendt proxy
description: Sett ABM bak nginx, Traefik eller Caddy uten å ødelegge innloggingen.
---

Tre innstillinger betyr noe. Får du dem riktig, virker innlogging, websocketen og lagring.

## 1. Fortell ABM hvem proxyen er

Sett `TRUSTED_PROXIES` til adressen til proxyen, så snevert du kan:

```
TRUSTED_PROXIES=172.20.0.5
```

En proxy på samme vert trenger `127.0.0.1`. Da stoler ABM på klientadressen proxyen din videresender i `X-Forwarded-For` eller `X-Real-IP`. Uten dette må alle forespørsler som har videresendingsheadere, logge inn. Det er med vilje.

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

## Undermappe og domene

For å servere under `/abm` setter du **URL Base** i General til `/abm` og starter på nytt. Legg den offentlige adressen din i **Application URL**.

Hvis lagring feiler med `cross_origin_rejected`, stemmer ikke opprinnelsen til nettleseren. Fiks Host-headeren først. Ellers legger du domenet ditt til i **CORS Allowed Domains** under Security og starter på nytt.

## Størrelse på forespørsler

Hvis store opplastinger feiler med 413, sjekk proxyens egen grense i tillegg til `MAX_REQUEST_BODY_BYTES`.

## Hva loggen sier

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": legg den til.
- "... is in TRUSTED_PROXIES but didn't name a client address": få proxyen til å sende `X-Forwarded-For` eller `X-Real-IP`.

Se også [Sikkerhet og innlogging](/nb/settings/security/).
