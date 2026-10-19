---
title: 安全与登录
description: 认证模式、API 密钥、受信任代理、本地网络和内容安全策略。
---

**Settings > General** 里的 **Security** 部分控制谁能用 ABM，以及怎么用。

## 认证

| 设置 | 默认值 | 可选项 |
|---|---|---|
| Authentication | Forms (Login Page) | None、Basic (Browser Popup)、Forms (Login Page)、External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always)、Disabled for Local Addresses、Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | 密码留空则保留当前密码 |
| Certificate Validation | Enabled | Enabled、Disabled for Local Addresses、Disabled (Not Recommended) |
| Local Networks | 空 | 额外的 CIDR 网段，来自这些网段的客户端免登录 |
| CORS Allowed Domains | 空 | 允许在浏览器里调用 API 的其他来源。需要重启 |

**Authentication Required** 里你会用到的两种模式：

- **Enabled**：所有人都要登录，包括你的局域网。
- **Disabled for Local Addresses**（存储为 `local_disabled`）：来自本地地址的请求免登录。回环地址、私有网段、链路本地地址和 IPv6 唯一本地地址都算本地。**Local Networks** 只会追加网段，永远不会替换这些。

全新安装时，在完成初始设置之前，所有请求都会被拒绝。

## 反向代理

放在代理后面时，要设置 `TRUSTED_PROXIES`，让 ABM 知道该相信哪些转发头。如果带有转发头的请求来自不在这个列表里的地址，它永远不会被当成本地请求，必须登录。这是故意的。见 [反向代理](/zh-cn/guides/reverse-proxy/)。

不发送任何转发头的代理看起来就像一个本地客户端。如果你用的是这种代理，请把 Authentication Required 设为 Enabled。

## 密码确认

有些修改会再次要求输入当前密码：保存 Security 设置、显示或重新生成 API 密钥，以及保存或删除 WireGuard 配置。密码输错会在安全日志里记为一次登录失败。如果还没设置密码，就不会要求输入。

## API 密钥

在你确认密码之前，密钥永远不会显示。**Regenerate API Key** 会生成一个新密钥，只显示一次，并立即让旧密钥失效。密钥不能手动输入。如果存储的密钥无法解密（应用密钥变了），就重新生成一个。

用 `X-Api-Key` 请求头或 `apikey` 参数发送。来自局域网地址、带着密钥的请求按密钥请求处理。见 [API](/zh-cn/system/api/)。

## 浏览器写入

浏览器发出的修改类请求会被以 `cross_origin_rejected` 拒绝，除非它的来源和 ABM 被访问的地址一致、和受信任代理转发的主机一致，或者是 CORS 允许的域名。用 API 密钥的请求不受影响。

## 内容安全策略

除非设置了 `SECURITY_HEADERS_CSP_ENABLED=false`，否则 ABM 会发送 Content-Security-Policy 响应头。它把界面限制为只加载 ABM 自己的脚本和 API，图片只能来自 ABM 或 HTTPS。通过纯 HTTP 提供的封面会被拦截；无论设置如何，ABM 都不能被嵌入 iframe。API 文档页面用的是更宽松的策略，这样才能从 CDN 加载。

## 登录失败

没有账号锁定。失败的尝试会被记录下来，在 Activity Log 里按地址合并显示，并逐行写入安全日志，方便 fail2ban 之类的工具使用。

## 密钥

ABM 为索引器、客户端和连接存储的密码和密钥，都用一个应用密钥加密。设置 `APP_SECRET` 可以让这个密钥不落在配置盘上。两者都不存在时，ABM 会生成 `/config/app_secret`。代理和导出目标的密码以明文存储。
