---
title: Discover 설정
description: Discover 카탈로그의 새로 고침 일정과 스크래핑 한도예요.
---

**Settings > Discover**에서 [Discover](/ko/using/discover/) 카탈로그를 어떻게 채울지 정해요.

## 새로 고침과 카탈로그 상태

카탈로그마다(New Releases, Coming Soon, Audible Best, Recommended) **Refresh**와 **Clear** 버튼이 따로 있고, 각각 얼마나 차 있는지 페이지에 나와요.

## 일정

| 설정 | 효과 |
|---|---|
| Auto Refresh | 일정에 맞춰 카탈로그를 새로 고쳐요 |
| Frequency | 매일, 매주, 매월 중에서, 요일과 시간까지 정해요 |
| Refresh on Startup | ABM이 시작할 때 빈 카탈로그를 채워요 |
| Use CRON Expression | 간단한 옵션 대신 CRON 식을 써요 |

## 스크래핑

| 설정 | 범위 | 효과 |
|---|---|---|
| Pages to Scrape | 1~50 | 카탈로그마다 읽어 오는 Audible 페이지 수 |
| Max ASINs per Refresh | 100~5000 | 새로 고침 한 번에 Libex에서 가져오는 책 수 |
| Batch Size | 10~900 | Libex 요청 한 번에 넣는 ASIN 수. 크면 빠르지만 시스템에 따라 실패할 수도 있어요 |

기본값은 앱에 있고 여기선 따로 적지 않아요. 페이지를 열어서 확인하세요.

## 주의할 점

메타데이터 소스가 준비되지 않았으면 새로 고침을 건너뛰고, 로그에 한 번만 남겨요.
