---
title: 리버스 프록시
description: 로그인을 깨뜨리지 않고 ABM을 nginx, Traefik, Caddy 뒤에 두는 방법이에요.
---

중요한 설정은 세 가지예요. 이것만 제대로 하면 로그인, 웹소켓, 저장이 다 잘 돼요.

## 1. 프록시가 누군지 ABM에 알려 주기

`TRUSTED_PROXIES`에 프록시 주소를 가능한 한 좁게 넣으세요:

```
TRUSTED_PROXIES=172.20.0.5
```

같은 호스트에 있는 프록시라면 `127.0.0.1`이 필요해요. 그러면 ABM은 프록시가 `X-Forwarded-For`나 `X-Real-IP`로 넘겨주는 클라이언트 주소를 믿어요. 이걸 안 하면 포워딩 헤더가 붙은 요청은 모두 로그인해야 해요. 일부러 그렇게 만든 거예요.

## 2. 헤더 넘기기

원래 `Host`를 넘기거나 `X-Forwarded-Host`를 보내세요. nginx 예시:

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

Traefik과 Caddy는 기본으로 포워딩 헤더를 보내요. ABM은 실시간 업데이트에 웹소켓을 쓰기 때문에 프록시가 업그레이드 요청을 통과시켜야 해요.

## 3. 누가 로그인할지 정하기

- **Authentication Required: Enabled**는 모두가 로그인하게 해요. 프록시가 공개돼 있다면 가장 안전해요.
- **Disabled for Local Addresses**는 ABM이 로컬로 보는 클라이언트는 로그인을 건너뛰게 해요. 신뢰하는 프록시를 거치면 프록시가 알려 준 클라이언트를 기준으로 해요.
- 포워딩 헤더를 안 보내는 프록시는 모든 요청을 로컬처럼 보이게 해요. 이럴 땐 Enabled를 고르세요.

## 하위 폴더와 도메인

`/abm` 아래에서 서비스하려면 General의 **URL Base**를 `/abm`으로 정하고 재시작하세요. **Application URL**에는 공개 주소를 넣으세요.

저장이 `cross_origin_rejected`로 실패하면 브라우저의 출처(origin)가 맞지 않는 거예요. 먼저 Host 헤더를 고치세요. 그래도 안 되면 Security의 **CORS Allowed Domains**에 내 도메인을 넣고 재시작하세요.

## 본문 크기

큰 파일을 올릴 때 413으로 실패하면 `MAX_REQUEST_BODY_BYTES`뿐 아니라 프록시 자체의 한도도 확인하세요.

## 로그 메시지 읽기

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": 그 주소를 추가하세요.
- "... is in TRUSTED_PROXIES but didn't name a client address": 프록시가 `X-Forwarded-For`나 `X-Real-IP`를 보내게 하세요.

[보안과 로그인](/ko/settings/security/)도 함께 보세요.
