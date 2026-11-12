---
title: Metadata
description: Welke sidecarbestanden en audiotags ABM schrijft, en wanneer.
---

**Settings > Metadata** bepaalt wat ABM in de map van een boek en in de bestanden zelf schrijft. Hoe die bestanden gebruikt worden, lees je bij [Sidecarbestanden](/nl/using/sidecars/).

## Metadatabestanden aanmaken

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Create on Book Add | uit | Schrijft bestanden als een boek als gewenst wordt toegevoegd |
| Create on Import | aan | Schrijft bestanden als een luisterboek wordt geïmporteerd |
| Create on Refresh | uit | Maakt bestanden aan of werkt ze bij als de metadata vernieuwd wordt |
| Overwrite Existing | uit | Vervangt bestanden die al in de map staan |

Aan te maken bestanden: `cover.jpg` (aan), `title.opf` (aan, compatibel met Audiobookshelf), `desc.txt` (aan) en `reader.txt` (aan).

## Tags in audiobestanden schrijven

Schrijft audiotags in de audiobestanden zelf. Tags schrijven staat standaard aan, dus een import schrijft de tags, tenzij je het uitzet.

| Instelling | Standaard |
|---|---|
| Write Audio Tags | aan |
| Write Audio Tags on Import | aan, zodra het schrijven van tags aanstaat |
| Write Audio Tags on Refresh | uit |

Tagvelden, standaard allemaal aan: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) en Cover Art.

## Komt in een latere release

Een keuze van metadatabron en een lokale kopie van de metadatabibliotheek staan gepland voor een latere release. Zie [Jouw metadata, jouw controle](/nl/metadata/control/).

## Valkuilen

- Tags schrijven verandert de audiobestanden. Audiobookshelf ziet ze dan als gewijzigd.
- Kan de metadata of een cover tijdens het schrijven van tags niet opgehaald worden, dan geeft de actie waarschuwingen in plaats van te mislukken.
