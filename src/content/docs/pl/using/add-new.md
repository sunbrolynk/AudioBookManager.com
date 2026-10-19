---
title: Dodawanie nowych książek
description: Wyszukaj książkę i dodaj ją jako poszukiwaną.
---

**Library > Add New** szuka książek w Libex i dodaje te, które wybierzesz. Wyszukiwanie dopasowuje tytuł, autora, serię albo ASIN.

## Co robi dodanie

Dodana książka staje się **Wanted** w wybranym przez ciebie folderze głównym i profilu jakości, a ABM zaczyna jej szukać zgodnie z ustawieniem monitorowania. To, że książka już jest w bibliotece, ABM wykrywa tylko po ASIN-ie. Inne wydanie tego samego tytułu ma inny ASIN.

## Wyszukiwanie autorów i serii

:::caution[W następnym wydaniu]
Trybów wyszukiwania Author i Series nie ma jeszcze w żadnej wydanej wersji.
:::

Wyszukiwanie dostaje dwa tryby, które znajdują samych autorów i same serie. Starsze tryby książek zmieniają nazwy na "Books by author" i "Books in series". Dodanie autora albo serii buduje jego katalog i dodaje książki jako poszukiwane zgodnie z **Monitor**:

| Monitor | Co dodaje |
|---|---|
| All | Każdą książkę, łącznie z tymi, które jeszcze nie wyszły |
| Future | Tylko książki wydane od teraz |
| Missing (domyślnie) | Książki, których nie masz |
| None | Tylko katalog |

Wybierasz też folder główny, profil jakości i to, czy książki, które pojawią się później, też mają być dodawane. Dla serii jest to domyślnie włączone, a dla autora wyłączone. Autor albo seria, które już są w twojej bibliotece, pokazują "In Library" z akcją **Add missing books**.

Dodawanie idzie jako zadanie w tle z powiadomieniem o postępie.

## Jeśli wyszukiwanie nic nie zwraca

Wyszukiwanie, które nie dostanie odpowiedzi od źródła metadanych, kończy się błędem, a nie pustą listą. Zobacz [Rozwiązywanie problemów](/pl/troubleshooting/#źródło-metadanych-jest-niedostępne).
