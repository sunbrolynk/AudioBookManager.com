---
title: Gestión de medios (Media Management)
description: Carpetas raíz, importación, archivos extra, reciclaje, escaneos, mejoras y permisos.
---

**Settings > Media Management** controla dónde viven los libros y cómo entran los archivos. Los ajustes marcados como avanzados aparecen con **Show Advanced**.

## Carpetas raíz (Root Folders)

Una carpeta raíz es un directorio en el que ABM gestiona libros. Añade una con **Add Root Folder**, que abre un explorador de carpetas donde también puedes escribir la ruta. ABM también puede mostrar las carpetas sin asignar dentro de una raíz e importarlas. Al añadir una raíz se comprueban su espacio libre y si admite enlaces duros. Quitar una raíz no borra archivos.

La carpeta raíz por defecto es a la que van los libros nuevos y la que decide si Library Import ofrece el enlace duro.

## Carpetas (Folders)

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Create Empty Book Folders | desactivado | Crea las carpetas de libro que faltan al añadir, al cambiar la carpeta raíz y durante un escaneo del disco. Se ignora mientras **Delete empty folders** está activado, para no crear una carpeta solo para borrarla. |
| Delete empty folders | desactivado | Borra las carpetas de libro vacías durante un escaneo del disco y cuando se borran archivos de libros |

## Importación (Importing)

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Skip Free Space Check | desactivado | Para cuando ABM no puede detectar el espacio libre de una raíz |
| Minimum Free Space | 100 (MB) | Se rechaza una importación que dejaría menos que esto |
| Use Hardlinks instead of Copy | activado | Para las descargas completadas: enlace duro en lugar de copia, para que sembrar no duplique el espacio. Necesita el mismo volumen. |
| Library Import | Copy | El valor por defecto de [Library Import](/es/library-import/): copiar, enlace duro o mover. El enlace duro aparece en gris hasta que la raíz por defecto se haya comprobado y lo admita. |
| Import Extra Files | activado | Interruptor general para traer también los archivos que no son audio. Se aplica a Library Import, Manual Import y las descargas completadas |
| Extra File Extensions (avanzado) | vacío | Extensiones adicionales que importar, como `srt, lrc`. Los tipos bloqueados se rechazan. |
| Preferred Cover (avanzado) | Matched | La portada de la edición emparejada, o la mejor imagen de la carpeta, cuando existen las dos |

Los archivos extra tienen cinco interruptores:

| Interruptor | Por defecto | Qué incluye |
|---|---|---|
| Cover art | activado | Portada más escaneos de la contraportada y del libreto |
| Book info files | activado | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | desactivado | PDF que vienen con un libro |
| Chapters, transcripts and playlists | activado | .cue, listas de capítulos, subtítulos, letras, listas de reproducción. Los nombres de archivo que contienen se reescriben con el audio renombrado. |
| Audible originals and ebooks | desactivado | .aax/.aaxc, vales, epub y similares |

Las descargas parciales y los ejecutables nunca se importan. El `metadata.json` propio de ABM siempre lo gestiona ABM.

El enlace duro de aquí no es lo mismo que **Use Hardlinks instead of Copy**. Ese es para las descargas. El valor por defecto de Library Import es solo lo que viene preseleccionado en el diálogo Add to Library.

## Gestión de archivos (File Management)

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Unmonitor Deleted Books | desactivado | Un libro borrado del disco deja de estar monitorizado |
| Change File Date | None | Cambia las fechas de los archivos al importar y al volver a escanear |
| Enable Recycling Bin | activado | Los archivos de libro borrados van a una papelera en lugar de borrarse |
| Recycling Bin | vacío | Dónde está la papelera. Vacío usa la de ABM por defecto (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (días) | 0 desactiva la limpieza automática |
| Library Scan Interval | 0 (desactivado) | Horas entre escaneos automáticos |
| Watch for Changes | desactivado | Escanea cuando se añaden, quitan o cambian archivos |
| Cover Cache Workers | 4 | Cuántas portadas se descargan a la vez al guardar las ilustraciones en caché, de 1 a 16. Bájalo si una pasada de caché da fallos |

## Mejoras de calidad (Quality Upgrades)

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Automatic Upgrade Search | activado | Busca periódicamente mejores lanzamientos de los libros descargados que siguen por debajo de su límite. Una copia sustituye a la tuya solo cuando es una mejora real. |
| Upgrade Search Interval | 24 (horas) | Cada cuánto se ejecuta |

## Permisos (avanzado)

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Set Permissions | desactivado | Ejecuta chmod al importar y al renombrar |
| chmod Folder | 755 | Modo octal para carpetas y archivos, sin bits de ejecución para los archivos |
| chown Group | vacío | Nombre de grupo o gid. En sistemas de archivos remotos usa un gid |

## Detalles a tener en cuenta

- Si la papelera de reciclaje está activada pero su carpeta no está disponible, los borrados que la necesitan fallan en lugar de borrar para siempre.
- Los enlaces duros solo funcionan dentro de un mismo sistema de archivos. Los archivos que no se pueden enlazar se copian, nunca se mueven, y se cuentan en el resultado de la importación.

Si conoces Sonarr: esto es el Media Management de Sonarr sin formatos de nombres. Los nombres de las carpetas los elige ABM. El renombrado masivo está en Library, Series y Authors como **Rename Files**.
