---
title: Зворотний проксі
description: Як поставити ABM за nginx, Traefik чи Caddy, не зламавши вхід.
---

Важливі три налаштування. Якщо їх задати правильно, вхід, websocket і збереження працюватимуть.

## 1. Скажи ABM, хто є проксі

Задай `TRUSTED_PROXIES` з адресою проксі, якомога вужче:

```
TRUSTED_PROXIES=172.20.0.5
```

Проксі на тому ж хості потребує `127.0.0.1`. Тоді ABM довіряє адресі клієнта, яку твій проксі пересилає в `X-Forwarded-For` або `X-Real-IP`. Без цього будь-який запит із заголовками пересилання вимагатиме входу. Це зроблено навмисно.

## 2. Передай заголовки

Пересилай оригінальний `Host` або надсилай `X-Forwarded-Host`. nginx:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik і Caddy типово надсилають заголовки пересилання. ABM використовує websocket для живих оновлень, тож проксі має пропускати запити upgrade.

## 3. Виріши, хто входить

- **Authentication Required: Enabled** змушує входити всіх. Найбезпечніше, якщо проксі публічний.
- **Disabled for Local Addresses** пропускає вхід для клієнтів, яких ABM вважає локальними. Через довірений проксі це клієнт, якого назвав проксі.
- Проксі, який не надсилає заголовків пересилання, робить усе схожим на локальне. Обери Enabled.

## Підтека й домен

Щоб ABM працював за шляхом `/abm`, задай **URL Base** у General як `/abm` і перезапусти. Вкажи свою публічну адресу в **Application URL**.

Якщо збереження завершується з `cross_origin_rejected`, origin браузера не збігається. Спершу виправ заголовок Host. Інакше додай свій домен до **CORS Allowed Domains** у Security і перезапусти.

## Розмір тіла

Якщо великі завантаження падають із 413, перевір власний ліміт проксі, а не лише `MAX_REQUEST_BODY_BYTES`.

## Що каже журнал

- «carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES»: додай його.
- «... is in TRUSTED_PROXIES but didn't name a client address»: змусь проксі надсилати `X-Forwarded-For` або `X-Real-IP`.

Див. також [Безпека та вхід](/uk/settings/security/).
