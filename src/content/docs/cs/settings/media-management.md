---
title: Správa médií
description: Kořenové složky, import, další soubory, koš, skenování, vylepšení a oprávnění.
---

**Settings > Media Management** určuje, kde knihy bydlí a jak se do nich dostávají soubory. Nastavení označená jako pokročilá se ukážou se zapnutým **Show Advanced**.

## Kořenové složky (Root Folders)

Kořenová složka je adresář, ve kterém ABM spravuje knihy. Přidáš ji přes **Add Root Folder**, které otevře prohlížeč složek s cestou, kterou můžeš i napsat. ABM taky umí vypsat nenamapované složky pod kořenovou složkou a naimportovat je. Při přidání se ověří volné místo a podpora hardlinků. Při odebrání kořenové složky se ABM zeptá, co dělat: **Remove from ABM only** (výchozí) zapomene knihy pod ní a soubory nechá být, **Delete the books and their files** natrvalo smaže všechno pod cestou a koš přitom nepoužije. U kořenové složky, ve které jsou knihy, musíš potvrzení napsat.

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
| Extra File Extensions (pokročilé) | prázdné | Další typy souborů, které se přenesou s knihou pod svými vlastními názvy, třeba `srt, lrc`. S tečkou nebo bez ní, oddělené čárkami nebo mezerami. Zakázané typy, jako spustitelné soubory a nedokončená stahování, uložit nejde. Když je **Import Extra Files** vypnuté, je pole neaktivní |
| Preferred Cover (pokročilé) | Matched | Obálka nalezené edice, nebo nejlepší obrázek ze složky, když existují obojí |

**Import Extra Files** přenese s knihou kromě zvuku i její další soubory. Pět přepínačů určuje, které druhy se přenesou, a soubor, který odpovídá **Extra File Extensions**, se přenese, i když je jeho druh vypnutý:

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
| Library Scan Interval | 24 | Počet hodin mezi automatickými skenováními |
| Watch for Changes | zapnuto | Skenuje, když se soubory přidají, odeberou nebo změní |
| Cover Cache Workers | 4 | Kolik obálek se stahuje najednou při ukládání obrázků do mezipaměti, od 1 do 16 |

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

## Book Naming

Book Naming určuje, jak pojmenovávám soubory a složky. Ukládá se jedním Save na stránce spolu se zbytkem Media Management. Má Rename Books, Replace Illegal Characters, Colon Replacement (s vlastní volbou) a formáty pro Standard Book, Author Folder, Series Folder, Standalone Folder a Book Folder. Každý formát ukazuje živý příklad a seznam tokenů ukazuje všechny tokeny, které můžeš použít.

Library, Series a Authors mají také akci **Organize** pro vybrané knihy, stejně jako stránka jedné knihy. Nejdřív otevře náhled každé změny a nic se nepřesune, dokud nepotvrdíš. Organize pak přesouvá a přejmenovává: přesune složku každé knihy tam, kam ji řadí nastavení pojmenování, a přejmenuje její soubory. Běží jako úloha, kterou můžeš sledovat, zrušit a po restartu obnovit tam, kde skončila. Najednou běží jen jeden Organize. Zpět to vzít nejde, takže si náhled pořádně projdi. Hromadné přejmenování zůstává v Library, Series a Authors jako **Rename Files**.

Pokud je Organize přerušen, další běh pokračuje tam, kde skončil. Kniha, kterou přerušený běh už na disku přesunul nebo přejmenoval, se najde na novém místě a její záznamy se aktualizují, takže se nic nepřesouvá dvakrát. Náhled takovou knihu ukáže jako už přesunutou nebo už přejmenovanou a výsledek ji započítá jako srovnanou (reconciled). Kniha se srovná, jen když dokážu, že složka je její: její soubory musí odpovídat tomu, co mám zaznamenané, a složku si nesmí nárokovat žádná jiná kniha. Jinak se kniha přeskočí s uvedením důvodu. Zpět to stále vzít nejde.

Náhled uvádí jen knihy, které by se změnily. Zaškrtni **Show all selected books**, aby se ukázaly i ostatní. Načítá se po stránkách, takže ve velkém výběru pokračuj přes **Load more**. Nadpis náhledu počítá, kolik knih se změní a kolik se jich přeskočí.

Na stránce knihy, jejíž složka není tam, kam by ji dalo nastavení pojmenování, je to napsané, je tam složka, kam by přešla, a tlačítko Organize.

Když by nová složka knihy ležela uvnitř složky, ve které je teď, Organize tam vytvoří podsložku a přesune do ní jen vlastní soubory knihy: audio plus obálku, kapitoly a další doprovodné soubory, které k ní držím. Všechno ostatní ve složce zůstane, kde bylo. Náhled říká "Moves into a subfolder" a vypíše, co zůstane, a okno s výsledkem vypíše soubory ponechané na místě. Pokud přesun v půlce selže, už přesunuté soubory se vrátí. Přesunout složku knihy z jejího okna úprav do podsložky sebe sama funguje stejně.

Library Import se řídí stejným nastavením pojmenování, i když přidává knihu, která už leží v kořenové složce, nebo přesouvá soubory do knihy, kterou už mám. Když je Rename Books vypnuté, každý soubor si ponechá jméno, s jakým přišel. Soubor, jehož jméno by se srazilo s jiným souborem v dávce nebo s tím, který už je ve složce knihy (velikost písmen se nerozlišuje), dostane místo toho jméno z formátu a import poznamená, u kterých souborů to udělal. Když je Rename Books zapnuté, soubory, které by dostaly stejné jméno, se očíslují podle pořadí, takže Manual Import nikdy žádný nepřeskočí.

Výchozí rozvržení je `Author/Series/Vol 01 - 2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Samostatná kniha nemá složku série ani díl: `Author/2004 - Title [ASIN]/Title - (2004) - (MP3).mp3`. Kniha ze série bez pozice také začíná rokem. Neznámý rok se vynechá a nikdy se nezapíše jako `(Unknown)`.

Pokud znáš Sonarr: tohle je Media Management ze Sonarru včetně formátů pojmenování.
