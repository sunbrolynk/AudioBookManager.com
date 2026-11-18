---
title: メタデータ
description: ABM がどのサイドカーファイルと音声タグを、いつ書き込むか。
---

**Settings > Metadata** では、ABM が本のフォルダとファイルに何を書き込むかを決めます。それらのファイルがどう使われるかは[サイドカーファイル](/ja/using/sidecars/)にあります。

## 取得元 (Source)

**Metadata Source** は Built-in(デフォルト)、Hosted (libexdb.com)、Self-hosted のどれかで、Self-hosted では **Server URL** が必要です。**Test** は保存せずに選んだ取得元へ実際にリクエストを送り、**Status** は準備できているかを示し、**Connection** は問い合わせが出ていく経路を表示して **Settings > Network** へのリンクになります。切り替えはすべての問い合わせにすぐ反映されます。[メタデータの取得元を選ぶ](/ja/metadata/choosing-a-source/)を見てください。

## メタデータファイルの作成

| 設定 | デフォルト | 効果 |
|---|---|---|
| Create on Book Add | オフ | 本を未入手として追加したときにファイルを書き込む |
| Create on Import | オン | オーディオブックをインポートしたときにファイルを書き込む |
| Create on Refresh | オフ | メタデータを更新したときにファイルを作成・更新する |
| Overwrite Existing | オフ | フォルダにすでにあるファイルを置き換える |

作成するファイル：`cover.jpg`（オン）、`title.opf`（オン、Audiobookshelf 互換）、`desc.txt`（オン）、`reader.txt`（オン）。

## 音声ファイルへのタグ書き込み

オーディオタグをオーディオファイルそのものに書き込みます。

| 設定 | デフォルト |
|---|---|
| Write Audio Tags | オフ |
| Write Audio Tags on Import | タグ書き込みがオンならオン |
| Write Audio Tags on Refresh | オフ |

タグの項目（全部デフォルトでオン）：Title、Artist（著者）、Album Artist（著者）、Album（タイトル／シリーズ）、Genre、Year、Comment（説明）、Narrator（Composer）、Cover Art。

## ローカルストレージ (Local Storage)

Built-in の取得元では **Local Storage** と **Storage Backups** のセクションが表示されます。これはプレビューで、まだ接続されていません。[メタデータは自分で決める](/ja/metadata/control/)を見てください。

## 注意点

- タグを書き込むと音声ファイルが変わります。Audiobookshelf からは変更されたファイルとして見えます。
- タグの書き込み中にメタデータや表紙を取得できなかった場合、呼び出しは失敗せずに警告を返します。
- 接続に拒否されてカバーを埋め込めなかったときは、ただの成功ではなく、本のページと編集ダイアログに警告が表示されます。
