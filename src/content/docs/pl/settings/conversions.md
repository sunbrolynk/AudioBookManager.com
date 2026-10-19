---
title: Ustawienia konwersji
description: Wartości domyślne, opcje kodeków, rozdziały, metadane, kosz i ffmpeg.
---

**Settings > Conversions** ustawia wartości domyślne dla [konwersji](/pl/using/conversions/). Każde zadanie może je nadpisać.

## Ogólne

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Enable Conversions | wł. | Główny przełącznik |
| Conversion Folder | puste | Miejsce robocze. Puste oznacza systemowy folder tymczasowy |
| Concurrent Conversions | 2 | Od 1 do 4 w interfejsie. Liczba równoległych zadań razy wątki powinna być poniżej liczby rdzeni |
| Process Priority | Normal | Low zostawia resztę systemu responsywną. High kończy szybciej |

## Domyślna jakość audio

| Ustawienie | Domyślnie |
|---|---|
| Default Output Format | M4B (do tego MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 albo Copy, czyli bez ponownego kodowania) |
| Default Sample Rate | Auto, czyli tak jak w źródle |
| Default Channels | Auto, czyli tak jak w źródle |

## Opcje kodeków

AAC Profile (domyślnie AAC-LC, do tego HE-AAC, HE-AACv2) i AAC VBR; jakość MP3 VBR i joint stereo; poziom kompresji FLAC (domyślnie 5); zmienny bitrate Opus (wł.) i typ aplikacji (domyślnie Audio; są też VoIP i Low Delay).

## Obsługa rozdziałów

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Default Chapter Behavior | Auto | Zachowuje, jeśli są, generuje, jeśli ich nie ma. Inne: tylko zachowuj, zawsze generuj, brak |
| Chapter Naming Format | `Chapter {n}` | Szablon dla generowanych nazw |
| Silence Detection | wył. | Eksperymentalne. Próbuje znaleźć rozdziały po ciszy |
| Minimum Chapter Length | 60 s | Dla wykrytych rozdziałów |
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
| Retention Period | 7 dni | 0 wyłącza automatyczne czyszczenie |
| Auto-Empty on Low Disk Space | wył. | Opróżnia kosz poniżej progu |
| Auto-Empty Threshold | 10 (%) | Poziom wolnego miejsca |
| Delete Original | wył. | Domyślne dla każdego zadania, można nadpisać |
| Update Library Paths | wł. | Zapisy książek podążają za przekonwertowanymi plikami |
| Auto-Reformat on Import | wył. | Konwertuje nowo zaimportowane książki, które przychodzą w innym formacie, według powyższych ustawień domyślnych |
| Backup Original Metadata | wył. | Najpierw zapisuje oryginalne tagi do pliku sidecar `.json` |

## Zaawansowane FFmpeg

FFmpeg Path (puste szuka go w PATH), Threads Per Job (0 wybiera automatycznie: liczba rdzeni CPU minus 2), Custom FFmpeg Arguments (doklejane do każdego polecenia; złe argumenty sprawiają, że konwersje się wysypują), Logging Level (domyślnie error) i Keep FFmpeg Logs (wył.).
