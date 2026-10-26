---
title: 一般
description: 主機、安全性、代理、記錄和備份。
---

**Settings > General** 有 Host、Security、Proxy、Logging 和 Backups 幾個區塊。Security 有[專屬頁面](/zh-tw/settings/security/)。

## 主機（Host）

| 設定 | 預設值 | 作用 |
|---|---|---|
| Bind Address | `*` | 要監聽的位址。需要重新啟動 |
| Port Number | 5173 | 需要重新啟動 |
| URL Base | 空白 | 路徑前綴，用在反向代理的子路徑，例如 `/audiobook-manager`。需要重新啟動 |
| Instance Name | Audiobook Manager | 顯示在分頁標題，也用作 syslog 的應用程式名稱 |
| Application URL | 空白 | 對外的網址，包含 `http(s)://`、連接埠和 URL base |
| Enable SSL | 關閉 | 由 ABM 自己提供 HTTPS。需要憑證路徑和金鑰路徑。需要重新啟動 |

在 Docker 裡，實際上真正有影響的是 `PORT` 環境變數和 compose 的連接埠對應。請看〈[環境變數](/zh-tw/configuration/)〉。

## 代理

ABM 連上網路取得中繼資料、封面和 Audible 頁面的方式。

| 設定 | 預設值 | 作用 |
|---|---|---|
| Use Proxy | 關閉 | 讓對外請求經過代理伺服器 |
| Proxy Type | HTTP | HTTP、HTTPS、SOCKS4 或 SOCKS5 |
| Hostname, Port | 空白 | 代理伺服器位址 |
| Username, Password | 空白 | 選填 |
| Test Connection | | 檢查代理伺服器 |

這個區塊還會顯示外部服務看到的你的對外 IP。包含內建 VPN 在內的連線選擇，預計在後續版本提供。

## 記錄（Logging）

| 設定 | 預設值 |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 天，0 代表永久保留 |
| Activity Log Retention | 90 天，0 代表永久保留 |
| Book History Retention | 0（保留） |
| Automatic Cleanup | 開啟 |
| Cleanup Time | 03:00 |
| SQL Logging | 關閉。非常冗長 |
| Parser Log Level, Matcher Log Level | Info。設成 Debug 時量會很大 |

請看〈[記錄檔](/zh-tw/system/logs/)〉和〈[活動記錄](/zh-tw/system/activity-log/)〉。

## 備份（Backups）

| 設定 | 預設值 | 作用 |
|---|---|---|
| Backup Folder | `/config/backups` | 備份存放的地方 |
| Automatic Backups | 關閉 | 排程備份 |
| Schedule Frequency | Daily | 每天、每週或每月，並指定日期和時間。或用 Use Cron Expression |
| Backup Retention | 28 天 | 0 代表永久保留 |
| Auto-Export on Backup | 開啟 | 每次備份後，把它送到標為 Auto 的匯出目標 |
| Export Targets | 無 | 遠端目的地：SFTP、SCP、FTPS、FTP、S3 或 rclone |

請看〈[備份](/zh-tw/system/backups/)〉。
