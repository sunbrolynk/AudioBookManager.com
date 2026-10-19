---
title: 常规
description: 主机、出站连接、安全、日志和备份。
---

**Settings > General** 分为 Host、Proxy & VPN、Security、Logging 和 Backups 几个部分。Security 有 [单独的页面](/zh-cn/settings/security/)。

## 主机（Host）

| 设置 | 默认值 | 作用 |
|---|---|---|
| Bind Address | `*` | 监听的地址。需要重启 |
| Port Number | 5173 | 需要重启 |
| URL Base | 空 | 路径前缀，用于反向代理的子路径，比如 `/audiobook-manager`。需要重启 |
| Instance Name | Audiobook Manager | 显示在浏览器标签页上，也用作 syslog 的应用名 |
| Application URL | 空 | 外部访问地址，包括 `http(s)://`、端口和 URL base |
| Enable SSL | 关 | 由 ABM 自己提供 HTTPS。需要填证书路径和私钥路径。需要重启 |

在 Docker 里，真正起作用的是环境变量 `PORT` 和 compose 的端口映射。见 [环境变量](/zh-cn/configuration/)。

## 代理和出站连接

ABM 获取元数据、封面和 Audible 页面时怎么连上互联网。

| 设置 | 默认值 | 作用 |
|---|---|---|
| Use Proxy | 关 | 让对外请求走代理 |
| Proxy Type | HTTP | HTTP、HTTPS、SOCKS4 或 SOCKS5 |
| Hostname, Port | 空 | 代理地址 |
| Username, Password | 空 | 选填 |
| Bypass Addresses | `localhost,127.0.0.1` | 不走代理的主机 |
| Test Connection | | 检查代理 |

页面还会显示外部服务看到的你的出口 IP。下个版本会加入内置的 WireGuard 隧道，以及一个明确的连接选择（none、direct、proxy、WireGuard，或者你自己的 VPN 容器），内置元数据源需要先做这个选择。线路断了会直接阻断流量，而不是退回到用你自己的地址。备份导出和局域网目标总是直连。

## 日志（Logging）

| 设置 | 默认值 |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30 天，0 表示永久保留 |
| Activity Log Retention | 90 天，0 表示永久保留 |
| Book History Retention | 0（保留） |
| Automatic Cleanup | 开 |
| Cleanup Time | 03:00 |
| SQL Logging | 关。日志量非常大 |
| Parser Log Level, Matcher Log Level | Info。设为 Debug 时日志量很大 |

见 [日志](/zh-cn/system/logs/) 和 [Activity Log](/zh-cn/system/activity-log/)。

## 备份（Backups）

| 设置 | 默认值 | 作用 |
|---|---|---|
| Backup Folder | `/config/backups` | 备份存放的位置 |
| Automatic Backups | 关 | 定时备份 |
| Schedule Frequency | Daily | 每天、每周或每月，可以指定日期和时间。也可以用 Use Cron Expression |
| Backup Retention | 28 天 | 0 表示永久保留 |
| Auto-Export on Backup | 开 | 每次备份后，把它发送到标记为 Auto 的导出目标 |
| Export Targets | 无 | 远程目标：SFTP、SCP、FTPS、FTP、S3 或 rclone |

见 [备份](/zh-cn/system/backups/)。
