---
title: Importare una libreria (Library Import)
description: Porta in ABM una collezione esistente con l'Import Workbench.
---

Library Import scansiona una cartella di audiolibri, abbina ogni cartella ai metadati e aggiunge i libri alla tua libreria. **Library > Library Import** apre "Import audiobooks you already have", dove scegli una cartella da scansionare. Quando la scansione parte, ABM passa alla pagina degli abbinamenti, intitolata **Match Audiobooks**, dove controlli le corrispondenze e aggiungi i libri.

## Il flusso

1. Scansiona una cartella. Ogni cartella con dell'audio diventa una riga.
2. Controlla le corrispondenze. Sistema quelle che ne hanno bisogno.
3. Spunta le righe che vuoi, poi aggiungile alla libreria o eliminale.

Ogni opzione è una modifica facoltativa di un valore predefinito in Media Management.

## Quando una corrispondenza viene accettata

La scansione accetta una corrispondenza solo quando i file la confermano:

- l'ASIN nei tag dei file stessi trova il libro, oppure
- la durata del libro è entro tre minuti da quella dei file, e la sua posizione nella serie o il suo titolo corrisponde.

Un autore o una posizione nella serie che contraddice i file esclude un libro. Se i file si adattano ugualmente bene a due libri o registrazioni diversi, non ne viene accettato nessuno.

La durata dei file conta solo quando è stato possibile leggere ogni file del libro. Se uno non si può misurare, la riga non ha durata: solo il suo ASIN può confermare un abbinamento, altrimenti il libro aspetta sotto **Needs a look**.

Quando un libro è in due formati, ogni formato è una riga a sé e viene misurato per conto suo. Un libro diviso in parti di formati diversi è una sola riga quando ha una cartella sua, e le sue parti vengono sommate. Un download completato con un libro in due formati viene misurato come una sola copia, e non ha una durata su cui abbinarlo se la durata delle copie differisce di più di tre minuti.

In base alla durata viene accettata solo un'edizione in inglese, o una la cui scheda non indica la lingua. Un'edizione in un'altra lingua viene accettata solo quando la trova l'ASIN dei file stessi. Un libro con risposta presa dall'[archiviazione locale](/it/settings/metadata/) invece che da una ricerca dal vivo non viene mai accettato senza di te.

Quando una delle ricerche di una riga fallisce, viene accettato solo un abbinamento per ASIN. Un libro trovato solo cercando l'autore viene proposto solo quando la sua durata corrisponde a quella dei file, quindi un libro senza scheda mostra **Unmatched** invece di suggerire un altro libro dell'autore.

Ogni altra corrispondenza viene comunque proposta come suggerimento, ma la riga conta sotto **Needs a look**, parte senza spunta e **Select All** la salta finché non confermi quella corrispondenza o ne scegli un'altra. Una corrispondenza accettata con un libro che hai già in libreria conta sotto **In library**. Una riga **Needs a look** il cui suggerimento è un libro della libreria fa la sua domanda sulla libreria solo quando confermi quell'abbinamento. Fino ad allora, se la spunti, blocca Add come una riga che ha ancora bisogno di una decisione.

Un libro in più file sciolti che condividono una cartella con altri libri, come una cartella dell'autore o la cartella che scansioni, è una sola riga con tutte le parti. I file che differiscono per un numero di libro o di volume restano righe separate. Le parti sono raggruppate per formato: un file con il libro intero accanto è una riga a sé, e un bitrate nel nome di un file, come `128kbps`, non è un numero di parte.

Due formati dello stesso libro, come `Book.mp3` e `Book.m4b`, sono righe separate, sia che i file stiano sciolti nella cartella che scansioni sia in una cartella del libro tutta loro. Ogni riga importa, rimuove e misura solo il proprio file. Una copertina, un cue o un altro file non audio con lo stesso nome va con il file del libro quando il libro è lì in un solo formato, e resta dov'è quando è lì in due. Vale anche quando una copia viene spostata nella libreria e l'altra viene rimossa nella stessa importazione.

Un tag scritto come `Title: Series, Book 2` viene letto come titolo, serie e posizione.

Una posizione nella serie scritta come intervallo, come `1-3`, corrisponde a qualsiasi posizione al suo interno. Due numeri scritti in qualunque altro modo, come `1, 3`, valgono come nessuna posizione.

Un tag di titolo, album, serie, parte della serie, artista, artista dell'album, compositore o narratore più lungo di 500 caratteri viene ignorato.

**Recent Import Sessions** nella pagina Library Import mostra per ogni scansione quante righe hanno una corrispondenza, contando i libri già in libreria, e quante sono in sospeso, contando le righe in cui devi ancora scegliere una corrispondenza.

## Leggere l'elenco

