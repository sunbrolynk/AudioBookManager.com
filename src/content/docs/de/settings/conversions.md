---
title: Konvertierungseinstellungen
description: Standards, Codec-Optionen, Kapitel, Metadaten, Papierkorb und ffmpeg.
---

**Settings > Conversions** legt die Standards für [Konvertierungen](/de/using/conversions/) fest. Jeder Job kann davon abweichen.

## Allgemein (General)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Enable Conversions | an | Schaltet das Konvertieren auf der Seite Conversions ab. **Auto-Reformat on Import** ist davon getrennt |
| Conversion Folder | leer | Arbeitsbereich. Leer heißt, der temporäre Ordner des Systems wird genutzt |
| Concurrent Conversions | 2 | 1 bis 4. Halt diesen Wert mal **Threads Per Job** (unter **Advanced FFmpeg** unten auf dieser Seite) bei höchstens deiner Kernzahl. Die Seite warnt, wenn er darüber liegt |
| Process Priority | Normal | Low hält den Rest des Systems reaktionsfähig. High ist schneller fertig |

## Standards für die Audioqualität

| Einstellung | Standard |
|---|---|
| Default Output Format | M4B (außerdem MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 oder Copy für keine Neukodierung) |
| Default Sample Rate | Auto, passt sich der Quelle an. Oder 22050, 44100 oder 48000 Hz |
| Default Channels | Auto, passt sich der Quelle an. Oder Mono oder Stereo |

## Codec-Optionen

| Format | Encoder | Optionen |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (standardmäßig AAC-LC) und AAC VBR, Qualität 1 bis 5. Die Bitrate gilt, wenn VBR aus ist. HE-AAC und HE-AACv2 stehen zur Auswahl, werden derzeit aber als AAC-LC kodiert |
| MP3 | LAME | VBR-Qualität 0 bis 9 (standardmäßig 4) und Joint Stereo (an). Die Bitrate gilt, wenn VBR aus ist |
| Opus | libopus | Variable Bitrate (an) und Application: Audio (Standard), VoIP oder Low Delay |
| FLAC | FLAC | Kompressionsstufe 0 bis 12 (standardmäßig 5). Die Bitrate wird ignoriert |

Eine Bitrate von **Copy** überspringt die Neukodierung und alle Codec-Optionen.

## Umgang mit Kapiteln

| Einstellung | Standard | Wirkung |
|---|---|---|
| Default Chapter Behavior | Auto | Behalten, wenn vorhanden, sonst erzeugen. Weitere Optionen: nur behalten, immer erzeugen, keine |
| Chapter Naming Format | `Chapter {n}` | Benennt die Kapitel, die ABM selbst anlegen muss. `{n}` ist die Nummer und `{title}` der Name der Quelldatei. Kapiteltitel aus den Dateien oder von Libex bleiben erhalten |
| Silence Detection | aus | Experimentell. Wird nur genutzt, wenn ein Buch ohne Kapitel aufgeteilt wird: ABM teilt es an Stellen mit Stille. Ist sie aus, schlägt so ein Aufteilen fehl |
| Minimum Chapter Length | 60 s | Das kürzeste Kapitel, das die Stilleerkennung anlegt |
| Chapter Image Handling | Keep in file | Oder entfernen, oder in einen Ordner extrahieren |

## Umgang mit Metadaten

| Einstellung | Standard |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | an (nur JPEG, für Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Dateiverwaltung

| Einstellung | Standard | Wirkung |
|---|---|---|
| Enable Recycle Bin | an | Originale kommen in den Papierkorb, statt gelöscht zu werden |
| Recycle Bin Path | leer | Leer heißt, `/config/recycle/conversions` wird genutzt |
| Retention Period | 7 Tage | Legt das Ablaufdatum fest, das bei Einträgen im Papierkorb angezeigt wird. An dem Datum löscht sie bisher noch nichts |
| Auto-Empty on Low Disk Space | aus | Schaltet den Schwellenwert darunter ein |
| Auto-Empty Threshold | 10 | Wenn der Papierkorb nach einer Konvertierung mehr als so viele GB enthält, werden die ältesten Einträge gelöscht. Die Seite zeigt den Wert als Prozent an, gelesen wird er aber als GB |
| Delete Original | aus | Standard für jeden Job, lässt sich überschreiben |
| Update Library Paths | an | Die Bucheinträge folgen den konvertierten Dateien |
| Auto-Reformat on Import | aus | Konvertiert neu importierte Bücher, die in einem anderen Format ankommen, mit den Standards oben |
| Backup Original Metadata | aus | Speichert vor dem Konvertieren eine Aufstellung der Originaldateien (Namen, Formate, Größen) in `.metadata_backup/` daneben. Die Audio-Tags speichert es nicht |

## Erweitertes FFmpeg

FFmpeg Path (leer heißt, es wird im PATH gesucht), Threads Per Job (0 wählt automatisch die CPU-Anzahl minus 2), Custom FFmpeg Arguments (werden an jeden Befehl angehängt; fehlerhafte lassen Konvertierungen scheitern), Logging Level (standardmäßig error) und Keep FFmpeg Logs (aus).
