---
title: Listy importu
description: Ściągaj poszukiwane książki z MyAnonamouse albo kanału RSS.
---

**Settings > Import Lists** automatycznie dodaje książki ze źródeł zewnętrznych.

## Źródła

- **MAM**: lista życzeń z MyAnonamouse, przez **MAM Session ID**.
- **RSS**: podany przez ciebie **RSS Link**, z opcjonalnym **Website URL**. Strona musi być po http albo https.

## Dla każdej listy

| Pole | Działanie |
|---|---|
| Name | Etykieta |
| Monitor | Czy dodawane książki są Monitored czy Unmonitored |
| Root Folder | Gdzie trafiają |
| Quality Profile | Profil albo Inherit (użyj domyślnego) |
| Tags | Nadawane wszystkiemu, co doda lista |

**Sync Now** uruchamia listy od razu.

## Opcje

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| RSS Sync Interval | 12 (godzin) | Jak często listy się synchronizują. 0 wyłącza synchronizację |
| Clean Library Level | Disabled | Co się dzieje z książką, gdy zniknie z listy |

Opcje Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. Ostatnia kasuje pliki. Wybierz ją tylko wtedy, gdy naprawdę tego chcesz.

## Wykluczenia

**Import List Exclusions** blokuje książkę po **ASIN**, **Title** i **Year**, żeby lista nigdy jej ponownie nie dodała. Użyj **Lookup ASIN**, żeby je wypełnić.

## Pułapki

- Zapisany link RSS albo ID sesji nigdy nie jest pokazywany ponownie. Zmiana adresu wymaga ponownego wpisania sekretu.
- Listy wyzwalają powiadomienia On Import List Synced i On Import List New Items. Zobacz [Connect](/pl/settings/connect/).
