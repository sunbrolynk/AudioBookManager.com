---
title: 원하는 책 (Wanted)
description: 없는 책과 품질 기준에 못 미치는 책이에요.
---

**Wanted**에는 페이지가 두 개 있어요.

## 없는 책 (Missing)

파일이 없는 모니터링 중인 책이에요. 행마다 **Auto Search**, **Interactive Search**, **Manual Import**, **Unmonitor**가 있어요.

- Auto Search는 켜져 있는 모든 인덱서에 물어보고, 프로필이 허용하는 가장 좋은 릴리스를 grab해요.
- Interactive Search는 릴리스 목록을 보여 주고 내가 고르게 해요. 여기서 고른 건 수동 grab으로 쳐요.
- Manual Import는 이미 갖고 있는 파일을 ABM에 알려 줘요.

ABM은 없는 책을 알아서 검색하기도 해요. 릴리스는 grab하기 전에 지연 프로필에 따라 잠시 대기해요. [프로필](/ko/settings/profiles/)을 보세요.

## 기준 미달 (Cutoff Unmet)

다운로드는 됐지만 품질이 아직 프로필의 기준("Upgrade Until")보다 낮은 책이에요. **Search All Cutoff Unmet**으로 한꺼번에 검색할 수 있어요. 더 좋은 사본은 사다리에서 기존 것보다 순위가 높을 때만 교체해요.

**Media Management > Quality Upgrades**에서 이 검색을 자동으로 돌릴 수 있어요: **Automatic Upgrade Search**(기본값 켜짐)가 **Upgrade Search Interval**(기본 24시간)마다 돌아요. [미디어 관리](/ko/settings/media-management/)를 보세요.

Sonarr를 써 봤다면: Wanted > Cutoff Unmet과 같은 개념인데, 해상도 대신 형식의 사다리(M4B, MP3 등, 단일 파일 또는 여러 파일)를 써요.
