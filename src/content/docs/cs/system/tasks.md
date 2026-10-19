---
title: Úlohy
description: Práce na pozadí, plány a logy.
---

**System > Tasks** vypisuje všechno, co ABM dělá na pozadí: skenování knihovny, obnovy, importy, hledání, stahování, synchronizace, zálohy. Každý řádek ukazuje stav (čeká, běží, dokončeno, selhalo), průběh, výsledek a tlačítko logu.

- Úloha, která skončila se záznamy v seznamu chyb, se ukáže jako **Partial**. Rozbal ji a uvidíš každou přeskočenou položku i s důvodem.
- Úloha, na kterou čeká další pokus, zůstává ve stavu čekání, dokud se pokusy nevyčerpají. Ukazuje se číslo pokusu.
- **Clear completed tasks older than 24 hours** seznam uklidí. Staré úlohy se mažou i automaticky (výchozí 30 dní).
- Plánovaná spuštění, která nic neudělala, se objeví tady, ale ne v [Activity Log](/cs/system/activity-log/).

## Na co si dát pozor

- Převody mají vlastní frontu. Viz [Převody](/cs/using/conversions/).
- Úklidy stahování (opakování čekajících stažení a kontrola dokončených stahování) se řadí do fronty jen tehdy, když je zapnutý aspoň jeden klient pro stahování, aby se stránka neplnila prázdnými běhy.
