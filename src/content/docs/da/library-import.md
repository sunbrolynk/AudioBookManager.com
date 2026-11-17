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

## Sådan læser du listen

- Oversigten viser, hvor mange mapper der blev fundet, og hvor mange der er klar. Topbjælken har **Sort** (Folder name, Status, Title, Author, Series, Files) og **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Hvert filter viser sit antal, og tallene passer med oversigten. Et match, du har bekræftet, hedder Ready. Sortering og filter huskes på denne enhed. De gemmes ikke i sidens adresse, så et link med `?sort=` eller `?filter=` tager dem ikke med.
- Hver række viser cover, titel, forfatter og serie, og hvor sikkert matchet er i procent, fx "95% match". Mappedetaljerne har **Find a match** eller **Change match**, så du kan søge i hånden.
- Når filerne ikke har en ASIN eller spilletid, der kan bekræfte udgaven, står det i mappedetaljerne.
- **Rescan** samler mapper op, der er kommet til siden scanningen, og beholder dine valg.

En ASIN fundet i en kommentar eller beskrivelse er kun et hint. Den tæller kun som et match, når titlen også passer med mappenavnet. Kun det dedikerede ASIN-tag tæller i sig selv.

## Sammenlæg, del op og tilføj

- Læg rækker sammen, der er én bog fordelt på flere mapper. Del dem op igen fra mappedetaljerne.
- Tilføj er blokeret med en årsag over knappen, fx "Select at least one folder" eller "2 selected rows still need a decision".
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

En række kan også besvares med **keep library** (afvis en kopi af en bog, biblioteket allerede har) eller **remove empty** (afvis en mappe uden lyd, som stadig indeholder billeder og sidecars). De rydder kun det, rækken selv ejer. Alt, der indeholder lyd, bliver afvist. Filer ryger i papirkurven, når der er sat en, og opgaveloggen viser hver sti, der blev fjernet.

## Cover og ekstra filer pr. mappe

Inspektøren viser mappens eget cover ved siden af den matchede udgaves, hver med sin størrelse i pixels. Ét klik vælger det andet. Under det viser **Extra files** alle andre filer under navnet på den Media Management-kontakt, de følger. En prik markerer et valg, der afviger fra indstillingerne, og **Apply this cover and these file choices to the N other selected** kopierer én mappes valg over til resten. En række, der tilføjer filer til en bog, som allerede er i biblioteket, har ingen vælger.

Se også [Flyt et bibliotek ind](/da/guides/moving-a-library-in/) og [Media Management](/da/settings/media-management/).
