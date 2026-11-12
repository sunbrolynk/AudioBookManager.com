---
title: Libreria
description: Libri, autori e serie, e come ABM tiene traccia del loro stato.
---

Il menu **Library** ha tre elenchi: **Books**, **Series** e **Authors**. **Add New** e **Library Import** ci mettono dentro le cose. **Audible Library** e **Conversions** hanno le loro pagine.

## Libri

Ogni libro è una riga in vista Overview, un poster o una riga di tabella (il selettore della vista è nella barra degli strumenti). Un libro ha uno stato:

- **Wanted**: monitorato, ancora senza file. ABM lo cerca.
- **Downloaded**: i file sono su disco.
- **Missing Files**: il libro è stato scaricato, ma i suoi file non sono più dove ABM se li aspetta.
- **Unmonitored**: ABM lo lascia stare.

Apri un libro per la sua pagina di dettaglio: file, metadati, cronologia, la qualità misurata da ABM, e azioni come Refresh & Scan e la finestra di modifica (vedi sotto). Vedi [File sidecar](/it/using/sidecars/).

La pagina di dettaglio può anche scrivere un singolo file (OPF, NFO o metadata.json), i tag audio, la copertina incorporata o **Write All**. Sul telefono si trovano nel foglio Actions, sotto **Write to folder and files**.

Quando la barra degli strumenti di una pagina è troppo stretta sul desktop, i pulsanti che non ci stanno passano in un menu **More** in fondo al loro gruppo. Ordinamento, filtro e vista restano sempre nella barra.

Se conosci Sonarr: un libro è un episodio, una serie è stagione e show insieme, e un autore è un modo per raggrupparli entrambi. La differenza è che un libro può appartenere a più serie, e ABM usa quella principale (la posizione più bassa) quando deve sceglierne una.

## Serie

**Library > Series** elenca tutte le serie con quanti libri hai, quanti sono cercati e quanti hanno file mancanti, in vista Overview o Posters. La pagina di una serie mostra tutto il catalogo, compresi i libri che non hai. Puoi filtrarla su All, In Library o Not in Library. **Add Remaining** o **Select to Add** portano dentro i libri mancanti come cercati (wanted), e **Refresh Series** riscarica il catalogo. **Monitor New Books** (All o None) decide se i libri che usciranno più avanti vengono aggiunti come cercati. Vedi [Tracciamento delle serie](/it/using/series-tracking/).

## Autori

**Library > Authors** elenca gli autori, in vista Overview o Posters. La pagina di un autore mostra il suo catalogo raggruppato per serie, con i conteggi dei libri scaricati e totali per ogni serie, più il suo profilo di qualità, i generi e la valutazione. **Refresh Catalog** riscarica il catalogo e **Search Author** cerca i suoi libri cercati. **Monitor New Books** funziona come per una serie, e un autore parte da None.

Eliminare una serie o un autore viene rifiutato finché ha ancora libri in libreria. Rimuovi prima i libri.

## Ereditarietà del profilo di qualità

Il profilo di qualità di un libro viene, in quest'ordine, da: la sua impostazione specifica, la sua serie principale, il suo autore principale, e infine il profilo predefinito. Vedi [Profili](/it/settings/profiles/).

## La finestra di modifica

La finestra di modifica di un libro cambia le impostazioni di ABM per quel libro, non i suoi metadati:

- **Monitored**
- **Quality Profile** (No Change quando ne modifichi più di uno)
- **Path**, per un solo libro (con un pulsante per ricalcolarlo), oppure **Root Folder** per una selezione
- **Tags**
- **Audiobookshelf**: la casella **Write All** spunta tutte le caselle qui sotto, così un solo salvataggio scrive tutti i file che legge Audiobookshelf
- **Write to Directories**: cover.jpg, desc.txt, reader.txt, un OPF, un NFO e metadata.json. L'OPF e l'NFO hanno il nome del primo file audio del libro (per esempio `Dune.opf`), o del libro se non c'è audio
- **Write to Audio Files**: **Write audio tags** e **Embed cover art**, che scrive la copertina nei file audio

La stessa finestra si apre per serie e autori e si applica a ognuno dei loro libri. Le opzioni di scrittura partono quando salvi. Per ogni libro si scrivono prima i file della cartella, poi i tag, poi la copertina incorporata. Un file per cui il libro non ha niente (nessuna descrizione, nessun narratore, nessuna copertina) viene saltato e non conta come errore. Con un libro o una selezione di libri vedi un avviso al salvataggio. Con una serie o un autore viene saltato in silenzio.

## Tag

Libri, autori e serie possono avere tag. I tag guidano indexer, notifiche, liste di importazione e profili, e filtrano il feed del calendario. Vedi [Tag](/it/settings/tags/).

## Selezione

Seleziona delle righe per agire su più elementi insieme: monitorare, cercare, taggare, rinominare, eliminare. Per il telefono, vedi [Usarlo dal telefono](/it/phone/).
