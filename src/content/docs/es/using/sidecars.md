---
title: Archivos auxiliares
description: Los archivos metadata.json, de portada, OPF, descripción y narrador que ABM escribe junto a un libro.
---

Un archivo auxiliar (sidecar) es un archivo pequeño junto al audio. Audiobookshelf y otros reproductores los leen. ABM escribe estos:

| Archivo | Contenido | Interruptor |
|---|---|---|
| `metadata.json` | El archivo de metadatos propio de Audiobookshelf, más un bloque `abm` que lo marca como de ABM. Audiobookshelf lo lee antes que nada | Ninguno, se escribe siempre |
| `cover.jpg` | La portada del libro. No se escribe si la carpeta ya tiene un `cover.*` | cover.jpg |
| `.opf` | Metadatos en formato OPF. Toma el nombre del primer archivo de audio del libro (por ejemplo `Dune.opf`), o `title.opf` cuando el libro no tiene audio | title.opf |
| `desc.txt` | La descripción, sin HTML. Se omite si no hay | desc.txt |
| `reader.txt` | Los narradores. Se omite si no hay | reader.txt |

Junto con la estructura de carpetas, estos son los archivos que Audiobookshelf lee para los detalles de un libro, así que ve el mismo libro que ABM.

## Cuándo se escriben

`metadata.json` se escribe cada vez que un libro se añade, se importa o se actualiza.

Los otros cuatro tienen cada uno un interruptor en **Settings > Metadata > Files to Create**, todos activados por defecto. Solo se escriben cuando también está activado el disparador correspondiente: **Create on Book Add** (desactivado), **Create on Import** (activado, que cubre las descargas, Library Import y las descargas de Audible) y **Create on Refresh** (desactivado). **Overwrite Existing** está desactivado, así que un archivo que ya existe se queda. No se escribe nada hasta que existe la carpeta del libro.

**Write to Directories**, en el diálogo de edición, también escribe los cuatro, para un libro o para una selección de series y autores. Consulta [Ajustes de metadatos](/es/settings/metadata/).

## La portada es especial

Una portada que elegiste tú queda bloqueada. Consulta [El bloqueo de portada](/es/metadata/cover-lock/).

## Al importar

La importación también trae los archivos que no son audio que ya tenía el libro, según **Media Management > Importing**. Cuando el origen tiene un `.opf`, una descripción o un archivo del narrador, ABM toma como mucho uno de cada y los llama `desc.txt` y `reader.txt`. Un destino que ya existe no se toca, y una portada nueva nunca se escribe encima de un `cover.*` existente.

## Enlaces duros

Una importación con enlace duro deja el original intacto. Cuando ABM escribe cualquiera de estos archivos, escribe un archivo nuevo en lugar de editar el existente, así que el origen desde el que importaste conserva su contenido.

## Detalles a tener en cuenta

- Un `metadata.json` lo gestiona ABM cuando lleva el bloque propio de ABM. El `metadata.json` de otra herramienta sigue el interruptor Book info files.
- En una carpeta compartida por varios libros, solo pertenecen a este libro los archivos que tienen el nombre de su audio.
- Borrar un libro elimina sus archivos auxiliares cuando tienen el nombre de los archivos de ese libro.
