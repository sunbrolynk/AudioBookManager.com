---
title: Bibliotheek importeren
description: Breng een bestaande collectie in ABM met de Import Workbench.
---

Library Import scant een map met luisterboeken, koppelt elke map aan metadata en voegt de boeken toe aan je bibliotheek. **Library > Library Import** opent "Import audiobooks you already have", waar je een map kiest om te scannen. Zodra de scan begint, gaat ABM naar de matchpagina met de kop **Match Audiobooks**, waar je de matches controleert en de boeken toevoegt.

## Zo werkt het

1. Scan een map. Elke map met audio wordt een rij.
2. Controleer de matches. Verbeter de matches die dat nodig hebben.
3. Vink de rijen aan die je wilt en voeg ze dan toe aan de bibliotheek of verwijder ze.

Elke optie is een optionele afwijking van een standaard in Media Management.

## Wanneer een match wordt geaccepteerd

De scan accepteert een match alleen als de bestanden hem bevestigen:

- de ASIN in de eigen tags van de bestanden vindt het boek, of
- de speelduur van het boek zit binnen drie minuten van die van de bestanden, en de plaats in de serie of de titel klopt met ze.

Een auteur of plaats in de serie die de bestanden tegenspreekt, sluit een boek uit. Passen de bestanden even goed bij twee verschillende boeken of opnames, dan wordt geen van beide geaccepteerd.

De speelduur van de bestanden telt alleen als elk bestand van het boek gelezen kon worden. Is er één niet te meten, dan heeft de rij geen speelduur: alleen de ASIN kan dan een match bevestigen, en anders wacht het boek onder **Needs a look**.

Staat een boek er in twee formaten, dan is elk formaat een eigen rij en wordt het apart gemeten. Een boek in delen in verschillende formaten is één rij als het een eigen map heeft, en de delen worden opgeteld.

Op speelduur wordt alleen een Engelse editie aangenomen, of een waarvan de vermelding geen taal noemt. Een editie in een andere taal wordt alleen aangenomen als de eigen ASIN van de bestanden haar vindt. Een boek dat uit [lokale opslag](/nl/settings/metadata/) is beantwoord in plaats van een live opzoeking, wordt nooit zonder jou aangenomen.

Als een van de opzoekingen van een rij mislukt, wordt alleen een ASIN-match aangenomen. Een boek dat alleen via de auteur is gevonden, wordt alleen voorgesteld als de speelduur bij de bestanden past, dus een boek zonder vermelding staat op **Unmatched** in plaats van een ander boek van de auteur voor te stellen.

Elke andere match wordt nog steeds voorgesteld, maar de rij telt onder **Needs a look**, begint zonder vinkje, en **Select All** slaat hem over tot je die match bevestigt of een andere kiest. Een geaccepteerde match met een boek dat al in je bibliotheek staat, telt onder **In library**. Een **Needs a look**-rij waarvan de suggestie een boek uit de bibliotheek is, stelt haar bibliotheekvraag pas als je die match bevestigt. Tot dan blokkeert ze Add als je haar aanvinkt, als een rij die nog een beslissing nodig heeft.

Een boek in meerdere losse bestanden die een map delen met andere boeken, zoals een auteursmap of de map die je scant, is één rij met alle delen. Bestanden die verschillen in een boek- of deelnummer blijven aparte rijen. Delen worden per formaat gegroepeerd: een bestand met het hele boek ernaast is een eigen rij, en een bitrate in een bestandsnaam, zoals `128kbps`, is geen deelnummer.

Twee formaten van één boek, zoals `Book.mp3` en `Book.m4b`, zijn aparte rijen, of de bestanden nu los in de map staan die je scant of in een eigen boekmap. Elke rij importeert, verwijdert en meet alleen zijn eigen bestand. Een cover, cue of ander niet-audiobestand met dezelfde naam gaat mee met het bestand van het boek als het boek er in één formaat staat, en blijft staan als het er in twee staat. Dat geldt ook als de ene kopie naar de bibliotheek wordt verplaatst en de andere in dezelfde import wordt verwijderd.

Een tag geschreven als `Title: Series, Book 2` wordt gelezen als titel, serie en plaats in de serie.

Een positie in de serie geschreven als bereik, zoals `1-3`, klopt met elke positie daarbinnen. Twee getallen die anders geschreven zijn, zoals `1, 3`, tellen als geen positie.

Een tag voor titel, album, serie, seriedeel, artiest, albumartiest, componist of verteller van meer dan 500 tekens wordt genegeerd.

**Recent Import Sessions** op de pagina Library Import toont per scan hoeveel rijen een match hebben, boeken die al in de bibliotheek staan meegeteld, en hoeveel er nog openstaan, rijen waarvoor je nog een match moet kiezen meegeteld.

