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

Skriver lydtagger inn i selve lydfilene. Skriving av tagger er på som standard, så en import skriver taggene med mindre du slår det av.

| Innstilling | Standard |
|---|---|
| Write Audio Tags | på |
| Write Audio Tags on Import | på, når skriving av tagger er slått på |
| Write Audio Tags on Refresh | av |

Taggfelt, alle på som standard: Title, Artist (forfatter), Album Artist (forfatter), Album (tittel/serie), Genre, Year, Comment (beskrivelse), Narrator (Composer) og Cover Art.

## Kommer i en senere versjon

Et valg av metadatakilde og en lokal kopi av metadatabiblioteket er planlagt til en senere versjon. Se [Metadataene dine, din kontroll](/nb/metadata/control/).

## Fallgruver

- Skriving av tagger endrer lydfilene. Audiobookshelf ser dem som endret.
- Hvis metadata eller et cover ikke kan hentes under skriving av tagger, returnerer kallet advarsler i stedet for å feile.
