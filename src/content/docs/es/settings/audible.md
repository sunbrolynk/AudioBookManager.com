---
title: Ajustes de Audible
description: Cuentas, programación de la sincronización, descargas y diagnósticos.
---

En **Settings > Audible** se conectan las cuentas y se ajustan la sincronización y las descargas. Cómo funciona todo se explica en la página [Audible](/es/audible/).

## Cuentas

Para conectar una cuenta necesitas un **Marketplace**, un **Display Name** y la **Redirect URL** que Amazon devuelve después de iniciar sesión. Cada cuenta tiene su propia biblioteca. Si una cuenta necesita volver a iniciar sesión, hazlo en la misma cuenta en lugar de borrarla. Al borrarla se elimina su biblioteca y se quita su dispositivo de Audible.

## Programación

| Ajuste | Efecto |
|---|---|
| Auto Sync | Sincroniza la biblioteca de forma programada |
| Sync on Account Add | Sincroniza en cuanto se conecta una cuenta |
| Frequency | Diaria, semanal o mensual. Semanal añade Day of Week. Mensual añade Day of Month (1-28). |
| Time | Hora y minuto |
| Use CRON Expression | Una expresión cron personalizada sustituye a las opciones de arriba |

## Ajustes de descarga (Download Settings)

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Auto Add to Library | activado | Los libros descargados se añaden a la biblioteca de ABM |
| Concurrent Downloads | 2 | De 1 a 5. Más es más rápido y puede chocar con los límites de peticiones de Audible. |
| Preferred Quality | High Quality | High, Normal o Low |
| Delete Encrypted Files | activado | Elimina el archivo AAXC cifrado después de descifrarlo a M4B |
| Temp Download Path | vacío | Vacío usa la carpeta temporal del sistema |

Las descargas que fallan se reintentan solas unas cuantas veces, con una espera cada vez más larga, y una caída que dure más que eso vuelve a poner la tarea en cola durante un máximo de seis horas. Una licencia denegada, un libro que no tienes o un fallo de descifrado fallan una sola vez.

## Diagnóstico de conexión (Connection Diagnostics)

Elige una cuenta y ejecuta el diagnóstico. Prueba FFmpeg, las credenciales, la conexión a la API y la capacidad de descarga, y muestra tu IP de salida tal como la ve Audible.
