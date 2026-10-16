---
title: Indexers
description: Newznab, Torznab, MyAnonamouse and Prowlarr.
---

**Settings > Indexers** lists where ABM searches for releases.

## Types

Newznab (usenet), Torznab (torrent), MyAnonamouse, and a Prowlarr connection that syncs indexers from Prowlarr.

## Fields

| Field | Applies to | Effect |
|---|---|---|
| Name | all | Label |
| Enable RSS | all | Include in RSS sync |
| Enable Automatic Search | all | Use for searches ABM starts |
| Enable Interactive Search | all | Use when you search by hand |
| URL, API Path, API Key | Newznab, Torznab | Where and how to connect. Credentials go in the field, never in the URL |
| Categories | Newznab, Torznab | Which categories to search |
| Cookie (mam_id) | MyAnonamouse | Session cookie |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only, or Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | Widen the search |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | Release limits and seeding goals |
| Indexer Priority | all | 1 (highest) to 50 (lowest), default 25. When the same release comes from two indexers, the lower number wins |
| Download Client | all | Send grabs from this indexer to one client. (Any) uses any |
| Tags | all | Use this indexer only for items with a matching tag |

A saved API key or cookie is never shown again. Leave the field blank on edit to keep it. Changing the URL requires re-entering the secret, so a key cannot be sent to a new address by accident.

## Options

These apply to every indexer, so follow each indexer's own rules.

| Setting | Default | Effect |
|---|---|---|
| Minimum Age | 0 (minutes) | Ignore usenet releases younger than this |
| Retention | 0 (days) | Ignore releases older than this. 0 is no limit |
| Maximum Size | 0 (MB) | 0 is no limit |
| RSS Sync Interval | 15 (minutes) | How often RSS is polled |

The MAM list can also feed [Import Lists](/en-au/settings/import-lists/).

If you know Sonarr: it is the same split between RSS, automatic and interactive search per indexer. There is no separate "test all" for categories.
