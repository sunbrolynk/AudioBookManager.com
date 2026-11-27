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
- Library Import 会自己在服务器上保存每一行的 Libex 匹配结果。保存会话（`PUT /api/library-import/session/{id}` 或 `PATCH /api/library-import/session/{id}/choices`）时，如果某一行带了 `libex_matches`，会被拒绝，返回 HTTP 422 并指出这个字段，所以你写回的行里别带它。保存或添加时，如果某些行指向会话自己的扫描没找到的文件夹或文件（包括某一行的 `audio_files`），会被拒绝，返回 HTTP 422 并列出这些路径。某一行的附加文件预览（`POST /api/library-import/session/{id}/extras`）、封面预览和 `POST /api/library-import/session/{id}/file-tags` 在这一行或某个文件通过链接通向扫描文件夹外面时，返回 HTTP 422“Outside the folder this session scanned”。`POST /api/library-import/retry-match` 接受一个可选的 `session_id`，会把找到的匹配结果存进那个会话。
- `GET /api/metadata/search` 每次返回一页，最多 50 条结果。`page`（0 到 9）选择页码，响应里带有 `page` 和 `has_more`，后者说明后面的页是否可能还有结果。按 ASIN 搜索只有第 0 页。`search_type=phrase` 返回 Libex 针对该查询的最佳匹配，同样只有第 0 页，`has_more` 为 false。因为 Libex 会略过它读不了的书，一页结果不满时 `has_more` 仍可能为 true，所以要一直往后取，直到 `has_more` 为 false。`limit`（1 到 50）会截短一页。
- `POST /api/manual-import/execute` 和 `/execute-to-book` 会按固定结构检查每一行文件。未知的键、相对路径的 `source_path` 或空的 `files` 列表会被 HTTP 422 拒绝。每个来源都必须是音频文件，且不在系统文件夹里、不直接位于 `/tmp` 或 `/mnt` 这类顶层文件夹下，也不在 ABM 自己的文件夹（配置、数据库、备份、日志、封面、回收站、临时文件夹，以及存放 SSL 证书和密钥的文件夹）里，符号链接会被跟随。被拒绝的文件会得到写有其路径的 HTTP 400（`Can't import <path>: the file <reason>.`），也不会排入任何任务。
- `POST /api/manual-import/execute` 和 `/execute-to-book` 在导入运行时按 [Book Naming](/zh-cn/settings/media-management/#book-naming) 给每个文件命名，并忽略文件行里的 `destination_filename`。
- `POST /api/manual-import/check-conflicts` 接收 `book_id` 和你要导入的 `source_paths`，在 `destination_filenames` 中按源路径返回每个文件将得到的名字。`clashed` 列出因自身名字会冲突而改用格式命名的源文件。`audio_conflicts` 和 `own_conflicts` 列出书籍文件夹中已有的名字，不区分大小写。

## 元数据源中断

需要元数据来源却得不到回应的请求，会以带有 `detail` 的错误失败，其中写明来源和原因，绝不会返回空结果。Libex 限速时，你正在等的搜索大约 10 秒后放弃。

如果你用过 Sonarr：这个 API 和 v3 不兼容。Prowlarr 可以通过它的 Prowlarr 连接把索引器同步到 ABM。
