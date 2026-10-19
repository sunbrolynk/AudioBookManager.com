---
title: 索引器
description: Newznab、Torznab、MyAnonamouse 和 Prowlarr。
---

**Settings > Indexers** 列出 ABM 去哪里搜索发布。

## 类型

Newznab（Usenet）、Torznab（种子）、MyAnonamouse，以及从 Prowlarr 同步索引器的 Prowlarr 连接。

## 字段

| 字段 | 适用于 | 作用 |
|---|---|---|
| Name | 全部 | 名称 |
| Enable RSS | 全部 | 参与 RSS 同步 |
| Enable Automatic Search | 全部 | 用于 ABM 自己发起的搜索 |
| Enable Interactive Search | 全部 | 用于你手动搜索时 |
| URL, API Path, API Key | Newznab、Torznab | 连接到哪里、怎么连接。凭据填在字段里，绝不要写进 URL |
| Categories | Newznab、Torznab | 搜索哪些分类 |
| Cookie (mam_id) | MyAnonamouse | 会话 cookie |
| Search Type | MyAnonamouse | All Torrents、Active Only、Freeleech Only 或 Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | 扩大搜索范围 |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | 种子 | 发布的限制条件和做种目标 |
| Indexer Priority | 全部 | 1（最高）到 50（最低），默认 25。同一个发布来自两个索引器时，数字小的优先 |
| Download Client | 全部 | 把这个索引器的抓取发给指定的客户端。(Any) 表示任意客户端 |
| Tags | 全部 | 只对带有匹配标签的条目使用这个索引器 |

已保存的 API 密钥或 cookie 不会再显示出来。编辑时留空就会保留原值。修改 URL 时必须重新填写密钥，这样密钥就不会被意外发到一个新地址。

## 选项

这些设置对所有索引器生效，所以要遵守每个索引器各自的规则。

| 设置 | 默认值 | 作用 |
|---|---|---|
| Minimum Age | 0（分钟） | 忽略比这更新的 Usenet 发布 |
| Retention | 0（天） | 忽略比这更旧的发布。0 表示不限制 |
| Maximum Size | 0（MB） | 0 表示不限制 |
| RSS Sync Interval | 15（分钟） | 多久轮询一次 RSS |

MAM 列表也可以作为 [导入列表](/zh-cn/settings/import-lists/) 的来源。

如果你用过 Sonarr：每个索引器同样分成 RSS、自动搜索和手动交互搜索。分类没有单独的“全部测试”。
