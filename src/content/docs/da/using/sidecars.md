---
title: Sidecar-filer
description: De cover-, OPF-, beskrivelses-, oplæser- og cue-filer, ABM skriver ved siden af en bog.
---

En sidecar er en lille fil ved siden af lyden. Audiobookshelf og andre afspillere læser dem. ABM kan skrive disse:

| Fil | Indhold |
|---|---|
| `cover.jpg` | Bogens cover |
| `.opf` | Metadata i OPF-format, som Audiobookshelf kan læse. Opkaldt efter bogens første lydfil (fx `Dune.opf`), eller `title.opf`, når bogen ikke har nogen lyd |
| `desc.txt` | Beskrivelsen |
| `reader.txt` | Oplæseren |
| `.cue` | Kapitler fra Libex (kommer i næste udgivelse) |

## Hvornår de bliver skrevet

Under **Settings > Metadata** vælger **Create on Book Add**, **Create on Import** og **Create on Refresh** hvornår. Som standard er det kun import, der skriver dem. **Overwrite Existing** er slået fra, så en fil, der allerede er der, bliver liggende. Du kan også skrive dem fra redigeringsdialogen, for én bog eller en markering af serier og forfattere. Se [Metadata-indstillinger](/da/settings/metadata/).

## Coveret er særligt

Et cover, du selv har valgt, er låst. Se [Coverlåsen](/da/metadata/cover-lock/).

## Ved import

Import tager også en bogs eksisterende filer, der ikke er lyd, med over, styret af **Media Management > Importing**. Når kilden har en `.opf`, en beskrivelse eller en oplæserfil, tager ABM højst én af hver og navngiver dem `desc.txt` og `reader.txt`. En destination, der allerede findes, bliver ikke rørt, og et nyt cover bliver aldrig skrevet oven i et eksisterende `cover.*`.

## Hardlinks

En hardlinket import lader originalen være urørt. Når ABM skriver en af disse filer, skriver den en ny fil i stedet for at rette i den eksisterende, så kilden, du importerede fra, beholder sit indhold.

## Faldgruber

- En `metadata.json` bliver håndteret af ABM, når den indeholder ABM's egen blok. Et andet værktøjs `metadata.json` følger kontakten for bog-infofiler (Book info files).
- I en mappe, som flere bøger deler, hører kun filer opkaldt efter denne bogs lyd til den.
- Sletter du en bog, fjerner det dens sidecars, når de er opkaldt efter den bogs filer.
