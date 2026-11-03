---
title: 反向代理
description: 把 ABM 放到 nginx、Traefik 或 Caddy 后面，又不把登录搞坏。
---

:::caution[不推荐]
不推荐把 ABM 放到互联网上，不管是通过反向代理还是端口转发，Servarr 系列应用也是这么建议的。想从外面访问它，请改用 WireGuard 或 Tailscale 这类 VPN。ABM 在设计上能安全地放在代理后面，但一旦公开，安全就没有任何保证，风险由你自己承担。如果你还是要这么做，请把 **Authentication Required** 设为 **Enabled**，并保持 ABM 为最新版本。无论如何还是要这样做的话，请看本指南。
:::

关键的设置有三个。弄对了，登录、websocket 和保存就都能正常工作。

## 1. 告诉 ABM 代理是谁

把 `TRUSTED_PROXIES` 设为代理的地址，范围越窄越好：

```
TRUSTED_PROXIES=172.20.0.5
```

代理和 ABM 在同一台主机上时要设 `127.0.0.1`。这样 ABM 就会信任代理在 `X-Forwarded-For` 或 `X-Real-IP` 里转发的客户端地址。不设的话，任何带有转发头的请求都必须登录。这是故意的。

## 客户端地址是怎么读取的

`X-Forwarded-For` 是从右往左读的。每个代理都会把它看到的地址追加在后面，所以最左边的条目是客户端自己发来的内容，永远不会被信任。ABM 会跳过 `TRUSTED_PROXIES` 里的条目，把第一个不在其中的当作客户端。所以 `TRUSTED_PROXIES` 要尽量窄：范围内的任何主机都能往链里加一个条目。`X-Forwarded-Host` 同样只在来自 `TRUSTED_PROXIES` 中的地址时才会被采信。

## 2. 传递请求头

转发原始的 `Host`，或者发送 `X-Forwarded-Host`。nginx：

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik 和 Caddy 默认就会发送转发头。ABM 用 websocket 做实时更新，所以代理必须放行 upgrade 请求。

## 3. 决定谁需要登录

- **Authentication Required: Enabled** 让所有人都要登录。如果代理是公开的，这样最安全。
- **Disabled for Local Addresses** 对 ABM 认为是本地的客户端免登录。经过受信任的代理时，指的是代理写明的那个客户端。
- 不发送任何转发头的代理会让所有请求看起来都是本地的。这种情况选 Enabled。

## 配置示例

每个示例都会放行所有路径（包括 `/initialize.json`），并处理 websocket。换成你自己的域名和容器名，并把 `TRUSTED_PROXIES` 设为代理的地址。

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

## 子路径和域名

想挂在 `/abm` 下，就在 General 里把 **URL Base** 设为 `/abm` 并重启。把你的公网地址填到 **Application URL**。

如果保存时报 `cross_origin_rejected`，说明浏览器的来源对不上。先修 Host 请求头。还不行的话，就在 Security 里把你的域名加到 **CORS Allowed Domains** 并重启。

## 请求体大小

如果大文件上传报 413，除了 `MAX_REQUEST_BODY_BYTES`，也要检查代理自己的限制。

## 日志里会说什么

- “carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES”：把它加进去。
- “... is in TRUSTED_PROXIES but didn't name a client address”：让代理发送 `X-Forwarded-For` 或 `X-Real-IP`。

## 故障排查

页面空白，或者出现一条说反向代理必须放行 `/initialize.json` 的 "Could not load" 提示（0.19.1 起会报告），说明代理没有把 `/initialize.json` 转给 ABM。把它和上面的其他路径一起放行。实时更新一直连不上，通常是 websocket 升级或 `Sec-WebSocket-Protocol` 头没有通过。

另见 [安全与登录](/zh-cn/settings/security/)。
