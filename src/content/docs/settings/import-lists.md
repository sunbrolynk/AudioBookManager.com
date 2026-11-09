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
| Root Folder | Where they go. Must be one of your configured root folders; any other path is refused |
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

- If a list's root folder is removed later, that list's sync reports the problem and adds nothing. It never falls back to the default root.
- A saved session ID is never shown again. A saved RSS link shows only its site, like `https://tracker.example.com/***`, because the rest of the link can carry your passkey. Leave it as it is to keep the saved link, or enter the full link to replace it. A partly edited one is refused. If the app key changes and the link can't be read, the list says so and you enter the link again.
- RSS links are stored encrypted. After rolling back to an older ABM version, enter your RSS links again.
- Lists fire the notifications On Import List Synced and On Import List New Items. See [Connect](/settings/connect/).
