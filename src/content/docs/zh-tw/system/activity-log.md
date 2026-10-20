---
title: 活動記錄與事件
description: 發生過什麼事的紀錄，以及它跟記錄檔有什麼不同。
---

ABM 會保留三種紀錄。

| 在哪裡 | 是什麼 |
|---|---|
| **System > Events** 和 **System > Activity Log** | 活動記錄：一份存在資料庫裡、列出發生過哪些事的清單。Events 是依嚴重程度篩選的檢視。Activity Log（標題是 Activity History）可以依類別篩選、搜尋訊息內容，並顯示變更前後的狀態 |
| **System > Log Files** | 包含完整細節的文字記錄檔。請看〈[記錄檔](/zh-tw/system/logs/)〉 |
| **Activity > History** | 只有下載歷史。請看〈[活動](/zh-tw/using/activity/)〉 |

## 會記錄什麼

完成的背景任務（每個一列摘要）、對用戶端、索引器、設定檔、標籤、通知、根資料夾等等的手動變更、抓取（以及是誰發起的）、轉換、Audible 下載失敗、備份、登入和登入失敗，以及啟動時失敗的步驟。

類別：Books、Authors、Series、Downloads、Imports、Conversions、Files、Audible、Security 和 System。

## 隱私

紀錄裡永遠不會包含網址、主機、使用者名稱、密碼、金鑰、Token，或用戶端和服務回傳的原始錯誤文字。物件會用你替它取的名稱來稱呼。儲存設定時只會列出哪些設定改了，不會記下它們的值。登入只會儲存 IP 位址。同一個位址在 15 分鐘內的登入失敗會合併成一列，並附上嘗試次數。

## 刻意保持安靜

閒置的排程執行什麼都不會寫。同樣的失敗重複發生時什麼都不會寫，但恢復正常時會寫。手動執行一律會被記錄。

## 保留期限

General 裡的 **Activity Log Retention** 預設在 90 天後刪除項目，設為 0 則一直保留。記錄檔有自己的保留期（30 天）。

## 檢視記錄檔（View log）

:::caution[後續版本推出]
從紀錄連到記錄檔的功能還沒有出現在任何已發行的版本裡。
:::

紀錄會連到它來源的記錄檔，並直接開在那一行。如果記錄檔已經不在了，紀錄會顯示「Log no longer kept」。
