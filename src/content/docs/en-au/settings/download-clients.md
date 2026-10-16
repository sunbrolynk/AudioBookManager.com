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

## Completed download handling

| Setting | Default | Effect |
|---|---|---|
| Enable | on | Import finished downloads automatically |
| Redownload Failed | on | Blocklist a failed release and search again |
| Redownload Failed from Interactive Search | on | Same, for releases you picked by hand |

Whether imports hardlink or copy is **Use Hardlinks instead of Copy** in [Media Management](/en-au/settings/media-management/). If the client's folder is not the same path ABM sees, add a remote path mapping.

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
