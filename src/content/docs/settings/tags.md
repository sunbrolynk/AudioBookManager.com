---
title: Tags
description: Tags and auto-tagging rules.
---

**Settings > Tags** manages tags and **Auto Tagging**.

## Tags

A tag is one word: lowercase, no spaces, no commas, up to 100 characters. Entering `Sci-Fi` makes `sci-fi`. Tags go on books, authors and series, and are matched by indexers, delay and release profiles, import lists, Connect agents and the calendar feed.

If you know Sonarr: tags work the same way. A profile with a tag applies only to things carrying it.

## Auto tags

An auto tag is a rule that applies tags to books that match.

| Field | Effect |
|---|---|
| Name | Label |
| Enable | On or off |
| Remove Tags Automatically | When a book stops matching, take the tags off |
| Tags | What to apply |
| Conditions | What a book must match. Each can be negated or required |

Condition types: Genre, Monitored, Language, Root Folder, Status, Tag, Year (range), Series Type, Author (contains), Narrator (contains), Runtime in minutes (range), and Rating (range).

**Apply** runs selected rules now. Rules also run when books change.

## Gotchas

- A rule that refers to a deleted tag or root folder is skipped entirely, in both directions, so a broken rule never mistags or strips tags.
- Remove Tags Automatically only removes tags that this rule would add.
