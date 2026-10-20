---
title: Capítulos
description: Compara los capítulos incrustados de un libro con Libex y corrígelos.
---

:::caution[Llega en una versión posterior]
Todo lo de esta página, salvo los valores por defecto de las conversiones, todavía no está en ninguna versión publicada.
:::

La página de detalle de un libro muestra los capítulos que tiene Libex junto a los capítulos que de verdad están incrustados en tus archivos. Libex es la referencia. La pregunta que responde esta vista es si tus archivos llevan lo que Libex dice que deberían llevar.

## Cómo leer la comparación

Cada capítulo de Libex recibe una insignia, un icono más una palabra:

- **Matches**: un capítulo incrustado empieza a menos de 2 segundos y el título es el mismo sin tener en cuenta mayúsculas, acentos ni la puntuación de los extremos. "Chapter 1" y "Chapter One" son títulos distintos.
- **Differs**: el título es distinto, o el título está cerca pero empieza a más de 2 segundos.
- **Missing**: no hay nada incrustado que se empareje con él.
- **Extra**: un capítulo incrustado con el que no se empareja ningún capítulo de Libex.

Los libros de varios archivos se colocan uno detrás de otro en una sola línea de tiempo, por orden de nombre de archivo. Un capítulo que continúa en otro archivo como "(cont.)" se lee como un solo capítulo. Si no se puede llegar a Libex, ves la lista incrustada y una línea que dice por qué. La página nunca da error por eso.

## Edición equivocada

Los tiempos de Libex solo sirven para la edición que describen. Si la duración de tu audio se diferencia de la de Libex en más de 15 segundos o un 0,5 por ciento, lo que sea mayor, aparece un aviso y se bloquean tanto **Update** como **Create .cue**. No hay forma de saltárselo.

## Actualizar los capítulos incrustados

Sustituye los capítulos de cada archivo de audio por los de Libex. Se ejecuta como trabajo de capítulos en la [cola de conversiones](/es/using/conversions/), sin volver a codificar. Solo se ofrece cuando la comparación dice "differs" o "no embedded chapters".

- Cada archivo se reescribe en un archivo temporal, se comprueba y luego se pone en su sitio. La comprobación exige que se pueda leer, que no sea más corto que el original en más de 0,5 segundos o un 1 por ciento, que tenga el mismo códec y que lleve exactamente el número de capítulos pedido. Si la comprobación falla, se queda el original.
- Si un trabajo se detiene a medias, los archivos ya reescritos se quedan reescritos. El error dice "N of M files already updated". Vuelve a ejecutar Update después de arreglar la causa.
- Se rechaza de entrada si: hay otra conversión del libro en curso, no hay ASIN o no hay capítulos en Libex, la edición es otra, hay un archivo que no se puede leer, o no hay nada que actualizar.

## Crear .cue

Escribe una hoja cue con los capítulos de Libex en la carpeta del libro, con el nombre del primer archivo de audio. Sobrescribe un archivo existente con ese nombre. Consulta [Archivos auxiliares](/es/using/sidecars/).

## Detalles a tener en cuenta

- Los MP3 VBR sin cabecera de duración tienen una duración estimada. Una edición correcta puede parecer desviada unos segundos.
- Un archivo reescrito le parece cambiado a Audiobookshelf y se vuelve a escanear.
- Los títulos de capítulo que contienen `=`, `;`, `#` o una barra invertida pueden escribirse mal hasta que llegue un arreglo.

## El comportamiento de capítulos por defecto en las conversiones

Aparte de lo anterior: **Settings > Conversions > Chapter Handling** decide qué hace una conversión con los capítulos. Consulta [Ajustes de conversión](/es/settings/conversions/).
