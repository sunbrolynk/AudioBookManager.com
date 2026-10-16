---
title: Library
description: Books, authors and series, and how ABM tracks their status.
---

The **Library** menu has three lists: **Books**, **Series** and **Authors**. **Add New** and **Library Import** put things in them. **Audible Library** and **Conversions** are covered on their own pages.

## Books

Each book is a row, a poster or a table line (the view switch is in the toolbar). A book has a status:

- **Wanted**: monitored, no files yet. ABM searches for it.
- **Downloaded**: files are on disk.
- **Missing Files**: the book was downloaded, but its files are no longer where ABM expects them.
- **Unmonitored**: ABM leaves it alone.

Open a book for its detail page: files, metadata, history, the quality ABM measured, and actions such as Refresh & Scan and the edit dialog (see below). See [Sidecar files](/using/sidecars/).

If you know Sonarr: a book is an episode, a series is a season-and-show in one, and an author is a way to group both. The difference is that one book can belong to several series, and ABM uses the primary one (the lowest position) when it needs to pick.

## Series and authors

The Series and Authors lists show owned, wanted and missing-file counts. Open one to see the catalog, which includes books you do not own. From there you can add the missing books. See [Series tracking](/using/series-tracking/).

Deleting a series or author is refused while it still has books in the library. Remove the books first.

## Quality profile inheritance

A book's quality profile comes from, in order: its own override, its primary series, its primary author, then the default profile. See [Profiles](/settings/profiles/).

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

Books, authors and series can carry tags. Tags steer indexers, notifications, import lists and profiles, and filter the calendar feed. See [Tags](/settings/tags/).

## Selection

Select rows to act on several at once: monitor, search, tag, rename, delete. On a phone, see [Phone use](/phone/).
