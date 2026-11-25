---
title: Bibliotekimport
description: Få en eksisterende samling inn i ABM med Import Workbench.
---

Library Import skanner en mappe med lydbøker, finner metadata som passer til hver mappe, og legger bøkene til i biblioteket ditt. **Library > Library Import** åpner "Import audiobooks you already have", der du velger en mappe som skal skannes. Når skanningen starter, går ABM over til treffsiden med overskriften **Match Audiobooks**, der du sjekker treffene og legger til bøkene.

## Flyten

1. Skann en mappe. Hver mappe med lyd blir en rad.
2. Sjekk treffene. Fiks dem som trenger det.
3. Kryss av radene du vil ha, og legg dem så til i biblioteket eller slett dem.

Hvert valg er en valgfri overstyring av en standard i Media Management.

## Når et treff blir godtatt

Skanningen godtar et treff bare når filene bekrefter det:

- ASIN-en i filenes egne tagger finner boka, eller
- spilletiden til boka er innenfor tre minutter av filenes, og plassen i serien eller tittelen stemmer med dem.

En forfatter eller en plass i serien som motsier filene, utelukker en bok. Passer filene like godt til to forskjellige bøker eller innspillinger, blir ingen av dem godtatt.

Filenes spilletid teller bare når hver fil i boka kunne leses. Kan én ikke måles, har raden ingen spilletid: Da kan bare ASIN-en bekrefte et treff, og ellers venter boka under **Needs a look**.

Når en bok finnes i to formater, er hvert format en egen rad og måles for seg. En bok delt i deler i ulike formater er én rad når den har sin egen mappe, og delene legges sammen.

Bare en engelsk utgave, eller en der oppføringen ikke oppgir språk, godtas på spilletid. En utgave på et annet språk godtas bare når filenes egen ASIN finner den. En bok som er besvart fra [lokal lagring](/nb/settings/metadata/) i stedet for et direkte oppslag, godtas aldri uten deg.

Når ett av radens oppslag feiler, godtas bare et ASIN-treff. En bok som bare er funnet ved å søke på forfatteren, foreslås bare når spilletiden passer med filenes. En bok uten oppføring står derfor som **Unmatched** i stedet for å foreslå en annen av forfatterens bøker.

Alle andre treff blir fortsatt foreslått, men raden telles under **Needs a look**, starter uten hake, og **Select All** hopper over den til du bekrefter treffet eller velger et annet. Et godtatt treff på en bok du allerede har i biblioteket, telles under **In library**. En **Needs a look**-rad der forslaget er en bok i biblioteket, stiller bibliotekspørsmålet sitt først når du bekrefter treffet. Inntil da blokkerer den Add hvis du huker av for den, som en rad som fortsatt trenger en avgjørelse.

En bok i flere løse filer som deler mappe med andre bøker, for eksempel en forfattermappe eller mappa du skanner, er én rad med alle delene. Filer som skiller seg på et bok- eller bindnummer, forblir egne rader. Deler grupperes etter format: En fil med hele boka ved siden av er en egen rad, og en bitrate i et filnavn, for eksempel `128kbps`, er ikke et delnummer.

To formater av samme bok, for eksempel `Book.mp3` og `Book.m4b`, er separate rader, enten filene ligger løst i mappa du skanner eller i en egen bokmappe. Hver rad importerer, fjerner og måler bare sin egen fil. Et cover, en cue- eller annen ikke-lydfil med samme navn følger med bokas fil når boka ligger der i ett format, og blir liggende når den ligger der i to. Det gjelder også når den ene kopien flyttes inn i biblioteket og den andre fjernes i samme import.

En tagg skrevet som `Title: Series, Book 2` blir lest som tittel, serie og plass i serien.

En plassering i serien skrevet som et intervall, for eksempel `1-3`, stemmer med enhver plassering innenfor det. To tall skrevet på en annen måte, for eksempel `1, 3`, regnes som ingen plassering.

En tittel-, album-, serie-, seriedel-, artist-, albumartist-, komponist- eller innleser-tagg på mer enn 500 tegn ignoreres.

**Recent Import Sessions** på Library Import-siden viser for hver skanning hvor mange rader som har treff, medregnet bøker som allerede er i biblioteket, og hvor mange som venter, medregnet rader der du fortsatt må velge et treff.

En import som slutter med noen bøker som feilet, registreres i [Varsler](/nb/system/notifications/) som en advarsel, "Import finished with problems". En import der ingenting kunne importeres, registreres som en mislykket oppgave. Det samme gjelder en manuell import fra Queue.

## Lese lista

