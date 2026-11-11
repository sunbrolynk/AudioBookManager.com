---
title: Ersteinrichtung
description: Der Einrichtungsassistent bei einer neuen Installation, Schritt für Schritt.
---

:::caution[Kommt in einem späteren Release]
Der Einrichtungsassistent ist noch in keiner veröffentlichten Version drin. Veröffentlichte Versionen fragen beim ersten Besuch nur nach einem Login.
:::

Bei einer neuen Installation öffnet der erste Besuch einen Einrichtungsassistenten statt der Anmeldeseite. Er führt dich Schritt für Schritt durch alles, was ABM braucht. Er erscheint nur, solange es noch kein Konto gibt. Alle Entscheidungen kannst du später in **Settings** ändern.

Oben läuft eine Kette aus acht Gliedern. Jedes Glied ist ein Schritt, und die Kette zeigt dir, wo du gerade bist:

- **Done**: Der Schritt ist abgeschlossen.
- **Current step**: Der Schritt, der gerade auf dem Bildschirm ist.
- **Not started**: Ein Schritt, den du noch nicht erreicht hast.
- **Later**: Ein Schritt, den du ohne Abschluss verlassen hast. Er bleibt offen, und du kannst ihn jederzeit in **Settings** nachholen.

**Back** geht einen Schritt zurück. **Continue** speichert den Schritt und geht weiter. Bei drei Schritten, Audible, Download client und Indexer, gibt es außerdem **Skip for now**.

## 1. Konto (Account)

Legt deinen Login an und meldet dich an. Du wählst einen Benutzernamen und ein Passwort mit mindestens 8 Zeichen und gibst das Passwort zweimal ein.

| Einstellung | Standard | Wirkung |
|---|---|---|
| Authentication method | Forms (Login Page) | Forms nutzt eine Anmeldeseite. Basic (Browser Popup) nutzt die eigene Anmeldeabfrage deines Browsers |
| Authentication required | Everywhere | Everywhere verlangt die Anmeldung von jeder Adresse aus. Skip on local network lässt Geräte in deinem Heim- oder Büronetz ohne Anmeldung herein |

Das sind dieselben Einstellungen wie unter [Sicherheit und Anmeldung](/de/settings/security/). Das Konto wird angelegt, wenn du **Continue** drückst. Danach bestätigt dieser Schritt es nur noch.

## 2. Netzwerk (Network)

Network ist der Hauptschalter. Nichts, was ABM sendet, verlässt deinen Rechner, bis du hier eine Route wählst. Deshalb hängen die Schritte Metadata und Audible davon ab. Dieser Schritt lässt sich nicht überspringen, und **Continue** bleibt aus, bis die Route vollständig ist.

| Auswahl | Was du ABM gibst |
|---|---|
| Proxy | Typ, Hostname und Port des Proxys und optional Benutzername und Passwort. SOCKS4 wird nicht unterstützt |
| WireGuard | Eine `.conf` von deinem VPN-Anbieter, eingefügt oder hineingezogen. Ist schon ein Tunnel gespeichert, wird dieser genutzt |
| Own VPN container | Nichts einzugeben. Du setzt ein Häkchen, dass der gesamte ABM-Verkehr schon über einen VPN- oder Proxy-Container läuft. ABM kann das nicht prüfen |
| Direct | Nichts einzugeben. Du setzt ein Häkchen, dass jeder Dienst, den ABM kontaktiert, deine eigene IP-Adresse sieht |

**Continue** speichert die Route und zeigt dann die **Public IP**-Prüfung, damit du siehst, dass die Route funktioniert, bevor etwas online geht. Mit **Change route** wählst du neu. Das sind dieselben Einstellungen wie unter [Network](/de/settings/network/).

## 3. Metadaten (Metadata)

Wähle, wo ABM Bücher nachschlägt. Das kommt vor deinen Ordnern, weil der erste Ordner-Scan deine Bücher damit abgleicht.

