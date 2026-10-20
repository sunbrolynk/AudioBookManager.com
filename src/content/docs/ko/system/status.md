---
title: 상태
description: 상태 점검과 ABM이 지금 뭘 하고 있는지 살펴보기예요.
---

**System > Status**는 상태 점검을 실행해서 문제가 있는 것을 보여 줘요. 실패하는 다운로드 클라이언트와 인덱서, 루트 폴더 문제, 접속할 수 없는 Libex 등이에요. 데이터베이스 연결 풀 사용량도 보여 줘요. 문제가 없으면 "All systems healthy"라고 나와요.

상태 점검은 백그라운드에서 6시간마다 돌아가기도 해요. Connect로 **On Health Issue**와 **On Health Restored** 알림을 받을 수 있어요. [Connect](/ko/settings/connect/)를 보세요.

Sonarr를 써 봤다면: System > Status와 Health를 한 페이지에 합친 것과 같은 개념이에요.

## 주의할 점

- 꺼 둔 다운로드 클라이언트는 비정상으로 취급하지 않아요.
- 다시 로그인해야 하는 Audible 계정은 Audible 설정 페이지뿐 아니라 여기에도 나타나요.
