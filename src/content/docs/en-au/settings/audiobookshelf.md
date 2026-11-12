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
- **Disconnect:** asks you to confirm, then removes the saved address and key.

## How ABM reaches ABS

ABM always connects to ABS directly. It never goes through the VPN or proxy you chose on [Network](/settings/network/). The address is checked before it is saved, and an unsafe one is refused. An address that points back at the machine ABM runs on, a link-local address and a cloud metadata address are refused, and so is a name that resolves to one. Your own LAN addresses are fine, which is why a same-host ABS needs the host's LAN address or its container name or IP.

## The API key

The key is stored encrypted and is never shown again. Leave it blank when you save or test to keep the saved one. A saved key is only sent to the address it was saved for, so if you change the address, Verify TLS or the CA bundle, enter the key again. If ABM can no longer read the saved key (the encryption key was lost or changed), the page tells you to enter it again, even while the connection is turned off.

## What gets checked

**Version.** ABM needs ABS 2.37.0 or newer and is tested on 2.37.2. A server that is older, or that does not report a version ABM understands, fails with an error. A newer one gets a warning, because ABM has not been tested on it.

**The account.** The API key belongs to an ABS user, and ABM checks that user.

- **Error until fixed:** the user must be an admin or root user, and must have the Update permission, access to all libraries, access to all tags and access to explicit content.
- **Warning, still saved:** Upload is off (ABM cannot own covers), or Delete is off (a book you delete in ABM stays in ABS until you turn it on).

## Status

The Status section shows the state of the last check (Not connected, OK, Warning or Error), the server version, the user the key belongs to, when ABM last checked, and the checks themselves. A failed check shows its reason, and the passed ones are counted.

[System > Status](/system/status/) also has an Audiobookshelf row when a connection is turned on. It is refreshed when you save and by the periodic health check, which runs every 6 hours, so it is not a live probe each time you open the page. A saved key that ABM can no longer read shows as an error until you enter it again. A connection that has not been checked yet shows as a warning. A connection that is turned off stays quiet there.

## What ABM removes

ABM only ever removes the item record from ABS. It never hard-deletes files.
