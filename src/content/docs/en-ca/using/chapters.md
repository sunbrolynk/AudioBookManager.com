---
title: Chapters
description: Compare a book's embedded chapters with Libex and fix them.
---

:::caution[Coming in a later release]
Everything on this page except the conversion defaults is not in a released version yet.
:::

A book's detail page shows the chapters Libex has next to the chapters actually embedded in your files. Libex is the reference. The question the view answers is whether your files carry what Libex says they should.

## Reading the comparison

Each Libex chapter gets a badge, an icon plus a word:

- **Matches**: an embedded chapter starts within 2 seconds and the title is the same ignoring case, accents and punctuation at the ends. "Chapter 1" and "Chapter One" are different titles.
- **Differs**: the title differs, or the title exists nearby but starts more than 2 seconds away.
- **Missing**: nothing embedded pairs with it.
- **Extra**: an embedded chapter that no Libex chapter pairs with.

Multi-file books are laid end to end on one timeline in filename order. A chapter that continues across a file as "(cont.)" reads back as one chapter. If Libex cannot be reached, you see the embedded list and a line saying why. It never errors the page.

## Wrong edition

Libex timings fit only the edition they describe. If your audio length differs from Libex's by more than 15 seconds or 0.5 percent, whichever is larger, a warning appears and both **Update** and **Create .cue** are blocked. There is no override.

## Update embedded chapters

Replaces the chapters in every audio file with Libex's. It runs as a chapter job in the [conversion queue](/en-ca/using/conversions/), without re-encoding. It is offered only when the comparison says "differs" or "no embedded chapters".

- Each file is rewritten to a temporary file, checked, then swapped in. The check requires that it is readable, not shorter than the original by more than 0.5 seconds or 1 percent, in the same codec, and carries exactly the number of chapters asked for. On a failed check the original stays.
- If a job stops partway, files already rewritten stay rewritten. The error says "N of M files already updated". Run Update again after fixing the cause.
- Refused up front: another conversion for the book is running, no ASIN or no Libex chapters, wrong edition, an unreadable file, or nothing to update.

## Create .cue

Writes a cue sheet from the Libex chapters into the book folder, named after the first audio file. It overwrites an existing file of that name. See [Sidecar files](/en-ca/using/sidecars/).

## Gotchas

- VBR MP3 files without a length header have an estimated length. A correct edition can look a few seconds off.
- A rewritten file looks changed to Audiobookshelf and is rescanned.
- Chapter titles containing `=`, `;`, `#` or a backslash may be written wrongly until a fix lands.

## The default chapter behaviour for conversions

Separate from the above: **Settings > Conversions > Chapter Handling** decides what a conversion does with chapters. See [Conversion settings](/en-ca/settings/conversions/).
