---
title: Štítky
description: Štítky a pravidla automatického štítkování.
---

**Settings > Tags** spravuje štítky a **Auto Tagging**.

## Štítky

Štítek je jedno slovo: malá písmena, bez mezer, bez čárek, nejvýš 100 znaků. Ze zadaného `Sci-Fi` se stane `sci-fi`. Štítky se dávají na knihy, autory a série a párují se s nimi indexery, profily zpoždění a vydání, seznamy pro import, agenti Connect a kalendářový feed.

Pokud znáš Sonarr: štítky fungují stejně. Profil se štítkem platí jen pro věci, které ho nesou.

## Automatické štítky

Automatický štítek je pravidlo, které přidá štítky knihám, které mu odpovídají.

| Pole | Co dělá |
|---|---|
| Name | Popisek |
| Enable | Zapnuto, nebo vypnuto |
| Remove Tags Automatically | Když kniha přestane odpovídat, štítky odebere |
| Tags | Co přidat |
| Conditions | Čemu musí kniha odpovídat. Každou podmínku jde negovat nebo nastavit jako povinnou |

Typy podmínek: Genre, Monitored, Language, Root Folder, Status, Tag, Year (rozsah), Series Type, Author (obsahuje), Narrator (obsahuje), Runtime in minutes (rozsah) a Rating (rozsah).

**Apply** spustí vybraná pravidla hned. Pravidla se spouštějí i při změnách knih.

## Na co si dát pozor

- Pravidlo, které odkazuje na smazaný štítek nebo kořenovou složku, se úplně přeskočí, v obou směrech, takže rozbité pravidlo nikdy špatně neoštítkuje ani štítky neodebere.
- Remove Tags Automatically odebírá jen štítky, které by toto pravidlo přidalo.
