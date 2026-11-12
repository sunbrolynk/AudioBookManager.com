---
title: Mediehåndtering
description: Rotmapper, import, ekstrafiler, papirkurv, skanninger, oppgraderinger og rettigheter.
---

**Settings > Media Management** styrer hvor bøkene bor, og hvordan filer flyttes inn. Innstillinger merket som avanserte vises med **Show Advanced**.

## Rotmapper (Root Folders)

En rotmappe er en mappe der ABM styrer bøker. Legg til en med **Add Root Folder**, som åpner en mappeleser der du også kan skrive inn stien. ABM kan også liste opp mapper under en rot som ikke er tilordnet, og importere dem. Ledig plass og støtte for hardlenker sjekkes når en rot legges til. Når du fjerner en rot, blir du spurt hva som skal skje: **Remove from ABM only** (standard) glemmer bøkene under den og lar filene ligge, og **Delete the books and their files** sletter alt under stien for godt, uten å gå via papirkurven. En rot med bøker i krever at du skriver inn en bekreftelse.

Standard-rotmappen er den nye bøker havner i, og den som avgjør om hardlenke tilbys for Library Import.

## Mapper

| Innstilling | Standard | Virkning |
|---|---|---|
| Create Empty Book Folders | av | Lager manglende bokmapper når bøker legges til, når rotmappen endres og under en diskskanning. Ignoreres mens **Delete empty folders** er på, så det ikke lages en mappe bare for å fjernes. |
| Delete empty folders | av | Sletter tomme bokmapper under en diskskanning og når bokfiler slettes |

## Import

| Innstilling | Standard | Virkning |
|---|---|---|
| Skip Free Space Check | av | For når ABM ikke klarer å finne ledig plass på en rot |
| Minimum Free Space | 100 (MB) | En import som ville etterlatt mindre enn dette, blir avvist |
| Use Hardlinks instead of Copy | på | For fullførte nedlastinger: hardlenke i stedet for kopi, så seeding ikke dobler plassen. Krever samme volum. |
| Library Import | Copy | Standarden for [Bibliotekimport](/nb/library-import/): kopiere, hardlenke eller flytte. Hardlenke er grået ut til standard-roten er sjekket og støtter det. |
| Import Extra Files | på | Hovedbryter for å ta med filer som ikke er lyd. Gjelder Library Import, Manual Import og fullførte nedlastinger |
| Extra File Extensions (avansert) | tom | Flere filtyper som skal tas med, under sine egne navn, for eksempel `srt, lrc`. Med eller uten punktum, skilt med komma eller mellomrom. Blokkerte typer, som kjørbare filer og ufullstendige nedlastinger, kan ikke lagres. Deaktivert mens **Import Extra Files** er av |
| Preferred Cover (avansert) | Matched | Coveret til den matchede utgaven, eller det beste bildet i mappen, når begge finnes |

**Import Extra Files** tar med de andre filene til en bok sammen med lyden. Fem brytere velger hvilke typer som blir med, og en fil som passer med **Extra File Extensions**, blir med selv om typen er slått av:

| Bryter | Standard | Dekker |
|---|---|---|
| Cover art | på | Cover pluss skannede baksider og hefter |
| Book info files | på | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | av | PDF-er som følger med en bok |
| Chapters, transcripts and playlists | på | .cue, kapittellister, undertekster, sangtekster, spillelister. Filnavn inni dem skrives om til den omdøpte lyden. |
| Audible originals and ebooks | av | .aax/.aaxc, vouchers, epub og lignende |

Delvise nedlastinger og kjørbare filer importeres aldri. ABMs egen `metadata.json` håndteres alltid av ABM.

Hardlenke er ikke det samme som **Use Hardlinks instead of Copy**. Den er for nedlastinger. Standarden for Library Import er bare det dialogen Add to Library har forhåndsvalgt.

## Filhåndtering (File Management)

