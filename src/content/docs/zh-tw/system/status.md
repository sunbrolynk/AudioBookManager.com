---
title: 狀態
description: 健康檢查，以及看看 ABM 正在做什麼。
---

**System > Status** 會執行健康檢查，並列出所有有問題的地方：連線失敗的下載用戶端和索引器、根資料夾的問題，以及對外連線的問題。它也會顯示資料庫連線池的使用狀況。沒有問題時，它會顯示「All systems healthy」。

健康檢查也會在背景每 6 小時執行一次。Connect 可以在 **On Health Issue** 和 **On Health Restored** 時發送通知。請看〈[Connect](/zh-tw/settings/connect/)〉。

如果你熟悉 Sonarr：這就像是把 System > Status 和 Health 放在同一頁。

## 要注意的地方

- 停用的下載用戶端不會被當成不健康。
- 需要重新登入的 Audible 帳號，除了會出現在 Audible 設定頁，也會出現在這裡。
