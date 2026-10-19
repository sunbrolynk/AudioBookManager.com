---
title: 附屬檔案
description: ABM 寫在書旁邊的 metadata.json、封面、OPF、簡介和朗讀者檔案。
---

附屬檔案是放在音訊旁邊的小檔案。Audiobookshelf 和其他播放器會讀取它們。ABM 會寫入這些：

| 檔案 | 內容 | 開關 |
|---|---|---|
| `metadata.json` | Audiobookshelf 自己的中繼資料檔，另外加上一個 `abm` 區塊，標明這是 ABM 寫的。Audiobookshelf 會最先讀它 | 沒有，一律寫入 |
| `cover.jpg` | 書的封面。資料夾裡已經有 `cover.*` 時不會寫入 | cover.jpg |
| `.opf` | OPF 格式的中繼資料。以書的第一個音訊檔命名（例如 `Dune.opf`），書沒有音訊時則是 `title.opf` | title.opf |
| `desc.txt` | 簡介，不含 HTML。沒有簡介時會略過 | desc.txt |
| `reader.txt` | 朗讀者。沒有朗讀者時會略過 | reader.txt |

這些檔案加上資料夾結構，就是 Audiobookshelf 用來讀取一本書詳細資料的來源，所以它看到的書會跟 ABM 看到的一樣。

## 什麼時候寫入

每次新增、匯入或重新整理一本書時，都會寫入 `metadata.json`。

另外四個在 **Settings > Metadata > Files to Create** 底下各有一個開關，預設全部開啟。只有對應的觸發條件也開著時才會寫入：**Create on Book Add**（關閉）、**Create on Import**（開啟，涵蓋下載、書庫匯入和 Audible 下載）和 **Create on Refresh**（關閉）。**Overwrite Existing** 是關閉的，所以已經存在的檔案會保留。書的資料夾還不存在時，什麼都不會寫。

編輯對話框裡的 **Write to Directories** 也會寫入這四個檔案，對象可以是一本書，或是一批選取的系列和作者。請看〈[中繼資料設定](/zh-tw/settings/metadata/)〉。

## 封面比較特別

你自己選的封面會被鎖定。請看〈[封面鎖定](/zh-tw/metadata/cover-lock/)〉。

## 匯入時

匯入時也會把書現有的非音訊檔案一起帶過來，由 **Media Management > Importing** 控制。當來源裡有 `.opf`、簡介或朗讀者檔案時，ABM 每種最多只取一個，並命名為 `desc.txt` 和 `reader.txt`。已經存在的目的地檔案不會被動到，新的封面也絕對不會覆蓋現有的 `cover.*`。

## 硬連結

硬連結的匯入會讓原始檔保持原樣。ABM 寫入這些檔案時，會寫一個新檔案，而不是直接修改原檔，所以你匯入的來源內容會保持不變。

## 要注意的地方

- 帶有 ABM 自己區塊的 `metadata.json` 由 ABM 處理。其他工具的 `metadata.json` 則依照 Book info files 開關處理。
- 在好幾本書共用的資料夾裡，只有以這本書的音訊命名的檔案才屬於它。
- 刪除一本書時，會一併移除以那本書的檔案命名的附屬檔案。
