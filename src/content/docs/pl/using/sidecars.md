---
title: Pliki sidecar
description: Pliki metadata.json, okładka, OPF, opis i lektor, które ABM zapisuje obok książki.
---

Sidecar to mały plik obok audio. Czytają je Audiobookshelf i inne odtwarzacze. ABM zapisuje takie:

| Plik | Zawartość | Przełącznik |
|---|---|---|
| `metadata.json` | Własny plik metadanych Audiobookshelf, do tego blok `abm`, który oznacza go jako plik ABM. Audiobookshelf czyta go przed wszystkim innym | Brak, zapisywany zawsze |
| `cover.jpg` | Okładka książki. Nie jest zapisywana, gdy folder ma już jakiś `cover.*` | cover.jpg |
| `.opf` | Metadane w formacie OPF. Nazwa pochodzi od pierwszego pliku audio książki (na przykład `Dune.opf`), albo `title.opf`, gdy książka nie ma audio | title.opf |
| `desc.txt` | Opis, bez HTML. Pomijany, gdy go nie ma | desc.txt |
| `reader.txt` | Lektorzy. Pomijany, gdy ich nie ma | reader.txt |

Razem z układem folderów to są pliki, z których Audiobookshelf czyta szczegóły książki, więc widzi tę samą książkę co ABM.

## Kiedy są zapisywane

`metadata.json` jest zapisywany za każdym razem, gdy książka zostaje dodana, zaimportowana albo odświeżona.

Pozostałe cztery mają każdy swój przełącznik w **Settings > Metadata > Files to Create**, domyślnie wszystkie włączone. Są zapisywane tylko wtedy, gdy włączony jest też odpowiedni wyzwalacz: **Create on Book Add** (wył.), **Create on Import** (wł., obejmuje pobrania, import biblioteki i pobrania z Audible) oraz **Create on Refresh** (wył.). **Overwrite Existing** jest wyłączone, więc plik, który już istnieje, zostaje. Nic nie jest zapisywane, dopóki folder książki nie istnieje.

Przycisk **Write to Directories** w oknie edycji też zapisuje te cztery, dla jednej książki albo dla zaznaczenia serii i autorów. Zobacz [Ustawienia metadanych](/pl/settings/metadata/).

## Okładka to osobna sprawa

Okładka, którą wybrałeś sam, jest zablokowana. Zobacz [Blokada okładki](/pl/metadata/cover-lock/).

## Przy imporcie

Import zabiera też istniejące pliki książki niebędące audio, według ustawień **Media Management > Importing**. Gdy źródło ma plik `.opf`, opis albo plik z lektorem, ABM bierze co najwyżej po jednym z każdego i nazywa je `desc.txt` i `reader.txt`. Plik docelowy, który już istnieje, zostaje nietknięty, a nowa okładka nigdy nie jest zapisywana na istniejący `cover.*`.

## Hardlinki

Import przez hardlink zostawia oryginał nietknięty. Kiedy ABM zapisuje któryś z tych plików, tworzy nowy plik zamiast edytować go w miejscu, więc źródło, z którego importowałeś, zachowuje swoją zawartość.

## Pułapki

- `metadata.json` jest obsługiwany przez ABM, gdy zawiera własny blok ABM. `metadata.json` z innego narzędzia podlega przełącznikowi Book info files.
- W folderze współdzielonym przez kilka książek do danej książki należą tylko pliki nazwane od jej audio.
- Usunięcie książki usuwa jej pliki sidecar, gdy są nazwane od plików tej książki.
