---
title: Import knihovny (Library Import)
description: Dostaň stávající sbírku do ABM přes Import Workbench.
---

Library Import naskenuje složku s audioknihami, ke každé složce najde metadata a přidá knihy do tvé knihovny. **Library > Library Import** otevře stránku "Import audiobooks you already have", kde vybereš složku ke skenování. Jakmile skenování začne, ABM přejde na stránku pro párování s nadpisem **Match Audiobooks**, kde zkontroluješ shody a knihy přidáš.

## Postup

1. Naskenuj složku. Každá složka se zvukem se stane řádkem.
2. Zkontroluj shody. Ty, které to potřebují, oprav.
3. Zaškrtni řádky, které chceš, a pak je přidej do knihovny, nebo je smaž.

Každá volba je jen nepovinné přepsání výchozího nastavení z Media Management.

## Kdy se shoda přijme

Sken přijme shodu jen tehdy, když ji soubory potvrdí:

- ASIN ve vlastních tazích souborů najde knihu, nebo
- délka knihy se od souborů liší nejvýš o tři minuty a sedí její pozice v sérii nebo její název.

Autor nebo pozice v sérii, které souborům odporují, knihu vyřadí. Když soubory stejně dobře sedí na dvě různé knihy nebo nahrávky, nepřijme se ani jedna.

Délka souborů se počítá jen tehdy, když se dal přečíst každý soubor knihy. Když jeden změřit nejde, řádek nemá žádnou délku: přiřazení pak může potvrdit jen jeho ASIN, jinak kniha čeká pod **Needs a look**.

Když je kniha ve dvou formátech, každý formát je samostatný řádek a měří se zvlášť. Kniha rozdělená na části v různých formátech je jeden řádek, když má vlastní složku, a její části se sčítají. Dokončené stahování s jednou knihou ve dvou formátech se měří jako jedna kopie a nemá žádnou délku k přiřazení, když se délky kopií liší o víc než tři minuty.

Podle délky se přijme jen anglické vydání nebo takové, jehož záznam neuvádí jazyk. Vydání v jiném jazyce se přijme jen tehdy, když ho najde vlastní ASIN souborů. Kniha zodpovězená z [místního úložiště](/cs/settings/metadata/) místo živého dotazu se bez tebe nikdy nepřijme.

Když jeden z dotazů řádku selže, přijme se jen shoda podle ASIN. Kniha nalezená jen hledáním podle autora se nabídne jen tehdy, když její délka sedí na soubory. Kniha bez záznamu proto ukazuje **Unmatched**, místo aby navrhla jinou knihu téhož autora.

Každá jiná shoda se dál nabízí jako návrh, ale řádek se počítá pod **Needs a look**, začíná nezaškrtnutý a **Select All** ho vynechá, dokud shodu nepotvrdíš nebo nevybereš jinou. Přijatá shoda s knihou, kterou už v knihovně máš, se počítá pod **In library**. Řádek **Needs a look**, jehož návrh je kniha z knihovny, položí otázku ke knihovně až ve chvíli, kdy přiřazení potvrdíš. Do té doby, když ho zaškrtneš, blokuje Add jako řádek, který ještě potřebuje rozhodnutí.

Kniha v několika volných souborech, které sdílí složku s jinými knihami, třeba složku autora nebo složku, kterou skenuješ, je jeden řádek se všemi díly. Soubory, které se liší číslem knihy nebo svazku, zůstanou samostatné řádky. Části se seskupují podle formátu: soubor s celou knihou vedle nich je samostatný řádek a datový tok v názvu souboru, třeba `128kbps`, není číslo části.

Dva formáty jedné knihy, třeba `Book.mp3` a `Book.m4b`, jsou oddělené řádky, ať soubory leží volně ve složce, kterou skenuješ, nebo ve vlastní složce knihy. Každý řádek importuje, odstraňuje a měří jen svůj vlastní soubor. Obal, cue nebo jiný nezvukový soubor se stejným názvem jde se souborem knihy, když tam kniha je v jednom formátu, a zůstane na místě, když tam je ve dvou. Platí to i tehdy, když se jedna kopie ve stejném importu přesune do knihovny a druhá se odstraní.

Tag ve tvaru `Title: Series, Book 2` se přečte jako název, série a pozice.

Pozice v sérii zapsaná jako rozsah, třeba `1-3`, souhlasí s každou pozicí uvnitř. Dvě čísla zapsaná jinak, třeba `1, 3`, se berou jako žádná pozice.

Tag názvu, alba, série, části série, interpreta, interpreta alba, skladatele nebo vypravěče delší než 500 znaků se ignoruje.

**Recent Import Sessions** na stránce Library Import ukazuje u každého skenu, kolik řádků má shodu, včetně knih, které už v knihovně jsou, a kolik jich čeká, včetně řádků, u kterých máš ještě vybrat shodu.

## Jak číst seznam

- Souhrn ukazuje, kolik složek se našlo a kolik je připravených. V horní liště je **Sort** (Folder name, Status, Title, Author, Series, Files) a **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Každý filtr ukazuje svůj počet a počty sedí se souhrnem. Shodě, kterou jsi potvrdil, se říká Ready. Řazení a filtr si pamatuje toto zařízení. Nedrží se v adrese stránky, takže odkaz s `?sort=` nebo `?filter=` je nepřenese.
- Každý řádek ukazuje obálku, název, autora a sérii a v procentech, jak jistá shoda je, třeba "95% match". V detailu složky je **Find a match** nebo **Change match** pro ruční hledání.
- Když soubory nemají ASIN ani délku, podle kterých by se dala ověřit edice, detail složky to řekne.
- **Rescan** načte složky přidané od skenování a tvoje volby zachová.

