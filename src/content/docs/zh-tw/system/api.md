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
- `POST /api/tasks` 只會把 `backup_export` 加入佇列。其他任何工作類型都會收到 HTTP 403，不符合 `backup_export` 的設定會收到 HTTP 422。手動匯入請用 `/api/manual-import/` 底下的端點，掃描媒體庫請用 `POST /api/library/scan`。
- Library Import 會自己在伺服器上保存每一列的 Libex 比對結果。儲存工作階段（`PUT /api/library-import/session/{id}` 或 `PATCH /api/library-import/session/{id}/choices`）時，如果某一列帶了 `libex_matches`，會被拒絕，回傳 HTTP 422 並指出這個欄位，所以你寫回的列裡別帶它。`POST /api/library-import/retry-match` 接受一個選用的 `session_id`，會把找到的比對結果存進那個工作階段。
- 不帶 `limit` 時，`GET /api/metadata/search` 會回傳全部結果。帶上 `limit`（1 到 50）時，最多回傳這麼多筆。

## 中繼資料服務中斷

需要中繼資料來源卻得不到回應的請求，會以帶有 `detail` 的錯誤失敗，其中寫明來源和原因，絕不會回傳空結果。Libex 限速時，你正在等的搜尋大約 10 秒後放棄。

如果你熟悉 Sonarr：這套 API 跟 v3 不相容。Prowlarr 可以透過它的 Prowlarr 連線，把索引器同步到 ABM。
