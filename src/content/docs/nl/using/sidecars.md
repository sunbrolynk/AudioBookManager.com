---
title: Sidecarbestanden
description: De cover-, OPF-, beschrijvings-, verteller- en cue-bestanden die ABM naast een boek schrijft.
---

Een sidecar is een klein bestand naast de audio. Audiobookshelf en andere spelers lezen ze. ABM kan deze schrijven:

| Bestand | Inhoud |
|---|---|
| `cover.jpg` | De cover van het boek |
| `.opf` | Metadata in OPF-vorm, leesbaar voor Audiobookshelf. Vernoemd naar het eerste audiobestand van het boek (bijvoorbeeld `Dune.opf`), of `title.opf` als het boek geen audio heeft |
| `desc.txt` | De beschrijving |
| `reader.txt` | De verteller |
| `.cue` | Hoofdstukken van Libex (komt in de volgende release) |

## Wanneer ze geschreven worden

Onder **Settings > Metadata** bepalen **Create on Book Add**, **Create on Import** en **Create on Refresh** wanneer. Standaard worden ze alleen bij importeren geschreven. **Overwrite Existing** staat uit, dus een bestand dat er al staat, blijft staan. Je kunt ze ook schrijven vanuit het bewerkdialoogvenster, voor één boek of een selectie series en auteurs. Zie [Metadata-instellingen](/nl/settings/metadata/).

## De cover is een speciaal geval

Een cover die je zelf gekozen hebt, staat vast. Zie [Het coverslot](/nl/metadata/cover-lock/).

## Bij importeren

Bij een import gaan ook de bestaande niet-audiobestanden van een boek mee, geregeld door **Media Management > Importing**. Heeft de bron een `.opf`, een beschrijving of een vertellerbestand, dan neemt ABM van elk maximaal één mee en noemt ze `desc.txt` en `reader.txt`. Een bestemming die al bestaat, blijft met rust, en een nieuwe cover wordt nooit over een bestaande `cover.*` heen geschreven.

## Hardlinks

Een gehardlinkte import laat het origineel onaangeroerd. Schrijft ABM een van deze bestanden, dan maakt het een nieuw bestand in plaats van het bestaande aan te passen, zodat de bron waaruit je geïmporteerd hebt zijn inhoud houdt.

## Valkuilen

- Een `metadata.json` wordt door ABM afgehandeld als er ABM's eigen blok in zit. Een `metadata.json` van een andere tool volgt de schakelaar Book info files.
- In een map die door meerdere boeken gedeeld wordt, horen alleen bestanden die vernoemd zijn naar de audio van dit boek bij dit boek.
- Een boek verwijderen verwijdert ook de sidecars, als ze vernoemd zijn naar de bestanden van dat boek.
