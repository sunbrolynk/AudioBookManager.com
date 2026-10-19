---
title: Indexer
description: Newznab, Torznab, MyAnonamouse und Prowlarr.
---

**Settings > Indexers** listet auf, wo ABM nach Releases sucht.

## Typen

Newznab (Usenet), Torznab (Torrent), MyAnonamouse und eine Prowlarr-Verbindung, die Indexer aus Prowlarr synchronisiert.

## Felder

| Feld | Gilt für | Wirkung |
|---|---|---|
| Name | alle | Bezeichnung |
| Enable RSS | alle | Beim RSS-Sync einbeziehen |
| Enable Automatic Search | alle | Für Suchen nutzen, die ABM startet |
| Enable Interactive Search | alle | Nutzen, wenn du von Hand suchst |
| URL, API Path, API Key | Newznab, Torznab | Wohin und wie verbunden wird. Zugangsdaten gehören ins Feld, nie in die URL |
| Categories | Newznab, Torznab | Welche Kategorien durchsucht werden |
| Cookie (mam_id) | MyAnonamouse | Session-Cookie |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only oder Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Die Suche ausweiten |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | Torrent | Grenzen für Releases und Seed-Ziele |
| Indexer Priority | alle | 1 (höchste) bis 50 (niedrigste), Standard 25. Kommt dasselbe Release von zwei Indexern, gewinnt die niedrigere Zahl |
| Download Client | alle | Grabs von diesem Indexer an einen bestimmten Client schicken. (Any) nimmt irgendeinen |
| Tags | alle | Diesen Indexer nur für Einträge mit einem passenden Tag nutzen |

Ein gespeicherter API-Key oder Cookie wird nie wieder angezeigt. Lass das Feld beim Bearbeiten leer, um ihn zu behalten. Wenn du die URL änderst, musst du das Secret neu eingeben, damit ein Key nicht aus Versehen an eine neue Adresse geschickt wird.

## Optionen

Diese gelten für jeden Indexer, halt dich also an die Regeln jedes einzelnen Indexers.

| Einstellung | Standard | Wirkung |
|---|---|---|
| Minimum Age | 0 (Minuten) | Usenet-Releases ignorieren, die jünger sind |
| Retention | 0 (Tage) | Releases ignorieren, die älter sind. 0 heißt keine Grenze |
| Maximum Size | 0 (MB) | 0 heißt keine Grenze |
| RSS Sync Interval | 15 (Minuten) | Wie oft RSS abgefragt wird |

Die MAM-Liste kann auch [Importlisten](/de/settings/import-lists/) füttern.

Wenn du Sonarr kennst: Es ist dieselbe Aufteilung in RSS, automatische und interaktive Suche pro Indexer. Ein eigenes "alle testen" für Kategorien gibt es nicht.
