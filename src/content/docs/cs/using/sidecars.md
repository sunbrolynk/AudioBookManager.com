---
title: Doprovodné soubory
description: Soubory metadata.json, obálka, OPF, popis a interpret, které ABM zapisuje vedle knihy.
---

Doprovodný soubor (sidecar) je malý soubor vedle zvuku. Čte je Audiobookshelf i další přehrávače. ABM zapisuje tyhle:

| Soubor | Obsah | Přepínač |
|---|---|---|
| `metadata.json` | Vlastní soubor metadat Audiobookshelfu a k tomu blok `abm`, který ho označí jako soubor ABM. Audiobookshelf ho čte přede vším ostatním | Žádný, zapisuje se vždy |
| `cover.jpg` | Obálka knihy. Nezapíše se, když už ve složce je nějaký `cover.*` | cover.jpg |
| `.opf` | Metadata ve formátu OPF. Jmenuje se podle prvního zvukového souboru knihy (třeba `Dune.opf`), nebo `title.opf`, když kniha žádný zvuk nemá | title.opf |
| `desc.txt` | Popis bez HTML. Vynechá se, když žádný není | desc.txt |
| `reader.txt` | Interpreti. Vynechá se, když žádní nejsou | reader.txt |

Spolu s rozložením složek jsou to soubory, ze kterých Audiobookshelf čte podrobnosti o knize, takže vidí stejnou knihu jako ABM.

## Kdy se zapisují

`metadata.json` se zapíše pokaždé, když se kniha přidá, naimportuje nebo obnoví.

Zbylé čtyři mají každý svůj přepínač v **Settings > Metadata > Files to Create**, ve výchozím stavu všechny zapnuté. Zapíšou se jen tehdy, když je zapnutý i odpovídající spouštěč: **Create on Book Add** (vypnuto), **Create on Import** (zapnuto, pokrývá stahování, Library Import i stahování z Audible) a **Create on Refresh** (vypnuto). **Overwrite Existing** je vypnuté, takže soubor, který už tam je, zůstane. Dokud složka knihy neexistuje, nezapíše se nic.

**Write to Directories** v dialogu úprav zapíše ty čtyři taky, pro jednu knihu nebo výběr sérií a autorů. Viz [Nastavení metadat](/cs/settings/metadata/).

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
