---
title: Metadata
description: Hvilke sidecar-filer og lydtags ABM skriver, og hvornår.
---

**Settings > Metadata** afgør, hvad ABM skriver i en bogs mappe og dens filer. Hvordan filerne bliver brugt, står under [Sidecar-filer](/da/using/sidecars/).

## Kilde (Source)

**Metadata Source** er Built-in (standard), Hosted (libexdb.com) eller Self-hosted, som kræver en **Server URL**. **Test** sender en rigtig forespørgsel til den valgte kilde uden at gemme, **Status** siger, om den er klar, og **Connection** viser ruten, opslagene forlader ABM på, med et link til **Settings > Network**. Et skift gælder med det samme for alle opslag. Se [Vælg en metadatakilde](/da/metadata/choosing-a-source/).

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

## Lokal lagring (Local Storage)

Med Built-in-kilden vises sektionerne **Local Storage** og **Storage Backups**. De er en forhåndsvisning og endnu ikke koblet til. Se [Dine metadata, din kontrol](/da/metadata/control/).

## Faldgruber

- Skrivning af tags ændrer lydfilerne. Audiobookshelf vil se dem som ændrede.
- Kan metadata eller et cover ikke hentes under skrivning af tags, returnerer kaldet advarsler i stedet for at fejle.
- Når et cover ikke kunne indlejres, fordi forbindelsen afviste det, viser bogsiden og redigeringsdialogen en advarsel i stedet for almindelig succes.
