---
title: 일반
description: 호스트, 보안, 프록시, 로그, 백업.
---

**Settings > General**에는 Host, Security, Proxy, Logging, Backups 섹션이 있어요. Security는 [별도 페이지](/ko/settings/security/)가 있어요.

## 호스트 (Host)

| 설정 | 기본값 | 효과 |
|---|---|---|
| Bind Address | `*` | 대기할 주소. 재시작 필요 |
| Port Number | 5173 | 재시작 필요 |
| URL Base | 비어 있음 | 경로 접두사예요. `/audiobook-manager`처럼 리버스 프록시 하위 폴더에 써요. 재시작 필요 |
| Instance Name | Audiobook Manager | 브라우저 탭에 보이고, syslog 앱 이름으로도 써요 |
| Application URL | 비어 있음 | 외부 주소. `http(s)://`, 포트, URL base까지 포함해요 |
| Enable SSL | 꺼짐 | ABM이 직접 HTTPS를 제공해요. 인증서 경로와 키 경로가 필요해요. 재시작 필요 |

Docker에서는 실제로 환경 변수 `PORT`와 compose의 포트 매핑이 중요해요. [환경 변수](/ko/configuration/)를 보세요.

## 프록시

ABM이 메타데이터, 표지, Audible 페이지를 받으러 인터넷에 나가는 방법이에요.

| 설정 | 기본값 | 효과 |
|---|---|---|
| Use Proxy | 꺼짐 | 외부 요청을 프록시로 보내요 |
| Proxy Type | HTTP | HTTP, HTTPS, SOCKS5, SOCKS5H |
| Hostname, Port | 비어 있음 | 프록시 주소 |
| Username, Password | 비어 있음 | 선택 사항 |
| Test Connection | | 프록시를 확인해요 |

이 섹션에는 외부 서비스에 보이는 내 외부 IP도 표시돼요. 내장 VPN을 포함한 연결 선택은 이후 릴리스에서 추가할 예정이에요.

## 로깅 (Logging)

| 설정 | 기본값 |
|---|---|
| Log Level | Info |
| Console Log Level | Info |
| Log File Retention | 30일, 0이면 영구 보관 |
| Activity Log Retention | 90일, 0이면 영구 보관 |
| Book History Retention | 0(보관) |
| Automatic Cleanup | 켜짐 |
| Cleanup Time | 03:00 |
| SQL Logging | 꺼짐. 내용이 아주 많아요 |
| Parser Log Level, Matcher Log Level | Info. Debug면 양이 많아요 |

[로그](/ko/system/logs/)와 [Activity Log](/ko/system/activity-log/)를 보세요.

## 백업 (Backups)

| 설정 | 기본값 | 효과 |
|---|---|---|
| Backup Folder | `/config/backups` | 백업을 저장할 곳 |
| Automatic Backups | 꺼짐 | 예약 백업 |
| Schedule Frequency | Daily | 매일, 매주, 매월 중에서, 요일과 시간까지 정해요. 또는 Use Cron Expression |
| Backup Retention | 28일 | 0이면 영구 보관 |
| Auto-Export on Backup | 켜짐 | 백업할 때마다 Auto로 표시한 내보내기 대상으로 보내요 |
| Export Targets | 없음 | 원격 대상: SFTP, SCP, FTPS, FTP, S3, rclone |

[백업](/ko/system/backups/)을 보세요.
