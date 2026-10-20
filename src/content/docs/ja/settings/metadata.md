---
title: メタデータ
description: ABM がどのサイドカーファイルと音声タグを、いつ書き込むか。
---

**Settings > Metadata** では、ABM が本のフォルダとファイルに何を書き込むかを決めます。それらのファイルがどう使われるかは[サイドカーファイル](/ja/using/sidecars/)にあります。

## メタデータファイルの作成

| 設定 | デフォルト | 効果 |
|---|---|---|
| Create on Book Add | オフ | 本を未入手として追加したときにファイルを書き込む |
| Create on Import | オン | オーディオブックをインポートしたときにファイルを書き込む |
| Create on Refresh | オフ | メタデータを更新したときにファイルを作成・更新する |
| Overwrite Existing | オフ | フォルダにすでにあるファイルを置き換える |

作成するファイル：`cover.jpg`（オン）、`title.opf`（オン、Audiobookshelf 互換）、`desc.txt`（オン）、`reader.txt`（オン）。

## 音声ファイルへのタグ書き込み

ffmpeg を使って、音声ファイルそのものにタグを書き込みます。

| 設定 | デフォルト |
|---|---|
| Write Audio Tags | オフ |
| Write Tags on Import | タグ書き込みがオンならオン |
| Write Tags on Refresh | オフ |

タグの項目（全部デフォルトでオン）：Title、Artist（著者）、Album Artist（著者）、Album（タイトル／シリーズ）、Genre、Year、Comment（説明）、Narrator（Composer）、Cover Art。

## 今後のリリースで登場

メタデータの取得元の選択と、メタデータライブラリのローカルコピーは、今後のリリースで予定しています。[メタデータは自分で決める](/ja/metadata/control/)を見てください。

## 注意点

- タグを書き込むと音声ファイルが変わります。Audiobookshelf からは変更されたファイルとして見えます。
- タグの書き込み中にメタデータや表紙を取得できなかった場合、呼び出しは失敗せずに警告を返します。
