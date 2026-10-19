---
title: Konverteringar
description: Konvertera, slå ihop, dela upp och lägg till kapitel i ljudfiler, med en kö du kan pausa.
---

**Library > Conversions** kör ffmpeg-jobb på ditt bibliotek. Fyra sorter:

| Jobb | Vad det gör |
|---|---|
| Convert Format | Kodar om till M4B, MP3, M4A, FLAC eller Opus |
| Merge Parts | Slår ihop flera filer till en, med kapitel |
| Split Chapters | Delar upp en fil i en fil per kapitel |
| Ensure Chapters | Lägger till eller rättar kapitelmarkeringar utan omkodning |

Standardvalen för varje jobb kommer från [Konverteringsinställningar](/sv/settings/conversions/). Varje jobb kan åsidosätta dem.

## Kön

Jobben väntar i en kö och körs upp till **Concurrent Conversions** åt gången (2 som standard). Färdiga jobb flyttas till History, som du kan rensa.

Resultatet skrivs till en privat arbetsmapp och placeras i biblioteket först när det är klart. Varje fil läggs in under ett tillfälligt namn och döps om på plats, så en halvskriven bok dyker aldrig upp. En kontroll av ledigt utrymme körs innan ett jobb startar och igen innan placeringen. Källfiler skrivs aldrig över.

Att konvertera en fil till formatet den redan har vägras, eftersom det skulle skriva över originalet.

## Efter en konvertering

ABM uppdaterar bokens filposter, storlek och kvalitet, så en konverterad bok visar sin nya kvalitet. Om **Delete Original** är på hamnar de gamla filerna i konverteringens papperskorg när den är aktiverad.

Om placeringen av resultatet misslyckas (till exempel om biblioteksmappen är full) misslyckas jobbet och det färdiga resultatet sparas i sin arbetsmapp. Felet nämner mappen. **Retry** startar om jobbet och kastar det sparade resultatet, så den frågar först. **Clear history** behåller jobb som fortfarande har resultat som inte har placerats.

## Pausa och återuppta

:::caution[Kommer i nästa version]
Paus finns inte i någon släppt version än.
:::

Två sorters paus, och ingen av dem avbryter något:

- **Pause** på ett jobb som körs fryser dess ffmpeg-processer där de är. Resume fortsätter från samma punkt.
- **Pause queue** (överst i kön, eller i toppfältet på en mobil) hindrar nya jobb från att starta och fryser varje jobb som körs.

Ett jobb du har pausat själv förblir pausat när kön återupptas, och även efter en omstart. Ett jobb som körs när ABM stoppas kommer tillbaka som pausat och startar inte av sig självt. Resume fortsätter från den senast färdiga delen för sammanslagningar, uppdelningar och konverteringar med flera filer. En konvertering av en enda fil börjar om den filen.

Gränsen på 6 timmars körtid räknar bara tid som inte är pausad. Om det sparade kötillståndet inte går att läsa vid start börjar kön pausad och säger det. Tryck på Resume queue för att skriva om det.

Om du kan Sonarr: det finns inget sådant i arr-apparna. Se det som en liten kodarkö som råkar bo inuti managern.

## Fallgropar

- Concurrent Conversions gånger Threads Per Job bör inte överstiga antalet CPU-kärnor du har.
- En konverterad fil får ny storlek och ny ändringstid, så Audiobookshelf skannar om den.
- Att konvertera en fil som är hårdlänkad till en torrent som seedas skapar en ny fil. Kopian som seedas behåller de gamla byten.
