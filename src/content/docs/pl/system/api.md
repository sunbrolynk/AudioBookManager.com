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
- `POST /api/manual-import/execute` i `/execute-to-book` sprawdzają każdy wiersz pliku według stałego schematu. Nieznany klucz, względna ścieżka `source_path` albo pusta lista `files` kończy się odrzuceniem z HTTP 422. Każde źródło musi być plikiem audio, który nie leży w folderze systemowym, bezpośrednio w folderze najwyższego poziomu jak `/tmp` czy `/mnt` ani w żadnym z folderów samego ABM (konfiguracja, baza danych, kopie zapasowe, logi, okładki, kosz), z podążaniem za dowiązaniami symbolicznymi. Odrzucony plik dostaje HTTP 400 ze swoją nazwą (`Can't import <name>: the file <reason>.`) i nic nie trafia do kolejki.

## Awarie metadanych

Żądanie, które potrzebuje źródła metadanych i nie dostaje odpowiedzi, kończy się błędem z `detail` wskazującym źródło i powód, nigdy pustym wynikiem. Wyszukiwanie, na które czekasz, poddaje się po około 10 sekundach, gdy Libex ogranicza tempo.

Jeśli znasz Sonarra: API nie jest zgodne z v3. Prowlarr może synchronizować indeksery do ABM przez swoje połączenie z Prowlarrem.
