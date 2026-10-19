---
title: Nastavení Audible
description: Účty, plán synchronizace, stahování a diagnostika.
---

V **Settings > Audible** se připojují účty a ladí se synchronizace a stahování. Jak celá funkce funguje, popisuje stránka [Audible](/cs/audible/).

## Účty

K připojení účtu potřebuješ **Marketplace**, **Display Name** a **Redirect URL**, kterou Amazon vrátí po přihlášení. Každý účet má svou vlastní knihovnu. Když se účet potřebuje znovu přihlásit, přihlas se na stejném účtu, místo abys ho mazal. Smazáním přijdeš o jeho knihovnu a jeho zařízení zmizí z Audible.

## Plán

| Nastavení | Co dělá |
|---|---|
| Auto Sync | Synchronizuje knihovnu podle plánu |
| Sync on Account Add | Synchronizuje hned po připojení účtu |
| Frequency | Denně, týdně nebo měsíčně. Týdně přidá Day of Week. Měsíčně přidá Day of Month (1-28). |
| Time | Hodina a minuta |
| Use CRON Expression | Vlastní výraz cron nahradí volby výše |

## Nastavení stahování (Download Settings)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Auto Add to Library | zapnuto | Když stahuješ titul z Audible, který v ABM ještě není, ABM ho nejdřív přidá do knihovny. Vypnuté, takové stažení se odmítne. V příští verzi se z toho stane [Mirror Audible library to ABM](/cs/audible/#zrcadlení-knihovny-audible-do-abm-mirror-audible-library-to-abm) |
| Concurrent Downloads | 2 | 1 až 5. Víc je rychlejší a může narazit na limity Audible. |
| Preferred Quality | High Quality | High, Normal nebo Low |
| Delete Encrypted Files | zapnuto | Po dešifrování do M4B odstraní šifrovaný soubor AAXC |
| Temp Download Path | prázdné | Prázdné použije systémovou dočasnou složku |

Neúspěšná stahování se samy několikrát zopakují s rostoucí prodlevou a výpadek, který trvá déle, vrátí úlohu do fronty až na šest hodin. Odepřená licence, nevlastněná kniha nebo selhání dešifrování selže jen jednou.

## Diagnostika připojení (Connection Diagnostics)

Vyber účet a spusť diagnostiku. Otestuje FFmpeg, přihlašovací údaje, připojení k API a schopnost stahovat a ukáže tvou odchozí IP tak, jak ji vidí Audible.
