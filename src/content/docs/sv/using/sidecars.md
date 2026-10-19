---
title: Sidecar-filer
description: Filerna metadata.json, omslag, OPF, beskrivning och uppläsare som ABM skriver bredvid en bok.
---

En sidecar är en liten fil bredvid ljudet. Audiobookshelf och andra spelare läser dem. ABM skriver de här:

| Fil | Innehåll | Brytare |
|---|---|---|
| `metadata.json` | Audiobookshelfs egen metadatafil, plus ett `abm`-block som märker den som ABM:s. Audiobookshelf läser den före allt annat | Ingen, skrivs alltid |
| `cover.jpg` | Bokens omslag. Skrivs inte när mappen redan har en `cover.*` | cover.jpg |
| `.opf` | Metadata i OPF-form. Döps efter bokens första ljudfil (till exempel `Dune.opf`), eller `title.opf` när boken inte har något ljud | title.opf |
| `desc.txt` | Beskrivningen, utan HTML. Hoppas över när det inte finns någon | desc.txt |
| `reader.txt` | Uppläsarna. Hoppas över när det inte finns några | reader.txt |

Tillsammans med mappstrukturen är det de här filerna Audiobookshelf läser för en boks detaljer, så den ser samma bok som ABM.

## När de skrivs

`metadata.json` skrivs varje gång en bok läggs till, importeras eller uppdateras.

De andra fyra har var sin brytare under **Settings > Metadata > Files to Create**, alla på som standard. De skrivs bara när den matchande utlösaren också är på: **Create on Book Add** (av), **Create on Import** (på, och gäller nedladdningar, Library Import och Audible-nedladdningar) och **Create on Refresh** (av). **Overwrite Existing** är av, så en fil som redan finns ligger kvar. Inget skrivs förrän bokens mapp finns.

Redigeringsdialogens **Write to Directories** skriver också de fyra, för en bok eller ett urval av serier och författare. Se [Metadatainställningar](/sv/settings/metadata/).

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
