---
title: Add New
description: Search for a book and add it as wanted.
---

**Library > Add New** searches Libex for books and adds the ones you pick. The search matches title, author, series or an ASIN. A **Title** search first lists **Best matches**, Libex's best matches for what you typed. The title results follow, without the books already listed there, 50 at a time. The next 50 load as you scroll, or with **Load more**, until Libex has no more, up to 500.

## What adding does

An added book becomes **Wanted** in the root folder and quality profile you chose, and ABM starts searching for it according to the monitor setting. Adding a book that is already in the library is detected by ASIN only. A different edition of the same title is a different ASIN.

## Author and series search

The search has modes for Title, Author, Series, Books by author, Books in series and ASIN. Author and Series find authors and series themselves; Books by author and Books in series find books. Adding an author or series builds its catalogue and adds its books as wanted according to **Monitor**:

| Monitor | Adds |
|---|---|
| All Books | Every book, including ones not released yet |
| Future Books | Only books not released yet |
| Missing Books (default) | Books you do not own |
| None | The catalogue only |

You also pick the root folder, the quality profile, and whether books that appear later are added too (**Monitor New Books**). That is on by default for a series and off for an author. An author or series already in your library shows "In Library" with an **Add missing books** action.

The add runs as a background task with a progress toast. If a book, author or series is saved but its follow-up catalog fill doesn't start, a warning is recorded in the [Notification Center](/en-gb/system/notifications/). Add all does the same when some books fail, with the reasons.

## If search returns nothing

A search that gets no answer from Libex fails with an error rather than an empty list. See [Troubleshooting](/en-gb/troubleshooting/#the-metadata-source-is-unavailable).
