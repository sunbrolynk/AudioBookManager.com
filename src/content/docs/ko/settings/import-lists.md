---
title: 가져오기 목록
description: MyAnonamouse나 RSS 피드에서 원하는 책을 끌어와요.
---

**Settings > Import Lists**는 외부 소스에서 책을 자동으로 추가해요.

## 소스

- **MAM**: **MAM Session ID**를 써서 MyAnonamouse 위시리스트를 가져와요.
- **RSS**: 내가 넣은 **RSS Link**를 쓰고, **Website URL**은 선택이에요. 웹사이트는 http나 https여야 해요.

## 목록별 설정

| 필드 | 효과 |
|---|---|
| Name | 이름 |
| Monitor | 목록이 추가하는 책을 Monitored로 할지 Unmonitored로 할지 |
| Root Folder | 책이 들어갈 곳 |
| Quality Profile | 프로필 하나, 또는 Inherit(기본값 사용) |
| Tags | 목록이 추가하는 모든 것에 붙어요 |

**Sync Now**는 목록을 바로 돌려요.

## 옵션

| 설정 | 기본값 | 효과 |
|---|---|---|
| RSS Sync Interval | 12(시간) | 목록을 얼마나 자주 동기화할지. 0이면 동기화가 꺼져요 |
| Clean Library Level | Disabled | 책이 목록에서 빠졌을 때 어떻게 할지 |

Clean Library Level 선택지: Disabled, Log Only, Keep and Unmonitor Audiobook, Remove Audiobook and Keep Files, Remove Audiobook and Delete Files. 마지막 건 파일을 지워요. 정말 그럴 생각일 때만 고르세요.

## 제외 목록

**Import List Exclusions**는 **ASIN**, **Title**, **Year**로 책을 막아서, 목록이 그 책을 다시는 추가하지 않게 해요. **Lookup ASIN**으로 값을 채울 수 있어요.

## 주의할 점

- 저장한 RSS 링크나 세션 ID는 다시 보여 주지 않아요. 주소를 바꾸려면 비밀값을 다시 입력해야 해요.
- 목록은 On Import List Synced와 On Import List New Items 알림을 보내요. [Connect](/ko/settings/connect/)를 보세요.
