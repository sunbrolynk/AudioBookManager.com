---
title: Gestione dei media (Media Management)
description: Cartelle radice, importazione, file extra, cestino, scansioni, upgrade e permessi.
---

**Settings > Media Management** controlla dove stanno i libri e come entrano i file. Le impostazioni segnate come avanzate compaiono con **Show Advanced**.

## Cartelle radice (Root Folders)

Una cartella radice è una cartella in cui ABM gestisce i libri. Aggiungine una con **Add Root Folder**, che apre un selettore di cartelle in cui puoi anche scrivere il percorso. ABM può anche elencare le cartelle non mappate sotto una radice e importarle. Lo spazio libero e il supporto agli hardlink di una radice vengono verificati quando la aggiungi. Quando rimuovi una radice, ABM ti chiede cosa fare: **Remove from ABM only** (il predefinito) dimentica i libri che contiene e lascia i file, mentre **Delete the books and their files** elimina per sempre tutto quello che c'è sotto il percorso, senza passare dal cestino. Per una radice che contiene libri devi scrivere qualcosa per confermare.

La cartella radice predefinita è quella in cui vanno i nuovi libri, e quella che decide se l'hardlink viene proposto per Library Import.

## Cartelle (Folders)

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Create Empty Book Folders | disattivo | Crea le cartelle dei libri mancanti quando aggiungi, quando cambi cartella radice e durante una scansione del disco. Viene ignorata finché **Delete empty folders** è attivo, così una cartella non viene creata solo per essere rimossa. |
| Delete empty folders | disattivo | Elimina le cartelle dei libri vuote durante una scansione del disco e quando vengono eliminati i file di un libro |

## Importazione (Importing)

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Skip Free Space Check | disattivo | Per quando ABM non riesce a rilevare lo spazio libero su una radice |
| Minimum Free Space | 100 (MB) | Un'importazione che lascerebbe meno di così viene rifiutata |
| Use Hardlinks instead of Copy | attivo | Per i download completati: hardlink invece di copia, così il seeding non raddoppia lo spazio. Serve lo stesso volume. |
| Library Import | Copy | Il predefinito per [Library Import](/it/library-import/): copia, hardlink o spostamento. Hardlink resta disattivato finché la radice predefinita non è stata verificata e lo supporta. |
| Import Extra Files | attivo | Interruttore generale per portare con sé i file non audio. Vale per Library Import, Manual Import e i download completati |
| Extra File Extensions (avanzata) | vuoto | Altri tipi di file da portare con sé, che tengono il loro nome, per esempio `srt, lrc`. Con o senza punto, separati da virgole o spazi. I tipi bloccati, come eseguibili e download parziali, non si possono salvare. Disattivata quando **Import Extra Files** è spento |
| Preferred Cover (avanzata) | Matched | La copertina dell'edizione abbinata, oppure l'immagine migliore della cartella, quando ci sono entrambe |

**Import Extra Files** porta con sé gli altri file di un libro insieme all'audio. Cinque interruttori scelgono quali tipi vengono portati, e un file che corrisponde a **Extra File Extensions** viene portato anche quando il suo tipo è spento:

| Interruttore | Predefinito | Comprende |
|---|---|---|
| Cover art | attivo | Copertina più scansioni del retro e del libretto |
| Book info files | attivo | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | disattivo | I PDF che accompagnano un libro |
| Chapters, transcripts and playlists | attivo | .cue, elenchi di capitoli, sottotitoli, testi, playlist. I nomi dei file al loro interno vengono riscritti con quelli dell'audio rinominato. |
| Audible originals and ebooks | disattivo | .aax/.aaxc, voucher, epub e simili |

I download parziali e gli eseguibili non vengono mai importati. Il `metadata.json` di ABM viene sempre gestito da ABM.

Hardlink non è la stessa cosa di **Use Hardlinks instead of Copy**. Quella vale per i download. Il predefinito di Library Import è solo quello che la finestra Add to Library preseleziona.

