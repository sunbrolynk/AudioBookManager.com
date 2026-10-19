---
title: Indeksere
description: Newznab, Torznab, MyAnonamouse og Prowlarr.
---

**Settings > Indexers** viser, hvor ABM søger efter udgivelser.

## Typer

Newznab (usenet), Torznab (torrent), MyAnonamouse og en Prowlarr-forbindelse, der synkroniserer indeksere fra Prowlarr.

## Felter

| Felt | Gælder for | Virkning |
|---|---|---|
| Name | alle | Navn |
| Enable RSS | alle | Tag med i RSS-synkronisering |
| Enable Automatic Search | alle | Brug til søgninger, ABM selv starter |
| Enable Interactive Search | alle | Brug, når du søger i hånden |
| URL, API Path, API Key | Newznab, Torznab | Hvor og hvordan der forbindes. Loginoplysninger skal i feltet, aldrig i URL'en |
| Categories | Newznab, Torznab | Hvilke kategorier der søges i |
| Cookie (mam_id) | MyAnonamouse | Session-cookie |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only eller Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Gør søgningen bredere |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Grænser for udgivelser og mål for seeding |
| Indexer Priority | alle | 1 (højest) til 50 (lavest), standard 25. Når samme udgivelse kommer fra to indeksere, vinder det laveste tal |
| Download Client | alle | Send hentninger fra denne indekser til én klient. (Any) bruger en hvilken som helst |
| Tags | alle | Brug kun denne indekser til elementer med et matchende tag |

En gemt API-nøgle eller cookie bliver aldrig vist igen. Lad feltet stå tomt, når du redigerer, for at beholde den. Ændrer du URL'en, skal hemmeligheden skrives ind igen, så en nøgle ikke ved et uheld bliver sendt til en ny adresse.

## Muligheder

De her gælder for alle indeksere, så følg hver indeksers egne regler.

| Indstilling | Standard | Virkning |
|---|---|---|
| Minimum Age | 0 (minutter) | Ignorér usenet-udgivelser, der er yngre end det |
| Retention | 0 (dage) | Ignorér udgivelser, der er ældre end det. 0 er ingen grænse |
| Maximum Size | 0 (MB) | 0 er ingen grænse |
| RSS Sync Interval | 15 (minutter) | Hvor tit RSS bliver tjekket |

MAM-listen kan også fodre [Importlister](/da/settings/import-lists/).

Kender du Sonarr: det er den samme opdeling mellem RSS, automatisk og interaktiv søgning pr. indekser. Der er ingen separat "test all" for kategorier.
