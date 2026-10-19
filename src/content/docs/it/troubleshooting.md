---
title: Risoluzione dei problemi
description: Soluzioni ai problemi in cui è più probabile che inciampi.
---

## File lasciati da un'importazione interrotta (.abmstage)

Un'importazione prima prepara ogni file accanto al suo nome finale, poi li mette al loro posto quando sono arrivati tutti. Se qualcosa va storto, ABM rimette a posto quello che ha spostato. Se non riesce a rimettere a posto una parte, quella parte resta nella cartella del libro come file nascosto che finisce con `.abmstage`. Può essere l'unica copia, quindi ABM la tiene e l'errore la nomina.

Finché c'è un file `.abmstage` nella cartella di un libro, le importazioni in quella cartella si fermano con:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Per recuperare:

1. Trova il file `.abmstage` nominato nell'errore.
2. Rimettilo nel download, oppure nella cartella del libro con il suo nome vero. Oppure eliminalo se non ti serve.
3. Riprova l'importazione.

## Dietro un reverse proxy viene chiesto l'accesso a tutti

Senza `TRUSTED_PROXIES`, una richiesta con header di inoltro non viene mai trattata come locale, quindi deve fare l'accesso. È voluto.

1. Imposta `TRUSTED_PROXIES` sull'indirizzo del tuo proxy, per esempio `172.20.0.5`. Un proxy sullo stesso host vuole `127.0.0.1`.
2. Fai inviare al proxy `X-Forwarded-For` o `X-Real-IP`. nginx proxy manager, Traefik e Caddy lo fanno di default.
3. Riavvia ABM.

Il log dell'app ti dice qual è il caso:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": aggiungi il proxy a `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": configura il proxy perché invii `X-Forwarded-For` o `X-Real-IP`.

Il caso opposto: un proxy che non invia header di inoltro sembra un client locale, quindi tutto quello che passa da lì salta l'accesso. Imposta Authentication Required su Enabled.

## Le modifiche dal browser vengono rifiutate

Assicurati che il proxy faccia passare l'header `Host` originale, oppure invii `X-Forwarded-Host`. Vedi [Configurazione](/it/configuration/#reverse-proxy).

## Le copertine spariscono, o la pagina fa cose strane dietro un proxy

L'header Content-Security-Policy permette solo copertine via HTTPS. Guarda nella console del browser se ci sono violazioni. Servi le copertine via HTTPS, oppure imposta `SECURITY_HEADERS_CSP_ENABLED=false`.

## Una richiesta grande risponde 413

Alza `MAX_REQUEST_BODY_BYTES`. Anche un reverse proxy può imporre un limite più basso e rispondere 413 da solo.

## La fonte dei metadati non è disponibile

Aggiunte, ricerche, aggiornamenti e Discover hanno bisogno della fonte dei metadati. Il messaggio la nomina, per esempio "The metadata source is unavailable". Le cause: la fonte è giù o sta limitando le richieste, oppure la tua connessione in uscita la blocca.

1. Controlla **Settings > General > Proxy & VPN** e che il percorso sia attivo.
2. Riprova dopo un minuto. Una fonte che limita le richieste risponde 503 con un suggerimento di riprovare dopo 30 secondi.
3. Nel frattempo puoi comunque aggiungere e importare libri a mano.

I task in background che incontrano un disservizio falliscono con il motivo, e mandano una sola notifica per disservizio.

## Un aggiornamento ha cambiato i dettagli di un libro

Titolo, descrizione, autori, narratori e campi simili arrivano dalla fonte dei metadati, e un aggiornamento applica quello che dice adesso. ABM non ha modo di modificarli a mano. Quello che controlli tu è la copertina (bloccabile), quali file vengono scritti, i tag, e se gli aggiornamenti scrivono sidecar e tag. Vedi [I tuoi metadati, sotto il tuo controllo](/it/metadata/control/).

## Un libro mostra Missing Files

Il libro è stato scaricato ma i suoi file non sono dove ABM guarda. Controlla il mount e i permessi, poi lancia **Refresh & Scan**. Una scansione lascia stare un libro quando non riesce a leggere la sua cartella, e il task risulta Partial con il motivo.

## Le importazioni si fermano con "Files left by an interrupted import"

Vedi la sezione `.abmstage` qui sopra.

## I download finiscono ma non vengono mai importati

Aggiungi una mappatura dei percorsi remoti, oppure fai in modo che ABM e il client vedano la cartella allo stesso percorso. Una sottocartella illeggibile blocca l'intero download finché non sistemi i suoi permessi. Vedi [Client di download](/it/settings/download-clients/).

## Docker non raggiunge la fonte dei metadati o gli indexer

Prima di tutto controlla il DNS e l'impostazione della connessione in uscita. In Docker, una connessione diretta funziona solo se il container riesce a uscire su internet.
