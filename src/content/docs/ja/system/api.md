---
title: API
description: 認証、ドキュメントページ、制限。
---

ABM には `/api` の下に REST API があります。インタラクティブなリファレンスは `/api/docs`（Swagger）と `/api/redoc`、スキーマは `/api/openapi.json` にあります。`DOCS_ENABLED=false` にすると3つとも消えます。ドキュメントページはアセットを CDN から読み込むので、ちゃんと表示されるのはインターネットにつながっているときだけです。

## 認証

- **API キー**：`X-Api-Key: <key>` か `?apikey=<key>` を送ります。キーの確認と再発行は **Settings > General > Security** でできます。[セキュリティ](/ja/settings/security/)を見てください。
- サインインで得られる **Bearer トークン**。
- 認証情報を提示した場合はバイパスより優先されるので、LAN からキー付きで送ったリクエストは API リクエストとして扱われます。

## 決まりごと

- エラーは `{"detail": ...}` で返ってきます。
- シークレットが返されることはありません。レスポンスには設定されているかどうかだけが入ります。
- 状態を変えるブラウザからのリクエストは、オリジンが一致している必要があります。キーを使うスクリプトは対象外です。
- リクエストボディの上限は 10 MiB です（`MAX_REQUEST_BODY_BYTES`）。バックアップの復元と表紙のアップロードは上限が大きめです。上限を超えると HTTP 413 になります。
- バリデーションエラーで、送った内容がそのまま返されることはありません。
- `POST /api/tasks` がキューに入れるのは `backup_export` だけです。それ以外のタスク種別は HTTP 403 になり、`backup_export` に合わない設定は HTTP 422 になります。手動インポートは `/api/manual-import/` のエンドポイントを、ライブラリのスキャンは `POST /api/library/scan` を使ってください。
- Library Import は各行の Libex のマッチ候補をサーバー側で保持します。セッションの保存（`PUT /api/library-import/session/{id}` または `PATCH /api/library-import/session/{id}/choices`）で `libex_matches` を送る行があると、そのフィールド名を示す HTTP 422 で拒否されます。保存し直す行には含めないでください。`POST /api/library-import/retry-match` は省略可能な `session_id` を受け取り、見つかったマッチ候補をそのセッションに保存します。
- `GET /api/metadata/search` は 1 ページ最大 50 件の結果を返します。`page`（0〜9）でページを選び、レスポンスには `page` と、後のページにまだ結果があるかもしれないかを示す `has_more` が含まれます。ASIN 検索はページ 0 だけです。`search_type=phrase` はクエリに対する Libex のベストマッチを返します。こちらもページ 0 だけで、`has_more` は false です。Libex は読み取れない本を除くため、件数が少ないページでも `has_more` が true になることがあります。`has_more` が false になるまで次のページを取得してください。`limit`（1〜50）はページを短くします。
- `POST /api/manual-import/execute` と `/execute-to-book` は、ファイルの各行を固定のスキーマで確認します。不明なキー、相対パスの `source_path`、空の `files` リストは HTTP 422 で拒否されます。各ソースは音声ファイルで、システムフォルダ、`/tmp` や `/mnt` のような最上位フォルダの直下、ABM 自身のフォルダ（設定、データベース、バックアップ、ログ、カバー、ごみ箱、一時フォルダ、SSL 証明書と鍵のあるフォルダ）のどれにもないことが必要です。シンボリックリンクは辿って判断します。拒否されたファイルはパス入りの HTTP 400（`Can't import <path>: the file <reason>.`）になり、何もキューに入りません。
- `POST /api/manual-import/execute` と `/execute-to-book` は、インポートの実行時に [Book Naming](/ja/settings/media-management/#book-naming) に従って各ファイルに名前を付け、ファイル行の `destination_filename` は無視します。
- `POST /api/manual-import/check-conflicts` は `book_id` とインポートしたい `source_paths` を受け取り、各ファイルに付く名前をソースパスごとに `destination_filenames` で返します。`clashed` は、自分の名前がぶつかるためにフォーマットから名前を付けられるソースファイルの一覧です。`audio_conflicts` と `own_conflicts` は本のフォルダにすでにある名前の一覧で、大文字と小文字は区別しません。

## メタデータの障害

メタデータの取得元が必要なのに応答が得られないリクエストは、空の結果ではなく、取得元と理由を示す `detail` 付きで失敗します。Libex がレート制限しているとき、待っている検索は約 10 秒であきらめます。

Sonarr を知っているなら：この API は v3 互換ではありません。Prowlarr は自身の Prowlarr 連携を通じて ABM にインデクサーを同期できます。
