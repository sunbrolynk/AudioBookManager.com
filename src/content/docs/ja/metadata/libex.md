---
title: Libex
description: ABM の本のデータがどこから来ているか。
---

ABM は本、著者、シリーズ、チャプターのデータを **Libex** から取得しています。Libex は Audible のメタデータを扱うオープンなサービスで、ABM とは別のプロジェクトです。データの出どころは Libex です。大事なのは、データを受け取ったあとで ABM がそれをどう扱うか、そしてそのうちどこまでを自分で決められるかです。このセクションの残りはその話です。

Libex: [ソースコード](https://github.com/LibexHQ/Libex) · [API リファレンス](https://libexdb.com/redoc)

リリース版はデフォルトで libexdb.com の公開 Libex インスタンスに問い合わせます。次のリリースでは取得元を選べるようになります。[メタデータの取得元を選ぶ](/ja/metadata/choosing-a-source/)を見てください。

Libex に接続できないときは、ABM が取得元の名前を出してそう教えてくれます。その間も本の追加やインポートは手作業でできます。[トラブルシューティング](/ja/troubleshooting/#メタデータの取得元が使えない)を見てください。
