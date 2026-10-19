---
title: 通知と連携（Connect）
description: 通知、メディアサーバー、カスタムスクリプト。
---

**Settings > Connect** はイベントをほかの場所に送ります。Sonarr と同じく Connect という名前です。

## エージェント

**通知エージェント**：Discord、Slack、Telegram、Pushover、Pushbullet、Simplepush、ntfy、Gotify、Notifiarr、Email、SendGrid、Webhook、Apprise。**メディアサーバー**：Jellyfin と Emby。**その他**：Custom Script。Audiobookshelf は Connect のエージェントではありません。

## イベント

接続ごとに、どのイベントで送るかを選びます。

On Grab、On Import、On Upgrade、On Conversion、On Health Issue、On Health Restored、On Task Failed、On Application Update、On Grab Failed、On Import Failed、On Download Failed、On Conversion Failed、On Import List Synced、On Import List New Items、On Audible Download Done、On Audible Download Failed。

## 接続ごとの設定

| 項目 | 効果 |
|---|---|
| Name, Enable | ラベルとオン／オフ |
| Include covers | エージェントが対応していれば本の表紙を添付する |
| Tags | 一致するタグを持つものだけで送る |
| Conditions | 著者やサイズなどの項目に対するルール（AND で結合）。形式がおかしい条件は、通知を止めるのではなく通過扱いになる |
| Priority | エージェントが対応している場合 |

**Test** でテストメッセージを送ります。**Test All** は全部の接続をテストします。

## カスタムメッセージ

カスタムメッセージを使うと、イベントの文面を書き換えられます。**Format** と **Cover**（Auto は本の表紙、None、または Custom URL）を選び、**Title** と本文を書いて、変数をクリックすると挿入されます。イベントごとのデフォルトのテンプレートが出発点になります。プレビューで結果を確認でき、接続を通してテストを送ることもできます。

## 注意点

- トークンなどのシークレットは暗号化して保存され、編集画面では空欄で表示され、空欄のままなら維持されます。送信先を変えるときは入力し直す必要があります。
- メタデータの障害についての失敗タスク通知は、失敗のたびではなく障害1回につき1回だけ送られます。スケジュール実行からは送られません。
- Webhook のヘッダーは JSON オブジェクトで、シークレットとして保存されます。
