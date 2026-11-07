---
title: Connect
description: Notifications, media servers and custom scripts.
---

**Settings > Connect** sends events to other places. It is called Connect, as in Sonarr.

## Agents

**Notification agents**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook and Apprise. **Media servers**: Jellyfin and Emby. **Other**: Custom Script. Audiobookshelf is not a Connect agent.

## Events

Each connection chooses which events fire it.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

On Import fires when a completed download is imported, when Manual Import imports a book, when an Audible download finishes and is added, and when Library Import imports a book from outside every root folder. A joined row in Library Import fires it too when any of its files sits outside the root folder its folder is in. A replacement of an existing file fires On Upgrade instead. Scans never fire it, and neither does adding books that are already in a root folder. See [Library Import](/library-import/).

## Per connection

| Field | Effect |
|---|---|
| Name, Enable | Label and on/off |
| Include covers | Attach the book cover when the agent can |
| Tags | Fire only for items with a matching tag |
| Conditions | AND-ed rules on fields such as author or size. A malformed condition passes rather than silencing an alert |
| Priority | Where the agent supports it |

**Test** sends a test message. **Test All** tests every connection.

## Custom messages

A custom message rewrites the text for an event. Pick a **Format**, a **Cover** (Auto uses the book cover, None, or a Custom URL), write the **Title** and body, and click a variable to insert it. The default template for each event is a starting point. The preview shows the result, and you can send a test through a connection.

## Gotchas

- Secrets such as tokens are stored encrypted, blank on edit, and kept when left blank. Changing the destination needs them re-entered.
- A failed-task alert about a metadata outage goes out once per outage, not once per failure, and a scheduled run never sends one.
- Webhook headers are a JSON object and stored as a secret.
