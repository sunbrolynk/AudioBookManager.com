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

## Kommer i en senere udgivelse

Et valg af metadatakilde og en lokal kopi af metadatabiblioteket er planlagt til en senere udgivelse. Se [Dine metadata, din kontrol](/da/metadata/control/).

## Faldgruber

- Skrivning af tags ændrer lydfilerne. Audiobookshelf vil se dem som ændrede.
- Kan metadata eller et cover ikke hentes under skrivning af tags, returnerer kaldet advarsler i stedet for at fejle.
