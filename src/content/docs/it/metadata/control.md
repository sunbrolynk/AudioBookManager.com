---
title: I tuoi metadati, sotto il tuo controllo
description: Cosa cambia un aggiornamento, cosa controlli tu, e i file e i tag che ABM scrive per il tuo lettore.
---

ABM tiene nel suo database un registro dei metadati della tua libreria, e li riscrive dove il tuo lettore li può usare. Questa pagina spiega cosa controlli tu e cosa tocca un aggiornamento.

## Cosa cambia un aggiornamento

Un aggiornamento (il **Refresh & Scan** di un libro, l'aggiornamento di un autore o di una serie) interroga di nuovo la fonte dei metadati e applica quello che torna. I campi che sovrascrive quando la fonte ha un valore: titolo, sottotitolo, anno e data di uscita, valutazione, durata, lingua, editore, descrizione, autori, narratori, generi e la copertina.

Un campo che la fonte restituisce vuoto resta com'è.

## Cosa controlli tu

- **Una copertina che hai scelto tu.** È bloccata. Vedi [Il blocco della copertina](/it/metadata/cover-lock/).
- **Tag, tag automatici, monitoraggio, scelte del profilo di qualità e i file stessi.** Un aggiornamento non li tocca.
- **Un libro i cui file non si possono leggere.** Viene lasciato del tutto com'è, e la pagina Tasks mostra il perché.

I dettagli del libro come titolo, autori e descrizione arrivano dalla fonte. ABM non permette di modificarli a mano, e non è previsto. Quello che controlli tu è come vengono conservati e dove vengono scritti.

## La finestra di modifica

La finestra di modifica cambia monitoraggio, profilo di qualità, percorso e tag, e ti permette di scrivere file sidecar e tag audio nello stesso passaggio, per un solo libro o per un'intera selezione di serie e autori. Vedi [Libreria](/it/using/library/#la-finestra-di-modifica).

## Sidecar che legge il tuo lettore

ABM scrive `cover.jpg`, un `.opf`, `desc.txt` e `reader.txt` accanto all'audio, e nella prossima release un foglio dei capitoli `.cue`. Audiobookshelf legge l'OPF, la copertina e i file di testo, quindi quello che hai scelto in ABM è quello che mostra il lettore. Vedi [File sidecar](/it/using/sidecars/).

## Tag scritti nell'audio

ABM può scrivere titolo, artista, artista dell'album, album, genere, anno, commento, narratore e copertina incorporata direttamente nei file audio, così i dati viaggiano con il file. È disattivato di default. Scegli i campi in **Settings > Metadata**. Vedi [Impostazioni dei metadati](/it/settings/metadata/).

## Capitoli

ABM confronta i capitoli incorporati nei tuoi file con quelli dell'edizione pubblicata, e può scrivere i capitoli pubblicati nei file senza ricodificarli. Si rifiuta quando la durata del tuo audio mostra che è un'altra edizione. Vedi [Capitoli](/it/using/chapters/). In arrivo nella prossima release.

## Serie e posizione

Un libro porta con sé la sua serie e la posizione. ABM traccia le serie come cataloghi, così può mostrarti quali libri hai e aggiungere quelli che ti mancano. Vedi [Tracciamento delle serie](/it/using/series-tracking/).

## Tag e tag automatici

I tag sono tuoi. I tag automatici li applicano secondo regole (genere, narratore, valutazione, durata e altro), e possono toglierli quando un libro smette di corrispondere. I tag poi guidano profili, notifiche, indexer, liste di importazione e il feed del calendario. Vedi [Tag](/it/settings/tags/).

## Un registro locale che cresce

Tutto quello che ABM scopre su un libro resta nel suo database SQLite in `/config`, compresi i libri che rimuovi in seguito. Fai il backup di quella cartella e hai il backup del registro. Una volta che un libro è dentro, i metadati non dipendono dal fatto che la fonte sia raggiungibile.

:::caution[In arrivo nella prossima release]
È prevista una **Local Metadata Library** dedicata: una copia facoltativa di tutto quello che ABM ha mai cercato, conservata anche dopo che un libro esce dalla tua libreria, con i suoi backup pianificati e un download in SQLite. La sezione della pagina Metadata per questa funzione c'è nel lavoro non ancora unito ed è segnata come anteprima, non ancora collegata.
:::

## Pianificazione degli aggiornamenti

- Discover ha la sua pianificazione. Vedi [Impostazioni di Discover](/it/settings/discover/).
- La libreria Audible ha la sua pianificazione di sincronizzazione. Vedi [Impostazioni Audible](/it/settings/audible/).
- Una scansione della libreria può girare ogni N ore e quando cambiano i file. Vedi [Media Management](/it/settings/media-management/).
- La scrittura di sidecar e tag durante l'aggiornamento è controllata da **Create on Refresh** e **Write Tags on Refresh**.
