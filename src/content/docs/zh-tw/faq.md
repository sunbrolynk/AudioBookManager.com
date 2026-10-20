---
title: 常見問題
description: 大家最先會問的問題，簡短回答。
---

## ABM 會取代 Audiobookshelf 嗎？

不會。Audiobookshelf 是播放器，ABM 是圖書管理員。把兩個都指向同一個書庫資料夾，讓它們各做各的事。

## 中繼資料從哪裡來？

來自 [Libex](https://libexdb.com)，一個提供 Audible 資料的開放中繼資料服務。ABM 會依排程重新整理，你自己挑的封面可以鎖定，重新整理時就不會動到它。

## 我需要另外架一個資料庫嗎？

不用。ABM 把所有東西都放在 `/config` 裡的一個 SQLite 檔案，不需要再跑其他東西。

## 我可以從外面的網路連進來嗎？

可以，0.17.0 以後的版本都行，不過我不建議把 ABM 直接放到網際網路上，Servarr 那幾個 App 也是這樣建議的。用 WireGuard 或 Tailscale 這類 VPN 連進來比較安全。預設情況下，從你區域網路以外連進來的都要登入；把 **Authentication Required** 設成 **Enabled** 的話，所有人都要登入，連你自己的區域網路也一樣。如果放在 nginx、Traefik 或 Caddy 後面，把 `TRUSTED_PROXIES` 設成代理的位址。已儲存的憑證都有加密。請看〈[反向代理指南](/zh-tw/guides/reverse-proxy/)〉和〈[設定](/zh-tw/configuration/#反向代理)〉。

## 支援哪些下載用戶端？

Deluge、qBittorrent、Transmission、rTorrent、SABnzbd、NZBGet 和 Blackhole。

## Readarr 怎麼了？

Readarr 以前是把書和有聲書放在一起處理，後來已經停止維護了。ABM 只做有聲書，建立在 Servarr 系列 App 開創的設計之上。

## 可以不用 Docker 安裝嗎？

還不行。目前只能用 Docker。原生的 Linux、Windows 和 macOS 安裝方式，還有 Kubernetes、Unraid 和 Proxmox，都在計畫中。請看〈[其他安裝方式](/zh-tw/installation/#其他安裝方式)〉。

## 要多少錢？

完全免費。它是以 GPL-3.0 授權的自由開源軟體。如果它幫你省下一個晚上，這裡有 [Ko-fi](https://ko-fi.com/sunbrolynk)。

## 我可以修改一本書的書名、作者或簡介嗎？

不行。這些資料來自中繼資料來源，ABM 不會手動修改。你能控制的是封面（你選的封面會被鎖定）、什麼時候重新整理、要寫入哪些附屬檔案和音訊標籤、標籤和自動標籤、監控狀態，以及品質設定檔。請看〈[你的中繼資料，你作主](/zh-tw/metadata/control/)〉。

## ABM 能把章節、簡介和標籤寫到 Audiobookshelf 讀得到的地方嗎？

它會寫入 `cover.jpg`、一個 `.opf`、`desc.txt` 和 `reader.txt`，也能把標籤寫進音訊。與已發行版本的章節比對和 `.cue` 檔案，預計在後續版本提供。請看〈[附屬檔案](/zh-tw/using/sidecars/)〉。

## 我可以轉換檔案嗎？

可以：轉換、合併、分割和加入章節，全部排進佇列處理。請看〈[轉換](/zh-tw/using/conversions/)〉。

## 我可以匯入現有的收藏嗎？

可以，用〈[書庫匯入](/zh-tw/library-import/)〉。也可以看看〈[把書庫搬進來](/zh-tw/guides/moving-a-library-in/)〉。

## 有手機版面嗎？

有，寬度小於 768px 時就會切換。請看〈[在手機上使用](/zh-tw/phone/)〉。

## ABM 可以用不只一個 Audible 帳號嗎？

可以。每個帳號各自保有自己的書庫。請看〈[Audible](/zh-tw/audible/)〉。
