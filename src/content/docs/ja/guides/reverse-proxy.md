---
title: リバースプロキシ
description: サインインを壊さずに ABM を nginx、Traefik、Caddy の後ろに置く。
---

:::caution[おすすめしません]
リバースプロキシやポート転送で ABM をインターネットに公開するのはおすすめしません。Servarr アプリが出しているのと同じアドバイスです。外からアクセスしたいなら、代わりに WireGuard や Tailscale などの VPN を使ってください。ABM はプロキシの後ろでも安全に動くように作っていますが、公開したあとのセキュリティは保証できず、リスクは自分で負うことになります。それでも公開するなら、**Authentication Required** を **Enabled** にして、ABM を最新の状態に保ってください。それでも公開する人のために、このガイドがあります。
:::

大事な設定は3つです。これを正しくすれば、サインインも WebSocket も保存も全部動きます。

## 1. どれがプロキシかを ABM に教える

`TRUSTED_PROXIES` にプロキシのアドレスを、できるだけ狭く設定します。

```
TRUSTED_PROXIES=172.20.0.5
```

同じホスト上のプロキシなら `127.0.0.1` が必要です。こうすると ABM は、プロキシが `X-Forwarded-For` や `X-Real-IP` で転送してくるクライアントのアドレスを信頼します。設定しないと、転送ヘッダーが付いたリクエストはすべてサインインが必要になります。これは意図した動きです。

## クライアントのアドレスの読み取り方

`X-Forwarded-For` は右から左へ読みます。各プロキシは自分が見たアドレスを末尾に追加するので、いちばん左の項目はクライアント自身が送った値で、信用されません。ABM は `TRUSTED_PROXIES` に含まれる項目を飛ばし、含まれない最初の項目をクライアントとして扱います。だから `TRUSTED_PROXIES` は狭くしておく必要があります。範囲内のものなら何でも、チェーンに項目を足せてしまうからです。`X-Forwarded-Host` も、`TRUSTED_PROXIES` にあるアドレスから届いたときだけ信用されます。

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

## 設定例

どの例もすべてのパス（`/initialize.json` を含む）を通し、websocket も扱います。自分のドメインとコンテナ名に置き換え、`TRUSTED_PROXIES` にはプロキシのアドレスを設定してください。

### nginx

```
server {
    listen 443 ssl;
    server_name abm.example.com;

    location / {
        proxy_pass http://172.20.0.2:5173;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
    }
}
```

### Nginx Proxy Manager

```
Scheme:               http
Forward Hostname/IP:  audiobook-manager
Forward Port:         5173
Websockets Support:   on
```

### Traefik

```
labels:
  - traefik.enable=true
  - traefik.http.routers.abm.rule=Host(`abm.example.com`)
  - traefik.http.routers.abm.entrypoints=websecure
  - traefik.http.routers.abm.tls.certresolver=letsencrypt
  - traefik.http.services.abm.loadbalancer.server.port=5173
```

Traefik passes websockets without any extra setting.

### Caddy

```
abm.example.com {
    reverse_proxy audiobook-manager:5173
}
```

Caddy passes websockets and the original `Host` on its own.

## サブフォルダとドメイン

`/abm` の下で配信するには、General の **URL Base** を `/abm` にして再起動します。公開アドレスは **Application URL** に入れてください。

保存が `cross_origin_rejected` で失敗するなら、ブラウザのオリジンが一致していません。まず Host ヘッダーを直してください。それでもダメなら、Security の **CORS Allowed Domains** に自分のドメインを追加して再起動します。

## ボディサイズ

大きなアップロードが 413 で失敗するなら、`MAX_REQUEST_BODY_BYTES` だけでなくプロキシ側の上限も確認してください。

## ログに出るメッセージ

- 「carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES」：そのアドレスを追加してください。
- 「... is in TRUSTED_PROXIES but didn't name a client address」：プロキシが `X-Forwarded-For` か `X-Real-IP` を送るようにしてください。

## トラブルシューティング

ページが真っ白になる、またはリバースプロキシが `/initialize.json` を通す必要があると書かれた「Could not load」メッセージが出る（0.19.1 以降で報告されます）場合は、プロキシが `/initialize.json` を ABM に渡していません。上のほかのパスと一緒に通してください。ライブ更新がいつまでも接続しないときは、たいてい websocket のアップグレードか `Sec-WebSocket-Protocol` ヘッダーが通っていません。

[セキュリティとサインイン](/ja/settings/security/)も見てください。
