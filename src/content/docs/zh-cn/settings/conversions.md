---
title: 转换设置
description: 默认值、编码器选项、章节、元数据、回收站和 ffmpeg。
---

**Settings > Conversions** 设置 [转换](/zh-cn/using/conversions/) 的默认值。每个任务都可以覆盖它们。

## 常规

| 设置 | 默认值 | 作用 |
|---|---|---|
| Enable Conversions | 开 | 关闭后，创建、批量排队或重试转换都会被以 HTTP 409 拒绝，已在队列里的任务会带着相应的提示失败，**Auto-Reformat on Import** 也不会排任何任务 |
| Conversion Folder | 空 | 临时工作目录。留空则使用系统临时文件夹 |
| Concurrent Conversions | 2 | 1 到 4。让这个值乘以 **Threads Per Job** 不超过你的核心数。超过时页面会警告 |
| Threads Per Job | Auto | 每个任务的 FFmpeg 线程数，在高级视图里。Auto 会给 ABM 留两个核心，把其余核心分给同时运行的任务，所以 8 核、2 个并发任务时每个任务 3 个线程。也可以选固定数量 |
| Process Priority | Normal | Low 让系统其他部分保持流畅，High 完成得更快 |

## 音频质量默认值

| 设置 | 默认值 |
|---|---|
| Default Output Format | M4B（也可以选 MP3、M4A、FLAC、Opus） |
| Default Bitrate | 128 kbps（64、96、128、192、256，或者选 Copy 不重新编码） |
| Default Sample Rate | Auto 不指定采样率，交给 FFmpeg 决定。或者选 22050、44100、48000 Hz，会重新采样。Opus 只接受某些采样率，所以 22050 会变成 24000，44100 会变成 48000（日志里会说明） |
| Default Channels | Auto 保持源文件的声道布局。Mono 混成一个声道，文件更小。Stereo 强制两个声道 |

采样率和声道这两个列表只接受页面提供的值。保存的值无效时，会按 Auto 加载。

## 编码器选项

| 格式 | 编码器 | 选项 |
|---|---|---|
| M4B、M4A | AAC | AAC Profile（默认 AAC-LC）和 AAC VBR，质量 1 到 5。VBR 关闭时使用码率。AAC-LC 是唯一的配置，因为编码器做不了 HE-AAC。已保存的 HE 配置会按 AAC-LC 加载 |
| MP3 | LAME | VBR 质量 0 到 9（默认 4）和 Joint Stereo（开）。关闭 VBR 时才用码率 |
| Opus | libopus | 可变码率（开）和 Application：Audio（默认）、VoIP 或 Low Delay |
| FLAC | FLAC | 压缩级别 0 到 12（默认 5）。码率会被忽略 |

码率选 **Copy** 时不重新编码，所有编码器选项也都不生效。

## 章节处理

| 设置 | 默认值 | 作用 |
|---|---|---|
| Default Chapter Behavior | Auto | 有章节就保留，没有就生成。其他选项：只保留、总是生成、不处理 |
| Chapter Naming Format | `Chapter {n}` | 给 ABM 不得不自己生成的章节起名。`{n}` 是序号，`{title}` 是源文件的名字。来自文件或 Libex 的章节标题会保留 |
| Silence Detection | 关 | 对没有章节的文件，ABM 会在音频里最长的停顿处生成章节。Split Chapters 会用到它，Libex 没有章节时对单个文件的 Ensure Chapters 也会用到。关闭时，拆分这样的文件会失败 |
| Target Chapter Length | 600 s | Silence Detection 开启时显示，60 秒或以上。每个章节结束在这个长度一半范围内最长的停顿处，没有停顿就结束在这个长度。较短的尾部并入最后一个章节，章节覆盖整个文件 |
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
| Retention Period | 7 天 | 比这更旧的项目会被回收站清理任务删除。0 表示永久保留 |
| Auto-Empty When Bin Is Large | 关 | 启用下面的阈值 |
| Auto-Empty Threshold | 10 GB | 转换后，如果回收站里的内容超过这个值，最旧的项目会被删除 |
| Delete Original | 关 | 每个任务的默认值，可以覆盖 |
| Update Library Paths | 开 | 书的记录跟着转换后的文件走 |
| Auto-Reformat on Import | 关 | 新导入的书如果是别的格式，就用上面的默认值转换 |
| Backup Original Metadata | 关 | 转换前，会在书所在文件夹里的 `.metadata_backup` 文件夹中写一个 JSON 文件。里面列出每个原始文件的名称、格式和大小，以及其中内嵌的标签和章节 |

## FFmpeg 高级设置

FFmpeg Path（留空则在 PATH 里查找）、Custom FFmpeg Arguments（附加到每条命令后面；参数写错会导致转换失败）、Logging Level（默认 error）和 Keep FFmpeg Logs（关）。
