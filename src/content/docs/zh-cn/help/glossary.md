---
title: 术语表
description: 给新用户和从各种 arr 过来的人看的术语解释。
---

**ASIN**：Audible 用来标识一本书的十位字符编号。ABM 靠它来识别书。

**Auto tag**（自动标签）：一条规则，给符合条件的书打上标签。

**Blocklist**（黑名单）：ABM 不会再次抓取的发布。

**Connect**：负责通知和媒体服务器钩子的设置页。Sonarr 也用这个叫法。

**Cover lock**（封面锁定）：你自己选的封面，刷新时不会被替换。

**Cutoff**（截止质量）：质量配置里的 “Upgrade Until”，也就是达到哪个质量后 ABM 就不再找更好的。

**Delay profile**（延迟配置）：按协议设置的、抓取前的等待时间。

**Discover**（发现）：可以浏览的 Audible 目录。

**Hardlink**（硬链接）：同一文件系统上同一个文件的第二个名字，不额外占空间。

**Import Workbench**：书库导入背后的页面名称。扫描、匹配、添加。

**Indexer**（索引器）：ABM 用来搜索发布的站点。

**Ladder**（阶梯）：质量配置里按顺序排列的格式列表。

**Libex**：ABM 获取书籍数据的元数据服务。

**Monitored / Unmonitored**（已监控 / 未监控）：ABM 是否会处理这本书。

**M4B**：一种带章节的单文件有声书格式。

**Quality profile / release profile**（质量配置 / 发布配置）：见 [配置文件](/zh-cn/settings/profiles/)。

**Remote path mapping**（远程路径映射）：把下载客户端看到的路径转换成 ABM 看到的路径。

**Root folder**（根文件夹）：ABM 存放书的目录。

**Sidecar**（附属文件）：音频旁边的小文件：封面、OPF、简介、讲述者、cue。

**Step-up password**（二次密码确认）：在做敏感修改前再问一次你的密码。

**Wanted**（想要）：一本被监控但还没有文件的书。

## 如果你用过 Sonarr

剧集对应书。系列既是 Sonarr 里的剧集系列，也是一个书籍目录。质量是格式加上单文件或多文件。自定义格式变成了发布配置。Activity、Wanted、Calendar 和 System 的用法都一样。
