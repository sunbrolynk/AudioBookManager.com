---
title: メディア管理
description: ルートフォルダ、インポート、追加ファイル、ゴミ箱、スキャン、アップグレード、権限。
---

**Settings > Media Management** では、本をどこに置くか、ファイルをどう取り込むかを決めます。詳細設定の項目は **Show Advanced** をオンにすると表示されます。

## ルートフォルダ（Root Folders）

ルートフォルダは、ABM が本を管理するディレクトリです。**Add Root Folder** で追加すると、パスを直接入力もできるフォルダブラウザが開きます。ABM はルートの下にあるまだ取り込んでいないフォルダを一覧にして、インポートすることもできます。ルートを追加すると、空き容量とハードリンクに対応しているかがチェックされます。ルートを削除するときは、どうするかを聞かれます。**Remove from ABM only**（デフォルト）はその下の本を ABM から外してファイルは残し、**Delete the books and their files** はそのパスの下にあるものを、ゴミ箱を使わずに全部完全に削除します。本が入っているルートは、文字を入力して確認する必要があります。

デフォルトのルートフォルダは、新しい本が入る場所であり、Library Import でハードリンクを選べるかどうかを決める場所でもあります。

## フォルダ（Folders）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Create Empty Book Folders | オフ | 追加時、ルートフォルダの変更時、ディスクスキャン中に、足りない本のフォルダを作る。**Delete empty folders** がオンの間は無視されるので、削除されるためだけにフォルダが作られることはない。 |
| Delete empty folders | オフ | ディスクスキャン中と、本のファイルを削除したときに、空の本のフォルダを削除する |

## インポート（Importing）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Skip Free Space Check | オフ | ABM がルートの空き容量を検出できない場合に使う |
| Minimum Free Space | 100（MB） | 残りがこれより少なくなるインポートは拒否する |
| Use Hardlinks instead of Copy | オン | 完了したダウンロード用：コピーではなくハードリンクにして、シードで容量が倍にならないようにする。同じボリュームである必要がある。 |
| Library Import | Copy | [ライブラリのインポート](/ja/library-import/)のデフォルト：コピー、ハードリンク、移動。ハードリンクは、デフォルトのルートがチェック済みで対応していると確認できるまでグレーアウトされる。 |
| Import Extra Files | オン | 音声以外のファイルを一緒に持ってくるかの全体スイッチ。Library Import、Manual Import、完了したダウンロードに適用される |
| Extra File Extensions（詳細設定） | 空 | 一緒に持ってくるファイルの種類を足す。名前はそのまま。たとえば `srt, lrc`。ドットはあってもなくてもよく、カンマかスペースで区切る。実行ファイルやダウンロード途中のファイルなど、ブロック対象の種類は保存できない。**Import Extra Files** がオフの間は無効 |
| Preferred Cover（詳細設定） | Matched | 両方あるとき、マッチした版の表紙を使うか、フォルダにある一番いい画像を使うか |

**Import Extra Files** は、本の音声と一緒にほかのファイルも持ってきます。どの種類を持ってくるかは5つのスイッチで選び、**Extra File Extensions** に一致するファイルは、その種類のスイッチがオフでも持ってきます。

| スイッチ | デフォルト | 対象 |
|---|---|---|
| Cover art | オン | 表紙と、裏表紙やブックレットのスキャン |
| Book info files | オン | metadata.json、.opf、.nfo、desc.txt、reader.txt |
| PDFs and companion docs | オフ | 本に付いてくる PDF |
| Chapters, transcripts and playlists | オン | .cue、チャプターリスト、字幕、歌詞、プレイリスト。中に書かれたファイル名は、リネーム後の音声ファイル名に書き換えられる。 |
| Audible originals and ebooks | オフ | .aax/.aaxc、バウチャー、epub など |

ダウンロード途中のファイルと実行ファイルは決してインポートされません。ABM 自身の `metadata.json` は常に ABM が扱います。

ハードリンクは **Use Hardlinks instead of Copy** とは別物です。あちらはダウンロード用です。Library Import のデフォルトは、Add to Library ダイアログで最初に選ばれている値というだけです。

## ファイル管理（File Management）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Unmonitor Deleted Books | オフ | ディスクから削除された本を監視外にする |
| Change File Date | None | インポート時と再スキャン時にファイルの日付を変える |
| Enable Recycling Bin | オン | 削除した本のファイルを、消さずにゴミ箱へ移す |
| Recycling Bin | 空 | ゴミ箱の場所。空なら ABM のデフォルト（`/config/recycle/media`）を使う |
| Recycling Bin Cleanup | 7（日） | 0 で自動削除をオフ |
| Library Scan Interval | 24 | 自動スキャンの間隔（時間） |
| Watch for Changes | オン | ファイルの追加、削除、変更があったらスキャンする |
| Cover Cache Workers | 4 | アートワークをキャッシュするとき、同時にダウンロードする表紙の数（1〜16） |

## 品質のアップグレード（Quality Upgrades）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Automatic Upgrade Search | オン | ダウンロード済みでまだカットオフに届いていない本について、よりいいリリースを定期的に探す。本当にアップグレードになる場合だけ置き換える。 |
| Upgrade Search Interval | 24（時間） | 実行する間隔 |

## 権限（Permissions、詳細設定）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Set Permissions | オフ | インポート時とリネーム時に chmod を実行する |
| chmod Folder | 755 | フォルダとファイルの8進数のモード。ファイルには実行ビットを付けない |
| chown Group | 空 | グループ名か gid。リモートのファイルシステムでは gid を使う |

## 注意点

- ゴミ箱を有効にしているのにそのフォルダが使えない場合、ゴミ箱が必要な削除は、完全に削除されるのではなく失敗します。
- ハードリンクは1つのファイルシステムの中でしか使えません。リンクできないファイルはコピーされ（移動はされません）、インポートの結果に数が出ます。

Sonarr を知っているなら：これは命名フォーマットのない Sonarr の Media Management です。フォルダ名は ABM が決めます。一括リネームは Library、Series、Authors の **Rename Files** にあります。
