---
title: Zmienne środowiskowe
description: Zmienne środowiskowe, sieci lokalne i podstawy reverse proxy.
---

Większość ustawień siedzi w interfejsie webowym, w **Settings**. Te tutaj ustawia się w środowisku.

## Zmienne środowiskowe

| Zmienna | Domyślnie | Co robi |
|---|---|---|
| `PORT` | `5173` | Port interfejsu webowego. |
| `TIMEZONE` | `UTC` | Twoja lokalna strefa czasowa, na przykład `America/New_York`. |
| `LOCAL_NETWORKS` | puste | Dodatkowe sieci CIDR, które pomijają logowanie. Oddzielone przecinkami. |
| `TRUSTED_PROXIES` | puste | Sieci CIDR reverse proxy, którym ufasz w ustawianiu `X-Forwarded-For` i `X-Real-IP`. |
| `APP_SECRET` | auto | Klucz główny szyfrowania zapisanych danych logowania. Jeśli go nie ustawisz, przy pierwszym uruchomieniu zostanie wygenerowany do `/config/app_secret`. Ustaw go, jeśli nie chcesz trzymać klucza na dysku z konfiguracją. |
| `DOCS_ENABLED` | `true` | Udostępnia dokumentację API pod `/api/docs`, `/api/redoc` i `/api/openapi.json`. `false` ją wyłącza. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | Wysyła nagłówek Content-Security-Policy, który ogranicza interfejs do własnych skryptów, stylów i API ABM oraz okładek po HTTPS. `false` go wyłącza. Osadzanie w ramkach i tak zostaje zablokowane. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | Największe ciało żądania, jakie przyjmie endpoint (10 MiB). Większe dostaje HTTP 413. Przywracanie kopii zapasowej i wgrywanie okładek mają własne limity. |

## Sieci lokalne

Loopback, zakresy prywatne (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), adresy link-local i IPv6 unique-local już liczą się jako lokalne. Gdy **Authentication Required** jest ustawione na tryb adresów lokalnych, żądanie z któregoś z nich pomija logowanie. Żeby dodać kolejne, wypisz je:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## Reverse proxy

Za nginx, Traefikiem albo czymś podobnym ustaw `TRUSTED_PROXIES` na adres proxy:

```
TRUSTED_PROXIES=172.20.0.5
```

- Trzymaj to tak wąsko, jak się da. Użyj adresu samego proxy, a nie szerokiej podsieci Dockera.
- Proxy na tym samym hoście potrzebuje `TRUSTED_PROXIES=127.0.0.1`.
- Za klienta uznawany jest tylko ten, którego proxy wskaże w `X-Forwarded-For` albo `X-Real-IP`.
- Przekazuj dalej oryginalny nagłówek `Host` (nginx: `proxy_set_header Host $host;`) albo wysyłaj `X-Forwarded-Host`. Żądanie z przeglądarki, które coś zmienia, zostanie odrzucone, chyba że jego origin pasuje do adresu, pod którym osiągasz ABM, albo do domeny z listy dozwolonych domen CORS.
- Proxy, które nie wysyła żadnych nagłówków przekierowania, wygląda jak lokalny klient. Jeśli takiego używasz, ustaw Authentication Required na Enabled.

Jeśli ABM prosi o logowanie, kiedy nie powinien, zobacz [Rozwiązywanie problemów](/pl/troubleshooting/).

## Więcej

- Tryby logowania, klucze API i polityka bezpieczeństwa treści: [Bezpieczeństwo i logowanie](/pl/settings/security/).
- Pełny przewodnik po proxy: [Reverse proxy](/pl/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES` (domyślnie 500 MiB) ogranicza rozmiar wgrywanej kopii zapasowej do przywrócenia.
- Cała reszta jest w aplikacji, w **Settings**. Zobacz [Przegląd ustawień](/pl/settings/media-management/).
