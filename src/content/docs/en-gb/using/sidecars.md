---
title: Sidecar files
description: The cover, OPF, description, narrator and cue files ABM writes beside a book.
---

A sidecar is a small file beside the audio. Audiobookshelf and other players read them. ABM can write these:

| File | Contents |
|---|---|
| `cover.jpg` | The book's cover |
| `.opf` | Metadata in OPF form, readable by Audiobookshelf. Named after the book's first audio file (for example `Dune.opf`), or `title.opf` when the book has no audio |
| `desc.txt` | The description |
| `reader.txt` | The narrator |
| `.cue` | Chapters from Libex (coming in the next release) |

## When they are written

Under **Settings > Metadata**, **Create on Book Add**, **Create on Import** and **Create on Refresh** choose when. By default only import writes them. **Overwrite Existing** is off, so a file that is already there stays. You can also write them from the edit dialog, for one book or a selection of series and authors. See [Metadata settings](/en-gb/settings/metadata/).

## The cover is special

A cover you chose yourself is locked. See [The cover lock](/en-gb/metadata/cover-lock/).

## On import

Importing also brings across a book's existing non-audio files, governed by **Media Management > Importing**. When the source has an `.opf`, a description or a narrator file, ABM takes at most one of each and names them `desc.txt` and `reader.txt`. A destination that already exists is left alone, and a new cover is never written over an existing `cover.*`.

## Hardlinks

A hardlinked import keeps the original untouched. When ABM writes any of these files it writes a new file instead of editing in place, so the source you imported from keeps its content.

## Gotchas

- A `metadata.json` is handled by ABM when it carries ABM's own block. Another tool's `metadata.json` follows the Book info files switch.
- In a folder shared by several books, only files named after this book's audio belong to it.
- Deleting a book removes its sidecars when they are named after that book's files.
