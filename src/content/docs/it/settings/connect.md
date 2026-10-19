---
title: Connect (notifiche)
description: Notifiche, media server e script personalizzati.
---

**Settings > Connect** invia gli eventi da altre parti. Si chiama Connect, come in Sonarr.

## Agenti

**Agenti di notifica**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook e Apprise. **Media server**: Jellyfin ed Emby. **Altro**: Custom Script. Audiobookshelf non è un agente di Connect.

## Eventi

Ogni connessione sceglie quali eventi la fanno scattare.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Per ogni connessione

| Campo | Effetto |
|---|---|
| Name, Enable | Etichetta e attivazione |
| Include covers | Allega la copertina del libro quando l'agente lo supporta |
| Tags | Scatta solo per gli elementi con un tag corrispondente |
| Conditions | Regole in AND su campi come autore o dimensione. Una condizione malformata passa invece di zittire un avviso |
| Priority | Dove l'agente la supporta |

**Test** invia un messaggio di prova. **Test All** prova tutte le connessioni.

## Messaggi personalizzati

Un messaggio personalizzato riscrive il testo di un evento. Scegli un **Format**, una **Cover** (Auto usa la copertina del libro, None, oppure un Custom URL), scrivi il **Title** e il corpo, e clicca su una variabile per inserirla. Il modello predefinito di ogni evento è un punto di partenza. L'anteprima mostra il risultato, e puoi inviare una prova tramite una connessione.

## Da tenere presente

- I segreti come i token vengono salvati cifrati, appaiono vuoti in modifica e restano invariati se li lasci vuoti. Se cambi la destinazione devi reinserirli.
- Un avviso di task fallito per un disservizio dei metadati parte una volta per disservizio, non una volta per errore, e un'esecuzione pianificata non ne manda mai.
- Gli header del webhook sono un oggetto JSON e vengono salvati come segreto.
