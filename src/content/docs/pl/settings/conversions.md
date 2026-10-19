---
title: Ustawienia konwersji
description: Wartości domyślne, opcje kodeków, rozdziały, metadane, kosz i ffmpeg.
---

**Settings > Conversions** ustawia wartości domyślne dla [konwersji](/pl/using/conversions/). Każde zadanie może je nadpisać.

## Ogólne

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Enable Conversions | wł. | Wyłącza konwertowanie na stronie Conversions. **Auto-Reformat on Import** działa osobno |
| Conversion Folder | puste | Miejsce robocze. Puste oznacza systemowy folder tymczasowy |
| Concurrent Conversions | 2 | Od 1 do 4. Ta liczba razy **Threads Per Job** (w sekcji **Advanced FFmpeg** na dole tej strony) nie powinna przekraczać liczby rdzeni. Strona ostrzega, gdy jest wyższa |
| Process Priority | Normal | Low zostawia resztę systemu responsywną. High kończy szybciej |

## Domyślna jakość audio

| Ustawienie | Domyślnie |
|---|---|
| Default Output Format | M4B (do tego MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 albo Copy, czyli bez ponownego kodowania) |
| Default Sample Rate | Auto, czyli tak jak w źródle. Albo 22050, 44100 lub 48000 Hz |
| Default Channels | Auto, czyli tak jak w źródle. Albo Mono lub Stereo |

## Opcje kodeków

| Format | Koder | Opcje |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (domyślnie AAC-LC) i AAC VBR, jakość od 1 do 5. Bitrate działa, gdy VBR jest wyłączony. HE-AAC i HE-AACv2 są na liście, ale na razie kodują jako AAC-LC |
| MP3 | LAME | Jakość VBR od 0 do 9 (domyślnie 4) i Joint Stereo (wł.). Bitrate działa, gdy VBR jest wyłączony |
| Opus | libopus | Zmienny bitrate (wł.) i Application: Audio (domyślnie), VoIP albo Low Delay |
| FLAC | FLAC | Poziom kompresji od 0 do 12 (domyślnie 5). Bitrate jest ignorowany |

Bitrate **Copy** pomija ponowne kodowanie i wszystkie opcje kodeków.

## Obsługa rozdziałów

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Default Chapter Behavior | Auto | Zachowuje, jeśli są, generuje, jeśli ich nie ma. Inne: tylko zachowuj, zawsze generuj, brak |
| Chapter Naming Format | `Chapter {n}` | Nazywa rozdziały, które ABM musi wymyślić sam. `{n}` to numer, a `{title}` nazwa pliku źródłowego. Tytuły rozdziałów z plików albo z Libex zostają |
| Silence Detection | wył. | Eksperymentalne. Używane tylko przy dzieleniu książki bez rozdziałów: ABM dzieli ją w miejscach ciszy. Przy wyłączonym takie dzielenie się nie udaje |
| Minimum Chapter Length | 60 s | Najkrótszy rozdział, jaki tworzy wykrywanie ciszy |
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
| Retention Period | 7 dni | Ustala datę wygaśnięcia widoczną przy elementach w koszu. Na razie nic ich w tym dniu nie usuwa |
| Auto-Empty on Low Disk Space | wył. | Włącza próg poniżej |
| Auto-Empty Threshold | 10 | Po konwersji, jeśli kosz zajmuje więcej niż tyle GB, najstarsze elementy są usuwane. Strona pokazuje to jako procent, ale wartość jest liczona w GB |
| Delete Original | wył. | Domyślne dla każdego zadania, można nadpisać |
| Update Library Paths | wł. | Zapisy książek podążają za przekonwertowanymi plikami |
| Auto-Reformat on Import | wył. | Konwertuje nowo zaimportowane książki, które przychodzą w innym formacie, według powyższych ustawień domyślnych |
| Backup Original Metadata | wył. | Przed konwersją zapisuje spis oryginalnych plików (nazwy, formaty, rozmiary) do `.metadata_backup/` obok nich. Nie zapisuje tagów audio |

## Zaawansowane FFmpeg

FFmpeg Path (puste szuka go w PATH), Threads Per Job (0 wybiera automatycznie: liczba rdzeni CPU minus 2), Custom FFmpeg Arguments (doklejane do każdego polecenia; złe argumenty sprawiają, że konwersje się wysypują), Logging Level (domyślnie error) i Keep FFmpeg Logs (wył.).
