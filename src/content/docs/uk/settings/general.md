---
title: Загальні
description: Хост, безпека, проксі, журнали та резервні копії.
---

**Settings > General** має розділи Host, Security, Proxy, Logging і Backups. Security має [окрему сторінку](/uk/settings/security/).

## Хост (Host)

| Параметр | За замовчуванням | Що робить |
|---|---|---|
| Bind Address | `*` | Адреса, на якій слухати. Потрібен перезапуск |
| Port Number | 5173 | Потрібен перезапуск |
| URL Base | порожньо | Префікс шляху для підтек за зворотним проксі, наприклад `/audiobook-manager`. Потрібен перезапуск |
| Instance Name | Audiobook Manager | Показується у вкладці й використовується як назва застосунку в syslog |
| Application URL | порожньо | Зовнішня адреса разом з `http(s)://`, портом і URL base |
| Enable SSL | вимкнено | ABM сам віддає HTTPS. Потрібні шлях до сертифіката й шлях до ключа. Потрібен перезапуск |

У Docker на практиці важать змінна середовища `PORT` та прокидання порту в compose. Дивись [Змінні середовища](/uk/configuration/).

## Проксі

Як ABM виходить в інтернет по метадані, обкладинки та сторінки Audible.

| Параметр | За замовчуванням | Що робить |
|---|---|---|
| Use Proxy | вимкнено | Пускати зовнішні запити через проксі |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS5 або SOCKS5H |
| Hostname, Port | порожньо | Адреса проксі |
| Username, Password | порожньо | Необов'язково |
| Bypass Addresses | `localhost,127.0.0.1` | Хости, для яких проксі не використовується |
| Test Connection | | Перевіряє проксі |

Розділ також показує твою вихідну IP-адресу так, як її бачать зовнішні сервіси. Вибір підключення, зокрема вбудований VPN, заплановано на один з наступних випусків.

## Журнали (Logging)

| Параметр | За замовчуванням |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 днів, 0 зберігає назавжди |
| Activity Log Retention | 90 днів, 0 зберігає назавжди |
| Book History Retention | 0 (зберігати) |
| Automatic Cleanup | увімкнено |
| Cleanup Time | 03:00 |
| SQL Logging | вимкнено. Дуже балакуче |
| Parser Log Level, Matcher Log Level | Info. На Debug дуже багато записів |

Дивись [Журнали](/uk/system/logs/) і [Журнал активності](/uk/system/activity-log/).

## Резервні копії (Backups)

| Параметр | За замовчуванням | Що робить |
|---|---|---|
| Backup Folder | `/config/backups` | Куди потрапляють резервні копії |
| Automatic Backups | вимкнено | Резервні копії за розкладом |
| Schedule Frequency | Daily | Щодня, щотижня або щомісяця, із днем і часом. Або Use Cron Expression |
| Backup Retention | 28 днів | 0 зберігає назавжди |
| Auto-Export on Backup | увімкнено | Після кожної резервної копії надсилати її в місця експорту з позначкою Auto |
| Export Targets | немає | Віддалені місця: SFTP, SCP, FTPS, FTP, S3 або rclone |

Дивись [Резервні копії](/uk/system/backups/).
