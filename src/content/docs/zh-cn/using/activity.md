---
title: 活动
description: 队列、历史和黑名单。
---

## 队列

你的下载客户端正在处理的东西。每一行的操作包括 **Grab now**、**Import Now**、**Manual Import** 和 **Retry Now**；当下载完成但所在路径 ABM 看不到时，还会有 **Configure remote path mapping**。

从队列里删除一行时，遵循下载客户端设置里的 **Queue Page Remove Action**：只从 ABM 里移除、从客户端删除但保留文件，或者从客户端删除并删掉文件。见 [下载客户端](/zh-cn/settings/download-clients/)。

## 历史

抓取、导入、失败和升级。失败的抓取会说明尝试过哪些客户端。

## 黑名单

ABM 不会再抓取的发布，通常是因为它们失败过。**Remove from Blocklist** 可以把某个放回来。下载处理里的 **Redownload Failed** 会把失败的发布加到这里，然后重新搜索。

## 和 Events 不是一回事

这些页面讲的是下载。ABM 里全系统范围的事件记录是 [Activity Log](/zh-cn/system/activity-log/)。
