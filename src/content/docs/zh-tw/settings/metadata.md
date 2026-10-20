---
title: 中繼資料
description: ABM 會寫入哪些附屬檔案和音訊標籤，以及什麼時候寫入。
---

**Settings > Metadata** 決定 ABM 要在書的資料夾和檔案裡寫入什麼。這些檔案怎麼被使用，請看〈[附屬檔案](/zh-tw/using/sidecars/)〉。

## 建立中繼資料檔案（Metadata file creation）

| 設定 | 預設值 | 作用 |
|---|---|---|
| Create on Book Add | 關閉 | 書以「想要」的狀態新增時寫入檔案 |
| Create on Import | 開啟 | 匯入有聲書時寫入檔案 |
| Create on Refresh | 關閉 | 重新整理中繼資料時建立或更新檔案 |
| Overwrite Existing | 關閉 | 取代資料夾裡已經有的檔案 |

要建立的檔案：`cover.jpg`（開啟）、`title.opf`（開啟，相容 Audiobookshelf）、`desc.txt`（開啟）和 `reader.txt`（開啟）。

## 寫入音訊檔標籤（Audio file tag writing）

用 ffmpeg 把標籤寫進音訊檔本身。

| 設定 | 預設值 |
|---|---|
| Write Audio Tags | 關閉 |
| Write Tags on Import | 開啟（在標籤寫入開啟之後） |
| Write Tags on Refresh | 關閉 |

標籤欄位，預設全部開啟：Title、Artist (Author)、Album Artist (Author)、Album (Title/Series)、Genre、Year、Comment (Description)、Narrator (Composer) 和 Cover Art。

## 後續版本推出

中繼資料來源的選擇，以及中繼資料庫的本機副本，預計在後續版本提供。請看〈[你的中繼資料，你說了算](/zh-tw/metadata/control/)〉。

## 要注意的地方

- 寫入標籤會修改音訊檔。Audiobookshelf 會把它們視為已變更。
- 如果在寫入標籤時抓不到中繼資料或封面，呼叫會回傳警告，而不是直接失敗。
