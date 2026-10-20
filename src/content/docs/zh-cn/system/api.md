---
title: API
description: 认证、文档页面和限制。
---

ABM 在 `/api` 下提供 REST API。交互式参考在 `/api/docs`（Swagger）和 `/api/redoc`，schema 在 `/api/openapi.json`。设置 `DOCS_ENABLED=false` 可以把这三个都去掉。文档页面会从 CDN 加载资源，所以只有能上网时才能完整显示。

## 认证

- **API 密钥**：发送 `X-Api-Key: <key>` 或 `?apikey=<key>`。在 **Settings > General > Security** 里查看或重新生成。见 [安全](/zh-cn/settings/security/)。
- 登录后得到的 **Bearer 令牌**。
- 你主动提供的凭据优先于免登录规则，所以来自局域网、带着密钥的请求按 API 请求处理。

## 约定

- 错误以 `{"detail": ...}` 的形式返回。
- 密钥永远不会被返回。响应里只会说明它有没有设置。
- 浏览器发出的修改类请求需要来源匹配。使用密钥的脚本不受此限制。
- 请求体上限为 10 MiB（`MAX_REQUEST_BODY_BYTES`）。备份恢复和封面上传的上限更大。超过上限返回 HTTP 413。
- 校验错误永远不会把你发送的内容原样返回。

## 元数据源中断

书籍搜索得不到 Libex 的响应时，会返回 502 和 "Libex search failed"。作者或系列搜索会返回 503 和 "Libex could not be reached; try again shortly"。有些查询路由在宕机时仍然返回空结果。

如果你用过 Sonarr：这个 API 和 v3 不兼容。Prowlarr 可以通过它的 Prowlarr 连接把索引器同步到 ABM。
