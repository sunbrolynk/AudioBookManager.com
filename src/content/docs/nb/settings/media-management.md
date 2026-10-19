---
title: Mediehåndtering
description: Rotmapper, import, ekstrafiler, papirkurv, skanninger, oppgraderinger og rettigheter.
---

**Settings > Media Management** styrer hvor bøkene bor, og hvordan filer flyttes inn. Innstillinger merket som avanserte vises med **Show Advanced**.

## Rotmapper (Root Folders)

En rotmappe er en mappe der ABM styrer bøker. Legg til en med **Add Root Folder**, som åpner en mappeleser der du også kan skrive inn stien. ABM kan også liste opp mapper under en rot som ikke er tilordnet, og importere dem. Ledig plass og støtte for hardlenker sjekkes når en rot legges til. Å fjerne en rot sletter ikke filer.

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
| Extra File Extensions (avansert) | tom | Ekstra filendelser som skal importeres, som `srt, lrc`. Blokkerte typer avvises. |
| Preferred Cover (avansert) | Matched | Coveret til den matchede utgaven, eller det beste bildet i mappen, når begge finnes |

Ekstrafiler har fem brytere:

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
| Library Scan Interval | 0 (av) | Timer mellom automatiske skanninger |
| Watch for Changes | av | Skann når filer legges til, fjernes eller endres |
| Cover Cache Workers | 4 | Hvor mange cover som lastes ned samtidig når bilder mellomlagres, fra 1 til 16. Senk det hvis en mellomlagringskjøring melder om feil |

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

Kan du Sonarr: dette er Media Management fra Sonarr uten navneformater. Mappenavn velges av ABM. Masseomdøping ligger på Library, Series og Authors som **Rename Files**.
