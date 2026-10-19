---
title: 활동 (Activity)
description: 큐, 기록, 차단 목록이에요.
---

## 큐 (Queue)

다운로드 클라이언트가 처리 중인 것들이에요. 행 작업으로 **Grab now**, **Import Now**, **Manual Import**, **Retry Now**가 있고, 다 받은 다운로드가 ABM이 볼 수 없는 경로에 있으면 **Configure remote path mapping**도 나와요.

큐에서 행을 지우면 다운로드 클라이언트 설정의 **Queue Page Remove Action**을 따라요: ABM에서만 숨기기, 클라이언트에서 지우고 파일은 남기기, 클라이언트에서 지우고 파일도 삭제하기 중 하나예요. [다운로드 클라이언트](/ko/settings/download-clients/)를 보세요.

## 기록 (History)

grab, 가져오기, 실패, 업그레이드 기록이에요. 실패한 grab에는 어떤 클라이언트를 시도했는지 나와요.

## 차단 목록 (Blocklist)

ABM이 다시 grab하지 않을 릴리스예요. 보통 실패해서 올라가요. **Remove from Blocklist**로 하나를 다시 풀어 줄 수 있어요. 다운로드 처리의 **Redownload Failed**는 실패한 릴리스를 여기에 올리고 다시 검색해요.

## Events와는 달라요

이 페이지들은 다운로드에 관한 거예요. ABM 전체에서 일어난 일의 기록은 [Activity Log](/ko/system/activity-log/)에 있어요.
