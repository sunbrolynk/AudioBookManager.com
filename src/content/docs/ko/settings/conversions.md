---
title: 변환 설정
description: 기본값, 코덱 옵션, 챕터, 메타데이터, 휴지통, ffmpeg예요.
---

**Settings > Conversions**에서 [변환](/ko/using/conversions/)의 기본값을 정해요. 작업마다 따로 바꿀 수 있어요.

## 일반

| 설정 | 기본값 | 효과 |
|---|---|---|
| Enable Conversions | 켜짐 | 끄면 변환 만들기, 일괄 대기열 추가, 재시도가 HTTP 409로 거부되고, 이미 대기열에 있는 작업은 그렇다는 메시지와 함께 실패하며, **Auto-Reformat on Import**는 아무것도 대기열에 넣지 않아요 |
| Conversion Folder | 비어 있음 | 작업 공간. 비워 두면 시스템 임시 폴더를 써요 |
| Concurrent Conversions | 2 | 1~4. 이 값에 **Threads Per Job**을 곱한 값을 코어 수 이하로 유지하세요. 넘으면 페이지가 경고해요 |
| Threads Per Job | Auto | 작업당 FFmpeg 스레드 수예요. 고급 보기에 있어요. Auto는 ABM용으로 코어 두 개를 남기고, 나머지를 동시에 실행되는 작업끼리 나눠요. 그래서 코어 8개에 동시 작업 2개면 작업당 스레드 3개예요. 고정 값을 고를 수도 있어요 |
| Process Priority | Normal | Low면 시스템의 나머지가 잘 반응하고, High면 더 빨리 끝나요 |

## 오디오 품질 기본값

| 설정 | 기본값 |
|---|---|
| Default Output Format | M4B(MP3, M4A, FLAC, Opus도 있어요) |
| Default Bitrate | 128 kbps(64, 96, 128, 192, 256, 또는 다시 인코딩하지 않는 Copy) |
| Default Sample Rate | Auto는 샘플 레이트를 지정하지 않고 FFmpeg에 맡겨요. 22050, 44100, 48000 Hz를 고르면 그 값으로 리샘플링해요. Opus는 정해진 레이트만 받기 때문에 22050은 24000으로, 44100은 48000으로 바뀌어요(로그에 남아요) |
| Default Channels | Auto는 원본의 채널 구성을 그대로 둬요. Mono는 채널 하나로 합쳐서 파일을 작게 만들어요. Stereo는 두 채널로 맞춰요 |

레이트와 채널 목록은 페이지가 보여 주는 값만 받아요. 저장된 값이 올바르지 않으면 Auto로 불러와요.

## 코덱 옵션

| 형식 | 인코더 | 옵션 |
|---|---|---|
| M4B, M4A | AAC | AAC Profile(기본값 AAC-LC)과 AAC VBR(품질 1~5)이에요. VBR이 꺼져 있으면 비트레이트가 적용돼요. 인코더가 HE-AAC를 만들 수 없어서 AAC-LC가 유일한 프로파일이에요. 저장된 HE 프로파일은 AAC-LC로 불러와요 |
| MP3 | LAME | VBR 품질 0~9(기본값 4)와 Joint Stereo(켜짐). VBR이 꺼져 있으면 비트레이트가 적용돼요 |
| Opus | libopus | 가변 비트레이트(켜짐)와 Application: Audio(기본값), VoIP 또는 Low Delay |
| FLAC | FLAC | 압축 레벨 0~12(기본값 5). 비트레이트는 무시돼요 |

비트레이트를 **Copy**로 하면 다시 인코딩하지 않고, 코덱 옵션도 전부 건너뛰어요.

## 챕터 처리

| 설정 | 기본값 | 효과 |
|---|---|---|
| Default Chapter Behavior | Auto | 있으면 유지하고, 없으면 만들어요. 그 밖에: 유지만, 항상 생성, 없음 |
| Chapter Naming Format | `Chapter {n}` | ABM이 직접 만들어야 하는 챕터의 이름이에요. `{n}`은 번호, `{title}`은 원본 파일 이름이에요. 파일이나 Libex에서 온 챕터 제목은 그대로 둬요 |
| Silence Detection | 꺼짐 | 챕터가 없는 파일에서는 ABM이 오디오에서 가장 긴 무음 구간에 챕터를 만들어요. Split Chapters와, Libex에 챕터가 없을 때 단일 파일에 쓰는 Ensure Chapters에서 사용돼요. 꺼져 있으면 그런 파일의 분할은 실패해요 |
| Target Chapter Length | 600 s | Silence Detection을 켜면 보여요. 60초 이상이에요. 각 챕터는 이 길이의 절반 안에서 가장 긴 무음 구간에서 끝나고, 무음이 없으면 이 길이에서 끝나요. 짧게 남은 끝부분은 마지막 챕터에 붙고, 챕터는 파일 전체를 덮어요 |
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
| Retention Period | 7일 | 이보다 오래된 항목은 휴지통 정리 작업이 삭제해요. 0이면 계속 보관해요 |
| Auto-Empty When Bin Is Large | 꺼짐 | 아래 임계값을 켜요 |
| Auto-Empty Threshold | 10 GB | 변환이 끝난 뒤 휴지통이 이 값보다 크면 가장 오래된 항목부터 삭제해요 |
| Delete Original | 꺼짐 | 작업마다의 기본값이고, 바꿀 수 있어요 |
| Update Library Paths | 켜짐 | 책 기록이 변환된 파일을 따라가요 |
| Auto-Reformat on Import | 꺼짐 | 새로 가져온 책이 다른 형식이면 위 기본값으로 변환해요 |
| Backup Original Metadata | 꺼짐 | 변환 전에 책 폴더 안의 `.metadata_backup` 폴더에 JSON 파일을 써요. 원본 파일마다 이름, 형식, 크기와 안에 들어 있는 태그, 챕터가 적혀 있어요 |

## 고급 FFmpeg

FFmpeg Path(비워 두면 PATH에서 찾아요), Custom FFmpeg Arguments(모든 명령 끝에 붙어요. 잘못 넣으면 변환이 실패해요), Logging Level(기본값 error), Keep FFmpeg Logs(꺼짐).
