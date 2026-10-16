---
title: Indexers
description: Newznab, Torznab, MyAnonamouse і Prowlarr.
---

**Settings > Indexers** перелічує, де ABM шукає релізи.

## Типи

Newznab (usenet), Torznab (торенти), MyAnonamouse і підключення Prowlarr, що синхронізує індексатори з Prowlarr.

## Поля

| Поле | Стосується | Дія |
|---|---|---|
| Name | усіх | Назва |
| Enable RSS | усіх | Додавати до синхронізації RSS |
| Enable Automatic Search | усіх | Використовувати для пошуків, які запускає ABM |
| Enable Interactive Search | усіх | Використовувати, коли ти шукаєш вручну |
| URL, API Path, API Key | Newznab, Torznab | Куди й як підключатися. Облікові дані вводяться в поле, ніколи не в URL |
| Categories | Newznab, Torznab | Які категорії шукати |
| Cookie (mam_id) | MyAnonamouse | Сесійний cookie |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only або Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Розширюють пошук |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | торентів | Обмеження релізів і цілі роздавання |
| Indexer Priority | усіх | Від 1 (найвищий) до 50 (найнижчий), типово 25. Коли той самий реліз приходить із двох індексаторів, перемагає менше число |
| Download Client | усіх | Надсилати захоплення з цього індексатора в один клієнт. (Any) використовує будь-який |
| Tags | усіх | Використовувати цей індексатор лише для елементів із відповідним тегом |

Збережений ключ API чи cookie більше ніколи не показується. Під час редагування залиш поле порожнім, щоб зберегти його. Зміна URL вимагає знову ввести секрет, щоб ключ не міг випадково піти на нову адресу.

## Параметри

Вони стосуються кожного індексатора, тож дотримуйся правил кожного з них.

| Налаштування | Типово | Дія |
|---|---|---|
| Minimum Age | 0 (хвилин) | Ігнорувати релізи usenet молодші за це значення |
| Retention | 0 (днів) | Ігнорувати релізи старші за це значення. 0 означає без обмеження |
| Maximum Size | 0 (МБ) | 0 означає без обмеження |
| RSS Sync Interval | 15 (хвилин) | Як часто опитується RSS |

Список MAM також може наповнювати [Import Lists](/uk/settings/import-lists/).

Якщо ти знаєш Sonarr: це той самий поділ на RSS, автоматичний та інтерактивний пошук для кожного індексатора. Окремого «test all» для категорій немає.
