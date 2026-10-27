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

Open a book for its detail page: files, metadata, history, the quality ABM measured, and actions such as Refresh & Scan and the edit dialog (see below). See [Sidecar files](/en-ca/using/sidecars/).

If you know Sonarr: a book is an episode, a series is a season-and-show in one, and an author is a way to group both. The difference is that one book can belong to several series, and ABM uses the primary one (the lowest position) when it needs to pick.

## Series

**Library > Series** lists every series with owned, wanted and missing-file counts, as Overview or Posters. A series page shows the whole catalogue, including books you don't own. Filter it to All, In Library or Not in Library. **Add Remaining** or **Select to Add** brings the missing books in as wanted, and **Refresh Series** pulls the catalogue again. **Monitor New Books** (All or None) decides whether books that come out later are added as wanted. See [Series tracking](/en-ca/using/series-tracking/).

## Authors

**Library > Authors** lists authors, as Overview or Posters. An author page shows their catalogue grouped by series, with downloaded and total counts for each series, plus their quality profile, genres and rating. **Refresh Catalog** pulls it again and **Search Author** searches for their wanted books. **Monitor New Books** works the same as for a series, and an author starts at None.

Deleting a series or author is refused while it still has books in the library. Remove the books first.

## Quality profile inheritance

A book's quality profile comes from, in order: its own override, its primary series, its primary author, then the default profile. See [Profiles](/en-ca/settings/profiles/).

## The edit dialog

The edit dialog on a book changes ABM's own settings for it, not its metadata:

- **Monitored**
- **Quality Profile** (No Change when editing several)
- **Path**, for one book (with a button to recompute it), or **Root Folder** for a selection
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt and an OPF (the checkbox reads "metadata.opf"; the file is named after the book's first audio file, for example `Dune.opf`, or `title.opf` when there is no audio)
- **Write to Audio Files**: write metadata tags

The same dialog opens for series and authors and applies to each of their books. The write options run when you save.

## Tags

Books, authors and series can carry tags. Tags steer indexers, notifications, import lists and profiles, and filter the calendar feed. See [Tags](/en-ca/settings/tags/).

## Custom filters

Library, Series, the Audible Library page and the Calendar let you build a custom filter from conditions. The value for Author, Narrator, Series, Publisher, Language, Genres, Tags, Keywords, Quality Profile, Format and Plans is picked from a searchable list of the values already in your library. The search ignores accents, so `Brontë` also finds `Bronte`. **Type a value…** at the bottom of the list switches that condition to free text.

Monitored, Released, Upgradable and Virtual Voice are Yes or No choices. Genres, Tags, Keywords and Plans match each value on its own.

## Selection

Select rows to act on several at once: monitor, search, tag, rename, delete. On a phone, see [Phone use](/en-ca/phone/).
