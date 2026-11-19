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

已完成的下载以不同格式多次包含同一本书时，ABM 只导入这本书的质量配置排得最高的那份副本。把下载匹配到书时也只测量一份副本，即默认质量配置排得最高的那份。配置排名相同或没有包含的格式，按 M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA 的顺序来。其余副本留在下载里；只有 **Also Delete Files** 在导入后移除下载时才会删除它们。一组分段旁边的单个文件，只有时长相符时才算作第二份副本，否则就是同一本书的各部分。封面和其他额外文件仍会跟着 ABM 取用的副本一起导入。下载文件夹里还有另一本书的音频时，只有以导入音频命名的额外文件会一起导入。

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
