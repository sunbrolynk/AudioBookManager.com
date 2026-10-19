---
title: Estado
description: Comprobaciones de salud y un vistazo a lo que está haciendo ABM.
---

**System > Status** ejecuta comprobaciones de salud y muestra todo lo que va mal: clientes de descarga e indexadores que fallan, problemas con las carpetas raíz y problemas con la conexión de salida. También muestra el uso del pool de conexiones de la base de datos. Cuando todo va bien, dice "All systems healthy".

Las comprobaciones de salud también se ejecutan cada 6 horas en segundo plano. Connect puede avisarte con **On Health Issue** y **On Health Restored**. Consulta [Connect](/es/settings/connect/).

Si conoces Sonarr: es la misma idea que System > Status y Health en una sola página.

## Detalles a tener en cuenta

- Un cliente de descarga desactivado no se considera con problemas.
- Una cuenta de Audible que tiene que volver a iniciar sesión aparece aquí además de en la página de ajustes de Audible.
