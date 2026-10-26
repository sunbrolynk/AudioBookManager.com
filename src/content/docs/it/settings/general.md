---
title: Generale
description: Host, sicurezza, proxy, log e backup.
---

**Settings > General** ha sezioni per Host, Security, Proxy, Logging e Backups. Security ha [una pagina tutta sua](/it/settings/security/).

## Host

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Bind Address | `*` | Indirizzo su cui ascoltare. Richiede un riavvio |
| Port Number | 5173 | Richiede un riavvio |
| URL Base | vuoto | Un prefisso di percorso, per le sottocartelle dietro reverse proxy come `/audiobook-manager`. Richiede un riavvio |
| Instance Name | Audiobook Manager | Mostrato nella scheda del browser e usato come nome dell'app per syslog |
| Application URL | vuoto | L'indirizzo esterno, con `http(s)://`, porta e URL base |
| Enable SSL | disattivo | ABM serve HTTPS da solo. Vuole il percorso di un certificato e di una chiave. Richiede un riavvio |

In Docker, in pratica, contano la variabile d'ambiente `PORT` e la mappatura delle porte nel compose. Vedi [Variabili d'ambiente](/it/configuration/).

## Proxy

Come ABM esce su internet per metadati, copertine e pagine Audible.

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Use Proxy | disattivo | Fa passare le richieste esterne da un proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS5 o SOCKS5H |
| Hostname, Port | vuoto | Indirizzo del proxy |
| Username, Password | vuoto | Facoltativi |
| Test Connection | | Verifica il proxy |

La sezione mostra anche il tuo IP in uscita così come lo vedono i servizi esterni. Una scelta di connessione, con una VPN integrata, è prevista per una release successiva.

## Log (Logging)

| Impostazione | Predefinito |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 giorni, 0 tiene per sempre |
| Activity Log Retention | 90 giorni, 0 tiene per sempre |
| Book History Retention | 0 (tiene) |
| Automatic Cleanup | attivo |
| Cleanup Time | 03:00 |
| SQL Logging | disattivo. Molto prolisso |
| Parser Log Level, Matcher Log Level | Info. Tanto volume in Debug |

Vedi [Log](/it/system/logs/) e il [Registro attività](/it/system/activity-log/).

## Backup

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Backup Folder | `/config/backups` | Dove finiscono i backup |
| Automatic Backups | disattivo | Backup pianificati |
| Schedule Frequency | Daily | Giornaliera, settimanale o mensile, con giorno e ora. Oppure Use Cron Expression |
| Backup Retention | 28 giorni | 0 tiene per sempre |
| Auto-Export on Backup | attivo | Dopo ogni backup, lo invia alle destinazioni di esportazione segnate Auto |
| Export Targets | nessuna | Destinazioni remote: SFTP, SCP, FTPS, FTP, S3 o rclone |

Vedi [Backup](/it/system/backups/).
