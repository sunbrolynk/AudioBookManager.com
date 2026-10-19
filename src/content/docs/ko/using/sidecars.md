---
title: 사이드카 파일
description: ABM이 책 옆에 쓰는 표지, OPF, 설명, 내레이터, cue 파일이에요.
---

사이드카는 오디오 옆에 두는 작은 파일이에요. Audiobookshelf와 다른 플레이어들이 이걸 읽어요. ABM이 쓸 수 있는 파일은 이래요:

| 파일 | 내용 |
|---|---|
| `cover.jpg` | 책 표지 |
| `.opf` | Audiobookshelf가 읽을 수 있는 OPF 형식의 메타데이터. 책의 첫 번째 오디오 파일 이름을 따르고(예: `Dune.opf`), 오디오가 없는 책이면 `title.opf`예요 |
| `desc.txt` | 설명 |
| `reader.txt` | 내레이터 |
| `.cue` | Libex에서 받은 챕터(다음 릴리스에서 추가돼요) |

## 언제 쓰나요

**Settings > Metadata**의 **Create on Book Add**, **Create on Import**, **Create on Refresh**로 시점을 정해요. 기본값으로는 가져올 때만 써요. **Overwrite Existing**은 꺼져 있어서 이미 있는 파일은 그대로 둬요. 편집 대화 상자에서 책 한 권, 또는 선택한 시리즈와 작가에 대해 직접 쓸 수도 있어요. [메타데이터 설정](/ko/settings/metadata/)을 보세요.

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
