---
title: First-run setup
description: The setup wizard on a new install, step by step.
---

:::caution[Coming in a later release]
The setup wizard is not in a released version yet. Released versions ask only for a login on the first visit.
:::

On a new install, the first visit opens a setup wizard instead of the login page. It walks you through everything ABM needs, one step at a time. It only appears while no account exists. Every choice can be changed afterwards in **Settings**.

A chain of eight links runs across the top. Each link is one step, and the chain tells you where you are:

- **Done**: the step is finished.
- **Current step**: the step on screen.
- **Not started**: a step you haven't reached.
- **Later**: a step you passed without finishing. It stays waiting, and you can finish it from **Settings** whenever you like.

**Back** goes to the step before. **Continue** saves the step and moves on. Three steps, Audible, Download client and Indexer, also have **Skip for now**.

## 1. Account

Creates your login and signs you in. You choose a username and a password of at least 8 characters, and you type the password twice.

| Setting | Default | Effect |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms uses a login page. Basic (Browser Popup) uses your browser's own sign-in prompt |
| Authentication required | Everywhere | Everywhere asks for sign-in from every address. Skip on local network lets devices on your home or office network in without signing in |

These are the same settings as on [Security and sign-in](/settings/security/). The account is created when you press **Continue**. Once it exists, this step only confirms it.

## 2. Network

Network is the master switch. Nothing ABM sends leaves your machine until you choose a route here, so the Metadata and Audible steps depend on it. **Continue** stays off until the route is complete. The step can only be skipped if its settings fail to load: it then shows the error with **Retry**, **Back** and **Skip for now**. Until a route is chosen, ABM keeps blocking everything it sends, and the Finish step shows Network as waiting.

| Choice | What you give ABM |
|---|---|
| Proxy | The proxy's type, hostname and port, and optionally a username and password. SOCKS4 is not supported |
| WireGuard | A `.conf` from your VPN provider, pasted or dropped in. If a tunnel is already saved, that one is used |
| Own VPN container | Nothing to enter. You tick a box saying all of ABM's traffic already leaves through a VPN or proxy container. ABM can't check this |
| Direct | Nothing to enter. You tick a box saying every service ABM contacts will see your own IP address |

**Continue** saves the route and then shows the **Public IP** check, so you can see the route works before anything goes online. **Change route** lets you pick again. These are the same settings as [Network](/settings/network/).

## 3. Metadata

Choose where ABM looks books up. This comes before your folders because the first folder scan matches your books against it.

| Choice | What it means |
|---|---|
| Built-in | Libex runs inside ABM. No account and no extra service. It uses the route from the Network step |
| Hosted | ABM asks the public Libex instance at libexdb.com |
| Self-hosted | ABM asks your own Libex server. Enter its **Server URL**. **Test** checks it without saving |

There is also a **Local Storage** checkbox. It keeps a permanent, encrypted, local record of every book ABM looks up, searches, adds, imports or sees in Discover, and it works with all three sources. Once it is on, it can only be turned off in **Settings > Metadata**.

**Continue** saves the source, and turns Local Storage on if you ticked it. If the chosen source can't reach out yet, for example Built-in with no route chosen, the step says why. See [Choosing a metadata source](/metadata/choosing-a-source/). If the step's settings fail to load, it shows the error with **Retry**, **Back** and **Skip for now**, and you can set the source later under **Settings > Metadata**.

## 4. Audible (optional)

Signs in to your Audible account so ABM can read your library. It goes through the route you chose on the Network step. If no route is chosen, or Audible traffic is blocked on it, the step says so and **Back to Network** takes you back. The sign-in itself is the same as on [Audible](/audible/). Once you're signed in, the step shows the account and **Continue** is available.

You can **Skip for now** and connect Audible later under **Settings > Audible**.

## 5. Root folder

A root folder is where ABM keeps your books. Pick the folder your audiobooks live in, or where new ones should go. It should be the same folder your player (Audiobookshelf, for example) reads. You can browse the server's folders, and create a new one in the browser. The first root folder you add becomes the default. This step can't be skipped. You can add more roots later under **Settings > Media Management**.

## 6. Download client (optional)

Choose one of the supported clients, Usenet or torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet or Blackhole. Fill in its details, press **Test**, then **Save**. The client is added right there, in the step. You can add another one, and **Refresh** reloads the list. The step counts as done once one client is saved.

You can **Skip for now** and add a client later under **Settings > Download Clients**. See [Download Clients](/settings/download-clients/).

## 7. Indexer (optional)

Choose an indexer type or preset, fill it in, then **Test** and **Save**, the same way as the download client. The step counts as done once one indexer is saved. You can **Skip for now** and add indexers later under **Settings > Indexers**. See [Indexers](/settings/indexers/).

## 8. Finish

A summary lists each step with what was set: your Network route (and the Public IP, if it was checked), the metadata source, the Audible account, the root folder, and the client and indexer you added. Every step you left for later shows as waiting. If ABM can't read a step's state back, for example the list of download clients fails to load, that row shows **Could not check** and a **Retry** button appears. If nothing is waiting, the summary says every link is lit. **Go to Library** closes the wizard.

Anything you skipped is in **Settings** whenever you want it. The next sensible things are a quality profile and your books: see [Quick start](/getting-started/quick-start/).
