---
title: The cover lock
description: Why a cover you chose is not replaced on refresh.
---

When you set a book's cover yourself, by uploading an image, pasting a URL or picking a result in the cover search, ABM stores it and **locks** it. No metadata refresh replaces a locked cover.

## How you can tell

A locked cover is served from ABM's own store, not from an Audible address. That is how ABM tells a custom cover from an automatic one.

## What it affects

- Metadata refresh keeps the cover you chose, even if Libex has a new one. The newer cover updates only the automatic cover, which comes back when you reset.
- Writing `cover.jpg` and embedding art use the cover you chose.
- Library Import can pick the cover per book. See [Library Import](/en-ca/library-import/).

## Undoing it

The book's cover can be reset to the automatic one, which unlocks it. It comes back as the newest automatic cover from your last refresh, and ABM rewrites `cover.jpg` to match. If `cover.jpg` can't be written, ABM shows a warning, and the cover still changes. After that a refresh may replace it again.

A book ABM has no automatic cover for yet can't be reset. ABM tells you to refresh it first and keeps your cover.

## Gotchas

- Locking applies to the cover only. Title, author and the rest still refresh.
- Covers are fetched through ABM, over the connection you chose under **Settings > Network**.
