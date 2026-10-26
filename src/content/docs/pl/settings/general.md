---
title: Ogólne
description: Host, bezpieczeństwo, proxy, logi i kopie zapasowe.
---

**Settings > General** ma sekcje Host, Security, Proxy, Logging i Backups. Security ma [własną stronę](/pl/settings/security/).

## Host

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Bind Address | `*` | Adres, na którym nasłuchiwać. Wymaga restartu |
| Port Number | 5173 | Wymaga restartu |
| URL Base | puste | Prefiks ścieżki dla podfolderów za reverse proxy, np. `/audiobook-manager`. Wymaga restartu |
| Instance Name | Audiobook Manager | Pokazywana na karcie przeglądarki i używana jako nazwa aplikacji w syslogu |
| Application URL | puste | Adres zewnętrzny, razem z `http(s)://`, portem i URL Base |
| Enable SSL | wył. | ABM sam serwuje HTTPS. Wymaga ścieżki do certyfikatu i do klucza. Wymaga restartu |

W Dockerze w praktyce liczą się zmienna środowiskowa `PORT` i mapowanie portów w compose. Zobacz [Zmienne środowiskowe](/pl/configuration/).

## Proxy

Jak ABM łączy się z internetem po metadane, okładki i strony Audible.

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Use Proxy | wył. | Kieruje zewnętrzne żądania przez proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS4 albo SOCKS5 |
| Hostname, Port | puste | Adres proxy |
| Username, Password | puste | Opcjonalne |
| Test Connection | | Sprawdza proxy |

Sekcja pokazuje też twój wychodzący adres IP tak, jak widzą go zewnętrzne usługi. Wybór połączenia, w tym wbudowany VPN, jest planowany na późniejsze wydanie.

## Logowanie

| Ustawienie | Domyślnie |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 dni, 0 trzyma na zawsze |
| Activity Log Retention | 90 dni, 0 trzyma na zawsze |
| Book History Retention | 0 (trzyma) |
| Automatic Cleanup | wł. |
| Cleanup Time | 03:00 |
| SQL Logging | wył. Bardzo gadatliwe |
| Parser Log Level, Matcher Log Level | Info. Na Debug bardzo dużo wpisów |

Zobacz [Logi](/pl/system/logs/) i [Activity Log](/pl/system/activity-log/).

## Kopie zapasowe

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Backup Folder | `/config/backups` | Gdzie trafiają kopie |
| Automatic Backups | wył. | Kopie według harmonogramu |
| Schedule Frequency | Daily | Codziennie, co tydzień albo co miesiąc, z dniem i godziną. Albo Use Cron Expression |
| Backup Retention | 28 dni | 0 trzyma na zawsze |
| Auto-Export on Backup | wł. | Po każdej kopii wysyła ją do celów eksportu oznaczonych jako Auto |
| Export Targets | brak | Zdalne miejsca docelowe: SFTP, SCP, FTPS, FTP, S3 albo rclone |

Zobacz [Kopie zapasowe](/pl/system/backups/).
