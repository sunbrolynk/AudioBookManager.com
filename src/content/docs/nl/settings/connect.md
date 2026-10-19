---
title: Meldingen (Connect)
description: Meldingen, mediaservers en eigen scripts.
---

**Settings > Connect** stuurt gebeurtenissen door naar andere plekken. Het heet Connect, net als in Sonarr.

## Agents

**Meldingsagents**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook en Apprise. **Mediaservers**: Jellyfin en Emby. **Overig**: Custom Script. Audiobookshelf is geen Connect-agent.

## Gebeurtenissen

Per koppeling kies je bij welke gebeurtenissen hij afgaat.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Per koppeling

| Veld | Wat het doet |
|---|---|
| Name, Enable | Naam en aan/uit |
| Include covers | Voegt de boekcover toe als de agent dat kan |
| Tags | Gaat alleen af voor items met een overeenkomende tag |
| Conditions | Regels op velden zoals auteur of grootte, die allemaal moeten kloppen (AND). Een kapotte voorwaarde laat de melding door in plaats van een alert te smoren |
| Priority | Als de agent het ondersteunt |

**Test** stuurt een testbericht. **Test All** test elke koppeling.

## Eigen berichten

Met een eigen bericht herschrijf je de tekst voor een gebeurtenis. Kies een **Format**, een **Cover** (Auto gebruikt de boekcover, None, of een Custom URL), schrijf de **Title** en de tekst, en klik op een variabele om die in te voegen. Het standaardsjabloon voor elke gebeurtenis is een beginpunt. De preview laat het resultaat zien, en je kunt een test via een koppeling versturen.

## Valkuilen

- Geheimen zoals tokens worden versleuteld opgeslagen, zijn leeg bij bewerken, en blijven bewaard als je ze leeg laat. Verander je de bestemming, dan moet je ze opnieuw invullen.
- Een alert over een mislukte taak door een metadatastoring gaat één keer per storing de deur uit, niet per mislukking, en een geplande run stuurt er nooit een.
- Webhook-headers zijn een JSON-object en worden als geheim opgeslagen.
