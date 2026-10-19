---
title: Ajustes de conversión
description: Valores por defecto, opciones de códec, capítulos, metadatos, reciclaje y ffmpeg.
---

**Settings > Conversions** define los valores por defecto de las [Conversiones](/es/using/conversions/). Cualquier trabajo puede cambiarlos.

## General

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Enable Conversions | activado | Desactiva las conversiones en la página Conversions. **Auto-Reformat on Import** va aparte |
| Conversion Folder | vacío | Espacio de trabajo temporal. Vacío usa la carpeta temporal del sistema |
| Concurrent Conversions | 2 | De 1 a 4. Mantén este valor multiplicado por **Threads Per Job** (en **Advanced FFmpeg**, al final de esta página) igual o por debajo de tu número de núcleos. La página avisa cuando lo supera |
| Process Priority | Normal | Low mantiene el resto del sistema ágil. High termina antes |

## Calidad de audio por defecto

| Ajuste | Por defecto |
|---|---|
| Default Output Format | M4B (también MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, o Copy para no volver a codificar) |
| Default Sample Rate | Auto, que coincide con el original. O 22050, 44100 o 48000 Hz |
| Default Channels | Auto, que coincide con el original. O Mono o Stereo |

## Opciones de códec

| Formato | Códec | Opciones |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC por defecto) y AAC VBR, calidad de 1 a 5. El bitrate se aplica cuando VBR está desactivado. HE-AAC y HE-AACv2 aparecen en la lista, pero por ahora se codifican como AAC-LC |
| MP3 | LAME | Calidad VBR de 0 a 9 (4 por defecto) y Joint Stereo (activado). El bitrate se aplica cuando VBR está desactivado |
| Opus | libopus | Bitrate variable (activado) y Application: Audio (por defecto), VoIP o Low Delay |
| FLAC | FLAC | Nivel de compresión de 0 a 12 (5 por defecto). El bitrate se ignora |

Un bitrate **Copy** se salta la recodificación y todas las opciones de códec.

## Capítulos

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Default Chapter Behavior | Auto | Los conserva si existen y los genera si no. Otras opciones: solo conservar, generar siempre, ninguno |
| Chapter Naming Format | `Chapter {n}` | Pone nombre a los capítulos que ABM tiene que inventarse. `{n}` es el número y `{title}` el nombre del archivo original. Los títulos de capítulo que vienen de los archivos o de Libex se conservan |
| Silence Detection | desactivado | Experimental. Solo se usa al dividir un libro que no tiene capítulos: ABM lo corta en los silencios. Si está desactivado, esa división falla |
| Minimum Chapter Length | 60 s | El capítulo más corto que crea la detección de silencios |
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
| Retention Period | 7 días | Define la caducidad que se muestra en los elementos de la papelera. Por ahora nada los borra en esa fecha |
| Auto-Empty on Low Disk Space | desactivado | Activa el umbral de abajo |
| Auto-Empty Threshold | 10 | Después de una conversión, si la papelera ocupa más de estos GB, se borran los elementos más antiguos. La página lo muestra como porcentaje, pero se interpreta como GB |
| Delete Original | desactivado | Valor por defecto de cada trabajo, se puede cambiar |
| Update Library Paths | activado | Los registros de los libros siguen a los archivos convertidos |
| Auto-Reformat on Import | desactivado | Convierte los libros recién importados que llegan en otro formato, con los valores por defecto de arriba |
| Backup Original Metadata | desactivado | Antes de convertir, guarda un registro de los archivos originales (nombres, formatos, tamaños) en `.metadata_backup/`, junto a ellos. No guarda las etiquetas de audio |

## FFmpeg avanzado

FFmpeg Path (vacío lo busca en el PATH), Threads Per Job (0 elige automáticamente el número de CPU menos 2), Custom FFmpeg Arguments (se añaden a cada comando; si son incorrectos, las conversiones fallan), Logging Level (error por defecto) y Keep FFmpeg Logs (desactivado).
