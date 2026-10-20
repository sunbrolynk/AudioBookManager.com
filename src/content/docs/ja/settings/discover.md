---
title: ディスカバーの設定
description: ディスカバーのカタログの更新スケジュールとスクレイピングの上限。
---

**Settings > Discover** では、[ディスカバー](/ja/using/discover/)のカタログをどう埋めるかを決めます。

## 更新とカタログの状態

各カタログ（New Releases、Coming Soon、Audible Best、Recommended）にはそれぞれ **Refresh** と **Clear** のボタンがあり、どれくらい埋まっているかもページに表示されます。

## スケジュール

| 設定 | 効果 |
|---|---|
| Auto Refresh | スケジュールに沿ってカタログを更新する |
| Frequency | 毎日、毎週、毎月。曜日・日付と時刻も指定 |
| Refresh on Startup | ABM の起動時に空のカタログを埋める |
| Use CRON Expression | シンプルなオプションの代わりに使う |

## スクレイピング

| 設定 | 範囲 | 効果 |
|---|---|---|
| Pages to Scrape | 1〜50 | カタログごとに読む Audible のページ数 |
| Max ASINs per Refresh | 100〜5000 | 1回の更新で Libex から取得する本の数 |
| Batch Size | 10〜900 | Libex への1リクエストあたりの ASIN 数。大きいほど速いが、環境によっては失敗することもある |

デフォルト値はアプリの中にあるので、ここには書いていません。ページを開いて確認してください。

## 注意点

Libex に接続できないときは更新がスキップされ、ログに一度だけ記録されます。
