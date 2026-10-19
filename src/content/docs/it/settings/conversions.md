---
title: Impostazioni delle conversioni
description: Valori predefiniti, opzioni dei codec, capitoli, metadati, cestino e ffmpeg.
---

**Settings > Conversions** imposta i valori predefiniti per le [Conversioni](/it/using/conversions/). Ogni lavoro può cambiarli.

## Generale

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Enable Conversions | attivo | Interruttore generale |
| Conversion Folder | vuoto | Spazio di lavoro. Se è vuoto usa la cartella temporanea di sistema |
| Concurrent Conversions | 2 | Da 1 a 4 nell'interfaccia. Tieni conversioni simultanee per thread sotto il numero di core |
| Process Priority | Normal | Low lascia reattivo il resto del sistema. High finisce prima |

## Qualità audio predefinita

| Impostazione | Predefinito |
|---|---|
| Default Output Format | M4B (anche MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, oppure Copy per non ricodificare) |
| Default Sample Rate | Auto, che segue la sorgente |
| Default Channels | Auto, che segue la sorgente |

## Opzioni dei codec

AAC Profile (AAC-LC predefinito, HE-AAC, HE-AACv2) e AAC VBR; qualità VBR e joint stereo per MP3; livello di compressione FLAC (5 predefinito); bitrate variabile per Opus (attivo) e tipo di applicazione (Audio predefinito; esistono anche VoIP e Low Delay).

## Gestione dei capitoli

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Default Chapter Behavior | Auto | Li mantiene se ci sono, li genera se non ci sono. Altre scelte: solo mantenere, generare sempre, nessuno |
| Chapter Naming Format | `Chapter {n}` | Modello per i nomi generati |
| Silence Detection | disattivo | Sperimentale. Prova a trovare i capitoli dai silenzi |
| Minimum Chapter Length | 60 s | Per i capitoli rilevati |
| Chapter Image Handling | Keep in file | Oppure rimuoverle, o estrarle in una cartella |

## Gestione dei metadati

| Impostazione | Predefinito |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | attivo (solo JPEG, per Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## Gestione dei file

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Enable Recycle Bin | attivo | Gli originali finiscono nel cestino invece di essere eliminati |
| Recycle Bin Path | vuoto | Se è vuoto usa `/config/recycle/conversions` |
| Retention Period | 7 giorni | 0 disattiva la pulizia automatica |
| Auto-Empty on Low Disk Space | disattivo | Svuota il cestino sotto la soglia |
| Auto-Empty Threshold | 10 (%) | Livello di spazio libero |
| Delete Original | disattivo | Predefinito per ogni lavoro, modificabile |
| Update Library Paths | attivo | I dati dei libri seguono i file convertiti |
| Auto-Reformat on Import | disattivo | Converte i libri appena importati che arrivano in un altro formato, con i valori predefiniti qui sopra |
| Backup Original Metadata | disattivo | Prima salva i tag originali in un sidecar `.json` |

## FFmpeg avanzato

FFmpeg Path (se vuoto lo cerca nel PATH), Threads Per Job (0 sceglie in automatico il numero di CPU meno 2), Custom FFmpeg Arguments (aggiunti a ogni comando; quelli sbagliati fanno fallire le conversioni), Logging Level (error di default) e Keep FFmpeg Logs (disattivo).
