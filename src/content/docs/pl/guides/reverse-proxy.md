---
title: Reverse proxy
description: ABM za nginx, Traefikiem albo Caddym bez psucia logowania.
---

Liczą się trzy ustawienia. Ustaw je dobrze, a logowanie, websocket i zapisywanie będą działać.

## 1. Powiedz ABM, kto jest proxy

Ustaw `TRUSTED_PROXIES` na adres proxy, tak wąsko, jak się da:

```
TRUSTED_PROXIES=172.20.0.5
```

Proxy na tym samym hoście potrzebuje `127.0.0.1`. Wtedy ABM ufa adresowi klienta, który proxy przekazuje w `X-Forwarded-For` albo `X-Real-IP`. Bez tego każde żądanie z nagłówkami przekierowania musi się zalogować. To celowe.

## 2. Przekazuj nagłówki

Przekazuj oryginalny `Host` albo wysyłaj `X-Forwarded-Host`. nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik i Caddy domyślnie wysyłają nagłówki przekierowania. ABM używa websocketu do aktualizacji na żywo, więc proxy musi przepuszczać żądania upgrade.

## 3. Zdecyduj, kto się loguje

- **Authentication Required: Enabled** każe logować się wszystkim. Najbezpieczniej, jeśli proxy jest publiczne.
- **Disabled for Local Addresses** pomija logowanie dla klientów, których ABM widzi jako lokalnych. Przez zaufane proxy oznacza to klienta, którego wskaże proxy.
- Proxy, które nie wysyła nagłówków przekierowania, sprawia, że wszystko wygląda na lokalne. Wybierz Enabled.

## Podfolder i domena

Żeby serwować pod `/abm`, ustaw **URL Base** w General na `/abm` i zrestartuj. Swój publiczny adres wpisz w **Application URL**.

Jeśli zapisywanie kończy się błędem `cross_origin_rejected`, origin przeglądarki się nie zgadza. Najpierw popraw nagłówek Host. Jeśli to nie pomoże, dodaj swoją domenę do **CORS Allowed Domains** w Security i zrestartuj.

## Rozmiar ciała żądania

Jeśli duże uploady kończą się błędem 413, sprawdź limit samego proxy oraz `MAX_REQUEST_BODY_BYTES`.

## Co mówi log

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": dodaj je.
- "... is in TRUSTED_PROXIES but didn't name a client address": ustaw proxy tak, żeby wysyłało `X-Forwarded-For` albo `X-Real-IP`.

Zobacz też [Bezpieczeństwo i logowanie](/pl/settings/security/).
