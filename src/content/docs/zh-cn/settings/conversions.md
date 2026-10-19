---
title: 转换设置
description: 默认值、编码器选项、章节、元数据、回收站和 ffmpeg。
---

**Settings > Conversions** 设置 [转换](/zh-cn/using/conversions/) 的默认值。每个任务都可以覆盖它们。

## 常规

| 设置 | 默认值 | 作用 |
|---|---|---|
| Enable Conversions | 开 | 关掉后，Conversions 页面就不能转换了。**Auto-Reformat on Import** 是单独控制的 |
| Conversion Folder | 空 | 临时工作目录。留空则使用系统临时文件夹 |
| Concurrent Conversions | 2 | 1 到 4。这个值乘以 **Threads Per Job**（在本页底部的 **Advanced FFmpeg** 下）不要超过你的 CPU 核心数。超过时页面会给出警告 |
| Process Priority | Normal | Low 让系统其他部分保持流畅，High 完成得更快 |

## 音频质量默认值

| 设置 | 默认值 |
|---|---|
| Default Output Format | M4B（也可以选 MP3、M4A、FLAC、Opus） |
| Default Bitrate | 128 kbps（64、96、128、192、256，或者选 Copy 不重新编码） |
| Default Sample Rate | Auto，与源文件一致。也可以选 22050、44100 或 48000 Hz |
| Default Channels | Auto，与源文件一致。也可以选 Mono 或 Stereo |

## 编码器选项

| 格式 | 编码器 | 选项 |
|---|---|---|
| M4B、M4A | AAC | AAC Profile（默认 AAC-LC）和 AAC VBR，质量 1 到 5。关闭 VBR 时才用码率。HE-AAC 和 HE-AACv2 虽然列出来了，但目前实际都按 AAC-LC 编码 |
| MP3 | LAME | VBR 质量 0 到 9（默认 4）和 Joint Stereo（开）。关闭 VBR 时才用码率 |
| Opus | libopus | 可变码率（开）和 Application：Audio（默认）、VoIP 或 Low Delay |
| FLAC | FLAC | 压缩级别 0 到 12（默认 5）。码率会被忽略 |

码率选 **Copy** 时不重新编码，所有编码器选项也都不生效。

## 章节处理

| 设置 | 默认值 | 作用 |
|---|---|---|
| Default Chapter Behavior | Auto | 有章节就保留，没有就生成。其他选项：只保留、总是生成、不处理 |
| Chapter Naming Format | `Chapter {n}` | 给 ABM 不得不自己生成的章节起名。`{n}` 是序号，`{title}` 是源文件的名字。来自文件或 Libex 的章节标题会保留 |
| Silence Detection | 关 | 实验性功能。只在拆分一本没有章节的书时使用：ABM 会在静音处拆开。关掉的话，这种拆分会失败 |
| Minimum Chapter Length | 60 秒 | 静音检测生成的最短章节 |
| Chapter Image Handling | Keep in file | 也可以删除，或者提取到文件夹 |

## 元数据处理

| 设置 | 默认值 |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | 开（只用 JPEG，为了 Audiobookshelf） |
| Cover Art Max Size | 1000x1000 |

## 文件管理

| 设置 | 默认值 | 作用 |
|---|---|---|
| Enable Recycle Bin | 开 | 原文件进回收站，而不是直接删除 |
| Recycle Bin Path | 空 | 留空则使用 `/config/recycle/conversions` |
| Retention Period | 7 天 | 设置回收站里条目显示的过期时间。到期那天目前还不会真的删除它们 |
| Auto-Empty on Low Disk Space | 关 | 启用下面的阈值 |
| Auto-Empty Threshold | 10 | 每次转换完成后，如果回收站里的内容超过这么多 GB，就删除最早的条目。页面上显示的是百分比，但实际按 GB 来算 |
| Delete Original | 关 | 每个任务的默认值，可以覆盖 |
| Update Library Paths | 开 | 书的记录跟着转换后的文件走 |
| Auto-Reformat on Import | 关 | 新导入的书如果是别的格式，就用上面的默认值转换 |
| Backup Original Metadata | 关 | 转换前，在原文件旁边的 `.metadata_backup/` 里保存一份原文件的记录（文件名、格式、大小）。它不会保存音频标签 |

## FFmpeg 高级设置

FFmpeg Path（留空则在 PATH 里查找）、Threads Per Job（0 表示自动选择，即 CPU 数减 2）、Custom FFmpeg Arguments（附加到每条命令后面；参数写错会导致转换失败）、Logging Level（默认 error）和 Keep FFmpeg Logs（关）。
