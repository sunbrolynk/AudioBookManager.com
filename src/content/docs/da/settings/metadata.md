---
title: Metadata
description: Hvilke sidecar-filer og lydtags ABM skriver, og hvornår.
---

**Settings > Metadata** afgør, hvad ABM skriver i en bogs mappe og dens filer. Hvordan filerne bliver brugt, står under [Sidecar-filer](/da/using/sidecars/).

## Oprettelse af metadatafiler

| Indstilling | Standard | Virkning |
|---|---|---|
| Create on Book Add | fra | Skriv filer, når en bog bliver tilføjet som ønsket |
| Create on Import | til | Skriv filer, når en lydbog bliver importeret |
| Create on Refresh | fra | Opret eller opdatér filer, når metadata bliver opdateret |
| Overwrite Existing | fra | Erstat filer, der allerede ligger i mappen |

Filer, der oprettes: `cover.jpg` (til), `title.opf` (til, kompatibel med Audiobookshelf), `desc.txt` (til) og `reader.txt` (til).

## Skrivning af tags i lydfiler

Bruger ffmpeg til at skrive tags ind i selve lyden.

| Indstilling | Standard |
|---|---|
| Write Audio Tags | fra |
| Write Tags on Import | til, når skrivning af tags er slået til |
| Write Tags on Refresh | fra |

Tagfelter, alle slået til som standard: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) og Cover Art.

## Kommer i næste udgivelse

Siden bliver delt op i sektioner og får en sektion, der hedder **Source**, med valget **Metadata Source**, **Test** og **Status**. Se [Vælg en metadatakilde](/da/metadata/choosing-a-source/).

Den får også en sektion, der hedder **Local Metadata Library** (du skal selv slå den til, og den vises som en forhåndsvisning, der ikke er koblet til noget endnu), med en download af biblioteket som SQLite og sine egne planlagte backups. Backupperne spejler backupmulighederne i General og står som standard på ugentligt kl. 04:00, gemt i 28 dage.

## Faldgruber

- Skrivning af tags ændrer lydfilerne. Audiobookshelf vil se dem som ændrede.
- Kan metadata eller et cover ikke hentes under skrivning af tags, returnerer kaldet advarsler i stedet for at fejle.
