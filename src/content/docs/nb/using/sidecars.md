---
title: Sidefiler
description: Cover-, OPF-, beskrivelses-, oppleser- og cue-filene ABM skriver ved siden av en bok.
---

En sidefil er en liten fil ved siden av lyden. Audiobookshelf og andre spillere leser dem. ABM kan skrive disse:

| Fil | Innhold |
|---|---|
| `cover.jpg` | Coveret til boka |
| `.opf` | Metadata i OPF-form, som Audiobookshelf kan lese. Får navn etter den første lydfila i boka (for eksempel `Dune.opf`), eller `title.opf` når boka ikke har lyd |
| `desc.txt` | Beskrivelsen |
| `reader.txt` | Oppleseren |
| `.cue` | Kapitler fra Libex (kommer i neste versjon) |

## Når de skrives

Under **Settings > Metadata** velger **Create on Book Add**, **Create on Import** og **Create on Refresh** når. Som standard er det bare import som skriver dem. **Overwrite Existing** er av, så en fil som allerede ligger der, blir værende. Du kan også skrive dem fra redigeringsdialogen, for én bok eller et utvalg av serier og forfattere. Se [Metadatainnstillinger](/nb/settings/metadata/).

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
