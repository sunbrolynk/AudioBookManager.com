---
title: 보안과 로그인
description: 인증 방식, API 키, 신뢰하는 프록시, 로컬 네트워크, 콘텐츠 보안 정책이에요.
---

**Settings > General**의 **Security** 섹션에서 누가 어떻게 ABM을 쓸 수 있는지 정해요.

## 인증

| 설정 | 기본값 | 선택지 |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | 비밀번호를 비워 두면 지금 비밀번호를 그대로 써요 |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | 비어 있음 | 로그인을 건너뛰는 추가 CIDR 대역 |
| CORS Allowed Domains | 비어 있음 | 브라우저에서 API를 호출해도 되는 다른 출처(origin). 재시작 필요 |

실제로 쓰게 될 **Authentication Required** 모드는 두 가지예요:

- **Enabled**: 내 LAN까지 포함해서 모두가 로그인해요.
- **Disabled for Local Addresses**(`local_disabled`로 저장돼요): 로컬 주소에서 온 요청은 로그인을 건너뛰어요. 루프백, 사설 대역, 링크 로컬, IPv6 고유 로컬을 로컬로 쳐요. **Local Networks**는 여기에 더할 뿐, 대신하지는 않아요.

새로 설치하면 설정이 끝날 때까지 요청을 거부해요.

## 리버스 프록시

프록시 뒤에 둔다면 `TRUSTED_PROXIES`를 설정해서 ABM이 어떤 포워딩 헤더를 믿을지 알게 하세요. 이 목록에 없는 주소에서 포워딩 헤더가 붙어 온 요청은 절대 로컬로 치지 않고, 반드시 로그인해야 해요. 일부러 그렇게 만든 거예요. [리버스 프록시](/ko/guides/reverse-proxy/)를 보세요.

포워딩 헤더를 안 보내는 프록시는 로컬 클라이언트처럼 보여요. 그런 프록시를 쓴다면 Authentication Required를 Enabled로 하세요.

## 비밀번호 확인

어떤 변경은 지금 비밀번호를 다시 물어요: Security 설정 저장, API 키 보기나 다시 만들기, WireGuard 설정 저장이나 삭제. 비밀번호를 틀리면 보안 로그에 로그인 실패로 남아요. 아직 비밀번호를 정하지 않았다면 묻지 않아요.

## API 키

키는 비밀번호를 확인하기 전까지 보여 주지 않아요. **Regenerate API Key**는 새 키를 만들고, 한 번만 보여 주고, 예전 키는 바로 무효로 해요. 키를 직접 입력할 수는 없어요. 저장된 키를 복호화할 수 없으면(앱 비밀이 바뀐 경우) 다시 만드세요.

`X-Api-Key`나 `apikey` 파라미터로 보내세요. LAN 주소에서 온 키 요청도 키 요청으로 쳐요. [API](/ko/system/api/)를 보세요.

## 브라우저 쓰기 요청

뭔가를 바꾸는 브라우저 요청은 출처(origin)가 ABM에 접속한 주소, 신뢰하는 프록시가 넘긴 호스트, CORS 허용 도메인 중 하나와 일치하지 않으면 `cross_origin_rejected`로 거부돼요. API 키 요청은 영향을 받지 않아요.

## 콘텐츠 보안 정책

`SECURITY_HEADERS_CSP_ENABLED=false`가 아니면 ABM은 Content-Security-Policy 헤더를 보내요. UI는 ABM 자체 스크립트와 API만, 이미지는 ABM이나 HTTPS만 쓰도록 제한해요. 일반 HTTP로 제공되는 표지는 막히고, 어느 쪽이든 ABM은 iframe 안에 보일 수 없어요. API 문서 페이지는 CDN에서 불러올 수 있게 더 느슨한 정책을 받아요.

## 로그인 실패

계정 잠금은 없어요. 실패한 시도는 기록되고, Activity Log에서는 주소별로 합쳐지고, 보안 로그에는 fail2ban 같은 도구를 위해 한 줄씩 남아요.

## 비밀값

ABM이 인덱서, 클라이언트, 연결용으로 저장하는 비밀번호와 키는 앱 비밀로 암호화해요. 키를 config 디스크에 두고 싶지 않으면 `APP_SECRET`을 설정하세요. 둘 다 없으면 ABM이 `/config/app_secret`을 만들어요. 프록시와 내보내기 대상 비밀번호는 평문으로 저장돼요.
