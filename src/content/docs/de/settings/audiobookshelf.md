---
title: Audiobookshelf-Verbindung
description: Verbinde ABM mit deinem Audiobookshelf-Server.
---

:::caution[Kommt in einem späteren Release]
Die Einstellungsseite dafür ist noch in keiner veröffentlichten Version drin. Die Verbindung lässt sich schon über die API speichern, testen und entfernen, aber sonst nutzt ABM sie noch nicht.
:::

Audiobookshelf (ABS) ist der Server, auf dem du hörst. ABM verbindet sich mit der Server-URL und einem API-Key, der für einen ABS-Benutzer erstellt wurde.

## Version

ABM braucht ABS 2.37.0 oder neuer und ist auf 2.37.2 getestet. Ein älterer Server wird abgelehnt. Bei einem neueren gibt es eine Warnung, weil ABM darauf nicht getestet ist.

## Das Konto

Der API-Key gehört zu einem ABS-Benutzer. ABM prüft diesen Benutzer beim Speichern und beim Testen.

- **Abgelehnt, bis es behoben ist:** Der Benutzer muss Admin oder Root sein und die Berechtigung Update haben, dazu Zugriff auf alle Bibliotheken, alle Tags und explizite Inhalte.
- **Warnung, gespeichert wird trotzdem:** Upload ist aus (ABM kann keine Cover besitzen) oder Delete ist aus (ein Buch, das du in ABM löschst, bleibt in ABS, bis du es einschaltest).

## Wie ABM ABS erreicht

ABM verbindet sich immer direkt mit ABS. Es läuft nie über das VPN oder den Proxy, den du unter [Network](/settings/network/) gewählt hast. Die Server-URL wird vor dem Speichern geprüft, und eine unsichere wird abgelehnt. Eine Adresse, die zurück auf den Rechner zeigt, auf dem ABM läuft, eine Link-Local-Adresse und eine Cloud-Metadaten-Adresse werden abgelehnt, ebenso ein Name, der zu einer davon aufgelöst wird. Deine eigenen LAN-Adressen sind in Ordnung.

## Der API-Key

Der Key wird verschlüsselt gespeichert und nie wieder angezeigt. Lass das Feld beim Speichern oder Testen leer, um den gespeicherten Key zu behalten. Ein gespeicherter Key geht nur an die Adresse, für die er gespeichert wurde. Wenn du die URL, die TLS-Einstellung oder das CA-Bundle änderst, gib den Key neu ein.

## TLS prüfen

Zertifikate werden standardmäßig geprüft. Wenn dein Server ein Zertifikat von einer eigenen Zertifizierungsstelle nutzt, gib den Pfad zu deren CA-Bundle an, statt die Prüfung abzuschalten.

## Test und Disconnect

**Test** prüft einen Server, ohne zu speichern: die Version, die Berechtigungen des Benutzers und seine Bibliotheken. Beim Speichern einer eingeschalteten Verbindung laufen dieselben Prüfungen zuerst, und bei einem Fehler wird das Speichern abgelehnt. Eine ausgeschaltet gespeicherte Verbindung wird nicht geprüft. **Disconnect** entfernt die gespeicherte Verbindung samt Key.

## System Status

Ist eine Verbindung eingeschaltet, zeigt [System > Status](/system/status/) eine Zeile AudioBookShelf mit dem Ergebnis der letzten Prüfung. Sie wird beim Speichern aktualisiert und vom regelmäßigen Health-Check, der alle 6 Stunden läuft. Es ist also keine Live-Abfrage bei jedem Öffnen der Seite. Ein gespeicherter Key, den ABM nicht mehr lesen kann (der Verschlüsselungsschlüssel ging verloren oder wurde geändert), erscheint als Fehler, bis du ihn neu eingibst. Eine Verbindung, die noch nicht geprüft wurde, erscheint als Warnung.

## Was ABM entfernt

ABM entfernt in ABS immer nur den Eintrag des Titels. Dateien löscht es nie endgültig.
