---
title: Bibliotheek importeren
description: Breng een bestaande collectie in ABM met de Import Workbench.
---

Library Import scant een map met luisterboeken, koppelt elke map aan metadata en voegt de boeken toe aan je bibliotheek. **Library > Library Import** opent "Import audiobooks you already have", waar je een map kiest om te scannen. Zodra de scan begint, gaat ABM naar de matchpagina met de kop **Match Audiobooks**, waar je de matches controleert en de boeken toevoegt.

## Zo werkt het

1. Scan een map. Elke map met audio wordt een rij.
2. Controleer de matches. Verbeter de matches die dat nodig hebben.
3. Selecteer de rijen en voeg ze toe aan de bibliotheek.

Elke optie is een optionele afwijking van een standaard in Media Management. Gewoon scannen en toevoegen kost nooit meer dan twee klikken.

## De lijst lezen

- De samenvatting laat zien hoeveel mappen er gevonden zijn en hoeveel er gematcht zijn. Filter de lijst op All, Matched, Needs attention, Unmatched, In library of Failed lookup. Het filter blijft bewaard in het paginaadres.
- Elke rij toont de cover, titel, auteur en serie, en hoe zeker de match is als percentage, zoals "95% match". In de mapdetails staat **Find a match** of **Change match** om zelf te zoeken.
- Hebben de bestanden geen ASIN of speelduur om de editie te bevestigen, dan staat dat in de mapdetails.
- **Rescan** pikt mappen op die na de scan zijn toegevoegd en houdt je keuzes vast.

Een ASIN uit een commentaar of beschrijving is alleen een hint. Het telt pas als match als de titel ook overeenkomt met de mapnaam. Alleen de speciale ASIN-tag telt op zichzelf.

## Samenvoegen, splitsen en toevoegen

- Voeg rijen samen die één boek zijn, verspreid over meerdere mappen. Splits ze weer vanuit de mapdetails.
- Toevoegen wordt geblokkeerd met een reden boven de knop, zoals "Select at least one folder" of "2 selected rows still need a decision".
- Alles wat bestanden zou verwijderen of vervangen, vraagt eerst om bevestiging.
- Verlaat je de pagina, dan worden je openstaande wijzigingen bewaard.

## Kopiëren, verplaatsen of hardlinken

**Settings > Media Management > Importing** bepaalt de standaard voor Library Import: kopiëren (de standaard), verplaatsen of hardlinken. Per import kun je iets anders kiezen.

Een gehardlinkt boek kost geen extra schijfruimte en het origineel blijft waar het staat. Voor hardlinken moet de standaard rootmap het ondersteunen en eerst gecontroleerd zijn. Anders is de optie grijs, met de reden erbij. Een bestand dat niet gelinkt kan worden, bijvoorbeeld omdat het op een andere schijf staat, wordt gekopieerd en nooit verplaatst. De afgeronde import meldt hoeveel er gekopieerd zijn.

## Extra bestanden

**Import Extra Files** (standaard aan) neemt de cover, notities en andere niet-audiobestanden van een boek mee. Dat geldt voor Library Import, Manual Import en afgeronde downloads. Met **Show Advanced** kies je bij **Preferred Cover** de gematchte Audible-cover (de standaard) of de eigen cover uit de map.

## Lange waarden

Een verteller, titel of pad dat is afgekapt met een beletselteken zie je in zijn geheel als je erop tikt of klikt. Tik of klik nog een keer om het weer te sluiten. Met een muis zie je de hele waarde ook als je eroverheen beweegt. Met het toetsenbord geef je het focus en druk je op Enter of de spatiebalk.

## Andere antwoorden dan importeren

Een rij kun je ook beantwoorden met **keep library** (een kopie afwijzen van een boek dat al in de bibliotheek staat) of **remove empty** (een map zonder audio afwijzen waar nog wel artwork en sidecars in staan). Die ruimen alleen op wat bij de rij hoort. Alles waar audio in zit, wordt geweigerd. Bestanden gaan naar de prullenbak als je er een hebt ingesteld, en het takenlog toont elk verwijderd pad.

## Cover en extra bestanden per map

De inspector toont de eigen cover van de map naast die van de gematchte editie, elk met de afmeting in pixels. Eén klik kiest de andere. Daaronder somt **Extra files** elk ander bestand op, onder de naam van de Media Management-schakelaar die erbij hoort. Een stip geeft aan dat een keuze afwijkt van de instellingen, en **Apply this cover and these file choices to the N other selected** kopieert de keuzes van één map naar de rest. Een rij die bestanden toevoegt aan een boek dat al in de bibliotheek staat, heeft geen keuzemenu.

Zie ook [Een bibliotheek verhuizen](/nl/guides/moving-a-library-in/) en [Mediabeheer](/nl/settings/media-management/).
