---
title: Ustawienia konwersji
description: Wartości domyślne, opcje kodeków, rozdziały, metadane, kosz i ffmpeg.
---

**Settings > Conversions** ustawia wartości domyślne dla [konwersji](/pl/using/conversions/). Każde zadanie może je nadpisać.

## Ogólne

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Enable Conversions | wł. | Gdy wyłączone, tworzenie, masowe kolejkowanie i ponawianie konwersji jest odrzucane z HTTP 409, zadanie już w kolejce kończy się błędem z informacją o tym, a **Auto-Reformat on Import** nie kolejkuje niczego |
| Conversion Folder | puste | Miejsce robocze. Puste oznacza systemowy folder tymczasowy |
| Concurrent Conversions | 2 | 1 do 4. Trzymaj tę wartość razy **Threads Per Job** na poziomie liczby rdzeni lub niżej. Strona ostrzega, gdy jest wyższa |
| Threads Per Job | Auto | Wątki FFmpeg na zadanie, w widoku zaawansowanym. Auto zostawia dwa rdzenie dla ABM, a resztę dzieli między zadania działające jednocześnie, więc 8 rdzeni i 2 równoczesne zadania dają po 3 wątki. Albo wybierz stałą liczbę |
| Process Priority | Normal | Low zostawia resztę systemu responsywną. High kończy szybciej |

## Domyślna jakość audio

| Ustawienie | Domyślnie |
|---|---|
| Default Output Format | M4B (do tego MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 albo Copy, czyli bez ponownego kodowania) |
| Default Sample Rate | Auto, które nie przekazuje częstotliwości i zostawia wybór FFmpeg. Albo 22050, 44100 lub 48000 Hz, co przepróbkowuje. Opus przyjmuje tylko niektóre częstotliwości, więc 22050 zmienia się w 24000, a 44100 w 48000 (log o tym informuje) |
| Default Channels | Auto, które zachowuje układ kanałów źródła. Mono miksuje do jednego kanału, żeby pliki były mniejsze. Stereo wymusza dwa |

Obie listy częstotliwości i kanałów przyjmują tylko to, co oferuje strona. Nieprawidłowa zapisana wartość ładuje się jako Auto.

## Opcje kodeków

| Format | Koder | Opcje |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (domyślnie AAC-LC) i AAC VBR, jakość od 1 do 5. Bitrate obowiązuje, gdy VBR jest wyłączony. AAC-LC to jedyny profil, bo koder nie umie HE-AAC. Zapisany profil HE ładuje się jako AAC-LC |
| MP3 | LAME | Jakość VBR od 0 do 9 (domyślnie 4) i Joint Stereo (wł.). Bitrate działa, gdy VBR jest wyłączony |
| Opus | libopus | Zmienny bitrate (wł.) i Application: Audio (domyślnie), VoIP albo Low Delay |
| FLAC | FLAC | Poziom kompresji od 0 do 12 (domyślnie 5). Bitrate jest ignorowany |

Bitrate **Copy** pomija ponowne kodowanie i wszystkie opcje kodeków.

## Obsługa rozdziałów

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Default Chapter Behavior | Auto | Zachowuje, jeśli są, generuje, jeśli ich nie ma. Inne: tylko zachowuj, zawsze generuj, brak |
| Chapter Naming Format | `Chapter {n}` | Nazywa rozdziały, które ABM musi wymyślić sam. `{n}` to numer, a `{title}` nazwa pliku źródłowego. Tytuły rozdziałów z plików albo z Libex zostają |
| Silence Detection | wył. | Dla pliku bez rozdziałów ABM tworzy rozdziały w najdłuższych ciszach w dźwięku. Używają tego Split Chapters oraz Ensure Chapters na pojedynczym pliku, gdy Libex nie ma rozdziałów. Wyłączone, podział takiego pliku kończy się błędem |
| Target Chapter Length | 600 s | Pokazuje się, gdy Silence Detection jest włączone, od 60 s. Każdy rozdział kończy się w najdłuższej ciszy w granicach połowy tej długości z każdej strony albo przy tej długości, gdy ciszy nie ma. Krótki ogon dołącza do ostatniego rozdziału, a rozdziały pokrywają cały plik |
| Chapter Image Handling | Keep in file | Albo usuń, albo wyodrębnij do folderu |

## Obsługa metadanych

| Ustawienie | Domyślnie |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | wł. (tylko JPEG, dla Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Zarządzanie plikami

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Enable Recycle Bin | wł. | Oryginały trafiają do kosza, zamiast być usuwane |
| Recycle Bin Path | puste | Puste oznacza `/config/recycle/conversions` |
| Retention Period | 7 dni | Starsze elementy usuwa zadanie czyszczenia kosza. 0 zachowuje je na zawsze |
| Auto-Empty When Bin Is Large | wył. | Włącza próg poniżej |
| Auto-Empty Threshold | 10 GB | Po konwersji, jeśli kosz zawiera więcej niż to, usuwane są najstarsze elementy |
| Delete Original | wył. | Domyślne dla każdego zadania, można nadpisać |
| Update Library Paths | wł. | Zapisy książek podążają za przekonwertowanymi plikami |
| Auto-Reformat on Import | wył. | Konwertuje nowo zaimportowane książki, które przychodzą w innym formacie, według powyższych ustawień domyślnych |
| Backup Original Metadata | wył. | Przed konwersją zapisuje plik JSON w folderze `.metadata_backup` wewnątrz folderu książki. Wypisuje nazwę, format i rozmiar każdego pliku źródłowego oraz osadzone w nim tagi i rozdziały |

## Zaawansowane FFmpeg

FFmpeg Path (puste szuka go w PATH), Custom FFmpeg Arguments (doklejane do każdego polecenia; złe argumenty sprawiają, że konwersje się wysypują), Logging Level (domyślnie error) i Keep FFmpeg Logs (wył.).
