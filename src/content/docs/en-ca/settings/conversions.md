---
title: Conversion settings
description: Defaults, codec options, chapters, metadata, recycling and ffmpeg.
---

**Settings > Conversions** sets the defaults for [Conversions](/en-ca/using/conversions/). Any job can override them.

## General

| Setting | Default | Effect |
|---|---|---|
| Enable Conversions | on | Turns converting off on the Conversions page. **Auto-Reformat on Import** is separate |
| Conversion Folder | empty | Scratch space. Empty uses the system temp folder |
| Concurrent Conversions | 2 | 1 to 4. Keep this times **Threads Per Job** (under **Advanced FFmpeg** at the bottom of this page) at or below your core count. The page warns when it's higher |
| Process Priority | Normal | Low keeps the rest of the system responsive. High finishes sooner |

## Audio quality defaults

| Setting | Default |
|---|---|
| Default Output Format | M4B (also MP3, M4A, FLAC, Opus) |
| Default Bitrate | 128 kbps (64, 96, 128, 192, 256, or Copy for no re-encode) |
| Default Sample Rate | Auto, which matches the source. Or 22050, 44100 or 48000 Hz |
| Default Channels | Auto, which matches the source. Or Mono or Stereo |

## Codec options

| Format | Encoder | Options |
|---|---|---|
| M4B, M4A | AAC | AAC Profile (AAC-LC by default) and AAC VBR, quality 1 to 5. Bitrate applies when VBR is off. HE-AAC and HE-AACv2 are listed but currently encode as AAC-LC |
| MP3 | LAME | VBR quality 0 to 9 (4 by default) and Joint Stereo (on). Bitrate applies when VBR is off |
| Opus | libopus | Variable bitrate (on) and Application: Audio (default), VoIP or Low Delay |
| FLAC | FLAC | Compression level 0 to 12 (5 by default). Bitrate is ignored |

A bitrate of **Copy** skips re-encoding and every codec option.

## Chapter handling

| Setting | Default | Effect |
|---|---|---|
| Default Chapter Behavior | Auto | Preserve if they exist, generate if not. Others: preserve only, always generate, none |
| Chapter Naming Format | `Chapter {n}` | Names the chapters ABM has to make up. `{n}` is the number and `{title}` the source file's name. Chapter titles from the files or from Libex are kept |
| Silence Detection | off | Experimental. Used only when splitting a book that has no chapters: ABM splits it at silences. Off, such a split fails |
| Minimum Chapter Length | 60 s | The shortest chapter silence detection makes |
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
| Retention Period | 7 days | Sets the expiry shown on items in the bin. Nothing deletes them on that date yet |
| Auto-Empty on Low Disk Space | off | Turns on the threshold below |
| Auto-Empty Threshold | 10 | After a conversion, if the bin holds more than this many GB, the oldest items are deleted. The page shows it as a percentage, but it's read as GB |
| Delete Original | off | Default for each job, overridable |
| Update Library Paths | on | Book records follow the converted files |
| Auto-Reformat on Import | off | Converts newly imported books that arrive in another format, using the defaults above |
| Backup Original Metadata | off | Saves a record of the original files (names, formats, sizes) to `.metadata_backup/` beside them before converting. It does not save the audio tags |

## Advanced FFmpeg

FFmpeg Path (empty finds it on PATH), Threads Per Job (0 chooses automatically as CPU count minus 2), Custom FFmpeg Arguments (appended to every command; bad ones make conversions fail), Logging Level (error by default) and Keep FFmpeg Logs (off).
