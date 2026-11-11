---
title: 처음 설정
description: 새로 설치했을 때의 설정 마법사를 단계별로 설명해요.
---

:::caution[이후 릴리스에서 추가돼요]
설정 마법사는 아직 정식 버전에 없어요. 정식 버전은 처음 접속할 때 로그인만 물어봐요.
:::

새로 설치하면 처음 접속할 때 로그인 페이지 대신 설정 마법사가 열려요. ABM에 필요한 모든 걸 한 단계씩 안내해 줘요. 계정이 아직 없을 때만 나타나요. 모든 선택은 나중에 **Settings**에서 바꿀 수 있어요.

위쪽에는 여덟 개의 고리로 된 사슬이 있어요. 고리 하나가 한 단계이고, 사슬이 지금 어디에 있는지 알려 줘요.

- **Done**: 끝난 단계예요.
- **Current step**: 지금 화면에 보이는 단계예요.
- **Not started**: 아직 도착하지 않은 단계예요.
- **Later**: 끝내지 않고 지나친 단계예요. 대기 상태로 남고, **Settings**에서 언제든 마무리할 수 있어요.

**Back**은 앞 단계로 돌아가요. **Continue**는 단계를 저장하고 넘어가요. Audible, Download client, Indexer 세 단계에는 **Skip for now**도 있어요.

## 1. 계정 (Account)

로그인을 만들고 바로 로그인해요. 사용자 이름과 8자 이상의 비밀번호를 정하고, 비밀번호는 두 번 입력해요.

| 설정 | 기본값 | 효과 |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms는 로그인 페이지를 써요. Basic (Browser Popup)은 브라우저 자체의 로그인 창을 써요 |
| Authentication required | Everywhere | Everywhere는 모든 주소에서 로그인을 요구해요. Skip on local network는 집이나 사무실 네트워크의 기기를 로그인 없이 들여보내요 |

[보안과 로그인](/ko/settings/security/)과 같은 설정이에요. 계정은 **Continue**를 누를 때 만들어져요. 만들어진 뒤에는 이 단계가 확인만 보여 줘요.

## 2. 네트워크 (Network)

Network는 마스터 스위치예요. 여기서 경로를 고르기 전에는 ABM이 보내는 어떤 것도 컴퓨터 밖으로 나가지 않아요. 그래서 Metadata와 Audible 단계가 여기에 의존해요. 이 단계는 건너뛸 수 없고, 경로가 다 갖춰질 때까지 **Continue**를 누를 수 없어요.

| 선택 | ABM에 주는 것 |
|---|---|
| Proxy | 프록시의 종류, 호스트 이름, 포트, 그리고 선택적으로 사용자 이름과 비밀번호. SOCKS4는 지원하지 않아요 |
| WireGuard | VPN 제공업체의 `.conf`를 붙여넣거나 끌어다 놓아요. 이미 저장된 터널이 있으면 그걸 써요 |
| Own VPN container | 입력할 건 없어요. ABM의 모든 트래픽이 이미 VPN이나 프록시 컨테이너를 거쳐 나간다는 체크박스에 표시해요. ABM은 이걸 확인할 수 없어요 |
| Direct | 입력할 건 없어요. ABM이 접속하는 모든 서비스에 내 IP 주소가 보인다는 체크박스에 동의해요 |

**Continue**를 누르면 경로를 저장하고 **Public IP** 확인을 보여 줘요. 뭔가 온라인으로 나가기 전에 경로가 잘 되는지 볼 수 있어요. **Change route**로 다시 고를 수 있어요. [Network](/ko/settings/network/)과 같은 설정이에요.

## 3. 메타데이터 (Metadata)

ABM이 책을 어디서 찾아볼지 골라요. 첫 폴더 스캔이 이걸로 책을 맞춰 보기 때문에 폴더보다 먼저 와요.

| 선택 | 의미 |
|---|---|
| Built-in | Libex가 ABM 안에서 돌아요. 계정도 추가 서비스도 필요 없어요. Network 단계의 경로를 써요 |
| Hosted | libexdb.com의 공개 Libex 인스턴스에 물어봐요 |
| Self-hosted | 내 Libex 서버에 물어봐요. **Server URL**을 입력하세요. **Test**는 저장하지 않고 확인해 줘요 |

