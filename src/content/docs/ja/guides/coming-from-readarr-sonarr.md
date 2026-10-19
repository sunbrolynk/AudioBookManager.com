---
title: Readarr や Sonarr から乗り換える
description: そのまま使えるものと、違うところ。
---

Sonarr、Radarr、Readarr を使ったことがあれば、ABM のほとんどは思ったとおりの場所にあります。

## 同じところ

Wanted（Missing、Cutoff Unmet）、Activity（Queue、History、Blocklist）、iCal フィード付きの Calendar、RSS 対応のインデクサー、自動検索とインタラクティブ検索、カットオフとアップグレードのある品質プロファイル、ディレイプロファイルとリリースプロファイル、タグ、Connect、リモートパスマッピング、ゴミ箱、バックアップ、Tasks と Status。

## 違うところ

| *arr では | ABM では |
|---|---|
| 解像度ベースの品質 | 音声フォーマットのランキング（単一ファイルか複数ファイルか） |
| カスタムフォーマット | Must Contain、Must Not Contain、Preferred を持つリリースプロファイル |
| 対象はエピソード、映画、本 | 本。シリーズと巻数はカタログとして追跡 |
| 自前のサービスからのメタデータ | Libex。表紙はロックでき、サイドカーとタグも書き込む |
| ダウンロードフォルダ1つ | 同じ。さらに既存のコレクション向けに Library Import |
| メディア変換なし | 変換キュー：変換、結合、分割、チャプター |
| 命名フォーマット | フォルダ名は ABM が決める。Rename Files は一覧にある |
| いろいろな種類のインポートリスト | MAM と RSS |

## ABM にないもの

Flood はクライアントではありません。カスタムフォーマットはありません。Readarr の本（電子書籍）の対応は含まれていません。ABM はオーディオブック専用です。

## 移行する

Readarr からのインポーターはありません。[ライブラリのインポート](/ja/library-import/)で ABM を既存のオーディオブックフォルダに向けて、[ライブラリを移してくる](/ja/guides/moving-a-library-in/)を見てください。
