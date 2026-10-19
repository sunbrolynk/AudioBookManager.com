---
title: 변환 설정
description: 기본값, 코덱 옵션, 챕터, 메타데이터, 휴지통, ffmpeg예요.
---

**Settings > Conversions**에서 [변환](/ko/using/conversions/)의 기본값을 정해요. 작업마다 따로 바꿀 수 있어요.

## 일반

| 설정 | 기본값 | 효과 |
|---|---|---|
| Enable Conversions | 켜짐 | Conversions 페이지에서 변환을 꺼요. **Auto-Reformat on Import**는 따로예요 |
| Conversion Folder | 비어 있음 | 작업 공간. 비워 두면 시스템 임시 폴더를 써요 |
| Concurrent Conversions | 2 | 1~4. 이 값 × **Threads Per Job**(이 페이지 맨 아래 **Advanced FFmpeg**에 있어요)이 코어 수 이하가 되게 하세요. 그보다 높으면 페이지에 경고가 나와요 |
| Process Priority | Normal | Low면 시스템의 나머지가 잘 반응하고, High면 더 빨리 끝나요 |

## 오디오 품질 기본값

| 설정 | 기본값 |
|---|---|
| Default Output Format | M4B(MP3, M4A, FLAC, Opus도 있어요) |
| Default Bitrate | 128 kbps(64, 96, 128, 192, 256, 또는 다시 인코딩하지 않는 Copy) |
| Default Sample Rate | Auto, 원본에 맞춰요. 또는 22050, 44100, 48000 Hz |
| Default Channels | Auto, 원본에 맞춰요. 또는 Mono나 Stereo |

## 코덱 옵션

| 형식 | 인코더 | 옵션 |
|---|---|---|
| M4B, M4A | AAC | AAC Profile(기본값 AAC-LC)과 AAC VBR, 품질 1~5. VBR이 꺼져 있으면 비트레이트가 적용돼요. HE-AAC와 HE-AACv2도 목록에 있지만 지금은 AAC-LC로 인코딩돼요 |
| MP3 | LAME | VBR 품질 0~9(기본값 4)와 Joint Stereo(켜짐). VBR이 꺼져 있으면 비트레이트가 적용돼요 |
| Opus | libopus | 가변 비트레이트(켜짐)와 Application: Audio(기본값), VoIP 또는 Low Delay |
| FLAC | FLAC | 압축 레벨 0~12(기본값 5). 비트레이트는 무시돼요 |

비트레이트를 **Copy**로 하면 다시 인코딩하지 않고, 코덱 옵션도 전부 건너뛰어요.

## 챕터 처리

| 설정 | 기본값 | 효과 |
|---|---|---|
| Default Chapter Behavior | Auto | 있으면 유지하고, 없으면 만들어요. 그 밖에: 유지만, 항상 생성, 없음 |
| Chapter Naming Format | `Chapter {n}` | ABM이 직접 만들어야 하는 챕터의 이름이에요. `{n}`은 번호, `{title}`은 원본 파일 이름이에요. 파일이나 Libex에서 온 챕터 제목은 그대로 둬요 |
| Silence Detection | 꺼짐 | 실험적 기능이에요. 챕터가 없는 책을 나눌 때만 써요: ABM이 무음 구간에서 책을 나눠요. 꺼져 있으면 그런 나누기는 실패해요 |
| Minimum Chapter Length | 60초 | 무음 감지가 만드는 가장 짧은 챕터 길이 |
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
| Retention Period | 7일 | 휴지통 항목에 표시되는 만료일을 정해요. 아직은 그날이 돼도 아무것도 지우지 않아요 |
| Auto-Empty on Low Disk Space | 꺼짐 | 아래 기준치를 켜요 |
| Auto-Empty Threshold | 10 | 변환이 끝난 뒤 휴지통이 이 GB보다 많이 차 있으면 오래된 항목부터 지워요. 페이지에는 퍼센트로 나오지만 실제로는 GB로 읽어요 |
| Delete Original | 꺼짐 | 작업마다의 기본값이고, 바꿀 수 있어요 |
| Update Library Paths | 켜짐 | 책 기록이 변환된 파일을 따라가요 |
| Auto-Reformat on Import | 꺼짐 | 새로 가져온 책이 다른 형식이면 위 기본값으로 변환해요 |
| Backup Original Metadata | 꺼짐 | 변환하기 전에 원본 파일 기록(이름, 형식, 크기)을 바로 옆 `.metadata_backup/`에 저장해요. 오디오 태그는 저장하지 않아요 |

## 고급 FFmpeg

FFmpeg Path(비워 두면 PATH에서 찾아요), Threads Per Job(0이면 CPU 수 빼기 2로 자동 결정), Custom FFmpeg Arguments(모든 명령 끝에 붙어요. 잘못 넣으면 변환이 실패해요), Logging Level(기본값 error), Keep FFmpeg Logs(꺼짐).
