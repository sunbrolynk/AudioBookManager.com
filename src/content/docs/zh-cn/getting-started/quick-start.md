---
title: 快速上手
description: 从全新安装到你的第一本被监控的书。
---

这是从容器跑起来到有一本书开始被搜索的最短路径。请先安装 ABM：见 [安装 ABM](/zh-cn/installation/)。

## 1. 登录

第一次打开时，会引导你创建登录账号。在你创建之前，ABM 会拒绝所有请求。之后登录怎么运作，见 [安全与登录](/zh-cn/settings/security/)。

## 2. 选择 ABM 怎么连上互联网

**Settings > General** 下有一个 **Proxy & VPN** 部分。如果你打算用内置的元数据源，得先选好一种连接方式。见 [选择元数据源](/zh-cn/metadata/choosing-a-source/)。

## 3. 添加根文件夹

根文件夹就是 ABM 存放书的地方。在 **Settings > Media Management** 的 **Root Folders** 部分添加。它应该和你的播放器（比如 Audiobookshelf）读取的是同一个文件夹。

## 4. 添加索引器和下载客户端

- **Settings > Indexers**：Newznab、Torznab、MyAnonamouse 或 Prowlarr。见 [索引器](/zh-cn/settings/indexers/)。
- **Settings > Download Clients**：Deluge、qBittorrent、Transmission、rTorrent、SABnzbd、NZBGet 或 Blackhole。见 [下载客户端](/zh-cn/settings/download-clients/)。

如果下载客户端跑在另一个容器里，检查它和 ABM 是否用同一个路径看到下载文件夹，否则就加一条远程路径映射。

## 5. 设置质量配置

**Settings > Profiles** 里是质量阶梯，ABM 用它来决定抓取什么、什么算升级。全新安装时一个都没有，所以先建一个。你建的第一个配置会成为默认配置，以后可以再慢慢调。见 [配置文件](/zh-cn/settings/profiles/)。

## 6. 连接 Audible（可选）

如果你有 Audible 的书，就在 **Settings > Audible** 下连接你的账号。选好 **Marketplace**，按 **Connect Audible Account**，再按 **I Understand, Open Amazon Login**。在新标签页里登录 Amazon。登录后跳到一个空白页或 “Page not found” 页面是正常的。把地址栏里的完整地址复制到 **Redirect URL**，想的话再填个 **Display Name**，然后按 **Complete Login**。你的密码永远不会被保存，第一次书库同步会马上开始。见 [Audible](/zh-cn/audible/)。

## 7. 导入或添加书

- 已经有收藏了？用 [书库导入](/zh-cn/library-import/)。
- 从零开始？用 **Library > Add New**，按标题、作者或系列搜索。见 [添加新书](/zh-cn/using/add-new/)。

你添加的书在导入它的文件之前都处于想要（Wanted）状态。想要的书会出现在 **Wanted > Missing** 下，并会被自动搜索。

## 8. 看它干活

**Activity > Queue** 显示正在下载什么。**Activity > History** 显示抓取和导入了什么。出问题时，去看 [故障排除](/zh-cn/troubleshooting/) 和 [任务](/zh-cn/system/tasks/) 页面。
