---
title: 未入手（Wanted）
description: 見つかっていない本と、品質のカットオフに届いていない本。
---

**Wanted** には2つのページがあります。

## 見つかっていない本（Missing）

ファイルがない監視中の本です。行ごとに **Auto Search**、**Interactive Search**、**Manual Import**、**Unmonitor** があります。

- Auto Search は有効なインデクサー全部に問い合わせて、プロファイルが許す中で一番いいリリースを取得します。
- Interactive Search はリリースを一覧にして、自分で選ばせてくれます。ここから選んだものは手動の取得として扱われます。
- Manual Import は、すでに持っているファイルを ABM に教えます。

ABM は見つかっていない本を自分でも検索します。リリースは取得の前にディレイプロファイルで保留されます。[プロファイル](/ja/settings/profiles/)を見てください。

## カットオフ未達（Cutoff Unmet）

ダウンロード済みだけど、品質がまだプロファイルのカットオフ（「Upgrade Until」）に届いていない本です。**Search All Cutoff Unmet** でまとめて検索します。よりよいコピーが古いものを置き換えるのは、ランキングで古いものより上にある場合だけです。

**Media Management > Quality Upgrades** でこの検索を自動にできます。**Automatic Upgrade Search**（デフォルトでオン）が **Upgrade Search Interval**（デフォルトは24時間）ごとに実行されます。[メディア管理](/ja/settings/media-management/)を見てください。

Sonarr を知っているなら、Wanted > Cutoff Unmet と同じ考え方です。解像度の代わりに、フォーマット（M4B、MP3 など、単一ファイルか複数ファイルか）のランキングを使います。
