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

## Om du vill att ABM ska hantera källmappen

Lägg till den som rotmapp i stället och låt ABM skanna den. Då ligger filerna kvar där de är och böckerna får sin status utifrån det som finns på disken.

## Fallgropar

- En bok som redan finns i biblioteket visas som det. Tacka nej till dubbletten med svaret keep library i stället för att importera den två gånger.
- Att tacka nej till en mapp utan ljud tar bara bort det som den raden äger, och det hamnar i papperskorgen om den är på.
- En ASIN som hittas i en beskrivning är en ledtråd, inte en matchning, om inte titeln också stämmer.
- Efter importen, uppdatera för att hämta aktuell metadata, och slå på skrivning av sidecars om du vill att Audiobookshelf ska se ABM:s val. Se [Sidecar-filer](/sv/using/sidecars/).
