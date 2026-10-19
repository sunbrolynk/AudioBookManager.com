---
title: 書庫
description: 書、作者和系列，以及 ABM 怎麼追蹤它們的狀態。
---

**Library** 選單有三個清單：**Books**、**Series** 和 **Authors**。**Add New** 和 **Library Import** 會把東西放進這些清單。**Audible Library** 和 **Conversions** 在它們各自的頁面說明。

## 書

每本書可以是一列概覽、一張海報或一行表格（切換檢視方式的按鈕在工具列上）。每本書都有一個狀態：

- **Wanted**：已監控，還沒有檔案。ABM 會去搜尋它。
- **Downloaded**：檔案在磁碟上。
- **Missing Files**：這本書下載過，但它的檔案已經不在 ABM 預期的地方了。
- **Unmonitored**：ABM 不會去動它。

打開一本書就能看到它的詳細資料頁：檔案、中繼資料、歷史、ABM 測得的品質，以及 Refresh & Scan 和編輯對話框（見下方）等動作。請看〈[附屬檔案](/zh-tw/using/sidecars/)〉。

如果你熟悉 Sonarr：一本書就是一集，一個系列就是把一季和一部劇合在一起，作者則是把兩者分組的一種方式。不同的是，一本書可以屬於好幾個系列，當 ABM 需要選一個時，會用主要系列（集數最小的那個）。

## 系列

**Library > Series** 會列出所有系列，以及已擁有、想要和檔案遺失的數量，可以用 Overview 或 Posters 檢視。系列頁面會顯示整個目錄，包括你沒有的書，可以篩選成 All、In Library 或 Not in Library。**Add Remaining** 或 **Select to Add** 會把缺少的書加進來，狀態是想要；**Refresh Series** 會重新拉取目錄。**Monitor New Books**（All 或 None）決定之後才出的書要不要自動加成想要。請看〈[系列追蹤](/zh-tw/using/series-tracking/)〉。

## 作者

**Library > Authors** 會列出作者，可以用 Overview 或 Posters 檢視。作者頁面會依系列分組顯示他的目錄，每個系列都有已下載數和總數，另外還有他的品質設定檔、類型和評分。**Refresh Catalog** 會重新拉取目錄，**Search Author** 會搜尋這位作者狀態是想要的書。**Monitor New Books** 的用法跟系列一樣，作者一開始是 None。

只要系列或作者在書庫裡還有書，就不能刪除。請先移除那些書。

## 品質設定檔的繼承

一本書的品質設定檔依序來自：它自己的覆寫設定、它的主要系列、它的主要作者，最後才是預設設定檔。請看〈[設定檔](/zh-tw/settings/profiles/)〉。

## 編輯對話框

書的編輯對話框修改的是 ABM 對它自己的設定，而不是它的中繼資料：

- **Monitored**
- **Quality Profile**（同時編輯好幾本時會顯示 No Change）
- **Path**，用於單本書（有一個重新計算路徑的按鈕）；選取多本時則是 **Root Folder**
- **Tags**
- **Write to Directories**：cover.jpg、desc.txt、reader.txt 和一個 OPF（核取方塊上寫的是「metadata.opf」；檔案會以書的第一個音訊檔命名，例如 `Dune.opf`，沒有音訊時則是 `title.opf`）
- **Write to Audio Files**：寫入中繼資料標籤

同一個對話框也可以對系列和作者打開，並套用到它們的每一本書。寫入選項會在你儲存時執行。

## 標籤

書、作者和系列都可以加上標籤。標籤會影響索引器、通知、匯入清單和設定檔，也會用來篩選行事曆訂閱。請看〈[標籤](/zh-tw/settings/tags/)〉。

## 選取

選取多列就能一次對好幾個項目動作：監控、搜尋、加標籤、重新命名、刪除。手機上的用法請看〈[在手機上使用](/zh-tw/phone/)〉。
