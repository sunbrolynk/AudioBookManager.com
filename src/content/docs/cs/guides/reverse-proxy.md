---
title: Reverzní proxy
description: Jak dát ABM za nginx, Traefik nebo Caddy a nerozbít přihlašování.
---

:::caution[Nedoporučuje se]
Vystavovat ABM na internet, ať přes reverzní proxy, nebo přes přesměrovaný port, se nedoporučuje. Stejně radí i aplikace Servarr. Pokud se k němu chceš dostat zvenku, použij místo toho VPN, třeba WireGuard nebo Tailscale. ABM je postavený tak, aby byl za proxy bezpečný, ale jakmile je veřejně dostupný, žádnou záruku bezpečnosti nemáš a riziko neseš ty. Pokud to přesto uděláš, nastav **Authentication Required** na **Enabled** a ABM udržuj aktuální.
:::

Záleží na třech nastaveních. Když je máš správně, funguje přihlášení, websocket i ukládání.

## 1. Řekni ABM, kdo je proxy

Nastav `TRUSTED_PROXIES` na adresu proxy, co nejúžeji to jde:

```
TRUSTED_PROXIES=172.20.0.5
```

Proxy na stejném stroji potřebuje `127.0.0.1`. ABM pak věří adrese klienta, kterou proxy přepošle v `X-Forwarded-For` nebo `X-Real-IP`. Bez toho se musí přihlásit každý požadavek, který nese přeposílací hlavičky. Je to tak schválně.

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

## Podsložka a doména

Pokud chceš ABM servírovat pod `/abm`, nastav v General **URL Base** na `/abm` a restartuj. Do **Application URL** dej svou veřejnou adresu.

Pokud ukládání padá s `cross_origin_rejected`, původ v prohlížeči nesedí. Nejdřív oprav hlavičku Host. Jinak přidej svou doménu do **CORS Allowed Domains** v Security a restartuj.

## Velikost těla

Pokud velké nahrávky padají s 413, zkontroluj kromě `MAX_REQUEST_BODY_BYTES` i vlastní limit proxy.

## Co říká log

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": přidej ji.
- "... is in TRUSTED_PROXIES but didn't name a client address": zařiď, aby proxy posílala `X-Forwarded-For` nebo `X-Real-IP`.

Viz taky [Zabezpečení a přihlášení](/cs/settings/security/).
