---
title: Kapitoly
description: Porovnej kapitoly vložené v knize s Libexem a oprav je.
---

:::caution[Přijde v příští verzi]
Nic na téhle stránce kromě výchozích hodnot převodů zatím není v žádné vydané verzi.
:::

Stránka s detailem knihy ukazuje kapitoly z Libexu vedle kapitol, které jsou skutečně vložené v tvých souborech. Libex je měřítko. Pohled odpovídá na otázku, jestli tvoje soubory obsahují to, co by podle Libexu obsahovat měly.

## Jak číst porovnání

Každá kapitola z Libexu dostane odznak, ikonu a slovo:

- **Matches**: vložená kapitola začíná do 2 sekund a název je stejný, když se nehledí na velikost písmen, diakritiku a interpunkci na začátku a konci. "Chapter 1" a "Chapter One" jsou různé názvy.
- **Differs**: název se liší, nebo podobný název poblíž existuje, ale začíná o víc než 2 sekundy jinde.
- **Missing**: nic vloženého se s ní nespáruje.
- **Extra**: vložená kapitola, ke které se nespáruje žádná kapitola z Libexu.

Knihy z více souborů se skládají za sebe na jednu časovou osu v pořadí podle názvů souborů. Kapitola, která pokračuje přes hranici souboru jako "(cont.)", se načte jako jedna kapitola. Když Libex není dostupný, uvidíš seznam vložených kapitol a řádek s důvodem. Stránka kvůli tomu nikdy nespadne.

## Špatná edice

Časy z Libexu sedí jen na edici, kterou popisují. Pokud se délka tvého zvuku liší od Libexu o víc než 15 sekund nebo 0,5 procenta, podle toho, co je víc, objeví se varování a **Update** i **Create .cue** se zablokují. Obejít se to nedá.

## Aktualizace vložených kapitol (Update)

Nahradí kapitoly v každém zvukovém souboru kapitolami z Libexu. Běží jako kapitolová úloha ve [frontě převodů](/cs/using/conversions/), bez překódování. Nabízí se jen tehdy, když porovnání řekne "differs" nebo "no embedded chapters".

- Každý soubor se přepíše do dočasného souboru, zkontroluje a pak prohodí. Kontrola vyžaduje, aby šel přečíst, nebyl kratší než originál o víc než 0,5 sekundy nebo 1 procento, měl stejný kodek a obsahoval přesně požadovaný počet kapitol. Když kontrola neprojde, originál zůstane.
- Pokud se úloha zastaví v půlce, už přepsané soubory zůstanou přepsané. Chyba řekne "N of M files already updated". Po odstranění příčiny spusť Update znovu.
- Rovnou se odmítne, když: pro knihu běží jiný převod, chybí ASIN nebo kapitoly z Libexu, jde o špatnou edici, soubor nejde přečíst, nebo není co aktualizovat.

## Vytvoření .cue (Create .cue)

Zapíše do složky knihy soubor cue s kapitolami z Libexu, pojmenovaný podle prvního zvukového souboru. Existující soubor se stejným názvem přepíše. Viz [Doprovodné soubory](/cs/using/sidecars/).

## Na co si dát pozor

- Soubory VBR MP3 bez hlavičky s délkou mají délku jen odhadnutou. Správná edice se pak může zdát o pár sekund mimo.
- Přepsaný soubor vypadá pro Audiobookshelf jako změněný a znovu se naskenuje.
- Názvy kapitol obsahující `=`, `;`, `#` nebo zpětné lomítko se můžou zapsat špatně, dokud nepřijde oprava.

## Výchozí chování kapitol při převodech

Odděleně od toho výše: **Settings > Conversions > Chapter Handling** rozhoduje, co převod udělá s kapitolami. Viz [Nastavení převodů](/cs/settings/conversions/).
