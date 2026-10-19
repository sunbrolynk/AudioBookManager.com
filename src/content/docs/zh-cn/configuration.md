---
title: 环境变量
description: 环境变量、本地网络和反向代理基础。
---

大部分设置都在网页界面的 **Settings** 里。下面这些要在环境变量里设置。

## 环境变量

| 变量 | 默认值 | 作用 |
|---|---|---|
| `PORT` | `5173` | 网页界面端口。 |
| `TIMEZONE` | `UTC` | 你的本地时区，比如 `America/New_York`。 |
| `LOCAL_NETWORKS` | 空 | 额外可以免登录的 CIDR 网段，用逗号分隔。 |
| `TRUSTED_PROXIES` | 空 | 受信任的反向代理所在的 CIDR 网段，它们可以设置 `X-Forwarded-For` 和 `X-Real-IP`。 |
| `APP_SECRET` | 自动 | 已存储凭据的加密根密钥。没设置时，首次运行会生成到 `/config/app_secret`。设置它可以让密钥不落在配置盘上。 |
| `DOCS_ENABLED` | `true` | 在 `/api/docs`、`/api/redoc` 和 `/api/openapi.json` 提供 API 文档。设为 `false` 就去掉。 |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | 发送 Content-Security-Policy 响应头，把界面限制为只加载 ABM 自己的脚本、样式和 API，外加 HTTPS 封面图片。设为 `false` 就不发。无论哪种，页面都不允许被嵌入 frame。 |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | 单个接口接受的最大请求体（10 MiB）。超过会返回 HTTP 413。备份恢复和封面上传有各自的上限。 |

## 本地网络

回环地址、私有网段（`10.0.0.0/8`、`172.16.0.0/12`、`192.168.0.0/16`）、链路本地地址和 IPv6 唯一本地地址本来就算本地。当 **Authentication Required** 设为本地地址模式时，来自这些地址的请求可以免登录。想再加网段的话，就列出来：

```
LOCAL_NETWORKS=203.0.113.0/24
```

## 反向代理

放在 nginx、Traefik 之类的后面时，把 `TRUSTED_PROXIES` 设为代理的地址：

```
TRUSTED_PROXIES=172.20.0.5
```

- 范围尽量收窄。用代理自己的地址，别用一整个 Docker 子网。
- 代理和 ABM 在同一台主机上时，要设 `TRUSTED_PROXIES=127.0.0.1`。
- 只有代理在 `X-Forwarded-For` 或 `X-Real-IP` 里写明的客户端才算真正的客户端。
- 把原始的 `Host` 请求头传过去（nginx：`proxy_set_header Host $host;`），或者发送 `X-Forwarded-Host`。浏览器发出的修改类请求，只有来源和 ABM 被访问的地址一致，或者在 CORS 允许的域名里，才会被接受。
- 不发送任何转发头的代理，看起来就像一个本地客户端。如果你用的是这种代理，请把 Authentication Required 设为 Enabled。

如果在不该要求登录的时候被要求登录，请看 [故障排除](/zh-cn/troubleshooting/)。

## 更多

- 登录模式、API 密钥和内容安全策略：[安全与登录](/zh-cn/settings/security/)。
- 完整的代理配置教程：[反向代理](/zh-cn/guides/reverse-proxy/)。
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES`（默认 500 MiB）限制备份恢复上传的大小。
- 其他所有设置都在应用的 **Settings** 里。见 [设置总览](/zh-cn/settings/media-management/)。
