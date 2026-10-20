---
title: 活动日志与事件
description: 发生过什么的记录，以及它和日志文件有什么不同。
---

ABM 保存三种记录。

| 位置 | 是什么 |
|---|---|
| **System > Events** 和 **System > Activity Log** | 活动日志：数据库里的一份事件清单。Events 是按严重程度筛选的视图。Activity Log（标题为 Activity History）按类别筛选、可以搜索消息内容，并显示修改前后的状态 |
| **System > Log Files** | 包含完整细节的文本日志文件。见 [日志](/zh-cn/system/logs/) |
| **Activity > History** | 只有下载历史。见 [活动](/zh-cn/using/activity/) |

## 会记录什么

已完成的后台任务（每个一行摘要）、对客户端、索引器、配置、标签、通知、根文件夹等的手动修改、抓取（以及是谁发起的）、转换、Audible 下载失败、备份、登录和登录失败，以及启动时失败的步骤。

类别：Books、Authors、Series、Downloads、Imports、Conversions、Files、Audible、Security 和 System。

## 隐私

条目里永远不会包含 URL、主机名、用户名、密码、密钥、令牌，也不会包含客户端或服务返回的原始错误文本。对象用你给它起的名字来称呼。保存设置时只列出改了哪些设置，不记录它们的值。登录只保存 IP 地址。同一个地址在 15 分钟内的登录失败会合并成一行，并带上尝试次数。

## 刻意保持安静

空跑的定时任务什么都不写。同一个失败重复出现时也不写，但恢复时会写。手动运行的任务总会被记录。

## 保留期限

General 里的 **Activity Log Retention** 默认在 90 天后删除条目，设为 0 则一直保留。日志文件有自己的保留期（30 天）。

## 查看日志

:::caution[后续版本推出]
条目里的查看日志链接还没有出现在已发布的版本里。
:::

条目会链接到它所来自的日志，并直接打开到那一行。如果日志已经没了，条目会显示 “Log no longer kept”。
