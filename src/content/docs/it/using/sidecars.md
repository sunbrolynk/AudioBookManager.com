---
title: File sidecar
description: I file di copertina, OPF, descrizione, narratore e cue che ABM scrive accanto a un libro.
---

Un sidecar è un piccolo file accanto all'audio. Audiobookshelf e altri lettori li leggono. ABM può scrivere questi:

| File | Contenuto |
|---|---|
| `cover.jpg` | La copertina del libro |
| `.opf` | Metadati in formato OPF, leggibili da Audiobookshelf. Prende il nome dal primo file audio del libro (per esempio `Dune.opf`), oppure `title.opf` quando il libro non ha audio |
| `desc.txt` | La descrizione |
| `reader.txt` | Il narratore |
| `.cue` | I capitoli da Libex (in arrivo nella prossima release) |

## Quando vengono scritti

In **Settings > Metadata**, **Create on Book Add**, **Create on Import** e **Create on Refresh** decidono quando. Di default li scrive solo l'importazione. **Overwrite Existing** è disattivato, quindi un file che c'è già resta. Puoi anche scriverli dalla finestra di modifica, per un solo libro o per una selezione di serie e autori. Vedi [Impostazioni dei metadati](/it/settings/metadata/).

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
