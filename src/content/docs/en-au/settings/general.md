---
title: General
description: Host, security, proxy, logging and backups.
---

**Settings > General** has sections for Host, Security, Proxy, Logging and Backups. Security has [its own page](/en-au/settings/security/).

## Host

| Setting | Default | Effect |
|---|---|---|
| Bind Address | `*` | Address to listen on. Needs a restart |
| Port Number | 5173 | Needs a restart |
| URL Base | empty | A path prefix, for reverse proxy sub-folders such as `/audiobook-manager`. Needs a restart |
| Instance Name | Audiobook Manager | Shown in the tab and used as the syslog app name |
| Application URL | empty | The external address, including `http(s)://`, port and URL base |
| Enable SSL | off | ABM serves HTTPS itself. Takes a certificate path and a key path. Needs a restart |

In Docker the environment variables `PORT` and the compose port mapping are what matter in practice. See [Environment variables](/en-au/configuration/).

## Proxy

How ABM reaches the internet for metadata, covers and Audible pages.

| Setting | Default | Effect |
|---|---|---|
| Use Proxy | off | Route external requests through a proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS5 or SOCKS5H (SOCKS5 with DNS through the proxy) |
| Hostname, Port | empty | Proxy address |
| Username, Password | empty | Optional |
| Bypass Addresses | `localhost,127.0.0.1` | Hosts that skip the proxy |
| Test Connection | | Checks the proxy |

SOCKS4 is not supported. If a saved proxy still uses it, switch it to SOCKS5 or another type before saving.

The section also shows your outgoing IP as external services see it. A choice of connection, including a built-in VPN, is planned for a later release.

## Logging

| Setting | Default |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 days, 0 keeps forever |
| Activity Log Retention | 90 days, 0 keeps forever |
| Book History Retention | 0 (keep) |
| Automatic Cleanup | on |
| Cleanup Time | 03:00 |
| SQL Logging | off. Very verbose |
| Parser Log Level, Matcher Log Level | Info. High volume at Debug |

See [Logs](/en-au/system/logs/) and the [Activity Log](/en-au/system/activity-log/).

## Backups

| Setting | Default | Effect |
|---|---|---|
| Backup Folder | `/config/backups` | Where backups go |
| Automatic Backups | off | Scheduled backups |
| Schedule Frequency | Daily | Daily, weekly or monthly, with day and time. Or Use Cron Expression |
| Backup Retention | 28 days | 0 keeps forever |
| Auto-Export on Backup | on | After each backup, send it to export targets marked Auto |
| Export Targets | none | Remote destinations: SFTP, SCP, FTPS, FTP, S3 or rclone |

See [Backups](/en-au/system/backups/).
