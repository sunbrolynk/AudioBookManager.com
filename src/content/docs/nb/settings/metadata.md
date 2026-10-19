---
title: Metadata
description: Hvilke sidefiler og lydtagger ABM skriver, og når.
---

**Settings > Metadata** bestemmer hva ABM skriver i mappen til en bok og i filene. Hvordan disse filene brukes, står i [Sidefiler](/nb/using/sidecars/).

## Oppretting av metadatafiler

| Innstilling | Standard | Virkning |
|---|---|---|
| Create on Book Add | av | Skriv filer når en bok legges til som ønsket |
| Create on Import | på | Skriv filer når en lydbok importeres |
| Create on Refresh | av | Lag eller oppdater filer når metadata oppdateres |
| Overwrite Existing | av | Erstatt filer som allerede ligger i mappen |

Filer som lages: `cover.jpg` (på), `title.opf` (på, kompatibel med Audiobookshelf), `desc.txt` (på) og `reader.txt` (på).

## Skriving av tagger i lydfiler

Bruker ffmpeg til å skrive tagger inn i selve lyden.

| Innstilling | Standard |
|---|---|
| Write Audio Tags | av |
| Write Tags on Import | på, når skriving av tagger er slått på |
| Write Tags on Refresh | av |

Taggfelt, alle på som standard: Title, Artist (forfatter), Album Artist (forfatter), Album (tittel/serie), Genre, Year, Comment (beskrivelse), Narrator (Composer) og Cover Art.

## Kommer i neste versjon

Siden deles opp i seksjoner og får en **Source**-seksjon med valget **Metadata Source**, **Test** og **Status**. Se [Velge metadatakilde](/nb/metadata/choosing-a-source/).

Den får også en **Local Metadata Library**-seksjon (du velger selv å slå den på, vist som forhåndsvisning som ikke er koblet til ennå) med nedlasting av biblioteket som SQLite og egne planlagte sikkerhetskopier. Sikkerhetskopiene følger valgene for sikkerhetskopi i General, og er som standard ukentlig kl. 04:00, beholdt i 28 dager.

## Fallgruver

- Skriving av tagger endrer lydfilene. Audiobookshelf ser dem som endret.
- Hvis metadata eller et cover ikke kan hentes under skriving av tagger, returnerer kallet advarsler i stedet for å feile.
