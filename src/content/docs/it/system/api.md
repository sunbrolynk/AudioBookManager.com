---
title: API
description: Autenticazione, pagine di documentazione e limiti.
---

ABM ha un'API REST sotto `/api`. Il riferimento interattivo è su `/api/docs` (Swagger) e `/api/redoc`, e lo schema su `/api/openapi.json`. Imposta `DOCS_ENABLED=false` per togliere tutti e tre. Le pagine di documentazione caricano risorse da una CDN, quindi si vedono per intero solo con accesso a internet.

## Autenticazione

- **Chiave API**: invia `X-Api-Key: <key>` oppure `?apikey=<key>`. La trovi o la rigeneri in **Settings > General > Security**. Vedi [Sicurezza](/it/settings/security/).
- **Bearer token** ottenuto con l'accesso.
- Una credenziale che presenti vince su un'esenzione, quindi una richiesta con chiave dalla LAN conta come richiesta API.

## Convenzioni

- Gli errori tornano come `{"detail": ...}`.
- I segreti non vengono mai restituiti. Una risposta dice se uno è impostato.
- Una richiesta del browser che cambia lo stato ha bisogno di un'origine corrispondente. Gli script che usano una chiave sono esenti.
- Il corpo delle richieste è limitato a 10 MiB (`MAX_REQUEST_BODY_BYTES`). Ripristino dei backup e caricamento delle copertine hanno limiti più alti. Oltre il limite risponde HTTP 413.
- Gli errori di validazione non ripetono mai quello che hai inviato.
- `POST /api/tasks` mette in coda solo `backup_export`. Qualsiasi altro tipo di attività riceve HTTP 403, e le impostazioni che non vanno bene per `backup_export` ricevono HTTP 422. Le importazioni manuali passano dagli endpoint `/api/manual-import/` e le scansioni della libreria da `POST /api/library/scan`.
- Library Import tiene da sé sul server le corrispondenze di Libex di ogni riga. Un salvataggio della sessione (`PUT /api/library-import/session/{id}` o `PATCH /api/library-import/session/{id}/choices`) con una riga che invia `libex_matches` viene rifiutato con HTTP 422 che indica il campo, quindi lascialo fuori dalle righe che salvi di nuovo. `POST /api/library-import/retry-match` accetta un `session_id` facoltativo e salva in quella sessione le corrispondenze che trova.
- `GET /api/metadata/search` restituisce una pagina di al massimo 50 risultati. `page` (da 0 a 9) sceglie la pagina, e la risposta contiene `page` e `has_more`, che dice se una pagina successiva può averne altri. Una ricerca per ASIN ha solo la pagina 0. `search_type=phrase` restituisce le migliori corrispondenze di Libex per la ricerca, anche questa solo sulla pagina 0 e con `has_more` a false. Una pagina può arrivare corta e avere comunque `has_more` a true, perché Libex esclude i libri che non riesce a leggere, quindi continua a chiedere pagine finché `has_more` non è false. `limit` (da 1 a 50) accorcia una pagina.
- `POST /api/manual-import/execute` e `/execute-to-book` controllano ogni riga di file con uno schema fisso. Una chiave sconosciuta, un `source_path` relativo o un elenco `files` vuoto viene rifiutato con HTTP 422. Ogni sorgente deve essere un file audio che non sta in una cartella di sistema, né direttamente in una cartella di primo livello come `/tmp` o `/mnt`, né in una delle cartelle di ABM (configurazione, database, backup, log, copertine, cestino, cartella temporanea e le cartelle che contengono il certificato e la chiave SSL), seguendo i link simbolici. Un file rifiutato restituisce HTTP 400 con il suo percorso (`Can't import <path>: the file <reason>.`) e non viene accodato nulla.

## Disservizi dei metadati

Una richiesta che ha bisogno della fonte di metadati e non riceve risposta fallisce con un `detail` che nomina la fonte e il motivo, mai con un risultato vuoto. Una ricerca che stai aspettando si arrende dopo circa 10 secondi quando Libex limita la frequenza.

Se conosci Sonarr: l'API non è compatibile con la v3. Prowlarr può sincronizzare gli indexer in ABM tramite la sua connessione Prowlarr.
