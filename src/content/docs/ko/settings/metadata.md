---
title: 메타데이터
description: ABM이 어떤 사이드카 파일과 오디오 태그를 언제 쓰는지 정해요.
---

**Settings > Metadata**에서 ABM이 책 폴더와 파일에 무엇을 쓸지 정해요. 이 파일들이 어떻게 쓰이는지는 [사이드카 파일](/ko/using/sidecars/)에 있어요.

## 소스 (Source)

**Metadata Source**는 Built-in(기본값), Hosted (libexdb.com), Self-hosted 중 하나이며, Self-hosted는 **Server URL**이 필요합니다. **Test**는 저장하지 않고 선택한 소스에 실제 요청을 보내고, **Status**는 준비됐는지 알려 주며, **Connection**은 조회가 나가는 경로를 보여 주고 **Settings > Network**로 연결됩니다. 바꾸면 모든 조회에 바로 적용됩니다. [메타데이터 소스 고르기](/ko/metadata/choosing-a-source/)을 보세요.

## 메타데이터 파일 만들기

| 설정 | 기본값 | 효과 |
|---|---|---|
| Create on Book Add | 꺼짐 | 책을 Wanted로 추가할 때 파일을 써요 |
| Create on Import | 켜짐 | 오디오북을 가져올 때 파일을 써요 |
| Create on Refresh | 꺼짐 | 메타데이터를 새로 고칠 때 파일을 만들거나 업데이트해요 |
| Overwrite Existing | 꺼짐 | 폴더에 이미 있는 파일을 덮어써요 |

만들 파일: `cover.jpg`(켜짐), `title.opf`(켜짐, Audiobookshelf 호환), `desc.txt`(켜짐), `reader.txt`(켜짐).

## 오디오 파일 태그 쓰기

오디오 태그를 오디오 파일 자체에 써요.

| 설정 | 기본값 |
|---|---|
| Write Audio Tags | 꺼짐 |
| Write Audio Tags on Import | 태그 쓰기를 켜면 켜짐 |
| Write Audio Tags on Refresh | 꺼짐 |

태그 필드는 모두 기본값이 켜짐이에요: Title, Artist(Author), Album Artist(Author), Album(Title/Series), Genre, Year, Comment(Description), Narrator(Composer), Cover Art.

## 로컬 저장소 (Local Storage)

Built-in 소스에서는 **Local Storage**와 **Storage Backups** 섹션이 보입니다. 미리보기이며 아직 연결되지 않았습니다. [내 메타데이터는 내가 정해요](/ko/metadata/control/)을 보세요.

## 주의할 점

- 태그 쓰기는 오디오 파일을 바꿔요. Audiobookshelf는 파일이 수정됐다고 볼 거예요.
- 태그를 쓰는 중에 메타데이터나 표지를 못 가져오면, 실패하는 대신 경고를 돌려줘요.
- 연결이 거부해서 표지를 넣지 못했을 때는 그냥 성공이 아니라 책 페이지와 편집 대화상자에 경고가 나와요.
