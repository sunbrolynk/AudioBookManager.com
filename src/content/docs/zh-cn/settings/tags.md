---
title: 标签
description: 标签和自动打标签规则。
---

**Settings > Tags** 管理标签和 **Auto Tagging**。

## 标签

标签是一个词：小写、不含空格、不含逗号，最多 100 个字符。输入 `Sci-Fi` 会变成 `sci-fi`。标签可以打在书、作者和系列上，会被索引器、延迟配置和发布配置、导入列表、Connect 代理以及日历订阅拿来匹配。

如果你用过 Sonarr：标签的用法一样。带标签的配置只对带有这个标签的东西生效。

## 自动标签

自动标签是一条规则，给符合条件的书打上标签。

| 字段 | 作用 |
|---|---|
| Name | 名称 |
| Enable | 开或关 |
| Remove Tags Automatically | 书不再符合条件时，把标签去掉 |
| Tags | 要打上的标签 |
| Conditions | 书必须满足的条件。每一条都可以取反或设为必须 |

条件类型：Genre、Monitored、Language、Root Folder、Status、Tag、Year（范围）、Series Type、Author（包含）、Narrator（包含）、Runtime in minutes（范围）和 Rating（范围）。

**Apply** 立刻运行选中的规则。书发生变化时，规则也会运行。

## 注意事项

- 规则如果引用了已删除的标签或根文件夹，就会被整条跳过，加和删两个方向都不执行，所以坏掉的规则永远不会打错标签或误删标签。
- Remove Tags Automatically 只会去掉这条规则本身会加上的标签。
