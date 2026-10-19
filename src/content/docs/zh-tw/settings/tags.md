---
title: 標籤
description: 標籤和自動標籤規則。
---

**Settings > Tags** 管理標籤和 **Auto Tagging**。

## 標籤

標籤是一個詞：小寫、沒有空格、沒有逗號，最多 100 個字元。輸入 `Sci-Fi` 會變成 `sci-fi`。標籤可以加在書、作者和系列上，並且會被索引器、延遲設定檔和發行設定檔、匯入清單、Connect 代理和行事曆訂閱拿來比對。

如果你熟悉 Sonarr：標籤的用法一模一樣。有標籤的設定檔只會套用在帶有那個標籤的東西上。

## 自動標籤

自動標籤是一條規則，會替符合條件的書加上標籤。

| 欄位 | 作用 |
|---|---|
| Name | 名稱 |
| Enable | 開啟或關閉 |
| Remove Tags Automatically | 書不再符合條件時，把標籤拿掉 |
| Tags | 要套用的標籤 |
| Conditions | 書必須符合的條件。每個條件都可以設成反向或必要 |

條件類型：Genre、Monitored、Language、Root Folder、Status、Tag、Year（範圍）、Series Type、Author（包含）、Narrator（包含）、Runtime in minutes（範圍）和 Rating（範圍）。

**Apply** 會立刻執行選取的規則。書有變動時，規則也會執行。

## 要注意的地方

- 參照到已刪除的標籤或根資料夾的規則會整個被跳過，加標籤和拿掉標籤都不做，所以壞掉的規則永遠不會貼錯或拔掉標籤。
- Remove Tags Automatically 只會拿掉這條規則會加上的標籤。
