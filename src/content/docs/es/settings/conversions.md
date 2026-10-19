---
title: Ajustes de conversión
description: Valores por defecto, opciones de códec, capítulos, metadatos, reciclaje y ffmpeg.
---

**Settings > Conversions** define los valores por defecto de las [Conversiones](/es/using/conversions/). Cualquier trabajo puede cambiarlos.

## General

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Enable Conversions | activado | Interruptor general |
| Conversion Folder | vacío | Espacio de trabajo temporal. Vacío usa la carpeta temporal del sistema |
| Concurrent Conversions | 2 | De 1 a 4 en la interfaz. Mantén la concurrencia por los hilos por debajo de tu número de núcleos |
| Process Priority | Normal | Low mantiene el resto del sistema ágil. High termina antes |

## Calidad de audio por defecto

| Ajuste | Por defecto |
|---|---|
| Default Output Format | M4B (también MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, o Copy para no volver a codificar) |
| Default Sample Rate | Auto, que coincide con el original |
| Default Channels | Auto, que coincide con el original |

## Opciones de códec

AAC Profile (AAC-LC por defecto, HE-AAC, HE-AACv2) y AAC VBR; calidad VBR de MP3 y joint stereo; nivel de compresión de FLAC (5 por defecto); bitrate variable de Opus (activado) y tipo de aplicación (Audio por defecto; también existen VoIP y Low Delay).

## Capítulos

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Default Chapter Behavior | Auto | Los conserva si existen y los genera si no. Otras opciones: solo conservar, generar siempre, ninguno |
| Chapter Naming Format | `Chapter {n}` | Plantilla para los nombres generados |
| Silence Detection | desactivado | Experimental. Intenta encontrar capítulos a partir de los silencios |
| Minimum Chapter Length | 60 s | Para los capítulos detectados |
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
| Retention Period | 7 días | 0 desactiva la limpieza automática |
| Auto-Empty on Low Disk Space | desactivado | Vacía la papelera por debajo del umbral |
| Auto-Empty Threshold | 10 (%) | Nivel de espacio libre |
| Delete Original | desactivado | Valor por defecto de cada trabajo, se puede cambiar |
| Update Library Paths | activado | Los registros de los libros siguen a los archivos convertidos |
| Auto-Reformat on Import | desactivado | Convierte los libros recién importados que llegan en otro formato, con los valores por defecto de arriba |
| Backup Original Metadata | desactivado | Antes guarda las etiquetas originales en un archivo auxiliar `.json` |

## FFmpeg avanzado

FFmpeg Path (vacío lo busca en el PATH), Threads Per Job (0 elige automáticamente el número de CPU menos 2), Custom FFmpeg Arguments (se añaden a cada comando; si son incorrectos, las conversiones fallan), Logging Level (error por defecto) y Keep FFmpeg Logs (desactivado).
