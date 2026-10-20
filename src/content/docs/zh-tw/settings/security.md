---
title: 安全性與登入
description: 驗證模式、API 金鑰、受信任的代理、區域網路和內容安全政策。
---

**Settings > General** 裡的 **Security** 區塊控制誰可以使用 ABM，以及怎麼使用。

## 驗證

| 設定 | 預設值 | 選項 |
|---|---|---|
| Authentication | Forms (Login Page) | None、Basic (Browser Popup)、Forms (Login Page)、External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always)、Disabled for Local Addresses、Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | 密碼留空就會保留目前的密碼 |
| Certificate Validation | Enabled | Enabled、Disabled for Local Addresses、Disabled (Not Recommended) |
| Local Networks | 空白 | 額外可以免登入的 CIDR 網段 |
| CORS Allowed Domains | 空白 | 允許從瀏覽器呼叫 API 的其他來源。需要重新啟動 |

你會用到的兩種 **Authentication Required** 模式：

- **Enabled**：所有人都要登入，包括你的區域網路。
- **Disabled for Local Addresses**（儲存為 `local_disabled`）：來自區域網路位址的請求可以免登入。迴路位址、私有網段、鏈路本地位址和 IPv6 唯一本地位址都算是區域網路。**Local Networks** 只會再加上更多網段，絕對不會取代這些。

全新安裝時，在設定完成之前，所有請求都會被拒絕。

## 反向代理

放在代理後面時，設定 `TRUSTED_PROXIES`，讓 ABM 知道該相信哪些轉送標頭。如果帶著轉送標頭的請求來自不在清單上的位址，它永遠不會被當成區域網路，必須登入。這是刻意的。請看〈[反向代理](/zh-tw/guides/reverse-proxy/)〉。

不送任何轉送標頭的代理，看起來會像區域網路的用戶端。如果你用的是這種代理，請把 Authentication Required 設成 Enabled。

## 密碼確認

有些變更會再次要求你輸入目前的密碼：儲存 Security 設定，以及顯示或重新產生 API 金鑰。輸錯密碼會在安全性記錄裡算成一次失敗的登入。如果還沒設定密碼，就不會詢問。

## API 金鑰

在你確認密碼之前，金鑰永遠不會顯示。**Regenerate API Key** 會產生一把新的金鑰，只顯示一次，並立刻讓舊的金鑰失效。金鑰不能自己輸入。如果儲存的金鑰無法解密（應用程式金鑰變了），就重新產生一把。

用 `X-Api-Key` 標頭或 `apikey` 參數送出。從區域網路位址送來、帶著金鑰的請求，會被當成金鑰請求。請看〈[API](/zh-tw/system/api/)〉。

## 瀏覽器寫入

瀏覽器送來會修改東西的請求，除非它的來源符合你連到 ABM 的位址、受信任代理轉送的主機，或某個 CORS 允許網域，否則會以 `cross_origin_rejected` 拒絕。使用 API 金鑰的請求不受影響。

## 內容安全政策

除非設定 `SECURITY_HEADERS_CSP_ENABLED=false`，否則 ABM 會送出 Content-Security-Policy 標頭。它讓介面只能載入 ABM 自己的指令碼和 API，圖片則只能來自 ABM 或 HTTPS。用一般 HTTP 提供的封面會被擋下，而且不管哪種設定，ABM 都不能被放進 iframe 裡顯示。API 文件頁面用的是比較寬鬆的政策，這樣才能從 CDN 載入。

## 登入失敗

沒有鎖定機制。失敗的嘗試會被記錄下來，在 Activity Log 裡依位址合併顯示，並逐行寫進安全性記錄，給 fail2ban 之類的工具使用。

## 密鑰

ABM 替索引器、用戶端和連線儲存的密碼和金鑰，都會用應用程式金鑰加密。設定 `APP_SECRET` 可以讓金鑰不放在設定磁碟上。如果兩者都沒有，ABM 會產生 `/config/app_secret`。代理伺服器和匯出目標的密碼以純文字儲存。
