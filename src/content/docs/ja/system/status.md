---
title: ステータス
description: ヘルスチェックと、ABM が今何をしているかの確認。
---

**System > Status** はヘルスチェックを実行し、問題のあるものを一覧にします。失敗しているダウンロードクライアントとインデクサー、ルートフォルダの問題、Libex に接続できないことなどです。データベースの接続プールの使用状況も表示されます。何も問題がなければ "All systems healthy" と表示されます。

ヘルスチェックはバックグラウンドでも6時間ごとに実行されます。Connect では **On Health Issue** と **On Health Restored** で通知を送れます。[Connect](/ja/settings/connect/)を見てください。

Sonarr を知っているなら、System > Status と Health を1ページにまとめたものと考えてください。

## 注意点

- 無効にしたダウンロードクライアントは異常扱いになりません。
- 再サインインが必要な Audible アカウントは、Audible の設定ページだけでなくここにも表示されます。
