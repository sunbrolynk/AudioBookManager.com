---
title: Metadata
description: Vilka sidecar-filer och ljudtaggar som ABM skriver, och när.
---

**Settings > Metadata** bestämmer vad ABM skriver i en boks mapp och i dess filer. Hur filerna används står på [Sidecar-filer](/sv/using/sidecars/).

## Källa (Source)

**Metadata Source** är Built-in (standard), Hosted (libexdb.com) eller Self-hosted, som kräver en **Server URL**. **Test** gör en riktig förfrågan till den valda källan utan att spara, **Status** säger om den är redo, och **Connection** visar vägen som uppslagen går ut genom, med en länk till **Settings > Network**. Ett byte gäller direkt för alla uppslag. Se [Välja metadatakälla](/sv/metadata/choosing-a-source/).

## Skapa metadatafiler (Metadata file creation)

| Inställning | Standard | Effekt |
|---|---|---|
| Create on Book Add | av | Skriv filer när en bok läggs till som önskad |
| Create on Import | på | Skriv filer när en ljudbok importeras |
| Create on Refresh | av | Skapa eller uppdatera filer när metadatan uppdateras |
| Overwrite Existing | av | Ersätt filer som redan finns i mappen |

Filer som skapas: `cover.jpg` (på), `title.opf` (på, kompatibel med Audiobookshelf), `desc.txt` (på) och `reader.txt` (på).

## Skriva taggar i ljudfiler (Audio file tag writing)

Skriver ljudtaggar direkt i ljudfilerna.

| Inställning | Standard |
|---|---|
| Write Audio Tags | av |
| Write Audio Tags on Import | på, när taggskrivning är på |
| Write Audio Tags on Refresh | av |

Taggfält, alla på som standard: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) och Cover Art.

## Lokal lagring (Local Storage)

Med Built-in-källan visas sektionerna **Local Storage** och **Storage Backups**. De är en förhandsvisning och inte anslutna än. Se [Din metadata, din kontroll](/sv/metadata/control/).

## Fallgropar

- Taggskrivning ändrar ljudfilerna. Audiobookshelf ser dem som ändrade.
- Om metadata eller ett omslag inte kan hämtas medan taggar skrivs returnerar anropet varningar i stället för att misslyckas.
- När ett omslag inte kunde bäddas in eftersom anslutningen avvisade det visar boksidan och redigeringsdialogen en varning i stället för vanlig framgång.
