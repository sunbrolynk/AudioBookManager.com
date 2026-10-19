---
title: Zabezpečení a přihlášení
description: Režimy ověřování, klíče API, důvěryhodné proxy, lokální sítě a zásady zabezpečení obsahu.
---

Sekce **Security** v **Settings > General** určuje, kdo může ABM používat a jak.

## Ověřování

| Nastavení | Výchozí | Možnosti |
|---|---|---|
| Authentication | Forms (Login Page) | None, Basic (Browser Popup), Forms (Login Page), External (Reverse Proxy) |
| Authentication Required | Disabled for Local Addresses | Enabled (Always), Disabled for Local Addresses, Disabled (Not Recommended) |
| Username, New Password, Confirm New Password | | Když heslo necháš prázdné, zůstane to současné |
| Certificate Validation | Enabled | Enabled, Disabled for Local Addresses, Disabled (Not Recommended) |
| Local Networks | prázdné | Další rozsahy CIDR, jejichž klienti se nemusí přihlašovat |
| CORS Allowed Domains | prázdné | Další původy, které smí volat API z prohlížeče. Vyžaduje restart |

Dva režimy **Authentication Required**, které budeš používat:

- **Enabled**: přihlašuje se každý, včetně tvé LAN.
- **Disabled for Local Addresses** (uložené jako `local_disabled`): požadavek z lokální adresy se přihlašovat nemusí. Za lokální se počítá loopback, privátní rozsahy, link-local a IPv6 unique-local. **Local Networks** přidává další a nikdy je nenahrazuje.

Na čerstvé instalaci se požadavky odmítají, dokud neskončí úvodní nastavení.

## Reverzní proxy

Za proxy nastav `TRUSTED_PROXIES`, aby ABM věděl, kterým přeposílacím hlavičkám věřit. Požadavek, který nese přeposílací hlavičky z adresy mimo tenhle seznam, nikdy není lokální a musí se přihlásit. Je to tak schválně. Viz [Reverzní proxy](/cs/guides/reverse-proxy/).

Proxy, která neposílá žádné přeposílací hlavičky, vypadá jako lokální klient. Jestli takovou máš, nastav Authentication Required na Enabled.

## Potvrzení heslem

Některé změny se znovu ptají na tvoje současné heslo: uložení nastavení Security, zobrazení nebo vygenerování nového klíče API a uložení nebo smazání konfigurace WireGuard. Špatné heslo se v bezpečnostním logu počítá jako neúspěšné přihlášení. Když ještě žádné heslo nastavené není, nic se neptá.

## Klíč API

Klíč se nezobrazí, dokud nepotvrdíš heslo. **Regenerate API Key** vytvoří nový, jednou ho ukáže a starý klíč okamžitě zneplatní. Klíč se nedá napsat ručně. Pokud uložený klíč nejde dešifrovat (změnil se tajný klíč aplikace), vygeneruj nový.

Posílej ho jako `X-Api-Key` nebo jako parametr `apikey`. Klíč z adresy v LAN se počítá jako požadavek s klíčem. Viz [API](/cs/system/api/).

## Zápisy z prohlížeče

Požadavek z prohlížeče, který něco mění, se odmítne s `cross_origin_rejected`, pokud jeho původ neodpovídá adrese, na které ABM běží, přeposlanému hostiteli důvěryhodné proxy nebo povolené doméně CORS. Požadavků s klíčem API se to netýká.

## Zásady zabezpečení obsahu

ABM posílá hlavičku Content-Security-Policy, pokud není nastavené `SECURITY_HEADERS_CSP_ENABLED=false`. Omezuje rozhraní na vlastní skripty a API ABM a obrázky na ABM nebo HTTPS. Obálky servírované přes obyčejné HTTP se zablokují a ABM se tak jako tak nedá zobrazit v iframu. Stránky s dokumentací API dostávají volnější zásady, aby se mohly načíst z CDN.

## Neúspěšná přihlášení

Žádné zamykání účtu tu není. Neúspěšné pokusy se logují, v Activity Log se seskupují podle adresy a řádek po řádku se zapisují do bezpečnostního logu pro nástroje jako fail2ban.

## Tajné údaje

Hesla a klíče, které si ABM ukládá pro indexery, klienty a připojení, se šifrují tajným klíčem aplikace. Nastav `APP_SECRET`, pokud nechceš mít klíč na disku s konfigurací. Pokud neexistuje ani jedno, ABM vygeneruje `/config/app_secret`. Hesla k proxy a k cílům exportu se ukládají jako prostý text.
