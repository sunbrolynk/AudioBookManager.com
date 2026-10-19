---
title: Conversiones
description: Convierte, une, divide y añade capítulos a archivos de audio, con una cola que puedes pausar.
---

**Library > Conversions** ejecuta trabajos de ffmpeg sobre tu biblioteca. Hay cuatro tipos:

| Trabajo | Qué hace |
|---|---|
| Convert Format | Vuelve a codificar a M4B, MP3, M4A, FLAC u Opus |
| Merge Parts | Junta varios archivos en uno, con capítulos |
| Split Chapters | Divide un archivo en un archivo por capítulo |
| Ensure Chapters | Añade o corrige las marcas de capítulo sin volver a codificar |

Los valores por defecto de cada trabajo vienen de los [ajustes de conversión](/es/settings/conversions/). Cada trabajo puede cambiarlos.

## La cola

Los trabajos esperan en una cola y se ejecutan hasta **Concurrent Conversions** a la vez (2 por defecto). Los trabajos terminados pasan a History, que puedes vaciar.

El resultado se escribe en una carpeta de trabajo privada y solo se coloca en la biblioteca cuando está terminado. Cada archivo entra con un nombre temporal y se renombra en su sitio, así que nunca aparece un libro escrito a medias. Antes de empezar un trabajo se comprueba el espacio libre, y otra vez antes de colocarlo. Los archivos de origen nunca se sobrescriben.

Convertir un archivo al formato que ya tiene se rechaza, porque sobrescribiría el original.

## Después de una conversión

ABM actualiza los registros de archivos, el tamaño y la calidad del libro, así que un libro convertido muestra su nueva calidad. Si **Delete Original** está activado, los archivos antiguos van a la papelera de conversiones cuando está activada.

Si falla la colocación del resultado (por ejemplo, porque la carpeta de la biblioteca está llena), el trabajo falla y el resultado terminado se conserva en su carpeta de trabajo. El error nombra la carpeta. **Retry** vuelve a empezar el trabajo y descarta ese resultado conservado, así que te pregunta antes. **Clear history** conserva los trabajos que todavía tienen resultados sin colocar.

## Pausar y reanudar

:::caution[Llega en la próxima versión]
La pausa todavía no está en ninguna versión publicada.
:::

Hay dos tipos de pausa, y ninguno cancela nada:

- **Pause** en un trabajo en curso suspende sus procesos de ffmpeg donde estén. Resume sigue desde el mismo punto.
- **Pause queue** (arriba de la cola, o en la barra superior en el móvil) impide que empiecen trabajos nuevos y suspende todos los que están en curso.

Un trabajo que pausaste tú sigue pausado cuando se reanuda la cola, y también tras un reinicio. Un trabajo que estaba en curso cuando ABM se detiene vuelve como pausado y no arranca solo. Resume continúa desde la última parte terminada en las uniones, las divisiones y las conversiones de varios archivos. Una conversión de un solo archivo vuelve a empezar ese archivo.

El límite de 6 horas de ejecución solo cuenta el tiempo sin pausa. Si al arrancar no se puede leer el estado guardado de la cola, la cola empieza pausada y lo indica. Pulsa Resume queue para volver a escribirlo.

Si conoces Sonarr: en las arr no hay nada parecido. Piénsalo como una pequeña cola de codificación que da la casualidad de que vive dentro del gestor.

## Detalles a tener en cuenta

- Concurrent Conversions por Threads Per Job no debería superar el número de núcleos de tu CPU.
- Un archivo convertido tiene un tamaño y una fecha de modificación nuevos, así que Audiobookshelf lo volverá a escanear.
- Convertir un archivo con enlace duro a un torrent que se está sembrando crea un archivo nuevo. La copia que se siembra conserva los bytes antiguos.
