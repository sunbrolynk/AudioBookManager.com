---
title: Indexer
description: Newznab, Torznab, MyAnonamouse e Prowlarr.
---

**Settings > Indexers** elenca dove ABM cerca le release.

## Tipi

Newznab (usenet), Torznab (torrent), MyAnonamouse, e una connessione Prowlarr che sincronizza gli indexer da Prowlarr.

## Campi

| Campo | Vale per | Effetto |
|---|---|---|
| Name | tutti | Etichetta |
| Enable RSS | tutti | Lo include nella sincronizzazione RSS |
| Enable Automatic Search | tutti | Lo usa per le ricerche avviate da ABM |
| Enable Interactive Search | tutti | Lo usa quando cerchi a mano |
| URL, API Path, API Key | Newznab, Torznab | Dove e come collegarsi. Le credenziali vanno nel campo apposito, mai nell'URL |
| Categories | Newznab, Torznab | In quali categorie cercare |
| Cookie (mam_id) | MyAnonamouse | Cookie di sessione |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only o Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Allarga la ricerca |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Limiti sulle release e obiettivi di seeding |
| Indexer Priority | tutti | Da 1 (massima) a 50 (minima), predefinito 25. Quando la stessa release arriva da due indexer, vince il numero più basso |
| Download Client | tutti | Manda i grab di questo indexer a un client preciso. (Any) usa uno qualsiasi |
| Tags | tutti | Usa questo indexer solo per gli elementi con un tag corrispondente |

Una chiave API o un cookie salvato non viene più mostrato. In modifica lascia il campo vuoto per mantenerlo. Se cambi l'URL devi reinserire il segreto, così una chiave non può finire per sbaglio a un indirizzo nuovo.

## Opzioni

Valgono per tutti gli indexer, quindi rispetta le regole di ciascun indexer.

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Minimum Age | 0 (minuti) | Ignora le release usenet più giovani di così |
| Retention | 0 (giorni) | Ignora le release più vecchie di così. 0 vuol dire nessun limite |
| Maximum Size | 0 (MB) | 0 vuol dire nessun limite |
| RSS Sync Interval | 15 (minuti) | Ogni quanto viene interrogato l'RSS |

La lista di MAM può anche alimentare le [Liste di importazione](/it/settings/import-lists/).

Se conosci Sonarr: è la stessa divisione tra RSS, ricerca automatica e ricerca interattiva per ogni indexer. Non c'è un "test all" separato per le categorie.
