---
title: Generale
description: Host, connessione in uscita, sicurezza, logging e backup.
---

**Settings > General** ha le sezioni Host, Proxy & VPN, Security, Logging e Backups. Security ha [una sua pagina](/it/settings/security/).

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

## Proxy e connessione in uscita

Come ABM esce su internet per metadati, copertine e pagine Audible.

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Use Proxy | disattivo | Fa passare le richieste esterne da un proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS4 o SOCKS5 |
| Hostname, Port | vuoto | Indirizzo del proxy |
| Username, Password | vuoto | Facoltativi |
| Bypass Addresses | `localhost,127.0.0.1` | Host che saltano il proxy |
| Test Connection | | Verifica il proxy |

La pagina mostra anche il tuo IP in uscita come lo vedono i servizi esterni. La prossima release aggiunge un tunnel WireGuard integrato e una scelta esplicita della connessione (nessuna, diretta, proxy, WireGuard o un tuo container VPN), che la fonte di metadati integrata richiede. Un percorso giù blocca il traffico invece di ripiegare sul tuo indirizzo. Le esportazioni dei backup e le destinazioni in LAN vanno sempre dirette.

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
