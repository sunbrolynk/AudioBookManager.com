---
title: Libex
description: ABM의 책 데이터가 어디서 오는지 알려 줘요.
---

ABM은 책, 작가, 시리즈, 챕터 데이터를 **Libex**에서 가져와요. Libex는 별도 프로젝트로 운영되는 오픈 Audible 메타데이터 서비스예요. 데이터의 출처는 Libex지만, 정작 중요한 건 ABM이 데이터를 받은 뒤 무엇을 하는지, 그리고 그중 얼마나 내가 직접 정할 수 있는지예요. 이 섹션의 나머지가 그 이야기예요.

Libex: [소스 코드](https://github.com/LibexHQ/Libex) · [API 레퍼런스](https://libexdb.com/redoc)

기본적으로 정식 릴리스는 libexdb.com의 공개 Libex 인스턴스에 요청해요. 다음 릴리스부터는 소스를 고를 수 있어요. [메타데이터 소스 고르기](/ko/metadata/choosing-a-source/)를 보세요.

Libex에 연결할 수 없으면 ABM이 소스 이름과 함께 알려 줘요. 그래도 책을 직접 추가하고 가져올 수는 있어요. [문제 해결](/ko/troubleshooting/#메타데이터-소스를-사용할-수-없어요)을 보세요.
