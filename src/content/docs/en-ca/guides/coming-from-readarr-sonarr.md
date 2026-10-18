---
title: Coming from Readarr or Sonarr
description: What carries over and what differs.
---

If you have run Sonarr, Radarr or Readarr, most of ABM is where you expect it.

## The same

Wanted (Missing, Cutoff Unmet), Activity (Queue, History, Blocklist), Calendar with an iCal feed, indexers with RSS, automatic and interactive search, quality profiles with a cutoff and upgrades, delay and release profiles, tags, Connect, remote path mappings, a recycle bin, backups, Tasks and Status.

## Different

| In the arrs | In ABM |
|---|---|
| Resolution-based qualities | A ladder of audio formats, single or multi-file |
| Custom formats | Release profiles with Must Contain, Must Not Contain, Preferred |
| An item is an episode, movie or book | A book, with series and position tracked as catalogues |
| Metadata from their own service | Libex, with covers lockable, sidecars and tags written |
| One download folder | Same, plus Library Import for existing collections |
| No media conversion | A conversion queue: convert, merge, split, chapters |
| Naming formats | ABM chooses folder names. Rename Files is on lists |
| Import lists of many kinds | MAM and RSS |

## Not in ABM

Flood is not a client. There are no custom formats. Readarr's book support is not part of this. ABM is audiobooks only.

## Moving over

There is no Readarr importer. Point ABM at your existing audiobook folder with [Library Import](/en-ca/library-import/) and see [Moving a library in](/en-ca/guides/moving-a-library-in/).
