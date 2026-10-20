---
title: Conversion settings
description: Defaults, codec options, chapters, metadata, recycling and ffmpeg.
---

**Settings > Conversions** sets the defaults for [Conversions](/en-au/using/conversions/). Any job can override them.

## General

| Setting | Default | Effect |
|---|---|---|
| Enable Conversions | on | Off, creating, bulk queuing or retrying a conversion is refused with HTTP 409, a job already queued fails with a message saying so, and **Auto-Reformat on Import** queues nothing |
| Conversion Folder | empty | Scratch space. Empty uses the system temp folder |
| Concurrent Conversions | 2 | 1 to 4. Keep this times **Threads Per Job** at or below your core count. The page warns when it's higher |
| Threads Per Job | Auto | FFmpeg threads for each job, in Advanced view. Auto leaves two cores for ABM and splits the rest across the jobs running at once, so 8 cores and 2 concurrent jobs gives 3 threads each. Or pick a fixed count |
| Process Priority | Normal | Low keeps the rest of the system responsive. High finishes sooner |

## Audio quality defaults

| Setting | Default |
|---|---|
| Default Output Format | M4B (also MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, or Copy for no re-encode) |
| Default Sample Rate | Auto, which passes no rate and leaves it to FFmpeg. Or 22050, 44100 or 48000 Hz, which resamples. Opus only takes certain rates, so 22050 becomes 24000 and 44100 becomes 48000 (the log says so) |
| Default Channels | Auto, which keeps the source layout. Mono mixes down to one channel for smaller files. Stereo forces two |

The two rate and channel lists only accept what the page offers. A bad saved value loads as Auto.

## Codec options

| Format | Encoder | Options |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC by default) and AAC VBR, quality 1 to 5. Bitrate applies when VBR is off. AAC-LC is the only profile, because the encoder can't make HE-AAC. A saved HE profile loads as AAC-LC |
| MP3 | LAME | VBR quality 0 to 9 (4 by default) and Joint Stereo (on). Bitrate applies when VBR is off |
| Opus | libopus | Variable bitrate (on) and Application: Audio (default), VoIP or Low Delay |
| FLAC | FLAC | Compression level 0 to 12 (5 by default). Bitrate is ignored |

A bitrate of **Copy** skips re-encoding and every codec option.

## Chapter handling

| Setting | Default | Effect |
|---|---|---|
| Default Chapter Behavior | Auto | Preserve if they exist, generate if not. Others: preserve only, always generate, none |
| Chapter Naming Format | `Chapter {n}` | Names the chapters ABM has to make up. `{n}` is the number and `{title}` the source file's name. Chapter titles from the files or from Libex are kept |
| Silence Detection | off | For a file with no chapters, ABM makes chapters at the longest pauses in the audio. It is used by Split Chapters and by Ensure Chapters on a single file when Libex has no chapters. Off, a split of such a file fails |
| Target Chapter Length | 600 s | Shown when Silence Detection is on, 60 s or more. Each chapter ends at the longest pause within half this length either side of it, or at this length if there is no pause. A short tail joins the last chapter, and the chapters cover the whole file |
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
| Retention Period | 7 days | Items older than this are deleted by the recycle cleanup task. 0 keeps them for good |
| Auto-Empty When Bin Is Large | off | Turns on the threshold below |
| Auto-Empty Threshold | 10 GB | After a conversion, if the bin holds more than this, the oldest items are deleted |
| Delete Original | off | Default for each job, overridable |
| Update Library Paths | on | Book records follow the converted files |
| Auto-Reformat on Import | off | Converts newly imported books that arrive in another format, using the defaults above |
| Backup Original Metadata | off | Before converting, writes a JSON file to a `.metadata_backup` folder inside the book's folder. It lists each original file's name, format and size, plus the tags and chapters embedded in it |

## Advanced FFmpeg

FFmpeg Path (empty finds it on PATH), Custom FFmpeg Arguments (appended to every command; bad ones make conversions fail), Logging Level (error by default) and Keep FFmpeg Logs (off).
