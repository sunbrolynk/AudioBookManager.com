---
title: 인덱서
description: Newznab, Torznab, MyAnonamouse, Prowlarr예요.
---

**Settings > Indexers**에는 ABM이 릴리스를 검색하는 곳이 나와요.

## 종류

Newznab(유즈넷), Torznab(토렌트), MyAnonamouse, 그리고 Prowlarr에서 인덱서를 동기화해 오는 Prowlarr 연결이 있어요.

## 필드

| 필드 | 적용 대상 | 효과 |
|---|---|---|
| Name | 전체 | 이름 |
| Enable RSS | 전체 | RSS 동기화에 넣어요 |
| Enable Automatic Search | 전체 | ABM이 시작하는 검색에 써요 |
| Enable Interactive Search | 전체 | 직접 검색할 때 써요 |
| URL, API Path, API Key | Newznab, Torznab | 어디로 어떻게 연결할지. 자격 증명은 URL이 아니라 필드에 넣어요 |
| Categories | Newznab, Torznab | 검색할 카테고리 |
| Cookie (mam_id) | MyAnonamouse | 세션 쿠키 |
| Search Type | MyAnonamouse | All Torrents, Active Only, Freeleech Only, Freeleech + VIP |
| Search in Description / Series / Filenames | MyAnonamouse | 검색 범위를 넓혀요 |
| Minimum Seeders, Seed Ratio, Seed Time, Minimum Size | 토렌트 | 릴리스 제한과 시딩 목표 |
| Indexer Priority | 전체 | 1(가장 높음)부터 50(가장 낮음)까지, 기본값 25. 같은 릴리스가 두 인덱서에서 오면 숫자가 작은 쪽이 이겨요 |
| Download Client | 전체 | 이 인덱서의 grab을 클라이언트 하나로 보내요. (Any)는 아무 클라이언트나 써요 |
| Tags | 전체 | 태그가 일치하는 항목에만 이 인덱서를 써요 |

저장한 API 키나 쿠키는 다시 보여 주지 않아요. 수정할 때 필드를 비워 두면 그대로 유지돼요. URL을 바꾸면 비밀값을 다시 넣어야 해서, 키가 실수로 새 주소로 보내지는 일이 없어요.

## 옵션

이 옵션은 모든 인덱서에 적용되니까, 인덱서마다 정한 규칙을 지키세요.

| 설정 | 기본값 | 효과 |
|---|---|---|
| Minimum Age | 0(분) | 이보다 최근에 올라온 유즈넷 릴리스는 무시해요 |
| Retention | 0(일) | 이보다 오래된 릴리스는 무시해요. 0이면 제한 없음 |
| Maximum Size | 0(MB) | 0이면 제한 없음 |
| RSS Sync Interval | 15(분) | RSS를 얼마나 자주 확인할지 |

MAM 목록은 [가져오기 목록](/ko/settings/import-lists/)에도 쓸 수 있어요.

Sonarr를 써 봤다면: 인덱서마다 RSS, 자동 검색, 인터랙티브 검색을 나누는 방식이 똑같아요. 카테고리용 "test all"은 따로 없어요.