| Innstilling | Standard | Virkning |
|---|---|---|
| Unmonitor Deleted Books | av | En bok som er slettet fra disken, slutter å overvåkes |
| Change File Date | None | Endrer fildatoer ved import og ny skanning |
| Enable Recycling Bin | på | Slettede bokfiler flyttes til en papirkurv i stedet for å slettes |
| Recycling Bin | tom | Hvor papirkurven ligger. Tom bruker ABMs standard (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (dager) | 0 slår av automatisk opprydding |
| Library Scan Interval | 24 | Timer mellom automatiske skanninger |
| Watch for Changes | på | Skann når filer legges til, fjernes eller endres |
| Cover Cache Workers | 4 | Hvor mange cover som lastes ned samtidig når bilder mellomlagres, fra 1 til 16 |

## Kvalitetsoppgraderinger (Quality Upgrades)

| Innstilling | Standard | Virkning |
|---|---|---|
| Automatic Upgrade Search | på | Søker med jevne mellomrom etter bedre utgivelser av nedlastede bøker som fortsatt er under cutoff. En kopi erstatter din bare når den er en ekte oppgradering. |
| Upgrade Search Interval | 24 (timer) | Hvor ofte det kjører |

## Rettigheter (avansert)

| Innstilling | Standard | Virkning |
|---|---|---|
| Set Permissions | av | Kjør chmod ved import og omdøping |
| chmod Folder | 755 | Oktal modus for mapper og filer, uten kjørerettigheter for filer |
| chown Group | tom | Gruppenavn eller gid. Bruk gid på eksterne filsystemer |

## Fallgruver

- Hvis papirkurven er slått på, men mappen ikke er tilgjengelig, feiler slettinger som trenger den, i stedet for å slette permanent.
- Hardlenker virker bare innenfor ett filsystem. Filer som ikke kan lenkes, blir kopiert, aldri flyttet, og telles i importresultatet.

## Book Naming

Book Naming styrer hvordan jeg navngir filer og mapper. Det lagres med sidens ene Save sammen med resten av Media Management. Det har Rename Books, Replace Illegal Characters, Colon Replacement (med et eget valg) og formater for Standard Book, Author Folder, Series Folder, Standalone Folder og Book Folder. Hvert format viser et live-eksempel, og en tokenliste viser alle tokens du kan bruke.

Library, Series og Authors har også en handling **Organize** på de valgte bøkene, og det har en boks egen side også. Den åpner først en forhåndsvisning av hver endring, og ingenting flyttes før du bekrefter. Deretter flytter og døper Organize om: den flytter hver boks mappe dit navneinnstillingene vil ha den og døper om filene. Den kjører som en oppgave du kan følge, avbryte og, etter en omstart, gjenoppta der den stoppet. Bare én Organize kjører om gangen. Det finnes ingen angre, så sjekk forhåndsvisningen. Masseomdøping ligger fortsatt på Library, Series og Authors som **Rename Files**.

Forhåndsvisningen viser bare bøkene som ville endret seg. Huk av **Show all selected books** for å se resten også. Den lastes i sider, så bruk **Load more** for å gå videre i et stort utvalg. Tittelen på forhåndsvisningen teller hvor mange bøker som endres og hvor mange som hoppes over.

På siden til en bok hvis mappe ikke ligger der navneinnstillingene ville lagt den, står det, med mappen den ville havnet i og en Organize-knapp.

Når en boks nye mappe ville ligget inni mappen den ligger i nå, lager Organize undermappen der og flytter bare bokens egne filer inn i den: lyden, pluss omslag, kapitler og andre sidefiler jeg har for den. Alt annet i mappen blir liggende. Forhåndsvisningen sier "Moves into a subfolder" og lister hva som blir, og resultatvinduet lister filene som ble liggende. Hvis en flytting feiler halvveis, legges filene som allerede er flyttet tilbake. Å flytte en boks mappe inn i en undermappe av seg selv fra redigeringsvinduet fungerer på samme måte.

Library Import følger de samme navneinnstillingene, også når den legger til en bok som allerede ligger i en rotmappe eller flytter filer inn i en bok jeg allerede har. Med Rename Books av beholder hver fil navnet den kom med. En fil hvis navn ville kollidert med en annen fil i partiet, eller med en som allerede ligger i bokens mappe (store og små bokstaver ignoreres), får i stedet navnet fra formatet, og importen noterer hvilke filer den gjorde det for. Med Rename Books på nummereres filer som ville fått samme navn etter posisjon, så Manual Import aldri hopper over noen.

Standardoppsettet er `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. En frittstående bok har ingen seriemappe og ingen bindnummer: `Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. En seriebok uten posisjon begynner også med året. Et ukjent år utelates og skrives aldri som `(Unknown)`.

Kan du Sonarr: dette er Media Management fra Sonarr, med navneformater.
