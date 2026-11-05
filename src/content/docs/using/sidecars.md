---
title: Sidecar files
description: The metadata.json, NFO, cover, OPF, description and narrator files ABM writes beside a book.
---

A sidecar is a small file beside the audio. Audiobookshelf and other players read them. ABM writes these:

| File | Contents | Switch |
|---|---|---|
| `metadata.json` | Audiobookshelf's own metadata file, plus an `abm` block that marks it as ABM's. Audiobookshelf reads it before anything else. It says whether the book is explicit and whether it is abridged; a flag ABM does not know is left out, so Audiobookshelf keeps its own value. It carries no tags, so tags you set in Audiobookshelf stay | None, always written |
| `<audio file name>.nfo` | The title, author, narrator and series lines Audiobookshelf reads. Named after the book's first audio file, or after the book when it has no audio. ABM always overwrites it | None, always written |
| `cover.jpg` | The book's cover. Not written when the folder already has a `cover.*` | Cover image |
| `.opf` | Metadata in OPF form. Named after the book's first audio file (for example `Dune.opf`), or after the book when it has no audio | Book info |
| `desc.txt` | The description, without HTML. Skipped when there is none | Description |
| `reader.txt` | The narrators. Skipped when there are none | Narrator |

Together with the folder layout, these are the files Audiobookshelf reads for a book's details, so it sees the same book ABM does.

## When they are written

`metadata.json` and the `.nfo` are written every time a book is added, imported or refreshed, whatever the switches say. That covers a finished download, an upgrade, a manual import, Library Import and a finished conversion. The `.opf` and `.nfo` leave out genres so a cleared genre stays cleared; genres are in `metadata.json` only. Books already in the library get these files on their next import or refresh.

The other four each have a switch under **Settings > Metadata > Files to Create**, all on by default. They are written only when the matching trigger is on as well: **Create on Book Add** (off), **Create on Import** (on, which covers downloads, Library Import and Audible downloads) and **Create on Refresh** (off). **Overwrite Existing** is off, so a file that is already there stays. Nothing is written until the book's folder exists.

The edit dialog's **Write to Directories** writes the four as well, for one book or a selection of series and authors. See [Metadata settings](/settings/metadata/).

If writing a sidecar, an audio tag or auto-tagging fails after an import, the book is still imported and the failure is shown with its reason as a warning. It appears on the task log, in the book's History as "post import failed", and in the Activity Log. When a book is added, a failed step shows in the book's History as "post add failed", labelled "metadata:" or "auto-tagging:". After a refresh the failure goes on the refresh's run log instead. These rows are not on the Activity > History page, which shows download events only.

## The cover is special

A cover you chose yourself is locked. See [The cover lock](/metadata/cover-lock/).

## On import

Importing also brings across a book's existing non-audio files, governed by **Media Management > Importing**. When the source has an `.opf`, a description or a narrator file, ABM takes at most one of each and names them `desc.txt` and `reader.txt`. A destination that already exists is left alone, and a new cover is never written over an existing `cover.*`.

## Hardlinks

A hardlinked import keeps the original untouched. When ABM writes any of these files it writes a new file instead of editing in place, so the source you imported from keeps its content.

## Gotchas

- Besides these, **Backup Original Metadata** in [Conversion settings](/settings/conversions/) writes a JSON file to a `.metadata_backup` folder before a conversion. It is a record for you, not something a player reads.
- A release `.nfo` is not imported unless you choose it, because ABM writes its own and Audiobookshelf reads one per book.
- A `metadata.json` is handled by ABM when it carries ABM's own block. Another tool's `metadata.json` follows the Book info files switch.
- In a folder shared by several books, only files named after this book's audio belong to it.
- Deleting a book's files removes its whole folder when no other book uses it. In a folder shared with another book, only that book's own files and ABM's `.opf`, `.nfo`, `desc.txt`, `reader.txt` and `metadata.json` go.
