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

Gebruikt ffmpeg om tags in de audio zelf te schrijven.

| Instelling | Standaard |
|---|---|
| Write Audio Tags | uit |
| Write Tags on Import | aan, zodra het schrijven van tags aanstaat |
| Write Tags on Refresh | uit |

Tagvelden, standaard allemaal aan: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) en Cover Art.

## Komt in de volgende release

De pagina wordt in secties ingedeeld en krijgt een sectie **Source** met een keuze **Metadata Source**, **Test** en **Status**. Zie [Een metadatabron kiezen](/nl/metadata/choosing-a-source/).

Er komt ook een sectie **Local Metadata Library** bij (optioneel, getoond als preview die nog niet aangesloten is) met een download van de bibliotheek als SQLite en eigen geplande back-ups. Die back-ups volgen de back-upopties uit General en staan standaard op wekelijks om 04:00, 28 dagen bewaard.

## Valkuilen

- Tags schrijven verandert de audiobestanden. Audiobookshelf ziet ze dan als gewijzigd.
- Kan de metadata of een cover tijdens het schrijven van tags niet opgehaald worden, dan geeft de actie waarschuwingen in plaats van te mislukken.
