---
title: Download-Clients
description: Unterstützte Clients, Verarbeitung abgeschlossener Downloads und Remote Path Mappings.
---

**Settings > Download Clients** verbindet das Programm, das die Downloads erledigt.

## Unterstützte Clients

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet und Blackhole (ein überwachter Ordner). Das ist die vollständige Liste.

## Felder

Welche Felder angezeigt werden, hängt vom Client ab.

| Feld | Wirkung |
|---|---|
| Name | Bezeichnung |
| Host, Port, URL Base | Wo der Client lauscht |
| Use SSL, Verify TLS certificate | HTTPS und ob das Zertifikat geprüft wird |
| Username, Password, API Key | Zugangsdaten. Ein gespeichertes Secret wird nie angezeigt |
| Category | Kategorie oder Label, das ABM seinen Downloads gibt, zum Beispiel `audiobooks` |
| Watch Folder, Directory | Blackhole: wo Dateien abgelegt werden und wo fertige Dateien auftauchen |
| Client Priority | Welcher Client gewinnt, wenn mehrere passen |
| Remove from Client, Also Delete Files, Remove Failed | Was ABM nach einem Import oder Fehlschlag aus dem Client entfernt |
| Queue Page Remove Action | Was das Entfernen einer Zeile auf der Seite Queue bewirkt: nur aus ABM ausblenden, aus dem Client entfernen und die Dateien behalten, oder entfernen und die Dateien löschen |

**Test** prüft die Verbindung. Ein deaktivierter Client ist kein fehlerhafter. Ein Client mit Fehlern wird mit wachsendem Abstand erneut versucht.

## Verarbeitung abgeschlossener Downloads

| Einstellung | Standard | Wirkung |
|---|---|---|
| Enable | an | Fertige Downloads automatisch importieren |
| Redownload Failed | an | Ein fehlgeschlagenes Release auf die Blocklist setzen und erneut suchen |
| Redownload Failed from Interactive Search | an | Dasselbe für Releases, die du von Hand ausgewählt hast |

Ob Importe per Hardlink oder Kopie laufen, legt **Use Hardlinks instead of Copy** in der [Medienverwaltung](/de/settings/media-management/) fest. Ist der Ordner des Clients nicht derselbe Pfad, den ABM sieht, leg ein Remote Path Mapping an.

## Remote Path Mappings

Meldet der Client `/downloads/audiobooks` und ABM sieht den Ordner als `/data/audiobooks`, leg eine Zuordnung an.

| Feld | Wirkung |
|---|---|
| Host | Der Client-Host, für den die Zuordnung gilt |
| Remote Path | Der Pfad, wie der Client ihn meldet |
| Local Path | Derselbe Ordner, wie ABM ihn sieht |

## Stolperfallen

- Ein nicht lesbarer Unterordner in einem fertigen Download stoppt den Import dieses Downloads komplett. Aus dem Client wird nichts entfernt, und es wird später erneut versucht.
- Docker: Mounte den Download-Ordner nach Möglichkeit in beiden Containern unter demselben Pfad. Zuordnungen sind der Notbehelf.
