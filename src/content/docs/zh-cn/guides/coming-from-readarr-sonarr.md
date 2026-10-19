---
title: 从 Readarr 或 Sonarr 过来
description: 哪些照旧，哪些不一样。
---

如果你用过 Sonarr、Radarr 或 Readarr，ABM 的大部分东西都在你预期的位置。

## 一样的地方

Wanted（Missing、Cutoff Unmet）、Activity（Queue、History、Blocklist）、带 iCal 订阅的 Calendar、支持 RSS 的索引器、自动搜索和手动交互搜索、带截止质量和升级的质量配置、延迟配置和发布配置、标签、Connect、远程路径映射、回收站、备份、Tasks 和 Status。

## 不一样的地方

| 在各种 arr 里 | 在 ABM 里 |
|---|---|
| 按分辨率划分的质量 | 音频格式阶梯，区分单文件和多文件 |
| 自定义格式 | 带 Must Contain、Must Not Contain、Preferred 的发布配置 |
| 一个条目是一集、一部电影或一本书 | 一本书，系列和序号作为目录来追踪 |
| 元数据来自它们自己的服务 | Libex，封面可以锁定，会写入附属文件和标签 |
| 一个下载文件夹 | 一样，另外还有书库导入，用来导入现有收藏 |
| 不能转换媒体 | 一个转换队列：转换、合并、拆分、章节 |
| 命名格式 | 文件夹名由 ABM 决定。Rename Files 在计划清单上 |
| 多种导入列表 | MAM 和 RSS |

## ABM 里没有的

Flood 不是下载客户端。没有自定义格式。Readarr 的电子书支持不在这里。ABM 只管有声书。

## 搬过来

没有 Readarr 导入工具。用 [书库导入](/zh-cn/library-import/) 把 ABM 指向你现有的有声书文件夹，再看看 [把书库搬进来](/zh-cn/guides/moving-a-library-in/)。
