---
title: Backups
description: Back up, export and restore ABM.
---

**System > Backups** creates and restores backups. **Backup Now** makes one. Schedules, retention and export targets are under [General](/en-au/settings/general/).

## What is in a backup

An encrypted archive with a consistent copy of the database (`database.db`), the settings (`settings.json`) and a manifest. Also include `/config` in your own backups for the covers and the app secret file.

## Restoring

Pick one from the list, or upload a backup file (up to 500 MiB). A copy of the live database is saved first. Restoring cannot be undone.

By default a restore does not bring back **security settings** (authentication mode, credentials, trusted networks) or the **outbound connection**. Your current ones are kept and the result says so. Tick the opt-in on the upload to restore them. This means an uploaded archive can never switch sign-in off just by being restored.

If the backup was made on an older version, restart the container after restoring so the migration runs.

A backup is refused, with nothing changed, if it holds unexpected entries, is not a valid SQLite database, or is a legacy backup from before the SQLite move.

## Export targets

SFTP, SCP, FTPS, FTP, S3 or an rclone remote. A target marked **Auto** receives each backup automatically. Rclone remote names may use letters, digits, `_`, `.` and `-`.

## Gotchas

- The Docker image and your compose file are not in the backup. Keep the compose file.
- If you set `APP_SECRET`, back that up separately. Without it, stored credentials cannot be decrypted after a restore on another host.
