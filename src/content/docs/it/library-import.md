---
title: Importare una libreria (Library Import)
description: Porta in ABM una collezione esistente con l'Import Workbench.
---

Library Import scansiona una cartella di audiolibri, abbina ogni cartella ai metadati e aggiunge i libri alla tua libreria. La pagina si chiama **Match Audiobooks**.

## Il flusso

1. Scansiona una cartella. Ogni cartella con dell'audio diventa una riga.
2. Controlla le corrispondenze. Sistema quelle che ne hanno bisogno.
3. Seleziona le righe e aggiungile alla libreria.

Ogni opzione è una modifica facoltativa di un valore predefinito in Media Management. Una semplice scansione seguita dall'aggiunta non richiede mai più di due clic.

## Leggere l'elenco

- Il riepilogo mostra quante cartelle sono state trovate e quante sono state abbinate. Puoi filtrare l'elenco per All, Matched, Needs attention, Unmatched, In library o Failed lookup. Il filtro resta nell'indirizzo della pagina.
- Ogni riga mostra copertina, titolo, autore e serie, e quanto è sicura la corrispondenza in percentuale, per esempio "95% match". Nei dettagli della cartella trovi **Find a match** o **Change match** per cercare a mano.
- Quando i file non hanno un ASIN o una durata per confermare l'edizione, i dettagli della cartella te lo dicono.
- **Rescan** trova le cartelle aggiunte dopo la scansione e mantiene le tue scelte.

Un ASIN trovato in un commento o in una descrizione è solo un indizio. Conta come corrispondenza solo quando anche il titolo coincide con il nome della cartella. Solo il tag ASIN dedicato conta da solo.

## Unire, dividere e aggiungere

- Unisci le righe che sono un unico libro diviso tra più cartelle. Puoi dividerle di nuovo dai dettagli della cartella.
- L'aggiunta viene bloccata con un motivo mostrato sopra il pulsante, per esempio "Select at least one folder" o "2 selected rows still need a decision".
- Tutto quello che rimuoverebbe o sostituirebbe dei file ti chiede prima conferma.
- Se lasci la pagina, le modifiche in sospeso vengono salvate.

## Copia, spostamento o hardlink

**Settings > Media Management > Importing** imposta il valore predefinito per Library Import: copia (predefinito), spostamento o hardlink. Per ogni importazione puoi sceglierne un altro.

Un libro collegato con hardlink non occupa spazio in più su disco e l'originale resta dov'è. L'hardlink richiede che la cartella radice predefinita lo supporti e che sia stata verificata prima. Altrimenti l'opzione è disattivata, con il motivo. Un file che non si può collegare, per esempio uno su un altro disco, viene copiato e mai spostato. A importazione finita ti dice quanti file sono stati copiati.

## File extra

**Import Extra Files** (attivo di default) porta con sé copertina, note e gli altri file non audio di un libro. Vale allo stesso modo per Library Import, Manual Import e download completati. Con **Show Advanced**, **Preferred Cover** sceglie la copertina Audible abbinata (predefinito) o quella della cartella.

## Valori lunghi

Un narratore, un titolo o un percorso tagliato con i puntini di sospensione si apre per intero quando lo tocchi o premi Invio o Spazio. Toccalo di nuovo per chiuderlo.

## Risposte diverse dall'importazione

A una riga puoi rispondere anche **keep library** (rifiuta la copia di un libro che la libreria ha già) o **remove empty** (rifiuta una cartella senza audio che contiene ancora immagini e sidecar). Queste risposte eliminano solo quello che appartiene alla riga. Tutto ciò che contiene audio viene rifiutato. I file finiscono nel cestino se ne hai impostato uno, e il log del task elenca ogni percorso rimosso.

## Copertina e file extra per cartella

L'ispettore mostra la copertina della cartella accanto a quella dell'edizione abbinata, ognuna con la sua dimensione in pixel. Con un clic scegli l'altra. Sotto, **Extra files** elenca tutti gli altri file sotto il nome dell'interruttore di Media Management che seguono. Un pallino segna una scelta diversa dalle impostazioni, e **Apply this cover and these file choices to the N other selected** copia le scelte di una cartella sulle altre. Una riga che aggiunge file a un libro già in libreria non ha il selettore.

Vedi anche [Portare dentro una libreria](/it/guides/moving-a-library-in/) e [Media Management](/it/settings/media-management/).
