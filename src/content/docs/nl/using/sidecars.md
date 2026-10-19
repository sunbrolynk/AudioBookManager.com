---
title: Sidecarbestanden
description: De metadata.json-, cover-, OPF-, beschrijvings- en vertellerbestanden die ABM naast een boek schrijft.
---

Een sidecar is een klein bestand naast de audio. Audiobookshelf en andere spelers lezen ze. ABM schrijft deze:

| Bestand | Inhoud | Schakelaar |
|---|---|---|
| `metadata.json` | Het eigen metadatabestand van Audiobookshelf, plus een `abm`-blok dat aangeeft dat het van ABM is. Audiobookshelf leest het vóór al het andere | Geen, wordt altijd geschreven |
| `cover.jpg` | De cover van het boek. Wordt niet geschreven als de map al een `cover.*` heeft | cover.jpg |
| `.opf` | Metadata in OPF-vorm. Vernoemd naar het eerste audiobestand van het boek (bijvoorbeeld `Dune.opf`), of `title.opf` als het boek geen audio heeft | title.opf |
| `desc.txt` | De beschrijving, zonder HTML. Wordt overgeslagen als er geen is | desc.txt |
| `reader.txt` | De vertellers. Wordt overgeslagen als er geen zijn | reader.txt |

Samen met de mapindeling zijn dit de bestanden waar Audiobookshelf de gegevens van een boek uit haalt, zodat het hetzelfde boek ziet als ABM.

## Wanneer ze geschreven worden

`metadata.json` wordt elke keer geschreven als een boek wordt toegevoegd, geïmporteerd of ververst.

De andere vier hebben elk een schakelaar onder **Settings > Metadata > Files to Create**, standaard allemaal aan. Ze worden alleen geschreven als de bijbehorende trigger ook aan staat: **Create on Book Add** (uit), **Create on Import** (aan, en dat geldt voor downloads, Library Import en Audible-downloads) en **Create on Refresh** (uit). **Overwrite Existing** staat uit, dus een bestand dat er al staat, blijft staan. Er wordt niks geschreven zolang de map van het boek nog niet bestaat.

**Write to Directories** in het bewerkdialoogvenster schrijft de vier ook, voor één boek of een selectie series en auteurs. Zie [Metadata-instellingen](/nl/settings/metadata/).

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
