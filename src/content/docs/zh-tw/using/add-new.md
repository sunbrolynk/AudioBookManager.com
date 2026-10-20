---
title: 新增書籍
description: 搜尋一本書，把它加成想要的書。
---

**Library > Add New** 會在 Libex 搜尋書，並加入你挑選的書。搜尋會比對書名、作者、系列或 ASIN。

## 新增會做什麼

新增的書會在你選的根資料夾和品質設定檔下變成 **Wanted**，ABM 也會依照監控設定開始搜尋它。判斷一本書是否已經在書庫裡，只看 ASIN。同一個書名的不同版本是不同的 ASIN。

## 作者和系列搜尋

搜尋有 Title、Author、Series、Books by author、Books in series 和 ASIN 幾種模式。Author 和 Series 尋找作者和系列本身，Books by author 和 Books in series 尋找書籍。新增作者或系列時會建立它的目錄，並依 **Monitor** 把書當成想要的書加進來：

| Monitor | 會加入 |
|---|---|
| All | 每一本書，包括還沒發行的 |
| Future | 只有從現在開始發行的書 |
| Missing（預設） | 你還沒有的書 |
| None | 只建立目錄 |

你也要選根資料夾、品質設定檔，以及之後才出現的書要不要也一起加入。系列預設是開啟，作者預設是關閉。已經在書庫裡的作者或系列會顯示「In Library」，並提供 **Add missing books** 動作。

新增會以背景任務執行，並跳出顯示進度的通知。

## 如果搜尋什麼都沒找到

如果搜尋沒有從中繼資料來源得到任何回應，會以錯誤失敗，而不是顯示空清單。請看〈[疑難排解](/zh-tw/troubleshooting/#中繼資料來源無法使用)〉。
