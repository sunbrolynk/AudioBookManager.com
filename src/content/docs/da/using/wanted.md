---
title: Ønsket
description: Manglende bøger og bøger under deres kvalitets-cutoff.
---

**Wanted** har to sider.

## Mangler (Missing)

Overvågede bøger uden filer. Pr. række: **Auto Search**, **Interactive Search**, **Manual Import**, **Unmonitor**.

- Auto Search spørger alle aktiverede indeksere og henter den bedste udgivelse, profilerne tillader.
- Interactive Search viser udgivelser, så du selv vælger. Et valg herfra tæller som en manuel hentning.
- Manual Import peger ABM på filer, du allerede har.

ABM søger også selv efter manglende bøger. Udgivelser bliver holdt tilbage af forsinkelsesprofilen, før de bliver hentet. Se [Profiler](/da/settings/profiles/).

## Under cutoff (Cutoff Unmet)

Hentede bøger, hvis kvalitet stadig er under deres profils cutoff ("Upgrade Until"). **Search All Cutoff Unmet** søger efter dem. En bedre kopi erstatter kun den gamle, når den ligger højere på stigen.

**Media Management > Quality Upgrades** kan køre den søgning for dig: **Automatic Upgrade Search** (slået til som standard) hver **Upgrade Search Interval** (24 timer som standard). Se [Media Management](/da/settings/media-management/).

Kender du Sonarr: det er samme idé som Wanted > Cutoff Unmet, bare med en stige af formater (M4B, MP3 og så videre, én eller flere filer) i stedet for opløsninger.
