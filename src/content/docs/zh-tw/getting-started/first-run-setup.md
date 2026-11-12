---
title: 首次設定
description: 全新安裝時的設定精靈，一步一步來。
---

:::caution[後續版本推出]
設定精靈還沒有出現在任何已發行的版本裡。已發行的版本在第一次造訪時只會請你建立登入帳號。
:::

全新安裝時，第一次造訪會開啟設定精靈，而不是登入頁。它會一步一步帶你完成 ABM 需要的所有設定。它只會在還沒有帳號時出現。每個選擇之後都可以在 **Settings** 裡修改。

頂端有一條由八個環節組成的鏈條。每個環節是一個步驟，鏈條會告訴你現在走到哪裡：

- **Done**：這一步已經完成。
- **Current step**：螢幕上目前的這一步。
- **Not started**：你還沒走到的步驟。
- **Later**：你沒完成就略過的步驟。它會一直等著，你可以隨時在 **Settings** 裡把它補上。

**Back** 回到上一步。**Continue** 儲存這一步並繼續。Audible、Download client 和 Indexer 這三步還有 **Skip for now**。

## 1. 帳號（Account）

建立你的登入帳號並直接登入。你要選一個使用者名稱和一組至少 8 個字元的密碼，密碼要輸入兩次。

| 設定 | 預設值 | 作用 |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms 使用登入頁。Basic (Browser Popup) 使用瀏覽器內建的登入提示 |
| Authentication required | Everywhere | Everywhere 要求從任何位址都必須登入。Skip on local network 讓你家裡或辦公室網路裡的裝置不用登入就能進入 |

這些和[安全性與登入](/zh-tw/settings/security/)裡的設定是同一套。帳號會在你按下 **Continue** 時建立。建立之後，這一步只會顯示確認資訊。

## 2. 網路（Network）

Network 是總開關。在你這裡選好路徑之前，ABM 送出的任何東西都不會離開你的機器，所以 Metadata 和 Audible 這兩步依賴它。路徑沒填完整之前 **Continue** 一直是關閉的。只有這一步的設定載入失敗時才能略過：這時它會顯示錯誤，並提供 **Retry**、**Back** 和 **Skip for now**。在選好路徑之前，ABM 會一直擋住它要送出的所有東西，Finish 這一步會把 Network 顯示為等待中。

| 選項 | 你要給 ABM 什麼 |
|---|---|
| Proxy | 代理的類型、主機名稱和連接埠，以及可選的使用者名稱和密碼。不支援 SOCKS4 |
| WireGuard | 來自 VPN 服務商的 `.conf`，貼上或拖進來。如果已經儲存了通道，就用那一個 |
| Own VPN container | 不用填寫。你勾選一個方塊，表示 ABM 的所有流量已經經由 VPN 或代理容器送出。ABM 無法檢查這一點 |
| Direct | 不用填寫。你勾選一個方塊，表示 ABM 連線的每個服務都會看到你自己的 IP 位址 |

**Continue** 會儲存路徑，然後顯示 **Public IP** 檢查，讓你在任何東西上網之前就能看到路徑是否可用。**Change route** 可以重新選擇。這些和[Network](/zh-tw/settings/network/)裡的設定是同一套。

## 3. 中繼資料（Metadata）

選擇 ABM 到哪裡查書。它排在資料夾之前，因為第一次資料夾掃描會用它來比對你的書。

| 選項 | 含義 |
|---|---|
| Built-in | Libex 在 ABM 內部執行。不需要帳號，也不需要額外的服務。使用 Network 步驟選好的路徑 |
| Hosted | ABM 向 libexdb.com 上的公開 Libex 執行個體查詢 |
| Self-hosted | ABM 向你自己的 Libex 伺服器查詢。填入它的 **Server URL**。**Test** 會在不儲存的情況下檢查它 |

還有一個 **Local Storage** 核取方塊。它會為 ABM 查詢、搜尋、新增、匯入或在 Discover 裡看到的每一本書，保留一份永久、加密的本機紀錄，三種來源都適用。一旦開啟，只能在 **Settings > Metadata** 裡關閉。

**Continue** 會儲存來源，如果你勾選了，還會開啟 Local Storage。如果所選的來源暫時還不能連出去，例如沒有選路徑的 Built-in，這一步會說明原因。請見[選擇中繼資料來源](/zh-tw/metadata/choosing-a-source/)。如果這一步的設定載入失敗，它會顯示錯誤，並提供 **Retry**、**Back** 和 **Skip for now**，來源可以之後在 **Settings > Metadata** 再設。

## 4. Audible（選填）

登入你的 Audible 帳號，讓 ABM 能讀取你的書庫。它走的是你在 Network 步驟裡選好的路徑。如果沒有選路徑，或者 Audible 流量在該路徑上被封鎖，這一步會告訴你，並且 **Back to Network** 會帶你回去。登入本身和[Audible](/zh-tw/audible/)裡的一樣。登入之後，這一步會顯示帳號，**Continue** 也就可以用了。

你可以選擇 **Skip for now**，之後再到 **Settings > Audible** 裡連接。

## 5. 根資料夾（Root folder）

根資料夾是 ABM 存放你的書的地方。選你的有聲書所在的資料夾，或者新書應該放進去的資料夾。它應該和你的播放器（例如 Audiobookshelf）讀取的是同一個資料夾。你可以瀏覽伺服器上的資料夾，也可以在瀏覽器裡新增一個。你新增的第一個根資料夾會成為預設值。這一步不能略過。之後可以在 **Settings > Media Management** 裡新增更多根資料夾。

## 6. 下載用戶端（選填）

選擇一個支援的用戶端，Usenet 或 torrent 都可以：Deluge、qBittorrent、Transmission、rTorrent、SABnzbd、NZBGet 或 Blackhole。填寫它的資訊，按 **Test**，再按 **Save**。用戶端就在這一步裡直接新增。你可以再新增一個，**Refresh** 會重新載入清單。只要儲存了一個用戶端，這一步就算完成。

你可以選擇 **Skip for now**，之後再到 **Settings > Download Clients** 裡新增用戶端。請見[下載用戶端](/zh-tw/settings/download-clients/)。

## 7. 索引器（選填）

選擇索引器的類型或預設，填好之後按 **Test** 和 **Save**，和下載用戶端的做法一樣。只要儲存了一個索引器，這一步就算完成。你可以選擇 **Skip for now**，之後再到 **Settings > Indexers** 裡新增索引器。請見[索引器](/zh-tw/settings/indexers/)。

## 8. 完成（Finish）

摘要會逐步列出各項設定的結果：你的 Network 路徑（如果檢查過，還有 Public IP）、中繼資料來源、Audible 帳號、根資料夾，以及你新增的用戶端和索引器。你留到之後的步驟會顯示為等待中。如果 ABM 讀不回某一步的狀態，例如下載用戶端清單載入失敗，那一行會顯示 **Could not check**，並出現一個 **Retry** 按鈕。如果沒有任何等待項，摘要會說每個環節都亮了。**Go to Library** 會關閉精靈。

你略過的內容隨時都能在 **Settings** 裡找到。接下來合理的事情是品質設定檔和你的書：請見[快速開始](/zh-tw/getting-started/quick-start/)。
