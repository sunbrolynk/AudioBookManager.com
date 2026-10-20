---
title: Libex
description: Where ABM's book data comes from.
---

ABM gets book, author, series and chapter data from **Libex**, an open Audible metadata service that is a separate project. Libex is the source. What matters for you is what ABM does with the data once it has it, and how much of that you control. That is the rest of this section.

Libex: [Source code](https://github.com/LibexHQ/Libex) · [API Reference](https://libexdb.com/redoc)

By default, released versions ask the public Libex instance at libexdb.com. The next release adds a choice of source. See [Choosing a metadata source](/metadata/choosing-a-source/).

When Libex cannot be reached, ABM says so, naming the source. You can still add and import books by hand. Libex uptime is on the [Libex status page](https://status.libexdb.com). See [Troubleshooting](/troubleshooting/#the-metadata-source-is-unavailable).
