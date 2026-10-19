---
title: 活動
description: 佇列、歷史和封鎖清單。
---

## 佇列（Queue）

你的下載用戶端正在處理的東西。每一列的動作包括 **Grab now**、**Import Now**、**Manual Import** 和 **Retry Now**；當完成的下載放在 ABM 看不到的路徑時，還會有 **Configure remote path mapping**。

從佇列移除一列時，會依照下載用戶端設定裡的 **Queue Page Remove Action** 處理：只從 ABM 移除、從用戶端移除但保留檔案，或從用戶端移除並刪除檔案。請看〈[下載用戶端](/zh-tw/settings/download-clients/)〉。

## 歷史（History）

抓取、匯入、失敗和升級。抓取失敗時會告訴你試過哪些用戶端。

## 封鎖清單（Blocklist）

ABM 不會再抓的發行版本，通常是因為它們失敗過。**Remove from Blocklist** 可以把某一個放回來。下載處理裡的 **Redownload Failed** 會把失敗的發行版本加進這裡，然後重新搜尋。

## 跟事件不一樣

這些頁面講的是下載。ABM 裡全系統發生過什麼事的紀錄，是〈[活動記錄](/zh-tw/system/activity-log/)〉。
