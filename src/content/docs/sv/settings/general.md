---
title: Allmänt
description: Värd, säkerhet, proxy, loggning och säkerhetskopior.
---

**Settings > General** har sektioner för Host, Security, Proxy, Logging och Backups. Security har [en egen sida](/sv/settings/security/).

## Värd (Host)

| Inställning | Standard | Effekt |
|---|---|---|
| Bind Address | `*` | Adressen att lyssna på. Kräver omstart |
| Port Number | 5173 | Kräver omstart |
| URL Base | tom | Ett sökvägsprefix, för undermappar bakom en omvänd proxy som `/audiobook-manager`. Kräver omstart |
| Instance Name | Audiobook Manager | Visas i fliken och används som appnamn i syslog |
| Application URL | tom | Den externa adressen, inklusive `http(s)://`, port och URL base |
| Enable SSL | av | ABM serverar HTTPS själv. Tar en sökväg till certifikat och en till nyckel. Kräver omstart |

I Docker är det miljövariabeln `PORT` och portmappningen i compose som spelar roll i praktiken. Se [Miljövariabler](/sv/configuration/).

## Proxy

Hur ABM når internet för metadata, omslag och Audible-sidor.

| Inställning | Standard | Effekt |
|---|---|---|
| Use Proxy | av | Skicka externa anrop via en proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS4 eller SOCKS5 |
| Hostname, Port | tom | Proxyns adress |
| Username, Password | tom | Valfritt |
| Test Connection | | Kollar proxyn |

Sektionen visar också din utgående IP-adress så som externa tjänster ser den. Ett val av anslutning, med ett inbyggt VPN, är planerat till en senare version.

## Loggning (Logging)

| Inställning | Standard |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 dagar, 0 sparar för alltid |
| Activity Log Retention | 90 dagar, 0 sparar för alltid |
| Book History Retention | 0 (spara) |
| Automatic Cleanup | på |
| Cleanup Time | 03:00 |
| SQL Logging | av. Väldigt pratig |
| Parser Log Level, Matcher Log Level | Info. Mycket data på Debug |

Se [Loggar](/sv/system/logs/) och [Activity Log](/sv/system/activity-log/).

## Säkerhetskopior (Backups)

| Inställning | Standard | Effekt |
|---|---|---|
| Backup Folder | `/config/backups` | Var säkerhetskopiorna hamnar |
| Automatic Backups | av | Schemalagda säkerhetskopior |
| Schedule Frequency | Daily | Dagligen, veckovis eller månadsvis, med dag och tid. Eller Use Cron Expression |
| Backup Retention | 28 dagar | 0 sparar för alltid |
| Auto-Export on Backup | på | Efter varje säkerhetskopia, skicka den till exportmål som är märkta Auto |
| Export Targets | inga | Fjärrmål: SFTP, SCP, FTPS, FTP, S3 eller rclone |

Se [Säkerhetskopior](/sv/system/backups/).
