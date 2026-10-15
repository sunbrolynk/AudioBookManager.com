---
title: Activity Log and Events
description: The record of what happened, and how it differs from Logs.
---

ABM keeps three kinds of record.

| Where | What it is |
|---|---|
| **System > Events** and **System > Activity Log** | The activity log: a database list of things that happened. Events is the severity-filtered view. Activity Log (titled Activity History) filters by category and searches the message, and shows before and after state |
| **System > Log Files** | Text log files with the full detail. See [Logs](/system/logs/) |
| **Activity > History** | Download history only. See [Activity](/using/activity/) |

## What gets recorded

Finished background tasks (one summary row each), manual changes to clients, indexers, profiles, tags, notifications, root folders and so on, grabs (who started them), conversions, Audible download failures, backups, sign-ins and failed sign-ins, and a start-up step that failed.

Categories: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security and System.

## Privacy

Entries never contain URLs, hosts, usernames, passwords, keys, tokens or raw error text from a client or service. Objects are named by the name you gave them. Settings saves list which settings changed, not their values. Sign-ins store the IP address only. Failed sign-ins from one address within 15 minutes fold into one row with an attempt count.

## Quiet by design

A scheduled run that was idle writes nothing. A repeat of the same failure writes nothing, but a recovery does. A manual run is always recorded.

## Retention

**Activity Log Retention** in General deletes entries after 90 days by default. 0 keeps them. Log files have their own retention (30 days), so a link from an entry to a log can outlive the log.

## View log

:::caution[Coming in the next release]
View log links from entries are not in a released version yet.
:::

Entries link to the log they came from and open it at that line. If the log is gone the entry says "Log no longer kept".
