---
title: Gesucht
description: Fehlende Bücher und Bücher unter ihrem Qualitäts-Cutoff.
---

**Wanted** hat zwei Seiten.

## Fehlend (Missing)

Überwachte Bücher ohne Dateien. Pro Zeile: **Auto Search**, **Interactive Search**, **Manual Import**, **Unmonitor**.

- Auto Search fragt jeden aktivierten Indexer und lädt das beste Release, das die Profile zulassen.
- Interactive Search listet die Releases auf, damit du auswählst. Was du hier auswählst, zählt als manueller Grab.
- Manual Import lässt ABM auf Dateien zeigen, die du schon hast.

ABM sucht fehlende Bücher auch von sich aus. Releases werden vor dem Laden vom Delay-Profil zurückgehalten. Siehe [Profile](/de/settings/profiles/).

## Cutoff nicht erreicht (Cutoff Unmet)

Heruntergeladene Bücher, deren Qualität noch unter dem Cutoff ihres Profils liegt ("Upgrade Until"). **Search All Cutoff Unmet** sucht nach ihnen. Eine bessere Kopie ersetzt die alte nur, wenn sie auf der Leiter darüber steht.

**Media Management > Quality Upgrades** kann diese Suche für dich laufen lassen: **Automatic Upgrade Search** (standardmäßig an) alle **Upgrade Search Interval** (standardmäßig 24 Stunden). Siehe [Medienverwaltung](/de/settings/media-management/).

Wenn du Sonarr kennst: Das ist dieselbe Idee wie Wanted > Cutoff Unmet, nur mit einer Leiter aus Formaten (M4B, MP3 und so weiter, eine oder mehrere Dateien) statt Auflösungen.
