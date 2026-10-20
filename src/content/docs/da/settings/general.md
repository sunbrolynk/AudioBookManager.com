---
title: Generelt
description: Vært, sikkerhed, proxy, logning og sikkerhedskopier.
---

**Settings > General** har sektioner for Host, Security, Proxy, Logging og Backups. Security har [sin egen side](/da/settings/security/).

## Vært (Host)

| Indstilling | Standard | Virkning |
|---|---|---|
| Bind Address | `*` | Adressen, der lyttes på. Kræver genstart |
| Port Number | 5173 | Kræver genstart |
| URL Base | tom | Et sti-præfiks til undermapper bag en reverse proxy, fx `/audiobook-manager`. Kræver genstart |
| Instance Name | Audiobook Manager | Vises i fanen og bruges som appnavn i syslog |
| Application URL | tom | Den eksterne adresse, inklusive `http(s)://`, port og URL base |
| Enable SSL | fra | ABM serverer selv HTTPS. Kræver en sti til et certifikat og en sti til en nøgle. Kræver genstart |

I Docker er det i praksis miljøvariablen `PORT` og port-mappingen i compose, der tæller. Se [Miljøvariabler](/da/configuration/).

## Proxy

Hvordan ABM kommer på nettet efter metadata, covers og Audible-sider.

| Indstilling | Standard | Virkning |
|---|---|---|
| Use Proxy | fra | Send eksterne requests gennem en proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS4 eller SOCKS5 |
| Hostname, Port | tom | Proxyens adresse |
| Username, Password | tom | Valgfrit |
| Bypass Addresses | `localhost,127.0.0.1` | Værter, der springer proxyen over |
| Test Connection | | Tjekker proxyen |

Sektionen viser også din udgående IP-adresse, som eksterne tjenester ser den. Et valg af forbindelse, med en indbygget VPN, er planlagt til en senere udgivelse.

## Logning (Logging)

| Indstilling | Standard |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 dage, 0 gemmer for altid |
| Activity Log Retention | 90 dage, 0 gemmer for altid |
| Book History Retention | 0 (behold) |
| Automatic Cleanup | til |
| Cleanup Time | 03:00 |
| SQL Logging | fra. Meget snakkesalig |
| Parser Log Level, Matcher Log Level | Info. Meget output på Debug |

Se [Logs](/da/system/logs/) og [aktivitetsloggen](/da/system/activity-log/).

## Backups

| Indstilling | Standard | Virkning |
|---|---|---|
| Backup Folder | `/config/backups` | Hvor backups havner |
| Automatic Backups | fra | Planlagte backups |
| Schedule Frequency | Daily | Dagligt, ugentligt eller månedligt, med dag og klokkeslæt. Eller Use Cron Expression |
| Backup Retention | 28 dage | 0 gemmer for altid |
| Auto-Export on Backup | til | Efter hver backup sendes den til de eksportmål, der er markeret Auto |
| Export Targets | ingen | Fjerne destinationer: SFTP, SCP, FTPS, FTP, S3 eller rclone |

Se [Backups](/da/system/backups/).
