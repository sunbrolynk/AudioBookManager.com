---
title: Sidecar-filer
description: De metadata.json-, cover-, OPF-, beskrivelses- og oplæserfiler, ABM skriver ved siden af en bog.
---

En sidecar er en lille fil ved siden af lyden. Audiobookshelf og andre afspillere læser dem. ABM skriver disse:

| Fil | Indhold | Kontakt |
|---|---|---|
| `metadata.json` | Audiobookshelfs egen metadatafil plus en `abm`-blok, der markerer den som ABM's. Audiobookshelf læser den før alt andet | Ingen, bliver altid skrevet |
| `cover.jpg` | Bogens cover. Bliver ikke skrevet, når mappen allerede har en `cover.*` | cover.jpg |
| `.opf` | Metadata i OPF-format. Opkaldt efter bogens første lydfil (fx `Dune.opf`), eller `title.opf`, når bogen ikke har nogen lyd | title.opf |
| `desc.txt` | Beskrivelsen, uden HTML. Springes over, når der ikke er nogen | desc.txt |
| `reader.txt` | Oplæserne. Springes over, når der ikke er nogen | reader.txt |

Sammen med mappelayoutet er det de filer, Audiobookshelf læser en bogs detaljer fra, så den ser den samme bog, som ABM gør.

## Hvornår de bliver skrevet

`metadata.json` bliver skrevet, hver gang en bog bliver tilføjet, importeret eller opdateret.

De fire andre har hver deres kontakt under **Settings > Metadata > Files to Create**, alle slået til som standard. De bliver kun skrevet, når den tilhørende udløser også er slået til: **Create on Book Add** (fra), **Create on Import** (til, hvilket dækker downloads, Biblioteksimport og Audible-downloads) og **Create on Refresh** (fra). **Overwrite Existing** er slået fra, så en fil, der allerede er der, bliver liggende. Der bliver ikke skrevet noget, før bogens mappe findes.

Redigeringsdialogens **Write to Directories** skriver også de fire, for én bog eller en markering af serier og forfattere. Se [Metadata-indstillinger](/da/settings/metadata/).

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
