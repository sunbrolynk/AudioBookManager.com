---
title: API
description: Uwierzytelnianie, strony dokumentacji i limity.
---

ABM ma REST API pod `/api`. Interaktywna dokumentacja jest pod `/api/docs` (Swagger) i `/api/redoc`, a schemat pod `/api/openapi.json`. Ustaw `DOCS_ENABLED=false`, żeby wyłączyć wszystkie trzy. Strony dokumentacji ładują zasoby z CDN, więc w pełni renderują się tylko z dostępem do internetu.

## Uwierzytelnianie

- **Klucz API**: wyślij `X-Api-Key: <key>` albo `?apikey=<key>`. Znajdziesz go albo wygenerujesz nowy w **Settings > General > Security**. Zobacz [Bezpieczeństwo](/pl/settings/security/).
- **Token Bearer** z logowania.
- Podane przez ciebie dane uwierzytelniające mają pierwszeństwo przed pominięciem logowania, więc żądanie z kluczem z LAN-u liczy się jako żądanie API.

## Konwencje

- Błędy wracają jako `{"detail": ...}`.
- Sekrety nigdy nie są zwracane. Odpowiedź mówi tylko, czy dany sekret jest ustawiony.
- Żądanie z przeglądarki, które zmienia stan, potrzebuje pasującego originu. Skrypty używające klucza są z tego zwolnione.
- Ciała żądań są ograniczone do 10 MiB (`MAX_REQUEST_BODY_BYTES`). Przywracanie kopii zapasowej i wgrywanie okładek mają wyższe limity. Powyżej limitu jest HTTP 413.
- Błędy walidacji nigdy nie odsyłają z powrotem tego, co wysłałeś.

## Awarie metadanych

Wyszukiwanie książek, które nie dostaje odpowiedzi od Libexa, zwraca 502 z "Libex search failed". Wyszukiwanie autorów lub serii zwraca 503 z "Libex could not be reached; try again shortly". Niektóre trasy wyszukiwania podczas awarii nadal zwracają pusty wynik.

Jeśli znasz Sonarra: API nie jest zgodne z v3. Prowlarr może synchronizować indeksery do ABM przez swoje połączenie z Prowlarrem.
