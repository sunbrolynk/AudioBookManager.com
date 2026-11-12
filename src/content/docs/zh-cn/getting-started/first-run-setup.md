---
title: 首次设置
description: 新安装时的设置向导，一步一步来。
---

:::caution[后续版本推出]
设置向导还没有出现在已发布的版本里。已发布的版本在第一次访问时只会让你创建登录账号。
:::

新安装时，第一次访问会打开设置向导，而不是登录页。它会一步一步带你完成 ABM 需要的所有设置。它只在还没有账号时出现。每个选择之后都可以在 **Settings** 里修改。

顶部有一条由八个环节组成的链条。每个环节是一个步骤，链条会告诉你现在走到了哪里：

- **Done**：这一步已经完成。
- **Current step**：屏幕上当前的这一步。
- **Not started**：你还没走到的步骤。
- **Later**：你没完成就略过的步骤。它会一直等着，你可以随时在 **Settings** 里把它补上。

**Back** 回到上一步。**Continue** 保存这一步并继续。Audible、Download client 和 Indexer 这三步还有 **Skip for now**。

## 1. 账号（Account）

创建你的登录账号并直接登录。你要选一个用户名和一个至少 8 个字符的密码，密码要输入两次。

| 设置 | 默认值 | 作用 |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms 使用登录页。Basic (Browser Popup) 使用浏览器自带的登录提示 |
| Authentication required | Everywhere | Everywhere 要求从任何地址都必须登录。Skip on local network 让你家里或办公室网络里的设备不用登录就能进入 |

这些和[安全与登录](/zh-cn/settings/security/)里的设置是同一套。账号在你按下 **Continue** 时创建。创建之后，这一步只显示确认信息。

## 2. 网络（Network）

Network 是总开关。在你这里选好路径之前，ABM 发出的任何东西都不会离开你的机器，所以 Metadata 和 Audible 这两步依赖它。路径没填完整之前 **Continue** 一直是关闭的。只有这一步的设置加载失败时才能跳过：这时它会显示错误，并给出 **Retry**、**Back** 和 **Skip for now**。在选好路径之前，ABM 会一直拦住它要发出的所有东西，Finish 这一步会把 Network 显示为等待中。

| 选项 | 你要给 ABM 什么 |
|---|---|
| Proxy | 代理的类型、主机名和端口，以及可选的用户名和密码。不支持 SOCKS4 |
| WireGuard | 来自 VPN 服务商的 `.conf`，粘贴或拖进来。如果已经保存了隧道，就用那一个 |
| Own VPN container | 不用填写。你勾选一个框，表示 ABM 的所有流量已经通过 VPN 或代理容器出去。ABM 无法检查这一点 |
| Direct | 不用填写。你勾选一个框，表示 ABM 联系的每个服务都会看到你自己的 IP 地址 |

**Continue** 会保存路径，然后显示 **Public IP** 检查，让你在任何东西上网之前就能看到路径是否可用。**Change route** 可以重新选择。这些和[Network](/zh-cn/settings/network/)里的设置是同一套。

## 3. 元数据（Metadata）

选择 ABM 到哪里查书。它排在文件夹之前，因为第一次文件夹扫描会用它来匹配你的书。

| 选项 | 含义 |
|---|---|
| Built-in | Libex 在 ABM 内部运行。不需要账号，也不需要额外的服务。使用 Network 步骤选好的路径 |
| Hosted | ABM 向 libexdb.com 上的公共 Libex 实例查询 |
| Self-hosted | ABM 向你自己的 Libex 服务器查询。填入它的 **Server URL**。**Test** 会在不保存的情况下检查它 |

还有一个 **Local Storage** 复选框。它会为 ABM 查询、搜索、添加、导入或在 Discover 里看到的每一本书，保留一份永久、加密的本地记录，三种来源都适用。一旦打开，只能在 **Settings > Metadata** 里关闭。

**Continue** 会保存来源，如果你勾选了，还会打开 Local Storage。如果所选的来源暂时还不能联网，比如没有选路径的 Built-in，这一步会说明原因。见[选择元数据源](/zh-cn/metadata/choosing-a-source/)。如果这一步的设置加载失败，它会显示错误，并给出 **Retry**、**Back** 和 **Skip for now**，来源可以以后在 **Settings > Metadata** 里再设。

## 4. Audible（可选）

登录你的 Audible 账号，让 ABM 能读取你的书库。它走的是你在 Network 步骤里选好的路径。如果没有选路径，或者 Audible 流量在该路径上被拦截，这一步会告诉你，并且 **Back to Network** 会带你回去。登录本身和[Audible](/zh-cn/audible/)里的一样。登录之后，这一步会显示账号，**Continue** 也就可以用了。

你可以选择 **Skip for now**，以后再到 **Settings > Audible** 里连接。

## 5. 根文件夹（Root folder）

根文件夹是 ABM 存放你的书的地方。选你的有声书所在的文件夹，或者新书应该放进去的文件夹。它应该和你的播放器（比如 Audiobookshelf）读取的是同一个文件夹。你可以浏览服务器上的文件夹，也可以在浏览器里新建一个。你添加的第一个根文件夹会成为默认值。这一步不能跳过。以后可以在 **Settings > Media Management** 里添加更多根文件夹。

## 6. 下载客户端（可选）

选择一个受支持的客户端，Usenet 或 torrent 都可以：Deluge、qBittorrent、Transmission、rTorrent、SABnzbd、NZBGet 或 Blackhole。填写它的信息，点 **Test**，再点 **Save**。客户端就在这一步里直接添加。你可以再添加一个，**Refresh** 会重新加载列表。只要保存了一个客户端，这一步就算完成。

你可以选择 **Skip for now**，以后再到 **Settings > Download Clients** 里添加客户端。见[下载客户端](/zh-cn/settings/download-clients/)。

## 7. 索引器（可选）

选择索引器的类型或预设，填好之后点 **Test** 和 **Save**，和下载客户端的做法一样。只要保存了一个索引器，这一步就算完成。你可以选择 **Skip for now**，以后再到 **Settings > Indexers** 里添加索引器。见[索引器](/zh-cn/settings/indexers/)。

## 8. 完成（Finish）

总结会逐步列出各项设置的结果：你的 Network 路径（如果检查过，还有 Public IP）、元数据来源、Audible 账号、根文件夹，以及你添加的客户端和索引器。你留到以后的步骤会显示为等待中。如果 ABM 读不回某一步的状态，比如下载客户端列表加载失败，那一行会显示 **Could not check**，并出现一个 **Retry** 按钮。如果没有任何等待项，总结会说每个环节都亮了。**Go to Library** 会关闭向导。

你跳过的内容随时都能在 **Settings** 里找到。接下来合理的事情是质量配置和你的书：见[快速上手](/zh-cn/getting-started/quick-start/)。
