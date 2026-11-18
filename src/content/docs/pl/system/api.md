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
- `POST /api/tasks` kolejkuje tylko `backup_export`. Każdy inny typ zadania dostaje HTTP 403, a ustawienia, które nie pasują do `backup_export`, dostają HTTP 422. Ręczne importy idą przez endpointy `/api/manual-import/`, a skanowanie biblioteki przez `POST /api/library/scan`.
- Library Import sam trzyma na serwerze dopasowania z Libex dla każdego wiersza. Zapis sesji (`PUT /api/library-import/session/{id}` albo `PATCH /api/library-import/session/{id}/choices`) z wierszem, który wysyła `libex_matches`, jest odrzucany z HTTP 422 z nazwą pola, więc pomiń je w wierszach, które zapisujesz z powrotem. `POST /api/library-import/retry-match` przyjmuje opcjonalne `session_id` i zapisuje znalezione dopasowania w tej sesji.
- `GET /api/metadata/search` zwraca każdy wynik, gdy pominiesz `limit`. Z `limit` (od 1 do 50) zwraca najwyżej tyle.

## Awarie metadanych

Żądanie, które potrzebuje źródła metadanych i nie dostaje odpowiedzi, kończy się błędem z `detail` wskazującym źródło i powód, nigdy pustym wynikiem. Wyszukiwanie, na które czekasz, poddaje się po około 10 sekundach, gdy Libex ogranicza tempo.

Jeśli znasz Sonarra: API nie jest zgodne z v3. Prowlarr może synchronizować indeksery do ABM przez swoje połączenie z Prowlarrem.
