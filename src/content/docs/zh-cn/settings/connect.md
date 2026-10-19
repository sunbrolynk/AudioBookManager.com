---
title: 连接（Connect）
description: 通知、媒体服务器和自定义脚本。
---

**Settings > Connect** 负责把事件发送到别的地方。它叫 Connect，和 Sonarr 一样。

## 代理类型

**通知代理**：Discord、Slack、Telegram、Pushover、Pushbullet、Simplepush、ntfy、Gotify、Notifiarr、Email、SendGrid、Webhook 和 Apprise。**媒体服务器**：Jellyfin 和 Emby。**其他**：Custom Script。Audiobookshelf 不是 Connect 代理。

## 事件

每个连接自己选择由哪些事件触发。

On Grab、On Import、On Upgrade、On Conversion、On Health Issue、On Health Restored、On Task Failed、On Application Update、On Grab Failed、On Import Failed、On Download Failed、On Conversion Failed、On Import List Synced、On Import List New Items、On Audible Download Done、On Audible Download Failed。

## 每个连接的设置

| 字段 | 作用 |
|---|---|
| Name, Enable | 名称和开关 |
| Include covers | 代理支持时附上书的封面 |
| Tags | 只对带有匹配标签的条目触发 |
| Conditions | 针对作者、大小等字段的规则，彼此是“且”的关系。格式有误的条件会直接放行，而不是让提醒静默 |
| Priority | 在代理支持时生效 |

**Test** 发送一条测试消息。**Test All** 测试所有连接。

## 自定义消息

自定义消息会改写某个事件的文字。选一个 **Format**、一个 **Cover**（Auto 使用书的封面，也可以选 None 或 Custom URL），写好 **Title** 和正文，点一下变量就能插入。每个事件的默认模板可以作为起点。预览会显示最终效果，你也可以通过某个连接发一条测试。

## 注意事项

- 令牌之类的密钥加密存储，编辑时显示为空，留空就保持不变。修改目标地址时需要重新填写。
- 关于元数据源中断的任务失败提醒，每次中断只发一次，而不是每次失败都发；定时运行的任务从不发送这种提醒。
- Webhook 的请求头是一个 JSON 对象，作为密钥存储。
