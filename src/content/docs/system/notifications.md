---
title: Notifications
description: The bell in the header and the panel under it.
---

The bell in the desktop header is where ABM tells you what happened and what needs you. Click it to open the notification panel. There is no bell on a phone yet.

## The bell

- A number on the bell is how many notifications are unread. It shows 99+ past 99. When any unread one is an error, the number turns red.
- A ring around the bell is work in progress. When ABM knows how far along it is, the ring fills to the average of the running items. When it does not, the ring just spins.
- A new notification gives the bell a brief flash in its level colour. With reduced motion turned on in your system, that flash is skipped.
- If the browser loses its live connection to ABM for more than 10 seconds, the bell turns into a crossed-out bell with a dashed ring. It goes back when the connection returns.

The bell's accessible name reads out the same things: the unread count, how many items are running and their percentage, and whether it is offline.

## The panel

Top to bottom:

- **Needs attention** appears only when something is open. These are things that stay until they are resolved, such as a book that failed to download or a new ABM version. Each has one button: **Search again** queues a search for that book, and **What's new** opens the Updates page. Others open the page they are about, or the task for one that can be resumed. The **x** on a row dismisses it.
- **Running** lists work in progress right now: tasks, downloads and conversions, with progress and time left where known. Click a row to go to it.
- **Recent** is the newest notifications first, with a count of how many are unread. Clicking one opens what it is about and marks it read. A row also has buttons to mark it read or unread and to delete it.
- **Load older** shows more of the history. When there is nothing older, the panel says so.

When all three are empty, the panel says you are all caught up.

The footer has **Mark all read** and a link to the [Activity Log](/system/activity-log/). The menu next to the panel title has **Clear all**, which asks first. It removes every notification except the ones that still need attention. Those stay until you resolve or dismiss them.

## What is not recorded

A notification can come from a background task, a download or a conversion, or from something you did in the browser that failed. The panel's own controls are the exception. If marking read, deleting, dismissing, clearing or loading older fails, the panel shows the error beside that control and does not add a notification about it. Otherwise a broken inbox would fill the inbox.

## Results at the control

Actions on Library, Book Detail, Calendar, Authors, Series and the cover actions show their result as a short line at the control you used. A plain success line clears itself after a couple of seconds. A failure or a warning stays until your next action on that control. Failures are also recorded in the bell, so you can still find them after the line is gone.

A book, author or series that is saved but whose catalog fill does not start records the warning "Catalog fill not started". An add-all where some books fail records "Some books were not added" with the reasons.

## Retention

Old notifications are removed by the daily log cleanup, after **30 days** by default. Set it with **Notifications Retention** on the [General settings](/settings/general/) page, or `inbox_retention_days` in the [API](/system/api/). 0 keeps them forever. Notifications that still need attention aren't removed until you resolve them. Cleanup runs once a day at the cleanup time (03:00 by default) and does nothing when **Automatic Cleanup** is off. The note at the bottom of the panel shows the current number of days and is hidden when retention is 0.

## How it differs from the Activity Log

Notifications are what you get told, and you can clear them. The [Activity Log](/system/activity-log/) is the permanent record of what happened, and clearing the bell does not touch it.
