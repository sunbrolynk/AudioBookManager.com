---
title: Metadata
description: Hvilke sidefiler og lydtagger ABM skriver, og når.
---

**Settings > Metadata** bestemmer hva ABM skriver i mappen til en bok og i filene. Hvordan disse filene brukes, står i [Sidefiler](/nb/using/sidecars/).

## Kilde (Source)

**Metadata Source** er Built-in (standard), Hosted (libexdb.com) eller Self-hosted, som trenger en **Server URL**. **Test** sender en ekte forespørsel til den valgte kilden uten å lagre, **Status** sier om den er klar, og **Connection** viser ruten oppslagene går ut på, med lenke til **Settings > Network**. Et bytte gjelder med en gang for alle oppslag. Se [Velge metadatakilde](/nb/metadata/choosing-a-source/).

## Oppretting av metadatafiler

| Innstilling | Standard | Virkning |
|---|---|---|
| Create on Book Add | av | Skriv filer når en bok legges til som ønsket |
| Create on Import | på | Skriv filer når en lydbok importeres |
| Create on Refresh | av | Lag eller oppdater filer når metadata oppdateres |
| Overwrite Existing | av | Erstatt filer som allerede ligger i mappen |

Filer som lages: `cover.jpg` (på), `title.opf` (på, kompatibel med Audiobookshelf), `desc.txt` (på) og `reader.txt` (på).

## Skriving av tagger i lydfiler

Skriver lydtagger inn i selve lydfilene.

| Innstilling | Standard |
|---|---|
| Write Audio Tags | av |
| Write Audio Tags on Import | på, når skriving av tagger er slått på |
| Write Audio Tags on Refresh | av |

Taggfelt, alle på som standard: Title, Artist (forfatter), Album Artist (forfatter), Album (tittel/serie), Genre, Year, Comment (beskrivelse), Narrator (Composer) og Cover Art.

## Lokal lagring (Local Storage)

Med Built-in-kilden vises seksjonene **Local Storage** og **Storage Backups**. De er en forhåndsvisning og ikke koblet til ennå. Se [Dine metadata, din kontroll](/nb/metadata/control/).

## Fallgruver

- Skriving av tagger endrer lydfilene. Audiobookshelf ser dem som endret.
- Hvis metadata eller et cover ikke kan hentes under skriving av tagger, returnerer kallet advarsler i stedet for å feile.
- Når et omslag ikke kunne bygges inn fordi forbindelsen avviste det, viser boksiden og redigeringsdialogen en advarsel i stedet for vanlig suksess.
