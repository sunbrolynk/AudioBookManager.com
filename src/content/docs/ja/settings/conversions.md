---
title: 変換の設定
description: デフォルト、コーデックのオプション、チャプター、メタデータ、ゴミ箱、ffmpeg。
---

**Settings > Conversions** では[変換](/ja/using/conversions/)のデフォルトを決めます。ジョブごとに上書きもできます。

## 一般（General）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Enable Conversions | オン | オフにすると、変換の作成、一括キュー追加、再試行は HTTP 409 で拒否され、すでにキューにあるジョブはその旨のメッセージで失敗し、**Auto-Reformat on Import** は何もキューに入れません |
| Conversion Folder | 空 | 作業用の場所。空ならシステムの一時フォルダを使う |
| Concurrent Conversions | 2 | 1〜4。この値×**Threads Per Job** はコア数以下にしておく。超えているとページに警告が出る |
| Threads Per Job | Auto | ジョブごとの FFmpeg のスレッド数。詳細ビューにあります。Auto は ABM 用にコアを2つ空け、残りを同時に動くジョブで分けます。たとえば8コアで同時2ジョブなら、1ジョブあたり3スレッドです。固定の数も選べます |
| Process Priority | Normal | Low ならほかの処理が重くならない。High なら早く終わる |

## 音質のデフォルト

| 設定 | デフォルト |
|---|---|
| Default Output Format | M4B（ほかに MP3、M4A、FLAC、Opus） |
| Default Bitrate | 128 kbps（64、96、128、192、256、または再エンコードしない Copy） |
| Default Sample Rate | Auto はレートを指定せず、FFmpeg に任せます。22050、44100、48000 Hz を選ぶとそのレートにリサンプルします。Opus は決まったレートしか扱えないので、22050 は 24000 に、44100 は 48000 になります（ログに出ます） |
| Default Channels | Auto は元のチャンネル構成のままにします。Mono は1チャンネルにミックスダウンして、ファイルを小さくします。Stereo は2チャンネルにします |

レートとチャンネルの2つの一覧は、ページに出ている値しか受け付けません。保存された値が不正なら、Auto として読み込まれます。

## コーデックのオプション

| フォーマット | エンコーダー | オプション |
|---|---|---|
| M4B、M4A | AAC | AAC Profile（デフォルトは AAC-LC）と AAC VBR（品質1〜5）。VBR がオフのときはビットレートが使われます。エンコーダーが HE-AAC を作れないため、プロファイルは AAC-LC だけです。保存済みの HE プロファイルは AAC-LC として読み込まれます |
| MP3 | LAME | VBR の品質0〜9（デフォルトは4）と Joint Stereo（オン）。ビットレートは VBR がオフのときに使われる |
| Opus | libopus | 可変ビットレート（オン）と Application：Audio（デフォルト）、VoIP、Low Delay |
| FLAC | FLAC | 圧縮レベル0〜12（デフォルトは5）。ビットレートは無視される |

ビットレートを **Copy** にすると、再エンコードもコーデックのオプションもすべてスキップされます。

## チャプターの扱い（Chapter handling）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Default Chapter Behavior | Auto | あれば残し、なければ生成する。ほかに、残すだけ、常に生成、なし |
| Chapter Naming Format | `Chapter {n}` | ABM が作るしかないチャプターの名前。`{n}` は番号、`{title}` は元のファイル名。ファイルや Libex から来たチャプター名はそのまま残る |
| Silence Detection | オフ | チャプターのないファイルに対して、ABM は音声の一番長い無音の位置にチャプターを作ります。Split Chapters と、Libex にチャプターがないときの単一ファイルへの Ensure Chapters で使われます。オフだと、そのようなファイルの分割は失敗します |
| Target Chapter Length | 600 s | Silence Detection がオンのときに表示されます。60 秒以上。各チャプターは、この長さの半分の範囲内で一番長い無音の位置で終わります。無音がなければこの長さで終わります。短い余りは最後のチャプターに足され、チャプターはファイル全体をカバーします |
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
| Retention Period | 7日 | これより古い項目は、ごみ箱のクリーンアップタスクで削除されます。0 なら永久に残します |
| Auto-Empty When Bin Is Large | オフ | 下のしきい値を有効にします |
| Auto-Empty Threshold | 10 GB | 変換のあと、ごみ箱がこの値より大きいと、古い項目から削除されます |
| Delete Original | オフ | ジョブごとのデフォルト。上書きできる |
| Update Library Paths | オン | 本のレコードが変換後のファイルに追従する |
| Auto-Reformat on Import | オフ | 新しくインポートした本が別のフォーマットで届いたら、上のデフォルトで変換する |
| Backup Original Metadata | オフ | 変換の前に、本のフォルダ内の `.metadata_backup` フォルダに JSON ファイルを書き出します。元の各ファイルの名前、フォーマット、サイズと、埋め込まれているタグやチャプターが載っています |

## FFmpeg の詳細設定

FFmpeg Path（空なら PATH から探す）、Custom FFmpeg Arguments（すべてのコマンドの末尾に付く。おかしな引数だと変換が失敗する）、Logging Level（デフォルトは error）、Keep FFmpeg Logs（オフ）。
