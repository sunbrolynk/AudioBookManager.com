---
title: 轉換設定
description: 預設值、編解碼器選項、章節、中繼資料、資源回收和 ffmpeg。
---

**Settings > Conversions** 設定〈[轉換](/zh-tw/using/conversions/)〉的預設值。每個工作都可以覆寫它們。

## 一般

| 設定 | 預設值 | 作用 |
|---|---|---|
| Enable Conversions | 開啟 | 關閉後，建立、批次排入佇列或重試轉換都會被以 HTTP 409 拒絕，已在佇列裡的工作會帶著相應的訊息失敗，**Auto-Reformat on Import** 也不會排任何工作 |
| Conversion Folder | 空白 | 暫存工作空間。空白時使用系統的暫存資料夾 |
| Concurrent Conversions | 2 | 1 到 4。讓這個值乘以 **Threads Per Job** 不超過你的核心數。超過時頁面會警告 |
| Threads Per Job | Auto | 每個工作的 FFmpeg 執行緒數，在進階檢視裡。Auto 會替 ABM 留兩個核心，把其餘核心分給同時執行的工作，所以 8 核、2 個並行工作時每個工作 3 個執行緒。也可以選固定數量 |
| Process Priority | Normal | Low 讓系統其他部分保持順暢，High 會比較快完成 |

## 音質預設值

| 設定 | 預設值 |
|---|---|
| Default Output Format | M4B（另有 MP3、M4A、FLAC、Opus） |
| Default Bitrate | 128 kbps（64、96、128、192、256，或選 Copy 不重新編碼） |
| Default Sample Rate | Auto 不指定取樣率，交給 FFmpeg 決定。或選 22050、44100、48000 Hz，會重新取樣。Opus 只接受某些取樣率，所以 22050 會變成 24000，44100 會變成 48000（記錄裡會說明） |
| Default Channels | Auto 保持來源檔案的聲道配置。Mono 混成單一聲道，檔案更小。Stereo 強制為兩個聲道 |

取樣率和聲道這兩份清單只接受頁面提供的值。儲存的值無效時，會以 Auto 載入。

## 編解碼器選項

| 格式 | 編碼器 | 選項 |
|---|---|---|
| M4B、M4A | AAC | AAC Profile（預設 AAC-LC）和 AAC VBR，品質 1 到 5。VBR 關閉時使用位元率。AAC-LC 是唯一的設定檔，因為編碼器做不了 HE-AAC。已儲存的 HE 設定檔會以 AAC-LC 載入 |
| MP3 | LAME | VBR 品質 0 到 9（預設 4）和 Joint Stereo（開啟）。關閉 VBR 時才會套用位元率 |
| Opus | libopus | 可變位元率（開啟）和 Application：Audio（預設）、VoIP 或 Low Delay |
| FLAC | FLAC | 壓縮等級 0 到 12（預設 5）。會忽略位元率 |

位元率選 **Copy** 的話，會跳過重新編碼，所有編解碼器選項也都不會用到。

## 章節處理

| 設定 | 預設值 | 作用 |
|---|---|---|
| Default Chapter Behavior | Auto | 有章節就保留，沒有就產生。其他選項：只保留、一律產生、不處理 |
| Chapter Naming Format | `Chapter {n}` | ABM 必須自己編章節時用的名稱。`{n}` 是編號，`{title}` 是來源檔案的名稱。檔案裡或 Libex 提供的章節標題會保留 |
| Silence Detection | 關閉 | 對沒有章節的檔案，ABM 會在音訊裡最長的停頓處產生章節。Split Chapters 會用到它，Libex 沒有章節時對單一檔案的 Ensure Chapters 也會用到。關閉時，分割這樣的檔案會失敗 |
| Target Chapter Length | 600 s | Silence Detection 開啟時顯示，60 秒或以上。每個章節結束在這個長度一半範圍內最長的停頓處，沒有停頓就結束在這個長度。較短的尾段併入最後一個章節，章節涵蓋整個檔案 |
| Chapter Image Handling | Keep in file | 或移除，或擷取到資料夾 |

## 中繼資料處理

| 設定 | 預設值 |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | 開啟（只用 JPEG，為了 Audiobookshelf） |
| Cover Art Max Size | 1000x1000 |

## 檔案管理

| 設定 | 預設值 | 作用 |
|---|---|---|
| Enable Recycle Bin | 開啟 | 原始檔會進資源回收筒，而不是直接刪除 |
| Recycle Bin Path | 空白 | 空白時使用 `/config/recycle/conversions` |
| Retention Period | 7 天 | 比這更舊的項目會被資源回收筒清理工作刪除。0 表示永久保留 |
| Auto-Empty When Bin Is Large | 關閉 | 啟用下面的門檻 |
| Auto-Empty Threshold | 10 GB | 轉換後，如果資源回收筒裡的內容超過這個值，最舊的項目會被刪除 |
| Delete Original | 關閉 | 每個工作的預設值，可以覆寫 |
| Update Library Paths | 開啟 | 書的紀錄會跟著轉換後的檔案更新 |
| Auto-Reformat on Import | 關閉 | 用上面的預設值，把新匯入、但格式不同的書轉換掉 |
| Backup Original Metadata | 關閉 | 轉換前，會在書所在資料夾裡的 `.metadata_backup` 資料夾中寫一個 JSON 檔。裡面列出每個原始檔案的名稱、格式和大小，以及其中內嵌的標籤和章節 |

## 進階 FFmpeg

FFmpeg Path（空白時從 PATH 找）、Custom FFmpeg Arguments（附加在每一條指令後面；參數錯誤會讓轉換失敗）、Logging Level（預設 error）和 Keep FFmpeg Logs（關閉）。
