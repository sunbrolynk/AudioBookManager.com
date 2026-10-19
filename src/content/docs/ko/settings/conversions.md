---
title: 변환 설정
description: 기본값, 코덱 옵션, 챕터, 메타데이터, 휴지통, ffmpeg예요.
---

**Settings > Conversions**에서 [변환](/ko/using/conversions/)의 기본값을 정해요. 작업마다 따로 바꿀 수 있어요.

## 일반

| 설정 | 기본값 | 효과 |
|---|---|---|
| Enable Conversions | 켜짐 | 전체 스위치 |
| Conversion Folder | 비어 있음 | 작업 공간. 비워 두면 시스템 임시 폴더를 써요 |
| Concurrent Conversions | 2 | UI에서는 1~4. 동시 작업 수 × 스레드 수가 코어 수보다 작게 유지하세요 |
| Process Priority | Normal | Low면 시스템의 나머지가 잘 반응하고, High면 더 빨리 끝나요 |

## 오디오 품질 기본값

| 설정 | 기본값 |
|---|---|
| Default Output Format | M4B(MP3, M4A, FLAC, Opus도 있어요) |
| Default Bitrate | 128 kbps(64, 96, 128, 192, 256, 또는 다시 인코딩하지 않는 Copy) |
| Default Sample Rate | Auto, 원본에 맞춰요 |
| Default Channels | Auto, 원본에 맞춰요 |

## 코덱 옵션

AAC Profile(기본값 AAC-LC, HE-AAC, HE-AACv2)과 AAC VBR, MP3 VBR 품질과 조인트 스테레오, FLAC 압축 레벨(기본값 5), Opus 가변 비트레이트(켜짐)와 애플리케이션 유형(기본값 Audio, VoIP와 Low Delay도 있어요).

## 챕터 처리

| 설정 | 기본값 | 효과 |
|---|---|---|
| Default Chapter Behavior | Auto | 있으면 유지하고, 없으면 만들어요. 그 밖에: 유지만, 항상 생성, 없음 |
| Chapter Naming Format | `Chapter {n}` | 생성되는 이름의 템플릿 |
| Silence Detection | 꺼짐 | 실험적 기능이에요. 무음 구간으로 챕터를 찾아봐요 |
| Minimum Chapter Length | 60초 | 감지된 챕터에 적용돼요 |
| Chapter Image Handling | Keep in file | 또는 제거, 또는 폴더로 추출 |

## 메타데이터 처리

| 설정 | 기본값 |
|---|---|
| Preserve Metadata | All metadata |
| Embed Cover Art | 켜짐(Audiobookshelf용, JPEG만) |
| Cover Art Max Size | 1000x1000 |

## 파일 관리

| 설정 | 기본값 | 효과 |
|---|---|---|
| Enable Recycle Bin | 켜짐 | 원본을 지우지 않고 휴지통으로 보내요 |
| Recycle Bin Path | 비어 있음 | 비워 두면 `/config/recycle/conversions`를 써요 |
| Retention Period | 7일 | 0이면 자동 정리를 꺼요 |
| Auto-Empty on Low Disk Space | 꺼짐 | 기준치 아래로 내려가면 휴지통을 비워요 |
| Auto-Empty Threshold | 10(%) | 남은 공간 기준 |
| Delete Original | 꺼짐 | 작업마다의 기본값이고, 바꿀 수 있어요 |
| Update Library Paths | 켜짐 | 책 기록이 변환된 파일을 따라가요 |
| Auto-Reformat on Import | 꺼짐 | 새로 가져온 책이 다른 형식이면 위 기본값으로 변환해요 |
| Backup Original Metadata | 꺼짐 | 먼저 원래 태그를 `.json` 사이드카에 저장해요 |

## 고급 FFmpeg

FFmpeg Path(비워 두면 PATH에서 찾아요), Threads Per Job(0이면 CPU 수 빼기 2로 자동 결정), Custom FFmpeg Arguments(모든 명령 끝에 붙어요. 잘못 넣으면 변환이 실패해요), Logging Level(기본값 error), Keep FFmpeg Logs(꺼짐).
