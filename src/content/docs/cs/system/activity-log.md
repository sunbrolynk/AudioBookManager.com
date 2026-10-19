---
title: Protokol aktivit a události
description: Záznam toho, co se stalo, a čím se liší od logů.
---

ABM vede tři druhy záznamů.

| Kde | Co to je |
|---|---|
| **System > Events** a **System > Activity Log** | Protokol aktivit: seznam toho, co se stalo, uložený v databázi. Events je pohled filtrovaný podle závažnosti. Activity Log (s nadpisem Activity History) filtruje podle kategorie, prohledává text zprávy a ukazuje stav před a po |
| **System > Log Files** | Textové logy se všemi podrobnostmi. Viz [Logy](/cs/system/logs/) |
| **Activity > History** | Jen historie stahování. Viz [Aktivita](/cs/using/activity/) |

## Co se zaznamenává

Dokončené úlohy na pozadí (každá jedním souhrnným řádkem), ruční změny klientů, indexerů, profilů, štítků, oznámení, kořenových složek a podobně, stažení (kdo je spustil), převody, neúspěšná stahování z Audible, zálohy, přihlášení a neúspěšná přihlášení a krok při startu, který selhal.

Kategorie: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security a System.

## Soukromí

Záznamy nikdy neobsahují URL, hostitele, uživatelská jména, hesla, klíče, tokeny ani surový text chyby od klienta nebo služby. Objekty se jmenují tak, jak jsi je pojmenoval. Uložení nastavení vypíše, která nastavení se změnila, ne jejich hodnoty. U přihlášení se ukládá jen IP adresa. Neúspěšná přihlášení z jedné adresy během 15 minut se sloučí do jednoho řádku s počtem pokusů.

## Schválně potichu

Plánované spuštění, které nemělo co dělat, nezapíše nic. Opakování stejného selhání nezapíše nic, ale zotavení ano. Ruční spuštění se zaznamená vždycky.

## Uchovávání

**Activity Log Retention** v General ve výchozím stavu maže záznamy po 90 dnech. 0 je uchová. Logy mají vlastní dobu uchovávání (30 dní), takže odkaz ze záznamu na log může log přežít.

## Zobrazení logu (View log)

:::caution[Přijde v příští verzi]
Odkazy View log ze záznamů zatím nejsou v žádné vydané verzi.
:::

Záznamy odkazují na log, ze kterého pocházejí, a otevřou ho na příslušném řádku. Pokud log už neexistuje, záznam ukáže "Log no longer kept".
