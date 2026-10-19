---
title: Algemeen
description: Host, uitgaande verbinding, beveiliging, logging en back-ups.
---

**Settings > General** heeft secties voor Host, Proxy & VPN, Security, Logging en Backups. Security heeft [een eigen pagina](/nl/settings/security/).

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

## Proxy en uitgaande verbinding

Hoe ABM het internet op gaat voor metadata, covers en Audible-pagina's.

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Use Proxy | uit | Stuurt externe requests via een proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS4 of SOCKS5 |
| Hostname, Port | leeg | Adres van de proxy |
| Username, Password | leeg | Optioneel |
| Bypass Addresses | `localhost,127.0.0.1` | Hosts die de proxy overslaan |
| Test Connection | | Controleert de proxy |

De pagina toont ook je uitgaande IP zoals externe diensten het zien. De volgende release voegt een ingebouwde WireGuard-tunnel toe en een expliciete verbindingskeuze (geen, direct, proxy, WireGuard of je eigen VPN-container) die de ingebouwde metadatabron vereist. Een route die plat ligt, blokkeert het verkeer in plaats van terug te vallen op je eigen adres. Back-upexports en bestemmingen op je LAN gaan altijd direct.

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
