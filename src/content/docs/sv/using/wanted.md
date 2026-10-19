---
title: Önskat
description: Saknade böcker och böcker under sin kvalitetsgräns.
---

**Wanted** har två sidor.

## Saknade (Missing)

Bevakade böcker utan filer. Per rad: **Auto Search**, **Interactive Search**, **Manual Import**, **Unmonitor**.

- Auto Search frågar varje aktiverad indexerare och hämtar den bästa releasen som profilerna tillåter.
- Interactive Search listar releaser så att du väljer. Ett val härifrån räknas som en manuell hämtning.
- Manual Import pekar ABM mot filer du redan har.

ABM söker också efter saknade böcker på egen hand. Releaser hålls kvar av delay-profilen innan de hämtas. Se [Profiler](/sv/settings/profiles/).

## Under kvalitetsgränsen (Cutoff Unmet)

Nedladdade böcker vars kvalitet fortfarande ligger under gränsen i sin profil ("Upgrade Until"). **Search All Cutoff Unmet** söker efter dem. En bättre kopia ersätter den gamla bara när den rankas högre på stegen.

**Media Management > Quality Upgrades** kan köra den här sökningen åt dig: **Automatic Upgrade Search** (på som standard) var **Upgrade Search Interval** (24 timmar som standard). Se [Mediehantering](/sv/settings/media-management/).

Om du kan Sonarr: det här är samma idé som Wanted > Cutoff Unmet, men med en stege av format (M4B, MP3 och så vidare, en fil eller flera) i stället för upplösningar.
