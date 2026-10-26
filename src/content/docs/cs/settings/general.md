---
title: Obecné
description: Hostitel, zabezpečení, proxy, logování a zálohy.
---

**Settings > General** má sekce Host, Security, Proxy, Logging a Backups. Security má [vlastní stránku](/cs/settings/security/).

## Hostitel (Host)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Bind Address | `*` | Adresa, na které se poslouchá. Vyžaduje restart |
| Port Number | 5173 | Vyžaduje restart |
| URL Base | prázdné | Předpona cesty pro podsložky za reverzní proxy, třeba `/audiobook-manager`. Vyžaduje restart |
| Instance Name | Audiobook Manager | Zobrazí se v záložce a použije se jako název aplikace v syslogu |
| Application URL | prázdné | Vnější adresa včetně `http(s)://`, portu a URL base |
| Enable SSL | vypnuto | ABM servíruje HTTPS sám. Chce cestu k certifikátu a cestu ke klíči. Vyžaduje restart |

V Dockeru jsou v praxi rozhodující proměnná prostředí `PORT` a mapování portu v compose. Viz [Proměnné prostředí](/cs/configuration/).

## Proxy

Jak se ABM dostává na internet pro metadata, obálky a stránky Audible.

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Use Proxy | vypnuto | Posílá vnější požadavky přes proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS5 nebo SOCKS5H |
| Hostname, Port | prázdné | Adresa proxy |
| Username, Password | prázdné | Nepovinné |
| Test Connection | | Ověří proxy |

Sekce také ukazuje tvou odchozí IP adresu tak, jak ji vidí externí služby. Výběr připojení, včetně vestavěné VPN, je plánovaný na pozdější verzi.

## Logování (Logging)

| Nastavení | Výchozí |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 dní, 0 uchovává navždy |
| Activity Log Retention | 90 dní, 0 uchovává navždy |
| Book History Retention | 0 (uchovávat) |
| Automatic Cleanup | zapnuto |
| Cleanup Time | 03:00 |
| SQL Logging | vypnuto. Hodně ukecané |
| Parser Log Level, Matcher Log Level | Info. Na úrovni Debug toho je hodně |

Viz [Logy](/cs/system/logs/) a [Activity Log](/cs/system/activity-log/).

## Zálohy (Backups)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Backup Folder | `/config/backups` | Kam se zálohy ukládají |
| Automatic Backups | vypnuto | Plánované zálohy |
| Schedule Frequency | Daily | Denně, týdně nebo měsíčně, se dnem a časem. Nebo Use Cron Expression |
| Backup Retention | 28 dní | 0 uchovává navždy |
| Auto-Export on Backup | zapnuto | Po každé záloze ji pošle do cílů exportu označených Auto |
| Export Targets | žádné | Vzdálené cíle: SFTP, SCP, FTPS, FTP, S3 nebo rclone |

Viz [Zálohy](/cs/system/backups/).
