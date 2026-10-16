---
title: Audible
description: Connect Audible accounts, sync, and mirror your library.
---

ABM can connect to your Audible accounts, keep a copy of each account's library, and download what you own.

## Accounts

Add an account under **Settings > Audible**. You can connect more than one. Each account keeps its own library.

If a sign-in stops working, the account says it needs to sign in again, in Settings and on the health page. Sign in again on the same account. It keeps its library and takes the new credentials. Do not delete the account to fix this: deleting it drops its library table and removes its device from Audible.

## Sync

Sync refreshes each account's library from Audible. The Audible settings page shows its progress and result, and reports a failure with the real error. It also runs on a schedule.

The **Audible Library** page lists everything synced. Filter it to All, Not in Library, Downloaded, Wanted or Downloadable Only.

## Mirror Audible library to ABM

:::caution[Coming in the next release]
This is not in a released version yet.
:::

Mirror makes your ABM library follow your Audible library.

- It is on by default.
- It adds your purchases and your free titles. Podcasts are left out.
- Each sync handles at most 25 titles.
- Before it runs, it asks you to confirm and shows how many titles it will add.
- It also downloads titles you want that have no files yet.
- Titles removed from Audible stay in ABM.

## Settings

Schedules, download behavior and diagnostics are on [Audible settings](/settings/audible/).
