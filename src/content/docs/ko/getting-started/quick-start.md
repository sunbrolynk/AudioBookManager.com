---
title: 빠른 시작
description: 새로 설치한 상태에서 첫 모니터링 책까지 가는 길이에요.
---

컨테이너를 띄운 상태에서 책 검색이 시작되기까지 가장 짧은 길이에요. 먼저 ABM을 설치하세요: [ABM 설치하기](/ko/installation/)를 보세요.

## 1. 로그인하기

처음 접속하면 로그인 계정을 만드는 과정을 안내해 줘요. 만들기 전까지 ABM은 요청을 거부해요. 그 뒤로 로그인이 어떻게 동작하는지는 [보안과 로그인](/ko/settings/security/)에 있어요.

## 2. ABM이 인터넷에 나가는 방법 고르기

**Settings > General**에 **Proxy & VPN** 섹션이 있어요. 내장 메타데이터 소스를 쓸 생각이라면 먼저 연결을 골라야 해요. [메타데이터 소스 고르기](/ko/metadata/choosing-a-source/)를 보세요.

## 3. 루트 폴더 추가하기

루트 폴더는 ABM이 책을 보관하는 곳이에요. **Settings > Media Management**의 **Root Folders** 섹션에서 추가하세요. 플레이어(예: Audiobookshelf)가 읽는 폴더와 같은 폴더여야 해요.

## 4. 인덱서와 다운로드 클라이언트 추가하기

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse, Prowlarr. [인덱서](/ko/settings/indexers/)를 보세요.
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet, Blackhole. [다운로드 클라이언트](/ko/settings/download-clients/)를 보세요.

클라이언트가 다른 컨테이너에서 돈다면, 클라이언트와 ABM이 다운로드 폴더를 같은 경로로 보는지 확인하거나 원격 경로 매핑을 추가하세요.

## 5. 품질 프로필 정하기

**Settings > Profiles**에는 ABM이 무엇을 grab할지, 무엇을 업그레이드로 칠지 정하는 품질 사다리가 있어요. 프로필 하나가 기본값이에요. 그걸로 시작하고 나중에 다듬으세요. [프로필](/ko/settings/profiles/)을 보세요.

## 6. 책 들여오기 또는 추가하기

- 이미 컬렉션이 있나요? [라이브러리 가져오기](/ko/library-import/)를 쓰세요.
- 처음부터 시작하나요? **Library > Add New**에서 제목, 작가, 시리즈로 검색하세요. [새로 추가](/ko/using/add-new/)를 보세요.

추가한 책은 파일을 가져올 때까지 Wanted 상태예요. Wanted 책은 **Wanted > Missing**에 나오고 자동으로 검색돼요.

## 7. 돌아가는 걸 지켜보기

**Activity > Queue**는 지금 다운로드 중인 걸 보여 줘요. **Activity > History**는 grab하고 가져온 걸 보여 줘요. 뭔가 잘못되면 [문제 해결](/ko/troubleshooting/)과 [작업](/ko/system/tasks/) 페이지를 보세요.
