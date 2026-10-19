---
title: 导入列表
description: 从 MyAnonamouse 或 RSS 订阅拉取想要的书。
---

**Settings > Import Lists** 会从外部来源自动添加书。

## 来源

- **MAM**：MyAnonamouse 的愿望单，需要 **MAM Session ID**。
- **RSS**：你提供的 **RSS Link**，还可以选填 **Website URL**。网站地址必须是 http 或 https。

## 每个列表的设置

| 字段 | 作用 |
|---|---|
| Name | 名称 |
| Monitor | 它添加的书是 Monitored 还是 Unmonitored |
| Root Folder | 放到哪里 |
| Quality Profile | 一个配置，或者 Inherit (use default) |
| Tags | 给列表添加的所有书打上 |

**Sync Now** 立刻运行列表。

## 选项

| 设置 | 默认值 | 作用 |
|---|---|---|
| RSS Sync Interval | 12（小时） | 列表多久同步一次。设为 0 则关闭同步 |
| Clean Library Level | Disabled | 一本书离开列表后怎么处理 |

Clean Library Level 的选项：Disabled、Log Only、Keep and Unmonitor Audiobook、Remove Audiobook and Keep Files、Remove Audiobook and Delete Files。最后一个会删文件，确定要这样才选它。

## 排除项

**Import List Exclusions** 按 **ASIN**、**Title** 和 **Year** 屏蔽一本书，让列表再也不会添加它。用 **Lookup ASIN** 自动填好这些字段。

## 注意事项

- 已保存的 RSS 链接或 Session ID 不会再显示出来。修改地址时需要重新填写密钥。
- 列表会触发 On Import List Synced 和 On Import List New Items 通知。见 [Connect](/zh-cn/settings/connect/)。
