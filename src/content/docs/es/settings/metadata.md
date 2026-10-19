---
title: Metadatos
description: Qué archivos auxiliares y etiquetas de audio escribe ABM, y cuándo.
---

**Settings > Metadata** decide qué escribe ABM en la carpeta de un libro y en sus archivos. Cómo se usan estos archivos se explica en [Archivos auxiliares](/es/using/sidecars/).

## Creación de archivos de metadatos

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Create on Book Add | desactivado | Escribe los archivos cuando se añade un libro como buscado |
| Create on Import | activado | Escribe los archivos cuando se importa un audiolibro |
| Create on Refresh | desactivado | Crea o actualiza los archivos cuando se actualizan los metadatos |
| Overwrite Existing | desactivado | Reemplaza los archivos que ya están en la carpeta |

Archivos que se crean: `cover.jpg` (activado), `title.opf` (activado, compatible con Audiobookshelf), `desc.txt` (activado) y `reader.txt` (activado).

## Escritura de etiquetas en los archivos de audio

Usa ffmpeg para escribir las etiquetas dentro del propio audio.

| Ajuste | Por defecto |
|---|---|
| Write Audio Tags | desactivado |
| Write Tags on Import | activado, una vez que la escritura de etiquetas está activada |
| Write Tags on Refresh | desactivado |

Campos de etiquetas, todos activados por defecto: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) y Cover Art.

## Llega en la próxima versión

La página se reorganiza en secciones y gana una sección **Source** con la opción **Metadata Source**, **Test** y **Status**. Consulta [Elegir una fuente de metadatos](/es/metadata/choosing-a-source/).

También gana una sección **Local Metadata Library** (opcional, mostrada como vista previa que todavía no está conectada) con una descarga de la biblioteca en SQLite y sus propias copias de seguridad programadas. Esas copias siguen las opciones de copia de seguridad de General y por defecto son semanales a las 04:00, conservadas 28 días.

## Detalles a tener en cuenta

- La escritura de etiquetas modifica los archivos de audio. Audiobookshelf los verá como modificados.
- Si no se pueden obtener los metadatos o una portada durante la escritura de etiquetas, la llamada devuelve avisos en lugar de fallar.
