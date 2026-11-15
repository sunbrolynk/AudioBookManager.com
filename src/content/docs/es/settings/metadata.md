---
title: Metadatos
description: Qué archivos auxiliares y etiquetas de audio escribe ABM, y cuándo.
---

**Settings > Metadata** decide qué escribe ABM en la carpeta de un libro y en sus archivos. Cómo se usan estos archivos se explica en [Archivos auxiliares](/es/using/sidecars/).

## Fuente (Source)

**Metadata Source** es Built-in (por defecto), Hosted (libexdb.com) o Self-hosted, que pide una **Server URL**. **Test** hace una petición real a la fuente elegida sin guardar, **Status** dice si está lista, y **Connection** muestra la ruta por la que salen las consultas, con enlace a **Settings > Network**. Cambiar la fuente vale al instante para todas las consultas. Mira [Elegir una fuente de metadatos](/es/metadata/choosing-a-source/).

## Creación de archivos de metadatos

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Create on Book Add | desactivado | Escribe los archivos cuando se añade un libro como buscado |
| Create on Import | activado | Escribe los archivos cuando se importa un audiolibro |
| Create on Refresh | desactivado | Crea o actualiza los archivos cuando se actualizan los metadatos |
| Overwrite Existing | desactivado | Reemplaza los archivos que ya están en la carpeta |

Archivos que se crean: `cover.jpg` (activado), `title.opf` (activado, compatible con Audiobookshelf), `desc.txt` (activado) y `reader.txt` (activado).

## Escritura de etiquetas en los archivos de audio

Escribe las etiquetas de audio dentro de los propios archivos de audio.

| Ajuste | Por defecto |
|---|---|
| Write Audio Tags | desactivado |
| Write Audio Tags on Import | activado, una vez que la escritura de etiquetas está activada |
| Write Audio Tags on Refresh | desactivado |

Campos de etiquetas, todos activados por defecto: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) y Cover Art.

## Almacenamiento local (Local Storage)

Con la fuente Built-in aparecen las secciones **Local Storage** y **Storage Backups**. Son una vista previa y aún no están conectadas. Mira [Tus metadatos, bajo tu control](/es/metadata/control/).

## Detalles a tener en cuenta

- La escritura de etiquetas modifica los archivos de audio. Audiobookshelf los verá como modificados.
- Si no se pueden obtener los metadatos o una portada durante la escritura de etiquetas, la llamada devuelve avisos en lugar de fallar.
- Cuando no se pudo incrustar una portada porque la conexión la rechazó, la página del libro y el diálogo de edición muestran un aviso en vez de un éxito simple.
