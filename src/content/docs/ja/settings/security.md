---
title: セキュリティとサインイン
description: 認証モード、API キー、信頼するプロキシ、ローカルネットワーク、コンテンツセキュリティポリシー。
---

**Settings > General** の **Security** セクションでは、誰がどうやって ABM を使えるかを決めます。

## 認証

| 設定 | デフォルト | 選択肢 |
|---|---|---|
| Authentication | Forms (Login Page) | None、Basic (Browser Popup)、Forms (Login Page)、External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always)、Disabled for Local Addresses、Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | パスワードを空欄にすれば今のパスワードのまま |
| Certificate Validation | Enabled | Enabled、Disabled for Local Addresses、Disabled (Not Recommended) |
| Local Networks | 空 | サインインを省略するクライアントの追加の CIDR 範囲 |
| CORS Allowed Domains | 空 | ブラウザから API を呼んでよいほかのオリジン。再起動が必要 |

**Authentication Required** で実際に使うのは次の2つのモードです。

- **Enabled**：自分の LAN も含めて、全員がサインインします。
- **Disabled for Local Addresses**（`local_disabled` として保存）：ローカルアドレスからのリクエストはサインインを省略します。ループバック、プライベートアドレスの範囲、リンクローカル、IPv6 のユニークローカルがローカル扱いです。**Local Networks** はこれに追加するもので、置き換えることはありません。

新しくインストールした直後は、セットアップが終わるまでリクエストは拒否されます。

## リバースプロキシ

プロキシの後ろに置くなら、どの転送ヘッダーを信じていいか ABM がわかるように `TRUSTED_PROXIES` を設定します。その一覧にないアドレスから転送ヘッダー付きで来たリクエストは、決してローカル扱いにならず、サインインが必要です。これは意図した動きです。[リバースプロキシ](/ja/guides/reverse-proxy/)を見てください。

転送ヘッダーを送らないプロキシは、ローカルのクライアントに見えてしまいます。そういうプロキシを使うなら、Authentication Required を Enabled にしてください。

## パスワードの再確認

一部の変更では、現在のパスワードをもう一度求められます。Security 設定の保存と、API キーの表示や再生成です。パスワードが間違っていると、セキュリティログでは失敗したサインインとして数えられます。まだパスワードが設定されていなければ、求められません。

## API キー

キーはパスワードを確認するまで表示されません。**Regenerate API Key** で新しいキーを作ると、一度だけ表示され、古いキーはすぐに無効になります。キーを手で入力することはできません。保存されたキーを復号できない場合（アプリのシークレットが変わった場合）は、再発行してください。

キーは `X-Api-Key` か `apikey` パラメーターで送ります。LAN のアドレスから送ったキーも、キー付きのリクエストとして扱われます。[API](/ja/system/api/) を見てください。

## ブラウザからの書き込み

何かを変更するブラウザからのリクエストは、オリジンが ABM にアクセスしているアドレス、信頼するプロキシが転送してきたホスト、CORS の許可ドメインのどれかと一致しない限り、`cross_origin_rejected` で拒否されます。API キーを使ったリクエストは影響を受けません。

## コンテンツセキュリティポリシー

`SECURITY_HEADERS_CSP_ENABLED=false` にしない限り、ABM は Content-Security-Policy ヘッダーを送ります。UI を ABM 自身のスクリプトと API に、画像を ABM か HTTPS のものに制限します。プレーンな HTTP で配信される表紙はブロックされ、どちらにしても ABM を iframe の中に表示することはできません。API ドキュメントのページは CDN から読み込めるように、ゆるめのポリシーになっています。

## サインインの失敗

ロックアウトはありません。失敗した試行はログに残り、Activity Log ではアドレスごとにまとめられ、fail2ban などのツール向けにセキュリティログに1行ずつ書き込まれます。

## シークレット

ABM がインデクサー、クライアント、接続のために保存するパスワードやキーは、アプリのシークレットで暗号化されます。キーを config のディスクに置きたくないなら `APP_SECRET` を設定してください。どちらもなければ、ABM が `/config/app_secret` を生成します。プロキシとエクスポート先のパスワードは平文で保存されます。
