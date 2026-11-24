---
title: 媒体管理
description: 根文件夹、导入、额外文件、回收站、扫描、升级和权限。
---

**Settings > Media Management** 控制书放在哪里，以及文件怎么搬进来。标为高级的设置要打开 **Show Advanced** 才会显示。

## 根文件夹（Root Folders）

根文件夹是 ABM 管理书的目录。用 **Add Root Folder** 添加，它会打开一个文件夹浏览器，也可以直接输入路径。ABM 还能列出根文件夹下尚未映射的文件夹，并导入它们。添加根文件夹时，会检查它的剩余空间和是否支持硬链接。删除根文件夹时会问你怎么处理：**Remove from ABM only**（默认）会让 ABM 忘掉它下面的书，但保留文件；**Delete the books and their files** 会永久删除这个路径下的所有内容，而且不经过回收站。里面有书的根文件夹，需要你输入文字来确认。

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
| Extra File Extensions（高级） | 空 | 还要一起带过来的文件类型，保留原来的文件名，比如 `srt, lrc`。带不带点都行，用逗号或空格分隔。被禁止的类型（比如可执行文件和未下载完的文件）无法保存。**Import Extra Files** 关闭时这一项不可用 |
| Preferred Cover（高级） | Matched | 两者都有时，用匹配版本的封面，还是文件夹里最好的那张图 |

**Import Extra Files** 会把一本书除音频以外的其他文件也一起带过来。五个开关决定带哪几类；匹配 **Extra File Extensions** 的文件，即使它那一类的开关是关的，也会一起带过来：

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
| Library Scan Interval | 24 | 自动扫描的间隔小时数 |
| Watch for Changes | 开 | 文件被添加、删除或修改时扫描 |
| Cover Cache Workers | 4 | 缓存封面时同时下载多少张，1 到 16 |

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

## Book Naming

Book Naming 决定我怎样给文件和文件夹命名。它和 Media Management 的其他设置一起，用页面上唯一的 Save 保存。它有 Rename Books、Replace Illegal Characters、Colon Replacement（带自定义选项），以及 Standard Book、Author Folder、Series Folder、Standalone Folder 和 Book Folder 的格式。每个格式都有实时示例，令牌列表会显示所有可用的令牌。

Library、Series 和 Authors 里也有针对所选书籍的 **Organize** 操作，单本书的页面也有。它会先打开每项更改的预览，你确认之前什么都不会移动。随后 Organize 会移动并重命名：把每本书的文件夹移到命名设置指定的位置，并重命名它的文件。它作为任务运行，你可以查看进度、取消，重启后还能从停下的地方继续。同一时间只会运行一个 Organize。没有撤销，所以请仔细看预览。批量重命名仍然在 Library、Series 和 Authors 里，叫 **Rename Files**。

如果 Organize 被中断，下一次运行会从停下的地方继续。中断的那次运行已经在磁盘上移动或重命名的书，会在新位置被找到并更新记录，所以不会有东西被移动两次。预览会把这样的书显示为已移动或已重命名，结果里则计为已核对（reconciled）。只有当我能证明这个文件夹属于这本书时才会核对：书的文件必须与我记录的相符，且没有别的书占用这个文件夹。否则这本书会被跳过，并附上原因。仍然没有撤销。

预览只列出会发生变化的书。勾选 **Show all selected books** 可以看到其余的书。它分页加载，所以选得多时用 **Load more** 继续往下看。预览标题会统计有多少本会变化、多少本会被跳过。

在文件夹不在命名设置所指位置的书的页面上，会有提示，显示它将移到的文件夹，并带有 Organize 按钮。

如果一本书的新文件夹会位于它当前所在的文件夹里面，Organize 会在那里建子文件夹，只把这本书自己的文件移进去：音频，加上我为它保存的封面、章节和其他附属文件。文件夹里的其他内容留在原处。预览会显示“Moves into a subfolder”并列出留下的内容，结果对话框会列出原地保留的文件。如果移动中途失败，已移动的文件会被放回去。从编辑对话框把一本书的文件夹移到它自己的子文件夹里，也是同样的做法。

Library Import 遵循同样的命名设置，包括添加已经位于根文件夹里的书，或把文件移进我已有的书时。Rename Books 关闭时，每个文件保留它原来的名字。如果某个文件的名字会与同批的另一个文件，或书文件夹里已有的文件冲突（不区分大小写），就改用格式生成的名字，导入会记下哪些文件这样处理了。Rename Books 开启时，名字会相同的文件按位置编号，所以 Manual Import 不会漏掉任何一个。

默认布局是 `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`。单本书没有系列文件夹，也没有卷号：`Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`。没有位置的系列书同样以年份开头。未知的年份会被省略，绝不会写成 `(Unknown)`。

如果你用过 Sonarr：这就是带命名格式的 Sonarr Media Management。
