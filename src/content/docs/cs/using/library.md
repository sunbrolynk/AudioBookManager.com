---
title: Knihovna
description: Knihy, autoři a série a jak ABM sleduje jejich stav.
---

Nabídka **Library** má tři seznamy: **Books**, **Series** a **Authors**. Plní je **Add New** a **Library Import**. **Audible Library** a **Conversions** mají vlastní stránky.

## Knihy

Každá kniha je řádek přehledu, plakát nebo řádek tabulky (přepínač zobrazení je na liště nástrojů). Kniha má stav:

- **Wanted**: sledovaná, zatím bez souborů. ABM ji hledá.
- **Downloaded**: soubory jsou na disku.
- **Missing Files**: kniha se stáhla, ale její soubory už nejsou tam, kde je ABM čeká.
- **Unmonitored**: ABM ji nechává být.

Otevři knihu a uvidíš její detail: soubory, metadata, historii, kvalitu, kterou ABM naměřil, a akce jako Refresh & Scan a dialog úprav (viz níže). Viz [Doprovodné soubory](/cs/using/sidecars/).

Pokud znáš Sonarr: kniha je epizoda, série je řada a seriál v jednom a autor je způsob, jak seskupit obojí. Rozdíl je v tom, že jedna kniha může patřit do víc sérií, a když ABM musí vybrat, použije hlavní (s nejnižším pořadím).

## Série

**Library > Series** vypíše všechny série s počty vlastněných, hledaných knih a knih s chybějícími soubory, jako Overview nebo Posters. Stránka série ukazuje celý katalog, včetně knih, které nemáš. Můžeš ho filtrovat na All, In Library nebo Not in Library. **Add Remaining** nebo **Select to Add** přidá chybějící knihy jako hledané a **Refresh Series** katalog znovu načte. **Monitor New Books** (All nebo None) určuje, jestli se knihy, které vyjdou později, přidají jako hledané. Viz [Sledování sérií](/cs/using/series-tracking/).

## Autoři

**Library > Authors** vypíše autory, jako Overview nebo Posters. Stránka autora ukazuje jeho katalog seskupený podle sérií, u každé série s počtem stažených a všech knih, a k tomu jeho profil kvality, žánry a hodnocení. **Refresh Catalog** ho znovu načte a **Search Author** vyhledá jeho hledané knihy. **Monitor New Books** funguje stejně jako u série a autor začíná na None.

Smazání série nebo autora se odmítne, dokud má v knihovně ještě knihy. Nejdřív odeber knihy.

## Dědění profilu kvality

Profil kvality knihy se bere v tomhle pořadí: z jejího vlastního přepsání, z její hlavní série, z jejího hlavního autora a nakonec z výchozího profilu. Viz [Profily](/cs/settings/profiles/).

## Dialog úprav

Dialog úprav u knihy mění vlastní nastavení ABM pro ni, ne její metadata:

- **Monitored**
- **Quality Profile** (No Change, když upravuješ víc knih)
- **Path** pro jednu knihu (s tlačítkem, které ji znovu spočítá), nebo **Root Folder** pro výběr
- **Tags**
- **Write to Directories**: cover.jpg, desc.txt, reader.txt a OPF (u zaškrtávacího políčka stojí "metadata.opf"; soubor se jmenuje podle prvního zvukového souboru knihy, třeba `Dune.opf`, nebo `title.opf`, když žádný zvuk není)
- **Write to Audio Files**: zapíše tagy s metadaty

Stejný dialog se otevře i pro série a autory a platí pro každou jejich knihu. Volby zápisu se provedou při uložení.

## Štítky

Knihy, autoři i série můžou mít štítky. Štítky řídí indexery, oznámení, seznamy pro import a profily a filtrují kalendářový feed. Viz [Štítky](/cs/settings/tags/).

## Výběr

Vyber řádky a pracuj s víc najednou: sledování, hledání, štítky, přejmenování, mazání. Na telefonu viz [Používání na telefonu](/cs/phone/).
