---
title: Download Clients
description: Supported clients, completed download handling and remote path mappings.
---

**Settings > Download Clients** connects the program that does the downloading.

## Supported clients

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet and Blackhole (a watch folder). That is the full list.

## Fields

Which fields show depends on the client.

| Field | Effect |
|---|---|
| Name | Label |
| Host, Port, URL Base | Where the client listens |
| Use SSL, Verify TLS certificate | HTTPS and whether the certificate is checked |
| Username, Password, API Key | Credentials. A saved secret is never shown |
| Category | Category or label ABM puts on its downloads, for example `audiobooks` |
| Watch Folder, Directory | Blackhole: where to drop files and where finished files appear |
| Client Priority | Which client wins when several fit |
| Remove from Client, Also Delete Files, Remove Failed | What ABM removes from the client after import or failure |
| Queue Page Remove Action | What removing a row on the Queue page does: dismiss from ABM only, remove from the client and keep files, or remove and delete files |

**Test** checks the connection. A disabled client is not an unhealthy one. A failing client is retried with a back-off.

For Blackhole, removing a download deletes its entry from the watch folder. Only an entry directly in the watch folder is removed, never a path inside one or an entry that links out of the watch folder. Nothing is removed from a watch folder at the top of the filesystem (`/`), and an entry that is, or holds, a root folder, the recycle bin or ABM's own data is never deleted.

## Completed download handling

| Setting | Default | Effect |
|---|---|---|
| Enable | on | Import finished downloads automatically |
| Redownload Failed | on | Blocklist a failed release and search again |
| Redownload Failed from Interactive Search | on | Same, for releases you picked by hand |

When a finished download holds the same book more than once, in different formats, ABM imports only the copy the book's quality profile ranks highest. Matching the download to a book measures one copy too, the one the default quality profile ranks highest. Formats the profile ranks the same, or leaves off, go in the order M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA. ABM leaves the other copies in the download; they are deleted only if **Also Delete Files** removes the download after import. A single file beside a set of parts counts as a second copy only when their runtimes agree; otherwise they are parts of one book. The cover and other extra files still come along with the copy ABM takes. When the download's folder also holds audio from another book, only extra files named after the imported audio come along.

Whether imports hardlink or copy is **Use Hardlinks instead of Copy** in [Media Management](/en-ca/settings/media-management/). If the client's folder is not the same path ABM sees, add a remote path mapping.

## Remote path mappings

When the client reports `/downloads/audiobooks` and ABM sees it as `/data/audiobooks`, add a mapping.

| Field | Effect |
|---|---|
| Host | The client host the mapping is for |
| Remote Path | The path as the client reports it |
| Local Path | The same folder as ABM sees it |

## Gotchas

- An unreadable subfolder in a finished download stops the import of that download completely. Nothing is removed from the client, and it is retried later.
- Docker: mount the downloads folder at the same path in both containers when you can. Mappings are the fallback.
