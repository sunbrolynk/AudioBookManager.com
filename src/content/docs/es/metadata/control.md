---
title: Tus metadatos, bajo tu control
description: Qué cambia una actualización, qué controlas tú y qué archivos y etiquetas escribe ABM para tu reproductor.
---

ABM guarda un registro de los metadatos de tu biblioteca en su propia base de datos y los vuelve a escribir donde tu reproductor los puede usar. Esta página explica qué controlas tú y qué va a tocar una actualización.

## Qué cambia una actualización

Una actualización (el **Refresh & Scan** de un libro, la actualización de un autor o de una serie) vuelve a consultar la fuente de metadatos y aplica lo que llega. Campos que sobrescribe cuando la fuente tiene un valor: título, subtítulo, año y fecha de publicación, valoración, duración, idioma, editorial, descripción, autores, narradores, géneros y la portada.

Un campo que la fuente devuelve vacío se queda como está.

## Qué controlas tú

- **Una portada que elegiste.** Queda bloqueada. Consulta [El bloqueo de portada](/es/metadata/cover-lock/).
- **Las etiquetas, las etiquetas automáticas, la monitorización, el perfil de calidad elegido y los propios archivos.** Una actualización no los toca.
- **Un libro cuyos archivos no se pueden leer.** No se toca para nada, y la página de tareas muestra por qué.

Los datos del libro, como el título, los autores y la descripción, vienen de la fuente. ABM no permite editarlos a mano, y no está previsto. Lo que controlas es cómo se guardan y dónde se escriben.

## El diálogo de edición

El diálogo de edición cambia la monitorización, el perfil de calidad, la ruta y las etiquetas, y te deja escribir archivos auxiliares y etiquetas de audio en el mismo paso, para un libro o para toda una selección de series y autores. Consulta [Biblioteca](/es/using/library/#el-diálogo-de-edición).

## Archivos auxiliares que lee tu reproductor

ABM escribe `cover.jpg`, un `.opf`, `desc.txt` y `reader.txt` junto al audio, y una hoja de capítulos `.cue` en la próxima versión. Audiobookshelf lee el OPF, la portada y los archivos de texto, así que lo que elegiste en ABM es lo que muestra el reproductor. Consulta [Archivos auxiliares](/es/using/sidecars/).

## Etiquetas escritas en el audio

ABM puede escribir el título, el artista, el artista del álbum, el álbum, el género, el año, el comentario, el narrador y la portada incrustada dentro de los propios archivos de audio, para que los datos viajen con el archivo. Viene desactivado por defecto. Elige los campos en **Settings > Metadata**. Consulta [Ajustes de metadatos](/es/settings/metadata/).

## Capítulos

ABM compara los capítulos incrustados en tus archivos con los de la edición publicada, y puede escribir los capítulos publicados en los archivos sin volver a codificar. Se niega cuando la duración de tu audio indica que es otra edición. Consulta [Capítulos](/es/using/chapters/). Llega en la próxima versión.

## Serie y posición

Un libro lleva su serie y su posición. ABM controla las series como catálogos para poder mostrarte qué libros tienes y añadir los que te faltan. Consulta [Seguimiento de series](/es/using/series-tracking/).

## Etiquetas y etiquetas automáticas

Las etiquetas son tuyas. Las etiquetas automáticas las ponen según reglas (género, narrador, valoración, duración y más), y pueden quitarlas cuando un libro deja de cumplirlas. Luego las etiquetas dirigen los perfiles, las notificaciones, los indexadores, las listas de importación y el feed del calendario. Consulta [Etiquetas](/es/settings/tags/).

## Un registro local que crece

Todo lo que ABM aprende sobre un libro se queda en su propia base de datos SQLite en `/config`, incluidos los libros que quites después. Haz copia de seguridad de esa carpeta y tendrás copia del registro. Una vez que un libro está dentro, los metadatos no dependen de que se pueda llegar a la fuente.

:::caution[Llega en la próxima versión]
Está prevista una **Local Metadata Library** dedicada: una copia opcional de todo lo que ABM ha consultado alguna vez, que se conserva incluso después de que un libro salga de tu biblioteca, con sus propias copias de seguridad programadas y una descarga en SQLite. La sección de la página Metadata para esto está en el trabajo sin fusionar y marcada como vista previa, todavía sin conectar.
:::

## Programación de actualizaciones

- Discover tiene su propia programación. Consulta [Ajustes de Discover](/es/settings/discover/).
- La biblioteca de Audible tiene su propia programación de sincronización. Consulta [Ajustes de Audible](/es/settings/audible/).
- Un escaneo de la biblioteca puede ejecutarse cada N horas y cuando cambian los archivos. Consulta [Media Management](/es/settings/media-management/).
- La escritura de archivos auxiliares y etiquetas al actualizar se controla con **Create on Refresh** y **Write Tags on Refresh**.
