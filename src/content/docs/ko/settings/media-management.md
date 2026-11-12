---
title: 미디어 관리
description: 루트 폴더, 가져오기, 추가 파일, 휴지통, 스캔, 업그레이드, 권한이에요.
---

**Settings > Media Management**에서 책을 어디에 둘지, 파일을 어떻게 들여올지 정해요. 고급으로 표시된 설정은 **Show Advanced**를 켜야 보여요.

## 루트 폴더 (Root Folders)

루트 폴더는 ABM이 책을 관리하는 디렉터리예요. **Add Root Folder**로 추가하면 경로를 직접 입력할 수도 있는 폴더 탐색기가 열려요. ABM은 루트 아래에서 아직 연결되지 않은 폴더를 보여 주고 가져올 수도 있어요. 루트를 추가할 때 남은 공간과 하드링크 지원 여부를 확인해요. 루트를 지울 때는 어떻게 할지 물어봐요: **Remove from ABM only**(기본값)는 그 아래 책을 ABM에서 잊고 파일은 그대로 두고, **Delete the books and their files**는 휴지통을 거치지 않고 그 경로 아래의 모든 걸 영구 삭제해요. 책이 들어 있는 루트는 확인 문구를 직접 입력해야 지울 수 있어요.

기본 루트 폴더는 새 책이 들어가는 곳이고, Library Import에서 하드링크를 제공할지도 이 폴더로 정해요.

## 폴더 (Folders)

| 설정 | 기본값 | 효과 |
|---|---|---|
| Create Empty Book Folders | 꺼짐 | 추가할 때, 루트 폴더를 바꿀 때, 디스크 스캔 중에 없는 책 폴더를 만들어요. **Delete empty folders**가 켜져 있으면 무시돼요. 지워질 폴더를 굳이 만들지 않게요. |
| Delete empty folders | 꺼짐 | 디스크 스캔 중과 책 파일을 지울 때 빈 책 폴더를 지워요 |

## 가져오기 (Importing)

| 설정 | 기본값 | 효과 |
|---|---|---|
| Skip Free Space Check | 꺼짐 | ABM이 루트의 남은 공간을 알아낼 수 없을 때 써요 |
| Minimum Free Space | 100(MB) | 가져온 뒤 남는 공간이 이보다 적으면 거부해요 |
| Use Hardlinks instead of Copy | 켜짐 | 완료된 다운로드용이에요: 복사 대신 하드링크를 써서 시딩해도 공간이 두 배로 들지 않아요. 같은 볼륨이어야 해요. |
| Library Import | Copy | [라이브러리 가져오기](/ko/library-import/)의 기본값: 복사, 하드링크, 이동. 기본 루트를 확인했고 하드링크를 지원할 때까지 하드링크는 회색으로 비활성화돼요. |
| Import Extra Files | 켜짐 | 오디오가 아닌 파일을 함께 가져오는 전체 스위치. Library Import, Manual Import, 완료된 다운로드에 적용돼요 |
| Extra File Extensions(고급) | 비어 있음 | 함께 가져올 파일 형식을 더 정해요. 원래 이름 그대로 가져와요. 예: `srt, lrc`. 점은 붙여도 되고 안 붙여도 되고, 쉼표나 공백으로 구분해요. 실행 파일이나 부분 다운로드 같은 차단된 형식은 저장할 수 없어요. **Import Extra Files**가 꺼져 있으면 비활성화돼요 |
| Preferred Cover(고급) | Matched | 둘 다 있을 때 매칭된 판본의 표지를 쓸지, 폴더에서 가장 좋은 이미지를 쓸지 |

**Import Extra Files**는 책의 다른 파일을 오디오와 함께 가져와요. 스위치 다섯 개로 어떤 종류를 가져올지 고르고, **Extra File Extensions**에 맞는 파일은 그 종류의 스위치가 꺼져 있어도 함께 가져와요:

| 스위치 | 기본값 | 대상 |
|---|---|---|
| Cover art | 켜짐 | 표지와 뒷표지, 부클릿 스캔 |
| Book info files | 켜짐 | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | 꺼짐 | 책과 함께 오는 PDF |
| Chapters, transcripts and playlists | 켜짐 | .cue, 챕터 목록, 자막, 가사, 재생 목록. 안에 적힌 파일 이름은 이름이 바뀐 오디오에 맞게 고쳐 써요. |
| Audible originals and ebooks | 꺼짐 | .aax/.aaxc, 바우처, epub 등 |

부분 다운로드와 실행 파일은 절대 가져오지 않아요. ABM 자체의 `metadata.json`은 항상 ABM이 처리해요.

여기서 하드링크는 **Use Hardlinks instead of Copy**와 같지 않아요. 그건 다운로드용이에요. Library Import 기본값은 Add to Library 대화 상자에서 미리 선택되는 값일 뿐이에요.

## 파일 관리 (File Management)

| 설정 | 기본값 | 효과 |
|---|---|---|
| Unmonitor Deleted Books | 꺼짐 | 디스크에서 지운 책을 모니터링 해제해요 |
| Change File Date | None | 가져오기와 다시 스캔할 때 파일 날짜를 바꿔요 |
| Enable Recycling Bin | 켜짐 | 지운 책 파일을 바로 삭제하지 않고 휴지통으로 옮겨요 |
| Recycling Bin | 비어 있음 | 휴지통 위치. 비워 두면 ABM 기본값(`/config/recycle/media`)을 써요 |
| Recycling Bin Cleanup | 7(일) | 0이면 자동 정리를 꺼요 |
| Library Scan Interval | 24 | 자동 스캔 사이의 시간 |
| Watch for Changes | 켜짐 | 파일이 추가, 삭제, 변경되면 스캔해요 |
| Cover Cache Workers | 4 | 아트워크를 캐시할 때 동시에 내려받는 표지 수, 1~16 |

