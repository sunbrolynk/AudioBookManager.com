---
title: API
description: Ověřování, stránky dokumentace a limity.
---

ABM má REST API pod `/api`. Interaktivní reference je na `/api/docs` (Swagger) a `/api/redoc` a schéma na `/api/openapi.json`. Nastav `DOCS_ENABLED=false`, pokud chceš všechny tři odstranit. Stránky dokumentace načítají soubory z CDN, takže se celé vykreslí jen s přístupem k internetu.

## Ověřování

- **Klíč API**: pošli `X-Api-Key: <key>` nebo `?apikey=<key>`. Najdeš ho nebo vygeneruješ nový v **Settings > General > Security**. Viz [Zabezpečení](/cs/settings/security/).
- **Bearer token** z přihlášení.
- Přihlašovací údaj, který předložíš, má přednost před výjimkou, takže požadavek s klíčem z LAN se počítá jako požadavek na API.

## Konvence

- Chyby se vracejí jako `{"detail": ...}`.
- Tajné údaje se nikdy nevracejí. Odpověď řekne, jestli je nějaký nastavený.
- Požadavek z prohlížeče, který mění stav, potřebuje odpovídající původ. Skripty s klíčem jsou výjimkou.
- Těla požadavků jsou omezená na 10 MiB (`MAX_REQUEST_BODY_BYTES`). Obnova zálohy a nahrání obálky mají vyšší limity. Nad limitem přijde HTTP 413.
- Chyby validace nikdy nevracejí zpátky to, co jsi poslal.

## Výpadky metadat

Vyhledávání knih, které nedostane odpověď od Libexu, vrátí 502 s "Libex search failed". Vyhledávání autorů nebo sérií vrátí 503 s "Libex could not be reached; try again shortly". Některé vyhledávací cesty při výpadku pořád vracejí prázdný výsledek.

Pokud znáš Sonarr: API není kompatibilní s v3. Prowlarr umí do ABM synchronizovat indexery přes své připojení Prowlarr.
