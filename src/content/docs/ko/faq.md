---
title: 자주 묻는 질문
description: 사람들이 제일 먼저 묻는 질문에 대한 짧은 답이에요.
---

## ABM이 Audiobookshelf를 대체하나요?

아니요. Audiobookshelf는 플레이어고, ABM은 사서예요. 둘 다 같은 라이브러리 폴더를 가리키게 하고 각자 할 일을 하게 두세요.

## 메타데이터는 어디서 오나요?

Audible 데이터를 위한 오픈 메타데이터 서비스인 [Libex](https://libexdb.com)에서 와요. ABM이 일정에 맞춰 새로 고치고, 직접 고른 표지는 잠가 두면 새로 고쳐도 그대로 남아요.

## 별도 데이터베이스가 필요한가요?

아니요. ABM은 모든 걸 `/config` 안의 SQLite 파일 하나에 보관해요. 따로 돌릴 건 아무것도 없어요.

## 외부 네트워크에서도 접속할 수 있나요?

네, 0.17.0 이상이면 돼요. 다만 Servarr 앱들과 마찬가지로 ABM을 인터넷에 그대로 공개하는 건 추천하지 않아요. WireGuard나 Tailscale 같은 VPN으로 들어오는 게 더 안전해요. 기본값으로는 로컬 네트워크 바깥에서 들어오는 접속만 로그인해야 하고, **Authentication Required**를 **Enabled**로 바꾸면 내 LAN까지 포함해 모두가 로그인해야 해요. nginx, Traefik, Caddy 뒤에 둔다면 `TRUSTED_PROXIES`에 프록시 주소를 넣으세요. 저장된 자격 증명은 암호화돼요. [리버스 프록시 가이드](/ko/guides/reverse-proxy/)와 [환경 변수](/ko/configuration/#리버스-프록시)를 보세요.

## 어떤 다운로드 클라이언트를 쓸 수 있나요?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet, Blackhole이에요.

## Readarr는 어떻게 됐나요?

Readarr는 전자책과 오디오북을 함께 다뤘는데, 지금은 개발이 종료됐어요. ABM은 Servarr 앱들이 처음 만든 설계를 바탕으로 오디오북만 다뤄요.

## Docker 없이 설치할 수 있나요?

아직은 안 돼요. 지금은 Docker로만 설치할 수 있어요. Linux, Windows, macOS 네이티브 설치와 Kubernetes, Unraid, Proxmox도 계획 중이에요. [다른 설치 방법](/ko/installation/#다른-설치-방법)을 보세요.

## 얼마예요?

공짜예요. GPL-3.0 라이선스의 무료 오픈 소스예요. 덕분에 저녁 시간을 아꼈다면 [Ko-fi](https://ko-fi.com/sunbrolynk)가 있어요.

## 책 제목, 작가, 설명을 고칠 수 있나요?

아니요. 그 데이터는 메타데이터 소스에서 오고, ABM은 그걸 손으로 고치지 않아요. 내가 정할 수 있는 건 표지(직접 고른 표지는 잠겨요), 새로 고침 시점, 어떤 사이드카 파일과 오디오 태그를 쓸지, 태그와 자동 태그, 모니터링, 품질 프로필이에요. [내 메타데이터는 내가 정해요](/ko/metadata/control/)를 보세요.

## ABM이 챕터, 설명, 태그를 Audiobookshelf가 읽는 곳에 써 줄 수 있나요?

`cover.jpg`, `.opf`, `desc.txt`, `reader.txt`를 쓰고, 오디오에 태그도 쓸 수 있어요. 정식 에디션과의 챕터 비교와 `.cue` 파일은 이후 릴리스에서 추가할 예정이에요. [사이드카 파일](/ko/using/sidecars/)을 보세요.

## 파일을 변환할 수 있나요?

네: 변환, 합치기, 나누기, 챕터 추가를 큐로 돌릴 수 있어요. [변환](/ko/using/conversions/)을 보세요.

## 기존 컬렉션을 가져올 수 있나요?

네, [라이브러리 가져오기](/ko/library-import/)로 하면 돼요. [라이브러리 옮겨 오기](/ko/guides/moving-a-library-in/)도 보세요.

## 모바일 레이아웃이 있나요?

네, 폭이 768px 미만이면 바뀌어요. [휴대폰에서 쓰기](/ko/phone/)를 보세요.

## Audible 계정을 여러 개 쓸 수 있나요?

네. 계정마다 라이브러리를 따로 가져요. [Audible](/ko/audible/)을 보세요.
