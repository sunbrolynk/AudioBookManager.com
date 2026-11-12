---
title: 媒體管理
description: 根資料夾、匯入、額外檔案、資源回收、掃描、升級和權限。
---

**Settings > Media Management** 控制書放在哪裡，以及檔案怎麼搬進來。標示為進階的設定要打開 **Show Advanced** 才會出現。

## 根資料夾（Root Folders）

根資料夾是 ABM 管理書的目錄。用 **Add Root Folder** 新增，它會打開一個可以直接輸入路徑的資料夾瀏覽器。ABM 也可以列出根資料夾底下還沒對應的資料夾並匯入它們。新增根資料夾時，會檢查它的剩餘空間和是否支援硬連結。移除根資料夾時會問你要怎麼處理：**Remove from ABM only**（預設）會忘掉它底下的書，但留下檔案；**Delete the books and their files** 會永久刪除那個路徑底下的所有東西，而且不經過資源回收筒。有書的根資料夾要你打字確認才能移除。

預設根資料夾是新書要放進去的地方，也決定了書庫匯入能不能提供硬連結。

## 資料夾（Folders）

| 設定 | 預設值 | 作用 |
|---|---|---|
| Create Empty Book Folders | 關閉 | 在新增書、更換根資料夾和磁碟掃描時，建立缺少的書資料夾。**Delete empty folders** 開啟時會忽略這個設定，免得建了資料夾又馬上被刪掉。 |
| Delete empty folders | 關閉 | 在磁碟掃描時和刪除書的檔案時，刪掉空的書資料夾 |

## 匯入（Importing）

| 設定 | 預設值 | 作用 |
|---|---|---|
| Skip Free Space Check | 關閉 | 給 ABM 偵測不到根資料夾剩餘空間的情況用 |
| Minimum Free Space | 100（MB） | 匯入後剩餘空間會低於這個值時，就拒絕匯入 |
| Use Hardlinks instead of Copy | 開啟 | 用在已完成的下載：用硬連結而不是複製，這樣做種時就不會佔兩倍空間。必須在同一個磁碟區。 |
| Library Import | Copy | 〈[書庫匯入](/zh-tw/library-import/)〉的預設方式：複製、硬連結或移動。在預設根資料夾檢查過並確認支援之前，硬連結會是灰色的。 |
| Import Extra Files | 開啟 | 要不要把非音訊檔案一起帶過來的總開關。適用於書庫匯入、手動匯入和已完成的下載 |
| Extra File Extensions（進階） | 空白 | 要一起帶進來的其他檔案類型，會保留原本的檔名，例如 `srt, lrc`。有沒有加點都可以，用逗號或空格分隔。被封鎖的類型（例如執行檔和沒下載完的檔案）無法儲存。**Import Extra Files** 關閉時這個設定會停用 |
| Preferred Cover（進階） | Matched | 兩者都有時，用對上版本的封面，或資料夾裡最好的那張圖 |

**Import Extra Files** 會把一本書的其他檔案跟音訊一起帶進來。有五個開關決定要帶哪些種類；符合 **Extra File Extensions** 的檔案，就算它的種類關掉了也還是會帶進來：

| 開關 | 預設值 | 包含 |
|---|---|---|
| Cover art | 開啟 | 封面，加上封底和小冊子的掃描檔 |
| Book info files | 開啟 | metadata.json、.opf、.nfo、desc.txt、reader.txt |
| PDFs and companion docs | 關閉 | 跟書一起附的 PDF |
| Chapters, transcripts and playlists | 開啟 | .cue、章節清單、字幕、歌詞、播放清單。裡面的檔名會改寫成重新命名後的音訊檔名。 |
| Audible originals and ebooks | 關閉 | .aax/.aaxc、兌換券、epub 之類的 |

下載到一半的檔案和執行檔永遠不會被匯入。ABM 自己的 `metadata.json` 一律由 ABM 處理。

這裡的硬連結跟 **Use Hardlinks instead of Copy** 不一樣，那個是給下載用的。書庫匯入的預設值只是 Add to Library 對話框預先選好的選項。

## 檔案管理（File Management）

| 設定 | 預設值 | 作用 |
|---|---|---|
| Unmonitor Deleted Books | 關閉 | 從磁碟刪掉的書會被取消監控 |
| Change File Date | None | 在匯入和重新掃描時更改檔案日期 |
| Enable Recycling Bin | 開啟 | 刪除的書檔案會移到回收筒，而不是直接刪除 |
| Recycling Bin | 空白 | 回收筒的位置。空白時使用 ABM 的預設位置（`/config/recycle/media`） |
| Recycling Bin Cleanup | 7（天） | 0 代表停用自動清理 |
| Library Scan Interval | 24 | 自動掃描之間間隔幾小時 |
| Watch for Changes | 開啟 | 檔案新增、移除或變更時就掃描 |
| Cover Cache Workers | 4 | 快取封面時同時下載幾張，範圍 1 到 16 |

