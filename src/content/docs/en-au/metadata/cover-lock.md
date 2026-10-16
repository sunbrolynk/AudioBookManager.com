---
title: The cover lock
description: Why a cover you chose is not replaced on refresh.
---

When you set a book's cover yourself, by uploading an image, pasting a URL or picking a result in the cover search, ABM stores it and **locks** it. No metadata refresh replaces a locked cover.

## How you can tell

A locked cover is served from ABM's own store, not from an Audible address. That is how ABM tells a custom cover from an automatic one.

## What it affects

- Metadata refresh keeps the cover, even if Libex has a new one.
- Writing `cover.jpg` and embedding art use the cover you chose.
- Library Import can pick the cover per book. See [Library Import](/en-au/library-import/).

## Undoing it

The book's cover can be reset to the automatic one, which unlocks it. After that a refresh may replace it again.

## Gotchas

- Locking applies to the cover only. Title, author and the rest still refresh.
- Covers are fetched through your outbound connection. If none is chosen, new covers are not downloaded, and cached covers are still served.
