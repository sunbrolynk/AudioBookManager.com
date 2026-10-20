---
title: Capitoli
description: Confronta i capitoli incorporati di un libro con Libex e sistemali.
---

:::caution[In arrivo in una release successiva]
Tutto quello che c'è in questa pagina, tranne i valori predefiniti delle conversioni, non è ancora in una versione rilasciata.
:::

La pagina di dettaglio di un libro mostra i capitoli che ha Libex accanto ai capitoli davvero incorporati nei tuoi file. Libex è il riferimento. La domanda a cui risponde la vista è se i tuoi file contengono quello che Libex dice che dovrebbero contenere.

## Leggere il confronto

Ogni capitolo di Libex riceve un badge, un'icona più una parola:

- **Matches**: un capitolo incorporato inizia entro 2 secondi e il titolo è lo stesso, ignorando maiuscole, accenti e punteggiatura alle estremità. "Chapter 1" e "Chapter One" sono titoli diversi.
- **Differs**: il titolo è diverso, oppure il titolo c'è lì vicino ma inizia a più di 2 secondi di distanza.
- **Missing**: niente di incorporato gli corrisponde.
- **Extra**: un capitolo incorporato a cui non corrisponde nessun capitolo di Libex.

I libri a più file vengono messi uno dopo l'altro su un'unica timeline, in ordine di nome file. Un capitolo che continua in un altro file come "(cont.)" viene letto come un unico capitolo. Se Libex non è raggiungibile, vedi l'elenco incorporato e una riga che spiega perché. La pagina non va mai in errore.

## Edizione sbagliata

I tempi di Libex vanno bene solo per l'edizione che descrivono. Se la durata del tuo audio è diversa da quella di Libex di più di 15 secondi o dello 0,5 percento, quale dei due è maggiore, compare un avviso e sia **Update** sia **Create .cue** vengono bloccati. Non c'è modo di forzarli.

## Aggiornare i capitoli incorporati

Sostituisce i capitoli in ogni file audio con quelli di Libex. Gira come lavoro sui capitoli nella [coda delle conversioni](/it/using/conversions/), senza ricodifica. Viene proposto solo quando il confronto dice "differs" o "no embedded chapters".

- Ogni file viene riscritto in un file temporaneo, verificato e poi messo al suo posto. La verifica richiede che sia leggibile, non più corto dell'originale di oltre 0,5 secondi o dell'1 percento, con lo stesso codec, e che contenga esattamente il numero di capitoli richiesto. Se la verifica fallisce, resta l'originale.
- Se un lavoro si ferma a metà, i file già riscritti restano riscritti. L'errore dice "N of M files already updated". Lancia di nuovo Update dopo aver risolto la causa.
- Rifiutato in partenza se: c'è già un'altra conversione in corso per il libro, manca l'ASIN o mancano i capitoli di Libex, l'edizione è sbagliata, un file è illeggibile, o non c'è niente da aggiornare.

## Creare un file .cue (Create .cue)

Scrive un cue sheet dai capitoli di Libex nella cartella del libro, con il nome del primo file audio. Sovrascrive un file esistente con quel nome. Vedi [File sidecar](/it/using/sidecars/).

## Da tenere presente

- I file MP3 VBR senza header di durata hanno una durata stimata. Un'edizione corretta può sembrare sfasata di qualche secondo.
- Un file riscritto sembra modificato ad Audiobookshelf, che lo riscansiona.
- I titoli dei capitoli che contengono `=`, `;`, `#` o una barra rovesciata potrebbero venire scritti male finché non arriva una correzione.

## Il comportamento predefinito dei capitoli nelle conversioni

Separato da quanto sopra: **Settings > Conversions > Chapter Handling** decide cosa fa una conversione con i capitoli. Vedi [Impostazioni delle conversioni](/it/settings/conversions/).
