---
title: Proměnné prostředí
description: Proměnné prostředí, lokální sítě a základy reverzní proxy.
---

Většina nastavení je ve webovém rozhraní pod **Settings**. Tyhle se nastavují v prostředí.

## Proměnné prostředí

| Proměnná | Výchozí | Co dělá |
|---|---|---|
| `PORT` | `5173` | Port webového rozhraní. |
| `TIMEZONE` | `UTC` | Tvoje místní časové pásmo, třeba `America/New_York`. |
| `LOCAL_NETWORKS` | prázdné | Další sítě CIDR, které se nemusí přihlašovat. Oddělené čárkou. |
| `TRUSTED_PROXIES` | prázdné | Sítě CIDR reverzních proxy, kterým se věří, že smí nastavit `X-Forwarded-For` a `X-Real-IP`. |
| `APP_SECRET` | auto | Kořenový klíč šifrování uložených přihlašovacích údajů. Když není nastavený, při prvním spuštění se vygeneruje do `/config/app_secret`. Nastav ho, pokud nechceš mít klíč na disku s konfigurací. |
| `DOCS_ENABLED` | `true` | Zpřístupní dokumentaci API na `/api/docs`, `/api/redoc` a `/api/openapi.json`. `false` ji odstraní. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Posílá hlavičku Content-Security-Policy, která omezí rozhraní na vlastní skripty, styly a API ABM a k tomu obálky přes HTTPS. `false` ji vypne. Vkládání do rámců zůstane zablokované tak jako tak. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Největší tělo požadavku, které endpoint přijme (10 MiB). Na větší odpoví HTTP 413. Obnova zálohy a nahrání obálky mají vlastní limity. |

## Lokální sítě

Loopback, privátní rozsahy (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), link-local a IPv6 unique-local adresy se za lokální považují už teď. Když máš **Authentication Required** v režimu pro lokální adresy, požadavek z nich se přihlašovat nemusí. Další přidáš tak, že je vypíšeš:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Reverzní proxy

Za nginx, Traefikem a podobně nastav `TRUSTED_PROXIES` na adresu proxy:

```
TRUSTED_PROXIES=172.20.0.5
```

- Drž rozsah co nejužší. Použij vlastní adresu proxy, ne celou širokou podsíť Dockeru.
- Proxy na stejném stroji potřebuje `TRUSTED_PROXIES=127.0.0.1`.
- Za klienta se považuje jen ten, koho proxy uvede v `X-Forwarded-For` nebo `X-Real-IP`.
- Předávej původní hlavičku `Host` (nginx: `proxy_set_header Host $host;`) nebo posílej `X-Forwarded-Host`. Požadavek z prohlížeče, který něco mění, se odmítne, pokud jeho původ neodpovídá adrese, na které ABM běží, nebo doméně v povolených doménách CORS.
- Proxy, která neposílá žádné přeposílací hlavičky, vypadá jako lokální klient. Jestli takovou máš, nastav Authentication Required na Enabled.

Pokud se po tobě chce přihlášení tam, kde by nemělo, mrkni do [Řešení problémů](/cs/troubleshooting/).

## Další

- Režimy přihlášení, klíče API a zásady zabezpečení obsahu: [Zabezpečení a přihlášení](/cs/settings/security/).
- Celý návod k proxy: [Reverzní proxy](/cs/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (výchozí 500 MiB) omezuje velikost nahrávané zálohy při obnově.
- Všechno ostatní je v aplikaci pod **Settings**. Viz [Přehled nastavení](/cs/settings/media-management/).
