---
title: Bibliotekimport
description: Få en eksisterende samling inn i ABM med Import Workbench.
---

Library Import skanner en mappe med lydbøker, finner metadata som passer til hver mappe, og legger bøkene til i biblioteket ditt. **Library > Library Import** åpner "Import audiobooks you already have", der du velger en mappe som skal skannes. Når skanningen starter, går ABM over til treffsiden med overskriften **Match Audiobooks**, der du sjekker treffene og legger til bøkene.

## Flyten

1. Skann en mappe. Hver mappe med lyd blir en rad.
2. Sjekk treffene. Fiks dem som trenger det.
3. Velg radene og legg dem til i biblioteket.

Hvert valg er en valgfri overstyring av en standard i Media Management. En vanlig skanning og så legg til trenger aldri mer enn to klikk.

## Lese lista

- Sammendraget viser hvor mange mapper som ble funnet, og hvor mange som fikk treff. Filtrer lista på All, Matched, Needs attention, Unmatched, In library eller Failed lookup. Filteret blir lagret i adressen til siden.
- Hver rad viser cover, tittel, forfatter og serie, og hvor sikkert treffet er i prosent, for eksempel "95% match". Mappedetaljene har **Find a match** eller **Change match** for å søke for hånd.
- Når filene ikke har noen ASIN eller spilletid som kan bekrefte utgaven, sier mappedetaljene fra om det.
- **Rescan** plukker opp mapper som er lagt til siden skanningen, og beholder valgene dine.

En ASIN som står i en kommentar eller beskrivelse, er bare et hint. Den teller som treff bare når tittelen også stemmer med mappenavnet. Det er bare den egne ASIN-taggen som teller alene.

## Slå sammen, dele opp og legge til

- Slå sammen rader som er én bok fordelt på flere mapper. Del dem opp igjen fra mappedetaljene.
- Add blir blokkert med en grunn som vises over knappen, for eksempel "Select at least one folder" eller "2 selected rows still need a decision".
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

En rad kan også besvares med **keep library** (avslå en kopi av en bok biblioteket allerede har) eller **remove empty** (avslå en mappe uten lyd, som fortsatt har bilder og sidefiler). Disse fjerner bare det raden eier. Alt som inneholder lyd, blir avvist. Filene havner i papirkurven når det er satt opp en, og oppgaveloggen viser hver sti som ble fjernet.

## Cover og ekstrafiler per mappe

Inspektøren viser mappens eget cover ved siden av coveret til den matchede utgaven, hvert med pikselstørrelse. Ett klikk velger det andre. Under det viser **Extra files** alle andre filer under navnet på bryteren i Media Management de følger. En prikk markerer et valg som avviker fra innstillingene, og **Apply this cover and these file choices to the N other selected** kopierer valgene for én mappe til resten. En rad som legger filer til en bok som allerede er i biblioteket, har ingen velger.

Se også [Flytte inn et bibliotek](/nb/guides/moving-a-library-in/) og [Mediehåndtering](/nb/settings/media-management/).
