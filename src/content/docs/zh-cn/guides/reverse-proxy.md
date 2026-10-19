---
title: 反向代理
description: 把 ABM 放到 nginx、Traefik 或 Caddy 后面，又不把登录搞坏。
---

关键的设置有三个。弄对了，登录、websocket 和保存就都能正常工作。

## 1. 告诉 ABM 代理是谁

把 `TRUSTED_PROXIES` 设为代理的地址，范围越窄越好：

```
TRUSTED_PROXIES=172.20.0.5
```

代理和 ABM 在同一台主机上时要设 `127.0.0.1`。这样 ABM 就会信任代理在 `X-Forwarded-For` 或 `X-Real-IP` 里转发的客户端地址。不设的话，任何带有转发头的请求都必须登录。这是故意的。

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

## 子路径和域名

想挂在 `/abm` 下，就在 General 里把 **URL Base** 设为 `/abm` 并重启。把你的公网地址填到 **Application URL**。

如果保存时报 `cross_origin_rejected`，说明浏览器的来源对不上。先修 Host 请求头。还不行的话，就在 Security 里把你的域名加到 **CORS Allowed Domains** 并重启。

## 请求体大小

如果大文件上传报 413，除了 `MAX_REQUEST_BODY_BYTES`，也要检查代理自己的限制。

## 日志里会说什么

- “carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES”：把它加进去。
- “... is in TRUSTED_PROXIES but didn't name a client address”：让代理发送 `X-Forwarded-For` 或 `X-Real-IP`。

另见 [安全与登录](/zh-cn/settings/security/)。
