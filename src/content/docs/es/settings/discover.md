---
title: Ajustes de Discover
description: Programación de actualizaciones y límites de extracción de los catálogos de Discover.
---

**Settings > Discover** controla cómo se llenan los catálogos de [Discover](/es/using/discover/).

## Actualización y estado de los catálogos

Cada catálogo (New Releases, Coming Soon, Audible Best, Recommended) tiene sus propios botones **Refresh** y **Clear**, y la página muestra lo lleno que está cada uno.

## Programación

| Ajuste | Efecto |
|---|---|
| Auto Refresh | Actualiza los catálogos de forma programada |
| Frequency | Diaria, semanal o mensual, con día y hora |
| Refresh on Startup | Llena los catálogos vacíos cuando arranca ABM |
| Use CRON Expression | Sustituye a las opciones sencillas |

## Extracción

| Ajuste | Rango | Efecto |
|---|---|---|
| Pages to Scrape | De 1 a 50 | Páginas de Audible que se leen por catálogo |
| Max ASINs per Refresh | De 100 a 5000 | Libros que se piden a Libex en cada actualización |
| Batch Size | De 10 a 900 | ASIN por petición a Libex. Más grande es más rápido y puede fallar en algunos sistemas |

Los valores por defecto están en la aplicación y no se repiten aquí. Abre la página para verlos.

## Detalles a tener en cuenta

Las actualizaciones se saltan cuando la fuente de metadatos no está lista, y se registra una sola vez.
