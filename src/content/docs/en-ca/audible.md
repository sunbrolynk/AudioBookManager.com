---
title: Audible
description: Connect Audible accounts, sync, and mirror your library.
---

ABM connects to one or more Audible accounts and keeps a copy of each account's library on the **Audible Library** page. Anything you own can be downloaded, decrypted to M4B and imported like any other book. With mirroring on, each sync also adds the books you're missing to ABM and downloads them.

## Accounts

Add an account under **Settings > Audible**. You can connect more than one. Each account keeps its own library.

If a sign-in stops working, the account says it needs to sign in again, in Settings and on the health page. Sign in again on the same account. It keeps its library and takes the new credentials. Do not delete the account to fix this: deleting it drops its library table and removes its device from Audible.

## Sync

Sync refreshes each account's library from Audible. The Audible settings page shows its progress and result, and reports a failure with the real error. It also runs on a schedule.

The **Audible Library** page lists everything synced. Filter it to All, Not in Library, Downloaded, Wanted or Downloadable Only, or build a custom filter (see [Custom filters](/en-ca/using/library/#custom-filters)).

## Mirror Audible library to ABM

Mirror makes your ABM library follow your Audible library.

- It is on by default.
- It adds your purchases and your free titles. Podcasts are left out.
- Each sync handles at most 25 titles.
- Turning it on asks you to confirm and shows how many titles the next sync will add and download.
- Plus Catalog titles and loans are left out, and nothing is queued while the library's disk is low on space.
- A title whose download keeps failing waits longer between tries: 1 hour, then 6, then 24.
- It also downloads titles you want that have no files yet.
- Titles removed from Audible stay in ABM.

## Settings

Schedules, download behaviour and diagnostics are on [Audible settings](/en-ca/settings/audible/).
