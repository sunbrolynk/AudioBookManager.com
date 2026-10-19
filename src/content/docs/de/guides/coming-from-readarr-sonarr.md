---
title: Umstieg von Readarr oder Sonarr
description: Was gleich bleibt und was anders ist.
---

Wenn du schon Sonarr, Radarr oder Readarr betrieben hast, findest du das meiste in ABM da, wo du es erwartest.

## Was gleich ist

Wanted (Missing, Cutoff Unmet), Activity (Queue, History, Blocklist), Calendar mit iCal-Feed, Indexer mit RSS, automatische und interaktive Suche, Qualitätsprofile mit Cutoff und Upgrades, Delay- und Release-Profile, Tags, Connect, Remote Path Mappings, ein Papierkorb, Backups, Tasks und Status.

## Was anders ist

| In den Arrs | In ABM |
|---|---|
| Qualitäten nach Auflösung | Eine Leiter aus Audioformaten, eine oder mehrere Dateien |
| Custom Formats | Release-Profile mit Must Contain, Must Not Contain, Preferred |
| Ein Eintrag ist eine Episode, ein Film oder ein Buch | Ein Buch, Serie und Position werden als Kataloge verfolgt |
| Metadaten aus dem eigenen Dienst | Libex, mit sperrbaren Covern und geschriebenen Sidecars und Tags |
| Ein Download-Ordner | Genauso, plus Bibliotheksimport für bestehende Sammlungen |
| Keine Medienkonvertierung | Eine Konvertierungswarteschlange: konvertieren, zusammenführen, aufteilen, Kapitel |
| Benennungsformate | ABM wählt die Ordnernamen. Rename Files gibt es in den Listen |
| Importlisten aller Art | MAM und RSS |

## Was es in ABM nicht gibt

Flood ist kein Client. Es gibt keine Custom Formats. Readarrs Buch-Unterstützung gehört nicht dazu. ABM ist nur für Hörbücher.

## Der Umzug

Einen Readarr-Importer gibt es nicht. Lass ABM mit dem [Bibliotheksimport](/de/library-import/) auf deinen bestehenden Hörbuch-Ordner zeigen und schau dir [Eine Bibliothek umziehen](/de/guides/moving-a-library-in/) an.
