---
title: Metadane
description: Jakie pliki sidecar i tagi audio ABM zapisuje, i kiedy.
---

**Settings > Metadata** decyduje, co ABM zapisuje do folderu książki i do jej plików. Jak te pliki są używane, opisuje strona [Pliki sidecar](/pl/using/sidecars/).

## Źródło (Source)

**Metadata Source** to Built-in (domyślnie), Hosted (libexdb.com) lub Self-hosted, który wymaga **Server URL**. **Test** wysyła prawdziwe zapytanie do wybranego źródła bez zapisywania, **Status** mówi, czy jest gotowe, a **Connection** pokazuje trasę, którą wychodzą zapytania, z linkiem do **Settings > Network**. Zmiana działa od razu dla wszystkich zapytań. Zobacz [Wybór źródła metadanych](/pl/metadata/choosing-a-source/).

## Tworzenie plików metadanych

| Ustawienie | Domyślnie | Działanie |
|---|---|---|
| Create on Book Add | wył. | Zapisuje pliki, gdy książka zostaje dodana jako poszukiwana |
| Create on Import | wł. | Zapisuje pliki, gdy audiobook zostaje zaimportowany |
| Create on Refresh | wył. | Tworzy albo aktualizuje pliki przy odświeżaniu metadanych |
| Overwrite Existing | wył. | Zastępuje pliki, które już są w folderze |

Pliki do utworzenia: `cover.jpg` (wł.), `title.opf` (wł., zgodny z Audiobookshelf), `desc.txt` (wł.) i `reader.txt` (wł.).

## Zapisywanie tagów w plikach audio

Zapisuje tagi audio w samych plikach audio.

| Ustawienie | Domyślnie |
|---|---|
| Write Audio Tags | wył. |
| Write Audio Tags on Import | wł., gdy zapisywanie tagów jest włączone |
| Write Audio Tags on Refresh | wył. |

Pola tagów, domyślnie wszystkie włączone: Title, Artist (Author), Album Artist (Author), Album (Title/Series), Genre, Year, Comment (Description), Narrator (Composer) i Cover Art.

## Pamięć lokalna (Local Storage)

Przy źródle Built-in widać sekcje **Local Storage** i **Storage Backups**. To podgląd i nie są jeszcze podłączone. Zobacz [Twoje metadane, twoja kontrola](/pl/metadata/control/).

## Pułapki

- Zapisywanie tagów zmienia pliki audio. Audiobookshelf zobaczy je jako zmodyfikowane.
- Jeśli podczas zapisywania tagów nie da się pobrać metadanych albo okładki, wywołanie zwraca ostrzeżenia zamiast kończyć się błędem.
- Gdy nie dało się osadzić okładki, bo połączenie ją odrzuciło, strona książki i okno edycji pokazują ostrzeżenie zamiast zwykłego sukcesu.
