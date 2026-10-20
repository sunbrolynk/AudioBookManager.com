---
title: Zarządzanie mediami
description: Foldery główne, importowanie, dodatkowe pliki, kosz, skanowanie, ulepszenia i uprawnienia.
---

**Settings > Media Management** decyduje, gdzie mieszkają książki i jak trafiają do nich pliki. Ustawienia oznaczone jako zaawansowane pojawiają się po włączeniu **Show Advanced**.

## Foldery główne (Root Folders)

Folder główny to katalog, w którym ABM zarządza książkami. Dodasz go przez **Add Root Folder**, które otwiera przeglądarkę folderów z polem, w które możesz wpisać ścieżkę. ABM potrafi też wypisać niezmapowane foldery w folderze głównym i je zaimportować. Wolne miejsce i obsługa hardlinków są sprawdzane przy dodawaniu folderu. Usunięcie folderu głównego pyta, co zrobić: **Remove from ABM only** (domyślnie) zapomina książki w tym folderze i zostawia pliki, a **Delete the books and their files** trwale usuwa wszystko pod tą ścieżką, z pominięciem kosza. Przy folderze głównym, w którym są książki, musisz wpisać potwierdzenie.

Domyślny folder główny to ten, do którego trafiają nowe książki, i ten, który decyduje, czy import biblioteki oferuje hardlink.

## Foldery (Folders)

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Create Empty Book Folders | wył. | Tworzy brakujące foldery książek przy dodawaniu, przy zmianie folderu głównego i podczas skanowania dysku. Ignorowane, gdy **Delete empty folders** jest włączone, żeby nie tworzyć folderu tylko po to, żeby go usunąć. |
| Delete empty folders | wył. | Usuwa puste foldery książek podczas skanowania dysku i przy usuwaniu plików książek |

## Importowanie (Importing)

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Skip Free Space Check | wył. | Na wypadek, gdy ABM nie potrafi wykryć wolnego miejsca w folderze głównym |
| Minimum Free Space | 100 (MB) | Import, który zostawiłby mniej, jest odrzucany |
| Use Hardlinks instead of Copy | wł. | Dla ukończonych pobrań: hardlink zamiast kopii, żeby seedowanie nie zajmowało podwójnego miejsca. Wymaga tego samego wolumenu. |
| Library Import | Copy | Domyślny tryb [importu biblioteki](/pl/library-import/): kopiowanie, hardlink albo przenoszenie. Hardlink jest wyszarzony, dopóki domyślny folder główny nie zostanie sprawdzony i nie okaże się, że go obsługuje. |
| Import Extra Files | wł. | Główny przełącznik zabierania plików niebędących audio. Dotyczy importu biblioteki, Manual Import i ukończonych pobrań |
| Extra File Extensions (zaawansowane) | puste | Kolejne typy plików, które idą razem z książką pod własnymi nazwami, na przykład `srt, lrc`. Z kropką albo bez, rozdzielone przecinkami lub spacjami. Zablokowanych typów, takich jak pliki wykonywalne i niedokończone pobrania, nie da się zapisać. Wyłączone, gdy **Import Extra Files** jest wyłączone |
| Preferred Cover (zaawansowane) | Matched | Okładka dopasowanego wydania albo najlepszy obrazek z folderu, gdy są oba |

**Import Extra Files** zabiera razem z audio pozostałe pliki książki. Pięć przełączników wybiera, jakie rodzaje idą razem z nią, a plik pasujący do **Extra File Extensions** idzie nawet wtedy, gdy jego rodzaj jest wyłączony:

| Przełącznik | Domyślnie | Obejmuje |
|---|---|---|
| Cover art | wł. | Okładkę oraz skany tylnej okładki i książeczki |
| Book info files | wł. | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | wył. | Pliki PDF dołączone do książki |
| Chapters, transcripts and playlists | wł. | .cue, listy rozdziałów, napisy, teksty, playlisty. Nazwy plików w środku są przepisywane na nowe nazwy audio. |
| Audible originals and ebooks | wył. | .aax/.aaxc, vouchery, epub i podobne |

Częściowe pobrania i pliki wykonywalne nigdy nie są importowane. Własny `metadata.json` ABM jest zawsze obsługiwany przez ABM.

Hardlink to nie to samo co **Use Hardlinks instead of Copy**. Tamto dotyczy pobrań. Domyślne ustawienie importu biblioteki to tylko to, co okno Add to Library zaznacza na starcie.

## Zarządzanie plikami (File Management)

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Unmonitor Deleted Books | wył. | Książka usunięta z dysku przestaje być monitorowana |
| Change File Date | None | Zmienia daty plików przy imporcie i ponownym skanowaniu |
| Enable Recycling Bin | wł. | Usunięte pliki książek trafiają do kosza, zamiast znikać |
| Recycling Bin | puste | Gdzie jest kosz. Puste oznacza domyślny kosz ABM (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (dni) | 0 wyłącza automatyczne czyszczenie |
| Library Scan Interval | 24 | Liczba godzin między automatycznymi skanowaniami |
| Watch for Changes | wł. | Skanuje, gdy pliki są dodawane, usuwane albo zmieniane |
| Cover Cache Workers | 4 | Ile okładek pobierać naraz przy buforowaniu grafik, od 1 do 16 |

## Ulepszenia jakości (Quality Upgrades)

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Automatic Upgrade Search | wł. | Co jakiś czas szuka lepszych wydań pobranych książek, które są wciąż poniżej progu. Kopia zastępuje twoją tylko wtedy, gdy to prawdziwe ulepszenie. |
| Upgrade Search Interval | 24 (godziny) | Jak często działa |

## Uprawnienia (Permissions, zaawansowane)

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Set Permissions | wył. | Uruchamia chmod przy imporcie i zmianie nazwy |
| chmod Folder | 755 | Tryb ósemkowy dla folderów i plików, dla plików bez bitów wykonywania |
| chown Group | puste | Nazwa grupy albo gid. Na zdalnych systemach plików użyj gid |

## Pułapki

- Jeśli kosz jest włączony, ale jego folder jest niedostępny, usuwanie, które go potrzebuje, kończy się błędem, zamiast kasować na stałe.
- Hardlinki działają tylko w obrębie jednego systemu plików. Pliki, których nie da się podlinkować, są kopiowane, nigdy przenoszone, i liczone w wyniku importu.

Jeśli znasz Sonarra: to Media Management z Sonarra bez formatów nazw. Nazwy folderów wybiera ABM. Masowa zmiana nazw jest w Library, Series i Authors jako **Rename Files**.
