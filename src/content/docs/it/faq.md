---
title: Domande frequenti
description: Risposte brevi alle domande che si fanno per prime.
---

## ABM sostituisce Audiobookshelf?

No. Audiobookshelf è il lettore, ABM è il bibliotecario. Puntali tutti e due sulla stessa cartella della libreria e lascia che ognuno faccia il suo lavoro.

## Da dove arrivano i metadati?

Da [Libex](https://libexdb.com), un servizio di metadati aperto per i dati Audible. ABM li aggiorna secondo una pianificazione, e una copertina che hai scelto tu può essere bloccata così un aggiornamento non la tocca.

## Mi serve un database separato?

No. ABM tiene tutto in un unico file SQLite in `/config`. Non c'è nient'altro da far girare.

## Posso raggiungerlo da fuori casa?

Sì, dalla 0.17.0 in poi. Di default chi arriva da fuori della tua rete locale deve accedere, e impostando **Authentication Required** su **Enabled** devono accedere tutti, anche dalla tua LAN. Dietro nginx, Traefik o Caddy, imposta `TRUSTED_PROXIES` sull'indirizzo del proxy. Le credenziali salvate sono cifrate. Vedi [Configurazione](/it/configuration/#reverse-proxy).

## Quali client di download funzionano?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet e Blackhole.

## Che fine ha fatto Readarr?

Readarr gestiva libri e audiolibri insieme, e nel frattempo è stato dismesso. ABM è solo per gli audiolibri, costruito sul modello che le app Servarr hanno inventato.

## Posso installarlo senza Docker?

Non ancora. Per ora l'unica strada è Docker. Sono previste installazioni native per Linux, Windows e macOS, più Kubernetes, Unraid e Proxmox. Vedi [Altri modi per installarlo](/it/installation/#altri-modi-per-installarlo).

## Quanto costa?

Niente. È gratuito e open source con licenza GPL-3.0. Se ti fa risparmiare una serata, c'è un [Ko-fi](https://ko-fi.com/sunbrolynk).

## Posso modificare titolo, autori o descrizione di un libro?

No. Quei dati arrivano dalla fonte dei metadati e ABM non li modifica a mano. Quello che controlli tu è la copertina (una copertina scelta da te viene bloccata), quando girano gli aggiornamenti, quali file sidecar e tag audio vengono scritti, tag e tag automatici, il monitoraggio e il profilo di qualità. Vedi [I tuoi metadati, sotto il tuo controllo](/it/metadata/control/).

## ABM può scrivere capitoli, descrizioni e tag dove li legge Audiobookshelf?

Scrive `cover.jpg`, un `.opf`, `desc.txt` e `reader.txt`, e può scrivere i tag dentro l'audio. Il confronto dei capitoli con l'edizione pubblicata e i file `.cue` arrivano nella prossima release. Vedi [File sidecar](/it/using/sidecars/).

## Posso convertire i miei file?

Sì: convertire, unire, dividere e aggiungere capitoli, in coda. Vedi [Conversioni](/it/using/conversions/).

## Posso importare la collezione che ho già?

Sì, con [Library Import](/it/library-import/). Vedi anche [Portare dentro una libreria](/it/guides/moving-a-library-in/).

## C'è un layout per il telefono?

Sì, sotto i 768px di larghezza. Vedi [Usarlo dal telefono](/it/phone/).

## ABM può usare più di un account Audible?

Sì. Ogni account ha la sua libreria. Vedi [Audible](/it/audible/).
