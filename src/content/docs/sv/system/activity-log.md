---
title: Aktivitetslogg och händelser
description: Registret över vad som har hänt, och hur det skiljer sig från loggarna.
---

ABM håller tre sorters register.

| Var | Vad det är |
|---|---|
| **System > Events** och **System > Activity Log** | Aktivitetsloggen: en lista i databasen över saker som har hänt. Events är vyn filtrerad på allvarlighetsgrad. Activity Log (med rubriken Activity History) filtrerar på kategori, söker i meddelandet och visar tillståndet före och efter |
| **System > Log Files** | Textloggfiler med alla detaljer. Se [Loggar](/sv/system/logs/) |
| **Activity > History** | Bara nedladdningshistorik. Se [Aktivitet](/sv/using/activity/) |

## Vad som registreras

Färdiga bakgrundsuppgifter (en sammanfattningsrad var), manuella ändringar av klienter, indexerare, profiler, taggar, notiser, rotmappar och så vidare, hämtningar (vem som startade dem), konverteringar, misslyckade Audible-nedladdningar, säkerhetskopior, inloggningar och misslyckade inloggningar, och ett steg vid uppstart som misslyckades.

Kategorier: Books, Authors, Series, Downloads, Imports, Conversions, Files, Audible, Security och System.

## Integritet

Poster innehåller aldrig URL:er, värdar, användarnamn, lösenord, nycklar, tokens eller rå feltext från en klient eller tjänst. Objekt namnges med det namn du har gett dem. När inställningar sparas listas vilka inställningar som ändrades, inte deras värden. Inloggningar sparar bara IP-adressen. Misslyckade inloggningar från samma adress inom 15 minuter slås ihop till en rad med antal försök.

## Tyst med avsikt

En schemalagd körning som inte hade något att göra skriver ingenting. En upprepning av samma fel skriver ingenting, men en återhämtning gör det. En manuell körning registreras alltid.

## Lagringstid

**Activity Log Retention** i General raderar poster efter 90 dagar som standard. 0 behåller dem. Loggfiler har egen lagringstid (30 dagar).

## Visa logg (View log)

:::caution[Kommer i en senare version]
Länkar till loggen från poster finns inte i någon släppt version än.
:::

Poster länkar till loggen de kom från och öppnar den på rätt rad. Om loggen är borta säger posten "Log no longer kept".
