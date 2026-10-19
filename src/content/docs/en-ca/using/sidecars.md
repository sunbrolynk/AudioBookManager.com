---
title: Sidecar files
description: The metadata.json, cover, OPF, description and narrator files ABM writes beside a book.
---

A sidecar is a small file beside the audio. Audiobookshelf and other players read them. ABM writes these:

| File | Contents | Switch |
|---|---|---|
| `metadata.json` | Audiobookshelf's own metadata file, plus an `abm` block that marks it as ABM's. Audiobookshelf reads it before anything else | None, always written |
| `cover.jpg` | The book's cover. Not written when the folder already has a `cover.*` | cover.jpg |
| `.opf` | Metadata in OPF form. Named after the book's first audio file (for example `Dune.opf`), or `title.opf` when the book has no audio | title.opf |
| `desc.txt` | The description, without HTML. Skipped when there is none | desc.txt |
| `reader.txt` | The narrators. Skipped when there are none | reader.txt |

Together with the folder layout, these are the files Audiobookshelf reads for a book's details, so it sees the same book ABM does.

## When they are written

`metadata.json` is written every time a book is added, imported or refreshed.

The other four each have a switch under **Settings > Metadata > Files to Create**, all on by default. They are written only when the matching trigger is on as well: **Create on Book Add** (off), **Create on Import** (on, which covers downloads, Library Import and Audible downloads) and **Create on Refresh** (off). **Overwrite Existing** is off, so a file that is already there stays. Nothing is written until the book's folder exists.

The edit dialog's **Write to Directories** writes the four as well, for one book or a selection of series and authors. See [Metadata settings](/en-ca/settings/metadata/).

## The cover is special

A cover you chose yourself is locked. See [The cover lock](/en-ca/metadata/cover-lock/).

## On import

Importing also brings across a book's existing non-audio files, governed by **Media Management > Importing**. When the source has an `.opf`, a description or a narrator file, ABM takes at most one of each and names them `desc.txt` and `reader.txt`. A destination that already exists is left alone, and a new cover is never written over an existing `cover.*`.

## Hardlinks

A hardlinked import keeps the original untouched. When ABM writes any of these files it writes a new file instead of editing in place, so the source you imported from keeps its content.

## Gotchas

- A `metadata.json` is handled by ABM when it carries ABM's own block. Another tool's `metadata.json` follows the Book info files switch.
- In a folder shared by several books, only files named after this book's audio belong to it.
- Deleting a book removes its sidecars when they are named after that book's files.
