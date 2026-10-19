---
title: Налаштування конвертації
description: Типові значення, параметри кодеків, розділи, метадані, кошик і ffmpeg.
---

**Settings > Conversions** задає типові значення для [Conversions](/uk/using/conversions/). Будь-яке завдання може їх перевизначити.

## General

| Налаштування | Типово | Дія |
|---|---|---|
| Enable Conversions | on | Вимикає конвертування на сторінці Conversions. **Auto-Reformat on Import** працює окремо |
| Conversion Folder | порожньо | Робочий простір. Порожнє значення використовує системну тимчасову теку |
| Concurrent Conversions | 2 | Від 1 до 4. Тримай це значення, помножене на **Threads Per Job** (в **Advanced FFmpeg** унизу цієї сторінки), не більшим за кількість ядер. Сторінка попереджає, якщо більше |
| Process Priority | Normal | Low не дає решті системи гальмувати. High завершує швидше |

## Audio quality defaults

| Налаштування | Типово |
|---|---|
| Default Output Format | M4B (також MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 або Copy без перекодування) |
| Default Sample Rate | Auto, відповідає джерелу. Або 22050, 44100 чи 48000 Hz |
| Default Channels | Auto, відповідає джерелу. Або Mono чи Stereo |

## Codec options

| Формат | Кодер | Параметри |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (типово AAC-LC) і AAC VBR, якість від 1 до 5. Бітрейт діє, коли VBR вимкнено. HE-AAC і HE-AACv2 є в списку, але поки кодуються як AAC-LC |
| MP3 | LAME | Якість VBR від 0 до 9 (типово 4) і Joint Stereo (увімкнено). Бітрейт діє, коли VBR вимкнено |
| Opus | libopus | Змінний бітрейт (увімкнено) і Application: Audio (типово), VoIP або Low Delay |
| FLAC | FLAC | Рівень стиснення від 0 до 12 (типово 5). Бітрейт ігнорується |

Бітрейт **Copy** пропускає перекодування й усі параметри кодека.

## Chapter handling

| Налаштування | Типово | Дія |
|---|---|---|
| Default Chapter Behavior | Auto | Зберігати, якщо є, створювати, якщо немає. Інші: лише зберігати, завжди створювати, нічого |
| Chapter Naming Format | `Chapter {n}` | Назви для розділів, які ABM мусить створити сам. `{n}` це номер, а `{title}` назва вихідного файлу. Назви розділів із файлів чи з Libex зберігаються |
| Silence Detection | off | Експериментально. Використовується лише під час поділу книги без розділів: ABM ділить її в місцях тиші. Якщо вимкнено, такий поділ не вдається |
| Minimum Chapter Length | 60 s | Найкоротший розділ, який створює виявлення тиші |
| Chapter Image Handling | Keep in file | Або видалити, або витягти в теку |

## Metadata handling

| Налаштування | Типово |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | on (лише JPEG, для Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## File management

| Налаштування | Типово | Дія |
|---|---|---|
| Enable Recycle Bin | on | Оригінали потрапляють у кошик замість видалення |
| Recycle Bin Path | порожньо | Порожнє значення використовує `/config/recycle/conversions` |
| Retention Period | 7 days | Задає термін, показаний на елементах у кошику. Поки що нічого не видаляє їх у цей день |
| Auto-Empty on Low Disk Space | off | Вмикає поріг нижче |
| Auto-Empty Threshold | 10 | Після конвертації, якщо в кошику більше за стільки ГБ, найстаріші елементи видаляються. Сторінка показує це як відсоток, але значення читається як ГБ |
| Delete Original | off | Типове значення для кожного завдання, його можна перевизначити |
| Update Library Paths | on | Записи книг слідують за конвертованими файлами |
| Auto-Reformat on Import | off | Конвертує щойно імпортовані книги, що надійшли в іншому форматі, за типовими значеннями вище |
| Backup Original Metadata | off | Перед конвертацією зберігає запис про оригінальні файли (назви, формати, розміри) у `.metadata_backup/` поруч із ними. Аудіотеги не зберігає |

## Advanced FFmpeg

FFmpeg Path (порожньо означає пошук у PATH), Threads Per Job (0 обирає автоматично як кількість ядер мінус 2), Custom FFmpeg Arguments (додаються до кожної команди; хибні призводять до збою конвертацій), Logging Level (типово error) і Keep FFmpeg Logs (off).
