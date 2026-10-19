---
title: Sidefiler
description: Filene metadata.json, cover, OPF, beskrivelse og oppleser som ABM skriver ved siden av en bok.
---

En sidefil er en liten fil ved siden av lyden. Audiobookshelf og andre spillere leser dem. ABM skriver disse:

| Fil | Innhold | Bryter |
|---|---|---|
| `metadata.json` | Audiobookshelfs egen metadatafil, pluss en `abm`-blokk som merker den som ABMs. Audiobookshelf leser den før alt annet | Ingen, skrives alltid |
| `cover.jpg` | Coveret til boka. Skrives ikke når mappen allerede har en `cover.*` | cover.jpg |
| `.opf` | Metadata i OPF-form. Får navn etter den første lydfila i boka (for eksempel `Dune.opf`), eller `title.opf` når boka ikke har lyd | title.opf |
| `desc.txt` | Beskrivelsen, uten HTML. Hoppes over når det ikke finnes noen | desc.txt |
| `reader.txt` | Opplesere. Hoppes over når det ikke finnes noen | reader.txt |

Sammen med mappestrukturen er dette filene Audiobookshelf leser for detaljene til en bok, så den ser den samme boka som ABM.

## Når de skrives

`metadata.json` skrives hver gang en bok legges til, importeres eller oppdateres.

De fire andre har hver sin bryter under **Settings > Metadata > Files to Create**, alle på som standard. De skrives bare når den tilhørende utløseren også er på: **Create on Book Add** (av), **Create on Import** (på, som dekker nedlastinger, Library Import og Audible-nedlastinger) og **Create on Refresh** (av). **Overwrite Existing** er av, så en fil som allerede ligger der, blir værende. Ingenting skrives før mappen til boka finnes.

**Write to Directories** i redigeringsdialogen skriver også de fire, for én bok eller et utvalg av serier og forfattere. Se [Metadatainnstillinger](/nb/settings/metadata/).

## Coveret er spesielt

Et cover du har valgt selv, er låst. Se [Coverlåsen](/nb/metadata/cover-lock/).

## Ved import

En import tar også med seg filene en bok allerede har som ikke er lyd, styrt av **Media Management > Importing**. Når kilden har en `.opf`, en beskrivelse eller en oppleserfil, tar ABM maks én av hver og kaller dem `desc.txt` og `reader.txt`. Et mål som allerede finnes, blir latt være, og et nytt cover skrives aldri over en eksisterende `cover.*`.

## Hardlenker

En hardlenket import lar originalen være urørt. Når ABM skriver noen av disse filene, skriver den en ny fil i stedet for å redigere den som ligger der, så kilden du importerte fra, beholder innholdet sitt.

## Fallgruver

- En `metadata.json` håndteres av ABM når den har ABMs egen blokk. En `metadata.json` fra et annet verktøy følger bryteren Book info files.
- I en mappe som deles av flere bøker, hører bare filer som har navn etter lyden til denne boka, til den.
- Å slette en bok fjerner sidefilene når de har navn etter filene til den boka.
