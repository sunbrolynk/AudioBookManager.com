---
title: 疑難排解
description: 你最可能遇到的問題和解法。
---

## 中斷的匯入留下的檔案（.abmstage）

匯入時會先把每個檔案暫存在最終檔名旁邊，等全部到齊後再一次換上去。如果中途失敗，ABM 會把已經搬動的東西放回去。如果有某個部分放不回去，它就會以結尾是 `.abmstage` 的隱藏檔留在書的資料夾裡。那可能是唯一的一份，所以 ABM 會保留它，並在錯誤訊息裡指出它的名稱。

只要書的資料夾裡還有任何 `.abmstage` 檔案，匯入到那個資料夾時就會停下來並顯示：

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

復原方法：

1. 找到錯誤訊息裡指出的 `.abmstage` 檔案。
2. 把它搬回下載資料夾，或是用它真正的名稱放進書的資料夾。不需要的話也可以刪掉。
3. 重試匯入。

## 在反向代理後面，每個人都被要求登入

:::caution[不建議這樣做]
我不建議把 ABM 暴露到網際網路上，Servarr 系列應用程式也是同樣的建議。從外面連線請用 WireGuard 或 Tailscale 這類 VPN。如果你還是要用代理，請看[反向代理](/zh-tw/guides/reverse-proxy/)。
:::

沒有設定 `TRUSTED_PROXIES` 時，帶著轉送標頭的請求永遠不會被當成區域網路的請求，所以必須登入。這是刻意的。

1. 把 `TRUSTED_PROXIES` 設成你代理的位址，例如 `172.20.0.5`。代理跟 ABM 在同一台主機上的話，要設 `127.0.0.1`。
2. 讓代理送出 `X-Forwarded-For` 或 `X-Real-IP`。nginx proxy manager、Traefik 和 Caddy 預設就會送。
3. 重新啟動 ABM。

App 記錄檔會告訴你是哪一種情況：

- 「carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES」：把代理加進 `TRUSTED_PROXIES`。
- 「... is in TRUSTED_PROXIES but didn't name a client address」：設定代理送出 `X-Forwarded-For` 或 `X-Real-IP`。

相反的情況：不送任何轉送標頭的代理看起來會像區域網路的用戶端，所以經過它的所有請求都會免登入。請把 Authentication Required 設成 Enabled。

## 從瀏覽器做的變更被拒絕

確認代理有轉送原本的 `Host` 標頭，或是有送 `X-Forwarded-Host`。請看〈[設定](/zh-tw/configuration/#反向代理)〉。

## 在代理後面封面不見了，或頁面行為怪怪的

Content-Security-Policy 標頭只允許 HTTPS 的封面圖片。到瀏覽器主控台看看有沒有違規訊息。用 HTTPS 提供封面，或是設定 `SECURITY_HEADERS_CSP_ENABLED=false`。

## 大型請求回傳 413

調高 `MAX_REQUEST_BODY_BYTES`。反向代理本身也可能有更低的上限，並自己回 413。

## 中繼資料來源無法使用

新增、搜尋、重新整理和 Discover 都需要中繼資料來源。ABM 得不到回應時，錯誤訊息會寫明來源和真正的原因，例如 VPN 斷了，而不是顯示空清單。原因：來源當機，或 ABM 的連線連不到它。來源連不上或拒絕 ABM 時，對大量項目的重新整理、匯入或同步會停下來，每種故障只發一則通知，單次逾時只跳過那一個項目。

1. 看看 [ABM 狀態頁](https://status.audiobookmanager.com)和 [Libex 狀態頁](https://status.libexdb.com)，確認是不是對所有人都掛了。
2. 檢查容器能不能上網；如果你有用代理，檢查 **Settings > Network** 裡的設定對不對。
3. 過一分鐘再試。
4. 這段期間你還是可以手動新增和匯入書籍。

碰到服務中斷的背景工作會帶著原因失敗。它會自動重試，最多六次或六小時，以先到的為準。

## 重新整理改掉了書的詳細資料

書名、簡介、作者、朗讀者和類似的欄位都來自中繼資料來源，重新整理會套用來源現在的內容。ABM 沒有辦法手動編輯這些欄位。你能控制的是封面（可以鎖定）、要寫入哪些檔案、標籤，以及重新整理時要不要寫入附屬檔案和標籤。請看〈[你的中繼資料，你作主](/zh-tw/metadata/control/)〉。

## 書顯示 Missing Files

這本書下載過了，但檔案不在 ABM 找的地方。檢查掛載和權限，然後執行 **Refresh & Scan**。如果書的資料夾讀不到，掃描就不會動那本書，任務會顯示為 Partial 並附上原因。

## 匯入停下來並顯示「Files left by an interrupted import」

請看上面的 `.abmstage` 那一節。

## 下載完成了卻一直沒有匯入

新增遠端路徑對應，或是讓 ABM 和下載用戶端用同一個路徑看到那個資料夾。只要有一個子資料夾讀不到，整個下載就會卡住，直到修好它的權限。請看〈[下載用戶端](/zh-tw/settings/download-clients/)〉。

## Docker 連不到中繼資料來源或索引器

先檢查 DNS 和代理設定。在 Docker 裡，容器要能上網，ABM 才碰得到 Libex 和你的索引器。

## 還是搞不定

到 [ABM Discord](https://discord.gg/qeJRrM6AZ) 發問、[開一個 issue](https://github.com/sunbrolynk/AudioBook-Manager/issues)，或寄信到 [support@audiobookmanager.com](mailto:support@audiobookmanager.com)。
