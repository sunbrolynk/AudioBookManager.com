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

Scrive i tag audio dentro i file audio stessi. La scrittura dei tag è attiva per impostazione predefinita, quindi un'importazione scrive i tag a meno che tu non la disattivi.

| Impostazione | Predefinito |
|---|---|
| Write Audio Tags | attivo |
| Write Audio Tags on Import | attivo, una volta attivata la scrittura dei tag |
| Write Audio Tags on Refresh | disattivo |

Campi dei tag, tutti attivi di default: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) e Cover Art.

## In arrivo in una release successiva

Una scelta della fonte di metadati e una copia locale della libreria di metadati sono previste per una release successiva. Vedi [I tuoi metadati, il tuo controllo](/it/metadata/control/).

## Da tenere presente

- La scrittura dei tag modifica i file audio. Audiobookshelf li vedrà come modificati.
- Se durante la scrittura dei tag non si riescono a prendere metadati o copertina, la chiamata restituisce degli avvisi invece di fallire.
