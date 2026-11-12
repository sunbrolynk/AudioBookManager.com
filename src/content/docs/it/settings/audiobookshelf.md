---
title: Connessione ad Audiobookshelf
description: Collega ABM al tuo server Audiobookshelf.
---

Audiobookshelf (ABS) è il server su cui ascolti. Collega ABM in **Settings > Audiobookshelf**, sia da computer sia da telefono. Indichi l'indirizzo del server e una chiave API creata per un utente ABS.

## Connessione

- **Enable:** Fa usare il server ad ABM. Quando salvi con questa opzione, ABM controlla prima il server e rifiuta di salvare se un controllo di livello errore fallisce. La pagina mostra i motivi. Una connessione salvata disattivata non viene controllata.
- **Server address:** Dove risponde il tuo server ABS, per esempio `http://192.168.1.20:13378`. Se ABS gira sulla stessa macchina di ABM, usa l'indirizzo LAN di quella macchina, oppure il nome o l'IP del container se entrambi girano in Docker.
- **API key:** Una chiave API di un utente admin in ABS.
- **Verify TLS certificate:** Attivo per impostazione predefinita. Se il tuo server usa un certificato della tua autorità, indica il percorso del suo bundle CA in **CA bundle path** invece di disattivare la verifica. Lascia il percorso vuoto per usare i certificati di sistema.
- **Test:** Esegue i controlli su ciò che è a schermo, senza salvare nulla.
- **Disconnect:** Ti chiede conferma, poi rimuove l'indirizzo e la chiave salvati.

## Come ABM raggiunge ABS

ABM si collega sempre direttamente ad ABS. Non passa mai dalla VPN o dal proxy scelti in [Network](/settings/network/). L'indirizzo viene controllato prima del salvataggio e uno non sicuro viene rifiutato. Vengono rifiutati un indirizzo che punta alla macchina su cui gira ABM, un indirizzo link-local e un indirizzo dei metadati cloud, così come un nome che si risolve in uno di questi. I tuoi indirizzi LAN vanno bene, ed è per questo che un ABS sulla stessa macchina richiede l'indirizzo LAN della macchina o il nome o l'IP del suo container.

## La chiave API

La chiave è salvata cifrata e non viene più mostrata. Lasciala vuota quando salvi o testi per mantenere quella salvata. Una chiave salvata viene inviata solo all'indirizzo per cui è stata salvata, quindi se cambi l'indirizzo, Verify TLS o il bundle CA, inseriscila di nuovo. Se ABM non riesce più a leggere la chiave salvata (la chiave di cifratura è andata persa o è cambiata), la pagina ti dice di inserirla di nuovo, anche a connessione disattivata.

## Cosa viene controllato

**Versione.** ABM richiede ABS 2.37.0 o successiva ed è testato su 2.37.2. Un server più vecchio, o che non riporta una versione comprensibile per ABM, fallisce con un errore. Uno più recente dà un avviso, perché ABM non è stato testato su di esso.

**L'account.** La chiave API appartiene a un utente ABS e ABM controlla quell'utente.

- **Errore finché non è risolto:** l'utente deve essere admin o root e avere il permesso Update, l'accesso a tutte le librerie, a tutti i tag e ai contenuti espliciti.
- **Avviso, salvato comunque:** Upload è disattivato (ABM non può possedere le copertine), oppure Delete è disattivato (un libro che elimini in ABM resta in ABS finché non lo attivi).

## Stato

La sezione Status mostra l'esito dell'ultimo controllo (Not connected, OK, Warning o Error), la versione del server, l'utente a cui appartiene la chiave, quando ABM ha controllato l'ultima volta e i controlli stessi. Un controllo fallito mostra il suo motivo e quelli superati vengono contati.

[System > Status](/system/status/) ha anche una riga Audiobookshelf quando una connessione è attiva. Si aggiorna al salvataggio e con il controllo di salute periodico, che gira ogni 6 ore, quindi non è una sonda in tempo reale a ogni apertura della pagina. Una chiave salvata che ABM non riesce più a leggere compare come errore finché non la inserisci di nuovo. Una connessione non ancora controllata compare come avviso. Una connessione disattivata lì resta silenziosa.

## Cosa rimuove ABM

ABM rimuove sempre e solo il record dell'elemento da ABS. Non elimina mai definitivamente i file.
