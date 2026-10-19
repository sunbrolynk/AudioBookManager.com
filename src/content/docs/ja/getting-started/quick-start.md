---
title: クイックスタート
description: インストール直後から、最初の本を監視するまで。
---

コンテナが動いている状態から、本が検索されるようになるまでの最短ルートです。まずは ABM をインストールしてください。[ABM をインストールする](/ja/installation/)を見てください。

## 1. サインインする

最初のアクセスで、ログインの作成を案内してくれます。作成するまで ABM はリクエストを受け付けません。その後のサインインの動きは[セキュリティとサインイン](/ja/settings/security/)で説明しています。

## 2. ABM がインターネットにどうつなぐかを選ぶ

**Settings > General** に **Proxy & VPN** セクションがあります。内蔵のメタデータ取得元を使うつもりなら、先に接続方法を選ぶ必要があります。[メタデータの取得元を選ぶ](/ja/metadata/choosing-a-source/)を見てください。

## 3. ルートフォルダを追加する

ルートフォルダは ABM が本を置く場所です。**Settings > Media Management** の **Root Folders** セクションで追加します。プレーヤー（たとえば Audiobookshelf）が読むのと同じフォルダにしてください。

## 4. インデクサーとダウンロードクライアントを追加する

- **Settings > Indexers**：Newznab、Torznab、MyAnonamouse、Prowlarr。[インデクサー](/ja/settings/indexers/)を見てください。
- **Settings > Download Clients**：Deluge、qBittorrent、Transmission、rTorrent、SABnzbd、NZBGet、Blackhole。[ダウンロードクライアント](/ja/settings/download-clients/)を見てください。

クライアントが別のコンテナで動いているなら、クライアントと ABM からダウンロードフォルダが同じパスで見えているか確認するか、リモートパスマッピングを追加してください。

## 5. 品質プロファイルを決める

**Settings > Profiles** には、ABM が何を取得するか、何をアップグレードとみなすかを決める品質のランキングがあります。プロファイルの1つがデフォルトです。まずはそれを使って、あとから調整してください。[プロファイル](/ja/settings/profiles/)を見てください。

## 6. 本を取り込む、または追加する

- すでにコレクションがある？[ライブラリのインポート](/ja/library-import/)を使います。
- ゼロから始める？**Library > Add New** でタイトル、著者、シリーズから検索します。[新しく追加する](/ja/using/add-new/)を見てください。

追加した本は、ファイルがインポートされるまで未入手の状態です。未入手の本は **Wanted > Missing** に表示され、自動で検索されます。

## 7. 動いているところを見る

**Activity > Queue** にはダウンロード中のものが表示されます。**Activity > History** には取得したものとインポートしたものが表示されます。何かおかしくなったら、[トラブルシューティング](/ja/troubleshooting/)と[タスク](/ja/system/tasks/)のページを見てください。
