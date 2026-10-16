---
title: Moving a library in
description: Bring an existing collection into ABM safely.
---

## Before you start

1. Back up the collection. Library Import copies by default, but plan for mistakes.
2. Set up a root folder and a quality profile, and make sure the metadata source is reachable.
3. Decide copy, move or hardlink. Copy is safest. Hardlink saves space if the library is on the same filesystem as the source. See [Media Management](/settings/media-management/).

## The steps

1. **Library > Library Import**, scan the folder.
2. Read the list. Matches show a percentage. Fix **Needs attention** and **Unmatched** rows with **Find a match**, or join rows that are one book split across folders.
3. Check the cover and extra files per folder only if you want to override the defaults.
4. Select the rows and add them. It stays two clicks if you accept the defaults.
5. Watch the task. The summary says how many files were copied instead of hardlinked and what failed.

## If you want ABM to manage the source folder

Add it as a root folder instead and let ABM scan it. This leaves files in place and gives books their status from what is on disk.

## Gotchas

- A book already in the library is shown as such. Decline the duplicate with the keep-library answer rather than importing it twice.
- Declining a folder with no audio removes only what that row owns and goes to the recycle bin if enabled.
- An ASIN found in a description is a hint, not a match, unless the title also agrees.
- After importing, refresh to pull in current metadata, and turn on sidecar writing if you want Audiobookshelf to see ABM's choices. See [Sidecar files](/using/sidecars/).
