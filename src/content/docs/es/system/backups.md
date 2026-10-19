---
title: Copias de seguridad
description: Haz copias de seguridad de ABM, expórtalas y restáuralas.
---

**System > Backups** crea y restaura copias de seguridad. **Backup Now** crea una. Las programaciones, la retención y los destinos de exportación están en [General](/es/settings/general/).

## Qué hay en una copia de seguridad

Un archivo cifrado con una copia coherente de la base de datos (`database.db`), los ajustes (`settings.json`) y un manifiesto. Incluye también `/config` en tus propias copias de seguridad por las portadas y el archivo del secreto de la aplicación.

## Restaurar

Elige una de la lista o sube un archivo de copia de seguridad (hasta 500 MiB). Antes se guarda una copia de la base de datos actual. La restauración no se puede deshacer.

Por defecto, una restauración no recupera los **ajustes de seguridad** (modo de autenticación, credenciales, redes de confianza) ni la **conexión de salida**. Se conservan los actuales y el resultado lo indica. Marca la opción al subir el archivo para restaurarlos. Así, un archivo subido nunca puede desactivar el inicio de sesión solo por restaurarlo.

Si la copia se hizo con una versión anterior, reinicia el contenedor después de restaurar para que se ejecute la migración.

Una copia de seguridad se rechaza, sin cambiar nada, si tiene entradas inesperadas, no es una base de datos SQLite válida o es una copia antigua de antes del paso a SQLite.

## Destinos de exportación

SFTP, SCP, FTPS, FTP, S3 o un remoto de rclone. Un destino marcado como **Auto** recibe cada copia automáticamente. Los nombres de remotos de rclone pueden usar letras, dígitos, `_`, `.` y `-`.

## Detalles a tener en cuenta

- La imagen de Docker y tu archivo compose no están en la copia de seguridad. Guarda el archivo compose.
- Si defines `APP_SECRET`, haz una copia aparte. Sin él, las credenciales guardadas no se pueden descifrar tras restaurar en otro host.
