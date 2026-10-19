---
title: Stav
description: Kontroly stavu a pohled na to, co ABM zrovna dělá.
---

**System > Status** spouští kontroly stavu a vypíše všechno, co je špatně: selhávající klienty pro stahování a indexery, problémy s kořenovými složkami a problémy s odchozím připojením. Ukazuje taky využití fondu připojení k databázi. Když je všechno v pořádku, napíše "All systems healthy".

Kontroly stavu běží na pozadí i každých 6 hodin. Connect může posílat oznámení při **On Health Issue** a **On Health Restored**. Viz [Connect](/cs/settings/connect/).

Pokud znáš Sonarr: je to stejný nápad jako System > Status plus Health na jedné stránce.

## Na co si dát pozor

- Vypnutý klient pro stahování se nebere jako nezdravý.
- Účet Audible, který se musí znovu přihlásit, se objeví tady i na stránce nastavení Audible.
