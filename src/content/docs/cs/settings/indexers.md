---
title: Indexery
description: Newznab, Torznab, MyAnonamouse a Prowlarr.
---

**Settings > Indexers** vypisuje, kde ABM hledá vydání.

## Typy

Newznab (usenet), Torznab (torrent), MyAnonamouse a připojení k Prowlarru, které z Prowlarru synchronizuje indexery.

## Pole

| Pole | Platí pro | Co dělá |
|---|---|---|
| Name | všechny | Popisek |
| Enable RSS | všechny | Zahrne do synchronizace RSS |
| Enable Automatic Search | všechny | Použije se pro hledání, která spouští ABM |
| Enable Interactive Search | všechny | Použije se, když hledáš ručně |
| URL, API Path, API Key | Newznab, Torznab | Kam a jak se připojit. Přihlašovací údaje patří do pole, nikdy do URL |
| Categories | Newznab, Torznab | Ve kterých kategoriích hledat |
| Cookie (mam_id) | MyAnonamouse | Cookie relace |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only nebo Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Rozšíří hledání |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Limity vydání a cíle seedování |
| Indexer Priority | všechny | 1 (nejvyšší) až 50 (nejnižší), výchozí 25. Když stejné vydání přijde ze dvou indexerů, vyhraje nižší číslo |
| Download Client | všechny | Stažení z tohoto indexeru posílá jednomu klientovi. (Any) použije kteréhokoli |
| Tags | všechny | Indexer se použije jen u položek s odpovídajícím štítkem |

Uložený klíč API nebo cookie se už nikdy nezobrazí. Když pole při úpravě necháš prázdné, zůstane zachovaný. Změna URL vyžaduje znovu zadat tajný údaj, aby se klíč omylem neposlal na novou adresu.

## Volby

Tohle platí pro všechny indexery, takže se řiď pravidly každého z nich.

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Minimum Age | 0 (minut) | Ignoruje vydání z usenetu mladší než tohle |
| Retention | 0 (dní) | Ignoruje vydání starší než tohle. 0 znamená bez limitu |
| Maximum Size | 0 (MB) | 0 znamená bez limitu |
| RSS Sync Interval | 15 (minut) | Jak často se kontroluje RSS |

Seznam MAM může plnit i [Seznamy pro import](/cs/settings/import-lists/).

Pokud znáš Sonarr: je to stejné rozdělení na RSS, automatické a interaktivní hledání u každého indexeru. Samostatné "test all" pro kategorie tu není.
