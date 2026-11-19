---
title: Biblioteksimport
description: Tag en eksisterende samling med ind i ABM med Import Workbench.
---

Biblioteksimport scanner en mappe med lydbøger, matcher hver mappe med metadata og tilføjer bøgerne til dit bibliotek. **Library > Library Import** åbner "Import audiobooks you already have", hvor du vælger en mappe, der skal scannes. Når scanningen starter, går ABM videre til matchsiden med overskriften **Match Audiobooks**, hvor du tjekker matchene og tilføjer bøgerne.

## Forløbet

1. Scan en mappe. Hver mappe med lyd bliver en række.
2. Tjek matchene. Ret dem, der skal rettes.
3. Sæt flueben ved de rækker, du vil have, og tilføj dem så til biblioteket, eller slet dem.

Hver mulighed er en valgfri tilsidesættelse af en standard i Media Management.

## Hvornår et match bliver godkendt

Scanningen godkender kun et match, når filerne bekræfter det:

- ASIN'en i filernes egne tags finder bogen, eller
- bogens spilletid ligger højst tre minutter fra filernes, og dens plads i serien eller dens titel passer med dem.

En forfatter eller en plads i serien, der modsiger filerne, udelukker en bog. Passer filerne lige godt til to forskellige bøger eller indspilninger, bliver ingen af dem godkendt.

Filernes spilletid tæller kun, når hver fil i bogen kunne læses. Kan én ikke måles, har rækken ingen spilletid: Så kan kun dens ASIN bekræfte et match, og ellers venter bogen under **Needs a look**.

Når en bog findes i to formater, er hvert format sin egen række og måles for sig. En bog delt i dele i forskellige formater er én række, når den har sin egen mappe, og dens dele lægges sammen.

Kun en engelsk udgave, eller en hvis opslag ikke angiver et sprog, accepteres på spilletid. En udgave på et andet sprog accepteres kun, når filernes egen ASIN finder den. En bog, der er besvaret fra [lokal lagring](/da/settings/metadata/) i stedet for et live opslag, accepteres aldrig uden dig.

Når et af rækkens opslag fejler, accepteres kun et ASIN-match. En bog, der kun er fundet ved at søge på forfatteren, foreslås kun, når dens spilletid passer til filernes. En bog uden opslag står derfor som **Unmatched** i stedet for at foreslå en anden af forfatterens bøger.

Alle andre match bliver stadig foreslået, men rækken tæller under **Needs a look**, starter uden flueben, og **Select All** springer den over, indtil du bekræfter matchet eller vælger et andet. Et godkendt match til en bog, du allerede har i biblioteket, tæller under **In library**. En **Needs a look**-række, hvis forslag er en bog i biblioteket, stiller først sit biblioteksspørgsmål, når du bekræfter matchet. Indtil da blokerer den Add, hvis du markerer den, som en række, der stadig mangler en beslutning.

En bog i flere løse filer, der deler mappe med andre bøger, for eksempel en forfattermappe eller den mappe, du scanner, er én række med alle delene. Filer, der adskiller sig med et bog- eller bindnummer, forbliver separate rækker. Dele grupperes efter format: En fil med hele bogen ved siden af er sin egen række, og en bitrate i et filnavn, fx `128kbps`, er ikke et delnummer.

To formater af samme bog, fx `Book.mp3` og `Book.m4b`, er separate rækker, uanset om filerne ligger løst i den mappe, du scanner, eller i deres egen bogmappe. Hver række importerer, fjerner og måler kun sin egen fil. Et cover, en cue- eller anden ikke-lydfil med samme navn følger med bogens fil, når bogen ligger der i ét format, og bliver liggende, når den ligger der i to. Det gælder også, når den ene kopi flyttes ind i biblioteket og den anden fjernes i samme import.

Et tag skrevet som `Title: Series, Book 2` bliver læst som titel, serie og plads i serien.

En placering i serien skrevet som et interval, fx `1-3`, passer med enhver placering inden i det. To tal skrevet på anden måde, fx `1, 3`, tæller som ingen placering.

Et titel-, album-, serie-, seriedel-, kunstner-, albumkunstner-, komponist- eller indlæser-tag på mere end 500 tegn ignoreres.

**Recent Import Sessions** på Library Import-siden viser for hver scanning, hvor mange rækker der har et match, inklusive bøger, der allerede er i biblioteket, og hvor mange der venter, inklusive rækker, hvor du stadig skal vælge et match.

## Sådan læser du listen

- Oversigten viser, hvor mange mapper der blev fundet, og hvor mange der er klar. Topbjælken har **Sort** (Folder name, Status, Title, Author, Series, Files) og **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Hvert filter viser sit antal, og tallene passer med oversigten. Et match, du har bekræftet, hedder Ready. Sortering og filter huskes på denne enhed. De gemmes ikke i sidens adresse, så et link med `?sort=` eller `?filter=` tager dem ikke med.
- Hver række viser cover, titel, forfatter og serie, og hvor sikkert matchet er i procent, fx "95% match". Hver række beholder alle de match, som dens søgninger på titel, forfatter og serie finder. Mappedetaljerne har **Find a match** eller **Change match**, så du kan søge i hånden. Søgningen viser først Libex' bedste match for det, du skrev, og derefter de bøger, som søgningerne på titel, forfatter og serie finder, hver bog én gang, 50 ad gangen. Flere indlæses, når du scroller, eller med **Load more**, indtil der ikke er flere.
- Når filerne ikke har en ASIN eller spilletid, der kan bekræfte udgaven, står det i mappedetaljerne.
- **Rescan** samler mapper op, der er kommet til siden scanningen, og beholder dine valg.

