---
title: Kapitel
description: Jämför en boks inbäddade kapitel med Libex och rätta dem.
---

:::caution[Kommer i nästa version]
Allt på den här sidan utom standardvalen för konverteringar finns inte i någon släppt version än.
:::

En boks detaljsida visar kapitlen som Libex har bredvid kapitlen som faktiskt är inbäddade i dina filer. Libex är referensen. Frågan vyn svarar på är om dina filer innehåller det som Libex säger att de ska.

## Läsa jämförelsen

Varje Libex-kapitel får en märkning, en ikon plus ett ord:

- **Matches**: ett inbäddat kapitel börjar inom 2 sekunder och titeln är densamma om man bortser från versaler, accenter och skiljetecken i ändarna. "Chapter 1" och "Chapter One" är olika titlar.
- **Differs**: titeln skiljer sig, eller titeln finns i närheten men börjar mer än 2 sekunder bort.
- **Missing**: inget inbäddat kapitel paras ihop med det.
- **Extra**: ett inbäddat kapitel som inget Libex-kapitel paras ihop med.

Böcker med flera filer läggs efter varandra på en tidslinje i filnamnsordning. Ett kapitel som fortsätter över en fil som "(cont.)" läses tillbaka som ett kapitel. Om Libex inte går att nå ser du den inbäddade listan och en rad som säger varför. Sidan ger aldrig fel.

## Fel utgåva

Libex tider passar bara utgåvan de beskriver. Om längden på ditt ljud skiljer sig från Libex med mer än 15 sekunder eller 0,5 procent, beroende på vilket som är störst, visas en varning och både **Update** och **Create .cue** blockeras. Det går inte att åsidosätta.

## Uppdatera inbäddade kapitel (Update embedded chapters)

Ersätter kapitlen i varje ljudfil med Libex kapitel. Det körs som ett kapiteljobb i [konverteringskön](/sv/using/conversions/), utan omkodning. Det erbjuds bara när jämförelsen säger "differs" eller "no embedded chapters".

- Varje fil skrivs om till en tillfällig fil, kontrolleras och byts sedan in. Kontrollen kräver att filen går att läsa, inte är kortare än originalet med mer än 0,5 sekunder eller 1 procent, har samma codec och innehåller exakt det antal kapitel som efterfrågades. Om kontrollen misslyckas ligger originalet kvar.
- Om ett jobb stannar halvvägs förblir filer som redan har skrivits om omskrivna. Felet säger "N of M files already updated". Kör Update igen när du har fixat orsaken.
- Vägras direkt: en annan konvertering för boken körs, ingen ASIN eller inga Libex-kapitel, fel utgåva, en fil som inte går att läsa, eller inget att uppdatera.

## Skapa .cue (Create .cue)

Skriver ett cue-blad från Libex-kapitlen i bokens mapp, döpt efter den första ljudfilen. Det skriver över en befintlig fil med det namnet. Se [Sidecar-filer](/sv/using/sidecars/).

## Fallgropar

- VBR-MP3:or utan längdheader har en uppskattad längd. En korrekt utgåva kan se ut att vara några sekunder fel.
- En omskriven fil ser ändrad ut för Audiobookshelf och skannas om.
- Kapiteltitlar som innehåller `=`, `;`, `#` eller ett bakvänt snedstreck kan skrivas fel tills en fix kommer.

## Standardbeteendet för kapitel vid konverteringar

Separat från det ovan: **Settings > Conversions > Chapter Handling** bestämmer vad en konvertering gör med kapitel. Se [Konverteringsinställningar](/sv/settings/conversions/).