ASIN nalezený v komentáři nebo popisu je jen nápověda. Za shodu se počítá, jen když s názvem složky souhlasí i název. Sám o sobě platí jen vyhrazený tag ASIN.

## Spojování, dělení a přidávání

- Spoj řádky, které jsou jedna kniha rozdělená do více složek. Znovu je rozdělíš v detailu složky. Přiřazení spojeného řádku je jen návrh: počítá se pod **Needs a look** a není zaškrtnuté, dokud ho nepotvrdíš nebo nevybereš jiné. Jeho délka je součet částí jen tehdy, když ji má každá část, a ASIN si ponechá jen tehdy, když všechny části uvádějí stejné. Kniha spojená ze dvou formátů se stejnými názvy souborů se počítá jednou: dostane délku delšího formátu, nebo žádnou, když se liší o víc než tři minuty. Dotaz, který doběhne až po spojení nebo rozdělení jeho řádku, je také jen návrh.
- **Confirm match** v detailech řádku zaškrtne řádek **Needs a look** a **Undo confirmation** zaškrtnutí zase vezme zpět.
- Když přidání nejde, nad tlačítkem se ukáže důvod, třeba "Select at least one folder" nebo "2 selected rows still need a decision". Přidání se taky odmítne, aniž by se čehokoli dotklo, když si dva řádky nárokují stejnou složku nebo soubor.
- Cokoli, co by odstranilo nebo nahradilo soubory, se nejdřív zeptá.
- Když stránku opustíš, rozpracované úpravy se uloží.

## Kopírování, přesun nebo hardlink

**Settings > Media Management > Importing** určuje výchozí chování pro Library Import: kopírování (výchozí), přesun nebo hardlink. Pro každý import můžeš zvolit něco jiného.

Kniha přes hardlink nezabere žádné místo navíc a originál zůstane, kde je. Hardlink vyžaduje, aby ho výchozí kořenová složka podporovala a aby to bylo nejdřív ověřené. Jinak je volba zašedlá i s důvodem. Soubor, který propojit nejde, třeba protože je na jiném disku, se zkopíruje, nikdy nepřesune. Hotový import řekne, kolik souborů se zkopírovalo.

## Další soubory

**Import Extra Files** (ve výchozím stavu zapnuté) přenese s knihou i její obálku, poznámky a další soubory, které nejsou zvuk. Platí to stejně pro Library Import, Manual Import i dokončená stahování. Se zapnutým **Show Advanced** volí **Preferred Cover** buď nalezenou obálku z Audible (výchozí), nebo vlastní obálku složky.

## Dlouhé hodnoty

Interpret, název nebo cesta zkrácená výpustkou se otevře celá, když na ni klepneš nebo klikneš. Dalším klepnutím nebo kliknutím ji zavřeš. S myší se celá hodnota ukáže i při najetí kurzorem. Z klávesnice na ni přejdi a stiskni Enter nebo mezerník.

## Jiné odpovědi než import

Řádek můžeš taky odbavit jako **keep library** (odmítnout kopii knihy, kterou už knihovna má) nebo **remove empty** (odmítnout složku bez zvuku, ve které jsou jen obrázky a doprovodné soubory). Tyhle volby odstraní jen to, co patří danému řádku. **remove empty** odmítne cokoli, co obsahuje zvuk. Pokud je nastavený koš, soubory jdou do něj a log úlohy vypíše každou odstraněnou cestu. Rozhodnutí **keep library** platí jen pro knihu z knihovny, které se týkalo: když vybereš přiřazení, které se ptá na něco jiného nebo na jinou knihu z knihovny, řádek se zeptá znovu. Import to při spuštění zkontroluje znovu a nic neodstraní, když kopie v knihovně do té doby nemá žádné soubory ("Your library has no copy of this book to keep") nebo když složka obsahuje soubory knihy z tvé knihovny ("This folder holds files of a book in your library"). Řádky, které soubory místo importu odstraňují, se spustí až po dokončení všech importů ve stejném přidání a každý se odmítne, pokud některý z jeho souborů v tu chvíli patří knize z tvé knihovny. Nikdy tak neodstraní soubory, ze kterých byla v téže dávce právě přidána kniha.

## Obálka a další soubory u jednotlivých složek

Inspektor ukáže vlastní obálku složky vedle obálky nalezené edice, u obou s rozměry v pixelech. Jedním kliknutím vybereš tu druhou. Pod tím **Extra files** vypíše všechny ostatní soubory pod názvem přepínače z Media Management, kterým se řídí. Tečka označuje volbu, která se liší od nastavení, a **Apply this cover and these file choices to the N other selected** zkopíruje volby jedné složky na ostatní. Řádek, který přidává soubory ke knize, která už v knihovně je, výběr nemá.

Viz taky [Přesun knihovny do ABM](/cs/guides/moving-a-library-in/) a [Správa médií](/cs/settings/media-management/).
