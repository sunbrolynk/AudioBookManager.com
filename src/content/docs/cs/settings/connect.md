---
title: Propojení (Connect)
description: Oznámení, mediální servery a vlastní skripty.
---

**Settings > Connect** posílá události jinam. Jmenuje se Connect, stejně jako v Sonarru.

## Agenti

**Agenti pro oznámení**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook a Apprise. **Mediální servery**: Jellyfin a Emby. **Ostatní**: Custom Script. Audiobookshelf agent Connect není.

## Události

Každé připojení si vybírá, které události ho spustí.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## U každého připojení

| Pole | Co dělá |
|---|---|
| Name, Enable | Popisek a zapnuto/vypnuto |
| Include covers | Přiloží obálku knihy, když to agent umí |
| Tags | Spustí se jen u položek s odpovídajícím štítkem |
| Conditions | Pravidla spojená přes AND na polích jako autor nebo velikost. Chybně zapsaná podmínka projde, místo aby umlčela upozornění |
| Priority | Tam, kde to agent podporuje |

**Test** pošle testovací zprávu. **Test All** otestuje všechna připojení.

## Vlastní zprávy

Vlastní zpráva přepíše text pro danou událost. Vyber **Format**, **Cover** (Auto použije obálku knihy, None, nebo Custom URL), napiš **Title** a tělo a kliknutím na proměnnou ji vložíš. Výchozí šablona každé události je jen výchozí bod. Náhled ukáže výsledek a přes připojení můžeš poslat test.

## Na co si dát pozor

- Tajné údaje jako tokeny se ukládají šifrovaně, při úpravě jsou prázdné a když je necháš prázdné, zůstanou zachované. Při změně cíle je musíš zadat znovu.
- Upozornění na neúspěšnou úlohu kvůli výpadku metadat odejde jednou za výpadek, ne jednou za každé selhání, a plánované spuštění ho nepošle nikdy.
- Hlavičky webhooku jsou objekt JSON a ukládají se jako tajný údaj.
