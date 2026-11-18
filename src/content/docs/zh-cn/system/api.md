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
- `POST /api/tasks` 只会把 `backup_export` 加入队列。其他任何任务类型都会得到 HTTP 403，不符合 `backup_export` 的设置会得到 HTTP 422。手动导入请用 `/api/manual-import/` 下的端点，扫描媒体库请用 `POST /api/library/scan`。
- Library Import 会自己在服务器上保存每一行的 Libex 匹配结果。保存会话（`PUT /api/library-import/session/{id}` 或 `PATCH /api/library-import/session/{id}/choices`）时，如果某一行带了 `libex_matches`，会被拒绝，返回 HTTP 422 并指出这个字段，所以你写回的行里别带它。`POST /api/library-import/retry-match` 接受一个可选的 `session_id`，会把找到的匹配结果存进那个会话。
- 不带 `limit` 时，`GET /api/metadata/search` 返回全部结果。带上 `limit`（1 到 50）时，最多返回这么多条。

## 元数据源中断

需要元数据来源却得不到回应的请求，会以带有 `detail` 的错误失败，其中写明来源和原因，绝不会返回空结果。Libex 限速时，你正在等的搜索大约 10 秒后放弃。

如果你用过 Sonarr：这个 API 和 v3 不兼容。Prowlarr 可以通过它的 Prowlarr 连接把索引器同步到 ABM。
