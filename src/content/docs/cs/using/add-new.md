---
title: Přidání nové knihy
description: Najdi knihu a přidej ji jako hledanou.
---

**Library > Add New** hledá knihy v Libexu a přidá ty, které vybereš. Hledání páruje název, autora, sérii nebo ASIN.

## Co přidání udělá

Přidaná kniha se stane **Wanted** ve zvolené kořenové složce a profilu kvality a ABM ji začne hledat podle nastavení sledování. Že kniha už v knihovně je, se pozná jen podle ASIN. Jiná edice stejného titulu má jiný ASIN.

## Hledání autorů a sérií

Vyhledávání má režimy Title, Author, Series, Books by author, Books in series a ASIN. Author a Series hledají samotné autory a série, Books by author a Books in series hledají knihy. Přidání autora nebo série vytvoří jeho katalog a přidá knihy jako hledané podle **Monitor**:

| Monitor | Co přidá |
|---|---|
| All | Všechny knihy, včetně těch, které ještě nevyšly |
| Future | Jen knihy, které vyjdou od teď |
| Missing (výchozí) | Knihy, které nemáš |
| None | Jen katalog |

Vybíráš taky kořenovou složku, profil kvality a jestli se mají přidávat i knihy, které se objeví později. U série je to ve výchozím stavu zapnuté a u autora vypnuté. Autor nebo série, které už v knihovně máš, ukazují "In Library" s akcí **Add missing books**.

Přidání běží jako úloha na pozadí s oznámením o průběhu.

## Když hledání nic nevrátí

Hledání, na které zdroj metadat neodpoví, skončí chybou, ne prázdným seznamem. Viz [Řešení problémů](/cs/troubleshooting/#zdroj-metadat-není-dostupný).
