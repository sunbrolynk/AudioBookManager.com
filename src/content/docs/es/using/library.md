---
title: Biblioteca
description: Libros, autores y series, y cómo controla ABM su estado.
---

El menú **Library** tiene tres listas: **Books**, **Series** y **Authors**. **Add New** y **Library Import** meten cosas en ellas. **Audible Library** y **Conversions** tienen sus propias páginas.

## Libros

Cada libro es una fila, un póster o una línea de tabla (el selector de vista está en la barra de herramientas). Un libro tiene un estado:

- **Wanted**: monitorizado, todavía sin archivos. ABM lo busca.
- **Downloaded**: los archivos están en el disco.
- **Missing Files**: el libro se descargó, pero sus archivos ya no están donde ABM espera.
- **Unmonitored**: ABM no lo toca.

Abre un libro para ver su página de detalle: archivos, metadatos, historial, la calidad que midió ABM y acciones como Refresh & Scan y el diálogo de edición (ver más abajo). Consulta [Archivos auxiliares](/es/using/sidecars/).

Si conoces Sonarr: un libro es un episodio, una serie es temporada y programa a la vez, y un autor es una forma de agrupar ambos. La diferencia es que un libro puede pertenecer a varias series, y ABM usa la principal (la de menor posición) cuando tiene que elegir.

## Series y autores

Las listas Series y Authors muestran cuántos libros tienes, cuántos buscas y cuántos tienen archivos que faltan. Abre una para ver el catálogo, que incluye libros que no tienes. Desde ahí puedes añadir los que faltan. Consulta [Seguimiento de series](/es/using/series-tracking/).

Borrar una serie o un autor se rechaza mientras todavía tenga libros en la biblioteca. Quita primero los libros.

## Herencia del perfil de calidad

El perfil de calidad de un libro sale, en este orden, de: su propio ajuste, su serie principal, su autor principal y, por último, el perfil predeterminado. Consulta [Perfiles](/es/settings/profiles/).

## El diálogo de edición

El diálogo de edición de un libro cambia los ajustes propios de ABM para ese libro, no sus metadatos:

- **Monitored**
- **Quality Profile** (No Change al editar varios)
- **Path**, para un libro (con un botón para recalcularla), o **Root Folder** para una selección
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt y un OPF (la casilla dice "metadata.opf"; el archivo toma el nombre del primer archivo de audio del libro, por ejemplo `Dune.opf`, o `title.opf` cuando no hay audio)
- **Write to Audio Files**: escribe las etiquetas de metadatos

El mismo diálogo se abre para series y autores y se aplica a cada uno de sus libros. Las opciones de escritura se ejecutan al guardar.

## Etiquetas

Los libros, los autores y las series pueden llevar etiquetas. Las etiquetas dirigen los indexadores, las notificaciones, las listas de importación y los perfiles, y filtran el feed del calendario. Consulta [Etiquetas](/es/settings/tags/).

## Selección

Selecciona filas para actuar sobre varias a la vez: monitorizar, buscar, etiquetar, renombrar, borrar. En el móvil, consulta [Uso en el móvil](/es/phone/).
