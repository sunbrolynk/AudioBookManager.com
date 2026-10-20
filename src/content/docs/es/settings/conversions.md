---
title: Ajustes de conversión
description: Valores por defecto, opciones de códec, capítulos, metadatos, reciclaje y ffmpeg.
---

**Settings > Conversions** define los valores por defecto de las [Conversiones](/es/using/conversions/). Cualquier trabajo puede cambiarlos.

## General

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Enable Conversions | activado | Si está desactivado, crear, encolar en bloque o reintentar una conversión se rechaza con HTTP 409, un trabajo ya encolado falla con un mensaje que lo dice, y **Auto-Reformat on Import** no encola nada |
| Conversion Folder | vacío | Espacio de trabajo temporal. Vacío usa la carpeta temporal del sistema |
| Concurrent Conversions | 2 | 1 a 4. Mantén este valor multiplicado por **Threads Per Job** igual o por debajo del número de núcleos. La página avisa si lo superas |
| Threads Per Job | Auto | Hilos de FFmpeg por trabajo, en la vista avanzada. Auto deja dos núcleos para ABM y reparte el resto entre los trabajos que se ejecutan a la vez, así que con 8 núcleos y 2 trabajos simultáneos salen 3 hilos cada uno. O elige un número fijo |
| Process Priority | Normal | Low mantiene el resto del sistema ágil. High termina antes |

## Calidad de audio por defecto

| Ajuste | Por defecto |
|---|---|
| Default Output Format | M4B (también MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, o Copy para no volver a codificar) |
| Default Sample Rate | Auto, que no pasa ninguna frecuencia y deja que decida FFmpeg. O 22050, 44100 o 48000 Hz, que remuestrea. Opus solo admite ciertas frecuencias, así que 22050 pasa a 24000 y 44100 pasa a 48000 (el registro lo dice) |
| Default Channels | Auto, que mantiene la disposición de la fuente. Mono mezcla a un solo canal para archivos más pequeños. Stereo fuerza dos |

Las dos listas de frecuencia y canales solo aceptan lo que ofrece la página. Un valor guardado no válido se carga como Auto.

## Opciones de códec

| Formato | Códec | Opciones |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC por defecto) y AAC VBR, calidad 1 a 5. El bitrate se aplica cuando VBR está desactivado. AAC-LC es el único perfil, porque el codificador no puede hacer HE-AAC. Un perfil HE guardado se carga como AAC-LC |
| MP3 | LAME | Calidad VBR de 0 a 9 (4 por defecto) y Joint Stereo (activado). El bitrate se aplica cuando VBR está desactivado |
| Opus | libopus | Bitrate variable (activado) y Application: Audio (por defecto), VoIP o Low Delay |
| FLAC | FLAC | Nivel de compresión de 0 a 12 (5 por defecto). El bitrate se ignora |

Un bitrate **Copy** se salta la recodificación y todas las opciones de códec.

## Capítulos

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Default Chapter Behavior | Auto | Los conserva si existen y los genera si no. Otras opciones: solo conservar, generar siempre, ninguno |
| Chapter Naming Format | `Chapter {n}` | Pone nombre a los capítulos que ABM tiene que inventarse. `{n}` es el número y `{title}` el nombre del archivo original. Los títulos de capítulo que vienen de los archivos o de Libex se conservan |
| Silence Detection | desactivado | Para un archivo sin capítulos, ABM crea capítulos en las pausas más largas del audio. Lo usan Split Chapters y Ensure Chapters en un solo archivo cuando Libex no tiene capítulos. Desactivado, dividir un archivo así falla |
| Target Chapter Length | 600 s | Se muestra cuando Silence Detection está activado, de 60 s o más. Cada capítulo termina en la pausa más larga dentro de la mitad de esta duración a cada lado, o a esta duración si no hay pausa. Un final corto se une al último capítulo, y los capítulos cubren todo el archivo |
| Chapter Image Handling | Keep in file | O eliminar, o extraer a una carpeta |

## Metadatos

| Ajuste | Por defecto |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | activado (solo JPEG, para Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Gestión de archivos

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Enable Recycle Bin | activado | Los originales van a la papelera en lugar de borrarse |
| Recycle Bin Path | vacío | Vacío usa `/config/recycle/conversions` |
| Retention Period | 7 días | Los elementos más antiguos los borra la tarea de limpieza de la papelera. 0 los conserva para siempre |
| Auto-Empty When Bin Is Large | desactivado | Activa el umbral de abajo |
| Auto-Empty Threshold | 10 GB | Tras una conversión, si la papelera guarda más que esto, se borran los elementos más antiguos |
| Delete Original | desactivado | Valor por defecto de cada trabajo, se puede cambiar |
| Update Library Paths | activado | Los registros de los libros siguen a los archivos convertidos |
| Auto-Reformat on Import | desactivado | Convierte los libros recién importados que llegan en otro formato, con los valores por defecto de arriba |
| Backup Original Metadata | desactivado | Antes de convertir, escribe un archivo JSON en una carpeta `.metadata_backup` dentro de la carpeta del libro. Lista el nombre, formato y tamaño de cada archivo original, más las etiquetas y capítulos incrustados en él |

## FFmpeg avanzado

FFmpeg Path (vacío lo busca en el PATH), Custom FFmpeg Arguments (se añaden a cada comando; si son incorrectos, las conversiones fallan), Logging Level (error por defecto) y Keep FFmpeg Logs (desactivado).
