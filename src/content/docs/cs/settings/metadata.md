---
title: Metadata
description: Které doprovodné soubory a audio tagy ABM zapisuje a kdy.
---

**Settings > Metadata** rozhoduje, co ABM zapisuje do složky knihy a do jejích souborů. Jak se tyhle soubory používají, popisují [Doprovodné soubory](/cs/using/sidecars/).

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

## Přijde v příští verzi

Stránka se rozdělí do sekcí a dostane sekci **Source** s volbou **Metadata Source**, tlačítkem **Test** a **Status**. Viz [Výběr zdroje metadat](/cs/metadata/choosing-a-source/).

Přibude taky sekce **Local Metadata Library** (volitelná, zobrazená jako náhled, zatím nepropojená) se stažením knihovny jako SQLite a s vlastními plánovanými zálohami. Zálohy kopírují volby záloh z General a ve výchozím stavu běží týdně ve 04:00 a drží se 28 dní.

## Na co si dát pozor

- Zápis tagů mění zvukové soubory. Audiobookshelf je uvidí jako změněné.
- Pokud se při zápisu tagů nepodaří načíst metadata nebo obálku, volání vrátí varování, místo aby selhalo.
