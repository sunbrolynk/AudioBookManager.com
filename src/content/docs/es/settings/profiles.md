---
title: Perfiles
description: Perfiles de calidad, perfiles de retraso y perfiles de lanzamiento.
---

**Settings > Profiles** es una sola página con tres secciones. Responden a tres preguntas distintas sobre un lanzamiento.

## Perfiles de calidad

Un perfil de calidad es una escala de formatos, del peor abajo al mejor arriba. Cada peldaño es un formato (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) en forma de un solo archivo o de varios. Los peldaños se pueden agrupar para que valgan lo mismo, y un peldaño se puede desactivar.

| Ajuste | Qué significa |
|---|---|
| Upgrades Allowed | Si está desactivado, ABM no reemplaza un libro una vez que ya lo tiene |
| Upgrade Until | El límite. Cuando se alcanza esta calidad, ABM deja de buscar mejoras |
| Grab off-ladder formats | Descarga un formato que no está en la lista en lugar de saltarse el libro |
| Default profile | El perfil que se usa cuando no se aplica nada más concreto |

Un perfil es el predeterminado. Un libro usa, en este orden, su propio perfil, el de su serie principal, el de su autor principal y, por último, el predeterminado. Un perfil en uso no se puede borrar.

Una copia nueva sustituye a la que tienes solo si el perfil permite mejoras, el peldaño nuevo está en la escala y activado, el libro está por debajo de su límite y el peldaño nuevo está estrictamente por encima.

Si conoces Sonarr: es un perfil de calidad en el que las calidades son formatos de audio y la disposición de los archivos en lugar de la resolución. Los formatos personalizados no existen. Los [perfiles de lanzamiento](#perfiles-de-lanzamiento) cubren algo parecido.

No hay niveles por bitrate ni por tamaño: la calidad es solo el formato y la disposición de los archivos. Para un lanzamiento, ABM toma el formato del indexador o del título y deduce la disposición por el título (un M4B sin números de parte ni de pista cuenta como un solo archivo), y luego lo vuelve a comprobar cuando los archivos ya están importados. El **Preferred Quality** de los [ajustes de Audible](/es/settings/audible/) es otra cosa: la calidad con la que llegan las descargas de Audible.

## Perfiles de retraso

Un perfil de retraso retiene un lanzamiento antes de descargarlo, para dar tiempo a que aparezca uno mejor.

| Ajuste | Qué significa |
|---|---|
| Enable Usenet / Enable Torrent | Permite descargas de ese protocolo |
| Usenet Delay / Torrent Delay | Minutos que esperar antes de descargar un lanzamiento de ese protocolo |
| Preferred Protocol | Cuál preferir cuando los dos encuentran una coincidencia |
| Bypass if Highest Quality | Se salta la espera cuando un lanzamiento ya cumple el límite del perfil |
| Tags | El perfil solo se aplica a elementos con una etiqueta que coincida |

Los perfiles de retraso se muestran en una tabla, como en Sonarr.

## Perfiles de lanzamiento

Un perfil de lanzamiento añade reglas por encima de la calidad.

| Campo | Qué significa |
|---|---|
| Enable Profile | Activado o desactivado |
| Must Contain | El lanzamiento tiene que contener al menos uno de los términos (sin distinguir mayúsculas) |
| Must Not Contain | Se rechaza un lanzamiento que tenga cualquiera de estos términos |
| Preferred | Términos que suben o bajan la puntuación de un lanzamiento. Escribe `/regex/` para usar una expresión regular |
| Narration language | Limita a un idioma |
| Indexer | Se aplica a un indexador, o a cualquiera |
| Tags | Se aplica solo a elementos con una etiqueta que coincida |

Los perfiles de lanzamiento se muestran en una tabla.

## Detalles a tener en cuenta

- Los perfiles nunca borran archivos. Deciden qué descargar y qué cuenta como mejora.
- Las etiquetas de un perfil de retraso o de lanzamiento lo limitan a los libros que llevan alguna de esas etiquetas.
