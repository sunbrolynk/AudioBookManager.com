---
title: 反向代理
description: 把 ABM 放在 nginx、Traefik 或 Caddy 後面，又不弄壞登入。
---

有三個設定很重要。設對了，登入、WebSocket 和儲存就都會正常。

## 1. 告訴 ABM 代理是誰

把 `TRUSTED_PROXIES` 設成代理的位址，範圍越窄越好：

```
TRUSTED_PROXIES=172.20.0.5
```

代理跟 ABM 在同一台主機上的話，要設 `127.0.0.1`。這樣 ABM 就會信任代理在 `X-Forwarded-For` 或 `X-Real-IP` 裡轉送過來的用戶端位址。沒設的話，任何帶著轉送標頭的請求都必須登入。這是刻意的設計。

## 2. 轉送標頭

轉送原本的 `Host`，或是送 `X-Forwarded-Host`。nginx：

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik 和 Caddy 預設就會送轉送標頭。ABM 用 WebSocket 做即時更新，所以代理必須讓升級請求通過。

## 3. 決定誰要登入

- **Authentication Required: Enabled** 讓所有人都要登入。如果代理對外公開，這最安全。
- **Disabled for Local Addresses** 讓 ABM 認為是區域網路的用戶端免登入。經過受信任的代理時，指的是代理指名的那個用戶端。
- 不送任何轉送標頭的代理，會讓所有東西看起來都像區域網路。請選 Enabled。

## 子路徑和網域

要放在 `/abm` 底下，就在 General 裡把 **URL Base** 設成 `/abm`，然後重新啟動。在 **Application URL** 填你的公開網址。

如果儲存時出現 `cross_origin_rejected` 失敗，代表瀏覽器的來源對不上。先修好 Host 標頭。如果還是不行，就到 Security 把你的網域加進 **CORS Allowed Domains**，再重新啟動。

## 請求內容大小

如果大檔案上傳出現 413 失敗，除了 `MAX_REQUEST_BODY_BYTES`，也要檢查代理本身的上限。

## 記錄檔裡寫什麼

- 「carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES」：把它加進去。
- 「... is in TRUSTED_PROXIES but didn't name a client address」：讓代理送出 `X-Forwarded-For` 或 `X-Real-IP`。

也可以看看〈[安全性與登入](/zh-tw/settings/security/)〉。
