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

## Book Naming

Book Naming określa, jak nazywam pliki i foldery. Zapisuje się jednym Save na stronie razem z resztą Media Management. Ma Rename Books, Replace Illegal Characters, Colon Replacement (z opcją własną) oraz formaty dla Standard Book, Author Folder, Series Folder, Standalone Folder i Book Folder. Każdy format pokazuje przykład na żywo, a lista tokenów pokazuje wszystkie tokeny, których możesz użyć.

Library, Series i Authors mają też akcję **Organize** dla zaznaczonych książek, podobnie jak strona pojedynczej książki. Najpierw otwiera podgląd każdej zmiany i nic się nie przenosi, dopóki nie potwierdzisz. Potem Organize przenosi i zmienia nazwy: przenosi folder każdej książki tam, gdzie ustawienia nazw go umieszczają, i zmienia nazwy jej plików. Działa jako zadanie, które możesz śledzić, anulować i po restarcie wznowić od miejsca, w którym stanęło. Naraz działa tylko jeden Organize. Nie ma cofania, więc sprawdź podgląd. Masowa zmiana nazw zostaje w Library, Series i Authors jako **Rename Files**.

Jeśli Organize zostanie przerwany, kolejne uruchomienie wznawia od miejsca, w którym stanął. Książka, którą przerwane uruchomienie już przeniosło lub przemianowało na dysku, zostaje znaleziona w nowym miejscu, a jej wpisy są aktualizowane, więc nic nie jest przenoszone dwa razy. Podgląd pokazuje taką książkę jako już przeniesioną lub już przemianowaną, a wynik liczy ją jako uzgodnioną (reconciled). Książka jest uzgadniana tylko wtedy, gdy mogę udowodnić, że folder należy do niej: jej pliki muszą zgadzać się z tym, co mam zapisane, a żadna inna książka nie może rościć sobie praw do folderu. W przeciwnym razie książka jest pomijana, z podaniem powodu. Nadal nie ma cofania.

Podgląd pokazuje tylko książki, które by się zmieniły. Zaznacz **Show all selected books**, żeby zobaczyć też resztę. Ładuje się stronami, więc użyj **Load more**, żeby iść dalej przez duże zaznaczenie. Tytuł podglądu liczy, ile książek się zmieni, a ile zostanie pominiętych.

Na stronie książki, której folder nie leży tam, gdzie umieściłyby go ustawienia nazw, jest o tym informacja, folder, do którego by trafiła, i przycisk Organize.

Gdy nowy folder książki leżałby wewnątrz folderu, w którym jest teraz, Organize tworzy tam podfolder i przenosi do niego tylko własne pliki książki: audio oraz okładkę, rozdziały i inne pliki towarzyszące, które dla niej trzymam. Wszystko inne w folderze zostaje, gdzie było. Podgląd mówi "Moves into a subfolder" i wypisuje, co zostaje, a okno wyniku wypisuje pliki zostawione na miejscu. Jeśli przeniesienie się nie powiedzie w połowie, już przeniesione pliki wracają. Przeniesienie folderu książki do podfolderu jej samej z okna edycji działa tak samo.

Library Import stosuje te same ustawienia nazw, także gdy dodaje książkę, która już leży w folderze głównym, albo przenosi pliki do książki, którą już mam. Przy wyłączonym Rename Books każdy plik zachowuje nazwę, z jaką przyszedł. Plik, którego nazwa zderzyłaby się z innym plikiem w partii albo z plikiem już będącym w folderze książki (wielkość liter bez znaczenia), dostaje zamiast tego nazwę z formatu, a import notuje, którym plikom to zrobił. Przy włączonym Rename Books pliki, które dostałyby tę samą nazwę, są numerowane według pozycji, więc Manual Import nigdy żadnego nie pominie.

Domyślny układ to `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Książka samodzielna nie ma folderu serii ani tomu: `Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Książka z serii bez pozycji też zaczyna się od roku. Nieznany rok jest pomijany i nigdy zapisywany jako `(Unknown)`.

Jeśli znasz Sonarra: to Media Management z Sonarra wraz z formatami nazw.
