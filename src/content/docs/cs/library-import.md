---
title: Import knihovny (Library Import)
description: Dostaň stávající sbírku do ABM přes Import Workbench.
---

Library Import naskenuje složku s audioknihami, ke každé složce najde metadata a přidá knihy do tvé knihovny. Stránka se jmenuje **Match Audiobooks**.

## Postup

1. Naskenuj složku. Každá složka se zvukem se stane řádkem.
2. Zkontroluj shody. Ty, které to potřebují, oprav.
3. Vyber řádky a přidej je do knihovny.

Každá volba je jen nepovinné přepsání výchozího nastavení z Media Management. Obyčejné naskenování a přidání tak nikdy nepotřebuje víc než dvě kliknutí.

## Jak číst seznam

- Souhrn ukazuje, kolik složek se našlo a kolik z nich má shodu. Seznam můžeš filtrovat na All, Matched, Needs attention, Unmatched, In library nebo Failed lookup. Filtr se drží v adrese stránky.
- Každý řádek ukazuje obálku, název, autora a sérii a v procentech, jak jistá shoda je, třeba "95% match". V detailu složky je **Find a match** nebo **Change match** pro ruční hledání.
- Když soubory nemají ASIN ani délku, podle kterých by se dala ověřit edice, detail složky to řekne.
- **Rescan** načte složky přidané od skenování a tvoje volby zachová.

ASIN nalezený v komentáři nebo popisu je jen nápověda. Za shodu se počítá, jen když s názvem složky souhlasí i název. Sám o sobě platí jen vyhrazený tag ASIN.

## Spojování, dělení a přidávání

- Spoj řádky, které jsou jedna kniha rozdělená do více složek. Znovu je rozdělíš v detailu složky.
- Když přidání nejde, nad tlačítkem se ukáže důvod, třeba "Select at least one folder" nebo "2 selected rows still need a decision".
- Cokoli, co by odstranilo nebo nahradilo soubory, se nejdřív zeptá.
- Když stránku opustíš, rozpracované úpravy se uloží.

## Kopírování, přesun nebo hardlink

**Settings > Media Management > Importing** určuje výchozí chování pro Library Import: kopírování (výchozí), přesun nebo hardlink. Pro každý import můžeš zvolit něco jiného.

Kniha přes hardlink nezabere žádné místo navíc a originál zůstane, kde je. Hardlink vyžaduje, aby ho výchozí kořenová složka podporovala a aby to bylo nejdřív ověřené. Jinak je volba zašedlá i s důvodem. Soubor, který propojit nejde, třeba protože je na jiném disku, se zkopíruje, nikdy nepřesune. Hotový import řekne, kolik souborů se zkopírovalo.

## Další soubory

**Import Extra Files** (ve výchozím stavu zapnuté) přenese s knihou i její obálku, poznámky a další soubory, které nejsou zvuk. Platí to stejně pro Library Import, Manual Import i dokončená stahování. Se zapnutým **Show Advanced** volí **Preferred Cover** buď nalezenou obálku z Audible (výchozí), nebo vlastní obálku složky.

## Dlouhé hodnoty

Interpret, název nebo cesta zkrácená výpustkou se otevře celá, když na ni klepneš nebo stiskneš Enter či mezerník. Dalším klepnutím ji zavřeš.

## Jiné odpovědi než import

Řádek můžeš taky odbavit jako **keep library** (odmítnout kopii knihy, kterou už knihovna má) nebo **remove empty** (odmítnout složku bez zvuku, ve které jsou jen obrázky a doprovodné soubory). Tyhle volby odstraní jen to, co patří danému řádku. Cokoli se zvukem odmítnou. Pokud je nastavený koš, soubory jdou do něj a log úlohy vypíše každou odstraněnou cestu.

## Obálka a další soubory u jednotlivých složek

Inspektor ukáže vlastní obálku složky vedle obálky nalezené edice, u obou s rozměry v pixelech. Jedním kliknutím vybereš tu druhou. Pod tím **Extra files** vypíše všechny ostatní soubory pod názvem přepínače z Media Management, kterým se řídí. Tečka označuje volbu, která se liší od nastavení, a **Apply this cover and these file choices to the N other selected** zkopíruje volby jedné složky na ostatní. Řádek, který přidává soubory ke knize, která už v knihovně je, výběr nemá.

Viz taky [Přesun knihovny do ABM](/cs/guides/moving-a-library-in/) a [Správa médií](/cs/settings/media-management/).
