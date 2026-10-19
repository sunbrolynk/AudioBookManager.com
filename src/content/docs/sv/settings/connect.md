---
title: Notiser (Connect)
description: Notiser, mediaservrar och egna skript.
---

**Settings > Connect** skickar händelser vidare till andra ställen. Den heter Connect, precis som i Sonarr.

## Agenter

**Notisagenter**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook och Apprise. **Mediaservrar**: Jellyfin och Emby. **Övrigt**: Custom Script. Audiobookshelf är ingen Connect-agent.

## Händelser

Varje anslutning väljer vilka händelser som triggar den.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Per anslutning

| Fält | Effekt |
|---|---|
| Name, Enable | Namn och på/av |
| Include covers | Bifoga bokens omslag när agenten klarar det |
| Tags | Trigga bara för poster med en matchande tagg |
| Conditions | Regler kombinerade med OCH på fält som författare eller storlek. Ett felaktigt villkor släpps igenom i stället för att tysta en varning |
| Priority | Där agenten har stöd för det |

**Test** skickar ett testmeddelande. **Test All** testar varje anslutning.

## Egna meddelanden

Ett eget meddelande skriver om texten för en händelse. Välj ett **Format**, ett **Cover** (Auto använder bokens omslag, None, eller en Custom URL), skriv **Title** och brödtext, och klicka på en variabel för att infoga den. Standardmallen för varje händelse är en utgångspunkt. Förhandsvisningen visar resultatet, och du kan skicka ett test via en anslutning.

## Fallgropar

- Hemligheter som tokens sparas krypterade, är tomma när du redigerar och behålls om du lämnar dem tomma. Byter du mottagare måste de anges igen.
- En varning om en misslyckad uppgift på grund av ett metadataavbrott skickas en gång per avbrott, inte en gång per fel, och en schemalagd körning skickar aldrig någon.
- Webhook-headers är ett JSON-objekt och sparas som en hemlighet.
