---
title: 故障排除
description: 最可能遇到的问题和解决办法。
---

## 中断的导入留下的文件（.abmstage）

导入时，ABM 会先把每个文件暂存在它最终文件名的旁边，等所有文件都到齐了再一起换上。如果中途出错，ABM 会把已经移动的东西放回去。如果某个部分放不回去，它就会以隐藏文件的形式留在书的文件夹里，文件名以 `.abmstage` 结尾。它可能是唯一的一份副本，所以 ABM 会保留它，并在错误信息里写出它的名字。

只要书的文件夹里还有 `.abmstage` 文件，往这个文件夹的导入都会停下，并提示：

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

恢复步骤：

1. 找到错误信息里提到的 `.abmstage` 文件。
2. 把它移回下载目录，或者用它的真实文件名放回书的文件夹。不需要的话也可以直接删掉。
3. 重试导入。

## 放在反向代理后面，所有人都被要求登录

没有设置 `TRUSTED_PROXIES` 时，带有转发头的请求永远不会被当成本地请求，所以必须登录。这是故意的。

1. 把 `TRUSTED_PROXIES` 设为你代理的地址，比如 `172.20.0.5`。代理和 ABM 在同一台主机上时要设 `127.0.0.1`。
2. 让代理发送 `X-Forwarded-For` 或 `X-Real-IP`。nginx proxy manager、Traefik 和 Caddy 默认都会发。
3. 重启 ABM。

应用日志会告诉你是哪种情况：

- “carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES”：把代理加到 `TRUSTED_PROXIES` 里。
- “... is in TRUSTED_PROXIES but didn't name a client address”：配置代理发送 `X-Forwarded-For` 或 `X-Real-IP`。

反过来的情况：不发送任何转发头的代理看起来像一个本地客户端，所以经过它的所有请求都会跳过登录。这时请把 Authentication Required 设为 Enabled。

## 浏览器里的修改被拒绝

确认代理传递了原始的 `Host` 请求头，或者发送了 `X-Forwarded-Host`。见 [配置](/zh-cn/configuration/#反向代理)。

## 放在代理后面时封面消失，或者页面行为异常

Content-Security-Policy 响应头只允许 HTTPS 的封面图片。到浏览器控制台里看看有没有违规记录。用 HTTPS 提供封面，或者设置 `SECURITY_HEADERS_CSP_ENABLED=false`。

## 大请求返回 413

调大 `MAX_REQUEST_BODY_BYTES`。反向代理也可能有更低的限制，并自己返回 413。

## 元数据源不可用

添加、搜索、刷新和 Discover 都依赖元数据源。提示信息会写出它的名字，比如“The metadata source is unavailable”。原因可能是：元数据源宕机或者在限流，或者你的出站连接把它挡住了。

1. 检查 **Settings > General > Proxy & VPN**，确认线路是通的。
2. 过一分钟再试。被限流的元数据源会返回 503，并提示 30 秒后重试。
3. 这段时间里你仍然可以手动添加和导入书。

遇到中断的后台任务会带着原因失败，每次中断只发一条通知。

## 刷新改掉了一本书的详情

标题、简介、作者、讲述者之类的字段都来自元数据源，刷新时会采用它现在给出的内容。ABM 没有办法手动编辑这些字段。你能控制的是封面（可以锁定）、写入哪些文件、标签，以及刷新时是否写入附属文件和标签。见 [你的元数据，你说了算](/zh-cn/metadata/control/)。

## 书显示 Missing Files

这本书已经下载过了，但它的文件不在 ABM 查找的位置。检查挂载和权限，然后运行 **Refresh & Scan**。如果书的文件夹读不了，扫描不会动这本书，任务会显示为 Partial 并给出原因。

## 导入停下，提示 “Files left by an interrupted import”

见上面关于 `.abmstage` 的部分。

## 下载完成了，但一直没有导入

加一条远程路径映射，或者让 ABM 和下载客户端用同一个路径看到这个文件夹。只要有一个子文件夹不可读，整个下载都会被卡住，直到修好它的权限。见 [下载客户端](/zh-cn/settings/download-clients/)。

## Docker 连不上元数据源或索引器

先检查 DNS 和出站连接设置。在 Docker 里，直连只有在容器本身能上网时才有效。

## 还是没解决

到 [ABM Discord](https://discord.gg/qeJRrM6AZ) 里问，[提交一个 issue](https://github.com/sunbrolynk/AudioBook-Manager/issues)，或者发邮件到 [support@audiobookmanager.com](mailto:support@audiobookmanager.com)。
