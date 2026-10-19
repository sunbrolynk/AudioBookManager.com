---
title: Audible 設定
description: 帳號、同步排程、下載和診斷。
---

**Settings > Audible** 是連結帳號、調整同步和下載的地方。這個功能怎麼運作，請看〈[Audible](/zh-tw/audible/)〉頁面。

## 帳號

連結帳號需要 **Marketplace**、**Display Name**，以及你登入後 Amazon 導回來的 **Redirect URL**。每個帳號各自保有自己的書庫。如果帳號需要重新登入，就在同一個帳號上重新登入，不要把它刪掉。刪除會丟掉它的書庫，並把它的裝置從 Audible 移除。

## 排程

| 設定 | 作用 |
|---|---|
| Auto Sync | 依排程同步書庫 |
| Sync on Account Add | 帳號一連結好就同步 |
| Frequency | 每天、每週或每月。選每週會多出 Day of Week，選每月會多出 Day of Month（1-28）。 |
| Time | 時和分 |
| Use CRON Expression | 用自訂的 cron 運算式取代上面的選項 |

## 下載設定（Download Settings）

| 設定 | 預設值 | 作用 |
|---|---|---|
| Auto Add to Library | 開啟 | 下載好的書會加進 ABM 的書庫 |
| Concurrent Downloads | 2 | 1 到 5。越高越快，但可能會碰到 Audible 的頻率限制。 |
| Preferred Quality | High Quality | High、Normal 或 Low |
| Delete Encrypted Files | 開啟 | 加密的 AAXC 檔解密成 M4B 之後就刪掉 |
| Temp Download Path | 空白 | 空白時使用系統的暫存資料夾 |

下載失敗時會自動重試幾次，每次間隔會越拉越長；如果服務中斷超過這段時間，任務會重新排入佇列，最多持續六小時。授權被拒、沒擁有的書或解密失敗則只會失敗一次，不會重試。

## 連線診斷（Connection Diagnostics）

選一個帳號，然後執行診斷。它會測試 FFmpeg、憑證、API 連線和下載能力，並顯示 Audible 看到的你的對外 IP。
