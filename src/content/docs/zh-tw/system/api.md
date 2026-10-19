---
title: API
description: 驗證、文件頁面和限制。
---

ABM 在 `/api` 底下有一套 REST API。互動式參考在 `/api/docs`（Swagger）和 `/api/redoc`，結構描述在 `/api/openapi.json`。設定 `DOCS_ENABLED=false` 可以把這三個全部移除。文件頁面會從 CDN 載入資源，所以只有在能連上網路時才會完整顯示。

## 驗證

- **API 金鑰**：送出 `X-Api-Key: <key>` 或 `?apikey=<key>`。到 **Settings > General > Security** 查看或重新產生。請看〈[安全性](/zh-tw/settings/security/)〉。
- 登入後取得的 **Bearer Token**。
- 你出示的憑證優先於免登入規則，所以從區域網路送來、帶著金鑰的請求會被當成 API 請求。

## 慣例

- 錯誤會以 `{"detail": ...}` 的形式回傳。
- 密鑰永遠不會被回傳。回應只會告訴你有沒有設定。
- 瀏覽器送來會改變狀態的請求，需要符合的來源。使用金鑰的指令碼不受限制。
- 請求內容最大 10 MiB（`MAX_REQUEST_BODY_BYTES`）。備份還原和封面上傳的上限比較大。超過上限會回 HTTP 413。
- 驗證錯誤永遠不會把你送出的內容原樣回傳。

## 中繼資料服務中斷

依賴中繼資料來源的路由，會在回應內容的 `code` 裡回 503（`metadata_unavailable`）、帶 `Retry-After: 30` 的 503（`metadata_declined`）或 502（`metadata_rejected`）。有些查詢路由在服務中斷時仍然會回傳空結果。

如果你熟悉 Sonarr：這套 API 跟 v3 不相容。Prowlarr 可以透過它的 Prowlarr 連線，把索引器同步到 ABM。
