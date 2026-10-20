---
title: Audible 설정
description: 계정, 동기화 일정, 다운로드, 진단이에요.
---

**Settings > Audible**에서 계정을 연결하고 동기화와 다운로드를 조정해요. 기능이 어떻게 동작하는지는 [Audible](/ko/audible/) 페이지에 있어요.

## 계정

계정을 연결하려면 **Marketplace**, **Display Name**, 그리고 로그인 후 Amazon이 돌려보내는 **Redirect URL**이 필요해요. 계정마다 라이브러리를 따로 가져요. 계정에 다시 로그인해야 하면 지우지 말고 같은 계정으로 다시 로그인하세요. 지우면 라이브러리가 사라지고 Audible에서도 기기가 제거돼요.

## 일정

| 설정 | 효과 |
|---|---|
| Auto Sync | 일정에 맞춰 라이브러리를 동기화해요 |
| Sync on Account Add | 계정을 연결하자마자 동기화해요 |
| Frequency | 매일, 매주, 매월. 매주를 고르면 Day of Week가, 매월을 고르면 Day of Month(1~28)가 추가돼요. |
| Time | 시와 분 |
| Use CRON Expression | 직접 쓴 cron 식이 위 옵션을 대신해요 |

## 다운로드 설정 (Download Settings)

| 설정 | 기본값 | 효과 |
|---|---|---|
| Mirror Audible library to ABM | 켜짐 | 동기화할 때마다 아직 ABM에 없는 Audible 책을 추가하고, 파일이 없는 책을 다운로드해요. 한 번에 최대 25권이에요. 켤 때 다음 동기화에서 추가하고 다운로드할 책이 몇 권인지 보여 줘요. [Audible 라이브러리를 ABM에 미러링하기](/ko/audible/#audible-라이브러리를-abm에-미러링하기)을 보세요 |
| Concurrent Downloads | 2 | 1~5. 높을수록 빠르지만 Audible 요청 제한에 걸릴 수 있어요. |
| Preferred Quality | High | High 또는 Normal |
| Delete Encrypted Files | 켜짐 | 암호화된 AAXC 파일을 M4B로 복호화한 뒤 지워요 |
| Temp Download Path | 비어 있음 | 비워 두면 시스템 임시 폴더를 써요 |

다운로드가 실패하면 간격을 점점 늘려 가며 알아서 몇 번 재시도하고, 장애가 그보다 길어지면 최대 6시간 동안 작업을 다시 큐에 넣어요. 라이선스 거부, 갖고 있지 않은 책, 복호화 실패는 한 번에 실패 처리해요.

## 연결 진단 (Connection Diagnostics)

계정을 고르고 진단을 돌려 보세요. FFmpeg, 자격 증명, API 연결, 다운로드 가능 여부를 테스트하고, Audible이 보는 내 외부 IP도 보여 줘요.
