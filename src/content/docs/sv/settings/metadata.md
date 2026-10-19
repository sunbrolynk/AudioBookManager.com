---
title: Metadata
description: Vilka sidecar-filer och ljudtaggar som ABM skriver, och när.
---

**Settings > Metadata** bestämmer vad ABM skriver i en boks mapp och i dess filer. Hur filerna används står på [Sidecar-filer](/sv/using/sidecars/).

## Skapa metadatafiler (Metadata file creation)

| Inställning | Standard | Effekt |
|---|---|---|
| Create on Book Add | av | Skriv filer när en bok läggs till som önskad |
| Create on Import | på | Skriv filer när en ljudbok importeras |
| Create on Refresh | av | Skapa eller uppdatera filer när metadatan uppdateras |
| Overwrite Existing | av | Ersätt filer som redan finns i mappen |

Filer som skapas: `cover.jpg` (på), `title.opf` (på, kompatibel med Audiobookshelf), `desc.txt` (på) och `reader.txt` (på).

## Skriva taggar i ljudfiler (Audio file tag writing)

Använder ffmpeg för att skriva taggar direkt i ljudet.

| Inställning | Standard |
|---|---|
| Write Audio Tags | av |
| Write Tags on Import | på, när taggskrivning är på |
| Write Tags on Refresh | av |

Taggfält, alla på som standard: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) och Cover Art.

## Kommer i nästa version

Sidan delas upp i sektioner och får en sektion **Source** med valet **Metadata Source**, **Test** och **Status**. Se [Välja metadatakälla](/sv/metadata/choosing-a-source/).

Den får också en sektion **Local Metadata Library** (som du väljer att slå på, visas som en förhandsvisning som inte är inkopplad än) med nedladdning av biblioteket som SQLite och egna schemalagda säkerhetskopior. Säkerhetskopiorna speglar alternativen för säkerhetskopior i General och är som standard veckovis kl. 04:00, sparade i 28 dagar.

## Fallgropar

- Taggskrivning ändrar ljudfilerna. Audiobookshelf ser dem som ändrade.
- Om metadata eller ett omslag inte kan hämtas medan taggar skrivs returnerar anropet varningar i stället för att misslyckas.
