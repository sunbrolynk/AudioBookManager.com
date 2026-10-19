---
title: Eine Metadatenquelle auswählen
description: Eingebaut, gehostet oder dein eigener Libex-Server.
---

:::caution[Kommt mit dem nächsten Release]
Die Wahl der Quelle ist noch in keiner veröffentlichten Version drin. Veröffentlichte Versionen nutzen die öffentliche Libex-Instanz unter libexdb.com und haben dafür keine Einstellung.
:::

Im nächsten Release hat **Settings > Metadata > Source** eine Einstellung **Metadata Source** mit drei Optionen.

| Option | Was sie bedeutet |
|---|---|
| Built-in (Standard) | Libex läuft in ABM selbst. Dafür muss zuerst eine ausgehende Verbindung ausgewählt sein. |
| Hosted (libexdb.com) | ABM fragt die öffentliche Libex-Instanz. |
| Self-hosted | ABM fragt einen Libex-Server, den du angibst. Trag seine **Server URL** ein, zum Beispiel `http://192.168.1.20:8000`. |

**Test** prüft die ausgewählte Quelle, ohne zu speichern. **Status** sagt, ob sie bereit ist. Eine Auswahl, die du noch nicht gespeichert hast, zeigt "Not in use yet - save to switch", bis du speicherst.

## Built-in und die ausgehende Verbindung

Built-in spricht von deinem Rechner aus mit Audible und nutzt deshalb **Settings > General > Proxy & VPN**. Dort wird der Weg festgelegt: ein Proxy, der eingebaute WireGuard-Tunnel, dein eigener VPN-Container oder eine direkte Verbindung, die du bewusst bestätigst. Ist nichts ausgewählt, werden automatische Abfragen blockiert, und das wird auch angezeigt. Ein ausgewählter Weg, der down ist, blockiert Abfragen ebenfalls. Es wird nie auf deine eigene Adresse zurückgefallen. Bei Direct erscheint eine Warnung, dass Audible deine IP-Adresse und die Bücher sieht, die ABM abfragt.

## Hosted und Self-hosted

Bei diesen beiden fragt ABM einen Libex-Server, und der Server spricht mit Audible. Eine Self-hosted-URL wird vor dem Speichern geprüft, eine leere oder unsichere wird abgelehnt. Ein Server, der down ist, wird als nicht erreichbare Metadatenquelle gemeldet, mit seinem Namen.

## Was du nehmen solltest

- Es soll einfach laufen und es stört dich nicht, dass Audible deine Adresse sieht: Built-in mit direkter Verbindung oder Hosted.
- Du willst deine IP nicht gegenüber Audible preisgeben: Built-in über ein VPN oder einen Proxy, oder Hosted.
- Du betreibst schon einen Libex-Server: Self-hosted.
