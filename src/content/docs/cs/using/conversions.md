---
title: Převody
description: Převod, sloučení, rozdělení a přidání kapitol ke zvukovým souborům, ve frontě, kterou můžeš pozastavit.
---

**Library > Conversions** spouští nad tvou knihovnou úlohy ffmpeg. Jsou čtyři druhy:

| Úloha | Co dělá |
|---|---|
| Convert Format | Překóduje do M4B, MP3, M4A, FLAC nebo Opus |
| Merge Parts | Spojí víc souborů do jednoho, s kapitolami |
| Split Chapters | Rozdělí jeden soubor na soubor pro každou kapitolu |
| Ensure Chapters | Přidá nebo opraví značky kapitol bez překódování |

Výchozí hodnoty pro každou úlohu se berou z [nastavení převodů](/cs/settings/conversions/). Každá úloha je může přepsat.

## Fronta

Úlohy čekají ve frontě a najednou jich běží až **Concurrent Conversions** (výchozí 2). Hotové úlohy se přesunou do History, kterou můžeš vymazat.

Výstup se zapisuje do soukromé pracovní složky a do knihovny se umístí, až když je hotový. Každý soubor přijde pod dočasným názvem a pak se přejmenuje na místo, takže se nikdy neobjeví napůl zapsaná kniha. Kontrola volného místa proběhne před startem úlohy a znovu před umístěním. Zdrojové soubory se nikdy nepřepisují.

Převod souboru do formátu, ve kterém už je, se odmítne, protože by přepsal originál.

## Po převodu

ABM obnoví záznamy souborů knihy, velikost a kvalitu, takže převedená kniha ukazuje svou novou kvalitu. Když je zapnuté **Delete Original**, staré soubory jdou do koše převodů, pokud je zapnutý.

Pokud umístění výsledku selže (třeba proto, že je složka knihovny plná), úloha selže a hotový výstup zůstane v pracovní složce. Chyba tu složku pojmenuje. **Retry** spustí úlohu znovu od začátku a ponechaný výstup zahodí, takže se nejdřív zeptá. **Clear history** nechá úlohy, které pořád drží neumístěný výstup.

## Pozastavení a pokračování

Jsou dva druhy pozastavení a ani jedno nic neruší:

- **Pause** u jedné běžící úlohy uspí její procesy ffmpeg tam, kde jsou. Resume pokračuje ze stejného místa.
- **Pause queue** (nahoře ve frontě, nebo na telefonu v horní liště) zastaví spouštění nových úloh a uspí všechny běžící.

Úloha, kterou jsi pozastavil sám, zůstane pozastavená, i když fronta pokračuje, a to i přes restart. Úloha, která běžela, když se ABM zastavil, se vrátí jako pozastavená a sama se nespustí. Resume pokračuje od poslední dokončené části u slučování, dělení a převodů více souborů. Převod jednoho souboru začne ten soubor znovu.

Šestihodinový limit běhu počítá jen čas, kdy úloha nebyla pozastavená. Pokud se při startu nedá přečíst uložený stav fronty, fronta začne pozastavená a řekne to. Stiskni Resume queue a stav se přepíše.

Pokud znáš Sonarr: v arrech nic takového není. Ber to jako malou frontu enkodéru, která náhodou bydlí uvnitř manageru.

## Na co si dát pozor

- Concurrent Conversions krát Threads Per Job by nemělo překročit počet jader tvého CPU. S Auto ABM rozdělí zbylá jádra mezi úlohy běžící zároveň za tebe.
- Převedený soubor má novou velikost a čas změny, takže ho Audiobookshelf znovu naskenuje.
- Převod souboru, který je hardlinkem na seedovaný torrent, vytvoří nový soubor. Seedovaná kopie si nechá staré bajty.
