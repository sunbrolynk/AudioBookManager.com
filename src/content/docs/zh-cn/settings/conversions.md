---
title: 转换设置
description: 默认值、编码器选项、章节、元数据、回收站和 ffmpeg。
---

**Settings > Conversions** 设置 [转换](/zh-cn/using/conversions/) 的默认值。每个任务都可以覆盖它们。

## 常规

| 设置 | 默认值 | 作用 |
|---|---|---|
| Enable Conversions | 开 | 总开关 |
| Conversion Folder | 空 | 临时工作目录。留空则使用系统临时文件夹 |
| Concurrent Conversions | 2 | 界面里可选 1 到 4。并发数乘以线程数要小于你的 CPU 核心数 |
| Process Priority | Normal | Low 让系统其他部分保持流畅，High 完成得更快 |

## 音频质量默认值

| 设置 | 默认值 |
|---|---|
| Default Output Format | M4B（也可以选 MP3、M4A、FLAC、Opus） |
| Default Bitrate | 128 kbps（64、96、128、192、256，或者选 Copy 不重新编码） |
| Default Sample Rate | Auto，与源文件一致 |
| Default Channels | Auto，与源文件一致 |

## 编码器选项

AAC Profile（默认 AAC-LC，另有 HE-AAC、HE-AACv2）和 AAC VBR；MP3 的 VBR 质量和联合立体声；FLAC 压缩级别（默认 5）；Opus 可变码率（开）和应用类型（默认 Audio，另有 VoIP 和 Low Delay）。

## 章节处理

| 设置 | 默认值 | 作用 |
|---|---|---|
| Default Chapter Behavior | Auto | 有章节就保留，没有就生成。其他选项：只保留、总是生成、不处理 |
| Chapter Naming Format | `Chapter {n}` | 生成章节名用的模板 |
| Silence Detection | 关 | 实验性功能。尝试根据静音段找出章节 |
| Minimum Chapter Length | 60 秒 | 针对检测出来的章节 |
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
| Retention Period | 7 天 | 设为 0 则关闭自动清理 |
| Auto-Empty on Low Disk Space | 关 | 剩余空间低于阈值时清空回收站 |
| Auto-Empty Threshold | 10（%） | 剩余空间阈值 |
| Delete Original | 关 | 每个任务的默认值，可以覆盖 |
| Update Library Paths | 开 | 书的记录跟着转换后的文件走 |
| Auto-Reformat on Import | 关 | 新导入的书如果是别的格式，就用上面的默认值转换 |
| Backup Original Metadata | 关 | 先把原始标签保存到一个 `.json` 附属文件 |

## FFmpeg 高级设置

FFmpeg Path（留空则在 PATH 里查找）、Threads Per Job（0 表示自动选择，即 CPU 数减 2）、Custom FFmpeg Arguments（附加到每条命令后面；参数写错会导致转换失败）、Logging Level（默认 error）和 Keep FFmpeg Logs（关）。
