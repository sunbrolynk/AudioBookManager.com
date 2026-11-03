---
title: Reverzní proxy
description: Jak dát ABM za nginx, Traefik nebo Caddy a nerozbít přihlašování.
---

:::caution[Nedoporučuje se]
Vystavovat ABM na internet, ať přes reverzní proxy, nebo přes přesměrovaný port, se nedoporučuje. Stejně radí i aplikace Servarr. Pokud se k němu chceš dostat zvenku, použij místo toho VPN, třeba WireGuard nebo Tailscale. ABM je postavený tak, aby byl za proxy bezpečný, ale jakmile je veřejně dostupný, žádnou záruku bezpečnosti nemáš a riziko neseš ty. Pokud to přesto uděláš, nastav **Authentication Required** na **Enabled** a ABM udržuj aktuální. Tento návod je pro ty, kdo to přesto dělají.
:::

Záleží na třech nastaveních. Když je máš správně, funguje přihlášení, websocket i ukládání.

## 1. Řekni ABM, kdo je proxy

Nastav `TRUSTED_PROXIES` na adresu proxy, co nejúžeji to jde:

```
TRUSTED_PROXIES=172.20.0.5
```

Proxy na stejném stroji potřebuje `127.0.0.1`. ABM pak věří adrese klienta, kterou proxy přepošle v `X-Forwarded-For` nebo `X-Real-IP`. Bez toho se musí přihlásit každý požadavek, který nese přeposílací hlavičky. Je to tak schválně.

## Jak se čte adresa klienta

`X-Forwarded-For` se čte zprava doleva. Každý proxy připojí adresu, kterou viděl, takže nejlevější záznam je to, co poslal sám klient, a nikdy se mu nevěří. ABM přeskakuje záznamy, které jsou v `TRUSTED_PROXIES`, a za klienta bere první, který tam není. Proto musí být `TRUSTED_PROXIES` úzké: cokoli v tom rozsahu může do řetězce přidat záznam. `X-Forwarded-Host` se také věří jen z adresy v `TRUSTED_PROXIES`.

## 2. Předávej hlavičky

Přepošli původní `Host`, nebo posílej `X-Forwarded-Host`. nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik a Caddy posílají přeposílací hlavičky samy od sebe. ABM používá pro živé aktualizace websocket, takže proxy musí propouštět požadavky na upgrade.

## 3. Rozhodni, kdo se přihlašuje

- **Authentication Required: Enabled** donutí přihlásit se každého. Nejbezpečnější, když je proxy veřejná.
- **Disabled for Local Addresses** vynechá přihlášení u klientů, které ABM vidí jako lokální. Přes důvěryhodnou proxy to znamená klienta, kterého proxy uvede.
- Proxy, která neposílá žádné přeposílací hlavičky, udělá ze všeho lokální provoz. Vyber Enabled.

## Ukázkové konfigurace

Každá propouští všechny cesty, včetně `/initialize.json`, a obsluhuje websocket. Dosaď vlastní doménu a název kontejneru a nastav `TRUSTED_PROXIES` na adresu proxy.

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

## Podsložka a doména

Pokud chceš ABM servírovat pod `/abm`, nastav v General **URL Base** na `/abm` a restartuj. Do **Application URL** dej svou veřejnou adresu.

Pokud ukládání padá s `cross_origin_rejected`, původ v prohlížeči nesedí. Nejdřív oprav hlavičku Host. Jinak přidej svou doménu do **CORS Allowed Domains** v Security a restartuj.

## Velikost těla

Pokud velké nahrávky padají s 413, zkontroluj kromě `MAX_REQUEST_BODY_BYTES` i vlastní limit proxy.

## Co říká log

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": přidej ji.
- "... is in TRUSTED_PROXIES but didn't name a client address": zařiď, aby proxy posílala `X-Forwarded-For` nebo `X-Real-IP`.

## Řešení problémů

Prázdná stránka nebo zpráva „Could not load“, která říká, že reverzní proxy musí propouštět `/initialize.json` (hlásí se od 0.19.1), znamená, že proxy nepředává `/initialize.json` do ABM. Propusť ho spolu s ostatními cestami výše. Živé aktualizace, které se nikdy nepřipojí, většinou znamenají, že neprojde websocket upgrade nebo hlavička `Sec-WebSocket-Protocol`.

Viz taky [Zabezpečení a přihlášení](/cs/settings/security/).
