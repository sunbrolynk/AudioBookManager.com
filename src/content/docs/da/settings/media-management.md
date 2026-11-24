---
title: Mediehåndtering
description: Rodmapper, import, ekstra filer, papirkurv, scanninger, opgraderinger og rettigheder.
---

**Settings > Media Management** styrer, hvor bøger bor, og hvordan filer kommer ind. Indstillinger markeret som avancerede vises med **Show Advanced**.

## Rodmapper (Root Folders)

En rodmappe er en mappe, hvor ABM styrer bøger. Tilføj en med **Add Root Folder**, som åbner en mappebrowser, hvor du også kan skrive stien. ABM kan også vise mapper under en rod, der ikke er koblet til noget, og importere dem. En rods ledige plads og understøttelse af hardlinks bliver tjekket, når den tilføjes. Fjerner du en rod, bliver du spurgt, hvad der skal ske: **Remove from ABM only** (standard) glemmer bøgerne under den og lader filerne være, og **Delete the books and their files** sletter alt under stien permanent uden om papirkurven. En rod med bøger i kræver, at du skriver noget for at bekræfte.

Standard-rodmappen er den, nye bøger havner i, og den, der afgør, om hardlink bliver tilbudt i Biblioteksimport.

## Mapper (Folders)

| Indstilling | Standard | Virkning |
|---|---|---|
| Create Empty Book Folders | fra | Opretter manglende bogmapper ved tilføjelse, ved skift af rodmappe og under en diskscanning. Ignoreres, mens **Delete empty folders** er slået til, så en mappe ikke bliver lavet bare for at blive fjernet. |
| Delete empty folders | fra | Sletter tomme bogmapper under en diskscanning, og når bogfiler bliver slettet |

## Import (Importing)

| Indstilling | Standard | Virkning |
|---|---|---|
| Skip Free Space Check | fra | Til når ABM ikke kan registrere ledig plads på en rod |
| Minimum Free Space | 100 (MB) | En import, der ville efterlade mindre end det, bliver afvist |
| Use Hardlinks instead of Copy | til | Til færdige downloads: hardlink i stedet for kopi, så seeding ikke fordobler pladsen. Kræver samme volume. |
| Library Import | Copy | Standarden for [Biblioteksimport](/da/library-import/): kopiér, hardlink eller flyt. Hardlink er grå, indtil standard-roden er blevet tjekket og understøtter det. |
| Import Extra Files | til | Hovedkontakten for at tage filer, der ikke er lyd, med. Gælder for Biblioteksimport, Manual Import og færdige downloads |
| Extra File Extensions (advanced) | tom | Flere filtyper, der skal med, og som beholder deres egne navne, fx `srt, lrc`. Med eller uden punktum, adskilt af kommaer eller mellemrum. Blokerede typer, som eksekverbare filer og ufærdige downloads, kan ikke gemmes. Slået fra, mens **Import Extra Files** er slået fra |
| Preferred Cover (advanced) | Matched | Den matchede udgaves cover eller mappens bedste billede, når begge findes |

**Import Extra Files** tager en bogs andre filer med sammen med lyden. Fem kontakter vælger, hvilke slags der kommer med, og en fil, der matcher **Extra File Extensions**, kommer med, selv når dens slags er slået fra:

| Kontakt | Standard | Omfatter |
|---|---|---|
| Cover art | til | Cover plus scanninger af bagside og hæfte |
| Book info files | til | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | fra | PDF'er, der følger med en bog |
| Chapters, transcripts and playlists | til | .cue, kapitellister, undertekster, sangtekster, playlister. Filnavne inde i dem bliver omskrevet til den omdøbte lyd. |
| Audible originals and ebooks | fra | .aax/.aaxc, vouchers, epub og lignende |

Ufærdige downloads og eksekverbare filer bliver aldrig importeret. ABM's egen `metadata.json` bliver altid håndteret af ABM.

Hardlink er ikke det samme som **Use Hardlinks instead of Copy**. Den er til downloads. Standarden for Biblioteksimport er kun det, dialogen Add to Library har valgt på forhånd.

## Filhåndtering (File Management)

| Indstilling | Standard | Virkning |
|---|---|---|
| Unmonitor Deleted Books | fra | En bog, der er slettet fra disken, bliver ikke længere overvåget |
| Change File Date | None | Ændrer fildatoer ved import og ny scanning |
| Enable Recycling Bin | til | Slettede bogfiler flyttes til en papirkurv i stedet for at blive slettet |
| Recycling Bin | tom | Hvor papirkurven ligger. Tom bruger ABM's standard (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (dage) | 0 slår automatisk oprydning fra |
| Library Scan Interval | 24 | Timer mellem automatiske scanninger |
| Watch for Changes | til | Scan, når filer bliver tilføjet, fjernet eller ændret |
| Cover Cache Workers | 4 | Hvor mange covers der hentes ad gangen, når billeder bliver cachet, fra 1 til 16 |

