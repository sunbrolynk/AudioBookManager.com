---
title: Biblioteksimport
description: Ta in en befintlig samling i ABM med Import Workbench.
---

Library Import skannar en mapp med ljudböcker, matchar varje mapp mot metadata och lägger till böckerna i ditt bibliotek. **Library > Library Import** öppnar "Import audiobooks you already have", där du väljer en mapp att skanna. När skanningen startar går ABM vidare till matchningssidan, med rubriken **Match Audiobooks**, där du kollar matchningarna och lägger till böckerna.

## Flödet

1. Skanna en mapp. Varje mapp med ljud blir en rad.
2. Kolla matchningarna. Rätta dem som behöver det.
3. Markera raderna och lägg till dem i biblioteket.

Varje alternativ är en valfri åsidosättning av en standard i Media Management. En vanlig skanning följt av tillägg behöver aldrig mer än två klick.

## Läsa listan

- Sammanfattningen visar hur många mappar som hittades och hur många som matchades. Filtrera listan på All, Matched, Needs attention, Unmatched, In library eller Failed lookup. Filtret sparas i sidans adress.
- Varje rad visar omslag, titel, författare och serie, och hur säker matchningen är i procent, till exempel "95% match". Mappdetaljerna har **Find a match** eller **Change match** för att söka för hand.
- När filerna saknar ASIN eller speltid som kan bekräfta utgåvan står det i mappdetaljerna.
- **Rescan** plockar upp mappar som har lagts till sedan skanningen och behåller dina val.

En ASIN som hittas i en kommentar eller beskrivning är bara en ledtråd. Den räknas som en matchning bara när titeln också stämmer med mappnamnet. Bara den dedikerade ASIN-taggen räknas på egen hand.

## Slå ihop, dela upp och lägga till

- Slå ihop rader som är en och samma bok uppdelad på flera mappar. Dela upp dem igen från mappdetaljerna.
- Lägg till blockeras med en orsak som visas ovanför knappen, till exempel "Select at least one folder" eller "2 selected rows still need a decision".
- Allt som skulle ta bort eller ersätta filer frågar först.
- Lämnar du sidan sparas dina ändringar som inte är klara.

## Kopiera, flytta eller hårdlänka

**Settings > Media Management > Importing** ställer in standarden för Library Import: kopiera (standard), flytta eller hårdlänka. Du kan välja något annat för varje import.

En hårdlänkad bok tar inget extra diskutrymme och originalet ligger kvar där det är. Hårdlänkning kräver att standardrotmappen har stöd för det och att det har kontrollerats först. Annars är alternativet utgråat med orsaken. En fil som inte går att länka, till exempel en på en annan disk, kopieras och flyttas aldrig. Den färdiga importen säger hur många som kopierades.

## Extrafiler

**Import Extra Files** (på som standard) tar med bokens omslag, anteckningar och andra filer som inte är ljud. Det gäller Library Import, Manual Import och färdiga nedladdningar likadant. Med **Show Advanced** väljer **Preferred Cover** det matchade Audible-omslaget (standard) eller mappens eget.

## Långa värden

En uppläsare, titel eller sökväg som har kapats med en ellips visas i sin helhet när du trycker eller klickar på den. Tryck eller klicka igen för att stänga. Med mus visas hela värdet också när du hovrar över det. Från tangentbordet sätter du fokus på det och trycker Enter eller Mellanslag.

## Andra svar än import

En rad kan också få svaret **keep library** (tacka nej till en kopia av en bok som redan finns i biblioteket) eller **remove empty** (tacka nej till en mapp utan ljud som ändå innehåller bilder och sidecars). De rensar bara det raden äger. Allt som innehåller ljud vägras. Filer hamnar i papperskorgen om en är inställd, och uppgiftsloggen listar varje sökväg som togs bort.

## Omslag och extrafiler per mapp

Inspektören visar mappens eget omslag bredvid den matchade utgåvans, båda med sin storlek i pixlar. Ett klick väljer det andra. Under det listar **Extra files** varje annan fil under namnet på den Media Management-brytare den följer. En prick markerar ett val som skiljer sig från inställningarna, och **Apply this cover and these file choices to the N other selected** kopierar en mapps val till resten. En rad som lägger till filer till en bok som redan finns i biblioteket har ingen väljare.

Se även [Flytta in ett bibliotek](/sv/guides/moving-a-library-in/) och [Mediehantering](/sv/settings/media-management/).
