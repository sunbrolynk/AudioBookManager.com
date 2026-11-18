---
title: 中繼資料
description: ABM 會寫入哪些附屬檔案和音訊標籤，以及什麼時候寫入。
---

**Settings > Metadata** 決定 ABM 要在書的資料夾和檔案裡寫入什麼。這些檔案怎麼被使用，請看〈[附屬檔案](/zh-tw/using/sidecars/)〉。

## 來源（Source）

**Metadata Source** 可選 Built-in（預設）、Hosted（libexdb.com）或 Self-hosted，後者需要填 **Server URL**。**Test** 不儲存，直接向所選來源送出一次真實請求；**Status** 說明它是否就緒；**Connection** 顯示查詢所走的路線，並連結到 **Settings > Network**。切換會立刻對所有查詢生效。見[選擇中繼資料來源](/zh-tw/metadata/choosing-a-source/)。

## 建立中繼資料檔案（Metadata file creation）

| 設定 | 預設值 | 作用 |
|---|---|---|
| Create on Book Add | 關閉 | 書以「想要」的狀態新增時寫入檔案 |
| Create on Import | 開啟 | 匯入有聲書時寫入檔案 |
| Create on Refresh | 關閉 | 重新整理中繼資料時建立或更新檔案 |
| Overwrite Existing | 關閉 | 取代資料夾裡已經有的檔案 |

要建立的檔案：`cover.jpg`（開啟）、`title.opf`（開啟，相容 Audiobookshelf）、`desc.txt`（開啟）和 `reader.txt`（開啟）。

## 寫入音訊檔標籤（Audio file tag writing）

把音訊標籤寫進音訊檔本身。

| 設定 | 預設值 |
|---|---|
| Write Audio Tags | 關閉 |
| Write Audio Tags on Import | 開啟（在標籤寫入開啟之後） |
| Write Audio Tags on Refresh | 關閉 |

標籤欄位，預設全部開啟：Title、Artist (Author)、Album Artist (Author)、Album (Title/Series)、Genre、Year、Comment (Description)、Narrator (Composer) 和 Cover Art。

## 本機儲存（Local Storage）

使用 Built-in 來源時，會顯示 **Local Storage** 和 **Storage Backups** 兩個區塊。它們只是預覽，尚未接通。見[你的中繼資料，你作主](/zh-tw/metadata/control/)。

## 要注意的地方

- 寫入標籤會修改音訊檔。Audiobookshelf 會把它們視為已變更。
- 如果在寫入標籤時抓不到中繼資料或封面，呼叫會回傳警告，而不是直接失敗。
- 因為連線拒絕而無法嵌入封面時，書籍頁面和編輯對話框會顯示警告，而不是單純的成功。
