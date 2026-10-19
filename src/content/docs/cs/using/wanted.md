---
title: Hledané
description: Chybějící knihy a knihy pod hranicí kvality.
---

**Wanted** má dvě stránky.

## Chybějící (Missing)

Sledované knihy bez souborů. U každého řádku: **Auto Search**, **Interactive Search**, **Manual Import**, **Unmonitor**.

- Auto Search se zeptá všech zapnutých indexerů a stáhne nejlepší vydání, které profily dovolí.
- Interactive Search vypíše vydání, abys vybral sám. Výběr odsud se počítá jako ruční stažení.
- Manual Import nasměruje ABM na soubory, které už máš.

ABM chybějící knihy hledá i sám. Vydání před stažením podrží profil zpoždění. Viz [Profily](/cs/settings/profiles/).

## Nesplněná hranice (Cutoff Unmet)

Stažené knihy, jejichž kvalita je pořád pod hranicí jejich profilu ("Upgrade Until"). **Search All Cutoff Unmet** je vyhledá. Lepší kopie nahradí starou, jen když na žebříčku stojí výš.

**Media Management > Quality Upgrades** může tohle hledání spouštět za tebe: **Automatic Upgrade Search** (ve výchozím stavu zapnuté) každých **Upgrade Search Interval** (výchozí 24 hodin). Viz [Správa médií](/cs/settings/media-management/).

Pokud znáš Sonarr: je to stejný nápad jako Wanted > Cutoff Unmet, jen se žebříčkem formátů (M4B, MP3 a tak dál, jeden soubor nebo víc souborů) místo rozlišení.
