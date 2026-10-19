---
title: 環境變數
description: 環境變數、區域網路，以及反向代理的基本設定。
---

大部分的設定都在網頁介面的 **Settings** 裡。下面這些則是在環境變數裡設定。

## 環境變數

| 變數 | 預設值 | 作用 |
|---|---|---|
| `PORT` | `5173` | 網頁介面的連接埠。 |
| `TIMEZONE` | `UTC` | 你所在的時區，例如 `America/New_York`。 |
| `LOCAL_NETWORKS` | 空白 | 額外可以免登入的 CIDR 網段，用逗號分隔。 |
| `TRUSTED_PROXIES` | 空白 | 可以信任來設定 `X-Forwarded-For` 和 `X-Real-IP` 的反向代理所在的 CIDR 網段。 |
| `APP_SECRET` | 自動 | 已儲存憑證的加密根金鑰。沒設定的話，第一次執行時會產生在 `/config/app_secret`。如果不想讓金鑰放在設定磁碟上，就自己設定它。 |
| `DOCS_ENABLED` | `true` | 在 `/api/docs`、`/api/redoc` 和 `/api/openapi.json` 提供 API 文件。設成 `false` 就會移除。 |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | 送出 Content-Security-Policy 標頭，讓介面只能載入 ABM 自己的指令碼、樣式和 API，外加 HTTPS 的封面圖片。設成 `false` 就不送。不管哪種設定，頁面都不能被嵌入框架。 |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | 端點接受的最大請求內容大小（10 MiB）。超過會得到 HTTP 413。備份還原和封面上傳有各自的上限。 |

## 區域網路

迴路位址、私有網段（`10.0.0.0/8`、`172.16.0.0/12`、`192.168.0.0/16`）、鏈路本地位址和 IPv6 唯一本地位址本來就算是區域網路。當 **Authentication Required** 設成區域位址模式時，來自這些位址的請求可以免登入。想加入更多網段，就把它們列出來：

```
LOCAL_NETWORKS=203.0.113.0/24
```

## 反向代理

如果 ABM 放在 nginx、Traefik 或類似的代理後面，把 `TRUSTED_PROXIES` 設成代理的位址：

```
TRUSTED_PROXIES=172.20.0.5
```

- 範圍越窄越好。用代理本身的位址，不要用一整個 Docker 子網路。
- 代理跟 ABM 在同一台主機上的話，要設 `TRUSTED_PROXIES=127.0.0.1`。
- 只有代理在 `X-Forwarded-For` 或 `X-Real-IP` 裡指名的用戶端，才會被當成真正的用戶端。
- 把原本的 `Host` 標頭轉送過去（nginx：`proxy_set_header Host $host;`），或是送 `X-Forwarded-Host`。瀏覽器送來會修改東西的請求，除非來源跟你連到 ABM 的位址一致，或是在 CORS 允許網域裡，否則會被拒絕。
- 不送任何轉送標頭的代理，看起來會像區域網路裡的用戶端。如果你用的是這種代理，請把 Authentication Required 設成 Enabled。

如果在不該要求登入的時候被要求登入，請看〈[疑難排解](/zh-tw/troubleshooting/)〉。

## 更多

- 登入模式、API 金鑰和內容安全政策：〈[安全性與登入](/zh-tw/settings/security/)〉。
- 完整的代理設定教學：〈[反向代理](/zh-tw/guides/reverse-proxy/)〉。
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES`（預設 500 MiB）限制備份還原上傳的大小。
- 其他所有設定都在 App 裡的 **Settings**。請看〈[設定總覽](/zh-tw/settings/media-management/)〉。
