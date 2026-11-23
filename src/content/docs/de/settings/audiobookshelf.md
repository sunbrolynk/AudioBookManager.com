---
title: Audiobookshelf-Verbindung
description: Verbinde ABM mit deinem Audiobookshelf-Server.
---

Audiobookshelf (ABS) ist der Server, auf dem du hörst. Verbinde ABM damit unter **Settings > Audiobookshelf**, am Rechner und am Handy. Du gibst die Server-Adresse und einen API-Key an, der für einen ABS-Benutzer erstellt wurde.

## Verbindung

- **Enable:** Lässt ABM den Server nutzen. Beim Speichern mit dieser Option prüft ABM den Server zuerst und speichert nicht, wenn eine Prüfung auf Fehlerstufe durchfällt. Die Seite zeigt dir die Gründe. Eine ausgeschaltet gespeicherte Verbindung wird nicht geprüft.
- **Server address:** Wo dein ABS-Server antwortet, zum Beispiel `http://192.168.1.20:13378`. Läuft ABS auf demselben Rechner wie ABM, nimm die LAN-Adresse dieses Rechners oder den Containernamen bzw. die Container-IP, wenn beide in Docker laufen.
- **API key:** Ein API-Key von einem Admin-Benutzer in ABS.
- **Verify TLS certificate:** Standardmäßig an. Nutzt dein Server ein Zertifikat von einer eigenen Zertifizierungsstelle, gib den Pfad zu deren CA-Bundle bei **CA bundle path** an, statt die Prüfung abzuschalten. Lass den Pfad leer, um die Zertifikate des Systems zu nutzen.
- **Test:** Führt die Prüfungen mit dem aus, was auf dem Bildschirm steht, ohne etwas zu speichern.
- **Disconnect:** Fragt dich zur Bestätigung und entfernt dann die gespeicherte Adresse und den Key.

## Wie ABM ABS erreicht

ABM verbindet sich immer direkt mit ABS. Es läuft nie über das VPN oder den Proxy, den du unter [Network](/settings/network/) gewählt hast. Die Adresse wird vor dem Speichern geprüft, und eine unsichere wird abgelehnt. Eine Adresse, die zurück auf den Rechner zeigt, auf dem ABM läuft, eine Link-Local-Adresse und eine Cloud-Metadaten-Adresse werden abgelehnt, ebenso ein Name, der zu einer davon aufgelöst wird. Deine eigenen LAN-Adressen sind in Ordnung. Deshalb braucht ein ABS auf demselben Rechner die LAN-Adresse des Rechners oder seinen Containernamen bzw. seine Container-IP.

## Der API-Key

Der Key wird verschlüsselt gespeichert und nie wieder angezeigt. Lass das Feld beim Speichern oder Testen leer, um den gespeicherten Key zu behalten. Ein gespeicherter Key geht nur an die Adresse, für die er gespeichert wurde. Wenn du die Adresse, Verify TLS oder das CA-Bundle änderst, gib den Key neu ein. Kann ABM den gespeicherten Key nicht mehr lesen (der Verschlüsselungsschlüssel ging verloren oder wurde geändert), zeigt diese Seite dieselbe Meldung wie die anderen Einstellungsseiten und sagt dir, dass du ihn neu eingeben sollst, auch bei ausgeschalteter Verbindung.

## Was geprüft wird

**Version.** ABM braucht ABS 2.37.0 oder neuer und ist auf 2.37.2 getestet. Ein älterer Server oder einer, der keine Version meldet, die ABM versteht, schlägt mit einem Fehler fehl. Bei einem neueren gibt es eine Warnung, weil ABM darauf nicht getestet ist.

**Das Konto.** Der API-Key gehört zu einem ABS-Benutzer, und ABM prüft diesen Benutzer.

- **Fehler, bis es behoben ist:** Der Benutzer muss Admin oder Root sein und die Berechtigung Update haben, dazu Zugriff auf alle Bibliotheken, alle Tags und explizite Inhalte.
- **Warnung, gespeichert wird trotzdem:** Upload ist aus (ABM kann keine Cover besitzen) oder Delete ist aus (ein Buch, das du in ABM löschst, bleibt in ABS, bis du es einschaltest).

## Status

Der Bereich Status zeigt das Ergebnis der letzten Prüfung (Not connected, OK, Warning oder Error), die Server-Version, den Benutzer, zu dem der Key gehört, wann ABM zuletzt geprüft hat, und die Prüfungen selbst. Eine durchgefallene Prüfung zeigt ihren Grund, die bestandenen werden gezählt.

[System > Status](/system/status/) hat bei eingeschalteter Verbindung ebenfalls eine Zeile Audiobookshelf. Sie wird beim Speichern aktualisiert und vom regelmäßigen Health-Check, der alle 6 Stunden läuft. Es ist also keine Live-Abfrage bei jedem Öffnen der Seite. Eine ausgeschaltete Verbindung bleibt dort still, auch wenn ihr gespeicherter Key nicht lesbar ist. Bei eingeschalteter Verbindung erscheint ein gespeicherter Key, den ABM nicht mehr lesen kann, als Fehler, bis du ihn neu eingibst, und eine Verbindung, die noch nicht geprüft wurde, erscheint als Warnung.

## Was ABM entfernt

ABM entfernt in ABS immer nur den Eintrag des Titels. Dateien löscht es nie endgültig.
