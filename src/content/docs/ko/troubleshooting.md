---
title: 문제 해결
description: 가장 겪기 쉬운 문제들의 해결 방법이에요.
---

## 중단된 가져오기가 남긴 파일 (.abmstage)

가져오기는 먼저 모든 파일을 최종 이름 옆에 임시로 놓아 두고, 전부 도착하면 한꺼번에 바꿔 넣어요. 뭔가 실패하면 ABM이 옮긴 걸 되돌려 놓아요. 어떤 부분을 되돌릴 수 없으면, 그 부분은 `.abmstage`로 끝나는 숨김 파일로 책 폴더에 남아요. 그게 유일한 사본일 수도 있어서 ABM이 지우지 않고 남겨 두고, 오류에 그 이름을 적어 줘요.

책 폴더에 `.abmstage` 파일이 하나라도 있으면, 그 폴더로 들어가는 가져오기는 이런 메시지와 함께 멈춰요:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

복구하려면:

1. 오류에 적힌 `.abmstage` 파일을 찾으세요.
2. 다운로드 폴더로 다시 옮기거나, 원래 이름으로 책 폴더에 넣으세요. 필요 없으면 지워도 돼요.
3. 가져오기를 다시 시도하세요.

## 리버스 프록시 뒤에서 모두에게 로그인을 요구해요

`TRUSTED_PROXIES`가 없으면 포워딩 헤더가 붙은 요청은 절대 로컬로 치지 않기 때문에 로그인해야 해요. 일부러 그렇게 만든 거예요.

1. `TRUSTED_PROXIES`에 프록시 주소를 넣으세요. 예: `172.20.0.5`. 같은 호스트에 있는 프록시라면 `127.0.0.1`이 필요해요.
2. 프록시가 `X-Forwarded-For`나 `X-Real-IP`를 보내게 하세요. nginx proxy manager, Traefik, Caddy는 기본으로 보내요.
3. ABM을 재시작하세요.

앱 로그를 보면 어느 경우인지 알 수 있어요:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": 프록시를 `TRUSTED_PROXIES`에 추가하세요.
- "... is in TRUSTED_PROXIES but didn't name a client address": 프록시가 `X-Forwarded-For`나 `X-Real-IP`를 보내도록 설정하세요.

반대 경우도 있어요: 포워딩 헤더를 안 보내는 프록시는 로컬 클라이언트처럼 보여서, 그 프록시를 거치는 모든 요청이 로그인을 건너뛰어요. Authentication Required를 Enabled로 하세요.

## 브라우저에서 변경이 거부돼요

프록시가 원래 `Host` 헤더를 넘기는지, 아니면 `X-Forwarded-Host`를 보내는지 확인하세요. [환경 변수](/ko/configuration/#리버스-프록시)를 보세요.

## 프록시 뒤에서 표지가 사라지거나 페이지가 이상하게 동작해요

Content-Security-Policy 헤더는 HTTPS 표지 이미지만 허용해요. 브라우저 콘솔에서 위반 내역을 확인하세요. 표지를 HTTPS로 제공하거나, `SECURITY_HEADERS_CSP_ENABLED=false`로 설정하세요.

## 큰 요청이 413을 돌려줘요

`MAX_REQUEST_BODY_BYTES`를 올리세요. 리버스 프록시가 더 낮은 한도를 걸고 직접 413으로 응답할 수도 있어요.

## 메타데이터 소스를 사용할 수 없어요

추가, 검색, 새로 고침, Discover는 Libex가 있어야 해요. ABM이 응답을 받지 못하면 도서 검색은 "Libex search failed"로, 저자나 시리즈 검색은 "Libex could not be reached; try again shortly"로 실패하고, 빈 목록을 보여 주지 않아요. 원인은 Libex가 내려가 있거나 ABM의 연결이 Libex에 닿지 못하는 경우예요.

1. [ABM 상태 페이지](https://status.audiobookmanager.com)와 [Libex 상태 페이지](https://status.libexdb.com)에서 모두에게 내려가 있는지 확인하세요.
2. 컨테이너가 인터넷에 나갈 수 있는지, 프록시를 쓴다면 **Settings > General > Proxy** 설정이 맞는지 확인하세요.
3. 1분 뒤에 다시 시도하세요.
4. 그동안에도 책을 직접 추가하고 가져올 수 있어요.

장애에 걸린 백그라운드 작업은 이유와 함께 실패해요. 자동으로 다시 시도하고, 최대 6번 또는 6시간 중 먼저 오는 쪽까지 이어져요.

## 새로 고침이 책 정보를 바꿨어요

제목, 설명, 작가, 내레이터 같은 필드는 메타데이터 소스에서 오고, 새로 고침은 소스가 지금 말하는 내용을 적용해요. ABM에는 이걸 손으로 고치는 방법이 없어요. 내가 정할 수 있는 건 표지(잠글 수 있어요), 어떤 파일을 쓸지, 태그, 그리고 새로 고침 때 사이드카와 태그를 쓸지예요. [내 메타데이터는 내가 정해요](/ko/metadata/control/)를 보세요.

## 책에 Missing Files가 떠요

책은 다운로드됐는데 파일이 ABM이 찾는 곳에 없는 거예요. 마운트와 권한을 확인하고 **Refresh & Scan**을 돌리세요. 폴더를 읽을 수 없으면 스캔은 책을 건드리지 않고, 작업은 이유와 함께 Partial로 표시돼요.

## 가져오기가 "Files left by an interrupted import"로 멈춰요

위의 `.abmstage` 섹션을 보세요.

## 다운로드는 끝나는데 가져오기가 안 돼요

원격 경로 매핑을 추가하거나, ABM과 클라이언트가 폴더를 같은 경로로 보게 하세요. 읽을 수 없는 하위 폴더가 있으면 권한을 고칠 때까지 다운로드 전체가 막혀요. [다운로드 클라이언트](/ko/settings/download-clients/)를 보세요.

## Docker에서 메타데이터 소스나 인덱서에 연결이 안 돼요

먼저 DNS와 프록시 설정을 확인하세요. Docker에서는 컨테이너가 인터넷에 나갈 수 있어야 ABM이 Libex와 인덱서에 닿아요.

## 그래도 안 풀린다면

[ABM Discord](https://discord.gg/qeJRrM6AZ)에서 물어보거나, [이슈를 열거나](https://github.com/sunbrolynk/AudioBook-Manager/issues), [support@audiobookmanager.com](mailto:support@audiobookmanager.com)으로 메일을 보내 주세요.
