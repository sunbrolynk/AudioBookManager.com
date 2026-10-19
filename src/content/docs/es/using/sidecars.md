---
title: Archivos auxiliares
description: Los archivos de portada, OPF, descripción, narrador y cue que ABM escribe junto a un libro.
---

Un archivo auxiliar (sidecar) es un archivo pequeño junto al audio. Audiobookshelf y otros reproductores los leen. ABM puede escribir estos:

| Archivo | Contenido |
|---|---|
| `cover.jpg` | La portada del libro |
| `.opf` | Metadatos en formato OPF, que Audiobookshelf puede leer. Toma el nombre del primer archivo de audio del libro (por ejemplo `Dune.opf`), o `title.opf` cuando el libro no tiene audio |
| `desc.txt` | La descripción |
| `reader.txt` | El narrador |
| `.cue` | Los capítulos de Libex (llega en la próxima versión) |

## Cuándo se escriben

En **Settings > Metadata**, **Create on Book Add**, **Create on Import** y **Create on Refresh** eligen cuándo. Por defecto, solo los escribe la importación. **Overwrite Existing** está desactivado, así que un archivo que ya existe se queda. También puedes escribirlos desde el diálogo de edición, para un libro o para una selección de series y autores. Consulta [Ajustes de metadatos](/es/settings/metadata/).

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
