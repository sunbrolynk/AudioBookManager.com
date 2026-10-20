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

Se conosci Sonarr: è il Media Management di Sonarr senza i formati di nomenclatura. I nomi delle cartelle li sceglie ABM. La rinomina in blocco sta in Library, Series e Authors come **Rename Files**.
