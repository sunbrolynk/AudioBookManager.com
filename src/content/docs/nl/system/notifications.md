---
title: Meldingen
description: De bel in de kop en het paneel eronder.
---

De bel in de kop op desktop is waar ABM je vertelt wat er is gebeurd en wat je aandacht nodig heeft. Klik erop om het meldingenpaneel te openen. Op een telefoon is er nog geen bel.

## De bel

- Een getal op de bel is het aantal ongelezen meldingen. Boven 99 staat er 99+. Als een ongelezen melding een fout is, wordt het getal rood.
- Een ring om de bel is werk in uitvoering. Als ABM weet hoe ver het is, vult de ring zich tot het gemiddelde van de lopende items. Als het dat niet weet, draait de ring alleen.
- Een nieuwe melding laat de bel kort oplichten in de kleur van het niveau. Staat verminderde beweging aan in je systeem, dan wordt dat oplichten overgeslagen.
- Als de browser de live verbinding met ABM langer dan 10 seconden kwijt is, wordt de bel een doorgestreepte bel met een gestippelde ring. Hij komt terug als de verbinding terug is.

De toegankelijke naam van de bel leest hetzelfde voor: het aantal ongelezen, hoeveel items lopen en hun percentage, en of hij offline is.

## Het paneel

Van boven naar beneden:

- **Needs attention** verschijnt alleen als er iets openstaat. Dat zijn dingen die blijven tot ze zijn opgelost, zoals een boek waarvan de download mislukte of een nieuwe ABM-versie. Elk heeft één knop: **Search again** zet een zoekopdracht voor dat boek in de wachtrij en **What's new** opent de pagina Updates. Andere openen de pagina waar ze over gaan, of de taak als die hervat kan worden. De **x** op een rij sluit hem.
- **Running** toont het werk dat nu loopt: taken, downloads en conversies, met voortgang en resterende tijd waar bekend. Klik op een rij om ernaartoe te gaan.
- **Recent** toont de nieuwste meldingen eerst, met het aantal ongelezen. Klikken opent waar de melding over gaat en markeert hem als gelezen. Een rij heeft ook knoppen om hem als gelezen of ongelezen te markeren en te verwijderen.
- **Load older** toont meer van de geschiedenis. Als er niets ouders is, zegt het paneel dat.

Als alle drie leeg zijn, zegt het paneel dat je bij bent.

De voet heeft **Mark all read** en een link naar het [Activity Log](/nl/system/activity-log/). Het menu naast de paneeltitel heeft **Clear all**, dat eerst vraagt. Het verwijdert alle meldingen behalve die nog aandacht nodig hebben. Die blijven tot je ze oplost of sluit.

## Wat niet wordt vastgelegd

Een melding kan komen van een achtergrondtaak, een download of een conversie, of van iets wat je in de browser deed en mislukte. De bediening van het paneel zelf is de uitzondering. Als als-gelezen-markeren, verwijderen, sluiten, wissen of ouder laden mislukt, toont het paneel de fout naast die bediening en komt er geen melding over. Anders zou een kapotte inbox de inbox vullen.

## Resultaten bij het bedieningselement

Acties op Library, Book Detail, Calendar, Authors en Series en de omslagacties tonen hun resultaat als een korte regel bij het element dat je gebruikte. Een gewone succesregel verdwijnt na een paar seconden vanzelf. Een fout of waarschuwing blijft tot je volgende actie op dat element. Fouten worden ook in de bel vastgelegd, zodat je ze kunt terugvinden als de regel weg is.

Een boek, auteur of serie die wordt opgeslagen maar waarvan de catalog fill niet start, legt de waarschuwing "Catalog fill not started" vast. Een add all waarbij sommige boeken mislukken, legt "Some books were not added" vast met de redenen.

## Bewaartermijn

Oude meldingen worden verwijderd door de dagelijkse logopruiming, standaard na **30 dagen**. Stel het in met **Notifications Retention** op de pagina [Algemeen](/nl/settings/general/), of met `inbox_retention_days` in de [API](/nl/system/api/). 0 bewaart ze altijd. Meldingen die nog aandacht nodig hebben worden niet verwijderd tot je ze oplost. De opruiming draait één keer per dag op de opruimtijd (standaard 03:00) en doet niets als **Automatic Cleanup** uit staat. De notitie onderaan het paneel toont het huidige aantal dagen en is verborgen bij bewaartermijn 0.

## Verschil met het Activity Log

Meldingen zijn wat je te horen krijgt, en je kunt ze wissen. Het [Activity Log](/nl/system/activity-log/) is de blijvende vastlegging van wat er is gebeurd, en het wissen van de bel raakt het niet.
