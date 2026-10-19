---
title: Audible
description: 連結 Audible 帳號、同步，並把你的書庫鏡像到 ABM。
---

ABM 可以連結一個或多個 Audible 帳號，並在 **Audible Library** 頁面上為每個帳號保留一份書庫副本。你擁有的書都能下載、解密成 M4B，再像其他書一樣匯入。開啟鏡像後，每次同步也會把 ABM 裡缺少的書加進來並下載。

## 帳號

在 **Settings > Audible** 新增帳號。你可以連結不只一個帳號，每個帳號各自保有自己的書庫。

如果某個帳號登入失效，它會在 Settings 和健康狀態頁上顯示需要重新登入。在同一個帳號上重新登入就好，它會保留原本的書庫並換上新的憑證。不要用刪除帳號的方式來解決：刪除會把它的書庫資料表一起丟掉，也會把它的裝置從 Audible 移除。

## 同步

同步會從 Audible 重新整理每個帳號的書庫。Audible 設定頁會顯示進度和結果，失敗時會列出真正的錯誤。它也會依排程自動執行。

**Audible Library** 頁面會列出所有同步過來的內容，可以篩選成 All、Not in Library、Downloaded、Wanted 或 Downloadable Only。

## 把 Audible 書庫鏡像到 ABM（Mirror Audible library to ABM）

:::caution[下一個版本推出]
這個功能還沒有出現在任何已發行的版本裡。
:::

鏡像（Mirror）會讓你的 ABM 書庫跟著 Audible 書庫走。

- 預設是開啟的。
- 它會加入你買的書和免費的書，Podcast 不包含在內。
- 每次同步最多處理 25 本。
- 開啟時會先請你確認，並告訴你下一次同步會加入並下載幾本。
- Plus Catalog 的書和借閱的書不包含在內；書庫所在的磁碟空間不足時，也不會排入任何下載。
- 一直下載失敗的書，每次重試前會等更久：先 1 小時，再來 6 小時，然後 24 小時。
- 它也會下載你想要、但還沒有檔案的書。
- 從 Audible 移除的書會繼續留在 ABM。

## 設定

排程、下載行為和診斷資訊都在〈[Audible 設定](/zh-tw/settings/audible/)〉。
