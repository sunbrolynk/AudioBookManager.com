---
title: Din metadata, din kontroll
description: Vad en uppdatering ändrar, vad du styr över, och filerna och taggarna som ABM skriver åt din spelare.
---

ABM håller ett register över ditt biblioteks metadata i sin egen databas och skriver ut den där din spelare kan använda den. Den här sidan går igenom vad du själv styr över och vad en uppdatering rör.

## Vad en uppdatering ändrar

En uppdatering (en boks **Refresh & Scan**, en uppdatering av en författare eller av en serie) frågar metadatakällan igen och tillämpar det som kommer tillbaka. Fält som skrivs över när källan har ett värde: titel, undertitel, år och utgivningsdatum, betyg, speltid, språk, förlag, beskrivning, författare, uppläsare, genrer och omslaget.

Ett fält som källan returnerar tomt lämnas som det är.

## Vad du styr över

- **Ett omslag du har valt.** Det är låst. Se [Omslagslåset](/sv/metadata/cover-lock/).
- **Taggar, automatiska taggar, bevakning, val av kvalitetsprofil och själva filerna.** En uppdatering rör dem inte.
- **En bok vars filer inte går att läsa.** Den lämnas helt i fred, och sidan Tasks visar varför.

Bokdetaljer som titel, författare och beskrivning kommer från källan. ABM erbjuder ingen redigering av dem för hand, och det finns inga planer på det. Det du styr över är hur de sparas och var de skrivs.

## Redigeringsdialogen

Redigeringsdialogen ändrar bevakning, kvalitetsprofil, sökväg och taggar, och låter dig skriva sidecar-filer och ljudtaggar i samma steg, för en bok eller ett helt urval av serier och författare. Se [Bibliotek](/sv/using/library/#redigeringsdialogen).

## Sidecars som din spelare läser

ABM skriver `cover.jpg`, en `.opf`, `desc.txt` och `reader.txt` bredvid ljudet, och ett `.cue`-kapitelblad i nästa version. Audiobookshelf läser OPF-filen, omslaget och textfilerna, så det du har valt i ABM är det spelaren visar. Se [Sidecar-filer](/sv/using/sidecars/).

## Taggar som skrivs in i ljudet

ABM kan skriva titel, artist, albumartist, album, genre, år, kommentar, uppläsare och inbäddad omslagsbild direkt i ljudfilerna, så att datan följer med filen. Det är av som standard. Välj fälten under **Settings > Metadata**. Se [Metadatainställningar](/sv/settings/metadata/).

## Kapitel

ABM jämför kapitlen som är inbäddade i dina filer med den publicerade utgåvans, och kan skriva in de publicerade kapitlen i filerna utan att koda om. Den vägrar när längden på ditt ljud visar att det är en annan utgåva. Se [Kapitel](/sv/using/chapters/). Kommer i nästa version.

## Serie och plats

En bok har sin serie och sin plats i serien. ABM spårar serier som kataloger så att den kan visa vilka böcker du äger och lägga till dem du saknar. Se [Seriebevakning](/sv/using/series-tracking/).

## Taggar och automatiska taggar

Taggarna är dina. Automatiska taggar sätter dem enligt regler (genre, uppläsare, betyg, speltid och mer), och kan ta bort dem när en bok inte längre matchar. Taggarna styr sedan profiler, notiser, indexerare, importlistor och kalenderflödet. Se [Taggar](/sv/settings/tags/).

## Ett lokalt register som växer

Allt ABM lär sig om en bok stannar i ABM:s egen SQLite-databas i `/config`, även böcker du senare tar bort. Säkerhetskopiera den mappen så är registret säkerhetskopierat. Metadatan är inte beroende av att källan går att nå när en bok väl har kommit in.

:::caution[Kommer i nästa version]
Ett dedikerat **Local Metadata Library** är planerat: en kopia du väljer att slå på av allt ABM någonsin har slagit upp, som sparas även efter att en bok har lämnat ditt bibliotek, med egna schemalagda säkerhetskopior och en SQLite-nedladdning. Sektionen för det på sidan Metadata finns i det arbete som inte är sammanslaget än och är märkt som förhandsvisning, inte inkopplad än.
:::

## Scheman för uppdateringar

- Discover har sitt eget schema. Se [Discover-inställningar](/sv/settings/discover/).
- Audible-biblioteket har sitt eget synkschema. Se [Audible-inställningar](/sv/settings/audible/).
- En biblioteksskanning kan köras var N:e timme och när filer ändras. Se [Mediehantering](/sv/settings/media-management/).
- Skrivning av sidecars och taggar vid uppdatering styrs av **Create on Refresh** och **Write Tags on Refresh**.
