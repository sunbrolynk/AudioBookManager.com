---
title: 태그
description: 태그와 자동 태그 규칙이에요.
---

**Settings > Tags**에서 태그와 **Auto Tagging**을 관리해요.

## 태그

태그는 한 단어예요: 소문자, 공백 없음, 쉼표 없음, 최대 100자. `Sci-Fi`를 입력하면 `sci-fi`가 돼요. 태그는 책, 작가, 시리즈에 붙고, 인덱서, 지연 프로필과 릴리스 프로필, 가져오기 목록, Connect 에이전트, 캘린더 피드에서 매칭에 써요.

Sonarr를 써 봤다면: 태그는 똑같이 작동해요. 태그가 붙은 프로필은 그 태그가 있는 대상에만 적용돼요.

## 자동 태그

자동 태그는 조건에 맞는 책에 태그를 붙이는 규칙이에요.

| 필드 | 효과 |
|---|---|
| Name | 이름 |
| Enable | 켜기 또는 끄기 |
| Remove Tags Automatically | 책이 더 이상 조건에 맞지 않으면 태그를 떼요 |
| Tags | 붙일 태그 |
| Conditions | 책이 맞아야 하는 조건. 각각 반대로 하거나 필수로 할 수 있어요 |

조건 종류: Genre, Monitored, Language, Root Folder, Status, Tag, Year(범위), Series Type, Author(포함), Narrator(포함), 분 단위 Runtime(범위), Rating(범위).

**Apply**는 선택한 규칙을 지금 바로 돌려요. 규칙은 책이 바뀔 때도 돌아가요.

## 주의할 점

- 삭제된 태그나 루트 폴더를 가리키는 규칙은 양방향 모두 통째로 건너뛰어요. 그래서 깨진 규칙이 태그를 잘못 붙이거나 떼는 일은 없어요.
- Remove Tags Automatically는 이 규칙이 붙였을 태그만 떼요.
