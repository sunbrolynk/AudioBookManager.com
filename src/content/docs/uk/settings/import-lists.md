---
title: Списки імпорту
description: Підтягуй шукані книги з MyAnonamouse або стрічки RSS.
---

**Settings > Import Lists** автоматично додає книги із зовнішніх джерел.

## Джерела

- **MAM**: список бажаного з MyAnonamouse, через **MAM Session ID**.
- **RSS**: **RSS Link**, який ти надаєш, з необов'язковим **Website URL**. Сайт має бути http або https.

## Для кожного списку

| Поле | Дія |
|---|---|
| Name | Назва |
| Monitor | Чи будуть книги, які він додає, Monitored чи Unmonitored |
| Root Folder | Куди вони потрапляють |
| Quality Profile | Профіль або Inherit (use default) |
| Tags | Застосовуються до всього, що додає список |

**Sync Now** запускає списки негайно.

## Параметри

| Налаштування | Типово | Дія |
|---|---|---|
| RSS Sync Interval | 12 (годин) | Як часто синхронізуються списки. 0 вимикає синхронізацію |
| Clean Library Level | Disabled | Що відбувається з книгою, коли вона зникає зі списку |

Варіанти Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. Останній видаляє файли. Обирай його, лише якщо справді цього хочеш.

## Винятки

**Import List Exclusions** блокує книгу за **ASIN**, **Title** і **Year**, щоб список більше ніколи її не додавав. Скористайся **Lookup ASIN**, щоб заповнити їх.

## Підводні камені

- Збережене RSS-посилання чи ідентифікатор сесії більше ніколи не показується. Зміна адреси вимагає ввести секрет знову.
- Списки запускають сповіщення On Import List Synced та On Import List New Items. Див. [Підключення](/uk/settings/connect/).
