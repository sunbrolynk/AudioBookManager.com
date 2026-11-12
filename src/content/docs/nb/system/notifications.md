---
title: Varsler
description: Klokken i toppteksten og panelet under den.
---

Klokken i toppteksten på datamaskinen er der ABM forteller deg hva som har skjedd og hva som trenger deg. Klikk på den for å åpne varselpanelet. Det finnes ingen klokke på telefon ennå.

## Klokken

- Et tall på klokken er hvor mange varsler som er uleste. Over 99 vises 99+. Når et ulest varsel er en feil, blir tallet rødt.
- En ring rundt klokken er pågående arbeid. Når ABM vet hvor langt det har kommet, fylles ringen til gjennomsnittet av de kjørende elementene. Når det ikke vet det, snurrer ringen bare.
- Et nytt varsel får klokken til å blinke kort i fargen til nivået sitt. Har du redusert bevegelse slått på i systemet, hoppes blinkingen over.
- Mister nettleseren live-forbindelsen til ABM i mer enn 10 sekunder, blir klokken til en overstreket klokke med en stiplet ring. Den kommer tilbake når forbindelsen kommer tilbake.

Klokkens tilgjengelige navn leser opp det samme: antall uleste, hvor mange elementer som kjører og prosenten deres, og om den er frakoblet.

## Panelet

Fra topp til bunn:

- **Needs attention** vises bare når noe er åpent. Det er ting som blir værende til de er løst, som en bok der nedlastingen mislyktes eller en ny ABM-versjon. Hver har én knapp: **Search again** setter et søk etter boken i kø, og **What's new** åpner siden Updates. Andre åpner siden de gjelder, eller oppgaven når den kan gjenopptas. **x** på en rad avviser den.
- **Running** viser arbeid som pågår akkurat nå: oppgaver, nedlastinger og konverteringer, med framdrift og gjenstående tid der det er kjent. Klikk på en rad for å gå dit.
- **Recent** viser de nyeste varslene først, med antall uleste. Et klikk åpner det varselet gjelder og markerer det som lest. En rad har også knapper for å markere den som lest eller ulest og for å slette den.
- **Load older** viser mer av historikken. Når det ikke finnes noe eldre, sier panelet det.

Når alle tre er tomme, sier panelet at du er à jour.

Bunnteksten har **Mark all read** og en lenke til [aktivitetsloggen](/nb/system/activity-log/). Menyen ved siden av paneltittelen har **Clear all**, som spør først. Den fjerner alle varsler unntatt de som fortsatt trenger oppmerksomhet. De blir værende til du løser eller avviser dem.

## Hva som ikke registreres

Et varsel kan komme fra en bakgrunnsoppgave, en nedlasting eller en konvertering, eller fra noe du gjorde i nettleseren som mislyktes. Panelets egne kontroller er unntaket. Mislykkes det å markere som lest, slette, avvise, tømme eller laste eldre, viser panelet feilen ved siden av den kontrollen og legger ikke til noe varsel om det. Ellers ville en ødelagt innboks fylt innboksen.

## Resultater ved kontrollen

Handlinger på Library, Book Detail, Calendar, Authors og Series og cover-handlingene viser resultatet som en kort linje ved kontrollen du brukte. En vanlig suksesslinje forsvinner av seg selv etter et par sekunder. En feil eller en advarsel blir stående til din neste handling på den kontrollen. Feil registreres også i Varsler, så du finner dem etter at linjen er borte.

En bok, forfatter eller serie som lagres, men der catalog fill ikke starter, registrerer advarselen "Catalog fill not started". En add all der noen bøker mislykkes, registrerer "Some books were not added" med årsakene.

## Oppbevaring

Gamle varsler fjernes av den daglige logg-oppryddingen, som standard etter **30 dager**. Sett det med **Notifications Retention** på siden [Generelt](/nb/settings/general/), eller `inbox_retention_days` i [API](/nb/system/api/). 0 beholder dem for alltid. Varsler som fortsatt trenger oppmerksomhet fjernes ikke før du løser dem. Oppryddingen kjører én gang om dagen på oppryddingstidspunktet (som standard 03:00) og gjør ingenting når **Automatic Cleanup** er av. Merknaden nederst i panelet viser gjeldende antall dager og skjules når oppbevaringen er 0.

## Forskjellen fra aktivitetsloggen

Varsler er det du får beskjed om, og du kan tømme dem. [Aktivitetsloggen](/nb/system/activity-log/) er den permanente oversikten over hva som har skjedd, og å tømme Varsler rører den ikke.
