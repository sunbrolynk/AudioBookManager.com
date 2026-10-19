---
title: ダウンロードクライアント
description: 対応クライアント、完了したダウンロードの処理、リモートパスマッピング。
---

**Settings > Download Clients** では、実際にダウンロードをするプログラムを接続します。

## 対応しているクライアント

Deluge、qBittorrent、Transmission、rTorrent、SABnzbd、NZBGet、Blackhole（監視フォルダ）。これで全部です。

## 項目

どの項目が出るかはクライアントによって変わります。

| 項目 | 効果 |
|---|---|
| Name | ラベル |
| Host, Port, URL Base | クライアントが待ち受けている場所 |
| Use SSL, Verify TLS certificate | HTTPS を使うか、証明書をチェックするか |
| Username, Password, API Key | 認証情報。保存したシークレットは表示されない |
| Category | ABM が自分のダウンロードに付けるカテゴリやラベル。たとえば `audiobooks` |
| Watch Folder, Directory | Blackhole 用：ファイルを置く場所と、完了したファイルが出てくる場所 |
| Client Priority | 複数のクライアントが当てはまるとき、どれを使うか |
| Remove from Client, Also Delete Files, Remove Failed | インポート後や失敗時に、ABM がクライアントから何を削除するか |
| Queue Page Remove Action | Queue ページで行を削除したときの動き：ABM から消すだけ、クライアントから削除してファイルは残す、削除してファイルも消す |

**Test** で接続をチェックします。無効にしたクライアントは異常扱いになりません。失敗しているクライアントは、間隔を空けながら（バックオフ）リトライされます。

## 完了したダウンロードの処理

| 設定 | デフォルト | 効果 |
|---|---|---|
| Enable | オン | 完了したダウンロードを自動でインポートする |
| Redownload Failed | オン | 失敗したリリースをブロックリストに入れて、もう一度検索する |
| Redownload Failed from Interactive Search | オン | 同じことを、手動で選んだリリースに対しても行う |

インポートでハードリンクするかコピーするかは、[メディア管理](/ja/settings/media-management/)の **Use Hardlinks instead of Copy** で決まります。クライアントのフォルダが ABM から見えるのと同じパスでないなら、リモートパスマッピングを追加してください。

## リモートパスマッピング

クライアントは `/downloads/audiobooks` と報告するのに、ABM からは `/data/audiobooks` に見える、という場合はマッピングを追加します。

| 項目 | 効果 |
|---|---|
| Host | マッピングの対象になるクライアントのホスト |
| Remote Path | クライアントが報告するパス |
| Local Path | 同じフォルダを ABM から見たときのパス |

## 注意点

- 完了したダウンロードの中に読めないサブフォルダがあると、そのダウンロードのインポートは丸ごと止まります。クライアントからは何も削除されず、あとでリトライされます。
- Docker：できるなら、両方のコンテナでダウンロードフォルダを同じパスにマウントしてください。マッピングは最後の手段です。
