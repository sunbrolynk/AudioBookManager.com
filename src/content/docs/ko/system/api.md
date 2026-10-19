---
title: API
description: 인증, 문서 페이지, 제한이에요.
---

ABM에는 `/api` 아래에 REST API가 있어요. 인터랙티브 레퍼런스는 `/api/docs`(Swagger)와 `/api/redoc`에, 스키마는 `/api/openapi.json`에 있어요. `DOCS_ENABLED=false`로 설정하면 세 개 모두 사라져요. 문서 페이지는 CDN에서 에셋을 불러오기 때문에, 인터넷에 연결돼 있어야 제대로 보여요.

## 인증하기

- **API 키**: `X-Api-Key: <key>` 헤더나 `?apikey=<key>`로 보내요. 키는 **Settings > General > Security**에서 확인하거나 다시 만들 수 있어요. [보안](/ko/settings/security/)을 보세요.
- 로그인해서 받은 **Bearer 토큰**.
- 내가 보낸 자격 증명이 우회 설정보다 우선해요. 그래서 LAN에서 키를 붙여 보낸 요청도 API 요청으로 쳐요.

## 규칙

- 오류는 `{"detail": ...}` 형태로 돌아와요.
- 비밀값은 절대 돌려주지 않아요. 응답에는 설정돼 있는지 여부만 나와요.
- 상태를 바꾸는 브라우저 요청은 출처(origin)가 일치해야 해요. 키를 쓰는 스크립트는 예외예요.
- 요청 본문은 10 MiB로 제한돼요(`MAX_REQUEST_BODY_BYTES`). 백업 복원과 표지 업로드는 한도가 더 커요. 한도를 넘으면 HTTP 413이에요.
- 유효성 검사 오류는 내가 보낸 값을 그대로 되돌려 보여 주지 않아요.

## 메타데이터 장애

메타데이터 소스에 의존하는 라우트는 본문의 `code`에 503(`metadata_unavailable`), `Retry-After: 30`이 붙은 503(`metadata_declined`), 또는 502(`metadata_rejected`)로 응답해요. 일부 조회 라우트는 장애 중에도 빈 결과를 돌려줘요.

Sonarr를 써 봤다면: 이 API는 v3와 호환되지 않아요. Prowlarr는 Prowlarr 연결을 통해 인덱서를 ABM에 동기화할 수 있어요.
