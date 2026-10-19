---
title: Bezpieczeństwo i logowanie
description: Tryby uwierzytelniania, klucze API, zaufane proxy, sieci lokalne i polityka bezpieczeństwa treści.
---

Sekcja **Security** w **Settings > General** decyduje, kto może korzystać z ABM i w jaki sposób.

## Uwierzytelnianie

| Ustawienie | Domyślnie | Opcje |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Zostaw hasło puste, żeby zachować obecne |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | puste | Dodatkowe zakresy CIDR, których klienci pomijają logowanie |
| CORS Allowed Domains | puste | Inne originy, które mogą wywoływać API z przeglądarki. Wymaga restartu |

Dwa tryby **Authentication Required**, z których będziesz korzystać:

- **Enabled**: logują się wszyscy, łącznie z twoim LAN-em.
- **Disabled for Local Addresses** (zapisywane jako `local_disabled`): żądanie z adresu lokalnego pomija logowanie. Za lokalne uznawane są loopback, zakresy prywatne, link-local i IPv6 unique-local. **Local Networks** dodaje kolejne i nigdy ich nie zastępuje.

Na świeżej instalacji żądania są odrzucane, dopóki nie skończysz konfiguracji.

## Reverse proxy

Za proxy ustaw `TRUSTED_PROXIES`, żeby ABM wiedział, którym nagłówkom przekierowania wierzyć. Żądanie z nagłówkami przekierowania z adresu spoza tej listy nigdy nie jest lokalne i musi się zalogować. Tak ma być. Zobacz [Reverse proxy](/pl/guides/reverse-proxy/).

Proxy, które nie wysyła nagłówków przekierowania, wygląda jak lokalny klient. Jeśli takiego używasz, ustaw Authentication Required na Enabled.

## Potwierdzanie hasłem

Niektóre zmiany proszą jeszcze raz o twoje obecne hasło: zapisanie ustawień Security, pokazanie albo wygenerowanie nowego klucza API oraz zapisanie albo usunięcie konfiguracji WireGuard. Złe hasło liczy się w logu bezpieczeństwa jako nieudane logowanie. Jeśli hasło nie jest jeszcze ustawione, ABM o nie nie pyta.

## Klucz API

Klucz nigdy nie jest wyświetlany, dopóki nie potwierdzisz hasła. **Regenerate API Key** tworzy nowy, pokazuje go raz i od razu unieważnia stary. Klucza nie da się wpisać ręcznie. Jeśli zapisanego klucza nie da się odszyfrować (zmienił się sekret aplikacji), wygeneruj nowy.

Wysyłaj go jako `X-Api-Key` albo parametr `apikey`. Klucz z adresu w LAN-ie liczy się jako żądanie z kluczem. Zobacz [API](/pl/system/api/).

## Zapisy z przeglądarki

Żądanie z przeglądarki, które coś zmienia, jest odrzucane z `cross_origin_rejected`, chyba że jego origin pasuje do adresu, pod którym osiągasz ABM, do hosta przekazanego przez zaufane proxy albo do domeny z CORS Allowed Domains. Żądań z kluczem API to nie dotyczy.

## Polityka bezpieczeństwa treści (CSP)

ABM wysyła nagłówek Content-Security-Policy, chyba że ustawisz `SECURITY_HEADERS_CSP_ENABLED=false`. Ogranicza on interfejs do własnych skryptów i API ABM, a obrazki do ABM albo HTTPS. Okładki serwowane po zwykłym HTTP są blokowane, a ABM i tak nie da się pokazać w iframe. Strony dokumentacji API dostają luźniejszą politykę, żeby mogły ładować zasoby z CDN.

## Nieudane logowania

Nie ma blokady konta. Nieudane próby są logowane, zwijane per adres w Activity Log i zapisywane linia po linii do logu bezpieczeństwa dla narzędzi takich jak fail2ban.

## Sekrety

Hasła i klucze, które ABM przechowuje dla indekserów, klientów i połączeń, są szyfrowane sekretem aplikacji. Ustaw `APP_SECRET`, jeśli nie chcesz trzymać klucza na dysku z konfiguracją. Jeśli nie ma ani jednego, ani drugiego, ABM generuje `/config/app_secret`. Hasła do proxy i celów eksportu są przechowywane jako zwykły tekst.
