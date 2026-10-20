---
title: Konvertierungseinstellungen
description: Standards, Codec-Optionen, Kapitel, Metadaten, Papierkorb und ffmpeg.
---

**Settings > Conversions** legt die Standards für [Konvertierungen](/de/using/conversions/) fest. Jeder Job kann davon abweichen.

## Allgemein (General)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Enable Conversions | an | Ist es aus, wird das Anlegen, Massen-Einreihen oder Wiederholen einer Konvertierung mit HTTP 409 abgelehnt, ein bereits eingereihter Job schlägt mit einer entsprechenden Meldung fehl, und **Auto-Reformat on Import** reiht nichts ein |
| Conversion Folder | leer | Arbeitsbereich. Leer heißt, der temporäre Ordner des Systems wird genutzt |
| Concurrent Conversions | 2 | 1 bis 4. Halt diesen Wert mal **Threads Per Job** bei höchstens deiner Kernzahl. Die Seite warnt, wenn er darüber liegt |
| Threads Per Job | Auto | FFmpeg-Threads pro Job, in der erweiterten Ansicht. Auto lässt zwei Kerne für ABM frei und verteilt den Rest auf die gleichzeitig laufenden Jobs, bei 8 Kernen und 2 gleichzeitigen Jobs also 3 Threads je Job. Oder wähle eine feste Anzahl |
| Process Priority | Normal | Low hält den Rest des Systems reaktionsfähig. High ist schneller fertig |

## Standards für die Audioqualität

| Einstellung | Standard |
|---|---|
| Default Output Format | M4B (außerdem MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256 oder Copy für keine Neukodierung) |
| Default Sample Rate | Auto, das keine Rate übergibt und FFmpeg die Wahl lässt. Oder 22050, 44100 oder 48000 Hz, dann wird umgerechnet. Opus nimmt nur bestimmte Raten, deshalb wird aus 22050 dann 24000 und aus 44100 dann 48000 (das Log sagt es) |
| Default Channels | Auto, das das Layout der Quelle beibehält. Mono mischt auf einen Kanal herunter, für kleinere Dateien. Stereo erzwingt zwei |

Die beiden Listen für Rate und Kanäle nehmen nur an, was die Seite anbietet. Ein ungültiger gespeicherter Wert wird als Auto geladen.

## Codec-Optionen

| Format | Encoder | Optionen |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (standardmäßig AAC-LC) und AAC VBR, Qualität 1 bis 5. Die Bitrate gilt, wenn VBR aus ist. AAC-LC ist das einzige Profil, weil der Encoder kein HE-AAC kann. Ein gespeichertes HE-Profil wird als AAC-LC geladen |
| MP3 | LAME | VBR-Qualität 0 bis 9 (standardmäßig 4) und Joint Stereo (an). Die Bitrate gilt, wenn VBR aus ist |
| Opus | libopus | Variable Bitrate (an) und Application: Audio (Standard), VoIP oder Low Delay |
| FLAC | FLAC | Kompressionsstufe 0 bis 12 (standardmäßig 5). Die Bitrate wird ignoriert |

Eine Bitrate von **Copy** überspringt die Neukodierung und alle Codec-Optionen.

## Umgang mit Kapiteln

| Einstellung | Standard | Wirkung |
|---|---|---|
| Default Chapter Behavior | Auto | Behalten, wenn vorhanden, sonst erzeugen. Weitere Optionen: nur behalten, immer erzeugen, keine |
| Chapter Naming Format | `Chapter {n}` | Benennt die Kapitel, die ABM selbst anlegen muss. `{n}` ist die Nummer und `{title}` der Name der Quelldatei. Kapiteltitel aus den Dateien oder von Libex bleiben erhalten |
| Silence Detection | aus | Für eine Datei ohne Kapitel legt ABM Kapitel an den längsten Pausen im Audio an. Genutzt von Split Chapters und von Ensure Chapters bei einer einzelnen Datei, wenn Libex keine Kapitel hat. Ist es aus, schlägt das Aufteilen so einer Datei fehl |
| Target Chapter Length | 600 s | Wird gezeigt, wenn Silence Detection an ist, ab 60 s. Jedes Kapitel endet an der längsten Pause innerhalb der halben Länge zu beiden Seiten oder bei dieser Länge, wenn es keine Pause gibt. Ein kurzer Rest wird an das letzte Kapitel gehängt, und die Kapitel decken die ganze Datei ab |
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
| Retention Period | 7 Tage | Einträge, die älter sind, löscht die Aufgabe zum Aufräumen des Papierkorbs. 0 behält sie für immer |
| Auto-Empty When Bin Is Large | aus | Schaltet den Schwellenwert darunter ein |
| Auto-Empty Threshold | 10 GB | Hält der Papierkorb nach einer Konvertierung mehr als das, werden die ältesten Einträge gelöscht |
| Delete Original | aus | Standard für jeden Job, lässt sich überschreiben |
| Update Library Paths | an | Die Bucheinträge folgen den konvertierten Dateien |
| Auto-Reformat on Import | aus | Konvertiert neu importierte Bücher, die in einem anderen Format ankommen, mit den Standards oben |
| Backup Original Metadata | aus | Schreibt vor dem Konvertieren eine JSON-Datei in einen Ordner `.metadata_backup` im Ordner des Buchs. Sie listet Name, Format und Größe jeder Originaldatei sowie die darin eingebetteten Tags und Kapitel auf |

## Erweitertes FFmpeg

FFmpeg Path (leer heißt, es wird im PATH gesucht), Custom FFmpeg Arguments (werden an jeden Befehl angehängt; fehlerhafte lassen Konvertierungen scheitern), Logging Level (standardmäßig error) und Keep FFmpeg Logs (aus).
