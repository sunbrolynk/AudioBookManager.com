---
title: Generelt
description: Vert, sikkerhet, proxy, logging og sikkerhetskopier.
---

**Settings > General** har seksjoner for Host, Security, Proxy, Logging og Backups. Security har [sin egen side](/nb/settings/security/).

## Vert (Host)

| Innstilling | Standard | Virkning |
|---|---|---|
| Bind Address | `*` | Adressen det lyttes på. Krever omstart |
| Port Number | 5173 | Krever omstart |
| URL Base | tom | Et sti-prefiks, for undermapper bak omvendt proxy, som `/audiobook-manager`. Krever omstart |
| Instance Name | Audiobook Manager | Vises i fanen og brukes som appnavn i syslog |
| Application URL | tom | Den eksterne adressen, med `http(s)://`, port og URL base |
| Enable SSL | av | ABM serverer HTTPS selv. Trenger en sti til sertifikat og en sti til nøkkel. Krever omstart |

I Docker er det miljøvariabelen `PORT` og portmappingen i compose som betyr noe i praksis. Se [Miljøvariabler](/nb/configuration/).

## Proxy

Hvordan ABM kommer seg ut på internett for metadata, cover og Audible-sider.

| Innstilling | Standard | Virkning |
|---|---|---|
| Use Proxy | av | Send eksterne forespørsler gjennom en proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS4 eller SOCKS5 |
| Hostname, Port | tom | Adressen til proxyen |
| Username, Password | tom | Valgfritt |
| Bypass Addresses | `localhost,127.0.0.1` | Verter som går utenom proxyen |
| Test Connection | | Sjekker proxyen |

Seksjonen viser også den utgående IP-adressen din slik eksterne tjenester ser den. Et valg av tilkobling, med en innebygd VPN, er planlagt til en senere versjon.

## Logging

| Innstilling | Standard |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 dager, 0 beholder for alltid |
| Activity Log Retention | 90 dager, 0 beholder for alltid |
| Book History Retention | 0 (behold) |
| Automatic Cleanup | på |
| Cleanup Time | 03:00 |
| SQL Logging | av. Veldig pratsom |
| Parser Log Level, Matcher Log Level | Info. Mye volum på Debug |

Se [Logger](/nb/system/logs/) og [Aktivitetslogg](/nb/system/activity-log/).

## Sikkerhetskopier (Backups)

| Innstilling | Standard | Virkning |
|---|---|---|
| Backup Folder | `/config/backups` | Hvor sikkerhetskopiene havner |
| Automatic Backups | av | Planlagte sikkerhetskopier |
| Schedule Frequency | Daily | Daglig, ukentlig eller månedlig, med dag og klokkeslett. Eller Use Cron Expression |
| Backup Retention | 28 dager | 0 beholder for alltid |
| Auto-Export on Backup | på | Etter hver sikkerhetskopi sendes den til eksportmål som er merket Auto |
| Export Targets | ingen | Eksterne mål: SFTP, SCP, FTPS, FTP, S3 eller rclone |

Se [Sikkerhetskopier](/nb/system/backups/).
