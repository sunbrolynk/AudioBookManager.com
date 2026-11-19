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
- `POST /api/tasks`는 `backup_export`만 대기열에 넣습니다. 다른 작업 유형은 HTTP 403을 받고, `backup_export`에 맞지 않는 설정은 HTTP 422를 받습니다. 수동 가져오기는 `/api/manual-import/` 엔드포인트를, 라이브러리 스캔은 `POST /api/library/scan`을 사용하세요.
- Library Import는 줄마다 Libex 매칭 후보를 서버에 직접 보관해요. 세션 저장(`PUT /api/library-import/session/{id}` 또는 `PATCH /api/library-import/session/{id}/choices`)에서 `libex_matches`를 보내는 줄이 있으면 그 필드 이름을 알려 주는 HTTP 422로 거부되니, 다시 저장하는 줄에서는 빼 주세요. `POST /api/library-import/retry-match`는 선택 항목인 `session_id`를 받고, 찾은 매칭 후보를 그 세션에 저장해요.
- `GET /api/metadata/search`는 한 페이지에 결과를 최대 50개 돌려줘요. `page`(0~9)로 페이지를 고르고, 응답에는 `page`와, 뒤 페이지에 결과가 더 있을 수 있는지 알려 주는 `has_more`가 들어 있어요. ASIN 검색은 페이지 0만 있어요. `search_type=phrase`는 검색어에 대한 Libex의 베스트 매치를 돌려줘요. 이것도 페이지 0만 있고 `has_more`는 false예요. Libex는 읽을 수 없는 책을 빼기 때문에 결과가 적은 페이지도 `has_more`가 true일 수 있어요. 그러니 `has_more`가 false가 될 때까지 다음 페이지를 계속 받아 오면 돼요. `limit`(1~50)는 한 페이지를 줄여요.
- `POST /api/manual-import/execute`와 `/execute-to-book`은 파일 행마다 고정된 스키마로 확인해요. 알 수 없는 키, 상대 경로인 `source_path`, 빈 `files` 목록은 HTTP 422로 거부돼요. 각 소스는 시스템 폴더, `/tmp`나 `/mnt` 같은 최상위 폴더 바로 아래, ABM 자체 폴더(설정, 데이터베이스, 백업, 로그, 표지, 휴지통, 임시 폴더, SSL 인증서와 키가 있는 폴더) 어디에도 있지 않은 오디오 파일이어야 하고, 심볼릭 링크는 따라가서 판단해요. 거부된 파일은 경로가 담긴 HTTP 400(`Can't import <path>: the file <reason>.`)을 받고, 아무것도 대기열에 들어가지 않아요.

## 메타데이터 장애

메타데이터 소스가 필요한데 응답을 받지 못한 요청은 빈 결과가 아니라 소스와 이유를 알려 주는 `detail`과 함께 실패합니다. Libex가 속도를 제한하면 기다리는 검색은 약 10초 뒤에 포기합니다.

Sonarr를 써 봤다면: 이 API는 v3와 호환되지 않아요. Prowlarr는 Prowlarr 연결을 통해 인덱서를 ABM에 동기화할 수 있어요.
