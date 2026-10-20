---
title: Tvoje metadata, tvoje kontrola
description: Co obnova změní, co máš pod kontrolou a jaké soubory a tagy ABM zapisuje pro tvůj přehrávač.
---

ABM si vede záznam metadat tvé knihovny ve vlastní databázi a zapisuje je zpátky tam, kde je tvůj přehrávač může použít. Tahle stránka vysvětluje, co máš pod kontrolou ty a na co obnova sáhne.

## Co obnova změní

Obnova (u knihy **Refresh & Scan**, obnova autora, obnova série) se znovu zeptá zdroje metadat a použije, co přijde zpátky. Pole, která přepíše, když má zdroj hodnotu: název, podtitul, rok a datum vydání, hodnocení, délka, jazyk, vydavatel, popis, autoři, interpreti, žánry a obálka.

Pole, které zdroj vrátí prázdné, zůstane, jak je.

## Co máš pod kontrolou

- **Obálku, kterou sis vybral.** Je zamčená. Viz [Zámek obálky](/cs/metadata/cover-lock/).
- **Štítky, automatické štítky, sledování, volby profilu kvality a samotné soubory.** Obnova na ně nesahá.
- **Knihu, jejíž soubory nejdou přečíst.** Tu nechá úplně být a stránka Tasks ukáže proč.

Údaje o knize, jako název, autoři a popis, pocházejí ze zdroje. ABM je ručně upravovat nenabízí a ani to nemám v plánu. Pod kontrolou máš, jak se uchovávají a kam se zapisují.

## Dialog úprav

Dialog úprav mění sledování, profil kvality, cestu a štítky a ve stejném kroku ti dovolí zapsat doprovodné soubory a audio tagy, pro jednu knihu nebo celý výběr sérií a autorů. Viz [Knihovna](/cs/using/library/#dialog-úprav).

## Doprovodné soubory, které čte tvůj přehrávač

ABM zapisuje `cover.jpg`, soubor `.opf`, `desc.txt` a `reader.txt` vedle zvuku. Audiobookshelf čte OPF, obálku a textové soubory, takže přehrávač ukazuje to, co sis vybral v ABM. Viz [Sidecar soubory](/cs/using/sidecars/).

## Tagy zapsané do zvuku

ABM umí zapsat název, umělce, umělce alba, album, žánr, rok, komentář, interpreta a vloženou obálku přímo do zvukových souborů, takže data cestují se souborem. Ve výchozím stavu je to vypnuté. Pole vybereš v **Settings > Metadata**. Viz [Nastavení metadat](/cs/settings/metadata/).

## Kapitoly

Porovnávání kapitol vložených ve tvých souborech s kapitolami vydané edice a zapisování vydaných kapitol do souborů je plánované na pozdější verzi. Viz [Kapitoly](/cs/using/chapters/).

## Série a pořadí

Kniha nese svou sérii a pořadí. ABM sleduje série jako katalogy, takže umí ukázat, které knihy máš, a přidat ty, které ti chybí. Viz [Sledování sérií](/cs/using/series-tracking/).

## Štítky a automatické štítky

Štítky jsou tvoje. Automatické štítky je přidávají podle pravidel (žánr, interpret, hodnocení, délka a další) a umí je odebrat, když kniha přestane podmínkám odpovídat. Štítky pak řídí profily, oznámení, indexery, seznamy pro import a kalendářový feed. Viz [Štítky](/cs/settings/tags/).

## Rostoucí lokální záznam

Všechno, co se ABM o knize dozví, zůstává ve vlastní databázi SQLite v `/config`, včetně knih, které později odebereš. Zazálohuj tuhle složku a máš zazálohovaný i záznam. Jakmile je kniha uvnitř, metadata nezávisí na tom, jestli je zdroj dostupný.

:::caution[Přijde v pozdější verzi]
Plánuje se samostatná **Local Metadata Library**: volitelná kopie všeho, co ABM kdy vyhledal, zachovaná i poté, co kniha opustí tvou knihovnu, s vlastními plánovanými zálohami a stažením v SQLite.
:::

## Plány obnovy

- Discover má vlastní plán. Viz [Nastavení Discover](/cs/settings/discover/).
- Knihovna Audible má vlastní plán synchronizace. Viz [Nastavení Audible](/cs/settings/audible/).
- Skenování knihovny se může spouštět každých N hodin a při změnách souborů. Viz [Správa médií](/cs/settings/media-management/).
- Zápis doprovodných souborů a tagů při obnově řídí **Create on Refresh** a **Write Tags on Refresh**.
