---
title: Algemeen
description: Host, beveiliging, proxy, logging en back-ups.
---

**Settings > General** heeft secties voor Host, Security, Proxy, Logging en Backups. Security heeft [een eigen pagina](/nl/settings/security/).

## Host

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Bind Address | `*` | Adres waarop geluisterd wordt. Vereist een herstart |
| Port Number | 5173 | Vereist een herstart |
| URL Base | leeg | Een padprefix, voor submappen achter een reverse proxy, zoals `/audiobook-manager`. Vereist een herstart |
| Instance Name | Audiobook Manager | Staat in het tabblad en wordt gebruikt als appnaam voor syslog |
| Application URL | leeg | Het externe adres, inclusief `http(s)://`, poort en URL base |
| Enable SSL | uit | ABM serveert zelf HTTPS. Vraagt om een pad naar een certificaat en een sleutel. Vereist een herstart |

In Docker zijn in de praktijk de omgevingsvariabele `PORT` en de poortmapping in compose wat telt. Zie [Omgevingsvariabelen](/nl/configuration/).

## Proxy

Hoe ABM het internet op gaat voor metadata, covers en Audible-pagina's.

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Use Proxy | uit | Stuurt externe requests via een proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS5 of SOCKS5H |
| Hostname, Port | leeg | Adres van de proxy |
| Username, Password | leeg | Optioneel |
| Bypass Addresses | `localhost,127.0.0.1` | Hosts die de proxy overslaan |
| Test Connection | | Controleert de proxy |

De sectie toont ook je uitgaande IP-adres zoals externe diensten het zien. Een keuze van verbinding, met een ingebouwde VPN, staat gepland voor een latere release.

## Logging

| Instelling | Standaard |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 dagen, 0 bewaart voor altijd |
| Activity Log Retention | 90 dagen, 0 bewaart voor altijd |
| Book History Retention | 0 (bewaren) |
| Automatic Cleanup | aan |
| Cleanup Time | 03:00 |
| SQL Logging | uit. Heel uitgebreid |
| Parser Log Level, Matcher Log Level | Info. Veel volume op Debug |

Zie [Logs](/nl/system/logs/) en het [Activity Log](/nl/system/activity-log/).

## Back-ups

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Backup Folder | `/config/backups` | Waar back-ups naartoe gaan |
| Automatic Backups | uit | Geplande back-ups |
| Schedule Frequency | Daily | Dagelijks, wekelijks of maandelijks, met dag en tijd. Of Use Cron Expression |
| Backup Retention | 28 dagen | 0 bewaart voor altijd |
| Auto-Export on Backup | aan | Stuurt elke back-up daarna naar de exportdoelen die op Auto staan |
| Export Targets | geen | Externe bestemmingen: SFTP, SCP, FTPS, FTP, S3 of rclone |

Zie [Back-ups](/nl/system/backups/).
