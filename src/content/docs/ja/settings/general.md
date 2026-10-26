---
title: 一般
description: ホスト、セキュリティ、プロキシ、ログ、バックアップ。
---

**Settings > General** には Host、Security、Proxy、Logging、Backups のセクションがあります。Security には[専用のページ](/ja/settings/security/)があります。

## ホスト（Host）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Bind Address | `*` | 待ち受けるアドレス。再起動が必要 |
| Port Number | 5173 | 再起動が必要 |
| URL Base | 空 | パスのプレフィックス。`/audiobook-manager` のような、リバースプロキシのサブフォルダ用。再起動が必要 |
| Instance Name | Audiobook Manager | タブに表示され、syslog のアプリ名にも使われる |
| Application URL | 空 | 外部からのアドレス。`http(s)://`、ポート、URL Base まで含める |
| Enable SSL | オフ | ABM 自身が HTTPS で配信する。証明書のパスと鍵のパスを指定する。再起動が必要 |

Docker では、実際に効いてくるのは環境変数の `PORT` と compose のポートの割り当てです。[環境変数](/ja/configuration/)を見てください。

## プロキシ

ABM がメタデータ、表紙、Audible のページを取りにインターネットへ出るときの経路です。

| 設定 | デフォルト | 効果 |
|---|---|---|
| Use Proxy | オフ | 外部へのリクエストをプロキシ経由にする |
| Proxy Type | HTTP | HTTP、HTTPS、SOCKS4、SOCKS5 |
| Hostname, Port | 空 | プロキシのアドレス |
| Username, Password | 空 | 任意 |
| Test Connection | | プロキシをチェックする |

このセクションには、外部のサービスから見える自分の送信元 IP も表示されます。内蔵 VPN を含む接続方法の選択は、今後のリリースで予定しています。

## ログ（Logging）

| 設定 | デフォルト |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30日。0 でずっと残す |
| Activity Log Retention | 90日。0 でずっと残す |
| Book History Retention | 0（残す） |
| Automatic Cleanup | オン |
| Cleanup Time | 03:00 |
| SQL Logging | オフ。出力がとても多い |
| Parser Log Level, Matcher Log Level | Info。Debug だと量が多い |

[ログ](/ja/system/logs/)と[アクティビティログ](/ja/system/activity-log/)を見てください。

## バックアップ（Backups）

| 設定 | デフォルト | 効果 |
|---|---|---|
| Backup Folder | `/config/backups` | バックアップの保存先 |
| Automatic Backups | オフ | スケジュールでバックアップする |
| Schedule Frequency | Daily | 毎日、毎週、毎月。曜日・日付と時刻も指定。または Use Cron Expression |
| Backup Retention | 28日 | 0 でずっと残す |
| Auto-Export on Backup | オン | バックアップのたびに、Auto を付けたエクスポート先に送る |
| Export Targets | なし | リモートの保存先：SFTP、SCP、FTPS、FTP、S3、rclone |

[バックアップ](/ja/system/backups/)を見てください。
