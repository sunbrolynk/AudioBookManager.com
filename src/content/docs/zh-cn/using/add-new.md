---
title: 添加新书
description: 搜索一本书，把它添加为想要。
---

**Library > Add New** 会在 Libex 里搜索书，并添加你选中的那些。搜索可以匹配标题、作者、系列或 ASIN。

## 添加之后会发生什么

添加的书会以 **Wanted** 状态放进你选的根文件夹和质量配置，ABM 会根据监控设置开始搜索它。判断一本书是否已经在书库里，只看 ASIN。同一个标题的不同版本，ASIN 也不同。

## 作者和系列搜索

搜索有 Title、Author、Series、Books by author、Books in series 和 ASIN 几种模式。Author 和 Series 查找作者和系列本身，Books by author 和 Books in series 查找书。添加作者或系列时会建立它的目录，并按 **Monitor** 把书作为想要的书添加进来：

| Monitor | 添加 |
|---|---|
| All | 所有书，包括还没发布的 |
| Future | 只添加从现在起发布的书 |
| Missing（默认） | 你还没有的书 |
| None | 只建立目录 |

你还可以选择根文件夹、质量配置，以及以后新出现的书是否也自动添加。对系列来说默认开启，对作者来说默认关闭。已经在书库里的作者或系列会显示 “In Library”，并提供 **Add missing books** 操作。

添加会作为后台任务运行，并弹出进度提示。

## 如果搜索什么都没找到

如果搜索没有得到元数据源的回应，它会报错，而不是返回一个空列表。见 [故障排除](/zh-cn/troubleshooting/#元数据源不可用)。
