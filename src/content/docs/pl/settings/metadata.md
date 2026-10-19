---
title: Metadane
description: Jakie pliki sidecar i tagi audio ABM zapisuje, i kiedy.
---

**Settings > Metadata** decyduje, co ABM zapisuje do folderu książki i do jej plików. Jak te pliki są używane, opisuje strona [Pliki sidecar](/pl/using/sidecars/).

## Tworzenie plików metadanych

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Create on Book Add | wył. | Zapisuje pliki, gdy książka zostaje dodana jako poszukiwana |
| Create on Import | wł. | Zapisuje pliki, gdy audiobook zostaje zaimportowany |
| Create on Refresh | wył. | Tworzy albo aktualizuje pliki przy odświeżaniu metadanych |
| Overwrite Existing | wył. | Zastępuje pliki, które już są w folderze |

Pliki do utworzenia: `cover.jpg` (wł.), `title.opf` (wł., zgodny z Audiobookshelf), `desc.txt` (wł.) i `reader.txt` (wł.).

## Zapisywanie tagów w plikach audio

Używa ffmpeg, żeby wpisać tagi do samego audio.

| Ustawienie | Domyślnie |
|---|---|
| Write Audio Tags | wył. |
| Write Tags on Import | wł., gdy zapisywanie tagów jest włączone |
| Write Tags on Refresh | wył. |

Pola tagów, domyślnie wszystkie włączone: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) i Cover Art.

## W następnym wydaniu

Strona jest przeorganizowana w sekcje i dostaje sekcję **Source** z wyborem **Metadata Source**, przyciskami **Test** i **Status**. Zobacz [Wybór źródła metadanych](/pl/metadata/choosing-a-source/).

Dostaje też sekcję **Local Metadata Library** (opcjonalną, pokazaną jako podgląd, na razie niepodłączoną) z możliwością pobrania biblioteki jako SQLite i własnymi zaplanowanymi kopiami zapasowymi. Kopie odwzorowują opcje kopii z General i domyślnie idą co tydzień o 04:00, z przechowywaniem przez 28 dni.

## Pułapki

- Zapisywanie tagów zmienia pliki audio. Audiobookshelf zobaczy je jako zmodyfikowane.
- Jeśli podczas zapisywania tagów nie da się pobrać metadanych albo okładki, wywołanie zwraca ostrzeżenia zamiast kończyć się błędem.
