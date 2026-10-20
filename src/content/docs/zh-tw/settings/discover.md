---
title: 探索設定
description: 探索目錄的重新整理排程和抓取上限。
---

**Settings > Discover** 控制〈[探索](/zh-tw/using/discover/)〉目錄要怎麼填入內容。

## 重新整理與目錄狀態

每個目錄（New Releases、Coming Soon、Audible Best、Recommended）都有自己的 **Refresh** 和 **Clear** 按鈕，頁面也會顯示每個目錄填了多少。

## 排程

| 設定 | 作用 |
|---|---|
| Auto Refresh | 依排程重新整理目錄 |
| Frequency | 每天、每週或每月，並指定日期和時間 |
| Refresh on Startup | ABM 啟動時，把空的目錄填起來 |
| Use CRON Expression | 取代簡易選項 |

## 抓取

| 設定 | 範圍 | 作用 |
|---|---|---|
| Pages to Scrape | 1 到 50 | 每個目錄要讀幾頁 Audible 頁面 |
| Max ASINs per Refresh | 100 到 5000 | 每次重新整理要從 Libex 抓幾本書 |
| Batch Size | 10 到 900 | 每次向 Libex 請求幾個 ASIN。越大越快，但在某些系統上可能會失敗 |

預設值在 App 裡，這裡不再重複列出。打開頁面就能看到。

## 要注意的地方

Libex 連不上時會略過重新整理，並在記錄裡記一次。
