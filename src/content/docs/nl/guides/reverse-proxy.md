---
title: Reverse proxy
description: ABM achter nginx, Traefik of Caddy zetten zonder dat inloggen stukgaat.
---

Drie instellingen doen ertoe. Zet je die goed, dan werken inloggen, de websocket en opslaan allemaal.

## 1. Vertel ABM wie de proxy is

Zet `TRUSTED_PROXIES` op het adres van de proxy, zo smal als je kunt:

```
TRUSTED_PROXIES=172.20.0.5
```

Een proxy op dezelfde host heeft `127.0.0.1` nodig. ABM vertrouwt dan het clientadres dat je proxy doorstuurt in `X-Forwarded-For` of `X-Real-IP`. Zonder deze instelling moet elk request met forwarding-headers inloggen. Dat is bewust zo.

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

## Submap en domein

Wil je het onder `/abm` aanbieden, zet dan **URL Base** in General op `/abm` en herstart. Zet je publieke adres in **Application URL**.

Mislukt opslaan met `cross_origin_rejected`, dan klopt de origin van de browser niet. Los eerst de Host-header op. Helpt dat niet, zet je domein dan in **CORS Allowed Domains** onder Security en herstart.

## Maximale requestgrootte

Mislukken grote uploads met 413, kijk dan naar de eigen limiet van de proxy en naar `MAX_REQUEST_BODY_BYTES`.

## Wat het log zegt

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": voeg hem toe.
- "... is in TRUSTED_PROXIES but didn't name a client address": laat de proxy `X-Forwarded-For` of `X-Real-IP` meesturen.

Zie ook [Beveiliging en inloggen](/nl/settings/security/).
