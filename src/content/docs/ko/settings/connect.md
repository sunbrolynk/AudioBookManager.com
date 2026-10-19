---
title: 알림 (Connect)
description: 알림, 미디어 서버, 커스텀 스크립트예요.
---

**Settings > Connect**는 이벤트를 다른 곳으로 보내요. Sonarr처럼 Connect라고 불러요.

## 에이전트

**알림 에이전트**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook, Apprise. **미디어 서버**: Jellyfin, Emby. **기타**: Custom Script. Audiobookshelf는 Connect 에이전트가 아니에요.

## 이벤트

연결마다 어떤 이벤트에 반응할지 골라요.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## 연결별 설정

| 필드 | 효과 |
|---|---|
| Name, Enable | 이름과 켜기/끄기 |
| Include covers | 에이전트가 지원하면 책 표지를 첨부해요 |
| Tags | 태그가 일치하는 항목에만 보내요 |
| Conditions | 작가나 크기 같은 필드에 대한 규칙을 AND로 묶어요. 형식이 잘못된 조건은 알림을 막지 않고 통과시켜요 |
| Priority | 에이전트가 지원하는 경우에만 |

**Test**는 테스트 메시지를 보내요. **Test All**은 모든 연결을 테스트해요.

## 커스텀 메시지

커스텀 메시지는 이벤트의 문구를 바꿔 써요. **Format**과 **Cover**(Auto는 책 표지, None, 또는 Custom URL)를 고르고, **Title**과 본문을 쓰고, 변수를 클릭해서 넣으세요. 이벤트마다 있는 기본 템플릿에서 시작하면 돼요. 미리 보기로 결과를 볼 수 있고, 연결을 통해 테스트도 보낼 수 있어요.

## 주의할 점

- 토큰 같은 비밀값은 암호화해서 저장하고, 수정할 땐 비어 있고, 비워 두면 그대로 유지돼요. 보낼 곳을 바꾸면 다시 입력해야 해요.
- 메타데이터 장애에 대한 작업 실패 알림은 실패할 때마다가 아니라 장애 한 번에 한 번만 보내고, 예약 실행에서는 아예 보내지 않아요.
- Webhook 헤더는 JSON 객체이고 비밀값으로 저장돼요.
