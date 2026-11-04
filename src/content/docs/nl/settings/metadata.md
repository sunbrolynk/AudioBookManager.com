---
title: Metadata
description: Welke sidecarbestanden en audiotags ABM schrijft, en wanneer.
---

**Settings > Metadata** bepaalt wat ABM in de map van een boek en in de bestanden zelf schrijft. Hoe die bestanden gebruikt worden, lees je bij [Sidecarbestanden](/nl/using/sidecars/).

De pagina heeft één **Save**. **Source** bepaalt waar ABM zijn metadata vandaan haalt, en de secties eronder bepalen wat ABM schrijft.

## Bron (Source)

**Metadata Source** is Built-in (standaard), Hosted (libexdb.com) of Self-hosted, die een **Server URL** vraagt. **Test** doet een echt verzoek naar de gekozen bron zonder op te slaan, **Status** zegt of die klaar is, en **Connection** toont de route waarlangs opzoekingen vertrekken, met een link naar **Settings > Network**. Wisselen werkt meteen voor alle opzoekingen. Zie [Een metadatabron kiezen](/nl/metadata/choosing-a-source/).

## Metadatabestanden aanmaken

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Create on Book Add | uit | Schrijft bestanden als een boek als gewenst wordt toegevoegd |
| Create on Import | aan | Schrijft bestanden als een luisterboek wordt geïmporteerd |
| Create on Refresh | uit | Maakt bestanden aan of werkt ze bij als de metadata vernieuwd wordt |
| Overwrite Existing | uit | Vervangt bestanden die al in de map staan |

Aan te maken bestanden: `cover.jpg` (aan), `title.opf` (aan, compatibel met Audiobookshelf), `desc.txt` (aan) en `reader.txt` (aan).

## Tags in audiobestanden schrijven

Gebruikt ffmpeg om tags in de audio zelf te schrijven.

| Instelling | Standaard |
|---|---|
| Write Audio Tags | uit |
| Write Tags on Import | aan, zodra het schrijven van tags aanstaat |
| Write Tags on Refresh | uit |

Tagvelden, standaard allemaal aan: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) en Cover Art.

## Lokale opslag (Local Storage)

Met de Built-in-bron verschijnen de secties **Local Storage** en **Storage Backups**. Ze zijn een voorproefje en nog niet aangesloten. Zie [Jouw metadata, jouw regie](/nl/metadata/control/).

## Valkuilen

- Tags schrijven verandert de audiobestanden. Audiobookshelf ziet ze dan als gewijzigd.
- Kan de metadata of een cover tijdens het schrijven van tags niet opgehaald worden, dan geeft de actie waarschuwingen in plaats van te mislukken.
