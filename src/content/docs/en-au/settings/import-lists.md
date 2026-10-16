---
title: Import Lists
description: Pull wanted books in from MyAnonamouse or an RSS feed.
---

**Settings > Import Lists** adds books automatically from outside sources.

## Sources

- **MAM**: a MyAnonamouse wishlist, using a **MAM Session ID**.
- **RSS**: an **RSS Link** you supply, with an optional **Website URL**. The website must be http or https.

## Per list

| Field | Effect |
|---|---|
| Name | Label |
| Monitor | Whether books it adds are Monitored or Unmonitored |
| Root Folder | Where they go |
| Quality Profile | A profile, or Inherit (use default) |
| Tags | Applied to everything the list adds |

**Sync Now** runs lists right away.

## Options

| Setting | Default | Effect |
|---|---|---|
| RSS Sync Interval | 12 (hours) | How often lists sync. 0 turns syncing off |
| Clean Library Level | Disabled | What happens to a book when it leaves the list |

Clean Library Level choices: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. The last one deletes files. Pick it only if you mean it.

## Exclusions

**Import List Exclusions** blocks a book by **ASIN**, **Title** and **Year**, so a list never adds it again. Use **Lookup ASIN** to fill them in.

## Gotchas

- A saved RSS link or session ID is never shown again. Changing the address needs the secret re-entered.
- Lists fire the notifications On Import List Synced and On Import List New Items. See [Connect](/en-au/settings/connect/).
