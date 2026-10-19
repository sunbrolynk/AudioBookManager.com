---
title: Audible の設定
description: アカウント、同期のスケジュール、ダウンロード、診断。
---

**Settings > Audible** では、アカウントの接続と、同期やダウンロードの調整をします。機能の仕組みは [Audible](/ja/audible/) のページにあります。

## アカウント

アカウントをつなげるには、**Marketplace**、**Display Name**、それにサインイン後に Amazon が返してくる **Redirect URL** が必要です。アカウントごとに別々のライブラリを持ちます。再サインインが必要になったら、アカウントを削除せずに同じアカウントでサインインし直してください。削除するとライブラリが消え、Audible からデバイスも外れます。

## スケジュール

| 設定 | 効果 |
|---|---|
| Auto Sync | スケジュールに沿ってライブラリを同期する |
| Sync on Account Add | アカウントを接続したらすぐ同期する |
| Frequency | 毎日、毎週、毎月。毎週なら Day of Week、毎月なら Day of Month（1〜28）が加わる |
| Time | 時と分 |
| Use CRON Expression | 上のオプションの代わりにカスタムの cron 式を使う |

## ダウンロードの設定（Download Settings）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Auto Add to Library | オン | ダウンロードした本を ABM のライブラリに追加する |
| Concurrent Downloads | 2 | 1〜5。大きいほど速いが、Audible のレート制限に引っかかることがある |
| Preferred Quality | High Quality | High、Normal、Low |
| Delete Encrypted Files | オン | M4B に復号したあと、暗号化された AAXC ファイルを削除する |
| Temp Download Path | 空 | 空ならシステムの一時フォルダを使う |

ダウンロードに失敗すると、間隔を広げながら自動で何回かリトライします。それより長く障害が続くと、最大6時間までタスクを再キューします。ライセンスの拒否、持っていない本、復号の失敗は1回で失敗になります。

## 接続の診断（Connection Diagnostics）

アカウントを選んで診断を実行します。FFmpeg、認証情報、API への接続、ダウンロードできるかをテストし、Audible から見える自分の送信元 IP も表示します。
