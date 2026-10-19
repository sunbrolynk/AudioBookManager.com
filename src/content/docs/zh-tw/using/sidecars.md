---
title: 附屬檔案
description: ABM 寫在書旁邊的封面、OPF、簡介、朗讀者和 cue 檔。
---

附屬檔案是放在音訊旁邊的小檔案。Audiobookshelf 和其他播放器會讀取它們。ABM 可以寫入這些：

| 檔案 | 內容 |
|---|---|
| `cover.jpg` | 書的封面 |
| `.opf` | OPF 格式的中繼資料，Audiobookshelf 讀得懂。以書的第一個音訊檔命名（例如 `Dune.opf`），書沒有音訊時則是 `title.opf` |
| `desc.txt` | 簡介 |
| `reader.txt` | 朗讀者 |
| `.cue` | 來自 Libex 的章節（下一個版本推出） |

## 什麼時候寫入

在 **Settings > Metadata** 裡，**Create on Book Add**、**Create on Import** 和 **Create on Refresh** 決定什麼時候寫入。預設只有匯入時會寫。**Overwrite Existing** 是關閉的，所以已經存在的檔案會保留。你也可以從編輯對話框寫入，對象可以是一本書，或是一批選取的系列和作者。請看〈[中繼資料設定](/zh-tw/settings/metadata/)〉。

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
