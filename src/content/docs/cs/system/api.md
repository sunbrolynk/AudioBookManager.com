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
- `POST /api/tasks` zařadí do fronty jen `backup_export`. Jakýkoli jiný typ úlohy dostane HTTP 403 a nastavení, která k `backup_export` nesedí, dostanou HTTP 422. Ruční importy jdou přes endpointy `/api/manual-import/` a skenování knihovny přes `POST /api/library/scan`.
- Library Import si shody z Libexu pro každý řádek drží sám na serveru. Uložení relace (`PUT /api/library-import/session/{id}` nebo `PATCH /api/library-import/session/{id}/choices`) s řádkem, který posílá `libex_matches`, se odmítne s HTTP 422, které pole pojmenuje, takže ho z řádků, které ukládáš zpět, vynech. `POST /api/library-import/retry-match` bere volitelné `session_id` a nalezené shody uloží do té relace.
- `GET /api/metadata/search` vrátí jednu stránku s nejvýš 50 výsledky. `page` (0 až 9) vybere stránku a odpověď obsahuje `page` a `has_more`, které říká, jestli na další stránce může být víc. Hledání podle ASIN má jen stránku 0. `search_type=phrase` vrátí nejlepší shody z Libexu pro dotaz, taky jen na stránce 0 a s `has_more` false. Stránka může být kratší a mít přesto `has_more` true, protože Libex vynechává knihy, které nedokáže přečíst, takže načítej další stránky, dokud `has_more` není false. `limit` (1 až 50) stránku zkrátí.
- `POST /api/manual-import/execute` a `/execute-to-book` kontrolují každý řádek souboru podle pevného schématu. Neznámý klíč, relativní `source_path` nebo prázdný seznam `files` se odmítne s HTTP 422. Každý zdroj musí být zvukový soubor, který neleží v systémové složce, přímo ve složce nejvyšší úrovně jako `/tmp` nebo `/mnt`, ani v žádné z vlastních složek ABM (konfigurace, databáze, zálohy, logy, obálky, koš, dočasná složka a složky s certifikátem a klíčem SSL), přičemž se sledují symbolické odkazy. Odmítnutý soubor dostane HTTP 400 se svou cestou (`Can't import <path>: the file <reason>.`) a nic se nezařadí do fronty.
- `POST /api/manual-import/execute` a `/execute-to-book` pojmenují každý soubor podle [Book Naming](/cs/settings/media-management/#book-naming) až při spuštění importu a ignorují `destination_filename` uvedené v řádku souboru.
- `POST /api/manual-import/check-conflicts` bere `book_id` a `source_paths`, které chceš importovat, a v `destination_filenames` vrátí název, který každý soubor dostane, podle zdrojové cesty. `clashed` uvádí zdrojové soubory, které dostanou název z formátu, protože by se jejich vlastní název střetl s jiným. `audio_conflicts` a `own_conflicts` uvádějí názvy, které už ve složce knihy jsou, bez ohledu na velikost písmen.

## Výpadky metadat

Požadavek, který potřebuje zdroj metadat a nedostane odpověď, selže s `detail`, který pojmenuje zdroj a důvod, nikdy s prázdným výsledkem. Hledání, na které čekáš, se po zhruba 10 sekundách vzdá, když Libex omezuje rychlost.

Pokud znáš Sonarr: API není kompatibilní s v3. Prowlarr umí do ABM synchronizovat indexery přes své připojení Prowlarr.
