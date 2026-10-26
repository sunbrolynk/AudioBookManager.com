---
title: Tasks
description: Background work, schedules and logs.
---

**System > Tasks** lists everything ABM does in the background: library scans, refreshes, imports, searches, downloads, syncs, backups. Each row shows its state (waiting, running, completed, failed), progress, result and a log button.

- A task that completed with entries in its error list shows as **Partial**. Expand it for each skipped item and the reason.
- A task with a retry coming stays as waiting until retries run out. The attempt number is shown.
- **Clear completed tasks older than 24 hours** tidies the list. Old tasks are also cleaned automatically (30 days by default).
- Scheduled runs that did nothing appear here but not in the [Activity Log](/en-gb/system/activity-log/).

## Gotchas

- Changing the recycle bin's folder can queue **Move Recycle Bin** or **Empty Old Recycle Bin**. Only one runs at a time, and a move that fails partway can be run again. See [Recycle Bin](/settings/media-management/#recycle-bin).
- Conversions are a separate queue. See [Conversions](/en-gb/using/conversions/).
- The download sweeps (pending grab retry and completed download check) queue only while at least one download client is enabled, so the page does not fill with empty runs.
