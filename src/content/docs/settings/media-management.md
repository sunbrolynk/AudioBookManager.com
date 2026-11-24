---
title: Media Management
description: Root folders, importing, extra files, recycling, scans, upgrades and permissions.
---

**Settings > Media Management** controls where books live and how files move in. Settings marked advanced appear with **Show Advanced**.

![Settings, Media Management: importing options](../../../assets/docs/settings-media.jpg)

## Root Folders

A root folder is a directory ABM manages books in. Add one with **Add Root Folder**, which opens a folder browser with a typeable path. ABM can also list unmapped folders under a root and import them. A root's free space and hardlink support are checked when it is added. Removing a root asks what to do: **Remove from ABM only** (the default) forgets the books under it and leaves the files, and **Delete the books and their files** deletes each book ABM has recorded under the root the way deleting that book does, through the recycle bin when it is on, and removes the author and series folders that leaves empty. The root folder itself, and anything in it that doesn't belong to a book, stays on disk. This choice is refused for a root folder that isn't there, such as an unmounted share. A root with books in it makes you type to confirm. Removing a root also deletes any auto-tag rule condition that named it.

Adding a root folder that is, contains or sits inside the [recycle bin](#recycle-bin) is refused with HTTP 400, naming the bin. Root folders can't be nested. Adding one that sits inside another root, or that contains one, is refused with HTTP 400 naming the other root. If you already have a nested pair, System > Status warns and names both paths. A book counts under, and is removed with, the most specific root that holds it, so removing the outer root leaves the inner root's books alone, and **Delete the books and their files** is refused while another root lies inside the one you're removing.

A root folder can be a link to your library somewhere else. Every disk scan checks where a root really leads, and a root that is, or now leads into, a system folder (`/bin`, `/boot`, `/lib`, `/sbin`, `/proc`, `/usr/bin` or anything inside them) is not scanned: the scan names the path the way the arr apps do, such as "Path '/boot/books' is child of system folder /boot", and your other roots still scan. A book whose folder or root leads into one is skipped the same way, and a refresh of it leaves it untouched. Point the root, or the link, back at your library folder.

During a library scan, a book refresh, a Library Import or a conversion restore, a root folder that is missing, can't be read or doesn't answer is treated as unavailable: ABM doesn't create it, change its books or mark them missing. A slow network share gets up to 2 minutes to wake for a scan, a refresh or an import. A restore waits 10 seconds, so try it again once the share is awake. The reason is given with the root's path: it "does not exist", it "cannot be read" (usually folder permissions, such as the PUID and PGID a Docker container runs as), it "is not answering", or it leads into a system folder. A scan reports it as "Library root <reason>: <path>", and an import fails the books going into it with "Root folder <reason>: <path>".

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
| Library Import | Copy | The default for [Library Import](/library-import/): copy, hardlink or move. Hardlink is grayed out until the default root has been checked and supports it. |
| Import Extra Files | on | Whether non-audio files come along at all. Applies to Library Import, Manual Import and completed downloads |
| Extra File Extensions (advanced) | empty | More file types to bring along, kept under their own names, for example `srt, lrc`. With or without the dot, separated by commas or spaces. Blocked types, such as executables and partial downloads, can't be saved. Disabled while **Import Extra Files** is off |
| Preferred Cover (advanced) | Matched | Matched edition's cover, or the folder's best image, when both exist |

**Import Extra Files** brings a book's other files along with its audio. Five options pick which kinds come along, and a file matching **Extra File Extensions** comes along even when its kind is off:

| Option | Default | Covers |
|---|---|---|
| Cover art | on | Cover plus back-cover and booklet scans |
| Book info files | on | metadata.json, .opf, desc.txt, reader.txt. A release .nfo stays behind unless you choose it |
| PDFs & companion docs | off | PDFs shipped with a book |
| Chapters, transcripts & playlists | on | .cue, chapter lists, subtitles, lyrics, playlists. File names inside them are rewritten to the renamed audio. |
| Audible originals & ebooks | off | .aax/.aaxc, vouchers, epub and similar |

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
| Library Scan Interval | 24 (hours) | Hours between automatic scans. Choices are Disabled, every hour, 6, 12 or 24 hours, or weekly |
| Watch for Changes | on | Scan when files are added, removed or changed. A root folder the system can't watch, such as one past the inotify watch limit, is logged and skipped instead of stopping startup |
| Cover Cache Workers | 4 | How many covers are downloaded at once when caching artwork, from 1 to 16 |

A scan or refresh treats file extensions in any case (`Chapter 1.MP3`) and files at any depth (`Disc 1/`, `Disc 2/`) as the book's audio. A book is left alone when its files can't be read, or when its tracked files still exist somewhere other than the folder searched: nothing is changed, a single-book refresh says "Some files could not be read; book left untouched.", and a library scan counts the book as skipped. A scan also skips a book whose folder is busy with a file transfer or another scan, with the reason "its folder is busy with a file transfer or another scan". That is routine, especially for a Watch for Changes scan during an import, and the next scan picks the book up.

A book, author or series refresh, and the book refresh endpoint, also leave a book alone while its files are being imported or scanned. The book is reported as skipped with "A file transfer or scan is in progress; book left untouched." The book refresh endpoint answers `success=false` with that message. In author and series results it counts as a skipped book with error type `import_pending`, not as updated. A scan also leaves a book alone while an import is bringing its files in, and counts it as skipped. An import that finds a scan already reading its book waits for it to finish. Audible downloads land in the library under a temporary name, so a scan never sees a half-copied file.

## Recycle Bin

There is one recycle bin, set here. Inside it, `media/` holds deleted book files and `conversions/` holds the originals a conversion replaced when **Delete Original** is on. The one setting and the one retention above cover both. The Conversions page has no bin settings of its own, and the bin is never emptied by size, only by age.

Keep the bin outside every root folder. A bin that is a root folder, sits inside one, or contains one is refused, and so is a folder in a system folder (`/bin`, `/boot`, `/lib`, `/sbin`, `/proc`, `/usr/bin` or anything inside them) or one that is, or holds, ABM's own data: its config folder, which holds the key file, and the database's folder. The refusal shows under the folder field the moment you pick or type the path, with the server's reason, so you find out before you press Save. System > Status still warns about a bin that already sits inside a root. Old files are only cleared from the bin after checking it again: a bin that now leads into a system folder or ABM's own data, through a link for example, is left alone.

Purge, expiry and restore of conversion originals act only on files inside the `conversions` folder. If that folder links to another ordinary folder, ABM follows the link. If it leads into a system or app data folder, nothing is removed or restored, and **Recycle Bin Cleanup** says why. A restore is also refused when the original folder now leads into a system folder, or its root is missing, can't be read or doesn't answer. A conversion original left in an earlier bin folder can still be restored or purged from its own `conversion_<job>` folder, as long as that is still a real folder and not a link, and the earlier bin doesn't lead into a system or app data folder.

Picking a new folder, in the folder browser or by typing a path, asks right away what to do with what is in the old bin: **Move them to the new folder**, **Leave them where they are** (they stop being cleaned up automatically), or **Delete them**, which makes you type `delete` to confirm. Move and delete also refuse a new folder nested inside the current bin. Nothing moves on disk until you press Save. A move and a delete then run as the tasks **Move Recycle Bin** and **Empty Old Recycle Bin** on System > Tasks. A move switches the bin only once the old one is empty, so one that fails partway keeps the old bin and can be run again. Only one of them runs at a time. If either task cannot be queued, the change is refused with "Could not queue the task.". If an old bin holds a root folder, its files can only be left in place.

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

- If the recycle bin is enabled but its folder is unavailable, deletes that need it fail instead of deleting permanently.
- Hardlinks only work inside one filesystem. Files that cannot be linked are copied, never moved, and counted in the import result.

## File names

Rename Files, Library Import, Manual Import, Audible downloads and conversions all build a book's file name in one place, so they agree: `Title - (Part 01) - (2020) - (MP3).mp3`. A one-file book has no part. A multi-file book gets `Part 01`, `Part 02` and so on in listening order, padded to the width of the file count, and the extension is lowercase. A rename where files trade names, or shift by one, goes through without losing any. A multi-part book imported under an older layout, or with an upper-case extension, shows as needing a rename the next time Rename runs.

Names are cut to fit the 255-byte filename limit. The title is shortened, never the part number or the extension, and split chapter files, sidecars named after the audio and a folder's ` [ASIN]` tag get the same treatment.

If you know Sonarr: this is Sonarr's Media Management without naming formats. Folder names are chosen by ABM. Bulk rename lives on Library, Series and Authors as **Rename Files**.
