---
title: Logy
description: Soubory logů, úrovně, uchovávání a rotace.
---

**System > Log Files** vypisuje textové logy ABM. Kterýkoli otevřeš, abys ho přečetl, stáhl nebo smazal, nebo je smažeš všechny najednou. Logy se objevují, jak běží operace.

- Úlohy a převody si píšou vlastní log. Stránka Tasks na každý odkazuje.
- Hlavní log je `app.log`. Rotuje při startu, nejméně jednou za hodinu a při 10 MiB. Staré soubory se drží po dobu **Log File Retention** (výchozí 30 dní).
- Samostatný bezpečnostní log má jeden řádek na každý pokus o přihlášení, pro fail2ban a podobné nástroje.
- Úrovně se nastavují v **Settings > General > Logging**.

## Jak číst problém

Začni tlačítkem logu u neúspěšné úlohy. Ukáže operaci od jejího úvodního řádku po závěrečný blok. Tajné údaje jsou z textu odstraněné, ale než log vložíš někam veřejně, zkontroluj ho.

## Na co si dát pozor

- SQL Logging a úroveň Debug jsou hodně ukecané. Až skončíš, vypni je.
- Po smazání logu zůstanou záznamy aktivit, které na něj odkazují. Ukážou "Log no longer kept".
