---
title: File sidecar
description: I file metadata.json, copertina, OPF, descrizione e narratore che ABM scrive accanto a un libro.
---

Un sidecar è un piccolo file accanto all'audio. Audiobookshelf e altri lettori li leggono. ABM scrive questi:

| File | Contenuto | Interruttore |
|---|---|---|
| `metadata.json` | Il file di metadati di Audiobookshelf, più un blocco `abm` che lo segna come di ABM. Audiobookshelf lo legge prima di tutto il resto | Nessuno, viene scritto sempre |
| `cover.jpg` | La copertina del libro. Non viene scritto quando la cartella ha già un `cover.*` | cover.jpg |
| `.opf` | Metadati in formato OPF. Prende il nome dal primo file audio del libro (per esempio `Dune.opf`), oppure `title.opf` quando il libro non ha audio | title.opf |
| `desc.txt` | La descrizione, senza HTML. Saltato quando non c'è | desc.txt |
| `reader.txt` | I narratori. Saltato quando non ce ne sono | reader.txt |

Insieme alla struttura delle cartelle, sono questi i file che Audiobookshelf legge per i dettagli di un libro, così vede lo stesso libro che vede ABM.

## Quando vengono scritti

`metadata.json` viene scritto ogni volta che un libro viene aggiunto, importato o aggiornato.

Gli altri quattro hanno ciascuno un interruttore in **Settings > Metadata > Files to Create**, tutti attivi di default. Vengono scritti solo quando è attivo anche il trigger corrispondente: **Create on Book Add** (disattivo), **Create on Import** (attivo, e copre download, Library Import e download da Audible) e **Create on Refresh** (disattivo). **Overwrite Existing** è disattivato, quindi un file che c'è già resta. Non viene scritto niente finché la cartella del libro non esiste.

**Write to Directories** nella finestra di modifica scrive anche questi quattro, per un solo libro o per una selezione di serie e autori. Vedi [Impostazioni dei metadati](/it/settings/metadata/).

## La copertina è speciale

Una copertina che hai scelto tu è bloccata. Vedi [Il blocco della copertina](/it/metadata/cover-lock/).

## All'importazione

L'importazione porta con sé anche i file non audio già presenti di un libro, secondo **Media Management > Importing**. Quando la sorgente ha un `.opf`, una descrizione o un file del narratore, ABM ne prende al massimo uno per tipo e li chiama `desc.txt` e `reader.txt`. Una destinazione che esiste già viene lasciata com'è, e una nuova copertina non viene mai scritta sopra un `cover.*` esistente.

## Hardlink

Un'importazione con hardlink lascia intatto l'originale. Quando ABM scrive uno di questi file, scrive un file nuovo invece di modificarlo sul posto, così la sorgente da cui hai importato mantiene il suo contenuto.

## Da tenere presente

- Un `metadata.json` viene gestito da ABM quando contiene il blocco di ABM. Il `metadata.json` di un altro strumento segue l'interruttore dei file di informazioni del libro (Book info files).
- In una cartella condivisa da più libri, appartengono a questo libro solo i file che prendono il nome dal suo audio.
- Eliminare un libro rimuove i suoi sidecar quando prendono il nome dai file di quel libro.
