---
title: 從 Readarr 或 Sonarr 轉過來
description: 哪些一樣、哪些不一樣。
---

如果你用過 Sonarr、Radarr 或 Readarr，ABM 大部分的東西都在你預期的地方。

## 一樣的地方

Wanted（Missing、Cutoff Unmet）、Activity（Queue、History、Blocklist）、附 iCal 訂閱的 Calendar、支援 RSS 的索引器、自動和互動式搜尋、有門檻和升級的品質設定檔、延遲設定檔和發行設定檔、標籤、Connect、遠端路徑對應、資源回收筒、備份、Tasks 和 Status。

## 不一樣的地方

| 在 arr 系列 | 在 ABM |
|---|---|
| 以解析度區分的品質 | 一個音訊格式的階梯，分單檔或多檔 |
| 自訂格式 | 發行設定檔，有 Must Contain、Must Not Contain、Preferred |
| 一個項目是一集、一部電影或一本書 | 一本書，系列和集數以目錄的方式追蹤 |
| 中繼資料來自它們自己的服務 | 來自 Libex，封面可以鎖定，會寫入附屬檔案和標籤 |
| 一個下載資料夾 | 一樣，另外還有給現有收藏用的書庫匯入 |
| 沒有媒體轉換 | 一個轉換佇列：轉換、合併、分割、章節 |
| 命名格式 | 資料夾名稱由 ABM 決定，Rename Files 在規劃清單上 |
| 各式各樣的匯入清單 | MAM 和 RSS |

## ABM 沒有的東西

Flood 不是下載用戶端。沒有自訂格式。Readarr 的電子書支援不在這裡。ABM 只做有聲書。

## 搬過來

沒有 Readarr 匯入工具。用〈[書庫匯入](/zh-tw/library-import/)〉把 ABM 指向你現有的有聲書資料夾，再看看〈[把書庫搬進來](/zh-tw/guides/moving-a-library-in/)〉。
