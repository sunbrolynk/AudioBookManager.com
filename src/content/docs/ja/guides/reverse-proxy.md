---
title: リバースプロキシ
description: サインインを壊さずに ABM を nginx、Traefik、Caddy の後ろに置く。
---

大事な設定は3つです。これを正しくすれば、サインインも WebSocket も保存も全部動きます。

## 1. どれがプロキシかを ABM に教える

`TRUSTED_PROXIES` にプロキシのアドレスを、できるだけ狭く設定します。

```
TRUSTED_PROXIES=172.20.0.5
```

同じホスト上のプロキシなら `127.0.0.1` が必要です。こうすると ABM は、プロキシが `X-Forwarded-For` や `X-Real-IP` で転送してくるクライアントのアドレスを信頼します。設定しないと、転送ヘッダーが付いたリクエストはすべてサインインが必要になります。これは意図した動きです。

## 2. ヘッダーを渡す

元の `Host` を転送するか、`X-Forwarded-Host` を送ります。nginx の場合：

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik と Caddy はデフォルトで転送ヘッダーを送ります。ABM はリアルタイム更新に WebSocket を使うので、プロキシはアップグレードリクエストを通す必要があります。

## 3. 誰にサインインさせるか決める

- **Authentication Required: Enabled** にすると全員がサインインします。プロキシが公開されているなら一番安全です。
- **Disabled for Local Addresses** は、ABM がローカルだと判断したクライアントのサインインを省きます。信頼するプロキシを通す場合、それはプロキシが名指ししたクライアントのことです。
- 転送ヘッダーを送らないプロキシだと、全部がローカルに見えてしまいます。Enabled を選んでください。

## サブフォルダとドメイン

`/abm` の下で配信するには、General の **URL Base** を `/abm` にして再起動します。公開アドレスは **Application URL** に入れてください。

保存が `cross_origin_rejected` で失敗するなら、ブラウザのオリジンが一致していません。まず Host ヘッダーを直してください。それでもダメなら、Security の **CORS Allowed Domains** に自分のドメインを追加して再起動します。

## ボディサイズ

大きなアップロードが 413 で失敗するなら、`MAX_REQUEST_BODY_BYTES` だけでなくプロキシ側の上限も確認してください。

## ログに出るメッセージ

- 「carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES」：そのアドレスを追加してください。
- 「... is in TRUSTED_PROXIES but didn't name a client address」：プロキシが `X-Forwarded-For` か `X-Real-IP` を送るようにしてください。

[セキュリティとサインイン](/ja/settings/security/)も見てください。