## De lijst lezen

- De samenvatting laat zien hoeveel mappen er gevonden zijn en hoeveel er klaar zijn. De balk bovenaan heeft **Sort** (Folder name, Status, Title, Author, Series, Files) en **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Elk filter toont zijn aantal, en de aantallen kloppen met de samenvatting. Een match die je hebt bevestigd heet Ready. Sortering en filter worden op dit apparaat onthouden. Ze staan niet in het paginaadres, dus een link met `?sort=` of `?filter=` neemt ze niet mee.
- Elke rij toont de cover, titel, auteur en serie, en hoe zeker de match is als percentage, zoals "95% match". Elke rij houdt alle treffers die de zoekopdrachten op titel, auteur en serie vinden. In de mapdetails staat **Find a match** of **Change match** om zelf te zoeken. De zoekopdracht toont eerst de beste treffers van Libex voor wat je typte, en daarna de boeken die de zoekopdrachten op titel, auteur en serie vinden, elk boek één keer, 50 tegelijk. Er laden er meer als je scrolt, of met **Load more**, tot er geen meer zijn.
- Hebben de bestanden geen ASIN of speelduur om de editie te bevestigen, dan staat dat in de mapdetails.
- **Rescan** pikt mappen op die na de scan zijn toegevoegd en houdt je keuzes vast.

Een ASIN uit een commentaar of beschrijving is alleen een hint. Het telt pas als match als de titel ook overeenkomt met de mapnaam. Alleen de speciale ASIN-tag telt op zichzelf.

## Samenvoegen, splitsen en toevoegen

- Voeg rijen samen die één boek zijn, verspreid over meerdere mappen. Splits ze weer vanuit de mapdetails. De match van de samengevoegde rij is alleen een suggestie: ze telt onder **Needs a look** en staat niet aangevinkt tot je haar bevestigt of een andere kiest. Haar speelduur is het totaal van de delen alleen als elk deel er een heeft, en ze houdt een ASIN alleen als alle delen dezelfde geven. Samenvoegen is alleen voor de delen van één boek: laat twee formaten van één boek aparte rijen, want samenvoegen telt beide speelduren op. Een opzoeking die klaar is nadat je haar rij hebt samengevoegd of gesplitst, is ook alleen een suggestie.
- **Confirm match** in de details van een rij vinkt een **Needs a look**-rij aan, en **Undo confirmation** haalt dat vinkje weer weg.
- Toevoegen wordt geblokkeerd met een reden boven de knop, zoals "Select at least one folder" of "2 selected rows still need a decision". Toevoegen wordt ook geweigerd, zonder iets aan te raken, als twee rijen dezelfde map of hetzelfde bestand claimen.
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

Een rij kun je ook beantwoorden met **keep library** (een kopie afwijzen van een boek dat al in de bibliotheek staat) of **remove empty** (een map zonder audio afwijzen waar nog wel artwork en sidecars in staan). Die ruimen alleen op wat bij de rij hoort. **remove empty** weigert alles waar audio in zit. Bestanden gaan naar de prullenbak als je er een hebt ingesteld, en het takenlog toont elk verwijderd pad. Een **keep library**-beslissing geldt alleen voor het bibliotheekboek waar ze over ging: kies je een match die iets anders vraagt of over een ander bibliotheekboek gaat, dan vraagt de rij het opnieuw. De import controleert het opnieuw als hij draait, en er wordt niets verwijderd als de kopie in de bibliotheek dan geen bestanden heeft ("Your library has no copy of this book to keep") of als de map bestanden van een boek uit je bibliotheek bevat ("This folder holds files of a book in your library"). Rijen die bestanden verwijderen in plaats van ze te importeren, draaien pas als elke import van dezelfde keer Toevoegen klaar is, en elke rij wordt geweigerd als een van zijn bestanden dan bij een boek uit je bibliotheek hoort. Zo verwijderen ze nooit bestanden waaruit in dezelfde ronde net een boek is toegevoegd.

## Cover en extra bestanden per map

De inspector toont de eigen cover van de map naast die van de gematchte editie, elk met de afmeting in pixels. Eén klik kiest de andere. Daaronder somt **Extra files** elk ander bestand op, onder de naam van de Media Management-schakelaar die erbij hoort. Een stip geeft aan dat een keuze afwijkt van de instellingen, en **Apply this cover and these file choices to the N other selected** kopieert de keuzes van één map naar de rest. Een rij die bestanden toevoegt aan een boek dat al in de bibliotheek staat, heeft geen keuzemenu.

Zie ook [Een bibliotheek verhuizen](/nl/guides/moving-a-library-in/) en [Mediabeheer](/nl/settings/media-management/).
