---
title: 状态
description: 健康检查，以及看看 ABM 正在干什么。
---

**System > Status** 会运行健康检查，并列出所有出问题的地方：连不上的下载客户端和索引器、根文件夹的问题，以及出站连接的问题。它还会显示数据库连接池的使用情况。一切正常时，它会显示 “All systems healthy”。

健康检查也会每 6 小时在后台运行一次。Connect 可以在 **On Health Issue** 和 **On Health Restored** 时发送通知。见 [Connect](/zh-cn/settings/connect/)。

如果你用过 Sonarr：这就相当于把 System > Status 和 Health 放在了一个页面上。

## 注意事项

- 被禁用的下载客户端不会被当成不健康。
- 需要重新登录的 Audible 账号既会显示在这里，也会显示在 Audible 设置页上。
