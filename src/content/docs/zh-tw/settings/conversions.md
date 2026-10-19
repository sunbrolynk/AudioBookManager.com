---
title: 轉換設定
description: 預設值、編解碼器選項、章節、中繼資料、資源回收和 ffmpeg。
---

**Settings > Conversions** 設定〈[轉換](/zh-tw/using/conversions/)〉的預設值。每個工作都可以覆寫它們。

## 一般

| 設定 | 預設值 | 作用 |
|---|---|---|
| Enable Conversions | 開啟 | 總開關 |
| Conversion Folder | 空白 | 暫存工作空間。空白時使用系統的暫存資料夾 |
| Concurrent Conversions | 2 | 介面上可設 1 到 4。同時執行數乘上執行緒數要低於你的核心數 |
| Process Priority | Normal | Low 讓系統其他部分保持順暢，High 會比較快完成 |

## 音質預設值

| 設定 | 預設值 |
|---|---|
| Default Output Format | M4B（另有 MP3、M4A、FLAC、Opus） |
| Default Bitrate | 128 kbps（64、96、128、192、256，或選 Copy 不重新編碼） |
| Default Sample Rate | Auto，跟來源一致 |
| Default Channels | Auto，跟來源一致 |

## 編解碼器選項

AAC Profile（預設 AAC-LC，另有 HE-AAC、HE-AACv2）和 AAC VBR；MP3 VBR 品質和聯合立體聲；FLAC 壓縮等級（預設 5）；Opus 可變位元率（開啟）和應用類型（預設 Audio，另有 VoIP 和 Low Delay）。

## 章節處理

| 設定 | 預設值 | 作用 |
|---|---|---|
| Default Chapter Behavior | Auto | 有章節就保留，沒有就產生。其他選項：只保留、一律產生、不處理 |
| Chapter Naming Format | `Chapter {n}` | 產生章節名稱時用的範本 |
| Silence Detection | 關閉 | 實驗性功能。嘗試從靜音段落找出章節 |
| Minimum Chapter Length | 60 秒 | 用於偵測出來的章節 |
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
| Retention Period | 7 天 | 0 代表停用自動清理 |
| Auto-Empty on Low Disk Space | 關閉 | 空間低於門檻時清空回收筒 |
| Auto-Empty Threshold | 10（%） | 剩餘空間的門檻 |
| Delete Original | 關閉 | 每個工作的預設值，可以覆寫 |
| Update Library Paths | 開啟 | 書的紀錄會跟著轉換後的檔案更新 |
| Auto-Reformat on Import | 關閉 | 用上面的預設值，把新匯入、但格式不同的書轉換掉 |
| Backup Original Metadata | 關閉 | 先把原始標籤存成 `.json` 附屬檔案 |

## 進階 FFmpeg

FFmpeg Path（空白時從 PATH 找）、Threads Per Job（0 代表自動選擇，為 CPU 核心數減 2）、Custom FFmpeg Arguments（附加在每一條指令後面；參數錯誤會讓轉換失敗）、Logging Level（預設 error）和 Keep FFmpeg Logs（關閉）。
