---
title: Libex
description: Where ABM's book data comes from.
---

ABM gets book, author, series and chapter data from **Libex**, an open Audible metadata service that is a separate project. Libex is the source. What matters for you is what ABM does with the data once it has it, and how much of that you control. That is the rest of this section.

Libex: [Source code](https://github.com/LibexHQ/Libex) · [API Reference](https://libexdb.com/redoc)

ABM asks the public Libex instance at libexdb.com. A choice of source is planned for a later release.

When Libex cannot be reached, ABM says so. You can still add and import books by hand. Libex uptime is on the [Libex status page](https://status.libexdb.com). See [Troubleshooting](/troubleshooting/#the-metadata-source-is-unavailable).
