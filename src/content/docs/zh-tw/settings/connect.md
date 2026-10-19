---
title: 通知（Connect）
description: 通知、媒體伺服器和自訂指令碼。
---

**Settings > Connect** 會把事件送到其他地方。它叫做 Connect，跟 Sonarr 一樣。

## 代理（Agents）

**通知代理**：Discord、Slack、Telegram、Pushover、Pushbullet、Simplepush、ntfy、Gotify、Notifiarr、Email、SendGrid、Webhook 和 Apprise。**媒體伺服器**：Jellyfin 和 Emby。**其他**：Custom Script。Audiobookshelf 不是 Connect 的代理。

## 事件

每個連線可以選擇哪些事件會觸發它。

On Grab、On Import、On Upgrade、On Conversion、On Health Issue、On Health Restored、On Task Failed、On Application Update、On Grab Failed、On Import Failed、On Download Failed、On Conversion Failed、On Import List Synced、On Import List New Items、On Audible Download Done、On Audible Download Failed。

## 每個連線的設定

| 欄位 | 作用 |
|---|---|
| Name, Enable | 名稱和開關 |
| Include covers | 代理支援時，附上書的封面 |
| Tags | 只對有符合標籤的項目觸發 |
| Conditions | 針對作者或大小等欄位、以 AND 串起來的規則。格式錯誤的條件會直接通過，而不是讓通知消失 |
| Priority | 代理有支援時才有 |

**Test** 會送出一則測試訊息。**Test All** 會測試每一個連線。

## 自訂訊息

自訂訊息會改寫某個事件的文字。選一個 **Format**、一個 **Cover**（Auto 用書的封面，或 None，或 Custom URL），寫好 **Title** 和內文，點一下變數就能插入。每個事件的預設範本可以當成起點。預覽會顯示結果，你也可以透過某個連線送出測試。

## 要注意的地方

- Token 之類的密鑰會加密儲存，編輯時顯示為空白，留空就會保留原本的值。更改目的地時需要重新輸入。
- 關於中繼資料服務中斷的任務失敗通知，每次中斷只送一次，不是每次失敗都送，排程執行也絕對不會送。
- Webhook 標頭是一個 JSON 物件，會以密鑰的方式儲存。
