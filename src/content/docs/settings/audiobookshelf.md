---
title: Audiobookshelf connection
description: Connect ABM to your Audiobookshelf server.
---

Audiobookshelf (ABS) is the server you listen from. Connect ABM to it under **Settings > Audiobookshelf**, on desktop and on the phone. You give it the server address and an API key made for one ABS user.

## Connection

- **Enable:** lets ABM use the server. When you save with this on, ABM checks the server first and refuses to save if an error-level check fails, and the page shows the reasons. A connection saved with this off is not checked.
- **Server address:** where your ABS server answers, for example `http://192.168.1.20:13378`. When ABS runs on the same machine as ABM, use that machine's LAN address, or the container name or IP when both run in Docker.
- **API key:** an API key from an admin user in ABS.
- **Verify TLS certificate:** on by default. If your server uses a certificate from your own authority, give the path to its CA bundle in **CA bundle path** instead of turning verification off. Leave the path blank to use the system's certificates.
- **Test:** runs the checks against what is on screen without saving anything.
- **Disconnect:** asks you to confirm, then removes the saved address, the key and every root folder pairing.

## Libraries

The Libraries section pairs each of ABM's root folders with the Audiobookshelf library folder that is the same folder on disk. It appears once a server address and API key are saved. There is one row per root folder, and each has a picker listing the server's library folders as library name and folder path, for example `Audiobooks: /audiobooks`. The paths can differ between the two apps, for example when they run in separate containers, as long as both point at the same folder.

- **Not paired** leaves the root folder unpaired. A root folder doesn't have to be paired.
- A folder already picked for another root folder is listed with that root folder's name and can't be picked. One root folder pairs with one Audiobookshelf folder, and one Audiobookshelf folder with one root folder.
- A folder ABM can't pair, such as one whose path isn't a plain absolute path, is listed as one that can't be paired.
- A saved folder the server no longer lists stays selected and is marked as no longer listed.

Each row shows where its pairing stands:

- **Verified** with how long ago: the pairing was checked when it was saved.
- **Saved, not checked yet:** the root folder had no books to check when it was saved.
- **Checked when you save:** you picked a new folder and haven't saved yet.
- **Removed when you save:** you set the row to **Not paired** and haven't saved yet.

### What Save checks

When you save a new or changed pairing, ABM checks that the two really are the same folder. It takes up to 3 of the root folder's books that have files in ABM, oldest first, and looks for each one at the same path inside the chosen Audiobookshelf folder. Every one has to be there. Otherwise the save is refused and the reason shows under that root folder's row, naming the book's path it could not find. If Audiobookshelf hasn't scanned that book yet, scan the library there and save again.

ABM reads at most the first 5,000 items of the Audiobookshelf library, and gives up on a root folder after 60 seconds, so a save can take about a minute for each changed pairing on a big library. A root folder with no books that have files saves without being checked, and shows **Saved, not checked yet**. Pairings you didn't change aren't checked again, unless you also changed the server address, **Verify TLS certificate** or the CA bundle path. Then every saved pairing is checked again against the new server, whether or not you changed it.

A save is also refused when:

- you add or change a pairing while **Enable** is off. With pairings saved, that includes turning **Enable** off and changing the server address, Verify TLS or the CA bundle in the same save, because every pairing then counts as changed.
- the [recycle bin](/settings/media-management/#recycle-bin) is, contains or sits inside the root folder.
- the same root folder or the same Audiobookshelf folder appears in two pairings.
- the server no longer lists the chosen folder.

A refused save changes nothing: the connection and the pairings stay as they were.

ABM never sends its own folder paths to Audiobookshelf and only reads from it to check a pairing.

### When there's nothing to pick

- **No root folders yet:** add one on [Media Management](/settings/media-management/#root-folders) first.
- **Audiobookshelf turned off:** the pickers can't be used until you turn on **Enable**.
- **No libraries yet:** add a library in Audiobookshelf, then press **Test**.
- **ABM could not list the libraries:** press **Test** to list them. Saved pairings are kept. This also happens after you change the address, Verify TLS or the CA bundle, until you press **Test** with the new details.

## How ABM reaches ABS

ABM always connects to ABS directly. It never goes through the VPN or proxy you chose on [Network](/settings/network/). The address is checked before it is saved, and an unsafe one is refused. An address that points back at the machine ABM runs on, a link-local address and a cloud metadata address are refused, and so is a name that resolves to one. Your own LAN addresses are fine, which is why a same-host ABS needs the host's LAN address or its container name or IP.

## The API key

The key is stored encrypted and is never shown again. Leave it blank when you save or test to keep the saved one. A saved key is only sent to the address it was saved for, so if you change the address, Verify TLS or the CA bundle, enter the key again. If ABM can no longer read the saved key (the encryption key was lost or changed), this page shows the same notice as the other settings pages and asks you to enter it again, even while the connection is turned off.

## What gets checked

**Version.** ABM needs ABS 2.37.0 or newer and is tested on 2.37.2. A server that is older, or that does not report a version ABM understands, fails with an error. A newer one gets a warning, because ABM has not been tested on it.

**The account.** The API key belongs to an ABS user, and ABM checks that user.

- **Error until fixed:** the user must be an admin or root user, and must have the Update permission, access to all libraries, access to all tags and access to explicit content.
- **Warning, still saved:** Upload is off (ABM cannot own covers), or Delete is off (a book you delete in ABM stays in ABS until you turn it on).

## Status

The Status section shows the state of the last check (Not connected, OK, Warning or Error), the server version, the user the key belongs to, when ABM last checked, and the checks themselves. A failed check shows its reason, and the passed ones are counted.

[System > Status](/system/status/) also has an Audiobookshelf row when a connection is turned on. It is refreshed when you save and by the periodic health check, which runs every 6 hours, so it is not a live probe each time you open the page. A connection that is turned off stays quiet there, even if its saved key cannot be read. With the connection turned on, a saved key that ABM can no longer read shows as an error until you enter it again, and a connection that has not been checked yet shows as a warning.

## What ABM removes

ABM only ever removes the item record from ABS. It never hard-deletes files.
