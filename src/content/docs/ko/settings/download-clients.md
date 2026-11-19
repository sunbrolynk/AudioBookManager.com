---
title: 다운로드 클라이언트
description: 지원하는 클라이언트, 완료된 다운로드 처리, 원격 경로 매핑이에요.
---

**Settings > Download Clients**에서 실제로 다운로드를 하는 프로그램을 연결해요.

## 지원하는 클라이언트

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet, Blackhole(감시 폴더). 이게 전부예요.

## 필드

어떤 필드가 보이는지는 클라이언트에 따라 달라요.

| 필드 | 효과 |
|---|---|
| Name | 이름 |
| Host, Port, URL Base | 클라이언트가 어디서 대기하는지 |
| Use SSL, Verify TLS certificate | HTTPS를 쓸지, 인증서를 확인할지 |
| Username, Password, API Key | 자격 증명. 저장한 비밀값은 절대 보여 주지 않아요 |
| Category | ABM이 다운로드에 붙이는 카테고리나 라벨. 예: `audiobooks` |
| Watch Folder, Directory | Blackhole: 파일을 넣을 곳과 다 받은 파일이 나타나는 곳 |
| Client Priority | 여러 클라이언트가 맞을 때 어느 쪽이 이길지 |
| Remove from Client, Also Delete Files, Remove Failed | 가져오기나 실패 후 ABM이 클라이언트에서 무엇을 지울지 |
| Queue Page Remove Action | Queue 페이지에서 줄을 지우면 어떻게 할지: ABM에서만 숨기기, 클라이언트에서 지우고 파일은 남기기, 지우고 파일도 삭제하기 |

**Test**는 연결을 확인해요. 꺼 둔 클라이언트는 비정상인 클라이언트가 아니에요. 실패하는 클라이언트는 간격을 늘려 가며 재시도해요.

## 완료된 다운로드 처리

| 설정 | 기본값 | 효과 |
|---|---|---|
| Enable | 켜짐 | 다 받은 다운로드를 자동으로 가져와요 |
| Redownload Failed | 켜짐 | 실패한 릴리스를 차단 목록에 넣고 다시 검색해요 |
| Redownload Failed from Interactive Search | 켜짐 | 직접 고른 릴리스에도 똑같이 해요 |

완료된 다운로드에 같은 책이 서로 다른 형식으로 두 번 이상 들어 있으면, ABM은 책의 품질 프로필이 가장 높게 매긴 사본만 가져와요. 다운로드를 책과 일치시킬 때도 사본 하나만 재는데, 기본 품질 프로필이 가장 높게 매긴 사본이에요. 프로필이 같은 순위로 두거나 넣지 않은 형식은 M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA 순서를 따라요. 나머지 사본은 다운로드에 남고, 가져온 뒤 **Also Delete Files**가 다운로드를 지울 때만 삭제돼요. 파트 묶음 옆에 있는 파일 하나는 재생 시간이 맞을 때만 두 번째 사본으로 치고, 아니면 한 책의 파트예요. 표지와 다른 추가 파일은 ABM이 가져가는 사본과 함께 그대로 따라와요. 다운로드 폴더에 다른 책의 오디오도 있으면, 가져온 오디오 이름을 딴 추가 파일만 따라와요.

가져올 때 하드링크를 쓸지 복사할지는 [미디어 관리](/ko/settings/media-management/)의 **Use Hardlinks instead of Copy**에서 정해요. 클라이언트 폴더가 ABM이 보는 경로와 다르면 원격 경로 매핑을 추가하세요.

## 원격 경로 매핑

클라이언트는 `/downloads/audiobooks`라고 알려 주는데 ABM은 `/data/audiobooks`로 본다면 매핑을 추가하세요.

| 필드 | 효과 |
|---|---|
| Host | 매핑을 적용할 클라이언트 호스트 |
| Remote Path | 클라이언트가 알려 주는 경로 |
| Local Path | ABM이 보는 같은 폴더의 경로 |

## 주의할 점

- 다 받은 다운로드 안에 읽을 수 없는 하위 폴더가 있으면 그 다운로드의 가져오기가 통째로 멈춰요. 클라이언트에서는 아무것도 지우지 않고, 나중에 다시 시도해요.
- Docker: 가능하면 두 컨테이너 모두 다운로드 폴더를 같은 경로에 마운트하세요. 매핑은 차선책이에요.
