---
title: Reverse proxy
description: ABM za nginx, Traefikiem albo Caddym bez psucia logowania.
---

:::caution[Nie polecam]
Wystawianie ABM do internetu, przez reverse proxy albo przekierowany port, nie jest polecane. Aplikacje Servarr radzą to samo. Jeśli chcesz mieć dostęp z zewnątrz, użyj zamiast tego VPN-a, na przykład WireGuarda albo Tailscale. ABM jest zbudowany tak, żeby był bezpieczny za proxy, ale kiedy jest publiczny, nie ma gwarancji bezpieczeństwa i ryzyko jest po twojej stronie. Jeśli mimo to to robisz, ustaw **Authentication Required** na **Enabled** i aktualizuj ABM na bieżąco. Ten przewodnik jest dla tych, którzy mimo to to robią.
:::

Liczą się trzy ustawienia. Ustaw je dobrze, a logowanie, websocket i zapisywanie będą działać.

## 1. Powiedz ABM, kto jest proxy

Ustaw `TRUSTED_PROXIES` na adres proxy, tak wąsko, jak się da:

```
TRUSTED_PROXIES=172.20.0.5
```

Proxy na tym samym hoście potrzebuje `127.0.0.1`. Wtedy ABM ufa adresowi klienta, który proxy przekazuje w `X-Forwarded-For` albo `X-Real-IP`. Bez tego każde żądanie z nagłówkami przekierowania musi się zalogować. To celowe.

## Jak odczytywany jest adres klienta

`X-Forwarded-For` jest czytany od prawej do lewej. Każdy proxy dopisuje adres, który zobaczył, więc wpis z lewej to to, co wysłał sam klient, i nigdy mu się nie ufa. ABM pomija wpisy z `TRUSTED_PROXIES` i za klienta bierze pierwszy, którego tam nie ma. Dlatego `TRUSTED_PROXIES` musi być wąskie: wszystko w tym zakresie może dopisać wpis do łańcucha. `X-Forwarded-Host` też jest uznawany tylko z adresu z `TRUSTED_PROXIES`.

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

## Przykładowe konfiguracje

Każda przepuszcza wszystkie ścieżki, także `/initialize.json`, i obsługuje websocket. Wstaw własną domenę i nazwę kontenera oraz ustaw `TRUSTED_PROXIES` na adres proxy.

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

## Podfolder i domena

Żeby serwować pod `/abm`, ustaw **URL Base** w General na `/abm` i zrestartuj. Swój publiczny adres wpisz w **Application URL**.

Jeśli zapisywanie kończy się błędem `cross_origin_rejected`, origin przeglądarki się nie zgadza. Najpierw popraw nagłówek Host. Jeśli to nie pomoże, dodaj swoją domenę do **CORS Allowed Domains** w Security i zrestartuj.

## Rozmiar ciała żądania

Jeśli duże uploady kończą się błędem 413, sprawdź limit samego proxy oraz `MAX_REQUEST_BODY_BYTES`.

## Co mówi log

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": dodaj je.
- "... is in TRUSTED_PROXIES but didn't name a client address": ustaw proxy tak, żeby wysyłało `X-Forwarded-For` albo `X-Real-IP`.

## Rozwiązywanie problemów

Pusta strona albo komunikat „Could not load”, który mówi, że reverse proxy musi przepuszczać `/initialize.json` (zgłaszane od 0.19.1), oznacza, że proxy nie przekazuje `/initialize.json` do ABM. Przepuść go razem z pozostałymi ścieżkami powyżej. Aktualizacje na żywo, które nigdy się nie łączą, zwykle oznaczają, że nie przechodzi aktualizacja do websocketu albo nagłówek `Sec-WebSocket-Protocol`.

Zobacz też [Bezpieczeństwo i logowanie](/pl/settings/security/).
