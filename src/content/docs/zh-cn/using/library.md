---
title: 书库
description: 书、作者和系列，以及 ABM 怎么追踪它们的状态。
---

**Library** 菜单里有三个列表：**Books**、**Series** 和 **Authors**。**Add New** 和 **Library Import** 负责往里面加东西。**Audible Library** 和 **Conversions** 有各自的页面介绍。

## 书

每本书显示为一个概览行、一张海报或一条表格记录（视图切换在工具栏里）。每本书都有一个状态：

- **Wanted**：已监控，还没有文件。ABM 会去搜索它。
- **Downloaded**：文件已经在磁盘上。
- **Missing Files**：这本书下载过，但它的文件已经不在 ABM 预期的位置了。
- **Unmonitored**：ABM 不会管它。

打开一本书就能看到它的详情页：文件、元数据、历史、ABM 测出的质量，以及 Refresh & Scan 和编辑对话框（见下文）等操作。见 [附属文件](/zh-cn/using/sidecars/)。

详情页也可以单独写一个文件（OPF、NFO 或 metadata.json）、音频标签、嵌入封面，或者 **Write All**。在手机上，这些在 Actions 面板的 **Write to folder and files** 下。

在电脑上，页面的工具栏太窄时，放不下的按钮会移到所在分组末尾的 **More** 菜单里。排序、筛选和视图控件始终留在工具栏上。

如果你用过 Sonarr：一本书相当于一集，一个系列相当于把季和剧合在一起，作者则是把两者归到一起的一种方式。区别在于，一本书可以属于好几个系列，ABM 需要挑一个时会用主系列（序号最小的那个）。

## 系列

**Library > Series** 列出所有系列，以及每个系列已拥有、想要和缺失文件的数量，可以用 Overview 或 Posters 显示。系列页面显示完整的目录，包括你还没有的书。可以筛选为 All、In Library 或 Not in Library。**Add Remaining** 或 **Select to Add** 会把缺的书以想要（Wanted）状态加进来，**Refresh Series** 会重新拉取目录。**Monitor New Books**（All 或 None）决定以后新出的书是否以想要状态加进来。见 [系列追踪](/zh-cn/using/series-tracking/)。

## 作者

**Library > Authors** 列出所有作者，可以用 Overview 或 Posters 显示。作者页面按系列分组显示他们的目录，每个系列都有已下载数和总数，另外还有作者的质量配置、类型和评分。**Refresh Catalog** 会重新拉取目录，**Search Author** 会搜索他们想要的书。**Monitor New Books** 的作用和系列一样，作者默认是 None。

只要书库里还有它的书，系列或作者就不能删除。先把书删掉。

## 质量配置的继承

一本书的质量配置依次来自：它自己的覆盖设置、它的主系列、它的主作者，最后是默认配置。见 [配置文件](/zh-cn/settings/profiles/)。

## 编辑对话框

书的编辑对话框修改的是 ABM 自己针对这本书的设置，而不是它的元数据：

- **Monitored**
- **Quality Profile**（同时编辑多本时显示 No Change）
- **Path**，针对单本书（带一个重新计算路径的按钮），或者针对选中的多本书的 **Root Folder**
- **Tags**
- **Audiobookshelf**：**Write All** 复选框会勾选下面所有的框，所以保存一次就会写入 Audiobookshelf 读取的所有文件
- **Write to Directories**：cover.jpg、desc.txt、reader.txt、OPF、NFO 和 metadata.json。OPF 和 NFO 以书的第一个音频文件命名（例如 `Dune.opf`），没有音频时以书名命名
- **Write to Audio Files**：**Write audio tags** 和 **Embed cover art**（把封面写入音频文件）

系列和作者也会打开同一个对话框，修改会应用到它们的每一本书上。写入选项会在你保存时执行。每本书会先写入文件夹里的文件，再写标签，最后嵌入封面。书里没有内容可写的文件（没有简介、没有朗读者、没有封面）会被跳过，不算错误。对一本书或一组书，保存时你会看到一条警告。对系列或作者，则会悄悄跳过。

## 标签

书、作者和系列都可以打标签。标签会影响索引器、通知、导入列表和配置，还能筛选日历订阅。见 [标签](/zh-cn/settings/tags/)。

## 多选

选中多行就能一次处理多个：监控、搜索、打标签、重命名、删除。手机上的用法见 [手机使用](/zh-cn/phone/)。
