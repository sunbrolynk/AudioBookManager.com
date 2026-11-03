---
title: 리버스 프록시
description: 로그인을 깨뜨리지 않고 ABM을 nginx, Traefik, Caddy 뒤에 두는 방법이에요.
---

:::caution[권장하지 않아요]
리버스 프록시든 포트 포워딩이든 ABM을 인터넷에 여는 건 권장하지 않아요. Servarr 앱들도 똑같이 말해요. 밖에서 접속하려면 대신 WireGuard나 Tailscale 같은 VPN을 쓰세요. ABM은 프록시 뒤에서도 안전하게 만들어져 있지만, 공개된 뒤의 보안은 보장할 수 없고 위험은 본인 몫이에요. 그래도 하겠다면 **Authentication Required**를 **Enabled**로 두고 ABM을 항상 최신으로 유지하세요. 그래도 공개하려는 분들을 위한 가이드입니다.
:::

중요한 설정은 세 가지예요. 이것만 제대로 하면 로그인, 웹소켓, 저장이 다 잘 돼요.

## 1. 프록시가 누군지 ABM에 알려 주기

`TRUSTED_PROXIES`에 프록시 주소를 가능한 한 좁게 넣으세요:

```
TRUSTED_PROXIES=172.20.0.5
```

같은 호스트에 있는 프록시라면 `127.0.0.1`이 필요해요. 그러면 ABM은 프록시가 `X-Forwarded-For`나 `X-Real-IP`로 넘겨주는 클라이언트 주소를 믿어요. 이걸 안 하면 포워딩 헤더가 붙은 요청은 모두 로그인해야 해요. 일부러 그렇게 만든 거예요.

## 클라이언트 주소를 읽는 방법

`X-Forwarded-For`는 오른쪽에서 왼쪽으로 읽습니다. 각 프록시는 자기가 본 주소를 뒤에 덧붙이므로 가장 왼쪽 항목은 클라이언트가 직접 보낸 값이고, 절대 신뢰하지 않습니다. ABM은 `TRUSTED_PROXIES`에 있는 항목을 건너뛰고 없는 첫 항목을 클라이언트로 봅니다. 그래서 `TRUSTED_PROXIES`는 좁게 잡아야 합니다. 범위 안의 어떤 것이든 체인에 항목을 추가할 수 있기 때문입니다. `X-Forwarded-Host`도 `TRUSTED_PROXIES`에 있는 주소에서 온 것만 믿습니다.

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

## 설정 예시

각 예시는 `/initialize.json`을 포함한 모든 경로를 통과시키고 websocket도 처리합니다. 본인의 도메인과 컨테이너 이름으로 바꾸고, `TRUSTED_PROXIES`는 프록시 주소로 설정하세요.

### nginx

```
server {
    listen 443 ssl;
    server_name abm.example.com;

    location / {
        proxy_pass http://172.20.0.2:5173;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
    }
}
```

### Nginx Proxy Manager

```
Scheme:               http
Forward Hostname/IP:  audiobook-manager
Forward Port:         5173
Websockets Support:   on
```

### Traefik

```
labels:
  - traefik.enable=true
  - traefik.http.routers.abm.rule=Host(`abm.example.com`)
  - traefik.http.routers.abm.entrypoints=websecure
  - traefik.http.routers.abm.tls.certresolver=letsencrypt
  - traefik.http.services.abm.loadbalancer.server.port=5173
```

Traefik passes websockets without any extra setting.

### Caddy

```
abm.example.com {
    reverse_proxy audiobook-manager:5173
}
```

Caddy passes websockets and the original `Host` on its own.

## 하위 폴더와 도메인

`/abm` 아래에서 서비스하려면 General의 **URL Base**를 `/abm`으로 정하고 재시작하세요. **Application URL**에는 공개 주소를 넣으세요.

저장이 `cross_origin_rejected`로 실패하면 브라우저의 출처(origin)가 맞지 않는 거예요. 먼저 Host 헤더를 고치세요. 그래도 안 되면 Security의 **CORS Allowed Domains**에 내 도메인을 넣고 재시작하세요.

## 본문 크기

큰 파일을 올릴 때 413으로 실패하면 `MAX_REQUEST_BODY_BYTES`뿐 아니라 프록시 자체의 한도도 확인하세요.

## 로그 메시지 읽기

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": 그 주소를 추가하세요.
- "... is in TRUSTED_PROXIES but didn't name a client address": 프록시가 `X-Forwarded-For`나 `X-Real-IP`를 보내게 하세요.

## 문제 해결

빈 페이지가 뜨거나, 리버스 프록시가 `/initialize.json`을 통과시켜야 한다는 "Could not load" 메시지가 나오면(0.19.1부터 알려 줍니다) 프록시가 `/initialize.json`을 ABM에 전달하지 않는 것입니다. 위의 다른 경로와 함께 통과시키세요. 실시간 업데이트가 계속 연결되지 않으면 보통 websocket 업그레이드나 `Sec-WebSocket-Protocol` 헤더가 통과하지 못하는 것입니다.

[보안과 로그인](/ko/settings/security/)도 함께 보세요.
