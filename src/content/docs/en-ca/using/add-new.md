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
| All | Every book, including ones not released yet |
| Future | Only books released from now on |
| Missing (default) | Books you do not own |
| None | The catalogue only |

You also pick the root folder, the quality profile, and whether books that appear later are added too. That is on by default for a series and off for an author. An author or series already in your library shows "In Library" with an **Add missing books** action.

The add runs as a background task with a progress toast.

## If search returns nothing

A search that gets no answer from the metadata source fails with an error rather than an empty list. See [Troubleshooting](/en-ca/troubleshooting/#the-metadata-source-is-unavailable).
