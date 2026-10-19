---
title: Flytta in ett bibliotek
description: Ta in en befintlig samling i ABM på ett säkert sätt.
---

## Innan du börjar

1. Säkerhetskopiera samlingen. Library Import kopierar som standard, men räkna med misstag.
2. Sätt upp en rotmapp och en kvalitetsprofil, och se till att metadatakällan går att nå.
3. Bestäm dig för kopiera, flytta eller hårdlänka. Kopiera är säkrast. Hårdlänka sparar utrymme om biblioteket ligger på samma filsystem som källan. Se [Mediehantering](/sv/settings/media-management/).

## Stegen

1. **Library > Library Import**, skanna mappen.
2. Läs igenom listan. Matchningar visar en procentsats. Rätta raderna **Needs attention** och **Unmatched** med **Find a match**, eller slå ihop rader som är en bok uppdelad på flera mappar.
3. Kolla omslag och extrafiler per mapp bara om du vill åsidosätta standardvalen.
4. Markera raderna och lägg till dem. Det håller sig på två klick om du godtar standardvalen.
5. Håll koll på uppgiften. Sammanfattningen säger hur många filer som kopierades i stället för att hårdlänkas och vad som misslyckades.

## Om samlingen redan ligger där du vill ha den

Att lägga till mappen som rotmapp lägger inte till några böcker av sig själv. ABM:s skanningar kollar bara böcker den redan känner till, så den plockar inte upp det som ligger där. Böckerna måste ändå komma in via Library Import: rotmappens antal **Unmapped Folders** under **Settings > Media Management** öppnar Library Import för just den rotmappen.

Importen lägger varje bok i ABM:s egen struktur Author/Series/Book under standardrotmappen. Välj hårdlänk om du vill lämna originalen orörda utan att ta mer utrymme.

## Fallgropar

- En bok som redan finns i biblioteket visas som det. Tacka nej till dubbletten med svaret keep library i stället för att importera den två gånger.
- Att tacka nej till en mapp utan ljud tar bara bort det som den raden äger, och det hamnar i papperskorgen om den är på.
- En ASIN som hittas i en beskrivning är en ledtråd, inte en matchning, om inte titeln också stämmer.
- Efter importen, uppdatera för att hämta aktuell metadata, och slå på skrivning av sidecars om du vill att Audiobookshelf ska se ABM:s val. Se [Sidecar-filer](/sv/using/sidecars/).
