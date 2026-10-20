---
title: Discover 设置
description: Discover 目录的刷新计划和抓取限制。
---

**Settings > Discover** 控制 [Discover](/zh-cn/using/discover/) 目录怎么填充。

## 刷新和目录状态

每个目录（New Releases、Coming Soon、Audible Best、Recommended）都有自己的 **Refresh** 和 **Clear** 按钮，页面还会显示每个目录填了多少。

## 计划

| 设置 | 作用 |
|---|---|
| Auto Refresh | 按计划刷新目录 |
| Frequency | 每天、每周或每月，可以指定日期和时间 |
| Refresh on Startup | ABM 启动时把空的目录填上 |
| Use CRON Expression | 取代上面的简单选项 |

## 抓取

| 设置 | 范围 | 作用 |
|---|---|---|
| Pages to Scrape | 1 到 50 | 每个目录读取的 Audible 页数 |
| Max ASINs per Refresh | 100 到 5000 | 每次刷新从 Libex 获取的书的数量 |
| Batch Size | 10 到 900 | 每次 Libex 请求包含的 ASIN 数。越大越快，但在某些系统上可能失败 |

默认值在应用里，这里就不重复了。打开页面就能看到。

## 注意事项

Libex 连不上时会跳过刷新，并在日志里记一次。
