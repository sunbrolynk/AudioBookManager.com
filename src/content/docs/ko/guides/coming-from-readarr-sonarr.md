---
title: Readarr나 Sonarr에서 넘어오기
description: 그대로인 것과 달라지는 것이에요.
---

Sonarr, Radarr, Readarr를 써 봤다면 ABM의 대부분은 예상한 자리에 있어요.

## 똑같은 것

Wanted(Missing, Cutoff Unmet), Activity(Queue, History, Blocklist), iCal 피드가 있는 Calendar, RSS를 지원하는 인덱서, 자동 검색과 인터랙티브 검색, 기준과 업그레이드가 있는 품질 프로필, 지연 프로필과 릴리스 프로필, 태그, Connect, 원격 경로 매핑, 휴지통, 백업, Tasks와 Status.

## 다른 것

| arr 앱에서는 | ABM에서는 |
|---|---|
| 해상도 기반 품질 | 오디오 형식의 사다리, 단일 파일 또는 여러 파일 |
| 커스텀 포맷 | Must Contain, Must Not Contain, Preferred가 있는 릴리스 프로필 |
| 항목이 에피소드, 영화, 책 | 책 하나, 시리즈와 순번은 카탈로그로 추적 |
| 자체 서비스에서 메타데이터 | Libex, 표지 잠금 가능, 사이드카와 태그 기록 |
| 다운로드 폴더 하나 | 똑같고, 기존 컬렉션용 Library Import가 추가로 있어요 |
| 미디어 변환 없음 | 변환 큐: 변환, 합치기, 나누기, 챕터 |
| 이름 형식 지정 | 폴더 이름은 ABM이 정해요. Rename Files는 목록에 있어요 |
| 여러 종류의 가져오기 목록 | MAM과 RSS |

## ABM에 없는 것

Flood는 클라이언트가 아니에요. 커스텀 포맷은 없어요. Readarr의 전자책 지원은 여기에 포함되지 않아요. ABM은 오디오북 전용이에요.

## 옮겨 오기

Readarr 가져오기 도구는 없어요. [라이브러리 가져오기](/ko/library-import/)로 ABM에 기존 오디오북 폴더를 알려 주고, [라이브러리 옮겨 오기](/ko/guides/moving-a-library-in/)를 보세요.
