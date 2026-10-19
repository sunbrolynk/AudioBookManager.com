---
title: 快速開始
description: 從剛裝好到第一本被監控的書。
---

這是從容器跑起來到開始搜尋一本書最短的路。請先安裝 ABM：看〈[安裝 ABM](/zh-tw/installation/)〉。

## 1. 登入

第一次開啟時會帶你建立登入帳號。在你建好之前，ABM 會拒絕所有請求。之後登入的行為請看〈[安全性與登入](/zh-tw/settings/security/)〉。

## 2. 選擇 ABM 連上網路的方式

**Settings > General** 裡有一個 **Proxy & VPN** 區塊。如果你打算用內建的中繼資料來源，要先選好連線方式。請看〈[選擇中繼資料來源](/zh-tw/metadata/choosing-a-source/)〉。

## 3. 新增根資料夾

根資料夾是 ABM 存放書的地方。到 **Settings > Media Management** 的 **Root Folders** 區塊新增。它應該跟你的播放器（例如 Audiobookshelf）讀取的是同一個資料夾。

## 4. 新增索引器和下載用戶端

- **Settings > Indexers**：Newznab、Torznab、MyAnonamouse 或 Prowlarr。請看〈[索引器](/zh-tw/settings/indexers/)〉。
- **Settings > Download Clients**：Deluge、qBittorrent、Transmission、rTorrent、SABnzbd、NZBGet 或 Blackhole。請看〈[下載用戶端](/zh-tw/settings/download-clients/)〉。

如果下載用戶端跑在另一個容器裡，確認它和 ABM 看到的下載資料夾是同一個路徑，不然就要新增遠端路徑對應。

## 5. 設定品質設定檔

**Settings > Profiles** 裡有 ABM 用來決定要抓什麼、什麼算升級的品質階梯。剛裝好的時候一個都沒有，所以先建立一個。你建立的第一個設定檔會變成預設，之後再慢慢調。請看〈[設定檔](/zh-tw/settings/profiles/)〉。

## 6. 連結 Audible（選用）

如果你有 Audible 的書，到 **Settings > Audible** 連結你的帳號。選好 **Marketplace**，按 **Connect Audible Account**，再按 **I Understand, Open Amazon Login**。在新分頁登入 Amazon。登入後跳到一個空白頁或「Page not found」頁是正常的。把網址列上的完整網址複製到 **Redirect URL**，想的話再填個 **Display Name**，然後按 **Complete Login**。你的密碼不會被儲存，第一次書庫同步會馬上開始。請看〈[Audible](/zh-tw/audible/)〉。

## 7. 匯入或新增書

- 已經有收藏了？用〈[書庫匯入](/zh-tw/library-import/)〉。
- 從零開始？用 **Library > Add New**，依書名、作者或系列搜尋。請看〈[新增書籍](/zh-tw/using/add-new/)〉。

你新增的書在匯入檔案之前都算是「想要」的書。想要的書會出現在 **Wanted > Missing**，並且會被自動搜尋。

## 8. 看它運作

**Activity > Queue** 顯示正在下載的東西，**Activity > History** 顯示抓過和匯入過的東西。出問題的時候，去看〈[疑難排解](/zh-tw/troubleshooting/)〉和〈[任務](/zh-tw/system/tasks/)〉頁面。
