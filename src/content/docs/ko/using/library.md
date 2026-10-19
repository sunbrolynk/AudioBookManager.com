---
title: 라이브러리
description: 책, 작가, 시리즈, 그리고 ABM이 그 상태를 추적하는 방식이에요.
---

**Library** 메뉴에는 **Books**, **Series**, **Authors** 세 목록이 있어요. **Add New**와 **Library Import**로 목록을 채워요. **Audible Library**와 **Conversions**는 각자 페이지에서 따로 다뤄요.

## 책

책은 하나씩 개요 줄, 포스터, 표의 한 행으로 보여요(보기 전환은 툴바에 있어요). 책에는 상태가 있어요:

- **Wanted**: 모니터링 중이고 아직 파일이 없어요. ABM이 검색해요.
- **Downloaded**: 디스크에 파일이 있어요.
- **Missing Files**: 다운로드는 했지만 파일이 ABM이 예상하는 자리에 더 이상 없어요.
- **Unmonitored**: ABM이 건드리지 않아요.

책을 열면 상세 페이지가 나와요: 파일, 메타데이터, 기록, ABM이 측정한 품질, 그리고 Refresh & Scan과 편집 대화 상자(아래 참고) 같은 작업이 있어요. [사이드카 파일](/ko/using/sidecars/)을 보세요.

Sonarr를 써 봤다면: 책은 에피소드, 시리즈는 시즌과 쇼를 합친 것, 작가는 둘을 묶는 방법이에요. 다른 점은 책 하나가 여러 시리즈에 속할 수 있다는 거예요. 하나를 골라야 할 땐 ABM이 대표 시리즈(순번이 가장 낮은 것)를 써요.

## 시리즈

**Library > Series**에는 모든 시리즈가 보유, Wanted, 파일 없음 개수와 함께 Overview나 Posters로 나와요. 시리즈 페이지에는 내가 갖고 있지 않은 책까지 포함한 전체 카탈로그가 보여요. All, In Library, Not in Library로 거를 수 있어요. **Add Remaining**이나 **Select to Add**로 빠진 책을 Wanted로 들여오고, **Refresh Series**로 카탈로그를 다시 받아 와요. **Monitor New Books**(All 또는 None)로 나중에 나오는 책을 Wanted로 추가할지 정해요. [시리즈 추적](/ko/using/series-tracking/)을 보세요.

## 작가

**Library > Authors**에는 작가가 Overview나 Posters로 나와요. 작가 페이지에는 그 작가의 카탈로그가 시리즈별로 묶여서 나오고, 시리즈마다 다운로드한 수와 전체 수, 그리고 작가의 품질 프로필, 장르, 평점도 보여요. **Refresh Catalog**로 다시 받아 오고, **Search Author**로 그 작가의 Wanted 책을 검색해요. **Monitor New Books**는 시리즈와 똑같이 동작하고, 작가는 None으로 시작해요.

라이브러리에 아직 책이 남아 있는 시리즈나 작가는 지울 수 없어요. 책부터 지우세요.

## 품질 프로필 상속

책의 품질 프로필은 이 순서로 정해져요: 책 자체의 지정값, 대표 시리즈, 대표 작가, 그리고 기본 프로필. [프로필](/ko/settings/profiles/)을 보세요.

## 편집 대화 상자

책의 편집 대화 상자는 메타데이터가 아니라 그 책에 대한 ABM 자체 설정을 바꿔요:

- **Monitored**
- **Quality Profile**(여러 개를 편집할 땐 No Change)
- 책 한 권이면 **Path**(다시 계산하는 버튼도 있어요), 여러 개를 선택했으면 **Root Folder**
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt, OPF(체크박스에는 "metadata.opf"라고 적혀 있지만, 파일 이름은 책의 첫 번째 오디오 파일을 따라요. 예: `Dune.opf`. 오디오가 없으면 `title.opf`예요)
- **Write to Audio Files**: 메타데이터 태그를 써요

시리즈와 작가에서도 같은 대화 상자가 열리고, 거기 속한 책 하나하나에 적용돼요. 쓰기 옵션은 저장할 때 실행돼요.

## 태그

책, 작가, 시리즈에 태그를 붙일 수 있어요. 태그로 인덱서, 알림, 가져오기 목록, 프로필을 조정하고, 캘린더 피드를 걸러요. [태그](/ko/settings/tags/)를 보세요.

## 선택

줄을 선택하면 여러 개를 한꺼번에 처리할 수 있어요: 모니터링, 검색, 태그, 이름 바꾸기, 삭제. 휴대폰에서는 [휴대폰에서 쓰기](/ko/phone/)를 보세요.
