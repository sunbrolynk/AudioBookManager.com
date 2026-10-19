---
title: Lägg till nytt
description: Sök efter en bok och lägg till den som önskad.
---

**Library > Add New** söker i Libex efter böcker och lägger till dem du väljer. Sökningen matchar titel, författare, serie eller en ASIN.

## Vad det gör att lägga till

En tillagd bok blir **Wanted** i den rotmapp och kvalitetsprofil du valde, och ABM börjar söka efter den enligt bevakningsinställningen. Om en bok redan finns i biblioteket upptäcks det bara via ASIN. En annan utgåva av samma titel har en annan ASIN.

## Sökning på författare och serie

:::caution[Kommer i nästa version]
Söklägena Author och Series finns inte i någon släppt version än.
:::

Sökningen får två lägen som hittar själva författarna och serierna. De äldre boklägena byter namn till "Books by author" och "Books in series". Att lägga till en författare eller serie bygger upp dess katalog och lägger till dess böcker som önskade enligt **Monitor**:

| Monitor | Lägger till |
|---|---|
| All | Varje bok, även de som inte har kommit ut än |
| Future | Bara böcker som kommer ut från och med nu |
| Missing (standard) | Böcker du inte äger |
| None | Bara katalogen |

Du väljer också rotmapp, kvalitetsprofil och om böcker som dyker upp senare också ska läggas till. Det är på som standard för en serie och av för en författare. En författare eller serie som redan finns i ditt bibliotek visar "In Library" med åtgärden **Add missing books**.

Tillägget körs som en bakgrundsuppgift med en förloppsnotis.

## Om sökningen inte ger något

En sökning som inte får något svar från metadatakällan misslyckas med ett fel i stället för en tom lista. Se [Felsökning](/sv/troubleshooting/#metadatakällan-är-inte-tillgänglig).
