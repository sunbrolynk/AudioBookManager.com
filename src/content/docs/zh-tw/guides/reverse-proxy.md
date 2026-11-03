---
title: 反向代理
description: 把 ABM 放在 nginx、Traefik 或 Caddy 後面，又不弄壞登入。
---

:::caution[不建議這樣做]
不建議把 ABM 放到網際網路上，不管是透過反向代理還是轉送連接埠，Servarr 系列 App 也是這樣建議的。想從外面連進來，請改用 WireGuard 或 Tailscale 這類 VPN。ABM 的設計在代理後面是安全的，但一旦公開出去就不保證安全，風險要你自己承擔。如果你還是要這麼做，請把 **Authentication Required** 設成 **Enabled**，並讓 ABM 保持最新版本。無論如何還是要這樣做的話，請看本指南。
:::

有三個設定很重要。設對了，登入、WebSocket 和儲存就都會正常。

## 1. 告訴 ABM 代理是誰

把 `TRUSTED_PROXIES` 設成代理的位址，範圍越窄越好：

```
TRUSTED_PROXIES=172.20.0.5
```

代理跟 ABM 在同一台主機上的話，要設 `127.0.0.1`。這樣 ABM 就會信任代理在 `X-Forwarded-For` 或 `X-Real-IP` 裡轉送過來的用戶端位址。沒設的話，任何帶著轉送標頭的請求都必須登入。這是刻意的設計。

## 用戶端位址是怎麼讀取的

`X-Forwarded-For` 是從右往左讀的。每個代理都會把它看到的位址附加在後面，所以最左邊的項目是用戶端自己送來的內容，永遠不會被信任。ABM 會跳過 `TRUSTED_PROXIES` 裡的項目，把第一個不在其中的當作用戶端。所以 `TRUSTED_PROXIES` 要盡量窄：範圍內的任何主機都能往鏈裡加一個項目。`X-Forwarded-Host` 同樣只在來自 `TRUSTED_PROXIES` 中的位址時才會被採信。

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

## 設定範例

每個範例都會放行所有路徑（包括 `/initialize.json`），並處理 websocket。換成你自己的網域和容器名稱，並把 `TRUSTED_PROXIES` 設為代理的位址。

### nginx

```
server {
    listen 443 ssl;
    server_name abm.example.com;

    location / {
        proxy_pass http://172.20.0.2:5173;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
    }
}
```

### Nginx Proxy Manager

```
Scheme:               http
Forward Hostname/IP:  audiobook-manager
Forward Port:         5173
Websockets Support:   on
```

### Traefik

```
labels:
  - traefik.enable=true
  - traefik.http.routers.abm.rule=Host(`abm.example.com`)
  - traefik.http.routers.abm.entrypoints=websecure
  - traefik.http.routers.abm.tls.certresolver=letsencrypt
  - traefik.http.services.abm.loadbalancer.server.port=5173
```

Traefik passes websockets without any extra setting.

### Caddy

```
abm.example.com {
    reverse_proxy audiobook-manager:5173
}
```

Caddy passes websockets and the original `Host` on its own.

## 子路徑和網域

要放在 `/abm` 底下，就在 General 裡把 **URL Base** 設成 `/abm`，然後重新啟動。在 **Application URL** 填你的公開網址。

如果儲存時出現 `cross_origin_rejected` 失敗，代表瀏覽器的來源對不上。先修好 Host 標頭。如果還是不行，就到 Security 把你的網域加進 **CORS Allowed Domains**，再重新啟動。

## 請求內容大小

如果大檔案上傳出現 413 失敗，除了 `MAX_REQUEST_BODY_BYTES`，也要檢查代理本身的上限。

## 記錄檔裡寫什麼

- 「carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES」：把它加進去。
- 「... is in TRUSTED_PROXIES but didn't name a client address」：讓代理送出 `X-Forwarded-For` 或 `X-Real-IP`。

## 疑難排解

頁面空白，或是出現一則說反向代理必須放行 `/initialize.json` 的 "Could not load" 提示（0.19.1 起會回報），代表代理沒有把 `/initialize.json` 轉給 ABM。把它和上面的其他路徑一起放行。即時更新一直連不上，通常是 websocket 升級或 `Sec-WebSocket-Protocol` 標頭沒有通過。

也可以看看〈[安全性與登入](/zh-tw/settings/security/)〉。
