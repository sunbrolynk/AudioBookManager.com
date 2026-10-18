---
title: Wanted
description: Відсутні книги та книги нижче порога якості.
---

**Wanted** має дві сторінки.

## Missing

Відстежувані книги без файлів. Для кожного рядка: **Auto Search**, **Interactive Search**, **Manual Import**, **Unmonitor**.

- Auto Search опитує всі увімкнені індексатори й захоплює найкращий реліз, який дозволяють профілі.
- Interactive Search показує релізи, щоб ти вибрав сам. Вибір звідси вважається ручним захопленням.
- Manual Import вказує ABM на файли, які у тебе вже є.

ABM також сам шукає відсутні книги. Перед захопленням релізи утримує профіль затримки. Див. [Профілі](/uk/settings/profiles/).

## Cutoff Unmet

Завантажені книги, чия якість усе ще нижча за поріг їхнього профілю («Upgrade Until»). **Search All Cutoff Unmet** шукає їх. Краща копія замінює стару, лише якщо стоїть вище на драбині.

**Media Management > Quality Upgrades** може запускати цей пошук за тебе: **Automatic Upgrade Search** (типово ввімкнено) кожні **Upgrade Search Interval** (типово 24 години). Див. [Media Management](/uk/settings/media-management/).

Якщо ти знаєш Sonarr: це та сама ідея, що й Wanted > Cutoff Unmet, але з драбиною форматів (M4B, MP3 тощо, один файл чи багато) замість роздільних здатностей.