## 品質升級（Quality Upgrades）

| 設定 | 預設值 | 作用 |
|---|---|---|
| Automatic Upgrade Search | 開啟 | 定期替已經下載、但還沒達到門檻的書搜尋更好的發行版本。只有真的是升級時，新的版本才會取代你現有的。 |
| Upgrade Search Interval | 24（小時） | 多久執行一次 |

## 權限（Permissions，進階）

| 設定 | 預設值 | 作用 |
|---|---|---|
| Set Permissions | 關閉 | 匯入和重新命名時執行 chmod |
| chmod Folder | 755 | 資料夾和檔案的八進位權限，檔案不會有執行權限 |
| chown Group | 空白 | 群組名稱或 gid。在遠端檔案系統上請用 gid |

## 要注意的地方

- 如果啟用了資源回收筒、但它的資料夾無法使用，需要用到回收筒的刪除會失敗，而不是直接永久刪除。
- 硬連結只能在同一個檔案系統裡使用。無法建立連結的檔案會改用複製，絕對不會被移動，並會算進匯入結果裡。

## Book Naming

Book Naming 決定我怎麼替檔案和資料夾命名。它和 Media Management 的其他設定一起，用頁面上唯一的 Save 儲存。它有 Rename Books、Replace Illegal Characters、Colon Replacement（附自訂選項），以及 Standard Book、Author Folder、Series Folder、Standalone Folder 和 Book Folder 的格式。每個格式都有即時範例，權杖清單會列出所有可用的權杖。

Library、Series 和 Authors 裡也有針對所選書籍的 **Organize** 操作，單本書的頁面也有。它會先開啟每項變更的預覽，你確認之前什麼都不會移動。接著 Organize 會移動並重新命名：把每本書的資料夾移到命名設定指定的位置，並重新命名它的檔案。它以工作的形式執行，你可以追蹤進度、取消，重新啟動後還能從停下的地方繼續。同一時間只會執行一個 Organize。沒有復原，所以請仔細看預覽。批次重新命名仍然在 Library、Series 和 Authors 裡，叫做 **Rename Files**。

如果 Organize 被中斷，下一次執行會從停下的地方繼續。中斷的那次執行已經在磁碟上移動或重新命名的書，會在新位置被找到並更新紀錄，所以不會有東西被移動兩次。預覽會把這樣的書顯示為已移動或已重新命名，結果裡則計為已核對（reconciled）。只有當我能證明這個資料夾屬於這本書時才會核對：書的檔案必須與我記錄的相符，且沒有別的書佔用這個資料夾。否則這本書會被略過，並附上原因。仍然沒有復原。

預覽只列出會變更的書。勾選 **Show all selected books** 就能看到其餘的書。它是分頁載入的，所以選取很多時用 **Load more** 繼續往下看。預覽標題會統計有多少本會變更、多少本會被略過。

在資料夾不在命名設定所指位置的書的頁面上，會有提示，顯示它將移到的資料夾，並附上 Organize 按鈕。

如果一本書的新資料夾會位於它目前所在的資料夾裡面，Organize 會在那裡建立子資料夾，只把這本書自己的檔案移進去：音訊，加上我為它保存的封面、章節和其他附屬檔案。資料夾裡的其他內容留在原處。預覽會顯示「Moves into a subfolder」並列出留下的內容，結果對話框會列出原地保留的檔案。如果移動中途失敗，已移動的檔案會被放回去。從編輯對話框把一本書的資料夾移到它自己的子資料夾裡，做法也一樣。

Library Import 遵循同樣的命名設定，包括加入已經位於根資料夾裡的書，或把檔案移進我已有的書時。Rename Books 關閉時，每個檔案保留原本的名稱。如果某個檔案的名稱會與同一批的另一個檔案，或書的資料夾裡已有的檔案衝突（不分大小寫），就改用格式產生的名稱，匯入會記下哪些檔案這樣處理了。Rename Books 開啟時，名稱會相同的檔案按位置編號，所以 Manual Import 不會漏掉任何一個。

預設版面是 `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`。單本書沒有系列資料夾，也沒有卷號：`Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`。沒有位置的系列書同樣以年份開頭。未知的年份會被省略，絕不會寫成 `(Unknown)`。

如果你熟悉 Sonarr：這就是 Sonarr 的 Media Management，連命名格式也包含在內。
