---
title: Indexadores
description: Newznab, Torznab, MyAnonamouse y Prowlarr.
---

**Settings > Indexers** recoge dónde busca ABM los lanzamientos.

## Tipos

Newznab (usenet), Torznab (torrent), MyAnonamouse y una conexión con Prowlarr que sincroniza los indexadores desde Prowlarr.

## Campos

| Campo | Se aplica a | Efecto |
|---|---|---|
| Name | todos | Nombre |
| Enable RSS | todos | Lo incluye en la sincronización RSS |
| Enable Automatic Search | todos | Se usa en las búsquedas que inicia ABM |
| Enable Interactive Search | todos | Se usa cuando buscas a mano |
| URL, API Path, API Key | Newznab, Torznab | Dónde y cómo conectarse. Las credenciales van en su campo, nunca en la URL |
| Categories | Newznab, Torznab | Qué categorías buscar |
| Cookie (mam_id) | MyAnonamouse | Cookie de sesión |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only o Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Amplía la búsqueda |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Límites de los lanzamientos y objetivos de siembra |
| Indexer Priority | todos | De 1 (la más alta) a 50 (la más baja), 25 por defecto. Cuando el mismo lanzamiento viene de dos indexadores, gana el número más bajo |
| Download Client | todos | Envía las descargas de este indexador a un cliente concreto. (Any) usa cualquiera |
| Tags | todos | Usa este indexador solo para elementos con una etiqueta que coincida |

Una clave de API o una cookie guardadas no se vuelven a mostrar nunca. Deja el campo en blanco al editar para conservarla. Si cambias la URL, tienes que volver a escribir el secreto, para que una clave no se envíe por accidente a una dirección nueva.

## Opciones

Estas se aplican a todos los indexadores, así que respeta las normas de cada uno.

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Minimum Age | 0 (minutos) | Ignora los lanzamientos de usenet más recientes que esto |
| Retention | 0 (días) | Ignora los lanzamientos más antiguos que esto. 0 es sin límite |
| Maximum Size | 0 (MB) | 0 es sin límite |
| RSS Sync Interval | 15 (minutos) | Cada cuánto se consulta el RSS |

La lista de MAM también puede alimentar las [listas de importación](/es/settings/import-lists/).

Si conoces Sonarr: es la misma división entre RSS, búsqueda automática e interactiva por indexador. No hay un "test all" aparte para las categorías.
