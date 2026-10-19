---
title: Biblioteca
description: Libros, autores y series, y cómo controla ABM su estado.
---

El menú **Library** tiene tres listas: **Books**, **Series** y **Authors**. **Add New** y **Library Import** meten cosas en ellas. **Audible Library** y **Conversions** tienen sus propias páginas.

## Libros

Cada libro es una fila de resumen (Overview), un póster o una línea de tabla (el selector de vista está en la barra de herramientas). Un libro tiene un estado:

- **Wanted**: monitorizado, todavía sin archivos. ABM lo busca.
- **Downloaded**: los archivos están en el disco.
- **Missing Files**: el libro se descargó, pero sus archivos ya no están donde ABM espera.
- **Unmonitored**: ABM no lo toca.

Abre un libro para ver su página de detalle: archivos, metadatos, historial, la calidad que midió ABM y acciones como Refresh & Scan y el diálogo de edición (ver más abajo). Consulta [Archivos auxiliares](/es/using/sidecars/).

Si conoces Sonarr: un libro es un episodio, una serie es temporada y programa a la vez, y un autor es una forma de agrupar ambos. La diferencia es que un libro puede pertenecer a varias series, y ABM usa la principal (la de menor posición) cuando tiene que elegir.

## Series

**Library > Series** enumera todas las series con cuántos libros tienes, cuántos buscas y cuántos tienen archivos que faltan, en Overview o Posters. La página de una serie muestra el catálogo entero, incluidos los libros que no tienes. Fíltrala por All, In Library o Not in Library. **Add Remaining** o **Select to Add** traen los libros que faltan como buscados (wanted), y **Refresh Series** vuelve a descargar el catálogo. **Monitor New Books** (All o None) decide si los libros que salgan más adelante se añaden como buscados. Consulta [Seguimiento de series](/es/using/series-tracking/).

## Autores

**Library > Authors** enumera los autores, en Overview o Posters. La página de un autor muestra su catálogo agrupado por series, con los libros descargados y el total de cada serie, además de su perfil de calidad, sus géneros y su valoración. **Refresh Catalog** lo vuelve a descargar y **Search Author** busca sus libros buscados. **Monitor New Books** funciona igual que en una serie, y un autor empieza en None.

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
