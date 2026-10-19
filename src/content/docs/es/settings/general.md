---
title: General
description: Host, conexión de salida, seguridad, registros y copias de seguridad.
---

**Settings > General** tiene secciones para Host, Proxy & VPN, Security, Logging y Backups. Security tiene [su propia página](/es/settings/security/).

## Host

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Bind Address | `*` | Dirección en la que escucha. Requiere reiniciar |
| Port Number | 5173 | Requiere reiniciar |
| URL Base | vacío | Un prefijo de ruta, para subcarpetas detrás de un proxy inverso, como `/audiobook-manager`. Requiere reiniciar |
| Instance Name | Audiobook Manager | Se muestra en la pestaña y se usa como nombre de aplicación en syslog |
| Application URL | vacío | La dirección externa, con `http(s)://`, el puerto y la URL base |
| Enable SSL | desactivado | ABM sirve HTTPS por sí mismo. Necesita una ruta al certificado y otra a la clave. Requiere reiniciar |

En Docker, lo que cuenta en la práctica es la variable de entorno `PORT` y el mapeo de puertos del compose. Consulta [Variables de entorno](/es/configuration/).

## Proxy y conexión de salida

Cómo sale ABM a internet para los metadatos, las portadas y las páginas de Audible.

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Use Proxy | desactivado | Envía las peticiones externas a través de un proxy |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS4 o SOCKS5 |
| Hostname, Port | vacío | Dirección del proxy |
| Username, Password | vacío | Opcional |
| Bypass Addresses | `localhost,127.0.0.1` | Hosts que no pasan por el proxy |
| Test Connection | | Comprueba el proxy |

La página también muestra tu IP de salida tal como la ven los servicios externos. La próxima versión añade un túnel WireGuard integrado y una elección explícita de conexión (ninguna, directa, proxy, WireGuard o tu propio contenedor VPN) que la fuente de metadatos integrada necesita. Una ruta caída bloquea el tráfico en lugar de recurrir a tu propia dirección. Las exportaciones de copias de seguridad y los destinos de la LAN siempre van directos.

## Registros

| Ajuste | Por defecto |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 días, 0 los conserva para siempre |
| Activity Log Retention | 90 días, 0 los conserva para siempre |
| Book History Retention | 0 (conservar) |
| Automatic Cleanup | activado |
| Cleanup Time | 03:00 |
| SQL Logging | desactivado. Muy detallado |
| Parser Log Level, Matcher Log Level | Info. Mucho volumen en Debug |

Consulta [Registros](/es/system/logs/) y el [registro de actividad](/es/system/activity-log/).

## Copias de seguridad

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Backup Folder | `/config/backups` | Dónde van las copias de seguridad |
| Automatic Backups | desactivado | Copias de seguridad programadas |
| Schedule Frequency | Daily | Diaria, semanal o mensual, con día y hora. O Use Cron Expression |
| Backup Retention | 28 días | 0 las conserva para siempre |
| Auto-Export on Backup | activado | Después de cada copia, la envía a los destinos de exportación marcados como Auto |
| Export Targets | ninguno | Destinos remotos: SFTP, SCP, FTPS, FTP, S3 o rclone |

Consulta [Copias de seguridad](/es/system/backups/).
