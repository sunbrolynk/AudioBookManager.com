---
title: Client di download
description: Client supportati, gestione dei download completati e mappature dei percorsi remoti.
---

**Settings > Download Clients** collega il programma che si occupa di scaricare.

## Client supportati

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet e Blackhole (una cartella osservata). L'elenco è tutto qui.

## Campi

Quali campi compaiono dipende dal client.

| Campo | Effetto |
|---|---|
| Name | Etichetta |
| Host, Port, URL Base | Dove ascolta il client |
| Use SSL, Verify TLS certificate | HTTPS e se il certificato viene verificato |
| Username, Password, API Key | Credenziali. Un segreto salvato non viene mai mostrato |
| Category | Categoria o etichetta che ABM mette sui suoi download, per esempio `audiobooks` |
| Watch Folder, Directory | Blackhole: dove lasciare i file e dove compaiono quelli finiti |
| Client Priority | Quale client vince quando ne vanno bene diversi |
| Remove from Client, Also Delete Files, Remove Failed | Cosa rimuove ABM dal client dopo un'importazione o un errore |
| Queue Page Remove Action | Cosa fa la rimozione di una riga nella pagina Queue: toglierla solo da ABM, rimuoverla dal client tenendo i file, oppure rimuoverla ed eliminare i file |

**Test** verifica la connessione. Un client disattivato non è un client in errore. Un client che dà errore viene ritentato con un'attesa crescente.

## Gestione dei download completati

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Enable | attivo | Importa in automatico i download finiti |
| Redownload Failed | attivo | Mette in blocklist una release fallita e cerca di nuovo |
| Redownload Failed from Interactive Search | attivo | Lo stesso, per le release che hai scelto a mano |

Se le importazioni usano hardlink o copia lo decide **Use Hardlinks instead of Copy** in [Media Management](/it/settings/media-management/). Se la cartella del client non ha lo stesso percorso che vede ABM, aggiungi una mappatura dei percorsi remoti.

## Mappature dei percorsi remoti

Quando il client riporta `/downloads/audiobooks` e ABM vede la stessa cartella come `/data/audiobooks`, aggiungi una mappatura.

| Campo | Effetto |
|---|---|
| Host | L'host del client a cui si riferisce la mappatura |
| Remote Path | Il percorso come lo riporta il client |
| Local Path | La stessa cartella come la vede ABM |

## Da tenere presente

- Una sottocartella illeggibile in un download finito blocca del tutto l'importazione di quel download. Dal client non viene rimosso niente, e si riprova più tardi.
- Docker: quando puoi, monta la cartella dei download allo stesso percorso in entrambi i container. Le mappature sono il piano B.
