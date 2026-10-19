---
title: 书库
description: 书、作者和系列，以及 ABM 怎么追踪它们的状态。
---

**Library** 菜单里有三个列表：**Books**、**Series** 和 **Authors**。**Add New** 和 **Library Import** 负责往里面加东西。**Audible Library** 和 **Conversions** 有各自的页面介绍。

## 书

每本书显示为一行、一张海报或一条表格记录（视图切换在工具栏里）。每本书都有一个状态：

- **Wanted**：已监控，还没有文件。ABM 会去搜索它。
- **Downloaded**：文件已经在磁盘上。
- **Missing Files**：这本书下载过，但它的文件已经不在 ABM 预期的位置了。
- **Unmonitored**：ABM 不会管它。

打开一本书就能看到它的详情页：文件、元数据、历史、ABM 测出的质量，以及 Refresh & Scan 和编辑对话框（见下文）等操作。见 [附属文件](/zh-cn/using/sidecars/)。

如果你用过 Sonarr：一本书相当于一集，一个系列相当于把季和剧合在一起，作者则是把两者归到一起的一种方式。区别在于，一本书可以属于好几个系列，ABM 需要挑一个时会用主系列（序号最小的那个）。

## 系列和作者

Series 和 Authors 列表会显示已拥有、想要和缺失文件的数量。打开一个就能看到它的目录，包括你还没有的书。在那里你可以把缺的书加进来。见 [系列追踪](/zh-cn/using/series-tracking/)。

只要书库里还有它的书，系列或作者就不能删除。先把书删掉。

## 质量配置的继承

一本书的质量配置依次来自：它自己的覆盖设置、它的主系列、它的主作者，最后是默认配置。见 [配置文件](/zh-cn/settings/profiles/)。

## 编辑对话框

书的编辑对话框修改的是 ABM 自己针对这本书的设置，而不是它的元数据：

- **Monitored**
- **Quality Profile**（同时编辑多本时显示 No Change）
- **Path**，针对单本书（带一个重新计算路径的按钮），或者针对选中的多本书的 **Root Folder**
- **Tags**
- **Write to Directories**：cover.jpg、desc.txt、reader.txt 和一个 OPF（复选框上写的是 “metadata.opf”；文件实际以书的第一个音频文件命名，比如 `Dune.opf`，没有音频时则是 `title.opf`）
- **Write to Audio Files**：写入元数据标签

系列和作者也会打开同一个对话框，修改会应用到它们的每一本书上。写入选项会在你保存时执行。

## 标签

书、作者和系列都可以打标签。标签会影响索引器、通知、导入列表和配置，还能筛选日历订阅。见 [标签](/zh-cn/settings/tags/)。

## 多选

选中多行就能一次处理多个：监控、搜索、打标签、重命名、删除。手机上的用法见 [手机使用](/zh-cn/phone/)。
