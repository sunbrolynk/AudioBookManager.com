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
- Library Import 會自己在伺服器上保存每一列的 Libex 比對結果。儲存工作階段（`PUT /api/library-import/session/{id}` 或 `PATCH /api/library-import/session/{id}/choices`）時，如果某一列帶了 `libex_matches`，會被拒絕，回傳 HTTP 422 並指出這個欄位，所以你寫回的列裡別帶它。儲存或加入時，如果某些列指向工作階段自己的掃描沒找到的資料夾或檔案（包括某一列的 `audio_files`），會被拒絕，回傳 HTTP 422 並列出這些路徑。某一列的附加檔案預覽（`POST /api/library-import/session/{id}/extras`）、封面預覽和 `POST /api/library-import/session/{id}/file-tags` 在這一列或某個檔案透過連結通往掃描資料夾外面時，回傳 HTTP 422「Outside the folder this session scanned」。`POST /api/library-import/retry-match` 接受一個選用的 `session_id`，會把找到的比對結果存進那個工作階段。
- `GET /api/metadata/search` 每次回傳一頁，最多 50 筆結果。`page`（0 到 9）選擇頁碼，回應裡帶有 `page` 和 `has_more`，後者說明後面的頁面是否可能還有結果。依 ASIN 搜尋只有第 0 頁。`search_type=phrase` 回傳 Libex 針對該查詢的最佳符合結果，同樣只有第 0 頁，`has_more` 為 false。因為 Libex 會略過它讀不了的書，一頁結果不滿時 `has_more` 仍可能為 true，所以要一直往後取，直到 `has_more` 為 false。`limit`（1 到 50）會截短一頁。
- `POST /api/manual-import/execute` 和 `/execute-to-book` 會依固定結構檢查每一列檔案。未知的鍵、相對路徑的 `source_path` 或空的 `files` 清單會被 HTTP 422 拒絕。每個來源都必須是音訊檔，且不在系統資料夾裡、不直接位於 `/tmp` 或 `/mnt` 這類頂層資料夾下，也不在 ABM 自己的資料夾（設定、資料庫、備份、記錄、封面、資源回收筒、暫存資料夾，以及存放 SSL 憑證和金鑰的資料夾）裡，符號連結會被追蹤。被拒絕的檔案會收到寫有其路徑的 HTTP 400（`Can't import <path>: the file <reason>.`），也不會排入任何工作。
- `POST /api/manual-import/execute` 和 `/execute-to-book` 在匯入執行時依 [Book Naming](/zh-tw/settings/media-management/#book-naming) 為每個檔案命名，並忽略檔案列中的 `destination_filename`。
- `POST /api/manual-import/check-conflicts` 接收 `book_id` 和你要匯入的 `source_paths`，在 `destination_filenames` 中依來源路徑回傳每個檔案會得到的名稱。`clashed` 列出因自己的名稱會衝突而改用格式命名的來源檔案。`audio_conflicts` 和 `own_conflicts` 列出書籍資料夾中已有的名稱，不分大小寫。

## 中繼資料服務中斷

需要中繼資料來源卻得不到回應的請求，會以帶有 `detail` 的錯誤失敗，其中寫明來源和原因，絕不會回傳空結果。Libex 限速時，你正在等的搜尋大約 10 秒後放棄。

如果你熟悉 Sonarr：這套 API 跟 v3 不相容。Prowlarr 可以透過它的 Prowlarr 連線，把索引器同步到 ABM。
