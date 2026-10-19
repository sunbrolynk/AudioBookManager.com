---
title: Avvio rapido
description: Da un'installazione nuova al tuo primo libro monitorato.
---

Questa è la strada più breve da un container avviato a un libro che viene cercato. Prima installa ABM: vedi [Installare ABM](/it/installation/).

## 1. Accedi

Alla prima visita ABM ti guida nella creazione di un login. Finché non lo fai, rifiuta le richieste. Come si comporta l'accesso dopo è spiegato in [Sicurezza e accesso](/it/settings/security/).

## 2. Scegli come ABM esce su internet

In **Settings > General** c'è una sezione **Proxy & VPN**. Se pensi di usare la fonte di metadati integrata, devi prima scegliere una connessione. Vedi [Scegliere una fonte di metadati](/it/metadata/choosing-a-source/).

## 3. Aggiungi una cartella radice

Una cartella radice (root folder) è dove ABM tiene i libri. Aggiungila in **Settings > Media Management**, nella sezione **Root Folders**. Dovrebbe essere la stessa cartella che legge il tuo lettore (Audiobookshelf, per esempio).

## 4. Aggiungi un indexer e un client di download

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse o Prowlarr. Vedi [Indexer](/it/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet o Blackhole. Vedi [Client di download](/it/settings/download-clients/).

Se il client gira in un altro container, controlla che lui e ABM vedano la cartella dei download allo stesso percorso, oppure aggiungi una mappatura dei percorsi remoti.

## 5. Imposta un profilo di qualità

**Settings > Profiles** contiene la scala di qualità che ABM usa per decidere cosa prendere e cosa conta come upgrade. Un profilo è quello predefinito. Parti da quello e affinalo più avanti. Vedi [Profili](/it/settings/profiles/).

## 6. Porta dentro o aggiungi libri

- Hai già una collezione? Usa [Library Import](/it/library-import/).
- Parti da zero? Usa **Library > Add New** e cerca per titolo, autore o serie. Vedi [Aggiungere libri](/it/using/add-new/).

Un libro che aggiungi resta "wanted" (cercato) finché non viene importato un file. I libri cercati compaiono in **Wanted > Missing** e vengono cercati in automatico.

## 7. Guardalo lavorare

**Activity > Queue** mostra cosa si sta scaricando. **Activity > History** mostra cosa è stato preso e importato. Quando qualcosa va storto, [Risoluzione dei problemi](/it/troubleshooting/) e la pagina [Tasks](/it/system/tasks/) sono i posti dove guardare.
