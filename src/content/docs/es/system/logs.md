---
title: Registros
description: Archivos de registro, niveles, retención y rotación.
---

**System > Log Files** muestra los registros de texto de ABM. Abre uno para leerlo, descargarlo o borrarlo, o vacíalos todos. Los registros aparecen a medida que se ejecutan las operaciones.

- Las tareas y las conversiones escriben su propio registro. La página de tareas enlaza cada uno.
- El registro principal es `app.log`. Rota al arrancar, como mínimo cada hora y al llegar a 10 MiB. Los archivos antiguos se conservan durante **Log File Retention** (30 días por defecto).
- Un registro de seguridad aparte lleva una línea por cada intento de inicio de sesión, para fail2ban y herramientas parecidas.
- Los niveles se ajustan en **Settings > General > Logging**.

## Cómo leer un problema

Empieza por el botón de registro de la tarea fallida. Muestra la operación desde su línea de inicio hasta su bloque final. Al texto se le quitan los secretos, pero revísalo antes de pegar un registro en público.

## Detalles a tener en cuenta

- SQL Logging y los niveles Debug son muy detallados. Desactívalos cuando termines.
- Borrar un registro deja entradas de actividad que enlazan a él. Dicen "Log no longer kept".