## Kvalitetsopgraderinger (Quality Upgrades)

| Indstilling | Standard | Virkning |
|---|---|---|
| Automatic Upgrade Search | til | Søger med jævne mellemrum efter bedre udgivelser af hentede bøger, der stadig er under deres cutoff. En kopi erstatter kun din, når den er en reel opgradering. |
| Upgrade Search Interval | 24 (timer) | Hvor tit den kører |

## Rettigheder (Permissions, avanceret)

| Indstilling | Standard | Virkning |
|---|---|---|
| Set Permissions | fra | Kør chmod ved import og omdøbning |
| chmod Folder | 755 | Oktal tilstand for mapper og filer, uden execute-bits for filer |
| chown Group | tom | Gruppenavn eller gid. Brug en gid på fjerne filsystemer |

## Faldgruber

- Er papirkurven slået til, men dens mappe ikke tilgængelig, fejler sletninger, der skal bruge den, i stedet for at slette permanent.
- Hardlinks virker kun inden for ét filsystem. Filer, der ikke kan linkes, bliver kopieret, aldrig flyttet, og talt med i importresultatet.

## Book Naming

Book Naming bestemmer, hvordan jeg navngiver filer og mapper. Det gemmes med sidens ene Save sammen med resten af Media Management. Det har Rename Books, Replace Illegal Characters, Colon Replacement (med en egen indstilling) og formater til Standard Book, Author Folder, Series Folder, Standalone Folder og Book Folder. Hvert format viser et live-eksempel, og en tokenliste viser alle de tokens, du kan bruge.

Library, Series og Authors har også en handling **Organize** på de markerede bøger, og det har en bogs egen side også. Den åbner først en forhåndsvisning af hver ændring, og intet flyttes, før du bekræfter. Så flytter og omdøber Organize: den flytter hver bogs mappe derhen, hvor navneindstillingerne vil have den, og omdøber filerne. Den kører som en opgave, du kan følge, annullere og efter en genstart genoptage, hvor den slap. Der kører kun én Organize ad gangen. Der er ingen fortryd, så tjek forhåndsvisningen. Masseomdøbning ligger stadig på Library, Series og Authors som **Rename Files**.

Hvis en Organize afbrydes, fortsætter næste kørsel, hvor den slap. En bog, som den afbrudte kørsel allerede havde flyttet eller omdøbt på disken, bliver fundet på sin nye placering, og dens poster opdateres, så intet flyttes to gange. Forhåndsvisningen viser sådan en bog som allerede flyttet eller allerede omdøbt, og resultatet tæller den som afstemt (reconciled). En bog afstemmes kun, når jeg kan bevise, at mappen er bogens: dens filer skal passe til det, jeg har gemt, og ingen anden bog må gøre krav på mappen. Ellers springes bogen over, med årsag. Der er stadig ingen fortryd.

Forhåndsvisningen viser kun de bøger, der ville ændre sig. Sæt hak i **Show all selected books** for også at se resten. Den indlæses i sider, så brug **Load more** for at fortsætte gennem en stor markering. Forhåndsvisningens titel tæller, hvor mange bøger der ændres, og hvor mange der springes over.

På siden for en bog, hvis mappe ikke ligger der, hvor navneindstillingerne ville lægge den, står det, med den mappe den ville flyttes til, og en Organize-knap.

Når en bogs nye mappe ville ligge inde i den mappe, den ligger i nu, opretter Organize undermappen der og flytter kun bogens egne filer ind i den: lyden, plus cover, kapitler og andre sidefiler, jeg gemmer til den. Alt andet i mappen bliver, hvor det var. Forhåndsvisningen siger "Moves into a subfolder" og viser, hvad der bliver, og resultatvinduet viser de filer, der blev liggende. Hvis en flytning fejler halvvejs, lægges de allerede flyttede filer tilbage. At flytte en bogs mappe ind i en undermappe af sig selv fra redigeringsvinduet virker på samme måde.

Library Import følger de samme navneindstillinger, også når den tilføjer en bog, der allerede ligger i en rodmappe, eller flytter filer ind i en bog, jeg allerede har. Med Rename Books slået fra beholder hver fil det navn, den kom med. En fil, hvis navn ville støde sammen med en anden fil i partiet eller en, der allerede ligger i bogens mappe (store og små bogstaver ignoreres), får i stedet navnet fra formatet, og importen noterer, for hvilke filer den gjorde det. Med Rename Books slået til nummereres filer, der ville få samme navn, efter position, så Manual Import aldrig springer en over.

Standardlayoutet er `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. En enkeltstående bog har ingen seriemappe og intet bind: `Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. En serie-bog uden position begynder også med året. Et ukendt år udelades og skrives aldrig som `(Unknown)`.

Kender du Sonarr: det er Sonarrs Media Management, navneformater inklusive.
