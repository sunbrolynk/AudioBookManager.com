---
title: Nieuw toevoegen
description: Zoek een boek en voeg het toe als gewenst.
---

**Library > Add New** zoekt boeken op bij Libex en voegt de boeken toe die je kiest. De zoekopdracht matcht op titel, auteur, serie of een ASIN.

## Wat toevoegen doet

Een toegevoegd boek wordt **Wanted** in de rootmap en het kwaliteitsprofiel dat je gekozen hebt, en ABM gaat ernaar zoeken volgens de monitorinstelling. Of een boek al in de bibliotheek staat, wordt alleen aan de ASIN herkend. Een andere editie van dezelfde titel heeft een andere ASIN.

## Zoeken op auteur en serie

:::caution[Komt in de volgende release]
De zoekmodi Author en Series zitten nog niet in een uitgebrachte versie.
:::

De zoekfunctie krijgt twee modi die auteurs en series zelf vinden. De oudere boekmodi heten voortaan "Books by author" en "Books in series". Voeg je een auteur of serie toe, dan wordt de catalogus opgebouwd en worden de boeken als gewenst toegevoegd volgens **Monitor**:

| Monitor | Voegt toe |
|---|---|
| All | Elk boek, ook boeken die nog niet uit zijn |
| Future | Alleen boeken die vanaf nu uitkomen |
| Missing (standaard) | Boeken die je niet hebt |
| None | Alleen de catalogus |

Je kiest ook de rootmap, het kwaliteitsprofiel, en of boeken die later verschijnen ook worden toegevoegd. Dat staat standaard aan voor een serie en uit voor een auteur. Een auteur of serie die al in je bibliotheek staat, toont "In Library" met een actie **Add missing books**.

Het toevoegen draait als achtergrondtaak met een voortgangsmelding.

## Als zoeken niks oplevert

Een zoekopdracht die geen antwoord krijgt van de metadatabron, mislukt met een foutmelding in plaats van een lege lijst. Zie [Problemen oplossen](/nl/troubleshooting/#de-metadatabron-is-niet-bereikbaar).
