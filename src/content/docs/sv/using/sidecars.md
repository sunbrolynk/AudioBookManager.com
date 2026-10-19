---
title: Sidecar-filer
description: Omslag, OPF, beskrivning, uppläsare och cue-filer som ABM skriver bredvid en bok.
---

En sidecar är en liten fil bredvid ljudet. Audiobookshelf och andra spelare läser dem. ABM kan skriva de här:

| Fil | Innehåll |
|---|---|
| `cover.jpg` | Bokens omslag |
| `.opf` | Metadata i OPF-form, som Audiobookshelf kan läsa. Döps efter bokens första ljudfil (till exempel `Dune.opf`), eller `title.opf` när boken inte har något ljud |
| `desc.txt` | Beskrivningen |
| `reader.txt` | Uppläsaren |
| `.cue` | Kapitel från Libex (kommer i nästa version) |

## När de skrivs

Under **Settings > Metadata** väljer **Create on Book Add**, **Create on Import** och **Create on Refresh** när. Som standard skrivs de bara vid import. **Overwrite Existing** är av, så en fil som redan finns ligger kvar. Du kan också skriva dem från redigeringsdialogen, för en bok eller ett urval av serier och författare. Se [Metadatainställningar](/sv/settings/metadata/).

## Omslaget är speciellt

Ett omslag du själv har valt är låst. Se [Omslagslåset](/sv/metadata/cover-lock/).

## Vid import

En import tar också med bokens befintliga filer som inte är ljud, styrt av **Media Management > Importing**. När källan har en `.opf`, en beskrivning eller en uppläsarfil tar ABM som mest en av varje och döper dem till `desc.txt` och `reader.txt`. Ett mål som redan finns lämnas i fred, och ett nytt omslag skrivs aldrig över en befintlig `cover.*`.

## Hårdlänkar

En hårdlänkad import lämnar originalet orört. När ABM skriver någon av de här filerna skriver den en ny fil i stället för att ändra på plats, så källan du importerade från behåller sitt innehåll.

## Fallgropar

- En `metadata.json` hanteras av ABM när den innehåller ABM:s eget block. Ett annat verktygs `metadata.json` följer brytaren Book info files.
- I en mapp som delas av flera böcker hör bara filer som är döpta efter den här bokens ljud till den.
- När du tar bort en bok tas dess sidecars bort om de är döpta efter den bokens filer.
