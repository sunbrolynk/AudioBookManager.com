---
title: 選擇中繼資料來源
description: 內建、託管，或是你自己的 Libex 伺服器。
---

:::caution[下一個版本推出]
來源選擇還沒有出現在任何已發行的版本裡。已發行的版本使用 libexdb.com 上的公開 Libex 執行個體，也沒有相關設定。
:::

下一個版本會在 **Settings > Metadata > Source** 加入 **Metadata Source** 設定，有三個選項。

| 選項 | 意思 |
|---|---|
| Built-in（預設） | Libex 直接在 ABM 裡面執行。需要先選好對外連線方式。 |
| Hosted (libexdb.com) | ABM 向公開的 Libex 執行個體查詢。 |
| Self-hosted | ABM 向你指定的 Libex 伺服器查詢。在 **Server URL** 填入它的位址，例如 `http://192.168.1.20:8000`。 |

**Test** 會在不儲存的情況下檢查選取的來源。**Status** 會告訴你它準備好了沒。還沒儲存的選擇會顯示「Not in use yet - save to switch」，直到你儲存為止。

## 內建來源與對外連線

內建來源是從你的機器直接連到 Audible，所以會用到 **Settings > General > Proxy & VPN**。那個頁面決定連線路徑：代理伺服器、內建的 WireGuard 通道、你自己的 VPN 容器，或是你確認過的直接連線。如果都沒選，自動查詢會被擋下，並告訴你原因。選好的路徑斷線時，查詢也會被擋下。它絕對不會退回用你自己的位址連線。選擇直接連線時，會出現警告，提醒你 Audible 會看到你的 IP 位址和 ABM 查詢了哪些書。

## 託管與自架

用這兩種時，ABM 向 Libex 伺服器查詢，再由伺服器去跟 Audible 溝通。自架的網址在儲存前會先檢查，空白或不安全的網址會被拒絕。伺服器斷線時，會顯示中繼資料來源無法使用，並附上它的名稱。

## 該選哪個

- 只想要它能用，不在意 Audible 看到你的位址：選 Built-in 搭配直接連線，或選 Hosted。
- 在意不要把你的 IP 暴露給 Audible：選 Built-in 走 VPN 或代理伺服器，或選 Hosted。
- 已經有在跑 Libex 伺服器：選 Self-hosted。
