---
title: Řešení problémů
description: Řešení problémů, na které nejspíš narazíš.
---

## Soubory po přerušeném importu (.abmstage)

Import nejdřív připraví každý soubor vedle jeho konečného názvu a teprve když dorazí všechny, prohodí je. Když něco selže, ABM vrátí, co přesunul. Pokud nějakou část vrátit nedokáže, zůstane ve složce knihy jako skrytý soubor s koncovkou `.abmstage`. Může to být jediná kopie, takže ji ABM nechá a chyba ji pojmenuje.

Dokud je ve složce knihy nějaký soubor `.abmstage`, importy do té složky se zastaví s hláškou:

> Files left by an interrupted import are in the way. Recover or remove them, then retry.

Jak to zachránit:

1. Najdi soubor `.abmstage` uvedený v chybě.
2. Přesuň ho zpátky do stahování, nebo do složky knihy pod jeho skutečným názvem. Nebo ho smaž, pokud ho nepotřebuješ.
3. Zkus import znovu.

## Za reverzní proxy se musí přihlašovat všichni

Bez `TRUSTED_PROXIES` se požadavek, který nese přeposílací hlavičky, nikdy nebere jako lokální, takže se musí přihlásit. Je to tak schválně.

1. Nastav `TRUSTED_PROXIES` na adresu své proxy, třeba `172.20.0.5`. Proxy na stejném stroji potřebuje `127.0.0.1`.
2. Zařiď, aby proxy posílala `X-Forwarded-For` nebo `X-Real-IP`. nginx proxy manager, Traefik a Caddy to dělají samy od sebe.
3. Restartuj ABM.

Log aplikace řekne, o který případ jde:

- "carries reverse-proxy headers, but ... is not in TRUSTED_PROXIES": přidej proxy do `TRUSTED_PROXIES`.
- "... is in TRUSTED_PROXIES but didn't name a client address": nastav proxy, aby posílala `X-Forwarded-For` nebo `X-Real-IP`.

Opačný případ: proxy, která neposílá žádné přeposílací hlavičky, vypadá jako lokální klient, takže všechno, co přes ni jde, se přihlašovat nemusí. Nastav Authentication Required na Enabled.

## Změny z prohlížeče se odmítají

Ověř, že proxy předává původní hlavičku `Host`, nebo posílá `X-Forwarded-Host`. Viz [Konfigurace](/cs/configuration/#reverzní-proxy).

## Za proxy mizí obálky nebo stránka zlobí

Hlavička Content-Security-Policy povoluje jen obálky přes HTTPS. Podívej se do konzole prohlížeče na porušení. Servíruj obálky přes HTTPS, nebo nastav `SECURITY_HEADERS_CSP_ENABLED=false`.

## Velký požadavek vrací 413

Zvyš `MAX_REQUEST_BODY_BYTES`. Nižší limit může vynucovat i reverzní proxy a odpovědět 413 sama.

## Zdroj metadat není dostupný

Přidávání, hledání, obnovování a Discover potřebují Libex. Když ABM nedostane odpověď, vyhledávání knih selže s hlášením "Libex search failed" a vyhledávání autorů nebo sérií s hlášením "Libex could not be reached; try again shortly", místo aby ukázalo prázdný seznam. Příčiny: Libex nefunguje, nebo se k němu připojení ABM nedostane.

1. Podívej se na [stavovou stránku ABM](https://status.audiobookmanager.com) a [stavovou stránku Libexu](https://status.libexdb.com), jestli to nefunguje pro všechny.
2. Zkontroluj, že kontejner se dostane na internet a že proxy v **Settings > General > Proxy** je správně, pokud nějakou používáš.
3. Za minutu to zkus znovu.
4. Mezitím můžeš knihy pořád přidávat a importovat ručně.

Úloha na pozadí, která narazí na výpadek, selže s uvedením důvodu. Zkouší se sama znovu, nejvýš šestkrát nebo šest hodin, podle toho, co nastane dřív.

## Obnova změnila údaje o knize

Název, popis, autoři, interpreti a podobná pole pocházejí ze zdroje metadat a obnova použije to, co zdroj říká teď. ABM je ručně upravit neumí. Pod kontrolou máš obálku (dá se zamknout), které soubory se zapisují, štítky a jestli obnova zapisuje doprovodné soubory a tagy. Viz [Tvoje metadata, tvoje kontrola](/cs/metadata/control/).

## Kniha ukazuje Missing Files

Kniha se stáhla, ale její soubory nejsou tam, kde je ABM hledá. Zkontroluj připojení svazku a oprávnění a pak spusť **Refresh & Scan**. Když složka knihy nejde přečíst, skenování knihu nechá být a úloha se ukáže jako Partial i s důvodem.

## Importy se zastaví s "Files left by an interrupted import"

Viz sekci o `.abmstage` výše.

## Stahování se dokončí, ale nikdy se nenaimportuje

Přidej mapování vzdálené cesty, nebo zařiď, aby ABM i klient viděli složku na stejné cestě. Podsložka, kterou nejde přečíst, zablokuje celé stahování, dokud neopravíš její oprávnění. Viz [Klienti pro stahování](/cs/settings/download-clients/).

## Docker se nedostane ke zdroji metadat ani k indexerům

Nejdřív zkontroluj DNS a nastavení proxy. V Dockeru se ABM k Libexu a tvým indexerům dostane jen tehdy, když se kontejner dostane na internet.

## Pořád nevíš kudy kam

Zeptej se na [Discordu ABM](https://discord.gg/qeJRrM6AZ), [založ issue](https://github.com/sunbrolynk/AudioBook-Manager/issues) nebo napiš e-mail na [support@audiobookmanager.com](mailto:support@audiobookmanager.com).
