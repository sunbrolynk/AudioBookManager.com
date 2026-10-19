---
title: FAQ
description: Kurze Antworten auf die Fragen, die zuerst kommen.
---

## Ersetzt ABM Audiobookshelf?

Nein. Audiobookshelf ist der Player und ABM der Bibliothekar. Lass beide auf denselben Bibliotheksordner zeigen und jeden seinen eigenen Job machen.

## Woher kommen die Metadaten?

Von [Libex](https://libexdb.com), einem offenen Metadatendienst für Audible-Daten. ABM aktualisiert sie nach Zeitplan, und ein Cover, das du selbst ausgesucht hast, lässt sich sperren, damit eine Aktualisierung es in Ruhe lässt.

## Brauche ich eine separate Datenbank?

Nein. ABM hält alles in einer SQLite-Datei in `/config`. Sonst musst du nichts betreiben.

## Komme ich auch von außerhalb meines Netzwerks drauf?

Ja, ab 0.17.0. Standardmäßig muss sich alles von außerhalb deines lokalen Netzwerks anmelden, und wenn du **Authentication Required** auf **Enabled** stellst, muss sich jeder anmelden, auch aus deinem eigenen LAN. Hinter nginx, Traefik oder Caddy setzt du `TRUSTED_PROXIES` auf die Adresse des Proxys. Gespeicherte Zugangsdaten sind verschlüsselt. Siehe [Konfiguration](/de/configuration/#reverse-proxy).

## Welche Download-Clients funktionieren?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet und Blackhole.

## Was ist mit Readarr passiert?

Readarr hat Bücher und Hörbücher zusammen verwaltet und wurde inzwischen eingestellt. ABM ist nur für Hörbücher da und baut auf dem Design auf, das die Servarr-Apps geprägt haben.

## Wie installiere ich es unter Unraid, Windows oder macOS?

Noch gar nicht. Docker ist vorerst der einzige Weg. Siehe [ABM installieren](/de/installation/).

## Was kostet es?

Nichts. Es ist kostenlos und Open Source unter GPL-3.0. Wenn es dir einen Abend spart, gibt es ein [Ko-fi](https://ko-fi.com/sunbrolynk).

## Kann ich Titel, Autoren oder Beschreibung eines Buchs bearbeiten?

Nein. Diese Daten kommen von der Metadatenquelle, und ABM bearbeitet sie nicht von Hand. Was du steuerst: das Cover (ein Cover, das du ausgewählt hast, ist gesperrt), wann Aktualisierungen laufen, welche Sidecar-Dateien und Audio-Tags geschrieben werden, Tags und Auto-Tags, Überwachung und Qualitätsprofil. Siehe [Deine Metadaten, deine Entscheidung](/de/metadata/control/).

## Kann ABM Kapitel, Beschreibungen und Tags dort schreiben, wo Audiobookshelf sie liest?

Es schreibt `cover.jpg`, eine `.opf`, `desc.txt` und `reader.txt` und kann Tags in die Audiodateien schreiben. Der Kapitelabgleich mit der veröffentlichten Ausgabe und `.cue`-Dateien kommen mit dem nächsten Release. Siehe [Sidecar-Dateien](/de/using/sidecars/).

## Kann ich meine Dateien konvertieren?

Ja: konvertieren, zusammenführen, aufteilen und Kapitel hinzufügen, alles in einer Warteschlange. Siehe [Konvertierungen](/de/using/conversions/).

## Kann ich meine bestehende Sammlung importieren?

Ja, mit dem [Bibliotheksimport](/de/library-import/). Siehe auch [Eine Bibliothek umziehen](/de/guides/moving-a-library-in/).

## Gibt es ein Layout fürs Handy?

Ja, unter 768px Breite. Siehe [Nutzung am Handy](/de/phone/).

## Kann ABM mehr als ein Audible-Konto nutzen?

Ja. Jedes Konto behält seine eigene Bibliothek. Siehe [Audible](/de/audible/).
