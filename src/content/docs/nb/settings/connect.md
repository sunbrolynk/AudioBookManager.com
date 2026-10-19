---
title: Tilkoblinger (Connect)
description: Varsler, medieservere og egne skript.
---

**Settings > Connect** sender hendelser videre til andre steder. Den heter Connect, som i Sonarr.

## Agenter

**Varslingsagenter**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook og Apprise. **Medieservere**: Jellyfin og Emby. **Annet**: Custom Script. Audiobookshelf er ikke en Connect-agent.

## Hendelser

Hver tilkobling velger hvilke hendelser som utløser den.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Per tilkobling

| Felt | Virkning |
|---|---|
| Name, Enable | Navn og av/på |
| Include covers | Legg ved coveret til boka når agenten kan ta imot det |
| Tags | Utløs bare for elementer med en tagg som passer |
| Conditions | Regler med OG mellom seg, på felt som forfatter eller størrelse. En betingelse med feil i slipper gjennom i stedet for å stoppe et varsel |
| Priority | Der agenten støtter det |

**Test** sender en testmelding. **Test All** tester alle tilkoblingene.

## Egne meldinger

En egen melding skriver om teksten for en hendelse. Velg et **Format**, et **Cover** (Auto bruker coveret til boka, None, eller en Custom URL), skriv **Title** og brødteksten, og klikk på en variabel for å sette den inn. Standardmalen for hver hendelse er et utgangspunkt. Forhåndsvisningen viser resultatet, og du kan sende en test gjennom en tilkobling.

## Fallgruver

- Hemmeligheter som tokens lagres kryptert, er tomme når du redigerer, og beholdes hvis du lar dem stå tomme. Endrer du mottakeren, må du skrive dem inn på nytt.
- Et varsel om feilet oppgave på grunn av brudd hos metadatakilden sendes én gang per brudd, ikke én gang per feil, og en planlagt kjøring sender aldri et.
- Webhook-headere er et JSON-objekt og lagres som en hemmelighet.
