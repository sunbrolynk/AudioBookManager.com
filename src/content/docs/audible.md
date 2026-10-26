---
title: Audible
description: Connect Audible accounts, sync, and mirror your library.
---

ABM connects to one or more Audible accounts and keeps a copy of each account's library on the **Audible Library** page. Anything you own can be downloaded, decrypted to M4B and imported like any other book. With mirroring on, each sync also adds the books you're missing to ABM and downloads them.

## Accounts

Add an account under **Settings > Audible**. You can connect more than one. Each account keeps its own library.

If a sign-in stops working, the account says it needs to sign in again, in Settings and on the health page. Sign in again on the same account. It keeps its library and takes the new credentials. Do not delete the account to fix this: deleting it drops its library table and removes its device from Audible.

Each account has an **Enabled** switch. Turn it off to pause an account without signing it out. A disabled account shows as Disabled instead of needing to sign in again, keeps its stored sign-in and its library, and syncs, downloads and the health check skip it. Turn it back on, or sign in on it again, and it picks up where it left off. Through the API, `PATCH /api/audible/accounts/{account_id}` with `{"is_active": false}` does the same.

## Sync

Sync refreshes each account's library from Audible. Each account also has its own **Sync now** button, which syncs just that account. It is greyed out while the account is disabled or a sync is already running. The Audible settings page shows its progress and result, and reports a failure with the real error. It also runs on a schedule.

A sync leaves podcasts and episodes out and removes any an earlier sync stored. A title that has left your account is marked as no longer in it instead of looking current.

A download needs an account that is active, doesn't need to sign in again and still lists the book. When more than one active account owns a book, one that Audible is throttling is passed over for one that isn't, unless you picked it. Otherwise the download is refused with "No active, signed-in Audible account currently lists this book". A book that already has a download queued or running isn't queued again, from any button or retry: the single download answers with the existing one, and a bulk request lists it as "Already queued". Every refusal from the Audible Library page (downloads, bulk add, add and download) shows the server's reason in an error toast, and adding a book with download unticked shows an "Added" toast.

The **Audible Library** page lists everything synced. Filter it to All, Not in Library, Downloaded, Wanted or Downloadable Only.

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
- An account Audible is throttling is skipped for 48 hours, or until it signs in again.

## Settings

Schedules, download behavior and diagnostics are on [Audible settings](/settings/audible/).
