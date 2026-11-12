---
title: Prima configurazione
description: La procedura guidata di una nuova installazione, passo per passo.
---

:::caution[In arrivo in una release successiva]
La procedura guidata non è ancora in una versione rilasciata. Le versioni rilasciate chiedono solo un login alla prima visita.
:::

Su una nuova installazione, la prima visita apre una procedura guidata al posto della pagina di accesso. Ti accompagna in tutto ciò che serve ad ABM, un passo alla volta. Compare solo finché non esiste un account. Ogni scelta si può cambiare dopo in **Settings**.

In alto c'è una catena di otto anelli. Ogni anello è un passo, e la catena ti dice a che punto sei:

- **Done**: il passo è completato.
- **Current step**: il passo che hai sullo schermo.
- **Not started**: un passo che non hai ancora raggiunto.
- **Later**: un passo che hai superato senza completarlo. Resta in attesa e puoi finirlo da **Settings** quando vuoi.

**Back** torna al passo precedente. **Continue** salva il passo e va avanti. Tre passi, Audible, Download client e Indexer, hanno anche **Skip for now**.

## 1. Account

Crea il tuo login e ti fa accedere. Scegli un nome utente e una password di almeno 8 caratteri, e digiti la password due volte.

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms usa una pagina di accesso. Basic (Browser Popup) usa la richiesta di accesso del tuo browser |
| Authentication required | Everywhere | Everywhere chiede l'accesso da qualsiasi indirizzo. Skip on local network lascia entrare senza accesso i dispositivi della tua rete di casa o dell'ufficio |

Sono le stesse impostazioni di [Sicurezza e accesso](/it/settings/security/). L'account viene creato quando premi **Continue**. Una volta creato, questo passo si limita a confermarlo.

## 2. Rete (Network)

Network è l'interruttore generale. Niente di ciò che ABM invia esce dalla tua macchina finché non scegli qui un percorso, quindi i passi Metadata e Audible dipendono da questo. **Continue** resta disattivato finché il percorso non è completo. Il passo si può saltare solo se le sue impostazioni non si caricano: allora mostra l'errore con **Retry**, **Back** e **Skip for now**. Finché non scegli un percorso, ABM continua a bloccare tutto ciò che invia, e il passo Finish mostra Network come in attesa.

| Scelta | Cosa dai ad ABM |
|---|---|
| Proxy | Tipo, nome host e porta del proxy, e facoltativamente nome utente e password. SOCKS4 non è supportato |
| WireGuard | Un `.conf` del tuo provider VPN, incollato o trascinato. Se un tunnel è già salvato, viene usato quello |
| Own VPN container | Niente da inserire. Spunti una casella che dice che tutto il traffico di ABM esce già da un container VPN o proxy. ABM non può verificarlo |
| Direct | Niente da inserire. Spunti una casella che dice che ogni servizio contattato da ABM vedrà il tuo indirizzo IP |

**Continue** salva il percorso e poi mostra il controllo **Public IP**, così vedi che il percorso funziona prima che qualcosa vada online. **Change route** ti permette di sceglierne un altro. Sono le stesse impostazioni di [Network](/it/settings/network/).

## 3. Metadati (Metadata)

Scegli dove ABM cerca i libri. Viene prima delle tue cartelle perché la prima scansione delle cartelle confronta i tuoi libri con questa fonte.

| Scelta | Cosa significa |
|---|---|
| Built-in | Libex gira dentro ABM. Nessun account e nessun servizio in più. Usa il percorso del passo Network |
| Hosted | ABM interroga l'istanza pubblica di Libex su libexdb.com |
| Self-hosted | ABM interroga il tuo server Libex. Inserisci il suo **Server URL**. **Test** lo controlla senza salvare |

C'è anche una casella **Local Storage**. Tiene un registro locale, permanente e cifrato di ogni libro che ABM cerca, ricerca, aggiunge, importa o vede in Discover, e funziona con tutte e tre le fonti. Una volta attiva, si può disattivare solo in **Settings > Metadata**.

**Continue** salva la fonte e attiva Local Storage se l'hai spuntata. Se la fonte scelta non può ancora uscire, per esempio Built-in senza un percorso scelto, il passo ne spiega il motivo. Vedi [Scegliere una fonte di metadati](/it/metadata/choosing-a-source/). Se le impostazioni del passo non si caricano, mostra l'errore con **Retry**, **Back** e **Skip for now**, e puoi impostare la fonte più tardi in **Settings > Metadata**.

## 4. Audible (facoltativo)

Accede al tuo account Audible così ABM può leggere la tua libreria. Passa dal percorso scelto nel passo Network. Se non è scelto nessun percorso, o il traffico di Audible è bloccato su quello scelto, il passo lo dice e **Back to Network** ti riporta indietro. L'accesso è lo stesso di [Audible](/it/audible/). Quando hai effettuato l'accesso, il passo mostra l'account e **Continue** diventa disponibile.

Puoi usare **Skip for now** e collegare Audible più tardi in **Settings > Audible**.

## 5. Cartella radice (Root folder)

Una cartella radice è dove ABM tiene i tuoi libri. Scegli la cartella in cui vivono i tuoi audiolibri, o dove devono andare quelli nuovi. Dovrebbe essere la stessa cartella che legge il tuo player (Audiobookshelf, per esempio). Puoi sfogliare le cartelle del server e crearne una nuova dal browser. La prima cartella radice che aggiungi diventa quella predefinita. Questo passo non si può saltare. Puoi aggiungere altre radici più tardi in **Settings > Media Management**.

## 6. Client di download (facoltativo)

Scegli uno dei client supportati, Usenet o torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet o Blackhole. Compila i suoi dati, premi **Test** e poi **Save**. Il client viene aggiunto lì, nel passo. Puoi aggiungerne un altro, e **Refresh** ricarica l'elenco. Il passo conta come fatto non appena un client è salvato.

Puoi usare **Skip for now** e aggiungere un client più tardi in **Settings > Download Clients**. Vedi [Client di download](/it/settings/download-clients/).

## 7. Indexer (facoltativo)

Scegli un tipo di indexer o un preset, compilalo, poi **Test** e **Save**, come per il client di download. Il passo conta come fatto non appena un indexer è salvato. Puoi usare **Skip for now** e aggiungere indexer più tardi in **Settings > Indexers**. Vedi [Indexer](/it/settings/indexers/).

## 8. Fine (Finish)

Un riepilogo elenca ogni passo con ciò che è stato impostato: il tuo percorso Network (e la Public IP, se è stata controllata), la fonte dei metadati, l'account Audible, la cartella radice, e il client e l'indexer che hai aggiunto. Ogni passo che hai lasciato per dopo risulta in attesa. Se ABM non riesce a rileggere lo stato di un passo, per esempio perché l'elenco dei client di download non si carica, quella riga mostra **Could not check** e compare un pulsante **Retry**. Se non c'è nulla in attesa, il riepilogo dice che ogni anello è acceso. **Go to Library** chiude la procedura guidata.

Tutto ciò che hai saltato è in **Settings** quando vuoi. Le prossime cose sensate sono un profilo di qualità e i tuoi libri: vedi [Avvio rapido](/it/getting-started/quick-start/).
