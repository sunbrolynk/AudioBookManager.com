---
title: Konvertierungseinstellungen
description: Standards, Codec-Optionen, Kapitel, Metadaten, Papierkorb und ffmpeg.
---

**Settings > Conversions** legt die Standards für [Konvertierungen](/de/using/conversions/) fest. Jeder Job kann davon abweichen.

## Allgemein (General)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Enable Conversions | an | Hauptschalter |
| Conversion Folder | leer | Arbeitsbereich. Leer heißt, der temporäre Ordner des Systems wird genutzt |
| Concurrent Conversions | 2 | In der Oberfläche 1 bis 4. Halt gleichzeitige Jobs mal Threads unter deiner Kernzahl |
| Process Priority | Normal | Low hält den Rest des Systems reaktionsfähig. High ist schneller fertig |

## Standards für die Audioqualität

| Einstellung | Standard |
|---|---|
| Default Output Format | M4B (außerdem MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 oder Copy für keine Neukodierung) |
| Default Sample Rate | Auto, passt sich der Quelle an |
| Default Channels | Auto, passt sich der Quelle an |

## Codec-Optionen

AAC Profile (Standard AAC-LC, außerdem HE-AAC, HE-AACv2) und AAC VBR; MP3-VBR-Qualität und Joint Stereo; FLAC-Kompressionsstufe (Standard 5); Opus mit variabler Bitrate (an) und Anwendungstyp (Standard Audio; VoIP und Low Delay gibt es auch).

## Umgang mit Kapiteln

| Einstellung | Standard | Wirkung |
|---|---|---|
| Default Chapter Behavior | Auto | Behalten, wenn vorhanden, sonst erzeugen. Weitere Optionen: nur behalten, immer erzeugen, keine |
| Chapter Naming Format | `Chapter {n}` | Vorlage für erzeugte Namen |
| Silence Detection | aus | Experimentell. Versucht, Kapitel anhand von Stille zu finden |
| Minimum Chapter Length | 60 s | Für erkannte Kapitel |
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
| Retention Period | 7 Tage | 0 schaltet das automatische Aufräumen ab |
| Auto-Empty on Low Disk Space | aus | Leert den Papierkorb, wenn der Schwellenwert unterschritten wird |
| Auto-Empty Threshold | 10 (%) | Stand des freien Speicherplatzes |
| Delete Original | aus | Standard für jeden Job, lässt sich überschreiben |
| Update Library Paths | an | Die Bucheinträge folgen den konvertierten Dateien |
| Auto-Reformat on Import | aus | Konvertiert neu importierte Bücher, die in einem anderen Format ankommen, mit den Standards oben |
| Backup Original Metadata | aus | Speichert die Original-Tags vorher in einem `.json`-Sidecar |

## Erweitertes FFmpeg

FFmpeg Path (leer heißt, es wird im PATH gesucht), Threads Per Job (0 wählt automatisch die CPU-Anzahl minus 2), Custom FFmpeg Arguments (werden an jeden Befehl angehängt; fehlerhafte lassen Konvertierungen scheitern), Logging Level (standardmäßig error) und Keep FFmpeg Logs (aus).
