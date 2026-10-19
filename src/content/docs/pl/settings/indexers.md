---
title: Indeksery
description: Newznab, Torznab, MyAnonamouse i Prowlarr.
---

**Settings > Indexers** wypisuje miejsca, w których ABM szuka wydań.

## Typy

Newznab (usenet), Torznab (torrent), MyAnonamouse i połączenie z Prowlarrem, które synchronizuje indeksery z Prowlarra.

## Pola

| Pole | Dotyczy | Działanie |
|---|---|---|
| Name | wszystkich | Etykieta |
| Enable RSS | wszystkich | Uwzględnia w synchronizacji RSS |
| Enable Automatic Search | wszystkich | Używa przy wyszukiwaniach uruchamianych przez ABM |
| Enable Interactive Search | wszystkich | Używa, gdy szukasz ręcznie |
| URL, API Path, API Key | Newznab, Torznab | Gdzie i jak się łączyć. Dane logowania idą do pola, nigdy do URL-a |
| Categories | Newznab, Torznab | W których kategoriach szukać |
| Cookie (mam_id) | MyAnonamouse | Ciasteczko sesji |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only albo Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Poszerza wyszukiwanie |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Limity wydań i cele seedowania |
| Indexer Priority | wszystkich | Od 1 (najwyższy) do 50 (najniższy), domyślnie 25. Gdy to samo wydanie przychodzi z dwóch indekserów, wygrywa niższa liczba |
| Download Client | wszystkich | Wysyła pobrania z tego indeksera do jednego klienta. (Any) używa dowolnego |
| Tags | wszystkich | Używa tego indeksera tylko dla elementów z pasującym tagiem |

Zapisany klucz API albo ciasteczko nigdy nie jest pokazywane ponownie. Zostaw pole puste przy edycji, żeby je zachować. Zmiana URL-a wymaga ponownego wpisania sekretu, żeby klucz nie poleciał przypadkiem pod nowy adres.

## Opcje

Dotyczą każdego indeksera, więc trzymaj się zasad każdego z nich.

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Minimum Age | 0 (minut) | Ignoruje wydania z usenetu młodsze niż to |
| Retention | 0 (dni) | Ignoruje wydania starsze niż to. 0 to brak limitu |
| Maximum Size | 0 (MB) | 0 to brak limitu |
| RSS Sync Interval | 15 (minut) | Jak często odpytywany jest RSS |

Lista MAM może też zasilać [listy importu](/pl/settings/import-lists/).

Jeśli znasz Sonarra: to ten sam podział na RSS, wyszukiwanie automatyczne i interaktywne dla każdego indeksera. Nie ma osobnego "test all" dla kategorii.
