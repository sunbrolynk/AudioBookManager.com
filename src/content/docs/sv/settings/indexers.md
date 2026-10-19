---
title: Indexerare
description: Newznab, Torznab, MyAnonamouse och Prowlarr.
---

**Settings > Indexers** listar var ABM söker efter releaser.

## Typer

Newznab (usenet), Torznab (torrent), MyAnonamouse, och en Prowlarr-anslutning som synkar indexerare från Prowlarr.

## Fält

| Fält | Gäller | Effekt |
|---|---|---|
| Name | alla | Namn |
| Enable RSS | alla | Ta med i RSS-synken |
| Enable Automatic Search | alla | Använd för sökningar som ABM startar |
| Enable Interactive Search | alla | Använd när du söker för hand |
| URL, API Path, API Key | Newznab, Torznab | Var och hur den ska ansluta. Inloggningsuppgifter hör hemma i fältet, aldrig i URL:en |
| Categories | Newznab, Torznab | Vilka kategorier som ska sökas |
| Cookie (mam_id) | MyAnonamouse | Sessionscookie |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only eller Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Bredda sökningen |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Gränser för releaser och mål för seedning |
| Indexer Priority | alla | 1 (högst) till 50 (lägst), standard 25. När samma release kommer från två indexerare vinner det lägre numret |
| Download Client | alla | Skicka hämtningar från den här indexeraren till en viss klient. (Any) använder vilken som helst |
| Tags | alla | Använd den här indexeraren bara för poster med en matchande tagg |

En sparad API-nyckel eller cookie visas aldrig igen. Lämna fältet tomt när du redigerar för att behålla den. Byter du URL måste hemligheten anges igen, så att en nyckel inte kan skickas till en ny adress av misstag.

## Alternativ

De här gäller för alla indexerare, så följ varje indexerares egna regler.

| Inställning | Standard | Effekt |
|---|---|---|
| Minimum Age | 0 (minuter) | Ignorera usenet-releaser som är yngre än så här |
| Retention | 0 (dagar) | Ignorera releaser som är äldre än så här. 0 betyder ingen gräns |
| Maximum Size | 0 (MB) | 0 betyder ingen gräns |
| RSS Sync Interval | 15 (minuter) | Hur ofta RSS kollas |

MAM-listan kan också mata [Importlistor](/sv/settings/import-lists/).

Om du kan Sonarr: det är samma uppdelning mellan RSS, automatisk och interaktiv sökning per indexerare. Det finns inget separat "test all" för kategorier.
