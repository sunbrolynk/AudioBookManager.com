---
title: General
description: Хост, вихідне підключення, безпека, журнали та резервні копії.
---

**Settings > General** має розділи Host, Proxy & VPN, Security, Logging і Backups. Security має [власну сторінку](/uk/settings/security/).

## Host

| Налаштування | Типово | Дія |
|---|---|---|
| Bind Address | `*` | Адреса, яку слухати. Потребує перезапуску |
| Port Number | 5173 | Потребує перезапуску |
| URL Base | порожньо | Префікс шляху для підтек зворотного проксі, наприклад `/audiobook-manager`. Потребує перезапуску |
| Instance Name | Audiobook Manager | Показується у вкладці й використовується як назва застосунку в syslog |
| Application URL | порожньо | Зовнішня адреса, разом з `http(s)://`, портом і URL base |
| Enable SSL | off | ABM сам віддає HTTPS. Приймає шлях до сертифіката й до ключа. Потребує перезапуску |

У Docker на практиці важливі змінні середовища `PORT` та відображення портів у compose. Див. [Змінні середовища](/uk/configuration/).

## Проксі та вихідне підключення

Як ABM виходить в інтернет за метаданими, обкладинками та сторінками Audible.

| Налаштування | Типово | Дія |
|---|---|---|
| Use Proxy | off | Спрямовувати зовнішні запити через проксі |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS4 або SOCKS5 |
| Hostname, Port | порожньо | Адреса проксі |
| Username, Password | порожньо | Необов'язково |
| Bypass Addresses | `localhost,127.0.0.1` | Хости, що обходять проксі |
| Test Connection | | Перевіряє проксі |

Сторінка також показує твою вихідну IP-адресу, як її бачать зовнішні сервіси. Наступний реліз додає вбудований тунель WireGuard і явний вибір підключення (немає, пряме, проксі, WireGuard або твій власний контейнер VPN), якого вимагає вбудоване джерело метаданих. Маршрут, що не працює, блокує трафік замість того, щоб перемикатися на твою власну адресу. Експорт резервних копій і призначення в локальній мережі завжди йдуть напряму.

## Logging

| Налаштування | Типово |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 днів, 0 зберігає назавжди |
| Activity Log Retention | 90 днів, 0 зберігає назавжди |
| Book History Retention | 0 (зберігати) |
| Automatic Cleanup | on |
| Cleanup Time | 03:00 |
| SQL Logging | off. Дуже докладно |
| Parser Log Level, Matcher Log Level | Info. На рівні Debug великий обсяг |

Див. [Журнали](/uk/system/logs/) та [Activity Log](/uk/system/activity-log/).

## Backups

| Налаштування | Типово | Дія |
|---|---|---|
| Backup Folder | `/config/backups` | Куди потрапляють резервні копії |
| Automatic Backups | off | Резервні копії за розкладом |
| Schedule Frequency | Daily | Daily, weekly або monthly, з днем і часом. Або Use Cron Expression |
| Backup Retention | 28 днів | 0 зберігає назавжди |
| Auto-Export on Backup | on | Після кожної копії надсилати її до цілей експорту, позначених Auto |
| Export Targets | немає | Віддалені призначення: SFTP, SCP, FTPS, FTP, S3 або rclone |

Див. [Резервні копії](/uk/system/backups/).
