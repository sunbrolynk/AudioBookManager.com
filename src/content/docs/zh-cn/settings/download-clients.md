---
title: 下载客户端
description: 支持的客户端、已完成下载的处理和远程路径映射。
---

**Settings > Download Clients** 用来连接负责下载的程序。

## 支持的客户端

Deluge、qBittorrent、Transmission、rTorrent、SABnzbd、NZBGet 和 Blackhole（一个监视文件夹）。就这些，没有别的了。

## 字段

显示哪些字段取决于客户端。

| 字段 | 作用 |
|---|---|
| Name | 名称 |
| Host, Port, URL Base | 客户端监听的位置 |
| Use SSL, Verify TLS certificate | 是否用 HTTPS，以及是否校验证书 |
| Username, Password, API Key | 凭据。已保存的密钥永远不会显示出来 |
| Category | ABM 给它的下载打上的分类或标签，比如 `audiobooks` |
| Watch Folder, Directory | Blackhole：文件放在哪里，以及下载完成的文件出现在哪里 |
| Client Priority | 有多个客户端都合适时，用哪个 |
| Remove from Client, Also Delete Files, Remove Failed | 导入或失败之后，ABM 从客户端里删除什么 |
| Queue Page Remove Action | 在 Queue 页面删除一行时做什么：只从 ABM 里移除、从客户端删除但保留文件，或者删除并删掉文件 |

**Test** 检查连接。被禁用的客户端不等于不健康的客户端。连接失败的客户端会以退避的方式重试。

## 已完成下载的处理

| 设置 | 默认值 | 作用 |
|---|---|---|
| Enable | 开 | 自动导入已完成的下载 |
| Redownload Failed | 开 | 把失败的发布加入黑名单，然后重新搜索 |
| Redownload Failed from Interactive Search | 开 | 同上，针对你手动选的发布 |

导入时用硬链接还是复制，由 [媒体管理](/zh-cn/settings/media-management/) 里的 **Use Hardlinks instead of Copy** 决定。如果客户端的文件夹和 ABM 看到的路径不一样，就加一条远程路径映射。

## 远程路径映射

当客户端报告的是 `/downloads/audiobooks`，而 ABM 看到的是 `/data/audiobooks` 时，就加一条映射。

| 字段 | 作用 |
|---|---|
| Host | 这条映射对应的客户端主机 |
| Remote Path | 客户端报告的路径 |
| Local Path | ABM 看到的同一个文件夹 |

## 注意事项

- 已完成的下载里只要有一个子文件夹不可读，这个下载的导入就会完全停下。不会从客户端里删除任何东西，之后会再重试。
- Docker：尽量在两个容器里把下载文件夹挂载到同一个路径。映射只是备用方案。
