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

## Disservizi dei metadati

Una route che dipende dalla fonte dei metadati risponde 503 (`metadata_unavailable`), 503 con `Retry-After: 30` (`metadata_declined`) o 502 (`metadata_rejected`) nel campo `code` del corpo. Alcune route di ricerca restituiscono comunque un risultato vuoto durante un disservizio.

Se conosci Sonarr: l'API non è compatibile con la v3. Prowlarr può sincronizzare gli indexer in ABM tramite la sua connessione Prowlarr.
