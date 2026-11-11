---
title: Připojení k Audiobookshelf
description: Připoj ABM ke svému serveru Audiobookshelf.
---

:::caution[Přijde v pozdějším vydání]
Stránka s nastavením pro tohle zatím není v žádné vydané verzi. Připojení jde už teď uložit, otestovat a odebrat přes API, ale nic jiného v ABM ho zatím nepoužívá.
:::

Audiobookshelf (ABS) je server, ze kterého posloucháš. ABM se k němu připojuje přes adresu serveru a klíč API vytvořený pro jednoho uživatele ABS.

## Verze

ABM potřebuje ABS 2.37.0 nebo novější a je testovaný na 2.37.2. Starší server se odmítne. U novějšího se zobrazí varování, protože na něm ABM netestoval.

## Účet

Klíč API patří uživateli ABS. ABM tohoto uživatele ověří při uložení i při testu.

- **Odmítnuto, dokud to neopravíš:** uživatel musí být admin nebo root a mít oprávnění Update a přístup ke všem knihovnám, všem štítkům a explicitnímu obsahu.
- **Varování, ale uloží se to:** Upload je vypnutý (ABM nemůže spravovat obálky) nebo Delete je vypnutý (kniha, kterou v ABM smažeš, zůstane v ABS, dokud to nezapneš).

## Jak ABM dosáhne na ABS

ABM se k ABS připojuje vždy přímo. Nikdy nejde přes VPN ani proxy, které sis vybral v [Network](/settings/network/). Adresa serveru se před uložením kontroluje a nebezpečná se odmítne.

## Klíč API

Klíč se ukládá zašifrovaný a už se nikdy nezobrazí. Při uložení nebo testu ho nech prázdný, aby zůstal ten uložený. Uložený klíč se posílá jen na adresu, pro kterou byl uložen, takže když změníš adresu, nastavení TLS nebo balíček CA, zadej klíč znovu.

## Ověřovat TLS

Certifikáty se ověřují ve výchozím stavu. Pokud tvůj server používá certifikát od vlastní autority, zadej cestu k jejímu balíčku CA, místo abys ověřování vypínal.

## Test a Disconnect

**Test** zkontroluje server bez uložení: verzi, oprávnění uživatele a jeho knihovny. Uložení zapnutého připojení nejdřív provede stejné kontroly a odmítne se, pokud některá chybová kontrola selže. Připojení uložené jako vypnuté se nekontroluje. **Disconnect** odebere uložené připojení i jeho klíč.

## System Status

Když je připojení zapnuté, [System > Status](/system/status/) má řádek AudioBookShelf s výsledkem poslední kontroly. Obnovuje se při uložení a pravidelnou kontrolou stavu, která běží každých 6 hodin, takže to není živé dotazování při každém otevření stránky.

## Co ABM odstraňuje

ABM v ABS odstraňuje jen záznam položky. Soubory nikdy nesmaže natrvalo.
