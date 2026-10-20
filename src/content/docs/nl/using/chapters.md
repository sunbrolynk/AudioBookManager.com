---
title: Hoofdstukken
description: Vergelijk de ingesloten hoofdstukken van een boek met Libex en verbeter ze.
---

:::caution[Komt in een latere release]
Alles op deze pagina behalve de conversiestandaarden zit nog niet in een uitgebrachte versie.
:::

De detailpagina van een boek toont de hoofdstukken die Libex heeft naast de hoofdstukken die echt in je bestanden zitten. Libex is de referentie. De vraag die deze weergave beantwoordt: bevatten je bestanden wat er volgens Libex in hoort te zitten?

## De vergelijking lezen

Elk Libex-hoofdstuk krijgt een badge, een icoon plus een woord:

- **Matches**: een ingesloten hoofdstuk begint binnen 2 seconden en de titel is hetzelfde, als je hoofdletters, accenten en leestekens aan het begin en eind negeert. "Chapter 1" en "Chapter One" zijn verschillende titels.
- **Differs**: de titel verschilt, of de titel bestaat in de buurt maar begint meer dan 2 seconden verderop.
- **Missing**: er is geen ingesloten hoofdstuk dat erbij past.
- **Extra**: een ingesloten hoofdstuk waar geen Libex-hoofdstuk bij past.

Boeken met meerdere bestanden worden achter elkaar op één tijdlijn gezet, in de volgorde van de bestandsnamen. Een hoofdstuk dat in het volgende bestand doorloopt als "(cont.)", telt als één hoofdstuk. Is Libex niet bereikbaar, dan zie je de ingesloten lijst en een regel met de reden. De pagina geeft daar nooit een fout op.

## Verkeerde editie

De tijden van Libex passen alleen bij de editie die ze beschrijven. Wijkt de lengte van je audio meer dan 15 seconden of 0,5 procent af van die van Libex, welke van de twee het grootst is, dan verschijnt er een waarschuwing en worden **Update** en **Create .cue** allebei geblokkeerd. Je kunt dat niet overrulen.

## Ingesloten hoofdstukken bijwerken (Update)

Vervangt de hoofdstukken in elk audiobestand door die van Libex. Het draait als hoofdstukjob in de [conversiewachtrij](/nl/using/conversions/), zonder opnieuw te encoderen. Het wordt alleen aangeboden als de vergelijking "differs" of "no embedded chapters" zegt.

- Elk bestand wordt naar een tijdelijk bestand herschreven, gecontroleerd en dan omgewisseld. De controle eist dat het leesbaar is, niet meer dan 0,5 seconde of 1 procent korter is dan het origineel, dezelfde codec heeft, en precies het gevraagde aantal hoofdstukken bevat. Faalt de controle, dan blijft het origineel staan.
- Stopt een job halverwege, dan blijven bestanden die al herschreven zijn herschreven. De foutmelding zegt "N of M files already updated". Draai Update opnieuw als je de oorzaak hebt opgelost.
- Vooraf geweigerd: er draait al een andere conversie voor het boek, er is geen ASIN of er zijn geen Libex-hoofdstukken, verkeerde editie, een onleesbaar bestand, of er valt niks bij te werken.

## Een .cue-bestand maken (Create .cue)

Schrijft een cue sheet met de Libex-hoofdstukken in de boekmap, vernoemd naar het eerste audiobestand. Een bestaand bestand met die naam wordt overschreven. Zie [Sidecarbestanden](/nl/using/sidecars/).

## Valkuilen

- VBR-MP3-bestanden zonder lengteheader hebben een geschatte lengte. Een juiste editie kan dan een paar seconden afwijken.
- Een herschreven bestand ziet er voor Audiobookshelf gewijzigd uit en wordt opnieuw gescand.
- Hoofdstuktitels met `=`, `;`, `#` of een backslash kunnen verkeerd geschreven worden tot er een fix is.

## Standaard hoofdstukgedrag bij conversies

Los van het bovenstaande: **Settings > Conversions > Chapter Handling** bepaalt wat een conversie met hoofdstukken doet. Zie [Conversie-instellingen](/nl/settings/conversions/).
