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

Endpoint, který závisí na zdroji metadat, odpoví 503 (`metadata_unavailable`), 503 s `Retry-After: 30` (`metadata_declined`) nebo 502 (`metadata_rejected`) v poli `code` těla. Některé vyhledávací endpointy při výpadku pořád vracejí prázdný výsledek.

Pokud znáš Sonarr: API není kompatibilní s v3. Prowlarr umí do ABM synchronizovat indexery přes své připojení Prowlarr.
