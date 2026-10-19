---
title: 常见问题
description: 大家最先会问的问题，简短回答。
---

## ABM 会取代 Audiobookshelf 吗？

不会。Audiobookshelf 是播放器，ABM 是图书管理员。把两者指向同一个书库文件夹，让它们各干各的活。

## 元数据从哪里来？

[Libex](https://libexdb.com)，一个提供 Audible 数据的开放元数据服务。ABM 会按计划刷新元数据，你自己挑的封面可以锁定，刷新时就不会动它。

## 需要单独的数据库吗？

不需要。ABM 把所有东西都存在 `/config` 里的一个 SQLite 文件中，不用再跑别的服务。

## 能从外网访问吗？

可以，0.17.0 及以上版本都行，不过我不建议把 ABM 直接暴露到公网上，Servarr 那几个应用也是这么建议的。用 WireGuard 或 Tailscale 这类 VPN 访问更安全。默认情况下，来自本地网络以外的访问都要登录；把 **Authentication Required** 设为 **Enabled** 后，所有人都要登录，包括你自己局域网里的设备。放在 nginx、Traefik 或 Caddy 后面时，把 `TRUSTED_PROXIES` 设为代理的地址。已存储的凭据都是加密的。见 [反向代理指南](/zh-cn/guides/reverse-proxy/) 和 [配置](/zh-cn/configuration/#反向代理)。

## 支持哪些下载客户端？

Deluge、qBittorrent、Transmission、rTorrent、SABnzbd、NZBGet 和 Blackhole。

## Readarr 怎么了？

Readarr 以前把电子书和有声书放在一起管，现在已经停止维护了。ABM 只管有声书，建立在 Servarr 系列应用开创的设计之上。

## 不用 Docker 能装吗？

暂时还不行，目前只能用 Docker。原生的 Linux、Windows 和 macOS 安装方式，以及 Kubernetes、Unraid 和 Proxmox，都在计划中。见 [其他安装方式](/zh-cn/installation/#其他安装方式)。

## 要花钱吗？

不要钱。它是免费开源软件，采用 GPL-3.0 许可。如果它帮你省下了一个晚上，可以去 [Ko-fi](https://ko-fi.com/sunbrolynk) 支持一下。

## 能编辑书的标题、作者或简介吗？

不能。这些数据来自元数据源，ABM 不提供手动编辑。你能控制的是：封面（你选的封面会被锁定）、刷新什么时候跑、写哪些附属文件和音频标签、标签和自动标签、监控状态和质量配置。见 [你的元数据，你说了算](/zh-cn/metadata/control/)。

## ABM 能把章节、简介和标签写到 Audiobookshelf 读取的位置吗？

它会写 `cover.jpg`、一个 `.opf`、`desc.txt` 和 `reader.txt`，也可以把标签写进音频文件。和已出版版本对比章节，以及 `.cue` 文件，会在下个版本推出。见 [附属文件](/zh-cn/using/sidecars/)。

## 能转换文件吗？

可以：转换、合并、拆分和添加章节，都在一个队列里处理。见 [转换](/zh-cn/using/conversions/)。

## 能导入我现有的收藏吗？

可以，用 [书库导入](/zh-cn/library-import/)。另见 [把书库搬进来](/zh-cn/guides/moving-a-library-in/)。

## 有手机布局吗？

有，宽度小于 768px 时生效。见 [手机使用](/zh-cn/phone/)。

## ABM 能用多个 Audible 账号吗？

能。每个账号都有自己独立的书库。见 [Audible](/zh-cn/audible/)。
