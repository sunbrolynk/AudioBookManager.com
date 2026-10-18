---
title: Quick start
description: From a fresh install to your first monitored book.
---

This is the shortest path from a running container to a book being searched for. Install ABM first: see [Install ABM](/en-au/installation/).

## 1. Sign in

The first visit walks you through creating a login. Until you do, ABM refuses requests. How sign-in behaves afterwards is covered in [Security and sign-in](/en-au/settings/security/).

## 2. Choose how ABM reaches the internet

Under **Settings > General** there is a **Proxy & VPN** section. If you plan to use the built-in metadata source, a connection has to be chosen first. See [Choosing a metadata source](/en-au/metadata/choosing-a-source/).

## 3. Add a root folder

A root folder is where ABM keeps books. Add it under **Settings > Media Management** in the **Root Folders** section. It should be the same folder your player (Audiobookshelf, for example) reads.

## 4. Add an indexer and a download client

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse, or Prowlarr. See [Indexers](/en-au/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet or Blackhole. See [Download Clients](/en-au/settings/download-clients/).

If the client runs in another container, check that it and ABM see the downloads folder at the same path, or add a remote path mapping.

## 5. Set a quality profile

**Settings > Profiles** holds the quality ladder ABM uses to decide what to grab and what counts as an upgrade. One profile is the default. Start with that one and refine later. See [Profiles](/en-au/settings/profiles/).

## 6. Bring in or add books

- Already have a collection? Use [Library Import](/en-au/library-import/).
- Starting fresh? Use **Library > Add New** and search by title, author or series. See [Add New](/en-au/using/add-new/).

A book you add is wanted until a file for it is imported. Wanted books appear under **Wanted > Missing** and are searched automatically.

## 7. Watch it work

**Activity > Queue** shows what is downloading. **Activity > History** shows what was grabbed and imported. When something goes wrong, [Troubleshooting](/en-au/troubleshooting/) and the [Tasks](/en-au/system/tasks/) page are the places to look.
