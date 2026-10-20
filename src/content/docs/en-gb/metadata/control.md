---
title: Your metadata, your control
description: What a refresh changes, what you control, and the files and tags ABM writes for your player.
---

ABM keeps a record of your library's metadata in its own database, and writes it back out where your player can use it. This page lays out what is yours to control and what a refresh will touch.

## What a refresh changes

A refresh (a book's **Refresh & Scan**, an author refresh, a series refresh) asks the metadata source again and applies what comes back. Fields it overwrites when the source has a value: title, subtitle, year and release date, rating, runtime, language, publisher, description, authors, narrators, genres, and the cover.

A field the source returns empty is left as it is.

## What you control

- **A cover you chose.** It is locked. See [The cover lock](/en-gb/metadata/cover-lock/).
- **Tags, auto tags, monitoring, quality profile choices and the files themselves.** A refresh does not touch them.
- **A book whose files cannot be read.** It is left alone entirely, and the Tasks page shows why.

Book details such as the title, authors and description come from the source. ABM does not offer hand-editing of them, and none is planned. What you control is how they are kept and where they are written.

## The edit dialog

The edit dialog changes monitoring, quality profile, path and tags, and lets you write sidecar files and audio tags in the same step, for one book or a whole selection of series and authors. See [Library](/en-gb/using/library/#the-edit-dialog).

## Sidecars your player reads

ABM writes `cover.jpg`, an `.opf`, `desc.txt` and `reader.txt` beside the audio. Audiobookshelf reads the OPF, cover and text files, so what you chose in ABM is what the player shows. See [Sidecar files](/en-gb/using/sidecars/).

## Tags written into the audio

ABM can write title, artist, album artist, album, genre, year, comment, narrator and embedded cover art into the audio files themselves, so the data travels with the file. It is off by default. Pick the fields under **Settings > Metadata**. See [Metadata settings](/en-gb/settings/metadata/).

## Chapters

Comparing the chapters embedded in your files with the published edition's, and writing the published chapters into the files, is planned for a later release. See [Chapters](/en-gb/using/chapters/).

## Series and position

A book carries its series and position. ABM tracks series as catalogues so it can show which books you own and add the ones you lack. See [Series tracking](/en-gb/using/series-tracking/).

## Tags and auto tags

Tags are yours. Auto tags apply them by rules (genre, narrator, rating, runtime and more), and can remove them when a book stops matching. Tags then steer profiles, notifications, indexers, import lists and the calendar feed. See [Tags](/en-gb/settings/tags/).

## A growing local record

Everything ABM learns about a book stays in ABM's own SQLite database in `/config`, including books you later remove. Back that folder up and the record is backed up. Metadata does not depend on the source being reachable once a book is in.

:::caution[Coming in a later release]
A dedicated **Local Metadata Library** is planned: an opt-in copy of everything ABM has ever looked up, kept even after a book leaves your library, with its own scheduled backups and a SQLite download.
:::

## Refresh schedules

- Discover has its own schedule. See [Discover settings](/en-gb/settings/discover/).
- The Audible library has its own sync schedule. See [Audible settings](/en-gb/settings/audible/).
- A library scan can run every N hours and on file changes. See [Media Management](/en-gb/settings/media-management/).
- Writing sidecars and tags on refresh is controlled by **Create on Refresh** and **Write Tags on Refresh**.
