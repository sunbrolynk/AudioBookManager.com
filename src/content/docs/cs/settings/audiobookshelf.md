---
title: Připojení k Audiobookshelf
description: Připoj ABM ke svému serveru Audiobookshelf.
---

Audiobookshelf (ABS) je server, na kterém posloucháš. Připoj ABM v **Settings > Audiobookshelf**, na počítači i na telefonu. Zadáš adresu serveru a klíč API vytvořený pro jednoho uživatele ABS.

## Připojení

- **Enable:** Dovolí ABM používat server. Když ukládáš se zapnutou volbou, ABM nejdřív server zkontroluje a uložení odmítne, pokud selže kontrola na úrovni chyby. Stránka ukáže důvody. Připojení uložené jako vypnuté se nekontroluje.
- **Server address:** Kde odpovídá tvůj server ABS, například `http://192.168.1.20:13378`. Pokud ABS běží na stejném stroji jako ABM, použij adresu LAN toho stroje nebo název či IP kontejneru, když oba běží v Dockeru.
- **API key:** Klíč API od uživatele admin v ABS.
- **Verify TLS certificate:** Ve výchozím stavu zapnuto. Pokud tvůj server používá certifikát od vlastní autority, zadej v **CA bundle path** cestu k jeho balíčku CA místo vypnutí ověřování. Nech cestu prázdnou, aby se použily certifikáty systému.
- **Test:** Spustí kontroly nad tím, co je na obrazovce, bez ukládání čehokoli.
- **Disconnect:** Požádá o potvrzení a pak odstraní uloženou adresu a klíč.

## Jak ABM dosáhne na ABS

ABM se k ABS vždy připojuje přímo. Nikdy nejde přes VPN nebo proxy, které sis zvolil v [Network](/settings/network/). Adresa se před uložením kontroluje a nebezpečná se odmítne. Odmítne se adresa směřující zpět na stroj, na kterém ABM běží, adresa link-local a adresa cloudových metadat, stejně jako název, který se na některou z nich přeloží. Tvoje vlastní adresy LAN jsou v pořádku, proto ABS na stejném stroji potřebuje adresu LAN stroje nebo název či IP jeho kontejneru.

## Klíč API

Klíč se ukládá zašifrovaný a už se nikdy nezobrazí. Při ukládání nebo testu nech pole prázdné, aby se zachoval uložený klíč. Uložený klíč se posílá jen na adresu, pro kterou byl uložen, takže když změníš adresu, Verify TLS nebo balíček CA, zadej klíč znovu. Pokud ABM uložený klíč už nepřečte (šifrovací klíč se ztratil nebo změnil), stránka ti řekne, ať ho zadáš znovu, i když je připojení vypnuté.

## Co se kontroluje

**Verze.** ABM potřebuje ABS 2.37.0 nebo novější a je testovaný na 2.37.2. Starší server, nebo takový, který nehlásí verzi, které ABM rozumí, selže s chybou. Novější dá varování, protože ABM na něm nebyl testován.

**Účet.** Klíč API patří uživateli ABS a ABM kontroluje tohoto uživatele.

- **Chyba, dokud se neopraví:** uživatel musí být admin nebo root a mít oprávnění Update a přístup ke všem knihovnám, všem štítkům a explicitnímu obsahu.
- **Varování, uloží se i tak:** Upload je vypnutý (ABM nemůže vlastnit obálky), nebo Delete je vypnutý (kniha, kterou smažeš v ABM, zůstane v ABS, dokud to nezapneš).

## Stav

Sekce Status ukazuje výsledek poslední kontroly (Not connected, OK, Warning nebo Error), verzi serveru, uživatele, kterému klíč patří, kdy ABM naposledy kontroloval, a samotné kontroly. Neúspěšná kontrola ukáže svůj důvod a úspěšné se počítají.

[System > Status](/system/status/) má také řádek Audiobookshelf, když je připojení zapnuté. Obnovuje se při uložení a pravidelnou kontrolou stavu, která běží každých 6 hodin, takže to není živé měření při každém otevření stránky. Uložený klíč, který ABM už nepřečte, se ukáže jako chyba, dokud ho nezadáš znovu. Dosud nezkontrolované připojení se ukáže jako varování. Vypnuté připojení tam mlčí.

## Co ABM odstraňuje

ABM v ABS odstraňuje jen záznam položky. Soubory nikdy trvale nemaže.
