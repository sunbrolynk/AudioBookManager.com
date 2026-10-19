---
title: Audible-inställningar
description: Konton, synkschema, nedladdningar och diagnostik.
---

I **Settings > Audible** kopplar du konton och finjusterar synk och nedladdning. Hur funktionen fungerar står på sidan [Audible](/sv/audible/).

## Konton

För att koppla ett konto behövs en **Marketplace**, ett **Display Name** och den **Redirect URL** som Amazon skickar tillbaka efter att du har loggat in. Varje konto har sitt eget bibliotek. Om ett konto behöver logga in igen, logga in på samma konto i stället för att ta bort det. Att ta bort det kastar dess bibliotek och tar bort dess enhet från Audible.

## Schema

| Inställning | Effekt |
|---|---|
| Auto Sync | Synka biblioteket enligt ett schema |
| Sync on Account Add | Synka direkt när ett konto kopplas |
| Frequency | Dagligen, veckovis eller månadsvis. Veckovis lägger till Day of Week. Månadsvis lägger till Day of Month (1-28). |
| Time | Timme och minut |
| Use CRON Expression | Ett eget cron-uttryck ersätter alternativen ovan |

## Nedladdningsinställningar (Download Settings)

| Inställning | Standard | Effekt |
|---|---|---|
| Auto Add to Library | på | Nedladdade böcker läggs till i ABM:s bibliotek |
| Concurrent Downloads | 2 | 1 till 5. Högre går snabbare men kan slå i Audibles gränser för antal anrop. |
| Preferred Quality | High Quality | High, Normal eller Low |
| Delete Encrypted Files | på | Ta bort den krypterade AAXC-filen när den har dekrypterats till M4B |
| Temp Download Path | tom | Tom använder systemets temp-mapp |

Misslyckade nedladdningar försöks igen automatiskt några gånger, med en fördröjning som växer, och ett avbrott som varar längre än så lägger tillbaka uppgiften i kön i upp till sex timmar. En nekad licens, en bok du inte äger eller ett dekrypteringsfel misslyckas en gång.

## Anslutningsdiagnostik (Connection Diagnostics)

Välj ett konto och kör diagnostiken. Den testar FFmpeg, inloggningsuppgifter, API-anslutningen och möjligheten att ladda ner, och visar din utgående IP som Audible ser den.
