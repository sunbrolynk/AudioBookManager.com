---
title: Tagi
description: Tagi i reguły automatycznego tagowania.
---

**Settings > Tags** zarządza tagami i **Auto Tagging**.

## Tagi

Tag to jedno słowo: małe litery, bez spacji, bez przecinków, do 100 znaków. Wpisanie `Sci-Fi` daje `sci-fi`. Tagi nadaje się książkom, autorom i seriom, a dopasowują je indeksery, profile opóźnień i wydań, listy importu, agenci Connect i kanał kalendarza.

Jeśli znasz Sonarra: tagi działają tak samo. Profil z tagiem dotyczy tylko rzeczy, które ten tag mają.

## Automatyczne tagi

Automatyczny tag to reguła, która nadaje tagi pasującym książkom.

| Pole | Działanie |
|---|---|
| Name | Etykieta |
| Enable | Włączone albo wyłączone |
| Remove Tags Automatically | Gdy książka przestaje pasować, zdejmuje tagi |
| Tags | Co nadać |
| Conditions | Do czego książka musi pasować. Każdy warunek można zanegować albo uczynić wymaganym |

Rodzaje warunków: Genre, Monitored, Language, Root Folder, Status, Tag, Year (zakres), Series Type, Author (zawiera), Narrator (zawiera), Runtime w minutach (zakres) i Rating (zakres).

**Apply** uruchamia wybrane reguły od razu. Reguły działają też wtedy, gdy książki się zmieniają.

## Pułapki

- Reguła, która odwołuje się do usuniętego tagu albo folderu głównego, jest w całości pomijana, w obie strony, więc zepsuta reguła nigdy nie otaguje źle ani nie zdejmie tagów.
- Remove Tags Automatically zdejmuje tylko tagi, które ta reguła by dodała.