## 품질 업그레이드 (Quality Upgrades)

| 설정 | 기본값 | 효과 |
|---|---|---|
| Automatic Upgrade Search | 켜짐 | 다운로드했지만 아직 기준 아래인 책의 더 좋은 릴리스를 주기적으로 검색해요. 진짜 업그레이드일 때만 내 사본을 교체해요. |
| Upgrade Search Interval | 24(시간) | 얼마나 자주 돌지 |

## 권한 (Permissions, 고급)

| 설정 | 기본값 | 효과 |
|---|---|---|
| Set Permissions | 꺼짐 | 가져오기와 이름 바꾸기 때 chmod를 실행해요 |
| chmod Folder | 755 | 폴더와 파일의 8진수 모드. 파일에는 실행 비트를 빼요 |
| chown Group | 비어 있음 | 그룹 이름이나 gid. 원격 파일 시스템에서는 gid를 쓰세요 |

## 주의할 점

- 휴지통을 켰는데 그 폴더를 쓸 수 없으면, 휴지통이 필요한 삭제는 영구 삭제하는 대신 실패해요.
- 하드링크는 같은 파일 시스템 안에서만 돼요. 링크할 수 없는 파일은 복사하고(절대 이동하지 않아요), 가져오기 결과에 그 수가 나와요.

## Book Naming

Book Naming은 파일과 폴더에 이름을 붙이는 방식을 정해요. 페이지의 Save 하나로 나머지 Media Management 설정과 함께 저장돼요. Rename Books, Replace Illegal Characters, Colon Replacement(직접 지정 옵션 포함), 그리고 Standard Book, Author Folder, Series Folder, Standalone Folder, Book Folder 형식이 있어요. 각 형식은 실시간 예시를 보여 주고, 토큰 목록에는 쓸 수 있는 토큰이 전부 나와요.

Library, Series, Authors에서 선택한 책에 **Organize** 작업을 쓸 수 있고, 책 페이지에도 있어요. 먼저 모든 변경의 미리보기가 열리고, 확인하기 전에는 아무것도 움직이지 않아요. 그다음 Organize가 이동하고 이름을 바꿔요. 각 책의 폴더를 이름 설정이 정한 위치로 옮기고 파일 이름을 바꿔요. 지켜보고, 취소하고, 재시작 뒤에 멈춘 곳부터 이어 갈 수 있는 작업으로 실행돼요. Organize는 한 번에 하나만 돌아요. 되돌리기는 없으니 미리보기를 잘 확인하세요. 일괄 이름 바꾸기는 그대로 Library, Series, Authors의 **Rename Files**에 있어요.

미리보기에는 바뀔 책만 나와요. **Show all selected books**를 체크하면 나머지도 볼 수 있어요. 페이지 단위로 불러오니, 큰 선택에서는 **Load more**로 계속 넘기세요. 미리보기 제목에는 바뀔 책 수와 건너뛸 책 수가 나와요.

폴더가 이름 설정이 정한 위치에 있지 않은 책은 책 페이지에 그렇게 표시되고, 옮겨질 폴더와 Organize 버튼이 나와요.

책의 새 폴더가 지금 폴더 안에 놓이게 되면, Organize는 거기에 하위 폴더를 만들고 그 책 자신의 파일만 옮겨요. 오디오와, 제가 그 책을 위해 보관하는 표지, 챕터, 그 밖의 사이드카 파일이에요. 폴더의 나머지는 그대로 있어요. 미리보기에는 "Moves into a subfolder"라고 나오고 남는 파일이 나열되며, 결과 창에는 제자리에 남은 파일이 나열돼요. 이동이 도중에 실패하면 이미 옮긴 파일은 되돌려져요. 편집 창에서 책 폴더를 자기 자신의 하위 폴더로 옮길 때도 똑같이 동작해요.

Library Import도 같은 이름 설정을 따라요. 이미 루트 폴더에 있는 책을 추가할 때나, 이미 있는 책으로 파일을 옮길 때도 마찬가지예요. Rename Books가 꺼져 있으면 각 파일은 들어온 이름 그대로 남아요. 같은 묶음의 다른 파일이나 책 폴더에 이미 있는 파일과 이름이 겹치는 파일(대소문자 무시)은 대신 형식에서 만든 이름을 받고, 가져오기에 어떤 파일이 그랬는지 기록돼요. Rename Books가 켜져 있으면 이름이 같아질 파일은 위치 순으로 번호가 붙어서, Manual Import가 하나도 건너뛰지 않아요.

기본 레이아웃은 `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`예요. 단권 책에는 시리즈 폴더도 권 번호도 없어요. `Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`가 돼요. 위치가 없는 시리즈 책도 연도로 시작해요. 연도를 모르면 생략하고, `(Unknown)`이라고 쓰지 않아요.

Sonarr를 써 봤다면: 이름 형식까지 들어 있는 Sonarr의 Media Management예요.
