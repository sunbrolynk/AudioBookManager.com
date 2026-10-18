---
title: Conversion settings
description: Defaults, codec options, chapters, metadata, recycling and ffmpeg.
---

**Settings > Conversions** sets the defaults for [Conversions](/en-au/using/conversions/). Any job can override them.

## General

| Setting | Default | Effect |
|---|---|---|
| Enable Conversions | on | Master switch |
| Conversion Folder | empty | Scratch space. Empty uses the system temp folder |
| Concurrent Conversions | 2 | 1 to 4 in the UI. Keep concurrency times threads under your core count |
| Process Priority | Normal | Low keeps the rest of the system responsive. High finishes sooner |

## Audio quality defaults

| Setting | Default |
|---|---|
| Default Output Format | M4B (also MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, or Copy for no re-encode) |
| Default Sample Rate | Auto, which matches the source |
| Default Channels | Auto, which matches the source |

## Codec options

AAC Profile (AAC-LC default, HE-AAC, HE-AACv2) and AAC VBR; MP3 VBR quality and joint stereo; FLAC compression level (5 default); Opus variable bitrate (on) and application type (Audio default; VoIP and Low Delay exist).

## Chapter handling

| Setting | Default | Effect |
|---|---|---|
| Default Chapter Behavior | Auto | Preserve if they exist, generate if not. Others: preserve only, always generate, none |
| Chapter Naming Format | `Chapter {n}` | Template for generated names |
| Silence Detection | off | Experimental. Tries to find chapters from silence |
| Minimum Chapter Length | 60 s | For detected chapters |
| Chapter Image Handling | Keep in file | Or remove, or extract to a folder |

## Metadata handling

| Setting | Default |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | on (JPEG only, for Audiobookshelf) |
| Cover Art Max Size | 1000x1000 |

## File management

| Setting | Default | Effect |
|---|---|---|
| Enable Recycle Bin | on | Originals go to the bin instead of being deleted |
| Recycle Bin Path | empty | Empty uses `/config/recycle/conversions` |
| Retention Period | 7 days | 0 disables auto-cleanup |
| Auto-Empty on Low Disk Space | off | Empties the bin below the threshold |
| Auto-Empty Threshold | 10 (%) | Free space level |
| Delete Original | off | Default for each job, overridable |
| Update Library Paths | on | Book records follow the converted files |
| Auto-Reformat on Import | off | Converts newly imported books that arrive in another format, using the defaults above |
| Backup Original Metadata | off | Saves original tags to a `.json` sidecar first |

## Advanced FFmpeg

FFmpeg Path (empty finds it on PATH), Threads Per Job (0 chooses automatically as CPU count minus 2), Custom FFmpeg Arguments (appended to every command; bad ones make conversions fail), Logging Level (error by default) and Keep FFmpeg Logs (off).
