---
title: Jouw metadata, jouw regie
description: Wat een vernieuwing verandert, wat jij bepaalt, en welke bestanden en tags ABM voor je speler schrijft.
---

ABM houdt de metadata van je bibliotheek bij in zijn eigen database, en schrijft die terug naar plekken waar je speler er iets mee kan. Op deze pagina zie je wat jij in de hand hebt en waar een vernieuwing aan komt.

## Wat een vernieuwing verandert

Een vernieuwing (**Refresh & Scan** van een boek, een vernieuwing van een auteur of van een serie) vraagt de metadatabron opnieuw en neemt over wat er terugkomt. Velden die worden overschreven als de bron een waarde heeft: titel, ondertitel, jaar en releasedatum, beoordeling, speelduur, taal, uitgever, beschrijving, auteurs, vertellers, genres en de cover.

Een veld dat de bron leeg teruggeeft, blijft zoals het is.

## Wat jij bepaalt

- **Een cover die je zelf gekozen hebt.** Die staat vast. Zie [Het coverslot](/nl/metadata/cover-lock/).
- **Tags, automatische tags, volgen, keuzes voor het kwaliteitsprofiel en de bestanden zelf.** Daar komt een vernieuwing niet aan.
- **Een boek waarvan de bestanden niet te lezen zijn.** Dat wordt helemaal met rust gelaten, en de pagina Tasks laat zien waarom.

Boekgegevens zoals de titel, auteurs en beschrijving komen van de bron. ABM biedt geen handmatige bewerking daarvan, en dat staat ook niet op de planning. Wat jij bepaalt is hoe ze bewaard worden en waar ze naartoe geschreven worden.

## Het bewerkdialoogvenster

Met het bewerkdialoogvenster pas je volgen, het kwaliteitsprofiel, het pad en tags aan, en kun je in dezelfde stap sidecarbestanden en audiotags schrijven, voor één boek of een hele selectie series en auteurs. Zie [Bibliotheek](/nl/using/library/#het-bewerkdialoogvenster).

## Sidecars die je speler leest

ABM schrijft `cover.jpg`, een `.opf`, `desc.txt` en `reader.txt` naast de audio. Audiobookshelf leest de OPF, de cover en de tekstbestanden, dus de speler toont wat je in ABM hebt gekozen. Zie [Sidecar-bestanden](/nl/using/sidecars/).

## Tags in de audio

ABM kan titel, artiest, albumartiest, album, genre, jaar, commentaar, verteller en ingesloten coverafbeelding in de audiobestanden zelf schrijven, zodat de data met het bestand meereist. Dit staat standaard uit. Kies de velden onder **Settings > Metadata**. Zie [Metadata-instellingen](/nl/settings/metadata/).

## Hoofdstukken

De hoofdstukken in je bestanden vergelijken met die van de gepubliceerde uitgave, en de gepubliceerde hoofdstukken in de bestanden schrijven, staat gepland voor een latere release. Zie [Hoofdstukken](/nl/using/chapters/).

## Serie en positie

Een boek heeft een serie en een positie. ABM houdt series bij als catalogi, zodat het kan laten zien welke boeken je hebt en de ontbrekende kan toevoegen. Zie [Series volgen](/nl/using/series-tracking/).

## Tags en automatische tags

Tags zijn van jou. Automatische tags zetten ze op basis van regels (genre, verteller, beoordeling, speelduur en meer), en kunnen ze weer weghalen als een boek niet meer voldoet. Tags sturen vervolgens profielen, meldingen, indexers, importlijsten en de agendafeed. Zie [Tags](/nl/settings/tags/).

## Een lokaal archief dat groeit

Alles wat ABM over een boek leert, blijft in ABM's eigen SQLite-database in `/config`, ook van boeken die je later weghaalt. Maak een back-up van die map en het archief zit erin. Zodra een boek erin staat, is de metadata niet meer afhankelijk van de bereikbaarheid van de bron.

:::caution[Komt in een latere release]
Een aparte **Local Metadata Library** staat gepland: een optionele kopie van alles wat ABM ooit heeft opgezocht, bewaard ook als een boek je bibliotheek verlaat, met eigen geplande back-ups en een SQLite-download.
:::

## Schema's voor vernieuwen

- Discover heeft een eigen schema. Zie [Discover-instellingen](/nl/settings/discover/).
- De Audible-bibliotheek heeft een eigen sync-schema. Zie [Audible-instellingen](/nl/settings/audible/).
- Een bibliotheekscan kan elke N uur draaien en bij bestandswijzigingen. Zie [Mediabeheer](/nl/settings/media-management/).
- Of sidecars en tags bij een vernieuwing geschreven worden, regel je met **Create on Refresh** en **Write Tags on Refresh**.