**Local Storage** 체크박스도 있어요. ABM이 조회하고, 검색하고, 추가하고, 가져오고, Discover에서 본 모든 책을 영구적이고 암호화된 로컬 기록으로 남겨요. 세 소스 모두에서 쓸 수 있어요. 한 번 켜면 **Settings > Metadata**에서만 끌 수 있어요.

**Continue**를 누르면 소스를 저장하고, 체크했다면 Local Storage도 켜요. 고른 소스가 아직 밖으로 나갈 수 없을 때, 예를 들어 경로를 고르지 않은 Built-in이면 이 단계가 이유를 알려 줘요. [메타데이터 소스 고르기](/ko/metadata/choosing-a-source/)를 보세요.

## 4. Audible (선택)

ABM이 라이브러리를 읽을 수 있도록 Audible 계정에 로그인해요. Network 단계에서 고른 경로를 거쳐요. 경로를 고르지 않았거나 그 경로에서 Audible 트래픽이 막혀 있으면 이 단계가 알려 주고, **Back to Network**로 돌아갈 수 있어요. 로그인 자체는 [Audible](/ko/audible/)와 같아요. 로그인하면 이 단계에 계정이 보이고 **Continue**를 쓸 수 있어요.

**Skip for now**를 눌러 두었다가 나중에 **Settings > Audible**에서 연결해도 돼요.

## 5. 루트 폴더 (Root folder)

루트 폴더는 ABM이 책을 보관하는 곳이에요. 오디오북이 있는 폴더, 또는 새 책이 들어가야 할 폴더를 고르세요. 플레이어(예를 들어 Audiobookshelf)가 읽는 폴더와 같아야 해요. 서버의 폴더를 둘러볼 수 있고, 브라우저에서 새 폴더를 만들 수도 있어요. 처음 추가하는 루트 폴더가 기본이 돼요. 이 단계는 건너뛸 수 없어요. 루트는 나중에 **Settings > Media Management**에서 더 추가할 수 있어요.

## 6. 다운로드 클라이언트 (선택)

지원하는 클라이언트 중 하나를 골라요. Usenet이든 torrent든 상관없어요. Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet, Blackhole이 있어요. 정보를 입력하고 **Test**를 누른 다음 **Save**를 눌러요. 클라이언트는 이 단계 안에서 바로 추가돼요. 하나 더 추가할 수 있고, **Refresh**는 목록을 다시 불러와요. 클라이언트가 하나 저장되면 이 단계는 끝난 것으로 쳐요.

**Skip for now**를 눌러 두었다가 나중에 **Settings > Download Clients**에서 클라이언트를 추가해도 돼요. [다운로드 클라이언트](/ko/settings/download-clients/)를 보세요.

## 7. 인덱서 (선택)

인덱서 종류나 프리셋을 골라 입력하고 **Test**와 **Save**를 눌러요. 다운로드 클라이언트와 같은 방식이에요. 인덱서가 하나 저장되면 이 단계는 끝난 것으로 쳐요. **Skip for now**를 눌러 두었다가 나중에 **Settings > Indexers**에서 추가해도 돼요. [인덱서](/ko/settings/indexers/)를 보세요.

## 8. 마무리 (Finish)

각 단계에서 무엇을 설정했는지 요약해 보여 줘요. Network 경로(확인했다면 Public IP도), 메타데이터 소스, Audible 계정, 루트 폴더, 그리고 추가한 클라이언트와 인덱서예요. 나중으로 미룬 단계는 대기 중으로 표시돼요. 대기 중인 게 없으면 요약에 모든 고리가 켜졌다고 나와요. **Go to Library**를 누르면 마법사가 닫혀요.

건너뛴 건 언제든 **Settings**에서 할 수 있어요. 다음으로 하면 좋은 건 품질 프로파일과 책 추가예요. [빠른 시작](/ko/getting-started/quick-start/)를 보세요.
