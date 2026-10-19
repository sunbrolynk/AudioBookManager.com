---
title: Pliki sidecar
description: Okładka, OPF, opis, lektor i plik cue, które ABM zapisuje obok książki.
---

Sidecar to mały plik obok audio. Czytają je Audiobookshelf i inne odtwarzacze. ABM potrafi zapisać takie:

| Plik | Zawartość |
|---|---|
| `cover.jpg` | Okładka książki |
| `.opf` | Metadane w formacie OPF, czytelne dla Audiobookshelf. Nazwa pochodzi od pierwszego pliku audio książki (na przykład `Dune.opf`), albo `title.opf`, gdy książka nie ma audio |
| `desc.txt` | Opis |
| `reader.txt` | Lektor |
| `.cue` | Rozdziały z Libex (w następnym wydaniu) |

## Kiedy są zapisywane

W **Settings > Metadata** opcje **Create on Book Add**, **Create on Import** i **Create on Refresh** decydują, kiedy. Domyślnie zapisuje je tylko import. **Overwrite Existing** jest wyłączone, więc plik, który już istnieje, zostaje. Możesz je też zapisać z okna edycji, dla jednej książki albo dla zaznaczenia serii i autorów. Zobacz [Ustawienia metadanych](/pl/settings/metadata/).

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
