---
title: Doprovodné soubory
description: Soubory s obálkou, OPF, popisem, interpretem a cue, které ABM zapisuje vedle knihy.
---

Doprovodný soubor (sidecar) je malý soubor vedle zvuku. Čte je Audiobookshelf i další přehrávače. ABM umí zapsat tyhle:

| Soubor | Obsah |
|---|---|
| `cover.jpg` | Obálka knihy |
| `.opf` | Metadata ve formátu OPF, která přečte Audiobookshelf. Jmenuje se podle prvního zvukového souboru knihy (třeba `Dune.opf`), nebo `title.opf`, když kniha žádný zvuk nemá |
| `desc.txt` | Popis |
| `reader.txt` | Interpret |
| `.cue` | Kapitoly z Libexu (přijde v příští verzi) |

## Kdy se zapisují

V **Settings > Metadata** volí **Create on Book Add**, **Create on Import** a **Create on Refresh**, kdy se to stane. Ve výchozím stavu je zapisuje jen import. **Overwrite Existing** je vypnuté, takže soubor, který už tam je, zůstane. Zapsat je můžeš i z dialogu úprav, pro jednu knihu nebo výběr sérií a autorů. Viz [Nastavení metadat](/cs/settings/metadata/).

## Obálka je zvláštní

Obálka, kterou sis vybral sám, je zamčená. Viz [Zámek obálky](/cs/metadata/cover-lock/).

## Při importu

Import přenese i stávající soubory knihy, které nejsou zvuk, podle **Media Management > Importing**. Když má zdroj `.opf`, popis nebo soubor s interpretem, ABM vezme od každého nejvýš jeden a pojmenuje je `desc.txt` a `reader.txt`. Cíl, který už existuje, zůstane netknutý, a nová obálka se nikdy nezapíše přes existující `cover.*`.

## Hardlinky

Import přes hardlink nechá originál netknutý. Když ABM zapisuje kterýkoli z těchto souborů, zapíše nový soubor místo úpravy na místě, takže zdroj, ze kterého jsi importoval, si svůj obsah zachová.

## Na co si dát pozor

- `metadata.json` řeší ABM, když obsahuje vlastní blok ABM. `metadata.json` od jiného nástroje se řídí přepínačem Book info files.
- Ve složce sdílené víc knihami patří k této knize jen soubory pojmenované podle jejího zvuku.
- Smazání knihy odstraní její doprovodné soubory, pokud jsou pojmenované podle souborů té knihy.
