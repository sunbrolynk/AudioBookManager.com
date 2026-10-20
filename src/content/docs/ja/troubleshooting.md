---
title: トラブルシューティング
description: 一番ぶつかりやすい問題の直し方。
---

## 中断したインポートが残したファイル（.abmstage）

インポートでは、まず全部のファイルを最終的な名前の隣に仮置きし、全部そろったところで入れ替えます。何かが失敗すると、ABM は動かしたものを元に戻します。一部を戻せなかった場合、その部分は `.abmstage` で終わる隠しファイルとして本のフォルダに残ります。それが唯一のコピーかもしれないので、ABM はそれを消さずに残し、エラーでファイル名を示します。

本のフォルダに `.abmstage` ファイルがある間は、そのフォルダへのインポートが次のメッセージで止まります。

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

復旧の手順：

1. エラーに出ている `.abmstage` ファイルを見つけます。
2. ダウンロードの中に戻すか、本のフォルダに本来の名前で戻します。いらないなら削除します。
3. インポートをリトライします。

## リバースプロキシの後ろで全員がサインインを求められる

`TRUSTED_PROXIES` がないと、転送ヘッダー付きのリクエストは決してローカル扱いにならないので、サインインが必要になります。これは意図した動きです。

1. `TRUSTED_PROXIES` にプロキシのアドレスを設定します（例：`172.20.0.5`）。同じホスト上のプロキシなら `127.0.0.1` が必要です。
2. プロキシが `X-Forwarded-For` か `X-Real-IP` を送るようにします。nginx proxy manager、Traefik、Caddy はデフォルトで送ります。
3. ABM を再起動します。

どちらが原因かはアプリのログに出ます。

- 「carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES」：プロキシを `TRUSTED_PROXIES` に追加してください。
- 「... is in TRUSTED_PROXIES but didn't name a client address」：プロキシが `X-Forwarded-For` か `X-Real-IP` を送るように設定してください。

逆のケースもあります。転送ヘッダーを送らないプロキシはローカルのクライアントに見えるので、そこを通るものは全部サインインを省略します。Authentication Required を Enabled にしてください。

## ブラウザからの変更が拒否される

プロキシが元の `Host` ヘッダーを渡しているか、`X-Forwarded-Host` を送っているか確認してください。[環境変数](/ja/configuration/#リバースプロキシ)を見てください。

## プロキシの後ろで表紙が消える、ページの動きがおかしい

Content-Security-Policy ヘッダーは HTTPS の表紙画像しか許可しません。ブラウザのコンソールで違反が出ていないか確認してください。表紙を HTTPS で配信するか、`SECURITY_HEADERS_CSP_ENABLED=false` にしてください。

## 大きなリクエストが 413 を返す

`MAX_REQUEST_BODY_BYTES` を上げてください。リバースプロキシのほうがもっと低い上限を設けていて、自分で 413 を返していることもあります。

## メタデータの取得元が使えない

追加、検索、更新、Discover には Libex が必要です。ABM が応答を得られないと、本の検索は "Libex search failed"、著者やシリーズの検索は "Libex could not be reached; try again shortly" で失敗し、空の一覧は表示されません。原因は、Libex が落ちているか、ABM の接続が Libex に届いていないかのどちらかです。

1. [ABM のステータスページ](https://status.audiobookmanager.com)と [Libex のステータスページ](https://status.libexdb.com)で、みんなに対して落ちているのか確認してください。
2. コンテナがインターネットに出られるか、プロキシを使っているなら **Settings > General > Proxy** の設定が合っているかを確認してください。
3. 1分ほど待ってからもう一度試してください。
4. その間も、本の手動での追加とインポートはできます。

障害にぶつかったバックグラウンドタスクは、理由つきで失敗します。自動で再試行され、最大6回、または6時間のどちらか早いほうまで続きます。

## 更新で本の詳細が変わった

タイトル、説明、著者、ナレーターなどの項目はメタデータの取得元から来ていて、更新すると取得元の今の内容が反映されます。ABM にはこれらを手で編集する方法はありません。自分で決められるのは、表紙（ロックできます）、どのファイルを書き込むか、タグ、そして更新でサイドカーとタグを書き込むかどうかです。[メタデータは自分で決める](/ja/metadata/control/)を見てください。

## 本が Missing Files になっている

本はダウンロードされたものの、ファイルが ABM の探す場所にありません。マウントと権限を確認してから、**Refresh & Scan** を実行してください。フォルダが読めない本はスキャンしてもそのままにされ、タスクは理由付きで Partial と表示されます。

## 「Files left by an interrupted import」でインポートが止まる

上の `.abmstage` のセクションを見てください。

## ダウンロードは終わるのにインポートされない

リモートパスマッピングを追加するか、ABM とクライアントからフォルダが同じパスで見えるようにしてください。読めないサブフォルダがあると、権限を直すまでダウンロード全体がブロックされます。[ダウンロードクライアント](/ja/settings/download-clients/)を見てください。

## Docker からメタデータの取得元やインデクサーにつながらない

まず DNS とプロキシの設定を確認してください。Docker では、コンテナがインターネットに出られないと、ABM は Libex やインデクサーに届きません。

## それでも解決しないとき

[ABM の Discord](https://discord.gg/qeJRrM6AZ) で聞くか、[Issue を立てる](https://github.com/sunbrolynk/AudioBook-Manager/issues)か、[support@audiobookmanager.com](mailto:support@audiobookmanager.com) にメールしてください。
