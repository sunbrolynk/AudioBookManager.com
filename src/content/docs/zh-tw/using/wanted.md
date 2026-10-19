---
title: 想要
description: 缺少的書，以及品質還沒達到門檻的書。
---

**Wanted** 有兩個頁面。

## 缺少（Missing）

已監控但沒有檔案的書。每一列都有：**Auto Search**、**Interactive Search**、**Manual Import**、**Unmonitor**。

- Auto Search 會詢問每一個啟用的索引器，並抓取設定檔允許的最佳發行版本。
- Interactive Search 會列出發行版本讓你自己選。從這裡挑的算是手動抓取。
- Manual Import 讓 ABM 指向你已經有的檔案。

ABM 也會自己搜尋缺少的書。發行版本在抓取前會先被延遲設定檔壓著。請看〈[設定檔](/zh-tw/settings/profiles/)〉。

## 未達門檻（Cutoff Unmet）

已經下載、但品質還低於設定檔門檻（「Upgrade Until」）的書。**Search All Cutoff Unmet** 會搜尋它們。只有在更好的版本在階梯上排名比舊的高時，才會取代舊的。

**Media Management > Quality Upgrades** 可以幫你執行這個搜尋：**Automatic Upgrade Search**（預設開啟）每隔 **Upgrade Search Interval**（預設 24 小時）執行一次。請看〈[媒體管理](/zh-tw/settings/media-management/)〉。

如果你熟悉 Sonarr：這跟 Wanted > Cutoff Unmet 是同樣的概念，只是用格式的階梯（M4B、MP3 等等，分單檔或多檔）取代解析度。
