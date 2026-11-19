---
title: 下載用戶端
description: 支援的用戶端、已完成下載的處理，以及遠端路徑對應。
---

**Settings > Download Clients** 用來連結負責下載的程式。

## 支援的用戶端

Deluge、qBittorrent、Transmission、rTorrent、SABnzbd、NZBGet 和 Blackhole（監看資料夾）。就這些，沒有別的了。

## 欄位

會顯示哪些欄位，要看是哪個用戶端。

| 欄位 | 作用 |
|---|---|
| Name | 名稱 |
| Host, Port, URL Base | 用戶端在哪裡監聽 |
| Use SSL, Verify TLS certificate | 是否用 HTTPS，以及要不要檢查憑證 |
| Username, Password, API Key | 憑證。儲存過的密鑰永遠不會再顯示 |
| Category | ABM 替它的下載加上的分類或標籤，例如 `audiobooks` |
| Watch Folder, Directory | Blackhole：檔案要丟到哪裡，以及完成的檔案會出現在哪裡 |
| Client Priority | 有好幾個用戶端都適用時，由哪個勝出 |
| Remove from Client, Also Delete Files, Remove Failed | 匯入或失敗後，ABM 要從用戶端移除什麼 |
| Queue Page Remove Action | 在 Queue 頁面移除一列時要做什麼：只從 ABM 移除、從用戶端移除但保留檔案，或移除並刪除檔案 |

**Test** 會檢查連線。停用的用戶端不等於不健康的用戶端。連線失敗的用戶端會以逐步拉長的間隔重試。

## 已完成下載的處理

| 設定 | 預設值 | 作用 |
|---|---|---|
| Enable | 開啟 | 自動匯入完成的下載 |
| Redownload Failed | 開啟 | 把失敗的發行版本加進封鎖清單，然後重新搜尋 |
| Redownload Failed from Interactive Search | 開啟 | 同上，用在你手動挑選的發行版本 |

已完成的下載以不同格式多次包含同一本書時，ABM 只匯入這本書的品質設定檔排得最高的那份副本。把下載配對到書時也只測量一份副本，也就是預設品質設定檔排得最高的那份。設定檔排名相同或沒有包含的格式，依 M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA 的順序。其餘副本會留在下載裡；只有 **Also Delete Files** 在匯入後移除下載時才會刪除它們。一組分段旁邊的單一檔案，只有長度相符時才算第二份副本，否則就是同一本書的各部分。封面和其他額外檔案仍會跟著 ABM 取用的副本一起匯入。下載資料夾裡還有另一本書的音訊時，只有以匯入音訊命名的額外檔案會一起匯入。

匯入時要用硬連結還是複製，由〈[媒體管理](/zh-tw/settings/media-management/)〉裡的 **Use Hardlinks instead of Copy** 決定。如果用戶端的資料夾跟 ABM 看到的不是同一個路徑，就新增遠端路徑對應。

## 遠端路徑對應

當用戶端回報的是 `/downloads/audiobooks`，而 ABM 看到的是 `/data/audiobooks` 時，就新增一個對應。

| 欄位 | 作用 |
|---|---|
| Host | 這個對應適用的用戶端主機 |
| Remote Path | 用戶端回報的路徑 |
| Local Path | ABM 看到的同一個資料夾 |

## 要注意的地方

- 完成的下載裡只要有一個子資料夾讀不到，那個下載的匯入就會整個停下來。不會從用戶端移除任何東西，之後會再重試。
- Docker：可以的話，在兩個容器裡都把下載資料夾掛載在同一個路徑。對應是退而求其次的做法。
