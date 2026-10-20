---
title: Ustawienia Discover
description: Harmonogram odświeżania i limity zbierania danych dla katalogów Discover.
---

**Settings > Discover** decyduje, jak wypełniane są katalogi [Discover](/pl/using/discover/).

## Odświeżanie i stan katalogów

Każdy katalog (New Releases, Coming Soon, Audible Best, Recommended) ma własny przycisk **Refresh** i **Clear**, a strona pokazuje, jak bardzo każdy jest zapełniony.

## Harmonogram

| Ustawienie | Działanie |
|---|---|
| Auto Refresh | Odświeża katalogi według harmonogramu |
| Frequency | Codziennie, co tydzień albo co miesiąc, z dniem i godziną |
| Refresh on Startup | Wypełnia każdy pusty katalog przy starcie ABM |
| Use CRON Expression | Zastępuje proste opcje |

## Zbieranie danych

| Ustawienie | Zakres | Działanie |
|---|---|---|
| Pages to Scrape | od 1 do 50 | Liczba stron Audible czytanych na katalog |
| Max ASINs per Refresh | od 100 do 5000 | Liczba książek pobieranych z Libex na jedno odświeżenie |
| Batch Size | od 10 do 900 | Liczba ASIN-ów na jedno zapytanie do Libex. Więcej to szybciej, ale na niektórych systemach może się wysypać |

Wartości domyślne są w aplikacji i nie są tu powtarzane. Otwórz stronę, żeby je zobaczyć.

## Pułapki

Odświeżanie jest pomijane, gdy Libex jest nieosiągalny, i jest to zapisywane w logu raz.