En ASIN fundet i en kommentar eller beskrivelse er kun et hint. Den tæller kun som et match, når titlen også passer med mappenavnet. Kun det dedikerede ASIN-tag tæller i sig selv.

## Sammenlæg, del op og tilføj

- Læg rækker sammen, der er én bog fordelt på flere mapper. Del dem op igen fra mappedetaljerne. Den sammenlagte rækkes match er kun et forslag: Den tæller under **Needs a look** og er ikke markeret, før du bekræfter det eller vælger et andet. Dens spilletid er delenes samlede tid, kun når hver del har en, og den beholder kun en ASIN, når alle dele angiver den samme. Sammenlægning er kun til delene af én bog: Lad to formater af én bog være separate rækker, for en sammenlægning lægger begge spilletider sammen. Et opslag, der bliver færdigt, efter du har lagt dens række sammen eller delt den op, er også kun et forslag.
- **Confirm match** i en rækkes detaljer markerer en **Needs a look**-række, og **Undo confirmation** fjerner markeringen igen.
- Tilføj er blokeret med en årsag over knappen, fx "Select at least one folder" eller "2 selected rows still need a decision". Tilføj bliver også afvist, uden at noget røres, når to rækker gør krav på samme mappe eller fil.
- Alt, der ville fjerne eller erstatte filer, spørger først.
- Forlader du siden, bliver dine ventende ændringer gemt.

## Kopiér, flyt eller hardlink

**Settings > Media Management > Importing** sætter standarden for Biblioteksimport: kopiér (standard), flyt eller hardlink. Du kan vælge noget andet for hver import.

En hardlinket bog fylder ikke ekstra på disken, og originalen bliver, hvor den er. Hardlink kræver, at standard-rodmappen understøtter det og er blevet tjekket først. Ellers er muligheden grå med årsagen. En fil, der ikke kan linkes, fx en på et andet drev, bliver kopieret og aldrig flyttet. Den færdige import fortæller, hvor mange der blev kopieret.

## Ekstra filer

**Import Extra Files** (slået til som standard) tager en bogs cover, noter og andre filer, der ikke er lyd, med. Det gælder for Biblioteksimport, Manual Import og færdige downloads. Med **Show Advanced** vælger **Preferred Cover** det matchede Audible-cover (standard) eller mappens eget.

## Lange værdier

En oplæser, titel eller sti, der er kortet af med en ellipse, åbner i fuld længde, når du trykker eller klikker på den. Tryk eller klik igen for at lukke den. Med en mus viser du også hele værdien ved at holde markøren over den. Fra tastaturet sætter du fokus på den og trykker Enter eller mellemrum.

## Andre svar end import

En række kan også besvares med **keep library** (afvis en kopi af en bog, biblioteket allerede har) eller **remove empty** (afvis en mappe uden lyd, som stadig indeholder billeder og sidecars). De rydder kun det, rækken selv ejer. **remove empty** afviser alt, der indeholder lyd. Filer ryger i papirkurven, når der er sat en, og opgaveloggen viser hver sti, der blev fjernet. En **keep library**-beslutning gælder kun den bog i biblioteket, den handlede om: Vælger du et match, der spørger om noget andet eller om en anden bog i biblioteket, spørger rækken igen. Importen tjekker igen, når den kører, og intet fjernes, hvis bibliotekets kopi ikke har nogen filer på det tidspunkt ("Your library has no copy of this book to keep"), eller hvis mappen indeholder filer fra en bog i dit bibliotek ("This folder holds files of a book in your library"). Rækker, der fjerner filer i stedet for at importere dem, kører først, når hver import i samme Tilføj er færdig, og hver bliver afvist, hvis en af dens filer på det tidspunkt hører til en bog i dit bibliotek. Så fjerner de aldrig filer, som en bog i samme omgang lige er blevet tilføjet fra.

## Cover og ekstra filer pr. mappe

Inspektøren viser mappens eget cover ved siden af den matchede udgaves, hver med sin størrelse i pixels. Ét klik vælger det andet. Under det viser **Extra files** alle andre filer under navnet på den Media Management-kontakt, de følger. En prik markerer et valg, der afviger fra indstillingerne, og **Apply this cover and these file choices to the N other selected** kopierer én mappes valg over til resten. En række, der tilføjer filer til en bog, som allerede er i biblioteket, har ingen vælger.

Se også [Flyt et bibliotek ind](/da/guides/moving-a-library-in/) og [Media Management](/da/settings/media-management/).
