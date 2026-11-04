---
title: Metadati
description: Quali file sidecar e tag audio scrive ABM, e quando.
---

**Settings > Metadata** decide cosa scrive ABM nella cartella di un libro e nei suoi file. Come vengono usati questi file è spiegato in [File sidecar](/it/using/sidecars/).

La pagina ha un solo **Save**. **Source** stabilisce da dove ABM prende i metadati, e le sezioni sotto decidono cosa scrive ABM.

## Fonte (Source)

**Metadata Source** è Built-in (predefinita), Hosted (libexdb.com) o Self-hosted, che richiede un **Server URL**. **Test** fa una richiesta vera alla fonte scelta senza salvare, **Status** dice se è pronta, e **Connection** mostra la via da cui escono le richieste, con un link a **Settings > Network**. Il cambio vale subito per tutte le richieste. Vedi [Scegliere una fonte di metadati](/it/metadata/choosing-a-source/).

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

## Archivio locale (Local Storage)

Con la fonte Built-in compaiono le sezioni **Local Storage** e **Storage Backups**. Sono un'anteprima e non sono ancora collegate. Vedi [I tuoi metadati, sotto il tuo controllo](/it/metadata/control/).

## Da tenere presente

- La scrittura dei tag modifica i file audio. Audiobookshelf li vedrà come modificati.
- Se durante la scrittura dei tag non si riescono a prendere metadati o copertina, la chiamata restituisce degli avvisi invece di fallire.
