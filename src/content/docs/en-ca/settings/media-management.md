---
title: Media Management
description: Root folders, importing, extra files, recycling, scans, upgrades and permissions.
---

**Settings > Media Management** controls where books live and how files move in. Settings marked advanced appear with **Show Advanced**.

## Root Folders

A root folder is a directory ABM manages books in. Add one with **Add Root Folder**, which opens a folder browser with a typeable path. ABM can also list unmapped folders under a root and import them. A root's free space and hardlink support are checked when it is added. Removing a root asks what to do: **Remove from ABM only** (the default) forgets the books under it and leaves the files, and **Delete the books and their files** deletes each book ABM has recorded under the root the way deleting that book does, through the recycle bin when it is on, and removes the author and series folders that leaves empty. The root folder itself, and anything in it that doesn't belong to a book, stays on disk. This choice is refused for a root folder that isn't there, such as an unmounted share, and while the recycle bin is on but its folder doesn't exist, can't be written to or doesn't answer (see [Gotchas](/en-ca/settings/media-management/#gotchas)). If some files can't be deleted, the root is still removed and a warning says how many files in how many books stayed on disk. The log names each one. A root with books in it makes you type to confirm.

The default root folder is the one new books go to and the one that decides whether hardlink is offered for Library Import.

## Folders

| Setting | Default | Effect |
|---|---|---|
| Create Empty Book Folders | off | Creates missing book folders on add, on root folder change and during a disk scan. Ignored while **Delete empty folders** is on, so a folder is not made only to be removed. |
| Delete empty folders | off | During a disk scan, goes through the book folders ABM has recorded. A book's folder with no files left is removed, with the author and series folders that leaves empty, up to but never including the root folder. A book's folder that still has files only loses its empty subfolders. A folder no book records, such as an empty mount point, is left alone, and so is a book's folder that holds another book's folder, a root folder, the recycle bin or ABM's own data. It never follows a link out of the root |

## Importing

| Setting | Default | Effect |
|---|---|---|
| Skip Free Space Check | off | For when ABM cannot detect free space on a root |
| Minimum Free Space | 100 (MB) | An import that would leave less than this is refused |
| Use Hardlinks instead of Copy | on | For completed downloads: hardlink instead of copy, so seeding does not double the space. Needs the same volume. |
| Library Import | Copy | The default for [Library Import](/en-ca/library-import/): copy, hardlink or move. Hardlink is greyed out until the default root has been checked and supports it. |
| Import Extra Files | on | Whether non-audio files come along at all. Applies to Library Import, Manual Import and completed downloads |
| Extra File Extensions (advanced) | empty | More file types to bring along, kept under their own names, for example `srt, lrc`. With or without the dot, separated by commas or spaces. Blocked types, such as executables and partial downloads, can't be saved. Disabled while **Import Extra Files** is off |
| Preferred Cover (advanced) | Matched | Matched edition's cover, or the folder's best image, when both exist |

**Import Extra Files** brings a book's other files along with its audio. Five options pick which kinds come along, and a file matching **Extra File Extensions** comes along even when its kind is off:

| Option | Default | Covers |
|---|---|---|
| Cover art | on | Cover plus back-cover and booklet scans |
| Book info files | on | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | off | PDFs shipped with a book |
| Chapters, transcripts and playlists | on | .cue, chapter lists, subtitles, lyrics, playlists. File names inside them are rewritten to the renamed audio. |
| Audible originals and ebooks | off | .aax/.aaxc, vouchers, epub and similar |

Partial downloads and executables are never imported. ABM's own `metadata.json` is always handled by ABM.

Hardlink is not the same as **Use Hardlinks instead of Copy**. That one is for downloads. The Library Import default is only what the Add to Library dialog preselects.

## File Management

| Setting | Default | Effect |
|---|---|---|
| Unmonitor Deleted Books | off | A book deleted from disk is unmonitored |
| Change File Date | None | Changes file dates on import and rescan |
| Enable Recycle Bin | on | Deleted book files, and the originals a conversion replaces, move to one bin instead of being deleted. Off means both are deleted for good |
| Recycle Bin | empty | Where the bin is. Empty uses `/config/recycle`, with a `media` folder for deleted book files and a `conversions` folder for replaced conversion originals |
| Recycle Bin Cleanup | 7 (days) | How long items stay, for both folders. 0 disables automatic cleanup |
| Library Scan Interval | 24 (hours) | Hours between automatic scans |
| Watch for Changes | on | Scan when files are added, removed or changed |
| Cover Cache Workers | 4 | How many covers are downloaded at once when caching artwork, from 1 to 16 |

## Recycle Bin

There is one recycle bin, set here. Inside it, `media/` holds deleted book files and `conversions/` holds the originals a conversion replaced when **Delete Original** is on. The one setting and the one retention above cover both. The Conversions page has no bin settings of its own, and the bin is never emptied by size, only by age.

Keep the bin outside every root folder. A bin that is a root folder, sits inside one, or contains one is refused, and so is a folder in a system folder (`/bin`, `/boot`, `/lib`, `/sbin`, `/proc`, `/usr/bin` or anything inside them) or one that is, or holds, ABM's own data: its config folder, which holds the key file, and the database's folder. The refusal shows under the folder field the moment you pick or type the path, with the server's reason, so you find out before you press Save. System > Status still warns about a bin that already sits inside a root.

Picking a new folder, in the folder browser or by typing a path, asks right away what to do with what is in the old bin: **Move them to the new folder**, **Leave them where they are** (they stop being cleaned up automatically), or **Delete them**, which makes you type `delete` to confirm. Move and delete also refuse a new folder nested inside the current bin. Nothing moves on disk until you press Save. A move and a delete then run as the tasks **Move Recycle Bin** and **Empty Old Recycle Bin** on System > Tasks. A move switches the bin only once the old one is empty, so one that fails partway keeps the old bin and can be run again. Only one of them runs at a time. If an old bin holds a root folder, its files can only be left in place.

## Quality Upgrades

| Setting | Default | Effect |
|---|---|---|
| Automatic Upgrade Search | on | Periodically searches for better releases of downloaded books still below their cutoff. A copy replaces yours only when it is a real upgrade. |
| Upgrade Search Interval | 24 (hours) | How often it runs |

## Permissions (advanced)

| Setting | Default | Effect |
|---|---|---|
| Set Permissions | off | Run chmod on import and rename |
| chmod Folder | 755 | Octal mode for folders and files, without execute bits for files |
| chown Group | empty | Group name or gid. Use a gid on remote file systems |

## Gotchas

- If the recycle bin is enabled but its folder doesn't exist, can't be written to or doesn't answer within a few seconds, deleting books, authors, series or a root folder with their files is refused with HTTP 400 and the reason before anything changes, instead of deleting permanently. Nothing is removed from ABM. The delete's task checks the bin again when it runs and deletes nothing if the bin can't take the files by then. A missing bin folder is never created by a delete, since it may be a share that isn't mounted.
- Hardlinks only work inside one filesystem. Files that cannot be linked are copied, never moved, and counted in the import result.

If you know Sonarr: this is Sonarr's Media Management without naming formats. Folder names are chosen by ABM. Bulk rename lives on Library, Series and Authors as **Rename Files**.
