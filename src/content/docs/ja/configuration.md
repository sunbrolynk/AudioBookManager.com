---
title: 環境変数
description: 環境変数、ローカルネットワーク、リバースプロキシの基本。
---

ほとんどの設定は Web UI の **Settings** にあります。ここに挙げるものは環境変数で設定します。

## 環境変数

| 変数 | デフォルト | 役割 |
|---|---|---|
| `PORT` | `5173` | Web インターフェースのポート。 |
| `TIMEZONE` | `UTC` | 自分のタイムゾーン。たとえば `America/New_York`。 |
| `LOCAL_NETWORKS` | 空 | サインインを省略する追加の CIDR ネットワーク。カンマ区切り。 |
| `TRUSTED_PROXIES` | 空 | `X-Forwarded-For` と `X-Real-IP` を設定してよいと信頼するリバースプロキシの CIDR ネットワーク。 |
| `APP_SECRET` | 自動 | 保存する認証情報の暗号化の大元。設定していなければ、初回起動時に `/config/app_secret` に生成されます。キーを config のディスクに置きたくないなら設定してください。 |
| `DOCS_ENABLED` | `true` | `/api/docs`、`/api/redoc`、`/api/openapi.json` で API ドキュメントを配信します。`false` で消えます。 |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | UI を ABM 自身のスクリプト、スタイル、API と HTTPS の表紙画像だけに制限する Content-Security-Policy ヘッダーを送ります。`false` で送らなくなります。どちらにしてもフレーム埋め込みはブロックされたままです。 |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | エンドポイントが受け付けるリクエストボディの最大サイズ（10 MiB）。超えると HTTP 413 になります。バックアップの復元と表紙のアップロードには専用の上限があります。 |

## ローカルネットワーク

ループバック、プライベートアドレスの範囲（`10.0.0.0/8`、`172.16.0.0/12`、`192.168.0.0/16`）、リンクローカル、IPv6 のユニークローカルアドレスは、最初からローカルとして扱われます。**Authentication Required** をローカルアドレスのモードにしていれば、これらからのリクエストはサインインを省略します。ほかにも追加したいなら、並べて書きます。

```
LOCAL_NETWORKS=203.0.113.0/24
```

## リバースプロキシ

nginx や Traefik などの後ろに置くなら、`TRUSTED_PROXIES` にプロキシのアドレスを設定します。

```
TRUSTED_PROXIES=172.20.0.5
```

- できるだけ狭くしてください。広い Docker のサブネットではなく、プロキシ自身のアドレスを使います。
- 同じホスト上のプロキシなら `TRUSTED_PROXIES=127.0.0.1` が必要です。
- クライアントとして扱われるのは、プロキシが `X-Forwarded-For` か `X-Real-IP` で名指ししたクライアントだけです。
- 元の `Host` ヘッダーをそのまま渡すか（nginx なら `proxy_set_header Host $host;`）、`X-Forwarded-Host` を送ってください。何かを変更するブラウザからのリクエストは、オリジンが ABM にアクセスしているアドレスか、CORS の許可ドメインにあるドメインと一致しない限り拒否されます。
- 転送ヘッダーを送らないプロキシは、ローカルのクライアントに見えてしまいます。そういうプロキシを使うなら、Authentication Required を Enabled にしてください。

サインインを求められるはずがないのに求められるなら、[トラブルシューティング](/ja/troubleshooting/)を見てください。

## そのほか

- サインインのモード、API キー、コンテンツセキュリティポリシー：[セキュリティとサインイン](/ja/settings/security/)。
- プロキシ設定の詳しい手順：[リバースプロキシ](/ja/guides/reverse-proxy/)。
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES`（デフォルトは 500 MiB）でバックアップ復元のアップロードの上限を決めます。
- それ以外は全部アプリの **Settings** にあります。[設定の概要](/ja/settings/media-management/)を見てください。
