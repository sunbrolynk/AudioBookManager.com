---
title: Зворотний проксі
description: Як поставити ABM за nginx, Traefik чи Caddy і не зламати вхід.
---

:::caution[Не рекомендується]
Виставляти ABM в інтернет, через зворотний проксі чи прокинутий порт, не рекомендується, так само радять і застосунки Servarr. Щоб заходити ззовні, краще користуйся VPN, наприклад WireGuard або Tailscale. ABM зроблено так, щоб він був безпечним за проксі, але щойно він стає публічним, жодних гарантій безпеки немає, і ризик на тобі. Якщо все одно це робиш, задай **Authentication Required** як **Enabled** і вчасно оновлюй ABM. Цей посібник для тих, хто все одно це робить.
:::

Важливі три налаштування. Зроби їх правильно, і вхід, вебсокет і збереження працюватимуть.

## 1. Скажи ABM, хто проксі

Задай у `TRUSTED_PROXIES` адресу проксі, якомога вужче:

```
TRUSTED_PROXIES=172.20.0.5
```

Проксі на тому самому хості потребує `127.0.0.1`. Тоді ABM довіряє адресі клієнта, яку проксі передає в `X-Forwarded-For` чи `X-Real-IP`. Без цього кожен запит із заголовками пересилання мусить проходити вхід. Так зроблено навмисно.

## Як читається адреса клієнта

`X-Forwarded-For` читається справа наліво. Кожен проксі додає адресу, яку він побачив, тож крайній лівий запис це те, що надіслав сам клієнт, і йому ніколи не довіряють. ABM пропускає записи, які є в `TRUSTED_PROXIES`, і клієнтом вважає перший, якого там немає. Тому `TRUSTED_PROXIES` має бути вузьким: усе в цьому діапазоні може додати запис до ланцюжка. `X-Forwarded-Host` теж приймається лише з адреси з `TRUSTED_PROXIES`.

## 2. Передавай заголовки

Пересилай оригінальний `Host` або надсилай `X-Forwarded-Host`. Для nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik і Caddy надсилають заголовки пересилання за замовчуванням. ABM використовує вебсокет для оновлень у реальному часі, тож проксі має пропускати запити на upgrade.

## 3. Виріши, хто має входити

- **Authentication Required: Enabled** змушує входити всіх. Найбезпечніше, якщо проксі публічний.
- **Disabled for Local Addresses** пропускає вхід для клієнтів, яких ABM вважає локальними. Через довірений проксі це означає клієнта, якого назвав проксі.
- Проксі, який не надсилає заголовків пересилання, робить так, що все виглядає локальним. Вибирай Enabled.

## Приклади конфігурацій

Кожна пропускає всі шляхи, зокрема `/initialize.json`, і обробляє websocket. Підстав свій домен та назву контейнера й задай `TRUSTED_PROXIES` як адресу проксі.

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

## Підтека та домен

Щоб віддавати ABM за адресою `/abm`, задай **URL Base** у General як `/abm` і перезапусти. Свою публічну адресу вкажи в **Application URL**.

Якщо збереження падають із `cross_origin_rejected`, походження (origin) браузера не збігається. Спершу виправ заголовок Host. Якщо не допоможе, додай свій домен у **CORS Allowed Domains** у Security і перезапусти.

## Розмір тіла запиту

Якщо великі завантаження падають із 413, перевір і ліміт самого проксі, і `MAX_REQUEST_BODY_BYTES`.

## Що пише журнал

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": додай адресу.
- "... is in TRUSTED_PROXIES but didn't name a client address": налаштуй проксі, щоб він надсилав `X-Forwarded-For` або `X-Real-IP`.

## Усунення проблем

Порожня сторінка або повідомлення «Could not load», яке каже, що зворотний проксі має пропускати `/initialize.json` (повідомляється з 0.19.1), означає, що проксі не передає `/initialize.json` до ABM. Пропусти його разом з іншими шляхами вище. Оновлення наживо, які ніколи не підключаються, зазвичай означають, що не проходить оновлення до websocket або заголовок `Sec-WebSocket-Protocol`.

Дивись також [Безпека та вхід](/uk/settings/security/).
