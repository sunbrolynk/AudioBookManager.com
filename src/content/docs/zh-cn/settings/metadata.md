---
title: 元数据
description: ABM 会写哪些附属文件和音频标签，以及什么时候写。
---

**Settings > Metadata** 决定 ABM 往书的文件夹和文件里写什么。这些文件怎么用，见 [附属文件](/zh-cn/using/sidecars/)。

## 元数据文件生成

| 设置 | 默认值 | 作用 |
|---|---|---|
| Create on Book Add | 关 | 书作为想要（Wanted）被添加时写入文件 |
| Create on Import | 开 | 有声书导入时写入文件 |
| Create on Refresh | 关 | 刷新元数据时创建或更新文件 |
| Overwrite Existing | 关 | 替换文件夹里已有的文件 |

要生成的文件：`cover.jpg`（开）、`title.opf`（开，兼容 Audiobookshelf）、`desc.txt`（开）和 `reader.txt`（开）。

## 音频文件标签写入

用 ffmpeg 把标签写进音频文件本身。

| 设置 | 默认值 |
|---|---|
| Write Audio Tags | 关 |
| Write Tags on Import | 开（前提是标签写入已打开） |
| Write Tags on Refresh | 关 |

标签字段，默认全部开启：Title、Artist (Author)、Album Artist (Author)、Album (Title/Series)、Genre、Year、Comment (Description)、Narrator (Composer) 和 Cover Art。

## 后续版本推出

元数据源的选择，以及元数据库的本地副本，计划在后续版本中提供。见[你的元数据，你说了算](/zh-cn/metadata/control/)。

## 注意事项

- 写入标签会修改音频文件，Audiobookshelf 会把它们视为已修改。
- 如果写标签时拿不到元数据或封面，调用会返回警告，而不是直接失败。
