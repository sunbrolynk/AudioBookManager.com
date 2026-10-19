---
title: Kapitler
description: Sammenlign de innebygde kapitlene i en bok med Libex, og fiks dem.
---

:::caution[Kommer i neste versjon]
Alt på denne siden unntatt standardene for konvertering er ikke med i en utgitt versjon ennå.
:::

Detaljsiden til en bok viser kapitlene Libex har, ved siden av kapitlene som faktisk ligger i filene dine. Libex er fasiten. Spørsmålet visningen svarer på, er om filene dine har det Libex sier de skal ha.

## Lese sammenligningen

Hvert Libex-kapittel får et merke, et ikon pluss et ord:

- **Matches**: et innebygd kapittel starter innenfor 2 sekunder, og tittelen er den samme når du ser bort fra store og små bokstaver, aksenter og tegnsetting i endene. "Chapter 1" og "Chapter One" er ulike titler.
- **Differs**: tittelen er annerledes, eller tittelen finnes i nærheten, men starter mer enn 2 sekunder unna.
- **Missing**: ingenting innebygd passer til det.
- **Extra**: et innebygd kapittel som ikke passer til noe Libex-kapittel.

Bøker med flere filer legges etter hverandre på én tidslinje i filnavnrekkefølge. Et kapittel som fortsetter over i neste fil som "(cont.)", leses som ett kapittel. Kan ikke Libex nås, ser du den innebygde lista og en linje som sier hvorfor. Siden feiler aldri av det.

## Feil utgave

Tidene fra Libex passer bare til utgaven de beskriver. Hvis lengden på lyden din avviker fra Libex med mer enn 15 sekunder eller 0,5 prosent, det som er størst, dukker det opp en advarsel, og både **Update** og **Create .cue** blokkeres. Det finnes ingen overstyring.

## Oppdatere innebygde kapitler (Update embedded chapters)

Erstatter kapitlene i hver lydfil med kapitlene fra Libex. Det kjører som en kapitteljobb i [konverteringskøen](/nb/using/conversions/), uten omkoding. Det tilbys bare når sammenligningen sier "differs" eller "no embedded chapters".

- Hver fil skrives om til en midlertidig fil, sjekkes og byttes så inn. Sjekken krever at den kan leses, at den ikke er kortere enn originalen med mer enn 0,5 sekunder eller 1 prosent, at den har samme kodek, og at den har nøyaktig det antallet kapitler som ble bedt om. Hvis sjekken feiler, blir originalen liggende.
- Stopper en jobb halvveis, blir filer som allerede er skrevet om, værende omskrevet. Feilen sier "N of M files already updated". Kjør Update igjen når du har fikset årsaken.
- Avvist på forhånd: en annen konvertering for boka kjører, ingen ASIN eller ingen Libex-kapitler, feil utgave, en fil som ikke kan leses, eller ingenting å oppdatere.

## Lage .cue (Create .cue)

Skriver et cue-ark fra Libex-kapitlene inn i bokmappen, med navn etter den første lydfila. Det overskriver en eksisterende fil med samme navn. Se [Sidefiler](/nb/using/sidecars/).

## Fallgruver

- VBR MP3-filer uten lengdeheader har en anslått lengde. En riktig utgave kan se ut til å bomme med noen sekunder.
- En omskrevet fil ser endret ut for Audiobookshelf og blir skannet på nytt.
- Kapitteltitler som inneholder `=`, `;`, `#` eller en omvendt skråstrek, kan bli skrevet feil til en fiks er på plass.

## Standard kapitteloppførsel for konverteringer

Dette er noe annet enn det over: **Settings > Conversions > Chapter Handling** bestemmer hva en konvertering gjør med kapitler. Se [Konverteringsinnstillinger](/nb/settings/conversions/).
