---
title: Reverse proxy
description: Sæt ABM bag nginx, Traefik eller Caddy uden at ødelægge login.
---

Tre indstillinger betyder noget. Får du dem rigtigt, virker login, websocket og gemning.

## 1. Fortæl ABM, hvem proxyen er

Sæt `TRUSTED_PROXIES` til proxyens adresse, så snævert som muligt:

```
TRUSTED_PROXIES=172.20.0.5
```

En proxy på samme vært skal have `127.0.0.1`. ABM stoler så på den klientadresse, din proxy sender videre i `X-Forwarded-For` eller `X-Real-IP`. Uden det skal enhver request med forwarding-headers logge ind. Det er med vilje.

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

## Undermappe og domæne

Vil du servere under `/abm`, så sæt **URL Base** i General til `/abm` og genstart. Skriv din offentlige adresse i **Application URL**.

Fejler gemning med `cross_origin_rejected`, passer browserens origin ikke. Ret Host-headeren først. Ellers tilføj dit domæne under **CORS Allowed Domains** i Security og genstart.

## Størrelse på body

Fejler store uploads med 413, så tjek proxyens egen grænse ud over `MAX_REQUEST_BODY_BYTES`.

## Hvad loggen siger

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": tilføj den.
- "... is in TRUSTED_PROXIES but didn't name a client address": få proxyen til at sende `X-Forwarded-For` eller `X-Real-IP`.

Se også [Sikkerhed og login](/da/settings/security/).
