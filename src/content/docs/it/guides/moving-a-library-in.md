---
title: Portare dentro una libreria
description: Porta in ABM una collezione esistente senza rischi.
---

## Prima di iniziare

1. Fai un backup della collezione. Library Import di default copia, ma metti in conto gli errori.
2. Configura una cartella radice e un profilo di qualità, e assicurati che la fonte dei metadati sia raggiungibile.
3. Decidi tra copia, spostamento o hardlink. La copia è la più sicura. L'hardlink risparmia spazio se la libreria è sullo stesso filesystem della sorgente. Vedi [Media Management](/it/settings/media-management/).

## I passaggi

1. **Library > Library Import**, scansiona la cartella.
2. Leggi l'elenco. Le corrispondenze mostrano una percentuale. Sistema le righe **Needs attention** e **Unmatched** con **Find a match**, oppure unisci le righe che sono un unico libro diviso tra più cartelle.
3. Controlla copertina e file extra per cartella solo se vuoi cambiare i valori predefiniti.
4. Seleziona le righe e aggiungile. Se accetti i valori predefiniti restano due clic.
5. Tieni d'occhio il task. Il riepilogo dice quanti file sono stati copiati invece che collegati con hardlink e cosa è fallito.

## Se vuoi che ABM gestisca la cartella sorgente

Aggiungila invece come cartella radice e lascia che ABM la scansioni. Così i file restano dove sono e i libri prendono il loro stato da quello che c'è su disco.

## Da tenere presente

- Un libro che è già in libreria viene mostrato come tale. Rifiuta il duplicato con la risposta keep library invece di importarlo due volte.
- Rifiutare una cartella senza audio rimuove solo quello che appartiene a quella riga, e finisce nel cestino se è attivo.
- Un ASIN trovato in una descrizione è un indizio, non una corrispondenza, a meno che anche il titolo coincida.
- Dopo l'importazione fai un refresh per prendere i metadati aggiornati, e attiva la scrittura dei sidecar se vuoi che Audiobookshelf veda le scelte di ABM. Vedi [File sidecar](/it/using/sidecars/).
