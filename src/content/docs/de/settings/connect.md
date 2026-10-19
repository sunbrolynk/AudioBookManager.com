---
title: Benachrichtigungen (Connect)
description: Benachrichtigungen, Media-Server und eigene Skripte.
---

**Settings > Connect** schickt Ereignisse an andere Stellen. Es heißt Connect, wie in Sonarr.

## Agenten

**Benachrichtigungsagenten**: Discord, Slack, Telegram, Pushover, Pushbullet, Simplepush, ntfy, Gotify, Notifiarr, Email, SendGrid, Webhook und Apprise. **Media-Server**: Jellyfin und Emby. **Sonstiges**: Custom Script. Audiobookshelf ist kein Connect-Agent.

## Ereignisse

Jede Verbindung wählt, welche Ereignisse sie auslösen.

On Grab, On Import, On Upgrade, On Conversion, On Health Issue, On Health Restored, On Task Failed, On Application Update, On Grab Failed, On Import Failed, On Download Failed, On Conversion Failed, On Import List Synced, On Import List New Items, On Audible Download Done, On Audible Download Failed.

## Pro Verbindung

| Feld | Wirkung |
|---|---|
| Name, Enable | Bezeichnung und an/aus |
| Include covers | Das Buchcover anhängen, wenn der Agent das kann |
| Tags | Nur bei Einträgen mit einem passenden Tag auslösen |
| Conditions | Mit UND verknüpfte Regeln auf Felder wie Autor oder Größe. Eine fehlerhafte Bedingung lässt durch, statt eine Meldung zu verschlucken |
| Priority | Wo der Agent das unterstützt |

**Test** schickt eine Testnachricht. **Test All** testet jede Verbindung.

## Eigene Nachrichten

Eine eigene Nachricht schreibt den Text für ein Ereignis um. Wähl ein **Format**, ein **Cover** (Auto nimmt das Buchcover, None oder eine Custom URL), schreib **Title** und Text und klick auf eine Variable, um sie einzufügen. Die Standardvorlage für jedes Ereignis ist ein Ausgangspunkt. Die Vorschau zeigt das Ergebnis, und du kannst über eine Verbindung einen Test schicken.

## Stolperfallen

- Secrets wie Tokens werden verschlüsselt gespeichert, sind beim Bearbeiten leer und bleiben erhalten, wenn du das Feld leer lässt. Wenn du das Ziel änderst, musst du sie neu eingeben.
- Eine Meldung über eine fehlgeschlagene Aufgabe wegen eines Ausfalls der Metadatenquelle geht einmal pro Ausfall raus, nicht einmal pro Fehlschlag, und ein geplanter Lauf schickt nie eine.
- Webhook-Header sind ein JSON-Objekt und werden als Secret gespeichert.
