---
title: 附属文件
description: ABM 在书旁边写入的 metadata.json、封面、OPF、简介和讲述者文件。
---

附属文件（sidecar）是放在音频旁边的小文件，Audiobookshelf 和其他播放器会读取它们。ABM 会写这些：

| 文件 | 内容 | 开关 |
|---|---|---|
| `metadata.json` | Audiobookshelf 自己的元数据文件，外加一个标明它属于 ABM 的 `abm` 数据块。Audiobookshelf 最先读取它 | 无，总是写入 |
| `cover.jpg` | 书的封面。文件夹里已经有 `cover.*` 时不写 | cover.jpg |
| `.opf` | OPF 格式的元数据。以书的第一个音频文件命名（比如 `Dune.opf`），书没有音频时则叫 `title.opf` | title.opf |
| `desc.txt` | 简介，不带 HTML。没有简介时跳过 | desc.txt |
| `reader.txt` | 讲述者。没有讲述者时跳过 | reader.txt |

这些文件加上文件夹结构，就是 Audiobookshelf 读取一本书详情时用到的全部文件，所以它看到的书和 ABM 看到的一样。

## 什么时候写

每次添加、导入或刷新一本书时，都会写 `metadata.json`。

另外四个在 **Settings > Metadata > Files to Create** 下各有一个开关，默认都是开的。只有对应的触发条件也开着时才会写：**Create on Book Add**（关）、**Create on Import**（开，涵盖下载、书库导入和 Audible 下载）和 **Create on Refresh**（关）。**Overwrite Existing** 默认关闭，所以已经存在的文件会保持不变。书的文件夹存在之前，什么都不会写。

编辑对话框里的 **Write to Directories** 也会写这四个文件，针对一本书，或者选中的一批系列和作者。见 [元数据设置](/zh-cn/settings/metadata/)。

## 封面比较特殊

你自己选的封面会被锁定。见 [封面锁定](/zh-cn/metadata/cover-lock/)。

## 导入时

导入时也会把书原有的非音频文件一起带过来，由 **Media Management > Importing** 控制。如果源文件夹里有 `.opf`、简介或讲述者文件，ABM 每种最多取一个，并分别命名为 `desc.txt` 和 `reader.txt`。目标位置已经有文件时会保持不动，新封面也绝不会覆盖已有的 `cover.*`。

## 硬链接

硬链接导入不会动原文件。ABM 写这些文件时，会写一个新文件，而不是在原文件上直接修改，所以你导入的源文件内容保持不变。

## 注意事项

- 带有 ABM 自己数据块的 `metadata.json` 由 ABM 处理。其他工具生成的 `metadata.json` 遵循 Book info files 开关。
- 在几本书共用的文件夹里，只有以这本书的音频命名的文件才属于它。
- 删除一本书时，以这本书的文件命名的附属文件也会被删除。
