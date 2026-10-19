---
title: 사이드카 파일
description: ABM이 책 옆에 쓰는 metadata.json, 표지, OPF, 설명, 내레이터 파일이에요.
---

사이드카는 오디오 옆에 두는 작은 파일이에요. Audiobookshelf와 다른 플레이어들이 이걸 읽어요. ABM이 쓰는 파일은 이래요:

| 파일 | 내용 | 스위치 |
|---|---|---|
| `metadata.json` | Audiobookshelf 자체 메타데이터 파일이에요. ABM 것이라고 표시하는 `abm` 블록이 더 들어 있어요. Audiobookshelf는 이 파일을 제일 먼저 읽어요 | 없음, 항상 써요 |
| `cover.jpg` | 책 표지. 폴더에 이미 `cover.*`가 있으면 쓰지 않아요 | cover.jpg |
| `.opf` | OPF 형식의 메타데이터. 책의 첫 번째 오디오 파일 이름을 따르고(예: `Dune.opf`), 오디오가 없는 책이면 `title.opf`예요 | title.opf |
| `desc.txt` | HTML을 뺀 설명. 설명이 없으면 건너뛰어요 | desc.txt |
| `reader.txt` | 내레이터. 내레이터가 없으면 건너뛰어요 | reader.txt |

폴더 구조와 함께 이 파일들이 Audiobookshelf가 책 정보를 읽는 파일이에요. 그래서 Audiobookshelf도 ABM과 똑같은 책을 보게 돼요.

## 언제 쓰나요

`metadata.json`은 책을 추가하거나, 가져오거나, 새로 고칠 때마다 써요.

나머지 네 개는 **Settings > Metadata > Files to Create**에 각자 스위치가 있고, 기본값은 모두 켜짐이에요. 해당하는 트리거도 켜져 있어야 써요: **Create on Book Add**(꺼짐), **Create on Import**(켜짐, 다운로드, Library Import, Audible 다운로드를 다 포함해요), **Create on Refresh**(꺼짐). **Overwrite Existing**은 꺼져 있어서 이미 있는 파일은 그대로 둬요. 책 폴더가 생기기 전에는 아무것도 쓰지 않아요.

편집 대화 상자의 **Write to Directories**로도 이 네 개를 쓸 수 있어요. 책 한 권, 또는 선택한 시리즈와 작가에 대해 쓸 수 있어요. [메타데이터 설정](/ko/settings/metadata/)을 보세요.

## 표지는 특별해요

직접 고른 표지는 잠겨요. [표지 잠금](/ko/metadata/cover-lock/)을 보세요.

## 가져올 때

가져오기는 책에 원래 있던 오디오가 아닌 파일도 함께 가져와요. 이건 **Media Management > Importing**이 정해요. 원본에 `.opf`, 설명, 내레이터 파일이 있으면 ABM은 종류별로 최대 하나씩만 가져오고, 이름을 `desc.txt`와 `reader.txt`로 붙여요. 대상 위치에 이미 파일이 있으면 그대로 두고, 기존 `cover.*` 위에 새 표지를 덮어쓰는 일은 절대 없어요.

## 하드링크

하드링크로 가져오면 원본은 손대지 않아요. ABM이 이 파일들을 쓸 때는 기존 파일을 고치지 않고 새 파일을 만들기 때문에, 가져온 원본의 내용은 그대로 남아요.

## 주의할 점

- `metadata.json`에 ABM 자체 블록이 들어 있으면 ABM이 처리해요. 다른 도구가 만든 `metadata.json`은 Book info files 스위치를 따라요.
- 여러 책이 같이 쓰는 폴더에서는 이 책의 오디오 이름을 딴 파일만 이 책의 것이에요.
- 책을 지우면, 그 책의 파일 이름을 딴 사이드카도 함께 지워져요.
