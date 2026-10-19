---
title: 変換の設定
description: デフォルト、コーデックのオプション、チャプター、メタデータ、ゴミ箱、ffmpeg。
---

**Settings > Conversions** では[変換](/ja/using/conversions/)のデフォルトを決めます。ジョブごとに上書きもできます。

## 一般（General）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Enable Conversions | オン | Conversions ページでの変換をオフにする。**Auto-Reformat on Import** は別の設定 |
| Conversion Folder | 空 | 作業用の場所。空ならシステムの一時フォルダを使う |
| Concurrent Conversions | 2 | 1〜4。この値×**Threads Per Job**（このページの一番下の **Advanced FFmpeg** にある）はコア数以下にしておく。超えているとページに警告が出る |
| Process Priority | Normal | Low ならほかの処理が重くならない。High なら早く終わる |

## 音質のデフォルト

| 設定 | デフォルト |
|---|---|
| Default Output Format | M4B（ほかに MP3、M4A、FLAC、Opus） |
| Default Bitrate | 128 kbps（64、96、128、192、256、または再エンコードしない Copy） |
| Default Sample Rate | Auto（元のファイルに合わせる）。または 22050、44100、48000 Hz |
| Default Channels | Auto（元のファイルに合わせる）。または Mono か Stereo |

## コーデックのオプション

| フォーマット | エンコーダー | オプション |
|---|---|---|
| M4B、M4A | AAC | AAC Profile（デフォルトは AAC-LC）と AAC VBR（品質1〜5）。ビットレートは VBR がオフのときに使われる。HE-AAC と HE-AACv2 も一覧にあるが、今は AAC-LC としてエンコードされる |
| MP3 | LAME | VBR の品質0〜9（デフォルトは4）と Joint Stereo（オン）。ビットレートは VBR がオフのときに使われる |
| Opus | libopus | 可変ビットレート（オン）と Application：Audio（デフォルト）、VoIP、Low Delay |
| FLAC | FLAC | 圧縮レベル0〜12（デフォルトは5）。ビットレートは無視される |

ビットレートを **Copy** にすると、再エンコードもコーデックのオプションもすべてスキップされます。

## チャプターの扱い（Chapter handling）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Default Chapter Behavior | Auto | あれば残し、なければ生成する。ほかに、残すだけ、常に生成、なし |
| Chapter Naming Format | `Chapter {n}` | ABM が作るしかないチャプターの名前。`{n}` は番号、`{title}` は元のファイル名。ファイルや Libex から来たチャプター名はそのまま残る |
| Silence Detection | オフ | 実験的な機能。チャプターのない本を分割するときだけ使われ、ABM は無音部分で分割する。オフだと、そういう分割は失敗する |
| Minimum Chapter Length | 60秒 | 無音検出で作るチャプターの最短の長さ |
| Chapter Image Handling | Keep in file | ほかに、削除する、フォルダに取り出す |

## メタデータの扱い

| 設定 | デフォルト |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | オン（Audiobookshelf 用に JPEG のみ） |
| Cover Art Max Size | 1000x1000 |

## ファイルの管理

| 設定 | デフォルト | 効果 |
|---|---|---|
| Enable Recycle Bin | オン | 元のファイルを削除せずにゴミ箱に入れる |
| Recycle Bin Path | 空 | 空なら `/config/recycle/conversions` を使う |
| Retention Period | 7日 | ゴミ箱の中の項目に表示される期限を決める。今のところ、その日になっても何も削除されない |
| Auto-Empty on Low Disk Space | オフ | 下のしきい値をオンにする |
| Auto-Empty Threshold | 10 | 変換のあと、ゴミ箱の中身がこの GB 数を超えていたら古い項目から削除する。ページではパーセントと表示されるが、GB として読まれる |
| Delete Original | オフ | ジョブごとのデフォルト。上書きできる |
| Update Library Paths | オン | 本のレコードが変換後のファイルに追従する |
| Auto-Reformat on Import | オフ | 新しくインポートした本が別のフォーマットで届いたら、上のデフォルトで変換する |
| Backup Original Metadata | オフ | 変換の前に、元のファイルの記録（名前、フォーマット、サイズ）を隣の `.metadata_backup/` に保存する。音声タグは保存しない |

## FFmpeg の詳細設定

FFmpeg Path（空なら PATH から探す）、Threads Per Job（0 なら CPU 数から2を引いた数を自動で選ぶ）、Custom FFmpeg Arguments（すべてのコマンドの末尾に付く。おかしな引数だと変換が失敗する）、Logging Level（デフォルトは error）、Keep FFmpeg Logs（オフ）。
