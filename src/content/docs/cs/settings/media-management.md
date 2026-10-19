---
title: Správa médií
description: Kořenové složky, import, další soubory, koš, skenování, vylepšení a oprávnění.
---

**Settings > Media Management** určuje, kde knihy bydlí a jak se do nich dostávají soubory. Nastavení označená jako pokročilá se ukážou se zapnutým **Show Advanced**.

## Kořenové složky (Root Folders)

Kořenová složka je adresář, ve kterém ABM spravuje knihy. Přidáš ji přes **Add Root Folder**, které otevře prohlížeč složek s cestou, kterou můžeš i napsat. ABM taky umí vypsat nenamapované složky pod kořenovou složkou a naimportovat je. Při přidání se ověří volné místo a podpora hardlinků. Odebráním kořenové složky se soubory nesmažou.

Výchozí kořenová složka je ta, kam jdou nové knihy, a ta, podle které se rozhoduje, jestli Library Import nabídne hardlink.

## Složky (Folders)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Create Empty Book Folders | vypnuto | Vytváří chybějící složky knih při přidání, při změně kořenové složky a při skenování disku. Dokud je zapnuté **Delete empty folders**, ignoruje se, aby se složka nevytvořila jen proto, aby se hned smazala. |
| Delete empty folders | vypnuto | Maže prázdné složky knih při skenování disku a při mazání souborů knih |

## Import (Importing)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Skip Free Space Check | vypnuto | Pro případ, kdy ABM nedokáže zjistit volné místo na kořenové složce |
| Minimum Free Space | 100 (MB) | Import, po kterém by zbylo míň, se odmítne |
| Use Hardlinks instead of Copy | zapnuto | Pro dokončená stahování: hardlink místo kopie, aby seedování nezabíralo dvojnásobek místa. Vyžaduje stejný svazek. |
| Library Import | Copy | Výchozí pro [Library Import](/cs/library-import/): kopie, hardlink nebo přesun. Hardlink je zašedlý, dokud výchozí kořenová složka není ověřená a nepodporuje ho. |
| Import Extra Files | zapnuto | Hlavní vypínač pro přenášení souborů, které nejsou zvuk. Platí pro Library Import, Manual Import i dokončená stahování |
| Extra File Extensions (pokročilé) | prázdné | Další přípony k importu, třeba `srt, lrc`. Zakázané typy se odmítnou. |
| Preferred Cover (pokročilé) | Matched | Obálka nalezené edice, nebo nejlepší obrázek ze složky, když existují obojí |

Další soubory mají pět přepínačů:

| Přepínač | Výchozí | Co zahrnuje |
|---|---|---|
| Cover art | zapnuto | Obálku plus skeny zadní strany a bookletu |
| Book info files | zapnuto | metadata.json, .opf, .nfo, desc.txt, reader.txt |
| PDFs and companion docs | vypnuto | PDF dodávaná s knihou |
| Chapters, transcripts and playlists | zapnuto | .cue, seznamy kapitol, titulky, texty, playlisty. Názvy souborů uvnitř se přepíšou na přejmenovaný zvuk. |
| Audible originals and ebooks | vypnuto | .aax/.aaxc, vouchery, epub a podobně |

Částečná stahování a spustitelné soubory se nikdy neimportují. Vlastní `metadata.json` od ABM vždycky řeší ABM.

Hardlink tady není totéž co **Use Hardlinks instead of Copy**. To druhé je pro stahování. Výchozí hodnota pro Library Import je jen to, co dialog Add to Library předvybere.

## Správa souborů (File Management)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Unmonitor Deleted Books | vypnuto | Kniha smazaná z disku přestane být sledovaná |
| Change File Date | None | Mění data souborů při importu a novém skenování |
| Enable Recycling Bin | zapnuto | Smazané soubory knih se přesunou do koše místo smazání |
| Recycling Bin | prázdné | Kde koš je. Prázdné použije výchozí místo ABM (`/config/recycle/media`) |
| Recycling Bin Cleanup | 7 (dní) | 0 vypne automatický úklid |
| Library Scan Interval | 0 (vypnuto) | Počet hodin mezi automatickými skenováními |
| Watch for Changes | vypnuto | Skenuje, když se soubory přidají, odeberou nebo změní |
| Cover Cache Workers | 4 | Kolik obálek se stahuje najednou při ukládání obrázků do mezipaměti, od 1 do 16. Sniž to, pokud běh mezipaměti hlásí chyby |

## Vylepšování kvality (Quality Upgrades)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Automatic Upgrade Search | zapnuto | Pravidelně hledá lepší vydání stažených knih, které jsou pořád pod svou hranicí. Kopie nahradí tu tvoji, jen když je to skutečné vylepšení. |
| Upgrade Search Interval | 24 (hodin) | Jak často se to spouští |

## Oprávnění (Permissions, pokročilé)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Set Permissions | vypnuto | Spustí chmod při importu a přejmenování |
| chmod Folder | 755 | Osmičkový režim pro složky a soubory, u souborů bez bitů pro spuštění |
| chown Group | prázdné | Název skupiny nebo gid. Na vzdálených souborových systémech použij gid |

## Na co si dát pozor

- Když je koš zapnutý, ale jeho složka není dostupná, mazání, které ho potřebuje, selže, místo aby smazalo natrvalo.
- Hardlinky fungují jen v rámci jednoho souborového systému. Soubory, které propojit nejde, se zkopírují, nikdy nepřesunou, a započítají se do výsledku importu.

Pokud znáš Sonarr: tohle je Media Management ze Sonarru bez formátů pojmenování. Názvy složek volí ABM. Hromadné přejmenování najdeš v Library, Series a Authors jako **Rename Files**.
