---
title: Profily
description: Profily kvality, profily zpoždění a profily vydání.
---

**Settings > Profiles** je jedna stránka se třemi sekcemi. Odpovídají na tři různé otázky o vydání.

## Profily kvality

Profil kvality je žebříček formátů, nejhorší dole, nejlepší nahoře. Příčka je formát (M4B, M4A, MP3, FLAC, OGG, Opus, AAC, WMA) buď jako jeden soubor, nebo jako víc souborů. Příčky se dají seskupit, aby měly stejnou váhu, a jednotlivou příčku můžeš vypnout.

| Nastavení | Význam |
|---|---|
| Upgrades Allowed | Když je vypnuté, ABM knihu nenahradí, jakmile ji jednou má |
| Upgrade Until | Hranice. Jakmile se dosáhne téhle kvality, ABM přestane vylepšovat |
| Grab off-ladder formats | Stáhne formát, který na seznamu není, místo aby knihu přeskočil |
| Default profile | Profil, který se použije, když nesedí nic konkrétnějšího |

Jeden profil je výchozí. Kniha použije v tomhle pořadí svůj vlastní profil, profil své hlavní série, profil svého hlavního autora a nakonec výchozí. Používaný profil nejde smazat.

Nová kopie nahradí tu, kterou máš, jen když profil vylepšení povoluje, nová příčka je na žebříčku a zapnutá, kniha je pod svou hranicí a nová příčka stojí výš.

Pokud znáš Sonarr: tohle je profil kvality, kde kvality jsou zvukové formáty a rozložení souborů místo rozlišení. Vlastní formáty tu nejsou. Podobnou oblast pokrývají [profily vydání](#profily-vydání).

## Profily zpoždění

Profil zpoždění vydání chvíli podrží, než ho stáhne, aby se mělo čas objevit lepší vydání.

| Nastavení | Význam |
|---|---|
| Enable Usenet / Enable Torrent | Povolí stahování přes daný protokol |
| Usenet Delay / Torrent Delay | Kolik minut počkat, než se stáhne vydání daného protokolu |
| Preferred Protocol | Který protokol upřednostnit, když shodu najdou oba |
| Bypass if Highest Quality | Přeskočí čekání, když vydání už splňuje hranici profilu |
| Tags | Profil platí jen pro položky s odpovídajícím štítkem |

Profily zpoždění se zobrazují jako tabulka, stejně jako v Sonarru.

## Profily vydání

Profil vydání přidává pravidla nad rámec kvality.

| Pole | Význam |
|---|---|
| Enable Profile | Zapnuto, nebo vypnuto |
| Must Contain | Vydání musí obsahovat aspoň jeden výraz (bez ohledu na velikost písmen) |
| Must Not Contain | Vydání s kterýmkoli z těchto výrazů se odmítne |
| Preferred | Výrazy, které vydání přidají nebo uberou body. Napiš `/regex/`, pokud chceš regulární výraz |
| Narration language | Omezí na jeden jazyk |
| Indexer | Platí pro jeden indexer, nebo pro kterýkoli |
| Tags | Platí jen pro položky s odpovídajícím štítkem |

Profily vydání se zobrazují jako tabulka.

## Na co si dát pozor

- Profily nikdy nemažou soubory. Rozhodují, co stáhnout a co se počítá jako vylepšení.
- Štítky na profilu zpoždění nebo vydání ho omezí na knihy, které mají aspoň jeden z těch štítků.
