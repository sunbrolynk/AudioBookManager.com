---
title: 메타데이터
description: ABM이 어떤 사이드카 파일과 오디오 태그를 언제 쓰는지 정해요.
---

**Settings > Metadata**에서 ABM이 책 폴더와 파일에 무엇을 쓸지 정해요. 이 파일들이 어떻게 쓰이는지는 [사이드카 파일](/ko/using/sidecars/)에 있어요.

## 메타데이터 파일 만들기

| 설정 | 기본값 | 효과 |
|---|---|---|
| Create on Book Add | 꺼짐 | 책을 Wanted로 추가할 때 파일을 써요 |
| Create on Import | 켜짐 | 오디오북을 가져올 때 파일을 써요 |
| Create on Refresh | 꺼짐 | 메타데이터를 새로 고칠 때 파일을 만들거나 업데이트해요 |
| Overwrite Existing | 꺼짐 | 폴더에 이미 있는 파일을 덮어써요 |

만들 파일: `cover.jpg`(켜짐), `title.opf`(켜짐, Audiobookshelf 호환), `desc.txt`(켜짐), `reader.txt`(켜짐).

## 오디오 파일 태그 쓰기

ffmpeg로 오디오 파일 자체에 태그를 써요.

| 설정 | 기본값 |
|---|---|
| Write Audio Tags | 꺼짐 |
| Write Tags on Import | 태그 쓰기를 켜면 켜짐 |
| Write Tags on Refresh | 꺼짐 |

태그 필드는 모두 기본값이 켜짐이에요: Title, Artist(Author), Album Artist(Author), Album(Title/Series), Genre, Year, Comment(Description), Narrator(Composer), Cover Art.

## 이후 릴리스에서 추가돼요

메타데이터 소스 선택과 메타데이터 라이브러리의 로컬 사본은 이후 릴리스에서 추가할 예정이에요. [내 메타데이터, 내 통제](/ko/metadata/control/)를 보세요.

## 주의할 점

- 태그 쓰기는 오디오 파일을 바꿔요. Audiobookshelf는 파일이 수정됐다고 볼 거예요.
- 태그를 쓰는 중에 메타데이터나 표지를 못 가져오면, 실패하는 대신 경고를 돌려줘요.