- Il riepilogo mostra quante cartelle sono state trovate e quante sono pronte. La barra in alto ha **Sort** (Folder name, Status, Title, Author, Series, Files) e **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Ogni filtro mostra il suo conteggio, e i conteggi corrispondono al riepilogo. Un abbinamento che hai confermato si chiama Ready. Ordinamento e filtro vengono ricordati su questo dispositivo. Non restano nell'indirizzo della pagina, quindi un link con `?sort=` o `?filter=` non li porta con sé.
- Ogni riga mostra copertina, titolo, autore e serie, e quanto è sicura la corrispondenza in percentuale, per esempio "95% match". Nei dettagli della cartella trovi **Find a match** o **Change match** per cercare a mano. La ricerca mostra ogni libro che Libex trova.
- Quando i file non hanno un ASIN o una durata per confermare l'edizione, i dettagli della cartella te lo dicono.
- **Rescan** trova le cartelle aggiunte dopo la scansione e mantiene le tue scelte.

Un ASIN trovato in un commento o in una descrizione è solo un indizio. Conta come corrispondenza solo quando anche il titolo coincide con il nome della cartella. Solo il tag ASIN dedicato conta da solo.

## Unire, dividere e aggiungere

- Unisci le righe che sono un unico libro diviso tra più cartelle. Puoi dividerle di nuovo dai dettagli della cartella. L'abbinamento della riga unita è solo un suggerimento: conta sotto **Needs a look** e parte senza spunta finché non lo confermi o ne scegli un altro. La sua durata è il totale delle parti solo quando ogni parte ne ha una, e mantiene un ASIN solo quando tutte le parti danno lo stesso. Un libro unito da due formati con gli stessi nomi di file conta una volta sola: prende la durata del formato più lungo, o nessuna se differiscono di più di tre minuti o se una delle righe unite contiene già entrambi i formati. Anche una ricerca che finisce dopo che hai unito o diviso la sua riga è solo un suggerimento.
- **Confirm match** nei dettagli di una riga spunta una riga **Needs a look**, e **Undo confirmation** toglie di nuovo la spunta.
- L'aggiunta viene bloccata con un motivo mostrato sopra il pulsante, per esempio "Select at least one folder" o "2 selected rows still need a decision". L'aggiunta viene rifiutata anche, senza toccare nulla, quando due righe rivendicano la stessa cartella o lo stesso file.
- Tutto quello che rimuoverebbe o sostituirebbe dei file ti chiede prima conferma.
- Se lasci la pagina, le modifiche in sospeso vengono salvate.

## Copia, spostamento o hardlink

**Settings > Media Management > Importing** imposta il valore predefinito per Library Import: copia (predefinito), spostamento o hardlink. Per ogni importazione puoi sceglierne un altro.

Un libro collegato con hardlink non occupa spazio in più su disco e l'originale resta dov'è. L'hardlink richiede che la cartella radice predefinita lo supporti e che sia stata verificata prima. Altrimenti l'opzione è disattivata, con il motivo. Un file che non si può collegare, per esempio uno su un altro disco, viene copiato e mai spostato. A importazione finita ti dice quanti file sono stati copiati.

## File extra

**Import Extra Files** (attivo di default) porta con sé copertina, note e gli altri file non audio di un libro. Vale allo stesso modo per Library Import, Manual Import e download completati. Con **Show Advanced**, **Preferred Cover** sceglie la copertina Audible abbinata (predefinito) o quella della cartella.

## Valori lunghi

Un narratore, un titolo o un percorso tagliato con i puntini di sospensione si apre per intero quando lo tocchi o ci clicchi sopra. Toccalo o cliccalo di nuovo per chiuderlo. Con il mouse, anche passarci sopra mostra il valore intero. Da tastiera, dagli il focus e premi Invio o Spazio.

## Risposte diverse dall'importazione

A una riga puoi rispondere anche **keep library** (rifiuta la copia di un libro che la libreria ha già) o **remove empty** (rifiuta una cartella senza audio che contiene ancora immagini e sidecar). Queste risposte eliminano solo quello che appartiene alla riga. **remove empty** rifiuta tutto ciò che contiene audio. I file finiscono nel cestino se ne hai impostato uno, e il log del task elenca ogni percorso rimosso. Una decisione **keep library** vale solo per il libro della libreria a cui si riferiva: se scegli un abbinamento che chiede altro o riguarda un altro libro della libreria, la riga chiede di nuovo. L'importazione controlla ancora quando parte, e non viene rimosso nulla se a quel punto la copia in libreria non ha file ("Your library has no copy of this book to keep") o se la cartella contiene file di un libro della tua libreria ("This folder holds files of a book in your library"). Le righe che rimuovono file invece di importarli partono solo quando ogni importazione della stessa aggiunta è finita, e ognuna viene rifiutata se in quel momento uno dei suoi file appartiene a un libro della tua libreria. Così non rimuovono mai file da cui un libro dello stesso gruppo è appena stato aggiunto.

## Copertina e file extra per cartella

L'ispettore mostra la copertina della cartella accanto a quella dell'edizione abbinata, ognuna con la sua dimensione in pixel. Con un clic scegli l'altra. Sotto, **Extra files** elenca tutti gli altri file sotto il nome dell'interruttore di Media Management che seguono. Un pallino segna una scelta diversa dalle impostazioni, e **Apply this cover and these file choices to the N other selected** copia le scelte di una cartella sulle altre. Una riga che aggiunge file a un libro già in libreria non ha il selettore.

Vedi anche [Portare dentro una libreria](/it/guides/moving-a-library-in/) e [Media Management](/it/settings/media-management/).
