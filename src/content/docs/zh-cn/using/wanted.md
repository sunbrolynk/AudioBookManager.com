---
title: 想要
description: 缺失的书，以及低于质量截止线的书。
---

**Wanted** 有两个页面。

## 缺失（Missing）

被监控但没有文件的书。每一行有：**Auto Search**、**Interactive Search**、**Manual Import**、**Unmonitor**。

- Auto Search 会询问所有已启用的索引器，并抓取配置允许范围内最好的发布。
- Interactive Search 列出发布让你自己挑。从这里选的算作手动抓取。
- Manual Import 让 ABM 指向你已经有的文件。

ABM 也会自己去搜索缺失的书。抓取前，发布会先被延迟配置压一会儿。见 [配置文件](/zh-cn/settings/profiles/)。

## 未达截止质量（Cutoff Unmet）

已下载、但质量仍低于其配置截止质量（“Upgrade Until”）的书。**Search All Cutoff Unmet** 会搜索它们全部。只有在阶梯上排名更高时，更好的副本才会替换旧的。

**Media Management > Quality Upgrades** 可以替你跑这个搜索：**Automatic Upgrade Search**（默认开启）每隔 **Upgrade Search Interval**（默认 24 小时）运行一次。见 [媒体管理](/zh-cn/settings/media-management/)。

如果你用过 Sonarr：这和 Wanted > Cutoff Unmet 是同一个思路，只是用格式阶梯（M4B、MP3 等，分单文件和多文件）代替了分辨率。
