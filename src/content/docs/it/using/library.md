---
title: Libreria
description: Libri, autori e serie, e come ABM tiene traccia del loro stato.
---

Il menu **Library** ha tre elenchi: **Books**, **Series** e **Authors**. **Add New** e **Library Import** ci mettono dentro le cose. **Audible Library** e **Conversions** hanno le loro pagine.

## Libri

Ogni libro è una riga, un poster o una riga di tabella (il selettore della vista è nella barra degli strumenti). Un libro ha uno stato:

- **Wanted**: monitorato, ancora senza file. ABM lo cerca.
- **Downloaded**: i file sono su disco.
- **Missing Files**: il libro è stato scaricato, ma i suoi file non sono più dove ABM se li aspetta.
- **Unmonitored**: ABM lo lascia stare.

Apri un libro per la sua pagina di dettaglio: file, metadati, cronologia, la qualità misurata da ABM, e azioni come Refresh & Scan e la finestra di modifica (vedi sotto). Vedi [File sidecar](/it/using/sidecars/).

Se conosci Sonarr: un libro è un episodio, una serie è stagione e show insieme, e un autore è un modo per raggrupparli entrambi. La differenza è che un libro può appartenere a più serie, e ABM usa quella principale (la posizione più bassa) quando deve sceglierne una.

## Serie e autori

Gli elenchi Series e Authors mostrano quanti libri hai, quanti sono cercati e quanti hanno file mancanti. Aprine uno per vedere il catalogo, che comprende anche i libri che non hai. Da lì puoi aggiungere quelli che mancano. Vedi [Tracciamento delle serie](/it/using/series-tracking/).

Eliminare una serie o un autore viene rifiutato finché ha ancora libri in libreria. Rimuovi prima i libri.

## Ereditarietà del profilo di qualità

Il profilo di qualità di un libro viene, in quest'ordine, da: la sua impostazione specifica, la sua serie principale, il suo autore principale, e infine il profilo predefinito. Vedi [Profili](/it/settings/profiles/).

## La finestra di modifica

La finestra di modifica di un libro cambia le impostazioni di ABM per quel libro, non i suoi metadati:

- **Monitored**
- **Quality Profile** (No Change quando ne modifichi più di uno)
- **Path**, per un solo libro (con un pulsante per ricalcolarlo), oppure **Root Folder** per una selezione
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt e un OPF (la casella dice "metadata.opf"; il file prende il nome dal primo file audio del libro, per esempio `Dune.opf`, oppure `title.opf` quando non c'è audio)
- **Write to Audio Files**: scrive i tag dei metadati

La stessa finestra si apre per serie e autori e si applica a ognuno dei loro libri. Le opzioni di scrittura partono quando salvi.

## Tag

Libri, autori e serie possono avere tag. I tag guidano indexer, notifiche, liste di importazione e profili, e filtrano il feed del calendario. Vedi [Tag](/it/settings/tags/).

## Selezione

Seleziona delle righe per agire su più elementi insieme: monitorare, cercare, taggare, rinominare, eliminare. Per il telefono, vedi [Usarlo dal telefono](/it/phone/).
