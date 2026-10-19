---
title: Conversioni
description: Converti, unisci, dividi e aggiungi capitoli ai file audio, con una coda che puoi mettere in pausa.
---

**Library > Conversions** esegue lavori ffmpeg sulla tua libreria. Ce ne sono quattro tipi:

| Lavoro | Cosa fa |
|---|---|
| Convert Format | Ricodifica in M4B, MP3, M4A, FLAC o Opus |
| Merge Parts | Unisce più file in uno, con i capitoli |
| Split Chapters | Divide un file in un file per capitolo |
| Ensure Chapters | Aggiunge o sistema i marcatori dei capitoli senza ricodificare |

I valori predefiniti di ogni lavoro vengono dalle [impostazioni delle conversioni](/it/settings/conversions/). Ogni lavoro può cambiarli.

## La coda

I lavori aspettano in coda e ne girano al massimo **Concurrent Conversions** alla volta (2 di default). I lavori finiti passano in History, che puoi svuotare.

L'output viene scritto in una cartella di lavoro privata e messo in libreria solo a lavoro finito. Ogni file entra con un nome temporaneo e viene rinominato al suo posto, così un libro scritto a metà non compare mai. Un controllo dello spazio libero gira prima che parta un lavoro e di nuovo prima di sistemare l'output. I file sorgente non vengono mai sovrascritti.

Convertire un file nel formato che ha già viene rifiutato, perché sovrascriverebbe l'originale.

## Dopo una conversione

ABM aggiorna i dati dei file del libro, la dimensione e la qualità, così un libro convertito mostra la sua nuova qualità. Se **Delete Original** è attivo, i vecchi file finiscono nel cestino delle conversioni quando è abilitato.

Se mettere a posto il risultato fallisce (per esempio perché la cartella della libreria è piena), il lavoro fallisce e l'output finito resta nella sua cartella di lavoro. L'errore nomina la cartella. **Retry** fa ripartire il lavoro da capo e butta quell'output conservato, quindi prima ti chiede conferma. **Clear history** tiene i lavori che hanno ancora output non sistemato.

## Pausa e ripresa

:::caution[In arrivo nella prossima release]
La pausa non è ancora in una versione rilasciata.
:::

Due tipi di pausa, nessuno dei due annulla niente:

- **Pause** su un singolo lavoro in corso sospende i suoi processi ffmpeg dove sono. La ripresa continua dallo stesso punto.
- **Pause queue** (in cima alla coda, o nella barra in alto sul telefono) impedisce ai nuovi lavori di partire e sospende tutti quelli in corso.

Un lavoro che hai messo in pausa tu resta in pausa quando la coda riprende, anche dopo un riavvio. Un lavoro in corso quando ABM si ferma torna in pausa e non riparte da solo. La ripresa continua dall'ultima parte finita per unioni, divisioni e conversioni a più file. Una conversione a file singolo ricomincia quel file.

Il limite di 6 ore di esecuzione conta solo il tempo fuori pausa. Se all'avvio lo stato salvato della coda non si riesce a leggere, la coda parte in pausa e te lo dice. Premi Resume queue per riscriverlo.

Se conosci Sonarr: negli arr non c'è niente del genere. Pensalo come una piccola coda di codifica che si trova a vivere dentro il manager.

## Da tenere presente

- Concurrent Conversions moltiplicato per Threads Per Job non dovrebbe superare il numero di core della tua CPU.
- Un file convertito ha una nuova dimensione e una nuova data di modifica, quindi Audiobookshelf lo riscansiona.
- Convertire un file collegato con hardlink a un torrent in seed crea un file nuovo. La copia in seed mantiene i vecchi byte.
