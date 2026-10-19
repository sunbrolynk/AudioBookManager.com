---
title: 媒体管理
description: 根文件夹、导入、额外文件、回收站、扫描、升级和权限。
---

**Settings > Media Management** 控制书放在哪里，以及文件怎么搬进来。标为高级的设置要打开 **Show Advanced** 才会显示。

## 根文件夹（Root Folders）

根文件夹是 ABM 管理书的目录。用 **Add Root Folder** 添加，它会打开一个文件夹浏览器，也可以直接输入路径。ABM 还能列出根文件夹下尚未映射的文件夹，并导入它们。添加根文件夹时，会检查它的剩余空间和是否支持硬链接。删除根文件夹不会删除文件。

默认根文件夹是新书存放的位置，也决定了书库导入时是否提供硬链接选项。

## 文件夹（Folders）

| 设置 | 默认值 | 作用 |
|---|---|---|
| Create Empty Book Folders | 关 | 在添加书、更换根文件夹和磁盘扫描时，创建缺失的书文件夹。**Delete empty folders** 开着时这一项会被忽略，免得刚建好的文件夹又被删掉。 |
| Delete empty folders | 关 | 在磁盘扫描和删除书文件时，删除空的书文件夹 |

## 导入（Importing）

| 设置 | 默认值 | 作用 |
|---|---|---|
| Skip Free Space Check | 关 | 用于 ABM 检测不到某个根文件夹剩余空间的情况 |
| Minimum Free Space | 100（MB） | 如果导入后剩余空间会少于这个值，就拒绝导入 |
| Use Hardlinks instead of Copy | 开 | 针对已完成的下载：用硬链接代替复制，这样做种时不会占用双倍空间。需要在同一个卷上。 |
| Library Import | Copy | [书库导入](/zh-cn/library-import/) 的默认方式：复制、硬链接或移动。在默认根文件夹通过检查并确认支持之前，硬链接是灰色的。 |
| Import Extra Files | 开 | 是否把非音频文件一起带过来的总开关。对书库导入、手动导入和已完成的下载都生效 |
| Extra File Extensions（高级） | 空 | 额外要导入的扩展名，比如 `srt, lrc`。被禁止的类型会被拒绝。 |
| Preferred Cover（高级） | Matched | 两者都有时，用匹配版本的封面，还是文件夹里最好的那张图 |

额外文件有五个开关：

| 开关 | 默认值 | 包括 |
|---|---|---|
| Cover art | 开 | 封面，以及封底和小册子扫描图 |
| Book info files | 开 | metadata.json、.opf、.nfo、desc.txt、reader.txt |
| PDFs and companion docs | 关 | 随书附带的 PDF |
| Chapters, transcripts and playlists | 开 | .cue、章节列表、字幕、歌词、播放列表。里面引用的文件名会被改写成重命名后的音频文件名。 |
| Audible originals and ebooks | 关 | .aax/.aaxc、凭证文件、epub 等 |

未下载完的文件和可执行文件永远不会被导入。ABM 自己的 `metadata.json` 始终由 ABM 处理。

这里的硬链接和 **Use Hardlinks instead of Copy** 不是一回事。后者针对下载。书库导入的默认值只是 Add to Library 对话框里预先选中的那一项。

## 文件管理（File Management）

| 设置 | 默认值 | 作用 |
|---|---|---|
| Unmonitor Deleted Books | 关 | 从磁盘上删除的书会被取消监控 |
| Change File Date | None | 在导入和重新扫描时修改文件日期 |
| Enable Recycling Bin | 开 | 删除的书文件会移到回收站，而不是直接删除 |
| Recycling Bin | 空 | 回收站的位置。留空则使用 ABM 的默认位置（`/config/recycle/media`） |
| Recycling Bin Cleanup | 7（天） | 0 表示关闭自动清理 |
| Library Scan Interval | 0（关） | 自动扫描的间隔小时数 |
| Watch for Changes | 关 | 文件被添加、删除或修改时扫描 |
| Cover Cache Workers | 4 | 缓存封面时同时下载多少张，1 到 16。如果缓存任务报告失败，就调低一点 |

## 质量升级（Quality Upgrades）

| 设置 | 默认值 | 作用 |
|---|---|---|
| Automatic Upgrade Search | 开 | 定期为已下载但仍低于截止质量的书搜索更好的发布。只有确实是升级时，新的副本才会替换你现有的。 |
| Upgrade Search Interval | 24（小时） | 多久运行一次 |

## 权限（Permissions，高级）

| 设置 | 默认值 | 作用 |
|---|---|---|
| Set Permissions | 关 | 在导入和重命名时运行 chmod |
| chmod Folder | 755 | 文件夹和文件的八进制权限，文件不带执行位 |
| chown Group | 空 | 组名或 gid。在远程文件系统上请用 gid |

## 注意事项

- 如果开启了回收站但它的文件夹不可用，需要用到回收站的删除操作会失败，而不是直接永久删除。
- 硬链接只能在同一个文件系统内使用。无法链接的文件会被复制，绝不会被移动，并计入导入结果。

如果你用过 Sonarr：这就是没有命名格式的 Sonarr Media Management。文件夹名由 ABM 决定。批量重命名在 Library、Series 和 Authors 里，叫 **Rename Files**。
