---
title: Library
description: Books, authors and series, and how ABM tracks their status.
---

The **Library** menu has three lists: **Books**, **Series** and **Authors**. **Add New** and **Library Import** put things in them. **Audible Library** and **Conversions** are covered on their own pages.

## Books

Each book is an overview row, a poster or a table line (the view switch is in the toolbar). A book has a status:

- **Wanted**: monitored, no files yet. ABM searches for it.
- **Downloaded**: files are on disk.
- **Missing Files**: the book was downloaded, but its files are no longer where ABM expects them.
- **Unmonitored**: ABM leaves it alone.

Open a book for its detail page: files, metadata, history, the quality ABM measured, and actions such as Refresh & Scan and the edit dialog (see below). See [Sidecar files](/en-gb/using/sidecars/).

The detail page can also write a single file (OPF, NFO or metadata.json), the audio tags, the cover embed, or **Write All**. On a phone these are in the Actions sheet under **Write to folder and files**.

When a page's toolbar is too narrow on a desktop, the buttons that don't fit move into a **More** menu at the end of their group. Sort, filter and view controls always stay on the bar.

If you know Sonarr: a book is an episode, a series is a season-and-show in one, and an author is a way to group both. The difference is that one book can belong to several series, and ABM uses the primary one (the lowest position) when it needs to pick.

## Series

**Library > Series** lists every series with owned, wanted and missing-file counts, as Overview or Posters. A series page shows the whole catalogue, including books you don't own. Filter it to All, In Library or Not in Library. **Add Remaining** or **Select to Add** brings the missing books in as wanted, and **Refresh Series** pulls the catalogue again. **Monitor New Books** (All or None) decides whether books that come out later are added as wanted. See [Series tracking](/en-gb/using/series-tracking/).

## Authors

**Library > Authors** lists authors, as Overview or Posters. An author page shows their catalogue grouped by series, with downloaded and total counts for each series, plus their quality profile, genres and rating. **Refresh Catalog** pulls it again and **Search Author** searches for their wanted books. **Monitor New Books** works the same as for a series, and an author starts at None.

Deleting a series or author is refused while it still has books in the library. Remove the books first.

## Quality profile inheritance

A book's quality profile comes from, in order: its own override, its primary series, its primary author, then the default profile. See [Profiles](/en-gb/settings/profiles/).

## The edit dialog

The edit dialog on a book changes ABM's own settings for it, not its metadata:

- **Monitored**
- **Quality Profile** (No Change when editing several)
- **Path**, for one book (with a button to recompute it), or **Root Folder** for a selection
- **Tags**
- **Audiobookshelf**: the **Write All** box ticks every box below, so one save writes every file Audiobookshelf reads
- **Write to Directories**: cover.jpg, desc.txt, reader.txt, an OPF, an NFO and metadata.json. The OPF and NFO are named after the book's first audio file (for example `Dune.opf`), or after the book when there is no audio
- **Write to Audio Files**: **Write audio tags** and **Embed cover art**, which writes the cover into the audio files

The same dialog opens for series and authors and applies to each of their books. The write options run when you save. For each book the folder files are written first, then the tags, then the cover embed. A file the book has nothing to put in (no description, no narrator, no cover) is skipped, not treated as an error. For one book or a selection of books you see it as a warning when you save. For a series or an author it is skipped quietly.

## Tags

Books, authors and series can carry tags. Tags steer indexers, notifications, import lists and profiles, and filter the calendar feed. See [Tags](/en-gb/settings/tags/).

## Custom filters

Library, Series, the Audible Library page and the Calendar let you build a custom filter from conditions. The value for Author, Narrator, Series, Publisher, Language, Genres, Tags, Keywords, Quality Profile, Format and Plans is one editable box with a list of every value already in your library. Typing narrows the list, picking an item sets it, and whatever you type is the value. Press Enter or leave the box to keep typed text even when it matches nothing. The search ignores accents, so `Brontë` also finds `Bronte`. On a phone, the sheet's search box works the same way, and tapping a row picks it.

Monitored, Released, Upgradable and Virtual Voice are Yes or No choices. Genres, Tags, Keywords and Plans match each value on its own. A saved value that contains a comma still matches the way it did before.

Discover's custom filters keep a plain text box, because its catalog is filtered on the server.

## Selection

Select rows to act on several at once: monitor, search, tag, rename, delete. On a phone, see [Phone use](/en-gb/phone/).
