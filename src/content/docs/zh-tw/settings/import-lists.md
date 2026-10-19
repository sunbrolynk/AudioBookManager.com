---
title: 匯入清單
description: 從 MyAnonamouse 或 RSS 訂閱拉進想要的書。
---

**Settings > Import Lists** 會從外部來源自動新增書。

## 來源

- **MAM**：MyAnonamouse 的願望清單，使用 **MAM Session ID**。
- **RSS**：你提供的 **RSS Link**，可以另外填 **Website URL**。網站必須是 http 或 https。

## 每個清單的設定

| 欄位 | 作用 |
|---|---|
| Name | 名稱 |
| Monitor | 它新增的書要設成 Monitored 還是 Unmonitored |
| Root Folder | 書要放到哪裡 |
| Quality Profile | 某個設定檔，或 Inherit（使用預設） |
| Tags | 套用在清單新增的所有東西上 |

**Sync Now** 會馬上執行清單同步。

## 選項

| 設定 | 預設值 | 作用 |
|---|---|---|
| RSS Sync Interval | 12（小時） | 清單多久同步一次。0 代表關閉同步 |
| Clean Library Level | Disabled | 書離開清單時要怎麼處理 |

Clean Library Level 的選項：Disabled、Log Only、Keep and Unmonitor Audiobook、Remove Audiobook and Keep Files、Remove Audiobook and Delete Files。最後一個會刪除檔案，確定要這樣做才選它。

## 排除項目

**Import List Exclusions** 會依 **ASIN**、**Title** 和 **Year** 封鎖一本書，讓清單永遠不會再新增它。用 **Lookup ASIN** 來填入這些欄位。

## 要注意的地方

- 儲存過的 RSS 連結或 Session ID 永遠不會再顯示。更改網址時需要重新輸入密鑰。
- 清單會觸發 On Import List Synced 和 On Import List New Items 這兩個通知。請看〈[Connect](/zh-tw/settings/connect/)〉。
