---
title: Přesun knihovny do ABM
description: Jak bezpečně dostat stávající sbírku do ABM.
---

## Než začneš

1. Zazálohuj sbírku. Library Import ve výchozím stavu kopíruje, ale počítej s chybami.
2. Nastav kořenovou složku a profil kvality a ověř, že je zdroj metadat dostupný.
3. Rozhodni se mezi kopírováním, přesunem a hardlinkem. Kopírování je nejbezpečnější. Hardlink ušetří místo, pokud je knihovna na stejném souborovém systému jako zdroj. Viz [Správa médií](/cs/settings/media-management/).

## Postup

1. **Library > Library Import**, naskenuj složku.
2. Projdi seznam. Shody ukazují procento. Řádky **Needs attention** a **Unmatched** oprav přes **Find a match**, nebo spoj řádky, které jsou jedna kniha rozdělená do více složek.
3. Obálku a další soubory u jednotlivých složek kontroluj, jen pokud chceš přepsat výchozí nastavení.
4. Vyber řádky a přidej je. Když přijmeš výchozí nastavení, zůstanou to dvě kliknutí.
5. Sleduj úlohu. Souhrn ti řekne, kolik souborů se zkopírovalo místo hardlinku a co selhalo.

## Pokud už máš sbírku tam, kde ji chceš mít

Když složku přidáš jako kořenovou, samo o sobě to žádné knihy nepřidá. Skenování v ABM kontroluje jen knihy, o kterých už ví, takže to, co v ní je, nepobere. Knihy stejně musí přijít přes Library Import: počet **Unmapped Folders** u kořenové složky v **Settings > Media Management** otevře Library Import pro tuhle složku.

Import dá každou knihu do vlastního rozložení ABM Autor/Série/Kniha pod výchozí kořenovou složkou. Zvol hardlink, pokud chceš nechat originály netknuté a nezabírat víc místa.

## Na co si dát pozor

- Kniha, která už v knihovně je, se tak i zobrazí. Duplikát odmítni odpovědí, která ponechá knihovnu, místo abys ji importoval dvakrát.
- Odmítnutí složky bez zvuku odstraní jen to, co patří danému řádku, a pokud je zapnutý koš, putuje to do něj.
- ASIN nalezený v popisu je jen nápověda, ne shoda, pokud nesedí i název.
- Po importu obnov metadata, abys natáhl aktuální data, a zapni zápis doprovodných souborů, pokud chceš, aby Audiobookshelf viděl volby ABM. Viz [Doprovodné soubory](/cs/using/sidecars/).
