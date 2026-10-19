---
title: インデクサー
description: Newznab、Torznab、MyAnonamouse、Prowlarr。
---

**Settings > Indexers** には、ABM がリリースを検索する先が並びます。

## 種類

Newznab（Usenet）、Torznab（torrent）、MyAnonamouse、それに Prowlarr からインデクサーを同期する Prowlarr 連携です。

## 項目

| 項目 | 対象 | 効果 |
|---|---|---|
| Name | すべて | ラベル |
| Enable RSS | すべて | RSS 同期に含める |
| Enable Automatic Search | すべて | ABM が始める検索に使う |
| Enable Interactive Search | すべて | 手動で検索するときに使う |
| URL, API Path, API Key | Newznab、Torznab | 接続先と接続方法。認証情報は URL ではなく必ず専用の項目に入れる |
| Categories | Newznab、Torznab | 検索するカテゴリ |
| Cookie (mam_id) | MyAnonamouse | セッション Cookie |
| Search Type | MyAnonamouse | All Torrents、Active Only、Freeleech Only、Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | 検索の範囲を広げる |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | torrent | リリースの条件とシードの目標 |
| Indexer Priority | すべて | 1（最高）〜50（最低）、デフォルトは25。同じリリースが2つのインデクサーから来たら、数字が小さい方が勝つ |
| Download Client | すべて | このインデクサーからの取得を特定のクライアントに送る。(Any) ならどれでも |
| Tags | すべて | 一致するタグを持つものにだけこのインデクサーを使う |

保存した API キーや Cookie は二度と表示されません。編集時に空欄のままにすれば維持されます。URL を変えるときはシークレットを入力し直す必要があるので、キーがうっかり新しいアドレスに送られることはありません。

## オプション

これは全部のインデクサーに適用されるので、各インデクサーのルールに従って設定してください。

| 設定 | デフォルト | 効果 |
|---|---|---|
| Minimum Age | 0（分） | これより新しい Usenet のリリースを無視する |
| Retention | 0（日） | これより古いリリースを無視する。0 は無制限 |
| Maximum Size | 0（MB） | 0 は無制限 |
| RSS Sync Interval | 15（分） | RSS をポーリングする間隔 |

MAM のリストは[インポートリスト](/ja/settings/import-lists/)にも使えます。

Sonarr を知っているなら：インデクサーごとに RSS、自動検索、インタラクティブ検索を分けるのは同じです。カテゴリ用の「全部テスト」は別にありません。