| Auswahl | Bedeutung |
|---|---|
| Built-in | Libex läuft in ABM. Kein Konto und kein zusätzlicher Dienst. Es nutzt die Route aus dem Schritt Network |
| Hosted | ABM fragt die öffentliche Libex-Instanz unter libexdb.com |
| Self-hosted | ABM fragt deinen eigenen Libex-Server. Trag seine **Server URL** ein. **Test** prüft ihn, ohne zu speichern |

Dazu gibt es das Kontrollkästchen **Local Storage**. Es führt eine dauerhafte, verschlüsselte, lokale Aufzeichnung jedes Buchs, das ABM nachschlägt, sucht, hinzufügt, importiert oder in Discover sieht, und es funktioniert mit allen drei Quellen. Ist es einmal an, lässt es sich nur noch unter **Settings > Metadata** ausschalten.

**Continue** speichert die Quelle und schaltet Local Storage ein, wenn du es angehakt hast. Kann die gewählte Quelle noch nicht nach draußen, zum Beispiel Built-in ohne gewählte Route, sagt der Schritt, warum. Siehe [Eine Metadatenquelle auswählen](/de/metadata/choosing-a-source/).

## 4. Audible (optional)

Meldet dich bei deinem Audible-Konto an, damit ABM deine Bibliothek lesen kann. Das läuft über die Route, die du im Schritt Network gewählt hast. Ist keine Route gewählt oder Audible-Verkehr darauf blockiert, sagt der Schritt das, und **Back to Network** bringt dich zurück. Die Anmeldung selbst ist dieselbe wie unter [Audible](/de/audible/). Bist du angemeldet, zeigt der Schritt das Konto, und **Continue** ist verfügbar.

Du kannst **Skip for now** wählen und Audible später unter **Settings > Audible** verbinden.

## 5. Root-Ordner (Root folder)

Ein Root-Ordner ist der Ort, an dem ABM deine Bücher ablegt. Wähl den Ordner, in dem deine Hörbücher liegen, oder in den neue kommen sollen. Es sollte derselbe Ordner sein, den dein Player (zum Beispiel Audiobookshelf) liest. Du kannst durch die Ordner des Servers blättern und im Browser einen neuen anlegen. Der erste Root-Ordner, den du hinzufügst, wird zum Standard. Dieser Schritt lässt sich nicht überspringen. Weitere Roots fügst du später unter **Settings > Media Management** hinzu.

## 6. Download-Client (optional)

Wähl einen der unterstützten Clients, Usenet oder Torrent: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet oder Blackhole. Trag seine Daten ein, drück **Test** und dann **Save**. Der Client wird direkt im Schritt hinzugefügt. Du kannst weitere hinzufügen, und **Refresh** lädt die Liste neu. Der Schritt gilt als erledigt, sobald ein Client gespeichert ist.

Du kannst **Skip for now** wählen und später unter **Settings > Download Clients** einen Client hinzufügen. Siehe [Download-Clients](/de/settings/download-clients/).

## 7. Indexer (optional)

Wähl einen Indexer-Typ oder ein Preset, füll ihn aus und drück **Test** und **Save**, genau wie beim Download-Client. Der Schritt gilt als erledigt, sobald ein Indexer gespeichert ist. Du kannst **Skip for now** wählen und Indexer später unter **Settings > Indexers** hinzufügen. Siehe [Indexer](/de/settings/indexers/).

## 8. Abschluss (Finish)

Eine Zusammenfassung listet jeden Schritt mit dem, was eingestellt wurde: deine Network-Route (und die Public IP, falls sie geprüft wurde), die Metadatenquelle, das Audible-Konto, den Root-Ordner sowie den Client und den Indexer, die du hinzugefügt hast. Jeder Schritt, den du auf später verschoben hast, steht als offen da. Ist nichts offen, sagt die Zusammenfassung, dass jedes Glied leuchtet. **Go to Library** schließt den Assistenten.

Alles, was du übersprungen hast, findest du in **Settings**, wann immer du es willst. Als Nächstes bieten sich ein Qualitätsprofil und deine Bücher an: siehe [Schnellstart](/de/getting-started/quick-start/).
