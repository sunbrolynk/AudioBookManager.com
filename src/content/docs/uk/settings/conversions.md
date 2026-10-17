---
title: Налаштування конвертації
description: Типові значення, параметри кодеків, розділи, метадані, кошик і ffmpeg.
---

**Settings > Conversions** задає типові значення для [Конвертації](/uk/using/conversions/). Будь-яке завдання може їх перевизначити.

## Загальні налаштування

| Налаштування | Типово | Дія |
|---|---|---|
| Enable Conversions | on | Головний перемикач |
| Conversion Folder | порожньо | Робочий простір. Порожнє значення використовує системну тимчасову теку |
| Concurrent Conversions | 2 | Від 1 до 4 в UI. Тримай добуток паралельності на потоки менше за кількість ядер |
| Process Priority | Normal | Low не дає решті системи гальмувати. High завершує швидше |

## Типові параметри якості аудіо

| Налаштування | Типово |
|---|---|
| Default Output Format | M4B (також MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 або Copy без перекодування) |
| Default Sample Rate | Auto, відповідає джерелу |
| Default Channels | Auto, відповідає джерелу |

## Параметри кодеків

AAC Profile (типово AAC-LC, HE-AAC, HE-AACv2) і AAC VBR; якість MP3 VBR і joint stereo; рівень стиснення FLAC (типово 5); змінний бітрейт Opus (увімкнено) і тип застосунку (типово Audio; є VoIP і Low Delay).

## Обробка розділів

| Налаштування | Типово | Дія |
|---|---|---|
| Default Chapter Behavior | Auto | Зберігати, якщо є, створювати, якщо немає. Інші: лише зберігати, завжди створювати, нічого |
| Chapter Naming Format | `Chapter {n}` | Шаблон для створених назв |
| Silence Detection | off | Експериментально. Намагається знайти розділи за тишею |
| Minimum Chapter Length | 60 s | Для виявлених розділів |
| Chapter Image Handling | Keep in file | Або видалити, або витягти в теку |

## Обробка метаданих

| Налаштування | Типово |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | on (лише JPEG, для Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Керування файлами

| Налаштування | Типово | Дія |
|---|---|---|
| Enable Recycle Bin | on | Оригінали потрапляють у кошик замість видалення |
| Recycle Bin Path | порожньо | Порожнє значення використовує `/config/recycle/conversions` |
| Retention Period | 7 days | 0 вимикає автоматичне очищення |
| Auto-Empty on Low Disk Space | off | Спорожнює кошик, коли місця менше за поріг |
| Auto-Empty Threshold | 10 (%) | Рівень вільного місця |
| Delete Original | off | Типове значення для кожного завдання, його можна перевизначити |
| Update Library Paths | on | Записи книг слідують за конвертованими файлами |
| Auto-Reformat on Import | off | Конвертує щойно імпортовані книги, що надійшли в іншому форматі, за типовими значеннями вище |
| Backup Original Metadata | off | Спершу зберігає оригінальні теги в супровідний файл `.json` |

## Розширені параметри FFmpeg

FFmpeg Path (порожньо означає пошук у PATH), Threads Per Job (0 обирає автоматично як кількість ядер мінус 2), Custom FFmpeg Arguments (додаються до кожної команди; хибні призводять до збою конвертацій), Logging Level (типово error) і Keep FFmpeg Logs (off).
