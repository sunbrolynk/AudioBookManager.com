---
title: 変換の設定
description: デフォルト、コーデックのオプション、チャプター、メタデータ、ゴミ箱、ffmpeg。
---

**Settings > Conversions** では[変換](/ja/using/conversions/)のデフォルトを決めます。ジョブごとに上書きもできます。

## 一般（General）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Enable Conversions | オン | 全体のスイッチ |
| Conversion Folder | 空 | 作業用の場所。空ならシステムの一時フォルダを使う |
| Concurrent Conversions | 2 | UI では1〜4。同時実行数×スレッド数はコア数より小さくしておく |
| Process Priority | Normal | Low ならほかの処理が重くならない。High なら早く終わる |

## 音質のデフォルト

| 設定 | デフォルト |
|---|---|
| Default Output Format | M4B（ほかに MP3、M4A、FLAC、Opus） |
| Default Bitrate | 128 kbps（64、96、128、192、256、または再エンコードしない Copy） |
| Default Sample Rate | Auto（元のファイルに合わせる） |
| Default Channels | Auto（元のファイルに合わせる） |

## コーデックのオプション

AAC Profile（デフォルトは AAC-LC、ほかに HE-AAC、HE-AACv2）と AAC VBR、MP3 の VBR 品質とジョイントステレオ、FLAC の圧縮レベル（デフォルトは5）、Opus の可変ビットレート（オン）とアプリケーションの種類（デフォルトは Audio、ほかに VoIP と Low Delay）。

## チャプターの扱い（Chapter handling）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Default Chapter Behavior | Auto | あれば残し、なければ生成する。ほかに、残すだけ、常に生成、なし |
| Chapter Naming Format | `Chapter {n}` | 生成するチャプター名のテンプレート |
| Silence Detection | オフ | 実験的な機能。無音部分からチャプターを見つけようとする |
| Minimum Chapter Length | 60秒 | 検出したチャプター用 |
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
| Retention Period | 7日 | 0 で自動削除をオフ |
| Auto-Empty on Low Disk Space | オフ | 空き容量がしきい値を下回ったらゴミ箱を空にする |
| Auto-Empty Threshold | 10（%） | 空き容量のしきい値 |
| Delete Original | オフ | ジョブごとのデフォルト。上書きできる |
| Update Library Paths | オン | 本のレコードが変換後のファイルに追従する |
| Auto-Reformat on Import | オフ | 新しくインポートした本が別のフォーマットで届いたら、上のデフォルトで変換する |
| Backup Original Metadata | オフ | 先に元のタグを `.json` のサイドカーに保存する |

## FFmpeg の詳細設定

FFmpeg Path（空なら PATH から探す）、Threads Per Job（0 なら CPU 数から2を引いた数を自動で選ぶ）、Custom FFmpeg Arguments（すべてのコマンドの末尾に付く。おかしな引数だと変換が失敗する）、Logging Level（デフォルトは error）、Keep FFmpeg Logs（オフ）。
