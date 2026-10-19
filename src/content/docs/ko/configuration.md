---
title: 환경 변수
description: 환경 변수, 로컬 네트워크, 리버스 프록시 기본이에요.
---

대부분의 설정은 웹 UI의 **Settings**에 있어요. 아래 값들은 환경에서 설정해요.

## 환경 변수

| 변수 | 기본값 | 하는 일 |
|---|---|---|
| `PORT` | `5173` | 웹 인터페이스 포트예요. |
| `TIMEZONE` | `UTC` | 내 지역 시간대예요. 예: `America/New_York`. |
| `LOCAL_NETWORKS` | 비어 있음 | 로그인을 건너뛰는 추가 CIDR 네트워크예요. 쉼표로 구분해요. |
| `TRUSTED_PROXIES` | 비어 있음 | `X-Forwarded-For`와 `X-Real-IP`를 설정해도 된다고 믿는 리버스 프록시의 CIDR 네트워크예요. |
| `APP_SECRET` | 자동 | 저장된 자격 증명을 암호화하는 루트 키예요. 설정하지 않으면 처음 실행할 때 `/config/app_secret`에 만들어요. 키를 config 디스크에 두고 싶지 않으면 직접 설정하세요. |
| `DOCS_ENABLED` | `true` | `/api/docs`, `/api/redoc`, `/api/openapi.json`에서 API 문서를 제공해요. `false`면 사라져요. |
| `SECURITY_HEADERS_CSP_ENABLED` | `true` | UI가 ABM 자체 스크립트, 스타일, API와 HTTPS 표지 이미지만 쓰도록 제한하는 Content-Security-Policy 헤더를 보내요. `false`면 빠져요. 어느 쪽이든 프레임 삽입은 계속 막혀요. |
| `MAX_REQUEST_BODY_BYTES` | `10485760` | 엔드포인트가 받는 요청 본문의 최대 크기(10 MiB)예요. 넘으면 HTTP 413이에요. 백업 복원과 표지 업로드는 한도가 따로 있어요. |

## 로컬 네트워크

루프백, 사설 대역(`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), 링크 로컬, IPv6 고유 로컬 주소는 이미 로컬로 쳐요. **Authentication Required**를 로컬 주소 모드로 두면, 이 주소에서 온 요청은 로그인을 건너뛰어요. 더 추가하려면 이렇게 나열하세요:

```
LOCAL_NETWORKS=203.0.113.0/24
```

## 리버스 프록시

nginx, Traefik 같은 프록시 뒤에 둔다면 `TRUSTED_PROXIES`에 프록시 주소를 넣으세요:

```
TRUSTED_PROXIES=172.20.0.5
```

- 가능한 한 좁게 잡으세요. 넓은 Docker 서브넷 말고 프록시 자체 주소를 쓰세요.
- 같은 호스트에 있는 프록시는 `TRUSTED_PROXIES=127.0.0.1`이 필요해요.
- 프록시가 `X-Forwarded-For`나 `X-Real-IP`로 알려 준 클라이언트만 클라이언트로 쳐요.
- 원래 `Host` 헤더를 그대로 넘기거나(nginx: `proxy_set_header Host $host;`) `X-Forwarded-Host`를 보내세요. 뭔가를 바꾸는 브라우저 요청은 출처(origin)가 ABM에 접속한 주소나 CORS 허용 도메인과 일치하지 않으면 거부돼요.
- 포워딩 헤더를 안 보내는 프록시는 로컬 클라이언트처럼 보여요. 그런 프록시를 쓴다면 Authentication Required를 Enabled로 하세요.

로그인을 요구하지 말아야 할 때 요구한다면 [문제 해결](/ko/troubleshooting/)을 보세요.

## 더 보기

- 로그인 방식, API 키, 콘텐츠 보안 정책: [보안과 로그인](/ko/settings/security/).
- 프록시 전체 과정: [리버스 프록시](/ko/guides/reverse-proxy/).
- `BACKUP_RESTORE_UPLOAD_MAX_BYTES`(기본값 500 MiB)로 백업 복원 업로드 크기를 제한해요.
- 나머지는 전부 앱의 **Settings**에 있어요. [설정 개요](/ko/settings/media-management/)를 보세요.
