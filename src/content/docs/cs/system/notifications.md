---
title: Oznámení
description: Zvonek v záhlaví a panel pod ním.
---

Zvonek v záhlaví na počítači je místo, kde ti ABM říká, co se stalo a co potřebuje tebe. Kliknutím na něj otevřeš panel oznámení. Na telefonu zvonek zatím není.

## Zvonek

- Číslo na zvonku je počet nepřečtených oznámení. Nad 99 se zobrazí 99+. Pokud je některé nepřečtené chyba, číslo zčervená.
- Kroužek kolem zvonku je rozdělaná práce. Když ABM ví, jak daleko je, kroužek se naplní na průměr běžících položek. Když to neví, kroužek se jen točí.
- Nové oznámení krátce rozbliká zvonek barvou své úrovně. Máš-li v systému zapnuté omezení pohybu, bliknutí se vynechá.
- Pokud prohlížeč ztratí živé spojení s ABM na více než 10 sekund, zvonek se změní na přeškrtnutý zvonek s čárkovaným kroužkem. Vrátí se, až se spojení obnoví.

Přístupný název zvonku čte totéž: počet nepřečtených, kolik položek běží a jejich procenta a jestli je offline.

## Panel

Shora dolů:

- **Needs attention** se objeví, jen když je něco otevřené. Jsou to věci, které zůstávají, dokud se nevyřeší, třeba kniha, jejíž stahování selhalo, nebo nová verze ABM. Každá má jedno tlačítko: **Search again** zařadí do fronty hledání té knihy a **What's new** otevře stránku Updates. Další otevírají stránku, ke které patří, nebo úlohu, jde-li ji obnovit. **x** u řádku ho zavře.
- **Running** vypisuje práci, která běží právě teď: úlohy, stahování a konverze, s průběhem a zbývajícím časem, kde jsou známé. Kliknutím na řádek se tam dostaneš.
- **Recent** ukazuje nejnovější oznámení první, s počtem nepřečtených. Kliknutí otevře, čeho se týká, a označí ho jako přečtené. Řádek má také tlačítka pro označení jako přečtené nebo nepřečtené a pro smazání.
- **Load older** ukáže víc historie. Když už nic staršího není, panel to řekne.

Když jsou všechny tři prázdné, panel řekne, že jsi v obraze.

Zápatí má **Mark all read** a odkaz na [Activity Log](/cs/system/activity-log/). Nabídka vedle názvu panelu má **Clear all**, které se napřed zeptá. Odstraní všechna oznámení kromě těch, která stále potřebují pozornost. Ta zůstávají, dokud je nevyřešíš nebo nezavřeš.

## Co se nezaznamenává

Oznámení může přijít z úlohy na pozadí, ze stahování nebo z konverze, nebo z něčeho, co jsi udělal v prohlížeči a nepovedlo se to. Výjimkou jsou ovládací prvky samotného panelu. Když selže označení jako přečtené, smazání, zavření, vyčištění nebo načtení starších, panel ukáže chybu vedle toho prvku a žádné oznámení o tom nepřidá. Jinak by rozbitá schránka plnila schránku.

## Výsledky u ovládacího prvku

Akce na Library, Book Detail, Calendar, Authors a Series a akce s obálkami ukazují výsledek jako krátký řádek u prvku, který jsi použil. Prostý řádek o úspěchu zmizí sám po pár sekundách. Chyba nebo varování zůstane do tvé další akce na tom prvku. Chyby se zaznamenávají i do zvonku, takže je najdeš, i když řádek zmizí.

Kniha, autor nebo série, které se uloží, ale jejich catalog fill se nespustí, zaznamenají varování "Catalog fill not started". Add all, kde některé knihy selžou, zaznamená "Some books were not added" s důvody.

## Uchovávání

Stará oznámení odstraňuje denní úklid logů, ve výchozím stavu po **30 dnech**. Nastavíš to pomocí **Notifications Retention** na stránce [Obecném nastavení](/cs/settings/general/) nebo `inbox_retention_days` v [API](/cs/system/api/). 0 je uchová navždy. Oznámení, která stále potřebují pozornost, se neodstraní, dokud je nevyřešíš. Úklid běží jednou denně v čas úklidu (výchozí 03:00) a nedělá nic, když je **Automatic Cleanup** vypnuté. Poznámka dole v panelu ukazuje aktuální počet dní a skrývá se při uchovávání 0.

## Čím se liší od Activity Log

Oznámení jsou to, co ti ABM říká, a můžeš je vyčistit. [Activity Log](/cs/system/activity-log/) je trvalý záznam toho, co se stalo, a vyčištění zvonku se ho nedotkne.
