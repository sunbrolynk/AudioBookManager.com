---
title: 索引器
description: Newznab、Torznab、MyAnonamouse 和 Prowlarr。
---

**Settings > Indexers** 列出 ABM 去哪裡搜尋發行版本。

## 類型

Newznab（Usenet）、Torznab（BT 種子）、MyAnonamouse，以及從 Prowlarr 同步索引器的 Prowlarr 連線。

## 欄位

| 欄位 | 適用於 | 作用 |
|---|---|---|
| Name | 全部 | 名稱 |
| Enable RSS | 全部 | 納入 RSS 同步 |
| Enable Automatic Search | 全部 | 用在 ABM 自己發起的搜尋 |
| Enable Interactive Search | 全部 | 用在你手動搜尋的時候 |
| URL, API Path, API Key | Newznab、Torznab | 要連到哪裡、怎麼連。憑證要填在欄位裡，絕對不要放進網址 |
| Categories | Newznab、Torznab | 要搜尋哪些分類 |
| Cookie (mam_id) | MyAnonamouse | 工作階段 Cookie |
| Search Type | MyAnonamouse | All Torrents、Active Only、Freeleech Only 或 Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | 擴大搜尋範圍 |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | 種子 | 發行版本的限制和做種目標 |
| Indexer Priority | 全部 | 1（最高）到 50（最低），預設 25。同一個發行版本來自兩個索引器時，數字小的勝出 |
| Download Client | 全部 | 把這個索引器抓到的東西送到某一個用戶端。(Any) 代表任何一個都可以 |
| Tags | 全部 | 只對有符合標籤的項目使用這個索引器 |

儲存過的 API 金鑰或 Cookie 永遠不會再顯示。編輯時把欄位留空就會保留原本的值。更改網址時必須重新輸入密鑰，這樣金鑰就不會不小心被送到新的位址。

## 選項

這些設定套用在每一個索引器上，所以要遵守每個索引器自己的規則。

| 設定 | 預設值 | 作用 |
|---|---|---|
| Minimum Age | 0（分鐘） | 忽略比這個時間還新的 Usenet 發行版本 |
| Retention | 0（天） | 忽略比這個時間還舊的發行版本。0 代表沒有限制 |
| Maximum Size | 0（MB） | 0 代表沒有限制 |
| RSS Sync Interval | 15（分鐘） | 多久輪詢一次 RSS |

MAM 清單也可以餵給〈[匯入清單](/zh-tw/settings/import-lists/)〉。

如果你熟悉 Sonarr：這裡一樣是每個索引器分開設定 RSS、自動搜尋和互動式搜尋。分類沒有另外的「全部測試」。
