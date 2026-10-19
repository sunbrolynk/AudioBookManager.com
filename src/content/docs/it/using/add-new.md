---
title: Aggiungere libri (Add New)
description: Cerca un libro e aggiungilo come wanted.
---

**Library > Add New** cerca libri su Libex e aggiunge quelli che scegli. La ricerca trova titolo, autore, serie o un ASIN.

## Cosa fa l'aggiunta

Un libro aggiunto diventa **Wanted** nella cartella radice e nel profilo di qualità che hai scelto, e ABM inizia a cercarlo secondo l'impostazione di monitoraggio. Un libro che è già in libreria viene riconosciuto solo tramite ASIN. Un'altra edizione dello stesso titolo ha un altro ASIN.

## Ricerca per autore e per serie

:::caution[In arrivo nella prossima release]
Le modalità di ricerca Author e Series non sono ancora in una versione rilasciata.
:::

La ricerca guadagna due modalità che trovano gli autori e le serie stessi. Le vecchie modalità per libri vengono rinominate in "Books by author" e "Books in series". Aggiungere un autore o una serie costruisce il suo catalogo e aggiunge i suoi libri come wanted secondo **Monitor**:

| Monitor | Aggiunge |
|---|---|
| All | Tutti i libri, compresi quelli non ancora usciti |
| Future | Solo i libri che escono da adesso in poi |
| Missing (predefinito) | I libri che non hai |
| None | Solo il catalogo |

Scegli anche la cartella radice, il profilo di qualità e se aggiungere anche i libri che compariranno più avanti. È attivo di default per una serie e disattivo per un autore. Un autore o una serie che è già nella tua libreria mostra "In Library" con un'azione **Add missing books**.

L'aggiunta gira come task in background con una notifica di avanzamento.

## Se la ricerca non trova niente

Una ricerca che non riceve risposta dalla fonte dei metadati fallisce con un errore invece di mostrare un elenco vuoto. Vedi [Risoluzione dei problemi](/it/troubleshooting/#la-fonte-dei-metadati-non-è-disponibile).
