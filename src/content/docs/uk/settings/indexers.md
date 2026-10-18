---
title: Індексатори
description: Newznab, Torznab, MyAnonamouse і Prowlarr.
---

**Settings > Indexers** показує, де ABM шукає релізи.

## Типи

Newznab (usenet), Torznab (торенти), MyAnonamouse і з'єднання з Prowlarr, яке синхронізує індексатори з Prowlarr.

## Поля

| Поле | Для чого | Що робить |
|---|---|---|
| Name | усі | Назва |
| Enable RSS | усі | Включати в RSS-синхронізацію |
| Enable Automatic Search | усі | Використовувати для пошуків, які запускає ABM |
| Enable Interactive Search | усі | Використовувати, коли шукаєш вручну |
| URL, API Path, API Key | Newznab, Torznab | Куди і як підключатися. Облікові дані вводяться в поле, ніколи не в URL |
| Categories | Newznab, Torznab | У яких категоріях шукати |
| Cookie (mam_id) | MyAnonamouse | Cookie сесії |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only або Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Розширює пошук |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | торенти | Обмеження релізів і цілі роздачі |
| Indexer Priority | усі | Від 1 (найвищий) до 50 (найнижчий), за замовчуванням 25. Коли той самий реліз приходить із двох індексаторів, перемагає менше число |
| Download Client | усі | Надсилати захоплення з цього індексатора в один клієнт. (Any) означає будь-який |
| Tags | усі | Використовувати індексатор лише для елементів із відповідним тегом |

Збережений ключ API чи cookie більше ніколи не показується. Під час редагування залиш поле порожнім, щоб його зберегти. Зміна URL вимагає ввести секрет знову, тож ключ не можна випадково надіслати на нову адресу.

## Параметри

Вони діють для всіх індексаторів, тож дотримуйся правил кожного індексатора.

| Параметр | За замовчуванням | Що робить |
|---|---|---|
| Minimum Age | 0 (хвилин) | Ігнорувати релізи usenet, молодші за це |
| Retention | 0 (днів) | Ігнорувати релізи, старші за це. 0 означає без обмежень |
| Maximum Size | 0 (MB) | 0 означає без обмежень |
| RSS Sync Interval | 15 (хвилин) | Як часто опитується RSS |

Список MAM також може наповнювати [Списки імпорту](/uk/settings/import-lists/).

Якщо ти знаєш Sonarr: тут той самий поділ на RSS, автоматичний та інтерактивний пошук для кожного індексатора. Окремого "test all" для категорій немає.
