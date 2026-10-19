---
title: Impostazioni delle conversioni
description: Valori predefiniti, opzioni dei codec, capitoli, metadati, cestino e ffmpeg.
---

**Settings > Conversions** imposta i valori predefiniti per le [Conversioni](/it/using/conversions/). Ogni lavoro può cambiarli.

## Generale

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Enable Conversions | attivo | Disattiva le conversioni nella pagina Conversions. **Auto-Reformat on Import** è a parte |
| Conversion Folder | vuoto | Spazio di lavoro. Se è vuoto usa la cartella temporanea di sistema |
| Concurrent Conversions | 2 | Da 1 a 4. Tieni questo valore per **Threads Per Job** (in **Advanced FFmpeg**, in fondo a questa pagina) uguale o sotto il numero di core. La pagina ti avvisa quando è più alto |
| Process Priority | Normal | Low lascia reattivo il resto del sistema. High finisce prima |

## Qualità audio predefinita

| Impostazione | Predefinito |
|---|---|
| Default Output Format | M4B (anche MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, oppure Copy per non ricodificare) |
| Default Sample Rate | Auto, che segue la sorgente. Oppure 22050, 44100 o 48000 Hz |
| Default Channels | Auto, che segue la sorgente. Oppure Mono o Stereo |

## Opzioni dei codec

| Formato | Encoder | Opzioni |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC di default) e AAC VBR, qualità da 1 a 5. Il bitrate vale quando VBR è disattivo. HE-AAC e HE-AACv2 sono in elenco ma per ora codificano come AAC-LC |
| MP3 | LAME | Qualità VBR da 0 a 9 (4 di default) e Joint Stereo (attivo). Il bitrate vale quando VBR è disattivo |
| Opus | libopus | Bitrate variabile (attivo) e Application: Audio (predefinito), VoIP o Low Delay |
| FLAC | FLAC | Livello di compressione da 0 a 12 (5 di default). Il bitrate viene ignorato |

Un bitrate **Copy** salta la ricodifica e tutte le opzioni dei codec.

## Gestione dei capitoli

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Default Chapter Behavior | Auto | Li mantiene se ci sono, li genera se non ci sono. Altre scelte: solo mantenere, generare sempre, nessuno |
| Chapter Naming Format | `Chapter {n}` | Dà il nome ai capitoli che ABM deve inventarsi. `{n}` è il numero e `{title}` il nome del file sorgente. I titoli dei capitoli presi dai file o da Libex restano quelli |
| Silence Detection | disattivo | Sperimentale. Si usa solo quando dividi un libro che non ha capitoli: ABM lo divide nei punti di silenzio. Se è disattivo, una divisione del genere fallisce |
| Minimum Chapter Length | 60 s | Il capitolo più corto che crea il rilevamento dei silenzi |
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
| Retention Period | 7 giorni | Imposta la scadenza mostrata sugli elementi nel cestino. Per ora niente li elimina in quella data |
| Auto-Empty on Low Disk Space | disattivo | Attiva la soglia qui sotto |
| Auto-Empty Threshold | 10 | Dopo una conversione, se il cestino contiene più di questi GB, gli elementi più vecchi vengono eliminati. La pagina lo mostra come percentuale, ma viene letto come GB |
| Delete Original | disattivo | Predefinito per ogni lavoro, modificabile |
| Update Library Paths | attivo | I dati dei libri seguono i file convertiti |
| Auto-Reformat on Import | disattivo | Converte i libri appena importati che arrivano in un altro formato, con i valori predefiniti qui sopra |
| Backup Original Metadata | disattivo | Prima di convertire salva un elenco dei file originali (nomi, formati, dimensioni) in `.metadata_backup/` accanto a loro. Non salva i tag audio |

## FFmpeg avanzato

FFmpeg Path (se vuoto lo cerca nel PATH), Threads Per Job (0 sceglie in automatico il numero di CPU meno 2), Custom FFmpeg Arguments (aggiunti a ogni comando; quelli sbagliati fanno fallire le conversioni), Logging Level (error di default) e Keep FFmpeg Logs (disattivo).
