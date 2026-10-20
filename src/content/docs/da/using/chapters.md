---
title: Kapitler
description: Sammenlign en bogs indlejrede kapitler med Libex, og ret dem.
---

:::caution[Kommer i en senere udgivelse]
Alt på denne side undtagen standarderne for konvertering er ikke med i en udgivet version endnu.
:::

En bogs detaljeside viser de kapitler, Libex har, ved siden af de kapitler, der faktisk er indlejret i dine filer. Libex er referencen. Spørgsmålet, visningen svarer på, er, om dine filer indeholder det, Libex siger, de burde.

## Sådan læser du sammenligningen

Hvert Libex-kapitel får et mærke, et ikon plus et ord:

- **Matches**: et indlejret kapitel starter inden for 2 sekunder, og titlen er den samme, når man ser bort fra store og små bogstaver, accenter og tegnsætning i enderne. "Chapter 1" og "Chapter One" er forskellige titler.
- **Differs**: titlen er anderledes, eller titlen findes i nærheden, men starter mere end 2 sekunder væk.
- **Missing**: intet indlejret kapitel passer til det.
- **Extra**: et indlejret kapitel, som intet Libex-kapitel passer til.

Bøger med flere filer bliver lagt i forlængelse af hinanden på én tidslinje i filnavnsrækkefølge. Et kapitel, der fortsætter over i en ny fil som "(cont.)", bliver læst som ét kapitel. Kan Libex ikke nås, ser du den indlejrede liste og en linje, der siger hvorfor. Siden fejler aldrig af den grund.

## Forkert udgave

Libex' tider passer kun til den udgave, de beskriver. Hvis længden på din lyd afviger fra Libex' med mere end 15 sekunder eller 0,5 procent, alt efter hvad der er størst, kommer der en advarsel, og både **Update** og **Create .cue** bliver blokeret. Der er ingen måde at tilsidesætte det på.

## Opdatér indlejrede kapitler (Update)

Erstatter kapitlerne i hver lydfil med Libex'. Det kører som et kapitel-job i [konverteringskøen](/da/using/conversions/) uden omkodning. Det bliver kun tilbudt, når sammenligningen siger "differs" eller "no embedded chapters".

- Hver fil bliver skrevet til en midlertidig fil, tjekket og så byttet ind. Tjekket kræver, at den kan læses, ikke er mere end 0,5 sekunder eller 1 procent kortere end originalen, har samme codec og indeholder præcis det antal kapitler, der blev bedt om. Fejler tjekket, bliver originalen.
- Stopper et job halvvejs, forbliver filer, der allerede er skrevet om, skrevet om. Fejlen siger "N of M files already updated". Kør Update igen, når du har rettet årsagen.
- Afvist på forhånd: en anden konvertering af bogen kører, ingen ASIN eller ingen Libex-kapitler, forkert udgave, en fil, der ikke kan læses, eller intet at opdatere.

## Lav en .cue (Create .cue)

Skriver et cue sheet ud fra Libex-kapitlerne i bogens mappe, opkaldt efter den første lydfil. Den overskriver en eksisterende fil med det navn. Se [Sidecar-filer](/da/using/sidecars/).

## Faldgruber

- VBR MP3-filer uden en længde-header har en anslået længde. En korrekt udgave kan se et par sekunder forkert ud.
- En omskrevet fil ser ændret ud for Audiobookshelf og bliver scannet igen.
- Kapiteltitler, der indeholder `=`, `;`, `#` eller en backslash, kan blive skrevet forkert, indtil en rettelse lander.

## Standardadfærd for kapitler ved konvertering

Det her er adskilt fra ovenstående: **Settings > Conversions > Chapter Handling** afgør, hvad en konvertering gør med kapitler. Se [Konverteringsindstillinger](/da/settings/conversions/).
