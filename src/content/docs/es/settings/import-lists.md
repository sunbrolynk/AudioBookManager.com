---
title: Listas de importación
description: Trae libros buscados desde MyAnonamouse o un feed RSS.
---

**Settings > Import Lists** añade libros automáticamente desde fuentes externas.

## Fuentes

- **MAM**: una lista de deseos de MyAnonamouse, con un **MAM Session ID**.
- **RSS**: un **RSS Link** que pones tú, con una **Website URL** opcional. La web tiene que ser http o https.

## Por lista

| Campo | Efecto |
|---|---|
| Name | Nombre |
| Monitor | Si los libros que añade quedan como Monitored o Unmonitored |
| Root Folder | Dónde van |
| Quality Profile | Un perfil, o Inherit (usar el predeterminado) |
| Tags | Se aplican a todo lo que añade la lista |

**Sync Now** ejecuta las listas al momento.

## Opciones

| Ajuste | Por defecto | Efecto |
|---|---|---|
| RSS Sync Interval | 12 (horas) | Cada cuánto se sincronizan las listas. 0 desactiva la sincronización |
| Clean Library Level | Disabled | Qué pasa con un libro cuando sale de la lista |

Opciones de Clean Library Level: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. La última borra archivos. Elígela solo si de verdad quieres eso.

## Exclusiones

**Import List Exclusions** bloquea un libro por **ASIN**, **Title** y **Year**, para que ninguna lista vuelva a añadirlo. Usa **Lookup ASIN** para rellenarlos.

## Detalles a tener en cuenta

- Un enlace RSS o un ID de sesión guardados no se vuelven a mostrar nunca. Si cambias la dirección, tienes que volver a escribir el secreto.
- Las listas disparan las notificaciones On Import List Synced y On Import List New Items. Consulta [Connect](/es/settings/connect/).
