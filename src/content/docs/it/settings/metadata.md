---
title: Metadati
description: Quali file sidecar e tag audio scrive ABM, e quando.
---

**Settings > Metadata** decide cosa scrive ABM nella cartella di un libro e nei suoi file. Come vengono usati questi file è spiegato in [File sidecar](/it/using/sidecars/).

## Creazione dei file di metadati

| Impostazione | Predefinito | Effetto |
|---|---|---|
| Create on Book Add | disattivo | Scrive i file quando un libro viene aggiunto come wanted |
| Create on Import | attivo | Scrive i file quando viene importato un audiolibro |
| Create on Refresh | disattivo | Crea o aggiorna i file quando vengono aggiornati i metadati |
| Overwrite Existing | disattivo | Sostituisce i file già presenti nella cartella |

File da creare: `cover.jpg` (attivo), `title.opf` (attivo, compatibile con Audiobookshelf), `desc.txt` (attivo) e `reader.txt` (attivo).

## Scrittura dei tag nei file audio

Usa ffmpeg per scrivere i tag dentro l'audio stesso.

| Impostazione | Predefinito |
|---|---|
| Write Audio Tags | disattivo |
| Write Tags on Import | attivo, una volta attivata la scrittura dei tag |
| Write Tags on Refresh | disattivo |

Campi dei tag, tutti attivi di default: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) e Cover Art.

## In arrivo nella prossima release

La pagina viene riorganizzata in sezioni e guadagna una sezione **Source** con la scelta **Metadata Source**, **Test** e **Status**. Vedi [Scegliere una fonte di metadati](/it/metadata/choosing-a-source/).

Guadagna anche una sezione **Local Metadata Library** (facoltativa, mostrata come anteprima non ancora collegata) con un download della libreria in SQLite e backup pianificati tutti suoi. I backup riprendono le opzioni di backup di General e di default sono settimanali alle 04:00, conservati per 28 giorni.

## Da tenere presente

- La scrittura dei tag modifica i file audio. Audiobookshelf li vedrà come modificati.
- Se durante la scrittura dei tag non si riescono a prendere metadati o copertina, la chiamata restituisce degli avvisi invece di fallire.
