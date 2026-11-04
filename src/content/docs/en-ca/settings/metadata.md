---
title: Metadata
description: Which sidecar files and audio tags ABM writes, and when.
---

**Settings > Metadata** decides what ABM writes into a book's folder and its files. How these files are used is on [Sidecar files](/en-ca/using/sidecars/).

## Source

**Metadata Source** is Built-in (the default), Hosted (libexdb.com) or Self-hosted, which takes a **Server URL**. **Test** makes a real request to the selected source without saving, **Status** says whether it is ready, and **Connection** shows the route lookups leave through and links to **Settings > Network**. Switching takes effect for every lookup at once. See [Choosing a metadata source](/en-ca/metadata/choosing-a-source/).

## Metadata file creation

| Setting | Default | Effect |
|---|---|---|
| Create on Book Add | off | Write files when a book is added as wanted |
| Create on Import | on | Write files when an audiobook is imported |
| Create on Refresh | off | Create or update files when metadata is refreshed |
| Overwrite Existing | off | Replace files already in the folder |

Files to create: `cover.jpg` (on), `title.opf` (on, Audiobookshelf-compatible), `desc.txt` (on) and `reader.txt` (on).

## Audio file tag writing

Writes audio tags into the audio files themselves.

| Setting | Default |
|---|---|
| Write Audio Tags | off |
| Write Audio Tags on Import | on, once tag writing is on |
| Write Audio Tags on Refresh | off |

Tag fields, all on by default: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) and Cover Art.

## Local Storage

With the Built-in source, **Local Storage** and **Storage Backups** sections are shown. They are a preview and are not connected yet. See [Your metadata, your control](/en-ca/metadata/control/).

## Gotchas

- Tag writing changes the audio files. Audiobookshelf will see them as modified.
- If metadata or a cover cannot be fetched during tag writing, the call returns warnings instead of failing.
- When a cover could not be embedded because the connection refused it, the book page and the edit dialog show a warning instead of plain success.
