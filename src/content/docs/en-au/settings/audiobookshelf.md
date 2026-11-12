---
title: Audiobookshelf connection
description: Connect ABM to your Audiobookshelf server.
---

:::caution[Coming in a later release]
The settings page for this is not in a released version yet. The connection can already be saved, tested and removed through the API, and nothing else in ABM uses it yet.
:::

Audiobookshelf (ABS) is the server you listen from. ABM connects to it with the server URL and an API key made for one ABS user.

## Version

ABM needs ABS 2.37.0 or newer and is tested on 2.37.2. An older server is refused. A newer one gets a warning, because ABM has not been tested on it.

## The account

The API key belongs to an ABS user. ABM checks that user when you save or test.

- **Refused until fixed:** the user must be an admin or root user, and must have the Update permission, access to all libraries, access to all tags and access to explicit content.
- **Warned about, but still saved:** Upload is off (ABM cannot own covers), or Delete is off (a book you delete in ABM stays in ABS until you turn it on).

## How ABM reaches ABS

ABM always connects to ABS directly. It never goes through the VPN or proxy you chose on [Network](/settings/network/). The server URL is checked before it is saved, and an unsafe one is refused. An address that points back at the machine ABM runs on, a link-local address and a cloud metadata address are refused, and so is a name that resolves to one. Your own LAN addresses are fine.

## The API key

The key is stored encrypted and is never shown again. Leave it blank when you save or test to keep the saved one. A saved key is only sent to the address it was saved for, so if you change the URL, the TLS setting or the CA bundle, enter the key again.

## Verify TLS

Certificates are verified by default. If your server uses a certificate from your own authority, give the path to its CA bundle instead of turning verification off.

## Test and Disconnect

**Test** checks a server without saving it: the version, the user's permissions and its libraries. Saving a connection that is turned on runs the same checks first and is refused if an error check fails. A connection saved turned off is not checked. **Disconnect** removes the saved connection and its key.

## System Status

When a connection is turned on, [System > Status](/system/status/) has an AudioBookShelf row with the result of the last check. It is refreshed when you save and by the periodic health check, which runs every 6 hours, so it is not a live probe each time you open the page. A saved key that ABM can no longer read (the encryption key was lost or changed) shows as an error until you enter it again. A connection that has not been checked yet shows as a warning.

## What ABM removes

ABM only ever removes the item record from ABS. It never hard-deletes files.
