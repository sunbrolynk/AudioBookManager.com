---
title: Audible 设置
description: 账号、同步计划、下载和诊断。
---

**Settings > Audible** 用来连接账号，并调整同步和下载。这个功能怎么运作，见 [Audible](/zh-cn/audible/) 页面。

## 账号

连接账号需要填 **Marketplace**、**Display Name**，以及你登录后 Amazon 跳转回来的 **Redirect URL**。每个账号都有自己独立的书库。如果某个账号需要重新登录，就在同一个账号上重新登录，别把它删掉。删除会丢掉它的书库，还会把它的设备从 Audible 里移除。

## 计划

| 设置 | 作用 |
|---|---|
| Auto Sync | 按计划同步书库 |
| Sync on Account Add | 账号一连上就立即同步 |
| Frequency | 每天、每周或每月。选每周会多出 Day of Week，选每月会多出 Day of Month（1-28）。 |
| Time | 小时和分钟 |
| Use CRON Expression | 用自定义的 cron 表达式取代上面的选项 |

## 下载设置（Download Settings）

| 设置 | 默认值 | 作用 |
|---|---|---|
| Mirror Audible library to ABM | 开 | 每次同步都会把 ABM 里还没有的 Audible 书添加进来，并下载没有文件的书，每次同步最多 25 本。打开时会显示下次同步将添加和下载多少本。见[Mirror Audible library to ABM](/zh-cn/audible/#把-audible-书库镜像到-abm) |
| Concurrent Downloads | 2 | 1 到 5。越高越快，但可能撞上 Audible 的限流。 |
| Preferred Quality | High | High 或 Normal |
| Delete Encrypted Files | 开 | 解密成 M4B 之后删除加密的 AAXC 文件 |
| Temp Download Path | 空 | 留空则使用系统临时文件夹 |

下载失败会自动重试几次，间隔逐渐拉长；如果中断持续得比这还久，任务会重新排队，最长等待六小时。授权被拒、没有拥有这本书或者解密失败，只会失败一次，不重试。

## 连接诊断（Connection Diagnostics）

选一个账号，运行诊断。它会测试 FFmpeg、凭据、API 连接和下载能力，并显示 Audible 看到的你的出口 IP。