- Sammendraget viser hvor mange mapper som ble funnet, og hvor mange som er klare. Topplinjen har **Sort** (Folder name, Status, Title, Author, Series, Files) og **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Hvert filter viser antallet sitt, og tallene stemmer med sammendraget. Et treff du har bekreftet, heter Ready. Sortering og filter blir husket på denne enheten. De blir ikke lagret i adressen til siden, så en lenke med `?sort=` eller `?filter=` tar dem ikke med.
- Hver rad viser cover, tittel, forfatter og serie, og hvor sikkert treffet er i prosent, for eksempel "95% match". Hver rad beholder alle treffene som søkene på tittel, forfatter og serie finner. Mappedetaljene har **Find a match** eller **Change match** for å søke for hånd. Søket viser først Libex sine beste treff for det du skrev, og deretter bøkene som søkene på tittel, forfatter og serie finner, hver bok én gang, 50 om gangen. Flere lastes inn når du blar, eller med **Load more**, til det ikke er flere.
- Når filene ikke har noen ASIN eller spilletid som kan bekrefte utgaven, sier mappedetaljene fra om det.
- **Rescan** plukker opp mapper som er lagt til siden skanningen, og beholder valgene dine.

En ASIN som står i en kommentar eller beskrivelse, er bare et hint. Den teller som treff bare når tittelen også stemmer med mappenavnet. Det er bare den egne ASIN-taggen som teller alene.

## Slå sammen, dele opp og legge til

- Slå sammen rader som er én bok fordelt på flere mapper. Del dem opp igjen fra mappedetaljene. Treffet til den sammenslåtte raden er bare et forslag: Den teller under **Needs a look** og er ikke avhuket før du bekrefter det eller velger et annet. Spilletiden er delenes sum bare når hver del har en, og den beholder en ASIN bare når alle delene oppgir den samme. Sammenslåing er bare for delene av én bok: La to formater av én bok være egne rader, for en sammenslåing legger sammen begge spilletidene. Et oppslag som blir ferdig etter at du har slått sammen eller delt opp raden, er også bare et forslag.
- **Confirm match** i en rads detaljer huker av en **Needs a look**-rad, og **Undo confirmation** fjerner avhukingen igjen.
- Add blir blokkert med en grunn som vises over knappen, for eksempel "Select at least one folder" eller "2 selected rows still need a decision". Add blir også avvist, uten at noe røres, når to rader gjør krav på samme mappe eller fil.
- Alt som ville fjerne eller erstatte filer, spør først.
- Forlater du siden, lagres endringene du ikke har fullført.

## Kopiere, flytte eller hardlenke

**Settings > Media Management > Importing** setter standarden for Library Import: kopiere (standard), flytte eller hardlenke. Du kan velge noe annet for hver import.

En hardlenket bok tar ingen ekstra diskplass, og originalen blir liggende der den er. Hardlenking krever at standard-rotmappen støtter det og er sjekket først. Ellers er valget grået ut med grunnen. En fil som ikke kan lenkes, for eksempel en på en annen disk, blir kopiert og aldri flyttet. Den ferdige importen sier hvor mange som ble kopiert.

## Ekstrafiler

**Import Extra Files** (på som standard) tar med coveret, notatene og andre filer som ikke er lyd. Det gjelder Library Import, Manual Import og fullførte nedlastinger likt. Med **Show Advanced** velger **Preferred Cover** enten det matchede Audible-coveret (standard) eller mappens eget.

## Lange verdier

En oppleser, tittel eller sti som er kuttet med tre prikker, åpnes i sin helhet når du trykker eller klikker på den. Trykk eller klikk igjen for å lukke den. Med mus viser du også hele verdien ved å holde pekeren over den. Fra tastaturet setter du fokus på den og trykker Enter eller mellomrom.

## Andre svar enn import

En rad kan også besvares med **keep library** (avslå en kopi av en bok biblioteket allerede har) eller **remove empty** (avslå en mappe uten lyd, som fortsatt har bilder og sidefiler). Disse fjerner bare det raden eier. **remove empty** avviser alt som inneholder lyd. Filene havner i papirkurven når det er satt opp en, og oppgaveloggen viser hver sti som ble fjernet. En **keep library**-avgjørelse gjelder bare boka i biblioteket den handlet om: Velger du et treff som spør om noe annet eller om en annen bok i biblioteket, spør raden på nytt. Importen sjekker igjen når den kjører, og ingenting fjernes hvis bibliotekets kopi ikke har filer da ("Your library has no copy of this book to keep"), eller hvis mappen inneholder filer fra en bok i biblioteket ditt ("This folder holds files of a book in your library"). Rader som fjerner filer i stedet for å importere dem, kjører først når hver import i samme Add er ferdig, og hver blir avvist hvis en av filene dens da hører til en bok i biblioteket ditt. Slik fjerner de aldri filer som en bok i samme omgang nettopp ble lagt til fra.

## Cover og ekstrafiler per mappe

Inspektøren viser mappens eget cover ved siden av coveret til den matchede utgaven, hvert med pikselstørrelse. Ett klikk velger det andre. Under det viser **Extra files** alle andre filer under navnet på bryteren i Media Management de følger. En prikk markerer et valg som avviker fra innstillingene, og **Apply this cover and these file choices to the N other selected** kopierer valgene for én mappe til resten. En rad som legger filer til en bok som allerede er i biblioteket, har ingen velger.

Se også [Flytte inn et bibliotek](/nb/guides/moving-a-library-in/) og [Mediehåndtering](/nb/settings/media-management/).