## Gestione dei file (File Management)

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Unmonitor Deleted Books | disattivo | Un libro eliminato dal disco smette di essere monitorato |
| Change File Date | None | Cambia le date dei file all'importazione e alla riscansione |
| Enable Recycling Bin | attivo | I file dei libri eliminati vanno in un cestino invece di essere cancellati |
| Recycling Bin | vuoto | Dove sta il cestino. Se è vuoto usa il predefinito di ABM (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (giorni) | 0 disattiva la pulizia automatica |
| Library Scan Interval | 24 | Ore tra una scansione automatica e l'altra |
| Watch for Changes | attivo | Scansiona quando dei file vengono aggiunti, rimossi o modificati |
| Cover Cache Workers | 4 | Quante copertine vengono scaricate insieme quando si mettono in cache le immagini, da 1 a 16 |

## Upgrade di qualità (Quality Upgrades)

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Automatic Upgrade Search | attivo | Cerca periodicamente release migliori dei libri scaricati che sono ancora sotto il loro cutoff. Una copia sostituisce la tua solo quando è un vero upgrade. |
| Upgrade Search Interval | 24 (ore) | Ogni quanto gira |

## Permessi (avanzate)

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Set Permissions | disattivo | Esegue chmod all'importazione e alla rinomina |
| chmod Folder | 755 | Modalità ottale per cartelle e file, senza i bit di esecuzione per i file |
| chown Group | vuoto | Nome del gruppo o gid. Sui file system remoti usa un gid |

## Da tenere presente

- Se il cestino è attivo ma la sua cartella non è disponibile, le eliminazioni che ne hanno bisogno falliscono invece di cancellare per sempre.
- Gli hardlink funzionano solo dentro un unico filesystem. I file che non si possono collegare vengono copiati, mai spostati, e contati nel risultato dell'importazione.

## Book Naming

Book Naming imposta come chiamo file e cartelle. Si salva con l'unico Save della pagina, insieme al resto di Media Management. Ha Rename Books, Replace Illegal Characters, Colon Replacement (con un'opzione personalizzata) e i formati per Standard Book, Author Folder, Series Folder, Standalone Folder e Book Folder. Ogni formato mostra un esempio dal vivo, e un elenco di token mostra tutti quelli che puoi usare.

Library, Series e Authors hanno anche un'azione **Organize** sui libri selezionati, e così la pagina di un singolo libro. Prima apre un'anteprima di ogni modifica, e non si sposta nulla finché non confermi. Poi Organize sposta e rinomina: sposta la cartella di ogni libro dove la mettono le impostazioni di nomenclatura e rinomina i suoi file. Gira come un'attività che puoi seguire, annullare e, dopo un riavvio, riprendere da dove si era fermata. Un solo Organize alla volta. Non c'è un annulla, quindi controlla bene l'anteprima. La rinomina in blocco resta in Library, Series e Authors come **Rename Files**.

Se un Organize viene interrotto, l'esecuzione successiva riparte da dove si era fermata. Un libro che l'esecuzione interrotta aveva già spostato o rinominato sul disco viene ritrovato nella nuova posizione e i suoi record vengono aggiornati, quindi nulla viene spostato due volte. L'anteprima mostra quel libro come già spostato o già rinominato, e il risultato lo conta come riconciliato (reconciled). Un libro viene riconciliato solo quando posso dimostrare che la cartella è sua: i suoi file devono corrispondere a ciò che ho registrato e nessun altro libro deve rivendicare la cartella. Altrimenti il libro viene saltato, con il motivo. Non c'è ancora un annulla.

L'anteprima elenca solo i libri che cambierebbero. Spunta **Show all selected books** per vedere anche gli altri. Si carica a pagine, quindi usa **Load more** per proseguire in una selezione grande. Il titolo dell'anteprima conta quanti libri cambieranno e quanti saranno saltati.

Nella pagina di un libro la cui cartella non è dove la metterebbero le impostazioni di nomenclatura, un avviso lo dice, mostra la cartella in cui andrebbe e c'è un pulsante Organize.

Quando la nuova cartella di un libro starebbe dentro la cartella in cui si trova ora, Organize crea lì la sottocartella e ci sposta solo i file del libro: il suo audio, più copertina, capitoli e gli altri file collegati che tengo per lui. Tutto il resto della cartella resta dov'era. L'anteprima dice «Moves into a subfolder» ed elenca ciò che resta, e la finestra del risultato elenca i file lasciati al loro posto. Se uno spostamento fallisce a metà, i file già spostati vengono rimessi a posto. Spostare la cartella di un libro in una sua sottocartella dalla finestra di modifica funziona allo stesso modo.

Library Import segue le stesse impostazioni di nomenclatura, anche quando aggiunge un libro che si trova già in una cartella radice o sposta file in un libro che ho già. Con Rename Books disattivato, ogni file tiene il nome con cui è arrivato. Un file il cui nome andrebbe in conflitto con un altro file del lotto, o con uno già nella cartella del libro (maiuscole ignorate), prende invece il nome dal formato, e l'importazione annota per quali file l'ha fatto. Con Rename Books attivato, i file che avrebbero lo stesso nome vengono numerati per posizione, così Manual Import non ne salta mai nessuno.

La struttura predefinita è `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Un libro singolo non ha cartella di serie né volume: `Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Anche un libro di serie senza posizione inizia con l'anno. Un anno sconosciuto viene omesso, mai scritto come `(Unknown)`.

Se conosci Sonarr: è il Media Management di Sonarr, formati di nomenclatura inclusi.
