---
title: Libex
description: ABM の本のデータがどこから来ているか。
---

ABM は本、著者、シリーズ、チャプターのデータを **Libex** から取得しています。Libex は Audible のメタデータを扱うオープンなサービスで、ABM とは別のプロジェクトです。データの出どころは Libex です。大事なのは、データを受け取ったあとで ABM がそれをどう扱うか、そしてそのうちどこまでを自分で決められるかです。このセクションの残りはその話です。

Libex: [ソースコード](https://github.com/LibexHQ/Libex) · [API リファレンス](https://libexdb.com/redoc)

**Settings > Metadata** で取得元を選びます。Built-in、libexdb.com のホスト型インスタンス、または自分の Libex サーバーです。[メタデータの取得元を選ぶ](/ja/metadata/choosing-a-source/)を見てください。

Libex に接続できないときは、ABM が取得元の名前を出してそう教えてくれます。その間も本の追加やインポートは手作業でできます。[トラブルシューティング](/ja/troubleshooting/#メタデータの取得元が使えない)を見てください。
