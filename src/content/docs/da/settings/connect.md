---
title: Notifikationer (Connect)
description: Notifikationer, medieservere og egne scripts.
---

**Settings > Connect** sender hændelser videre til andre steder. Det hedder Connect, ligesom i Sonarr.

## Agenter

**Notifikationsagenter**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook og Apprise. **Medieservere**: Jellyfin og Emby. **Andet**: Custom Script. Audiobookshelf er ikke en Connect-agent.

## Hændelser

Hver forbindelse vælger, hvilke hændelser der udløser den.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Pr. forbindelse

| Felt | Virkning |
|---|---|
| Name, Enable | Navn og til/fra |
| Include covers | Vedhæft bogens cover, når agenten kan |
| Tags | Udløs kun for elementer med et matchende tag |
| Conditions | Regler kombineret med OG på felter som forfatter eller størrelse. En betingelse med fejl i slipper igennem i stedet for at gøre en advarsel tavs |
| Priority | Der, hvor agenten understøtter det |

**Test** sender en testbesked. **Test All** tester alle forbindelser.

## Egne beskeder

En egen besked omskriver teksten for en hændelse. Vælg et **Format**, et **Cover** (Auto bruger bogens cover, None, eller en Custom URL), skriv **Title** og brødtekst, og klik på en variabel for at indsætte den. Standardskabelonen for hver hændelse er et udgangspunkt. Forhåndsvisningen viser resultatet, og du kan sende en test gennem en forbindelse.

## Faldgruber

- Hemmeligheder som tokens bliver gemt krypteret, står tomme, når du redigerer, og bliver beholdt, hvis du lader dem stå tomme. Ændrer du destinationen, skal de skrives ind igen.
- En advarsel om en fejlet opgave på grund af et nedbrud hos metadatakilden bliver sendt én gang pr. nedbrud, ikke én gang pr. fejl, og en planlagt kørsel sender aldrig en.
- Webhook-headers er et JSON-objekt og bliver gemt som en hemmelighed.
