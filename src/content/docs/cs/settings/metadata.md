---
title: Metadata
description: Které doprovodné soubory a audio tagy ABM zapisuje a kdy.
---

**Settings > Metadata** rozhoduje, co ABM zapisuje do složky knihy a do jejích souborů. Jak se tyhle soubory používají, popisují [Doprovodné soubory](/cs/using/sidecars/).

## Zdroj (Source)

**Metadata Source** je Built-in (výchozí), Hosted (libexdb.com) nebo Self-hosted, který potřebuje **Server URL**. **Test** pošle skutečný požadavek na vybraný zdroj bez uložení, **Status** říká, jestli je připravený, a **Connection** ukazuje cestu, kudy dotazy odcházejí, s odkazem na **Settings > Network**. Přepnutí platí hned pro všechny dotazy. Viz [Výběr zdroje metadat](/cs/metadata/choosing-a-source/).

## Vytváření souborů s metadaty (Metadata file creation)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Create on Book Add | vypnuto | Zapíše soubory, když se kniha přidá jako hledaná |
| Create on Import | zapnuto | Zapíše soubory, když se audiokniha naimportuje |
| Create on Refresh | vypnuto | Vytvoří nebo aktualizuje soubory při obnově metadat |
| Overwrite Existing | vypnuto | Nahradí soubory, které už ve složce jsou |

Soubory k vytvoření: `cover.jpg` (zapnuto), `title.opf` (zapnuto, kompatibilní s Audiobookshelfem), `desc.txt` (zapnuto) a `reader.txt` (zapnuto).

## Zápis tagů do zvukových souborů (Audio file tag writing)

Používá ffmpeg k zápisu tagů přímo do zvuku.

| Nastavení | Výchozí |
|---|---|
| Write Audio Tags | vypnuto |
| Write Tags on Import | zapnuto, jakmile je zápis tagů zapnutý |
| Write Tags on Refresh | vypnuto |

Pole tagů, všechna ve výchozím stavu zapnutá: Title, Artist (autor), Album Artist (autor), Album (název/série), Genre, Year, Comment (popis), Narrator (Composer) a Cover Art.

## Místní úložiště (Local Storage)

Se zdrojem Built-in se zobrazí sekce **Local Storage** a **Storage Backups**. Jsou to náhled a zatím nejsou připojené. Viz [Tvoje metadata, tvoje kontrola](/cs/metadata/control/).

## Na co si dát pozor

- Zápis tagů mění zvukové soubory. Audiobookshelf je uvidí jako změněné.
- Pokud se při zápisu tagů nepodaří načíst metadata nebo obálku, volání vrátí varování, místo aby selhalo.
- Když se obálku nepodařilo vložit, protože ji připojení odmítlo, stránka knihy a dialog úprav ukážou varování místo prostého úspěchu.
