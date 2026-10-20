---
title: Impostazioni delle conversioni
description: Valori predefiniti, opzioni dei codec, capitoli, metadati, cestino e ffmpeg.
---

**Settings > Conversions** imposta i valori predefiniti per le [Conversioni](/it/using/conversions/). Ogni lavoro può cambiarli.

## Generale

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Enable Conversions | attivo | Se è disattivato, creare, accodare in blocco o ritentare una conversione viene rifiutato con HTTP 409, un job già in coda fallisce con un messaggio che lo dice, e **Auto-Reformat on Import** non accoda nulla |
| Conversion Folder | vuoto | Spazio di lavoro. Se è vuoto usa la cartella temporanea di sistema |
| Concurrent Conversions | 2 | Da 1 a 4. Tieni questo valore moltiplicato per **Threads Per Job** pari o inferiore al numero di core. La pagina avvisa quando è più alto |
| Threads Per Job | Auto | Thread FFmpeg per job, nella vista avanzata. Auto lascia due core ad ABM e divide il resto tra i job in esecuzione contemporaneamente, quindi con 8 core e 2 job simultanei fa 3 thread ciascuno. Oppure scegli un numero fisso |
| Process Priority | Normal | Low lascia reattivo il resto del sistema. High finisce prima |

## Qualità audio predefinita

| Impostazione | Predefinito |
|---|---|
| Default Output Format | M4B (anche MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, oppure Copy per non ricodificare) |
| Default Sample Rate | Auto, che non passa nessuna frequenza e lascia decidere a FFmpeg. Oppure 22050, 44100 o 48000 Hz, che ricampiona. Opus accetta solo certe frequenze, quindi 22050 diventa 24000 e 44100 diventa 48000 (lo dice il log) |
| Default Channels | Auto, che mantiene il layout della sorgente. Mono riduce a un solo canale per file più piccoli. Stereo ne forza due |

Le due liste di frequenza e canali accettano solo ciò che offre la pagina. Un valore salvato non valido viene caricato come Auto.

## Opzioni dei codec

| Formato | Encoder | Opzioni |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC di default) e AAC VBR, qualità da 1 a 5. Il bitrate vale quando VBR è disattivato. AAC-LC è l'unico profilo, perché l'encoder non sa fare HE-AAC. Un profilo HE salvato viene caricato come AAC-LC |
| MP3 | LAME | Qualità VBR da 0 a 9 (4 di default) e Joint Stereo (attivo). Il bitrate vale quando VBR è disattivo |
| Opus | libopus | Bitrate variabile (attivo) e Application: Audio (predefinito), VoIP o Low Delay |
| FLAC | FLAC | Livello di compressione da 0 a 12 (5 di default). Il bitrate viene ignorato |

Un bitrate **Copy** salta la ricodifica e tutte le opzioni dei codec.

## Gestione dei capitoli

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Default Chapter Behavior | Auto | Li mantiene se ci sono, li genera se non ci sono. Altre scelte: solo mantenere, generare sempre, nessuno |
| Chapter Naming Format | `Chapter {n}` | Dà il nome ai capitoli che ABM deve inventarsi. `{n}` è il numero e `{title}` il nome del file sorgente. I titoli dei capitoli presi dai file o da Libex restano quelli |
| Silence Detection | disattivo | Per un file senza capitoli, ABM crea i capitoli alle pause più lunghe dell'audio. Lo usano Split Chapters e Ensure Chapters su un singolo file quando Libex non ha capitoli. Se è disattivato, dividere un file così fallisce |
| Target Chapter Length | 600 s | Viene mostrato quando Silence Detection è attivo, da 60 s in su. Ogni capitolo finisce alla pausa più lunga entro metà di questa durata su ciascun lato, o a questa durata se non c'è nessuna pausa. Una breve coda si unisce all'ultimo capitolo, e i capitoli coprono tutto il file |
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
| Retention Period | 7 giorni | Gli elementi più vecchi vengono eliminati dall'attività di pulizia del cestino. 0 li tiene per sempre |
| Auto-Empty When Bin Is Large | disattivo | Attiva la soglia qui sotto |
| Auto-Empty Threshold | 10 GB | Dopo una conversione, se il cestino contiene più di questo, gli elementi più vecchi vengono eliminati |
| Delete Original | disattivo | Predefinito per ogni lavoro, modificabile |
| Update Library Paths | attivo | I dati dei libri seguono i file convertiti |
| Auto-Reformat on Import | disattivo | Converte i libri appena importati che arrivano in un altro formato, con i valori predefiniti qui sopra |
| Backup Original Metadata | disattivo | Prima di convertire, scrive un file JSON in una cartella `.metadata_backup` dentro la cartella del libro. Elenca nome, formato e dimensione di ogni file originale, più i tag e i capitoli incorporati |

## FFmpeg avanzato

FFmpeg Path (se vuoto lo cerca nel PATH), Custom FFmpeg Arguments (aggiunti a ogni comando; quelli sbagliati fanno fallire le conversioni), Logging Level (error di default) e Keep FFmpeg Logs (disattivo).
