---
title: Your metadata, your control
description: What a refresh changes, what you control, and the files and tags ABM writes for your player.
---

ABM keeps a record of your library's metadata in its own database, and writes it back out where your player can use it. This page lays out what is yours to control and what a refresh will touch.

## What a refresh changes

A refresh (a book's **Refresh & Scan**, an author refresh, a series refresh) asks the metadata source again and applies what comes back. Fields it overwrites when the source has a value: title, subtitle, year and release date, rating, runtime, language, publisher, description, authors, narrators, genres, and the cover.

A field the source returns empty is left as it is.

## What you control

- **A cover you chose.** It is locked. See [The cover lock](/en-ca/metadata/cover-lock/).
- **Tags, auto tags, monitoring, quality profile choices and the files themselves.** A refresh does not touch them.
- **A book whose files cannot be read.** It is left alone entirely, and the Tasks page shows why.

Book details such as the title, authors and description come from the source. ABM does not offer hand-editing of them, and none is planned. What you control is how they are kept and where they are written.

## The edit dialog

The edit dialog changes monitoring, quality profile, path and tags, and lets you write sidecar files and audio tags in the same step, for one book or a whole selection of series and authors. See [Library](/en-ca/using/library/#the-edit-dialog).

## Sidecars your player reads

ABM writes `cover.jpg`, an `.opf`, `desc.txt` and `reader.txt` beside the audio. Audiobookshelf reads the OPF, cover and text files, so what you chose in ABM is what the player shows. See [Sidecar files](/en-ca/using/sidecars/).

## Tags written into the audio

ABM can write title, artist, album artist, album, genre, year, comment, narrator and embedded cover art into the audio files themselves, so the data travels with the file. It is off by default. Pick the fields under **Settings > Metadata**. See [Metadata settings](/en-ca/settings/metadata/).

## Chapters

Comparing the chapters embedded in your files with the published edition's, and writing the published chapters into the files, is planned for a later release. See [Chapters](/en-ca/using/chapters/).

## Series and position

A book carries its series and position. ABM tracks series as catalogues so it can show which books you own and add the ones you lack. See [Series tracking](/en-ca/using/series-tracking/).

## Tags and auto tags

Tags are yours. Auto tags apply them by rules (genre, narrator, rating, runtime and more), and can remove them when a book stops matching. Tags then steer profiles, notifications, indexers, import lists and the calendar feed. See [Tags](/en-ca/settings/tags/).

## A growing local record

Everything ABM learns about a book stays in ABM's own SQLite database in `/config`, including books you later remove. Back that folder up and the record is backed up. Metadata does not depend on the source being reachable once a book is in.

## Local Storage

Local Storage is an opt-in copy of everything ABM has looked up, kept in a file of its own. It is off by default. Turn it on under **Settings > Metadata**; see [Metadata settings](/en-ca/settings/metadata/#local-storage). Once it is on, every book, author and series a lookup returns is saved from the answers ABM receives. It is written after the answer has gone back, so it never slows a search. Nothing is removed from it, so it stays your long-term record even after a book leaves your library.

**When the source can't answer.** When the source times out, is down, or says it has no such book, the saved copy answers if it is ready in time. The result carries a **Local Storage** badge with the date it was saved, and **Delisted?** when the source says the book is gone, which means it may have been removed from sale. Searches also add saved matches the source did not return. The badge shows wherever the result does, including the add-book window, the import workbench and the editions list. A rate limit or a lost connection still stops a background run instead of being answered from the saved copy.

**Saved answers are never trusted blindly.**

- Nothing is added as wanted, matched or imported from a book only Local Storage knows. A scan, an import list, or an author or series refresh leaves it for you.
- A refresh answered from Local Storage only fills in what is missing. It never overwrites your changes, and it does not count as a refresh.
- Run summaries say how much came from Local Storage.

**Repeat lookups.** ABM reuses a source's last answer to the same lookup for 300 seconds. A repeat within that time is not recorded again and gets no saved rows.

**Turning it off** lets you export it to your backup targets and download a copy first, in any combination, then asks whether to keep the local data or delete it. If a copy fails, nothing is deleted and Local Storage stays on.

**Backup and restore.** Local Storage has its own backups, on a schedule or by **Backup Now**, kept apart from the ABM backups and never shown in their list. They can be exported to your backup targets, downloaded, restored from the list or from an uploaded file, and deleted. Restoring asks for your password when one is set, and a restore that fails leaves the current library in place. See [Storage Backups](/en-ca/settings/metadata/#storage-backups).

## Refresh schedules

- Discover has its own schedule. See [Discover settings](/en-ca/settings/discover/).
- The Audible library has its own sync schedule. See [Audible settings](/en-ca/settings/audible/).
- A library scan can run every N hours and on file changes. See [Media Management](/en-ca/settings/media-management/).
- Writing sidecars and tags on refresh is controlled by **Create on Refresh** and **Write Audio Tags on Refresh**.
