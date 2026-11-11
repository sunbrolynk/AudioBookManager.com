---
title: První nastavení
description: Průvodce nastavením u nové instalace, krok za krokem.
---

:::caution[Přijde v pozdější verzi]
Průvodce nastavením zatím není v žádné vydané verzi. Vydané verze se při první návštěvě ptají jen na přihlášení.
:::

U nové instalace otevře první návštěva průvodce nastavením místo přihlašovací stránky. Provede tě vším, co ABM potřebuje, krok za krokem. Zobrazí se jen dokud neexistuje žádný účet. Každou volbu můžeš potom změnit v **Settings**.

Nahoře běží řetěz z osmi článků. Každý článek je jeden krok a řetěz ti ukazuje, kde jsi:

- **Done**: krok je hotový.
- **Current step**: krok, který máš na obrazovce.
- **Not started**: krok, ke kterému ses ještě nedostal.
- **Later**: krok, kterým jsi prošel, aniž bys ho dokončil. Zůstává čekat a dokončit ho můžeš v **Settings**, kdykoli budeš chtít.

**Back** vrací o krok zpět. **Continue** krok uloží a jde dál. Tři kroky, Audible, Download client a Indexer, mají navíc **Skip for now**.

## 1. Účet (Account)

Vytvoří tvé přihlášení a rovnou tě přihlásí. Zvolíš uživatelské jméno a heslo o délce alespoň 8 znaků a heslo napíšeš dvakrát.

| Nastavení | Výchozí | Účinek |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms používá přihlašovací stránku. Basic (Browser Popup) používá vlastní přihlašovací okno prohlížeče |
| Authentication required | Everywhere | Everywhere vyžaduje přihlášení z každé adresy. Skip on local network pustí zařízení z tvé domácí nebo kancelářské sítě dovnitř bez přihlášení |

Jsou to stejná nastavení jako na stránce [Zabezpečení a přihlášení](/cs/settings/security/). Účet se vytvoří po stisknutí **Continue**. Jakmile existuje, tento krok ho už jen potvrzuje.

## 2. Síť (Network)

Network je hlavní vypínač. Nic, co ABM odesílá, neopustí tvůj počítač, dokud tady nezvolíš trasu, takže kroky Metadata a Audible na něm závisejí. Tento krok nejde přeskočit a **Continue** zůstává vypnuté, dokud trasa není kompletní.

| Volba | Co dáš ABM |
|---|---|
| Proxy | Typ, název hostitele a port proxy a volitelně uživatelské jméno a heslo. SOCKS4 není podporováno |
| WireGuard | Soubor `.conf` od tvého poskytovatele VPN, vložený nebo přetažený. Pokud je tunel už uložený, použije se ten |
| Own VPN container | Nic k vyplnění. Zaškrtneš políčko, že veškerý provoz ABM už odchází přes kontejner s VPN nebo proxy. ABM to nemůže ověřit |
| Direct | Nic k vyplnění. Zaškrtneš políčko, že každá služba, na kterou se ABM připojí, uvidí tvou vlastní IP adresu |

**Continue** trasu uloží a pak ukáže kontrolu **Public IP**, abys viděl, že trasa funguje, než cokoli půjde ven. **Change route** ti dovolí vybrat znovu. Jsou to stejná nastavení jako na stránce [Network](/cs/settings/network/).

## 3. Metadata

Vyber, kde ABM hledá knihy. Přichází před tvými složkami, protože první skenování složek porovnává tvé knihy právě s tímto zdrojem.

| Volba | Co znamená |
|---|---|
| Built-in | Libex běží uvnitř ABM. Žádný účet ani další služba. Používá trasu z kroku Network |
| Hosted | ABM se ptá veřejné instance Libexu na libexdb.com |
| Self-hosted | ABM se ptá tvého vlastního serveru Libex. Zadej jeho **Server URL**. **Test** ho zkontroluje bez uložení |

Je tu také políčko **Local Storage**. Uchovává trvalý, šifrovaný, místní záznam každé knihy, kterou ABM vyhledá, hledá, přidá, naimportuje nebo uvidí v Discover, a funguje se všemi třemi zdroji. Jakmile je zapnuté, lze ho vypnout jen v **Settings > Metadata**.

**Continue** uloží zdroj a zapne Local Storage, pokud jsi ho zaškrtl. Když zvolený zdroj ještě nemůže ven, například Built-in bez zvolené trasy, krok řekne proč. Viz [Výběr zdroje metadat](/cs/metadata/choosing-a-source/).

## 4. Audible (volitelné)

Přihlásí tě k účtu Audible, aby ABM mohl číst tvou knihovnu. Jde to přes trasu, kterou jsi zvolil v kroku Network. Pokud není zvolená žádná trasa nebo je na ní provoz Audible blokovaný, krok to řekne a **Back to Network** tě vrátí zpět. Samotné přihlášení je stejné jako na stránce [Audible](/cs/audible/). Jakmile jsi přihlášený, krok ukáže účet a **Continue** je k dispozici.

Můžeš zvolit **Skip for now** a Audible připojit později v **Settings > Audible**.

## 5. Kořenová složka (Root folder)

Kořenová složka je místo, kde ABM uchovává tvé knihy. Vyber složku, kde jsou tvé audioknihy, nebo kam mají přibývat nové. Měla by to být stejná složka, kterou čte tvůj přehrávač (například Audiobookshelf). Můžeš procházet složky serveru a v prohlížeči vytvořit novou. První kořenová složka, kterou přidáš, se stane výchozí. Tento krok nejde přeskočit. Další kořeny můžeš přidat později v **Settings > Media Management**.

## 6. Stahovací klient (volitelné)

Vyber jednoho z podporovaných klientů, Usenet nebo torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet nebo Blackhole. Vyplň jeho údaje, stiskni **Test** a potom **Save**. Klient se přidá přímo v kroku. Můžeš přidat další a **Refresh** načte seznam znovu. Krok se počítá jako hotový, jakmile je uložený jeden klient.

Můžeš zvolit **Skip for now** a klienta přidat později v **Settings > Download Clients**. Viz [Klienti pro stahování](/cs/settings/download-clients/).

## 7. Indexer (volitelné)

Vyber typ indexeru nebo předvolbu, vyplň ji a stiskni **Test** a **Save**, stejně jako u stahovacího klienta. Krok se počítá jako hotový, jakmile je uložený jeden indexer. Můžeš zvolit **Skip for now** a indexery přidat později v **Settings > Indexers**. Viz [Indexery](/cs/settings/indexers/).

## 8. Hotovo (Finish)

Shrnutí vypíše každý krok s tím, co se nastavilo: tvou trasu Network (a Public IP, pokud se kontrolovala), zdroj metadat, účet Audible, kořenovou složku a klienta s indexerem, které jsi přidal. Každý krok odložený na později je označený jako čekající. Pokud nic nečeká, shrnutí řekne, že svítí každý článek. **Go to Library** průvodce zavře.

Všechno, co jsi přeskočil, najdeš v **Settings**, kdykoli to budeš chtít. Dál dává smysl kvalitní profil a tvé knihy: viz [Rychlý start](/cs/getting-started/quick-start/).
