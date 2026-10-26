---
title: Général
description: Hôte, sécurité, proxy, journaux et sauvegardes.
---

**Settings > General** a des sections pour Host, Security, Proxy, Logging et Backups. Security a [sa propre page](/fr/settings/security/).

## Hôte (Host)

| Réglage | Par défaut | Effet |
|---|---|---|
| Bind Address | `*` | L'adresse sur laquelle écouter. Nécessite un redémarrage |
| Port Number | 5173 | Nécessite un redémarrage |
| URL Base | vide | Un préfixe de chemin, pour les sous-dossiers de reverse proxy comme `/audiobook-manager`. Nécessite un redémarrage |
| Instance Name | Audiobook Manager | Affiché dans l'onglet et utilisé comme nom d'app pour syslog |
| Application URL | vide | L'adresse externe, avec `http(s)://`, le port et l'URL de base |
| Enable SSL | désactivé | ABM sert lui-même le HTTPS. Demande un chemin de certificat et un chemin de clé. Nécessite un redémarrage |

Sous Docker, ce qui compte en pratique, ce sont la variable d'environnement `PORT` et la redirection de port du fichier compose. Voir [Variables d'environnement](/fr/configuration/).

## Proxy

La façon dont ABM accède à Internet pour les métadonnées, les couvertures et les pages Audible.

| Réglage | Par défaut | Effet |
|---|---|---|
| Use Proxy | désactivé | Fait passer les requêtes externes par un proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS4 ou SOCKS5 |
| Hostname, Port | vide | L'adresse du proxy |
| Username, Password | vide | Facultatif |
| Test Connection | | Vérifie le proxy |

La section affiche aussi ton IP sortante telle que les services externes la voient. Un choix de connexion, avec un VPN intégré, est prévu pour une version ultérieure.

## Journalisation (Logging)

| Réglage | Par défaut |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 jours, 0 garde pour toujours |
| Activity Log Retention | 90 jours, 0 garde pour toujours |
| Book History Retention | 0 (garder) |
| Automatic Cleanup | activé |
| Cleanup Time | 03:00 |
| SQL Logging | désactivé. Très bavard |
| Parser Log Level, Matcher Log Level | Info. Très volumineux en Debug |

Voir [Journaux](/fr/system/logs/) et le [journal d'activité](/fr/system/activity-log/).

## Sauvegardes (Backups)

| Réglage | Par défaut | Effet |
|---|---|---|
| Backup Folder | `/config/backups` | Où vont les sauvegardes |
| Automatic Backups | désactivé | Sauvegardes planifiées |
| Schedule Frequency | Daily | Quotidien, hebdomadaire ou mensuel, avec le jour et l'heure. Ou Use Cron Expression |
| Backup Retention | 28 jours | 0 garde pour toujours |
| Auto-Export on Backup | activé | Après chaque sauvegarde, l'envoie vers les destinations d'export marquées Auto |
| Export Targets | aucune | Destinations distantes : SFTP, SCP, FTPS, FTP, S3 ou rclone |

Voir [Sauvegardes](/fr/system/backups/).
