---
title: Audible
description: 连接 Audible 账号、同步，以及镜像你的书库。
---

ABM 可以连接你的 Audible 账号，为每个账号保存一份书库副本，并下载你已经拥有的书。

## 账号

在 **Settings > Audible** 里添加账号。可以连接不止一个，每个账号都有自己独立的书库。

如果某个账号登录失效了，它会在设置页和健康页里提示需要重新登录。在同一个账号上重新登录就行，它会保留原来的书库并换上新的凭据。别靠删除账号来解决这个问题：删除会丢掉它的书库表，还会把它的设备从 Audible 里移除。

## 同步

同步会从 Audible 刷新每个账号的书库。Audible 设置页会显示同步进度和结果，失败时会给出真实的错误信息。它也会按计划自动运行。

**Audible Library** 页面列出所有已同步的内容。可以筛选为 All、Not in Library、Downloaded、Wanted 或 Downloadable Only。

## 把 Audible 书库镜像到 ABM

:::caution[下个版本推出]
这个功能还没有出现在已发布的版本里。
:::

镜像功能会让你的 ABM 书库跟着 Audible 书库走。

- 默认开启。
- 它会添加你买的书和免费的书，播客不算在内。
- 每次同步最多处理 25 本。
- 运行前会让你确认，并显示要添加多少本。
- 你想要但还没有文件的书，它也会去下载。
- 从 Audible 移除的书会继续留在 ABM 里。

## 设置

计划任务、下载行为和诊断都在 [Audible 设置](/zh-cn/settings/audible/) 里。
