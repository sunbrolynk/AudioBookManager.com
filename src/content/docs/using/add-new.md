---
title: Add New
description: Search for a book and add it as wanted.
---

**Library > Add New** searches Libex for books and adds the ones you pick. The search matches title, author, series or an ASIN.

## What adding does

An added book becomes **Wanted** in the root folder and quality profile you chose, and ABM starts searching for it according to the monitor setting. Adding a book that is already in the library is detected by ASIN only. A different edition of the same title is a different ASIN.

## Author and series search

The search has modes for Title, Author, Series, Books by author, Books in series and ASIN. Author and Series find authors and series themselves; Books by author and Books in series find books. Adding an author or series builds its catalog and adds its books as wanted according to **Monitor**:

| Monitor | Adds |
|---|---|
| All Books | Every book, including ones not released yet |
| Future Books | Only books not released yet |
| Missing Books (default) | Books you do not own |
| None | The catalog only |

You also pick the root folder (not asked when you have only one), the quality profile, and whether books that appear later are added too (**Monitor New Books**). That is on by default for a series and off for an author. New books it finds go to the series' root folder, else the author's, else the default. See [Media Management](/settings/media-management/#where-new-books-go). An author or series already in your library shows "In Library" with an **Add missing books** action.

The add runs as a background task with a progress toast. If the task cannot be queued, **Add missing books** fails with "Could not queue the task." instead of reporting that books are being added.

## If search returns nothing

A search that gets no answer from Libex fails with an error rather than an empty list. See [Troubleshooting](/troubleshooting/#the-metadata-source-is-unavailable).
