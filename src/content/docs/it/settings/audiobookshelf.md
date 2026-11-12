---
title: Connessione ad Audiobookshelf
description: Collega ABM al tuo server Audiobookshelf.
---

:::caution[In arrivo in una versione successiva]
La pagina delle impostazioni non è ancora in nessuna versione pubblicata. La connessione si può già salvare, provare e rimuovere tramite l'API, e nient'altro in ABM la usa per ora.
:::

Audiobookshelf (ABS) è il server da cui ascolti. ABM si collega con l'URL del server e una chiave API creata per un utente ABS.

## Versione

ABM richiede ABS 2.37.0 o successiva ed è testato su 2.37.2. Un server più vecchio viene rifiutato. Uno più nuovo dà un avviso, perché ABM non è stato testato su quella versione.

## L'account

La chiave API appartiene a un utente ABS. ABM controlla quell'utente quando salvi o provi.

- **Rifiutato finché non lo sistemi:** l'utente deve essere admin o root e avere il permesso Update, l'accesso a tutte le librerie, a tutti i tag e ai contenuti espliciti.
- **Avviso, ma si salva comunque:** Upload è disattivato (ABM non può gestire le copertine) oppure Delete è disattivato (un libro che elimini in ABM resta in ABS finché non lo attivi).

## Come ABM raggiunge ABS

ABM si collega sempre direttamente ad ABS. Non passa mai dalla VPN o dal proxy che hai scelto in [Network](/settings/network/). L'URL del server viene controllato prima del salvataggio, e uno non sicuro viene rifiutato. Vengono rifiutati un indirizzo che punta alla macchina su cui gira ABM, un indirizzo link-local e un indirizzo dei metadati cloud, così come un nome che si risolve in uno di essi. I tuoi indirizzi LAN vanno bene.

## La chiave API

La chiave viene salvata cifrata e non viene più mostrata. Lasciala vuota quando salvi o provi per tenere quella salvata. Una chiave salvata viene inviata solo all'indirizzo per cui è stata salvata, quindi se cambi l'URL, l'impostazione TLS o il bundle CA, inserisci di nuovo la chiave.

## Verifica TLS

I certificati vengono verificati per impostazione predefinita. Se il tuo server usa un certificato della tua autorità, indica il percorso del suo bundle CA invece di disattivare la verifica.

## Test e Disconnect

**Test** controlla un server senza salvarlo: la versione, i permessi dell'utente e le sue librerie. Salvare una connessione attiva esegue prima gli stessi controlli e viene rifiutato se un controllo di errore fallisce. Una connessione salvata disattivata non viene controllata. **Disconnect** rimuove la connessione salvata e la sua chiave.

## System Status

Quando una connessione è attiva, [System > Status](/system/status/) mostra una riga AudioBookShelf con il risultato dell'ultimo controllo. Si aggiorna al salvataggio e con il controllo di integrità periodico, che gira ogni 6 ore, quindi non è un controllo in tempo reale a ogni apertura della pagina. Una chiave salvata che ABM non riesce più a leggere (la chiave di cifratura è andata persa o è cambiata) compare come errore finché non la reinserisci. Una connessione non ancora controllata compare come avviso.

## Cosa rimuove ABM

ABM rimuove sempre e solo il record del libro in ABS. Non elimina mai definitivamente i file.
