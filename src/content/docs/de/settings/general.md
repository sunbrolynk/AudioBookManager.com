---
title: Allgemein
description: Host, Sicherheit, Proxy, Logging und Backups.
---

**Settings > General** hat Abschnitte für Host, Security, Proxy, Logging und Backups. Security hat [eine eigene Seite](/de/settings/security/).

## Host

| Einstellung | Standard | Wirkung |
|---|---|---|
| Bind Address | `*` | Adresse, auf der gelauscht wird. Braucht einen Neustart |
| Port Number | 5173 | Braucht einen Neustart |
| URL Base | leer | Ein Pfadpräfix für Unterordner hinter einem Reverse Proxy, etwa `/audiobook-manager`. Braucht einen Neustart |
| Instance Name | Audiobook Manager | Wird im Tab angezeigt und als App-Name für Syslog genutzt |
| Application URL | leer | Die externe Adresse, inklusive `http(s)://`, Port und URL Base |
| Enable SSL | aus | ABM liefert selbst HTTPS aus. Braucht einen Pfad zum Zertifikat und einen zum Key. Braucht einen Neustart |

Unter Docker zählen in der Praxis die Umgebungsvariable `PORT` und das Port-Mapping in der Compose-Datei. Siehe [Umgebungsvariablen](/de/configuration/).

## Proxy

Wie ABM für Metadaten, Cover und Audible-Seiten ins Internet kommt.

| Einstellung | Standard | Wirkung |
|---|---|---|
| Use Proxy | aus | Externe Anfragen über einen Proxy leiten |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS5 oder SOCKS5H |
| Hostname, Port | leer | Adresse des Proxys |
| Username, Password | leer | Optional |
| Test Connection | | Prüft den Proxy |

Der Abschnitt zeigt außerdem deine ausgehende IP so, wie externe Dienste sie sehen. Eine Auswahl der Verbindung, auch mit eingebautem VPN, ist für ein späteres Release geplant.

## Logging

| Einstellung | Standard |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 Tage, 0 behält für immer |
| Activity Log Retention | 90 Tage, 0 behält für immer |
| Book History Retention | 0 (behalten) |
| Automatic Cleanup | an |
| Cleanup Time | 03:00 |
| SQL Logging | aus. Sehr gesprächig |
| Parser Log Level, Matcher Log Level | Info. Bei Debug sehr umfangreich |

Siehe [Logs](/de/system/logs/) und das [Aktivitätsprotokoll](/de/system/activity-log/).

## Backups

| Einstellung | Standard | Wirkung |
|---|---|---|
| Backup Folder | `/config/backups` | Wohin die Backups kommen |
| Automatic Backups | aus | Geplante Backups |
| Schedule Frequency | Daily | Täglich, wöchentlich oder monatlich, mit Tag und Uhrzeit. Oder Use Cron Expression |
| Backup Retention | 28 Tage | 0 behält für immer |
| Auto-Export on Backup | an | Schickt jedes Backup danach an die Exportziele mit der Markierung Auto |
| Export Targets | keine | Entfernte Ziele: SFTP, SCP, FTPS, FTP, S3 oder rclone |

Siehe [Backups](/de/system/backups/).
