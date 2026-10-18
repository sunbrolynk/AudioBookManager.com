---
title: Списки імпорту
description: Бажані книжки з MyAnonamouse або RSS-стрічки.
---

**Settings > Import Lists** автоматично додає книжки із зовнішніх джерел.

## Джерела

- **MAM**: список бажаного на MyAnonamouse, через **MAM Session ID**.
- **RSS**: **RSS Link**, який ти вказуєш, і за бажанням **Website URL**. Адреса сайту має бути http або https.

## Для кожного списку

| Поле | Що робить |
|---|---|
| Name | Назва |
| Monitor | Чи будуть додані книжки Monitored або Unmonitored |
| Root Folder | Куди вони потрапляють |
| Quality Profile | Профіль або Inherit (використати типовий) |
| Tags | Ставляться на все, що додає список |

**Sync Now** запускає списки одразу.

## Параметри

| Параметр | За замовчуванням | Що робить |
|---|---|---|
| RSS Sync Interval | 12 (годин) | Як часто синхронізуються списки. 0 вимикає синхронізацію |
| Clean Library Level | Disabled | Що відбувається з книжкою, коли вона зникає зі списку |

Варіанти Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. Останній видаляє файли. Вибирай його, лише якщо справді цього хочеш.

## Винятки

**Import List Exclusions** блокує книжку за **ASIN**, **Title** та **Year**, щоб список більше ніколи її не додав. Скористайся **Lookup ASIN**, щоб заповнити ці поля.

## Підводні камені

- Збережене RSS-посилання чи ID сесії більше ніколи не показується. Щоб змінити адресу, секрет доведеться ввести знову.
- Списки надсилають сповіщення On Import List Synced та On Import List New Items. Дивись [Connect](/uk/settings/connect/).
