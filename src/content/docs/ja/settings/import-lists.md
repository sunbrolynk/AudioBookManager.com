---
title: インポートリスト
description: MyAnonamouse や RSS フィードから未入手の本を取り込む。
---

**Settings > Import Lists** では、外部のソースから本を自動で追加します。

## ソース

- **MAM**：MyAnonamouse のウィッシュリスト。**MAM Session ID** を使います。
- **RSS**：自分で指定する **RSS Link** と、任意の **Website URL**。Website は http か https である必要があります。

## リストごとの設定

| 項目 | 効果 |
|---|---|
| Name | ラベル |
| Monitor | 追加した本を Monitored にするか Unmonitored にするか |
| Root Folder | 本の置き場所 |
| Quality Profile | プロファイル、または Inherit（デフォルトを使う） |
| Tags | リストが追加するもの全部に付ける |

**Sync Now** でリストをすぐに実行します。

## オプション

| 設定 | デフォルト | 効果 |
|---|---|---|
| RSS Sync Interval | 12（時間） | リストを同期する間隔。0 で同期オフ |
| Clean Library Level | Disabled | 本がリストから外れたときにどうするか |

Clean Library Level の選択肢：Disabled、Log Only、Keep and Unmonitor Audiobook、Remove Audiobook and Keep Files、Remove Audiobook and Delete Files。最後のものはファイルを削除します。本当にそうしたいときだけ選んでください。

## 除外

**Import List Exclusions** では、**ASIN**、**Title**、**Year** で本をブロックして、リストが二度と追加しないようにします。入力には **Lookup ASIN** を使ってください。

## 注意点

- 保存した RSS リンクやセッション ID は二度と表示されません。アドレスを変えるときはシークレットを入力し直す必要があります。
- リストは On Import List Synced と On Import List New Items の通知を送ります。[Connect](/ja/settings/connect/)を見てください。
