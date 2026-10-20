---
title: FAQ
description: Short answers to the questions people ask first.
---

## Does ABM replace Audiobookshelf?

No. Audiobookshelf is the player and ABM is the librarian. Point both at the same library folder and let each do its own job.

## Where does the metadata come from?

[Libex](https://libexdb.com), an open metadata service for Audible data. ABM refreshes it on a schedule, and a cover you picked yourself can be locked so a refresh leaves it alone.

## Do I need a separate database?

No. ABM keeps everything in one SQLite file in `/config`. There is nothing else to run.

## Can I reach it from outside my network?

Yes, on 0.17.0 or later, but I don't recommend putting ABM on the internet, the same advice the Servarr apps give. A VPN such as WireGuard or Tailscale is the safer way in. By default, anything from outside your local network has to sign in, and setting **Authentication Required** to **Enabled** makes everyone sign in, your own LAN included. Behind nginx, Traefik or Caddy, set `TRUSTED_PROXIES` to the proxy's address. Stored credentials are encrypted. See the [reverse proxy guide](/en-au/guides/reverse-proxy/) and [Configuration](/en-au/configuration/#reverse-proxy).

## Which download clients work?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet and Blackhole.

## What happened to Readarr?

Readarr handled books and audiobooks together, and it has since been retired. ABM is for audiobooks alone, built on the design the Servarr apps pioneered.

## Can I install it without Docker?

Not yet. Docker is the only way in for now. Native Linux, Windows and macOS installs, plus Kubernetes, Unraid and Proxmox, are planned. See [Other ways to install](/en-au/installation/#other-ways-to-install).

## What does it cost?

Nothing. It's free and open source under GPL-3.0. If it saves you an evening, there's a [Ko-fi](https://ko-fi.com/sunbrolynk).

## Can I edit a book's title, authors or description?

No. That data comes from the metadata source and ABM does not hand-edit it. What you control is the cover (a cover you chose is locked), when refreshes run, which sidecar files and audio tags are written, tags and auto tags, monitoring and quality profile. See [Your metadata, your control](/en-au/metadata/control/).

## Can ABM write chapters, descriptions and tags where Audiobookshelf reads them?

It writes `cover.jpg`, an `.opf`, `desc.txt` and `reader.txt`, and can write tags into the audio. Chapter comparison against the published edition and `.cue` files are planned for a later release. See [Sidecar files](/en-au/using/sidecars/).

## Can I convert my files?

Yes: convert, merge, split and add chapters, in a queue. See [Conversions](/en-au/using/conversions/).

## Can I import my existing collection?

Yes, with [Library Import](/en-au/library-import/). See also [Moving a library in](/en-au/guides/moving-a-library-in/).

## Is there a mobile layout?

Yes, under 768px wide. See [Phone use](/en-au/phone/).

## Can ABM use more than one Audible account?

Yes. Each account keeps its own library. See [Audible](/en-au/audible/).
