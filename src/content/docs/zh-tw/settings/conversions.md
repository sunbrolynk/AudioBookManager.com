---
title: 轉換設定
description: 預設值、編解碼器選項、章節、中繼資料、資源回收和 ffmpeg。
---

**Settings > Conversions** 設定〈[轉換](/zh-tw/using/conversions/)〉的預設值。每個工作都可以覆寫它們。

## 一般

| 設定 | 預設值 | 作用 |
|---|---|---|
| Enable Conversions | 開啟 | 關閉的話，Conversions 頁面就不能轉換。**Auto-Reformat on Import** 是另外分開的 |
| Conversion Folder | 空白 | 暫存工作空間。空白時使用系統的暫存資料夾 |
| Concurrent Conversions | 2 | 1 到 4。這個數字乘上 **Threads Per Job**（在本頁最下面的 **Advanced FFmpeg** 裡）要小於或等於你的核心數。超過的話頁面會警告你 |
| Process Priority | Normal | Low 讓系統其他部分保持順暢，High 會比較快完成 |

## 音質預設值

| 設定 | 預設值 |
|---|---|
| Default Output Format | M4B（另有 MP3、M4A、FLAC、Opus） |
| Default Bitrate | 128 kbps（64、96、128、192、256，或選 Copy 不重新編碼） |
| Default Sample Rate | Auto，跟來源一致。也可以選 22050、44100 或 48000 Hz |
| Default Channels | Auto，跟來源一致。也可以選 Mono 或 Stereo |

## 編解碼器選項

| 格式 | 編碼器 | 選項 |
|---|---|---|
| M4B、M4A | AAC | AAC Profile（預設 AAC-LC）和 AAC VBR，品質 1 到 5。關閉 VBR 時才會套用位元率。清單裡有 HE-AAC 和 HE-AACv2，但目前實際上還是用 AAC-LC 編碼 |
| MP3 | LAME | VBR 品質 0 到 9（預設 4）和 Joint Stereo（開啟）。關閉 VBR 時才會套用位元率 |
| Opus | libopus | 可變位元率（開啟）和 Application：Audio（預設）、VoIP 或 Low Delay |
| FLAC | FLAC | 壓縮等級 0 到 12（預設 5）。會忽略位元率 |

位元率選 **Copy** 的話，會跳過重新編碼，所有編解碼器選項也都不會用到。

## 章節處理

| 設定 | 預設值 | 作用 |
|---|---|---|
| Default Chapter Behavior | Auto | 有章節就保留，沒有就產生。其他選項：只保留、一律產生、不處理 |
| Chapter Naming Format | `Chapter {n}` | ABM 必須自己編章節時用的名稱。`{n}` 是編號，`{title}` 是來源檔案的名稱。檔案裡或 Libex 提供的章節標題會保留 |
| Silence Detection | 關閉 | 實驗性功能。只在分割一本沒有章節的書時使用：ABM 會在靜音處切開。關閉的話，這種分割會失敗 |
| Minimum Chapter Length | 60 秒 | 靜音偵測切出來的章節最短多長 |
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
| Retention Period | 7 天 | 設定回收筒裡項目顯示的到期日。目前到了那天還不會真的刪除它們 |
| Auto-Empty on Low Disk Space | 關閉 | 開啟下面那個門檻 |
| Auto-Empty Threshold | 10 | 每次轉換後，如果回收筒超過這麼多 GB，就會刪除最舊的項目。頁面上顯示成百分比，但實際上是當成 GB 讀取 |
| Delete Original | 關閉 | 每個工作的預設值，可以覆寫 |
| Update Library Paths | 開啟 | 書的紀錄會跟著轉換後的檔案更新 |
| Auto-Reformat on Import | 關閉 | 用上面的預設值，把新匯入、但格式不同的書轉換掉 |
| Backup Original Metadata | 關閉 | 轉換前，先把原始檔案的紀錄（名稱、格式、大小）存到它們旁邊的 `.metadata_backup/`。它不會儲存音訊標籤 |

## 進階 FFmpeg

FFmpeg Path（空白時從 PATH 找）、Threads Per Job（0 代表自動選擇，為 CPU 核心數減 2）、Custom FFmpeg Arguments（附加在每一條指令後面；參數錯誤會讓轉換失敗）、Logging Level（預設 error）和 Keep FFmpeg Logs（關閉）。
