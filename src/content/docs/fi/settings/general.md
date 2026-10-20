---
title: Yleiset
description: Isäntä, tietoturva, välityspalvelin, lokit ja varmuuskopiot.
---

**Settings > General** sisältää osiot Host, Security, Proxy, Logging ja Backups. Securityllä on [oma sivunsa](/fi/settings/security/).

## Isäntä (Host)

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Bind Address | `*` | Osoite, jossa kuunnellaan. Vaatii uudelleenkäynnistyksen |
| Port Number | 5173 | Vaatii uudelleenkäynnistyksen |
| URL Base | tyhjä | Polun etuliite käänteisen välityspalvelimen alikansioille, kuten `/audiobook-manager`. Vaatii uudelleenkäynnistyksen |
| Instance Name | Audiobook Manager | Näkyy välilehdessä, ja sitä käytetään syslogin sovellusnimenä |
| Application URL | tyhjä | Ulkoinen osoite, mukaan lukien `http(s)://`, portti ja URL-pohja |
| Enable SSL | pois | ABM tarjoilee HTTPS:n itse. Vaatii varmenteen polun ja avaimen polun. Vaatii uudelleenkäynnistyksen |

Dockerissa käytännössä merkitsevät ympäristömuuttuja `PORT` ja composen porttimääritys. Katso [Ympäristömuuttujat](/fi/configuration/).

## Proxy

Miten ABM pääsee internetiin metatietoja, kansikuvia ja Audible-sivuja varten.

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Use Proxy | pois | Ohjaa ulkoiset pyynnöt välityspalvelimen kautta |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS4 tai SOCKS5 |
| Hostname, Port | tyhjä | Välityspalvelimen osoite |
| Username, Password | tyhjä | Vapaaehtoinen |
| Bypass Addresses | `localhost,127.0.0.1` | Koneet, jotka ohittavat välityspalvelimen |
| Test Connection | | Tarkistaa välityspalvelimen |

Osio näyttää myös lähtevän IP-osoitteesi sellaisena kuin ulkoiset palvelut sen näkevät. Yhteyden valinta, mukaan lukien sisäänrakennettu VPN, on suunniteltu myöhempään julkaisuun.

## Lokit (Logging)

| Asetus | Oletus |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 päivää, 0 säilyttää ikuisesti |
| Activity Log Retention | 90 päivää, 0 säilyttää ikuisesti |
| Book History Retention | 0 (säilytä) |
| Automatic Cleanup | päällä |
| Cleanup Time | 03:00 |
| SQL Logging | pois. Hyvin runsassanainen |
| Parser Log Level, Matcher Log Level | Info. Debug-tasolla hyvin paljon dataa |

Katso [Lokit](/fi/system/logs/) ja [Activity Log](/fi/system/activity-log/).

## Varmuuskopiot (Backups)

| Asetus | Oletus | Vaikutus |
|---|---|---|
| Backup Folder | `/config/backups` | Minne varmuuskopiot menevät |
| Automatic Backups | pois | Ajastetut varmuuskopiot |
| Schedule Frequency | Daily | Päivittäin, viikoittain tai kuukausittain, päivän ja kellonajan kera. Tai Use Cron Expression |
| Backup Retention | 28 päivää | 0 säilyttää ikuisesti |
| Auto-Export on Backup | päällä | Lähetä jokaisen varmuuskopion jälkeen se Auto-merkittyihin vientikohteisiin |
| Export Targets | ei mitään | Etäkohteet: SFTP, SCP, FTPS, FTP, S3 tai rclone |

Katso [Varmuuskopiot](/fi/system/backups/).
